#!/usr/bin/env bun
import plugin from "bun-plugin-tailwind";
import { existsSync } from "fs";
import { rm } from "fs/promises";
import path from "path";

type BuildTarget = Extract<Bun.BuildConfig["target"], string>;
type BuildFormat = NonNullable<Bun.BuildConfig["format"]>;
type PackageMode = NonNullable<Bun.BuildConfig["packages"]>;
type SourcemapMode = Exclude<
  NonNullable<Bun.BuildConfig["sourcemap"]>,
  boolean
>;
type MinifyOptions = Exclude<Bun.BuildConfig["minify"], boolean | undefined>;
type CliBuildConfig = Partial<
  Pick<
    Bun.BuildConfig,
    | "outdir"
    | "sourcemap"
    | "target"
    | "format"
    | "splitting"
    | "packages"
    | "publicPath"
    | "env"
    | "conditions"
    | "external"
    | "banner"
    | "footer"
  >
> & {
  define?: NonNullable<Bun.BuildConfig["define"]>;
  minify?: Bun.BuildConfig["minify"];
};

const buildTargets = [
  "browser",
  "bun",
  "node",
] as const satisfies readonly BuildTarget[];
const buildFormats = [
  "esm",
  "cjs",
  "iife",
] as const satisfies readonly BuildFormat[];
const packageModes = [
  "bundle",
  "external",
] as const satisfies readonly PackageMode[];
const sourcemapModes = [
  "none",
  "linked",
  "inline",
  "external",
] as const satisfies readonly SourcemapMode[];
const minifyKeys = [
  "whitespace",
  "syntax",
  "identifiers",
  "keepNames",
] as const;
type MinifyKey = (typeof minifyKeys)[number];

if (process.argv.includes("--help") || process.argv.includes("-h")) {
  console.log(`
🏗️  Bun Build Script

Usage: bun run build.ts [options]

Common Options:
  --outdir <path>          Output directory (default: "dist")
  --minify                 Enable minification (or --minify.whitespace, --minify.syntax, etc)
  --sourcemap <type>      Sourcemap type: none|linked|inline|external
  --target <target>        Build target: browser|bun|node
  --format <format>        Output format: esm|cjs|iife
  --splitting              Enable code splitting
  --packages <type>        Package handling: bundle|external
  --public-path <path>     Public path for assets
  --env <mode>             Environment handling: inline|disable|prefix*
  --conditions <list>      Package.json export conditions (comma separated)
  --external <list>        External packages (comma separated)
  --banner <text>          Add banner text to output
  --footer <text>          Add footer text to output
  --define.KEY <value>     Define a global constant (e.g. --define.VERSION=1.0.0)
  --help, -h               Show this help message

Example:
  bun run build.ts --outdir=dist --minify --sourcemap=linked --external=react,react-dom
`);
  process.exit(0);
}

const toCamelCase = (str: string): string =>
  str.replace(/-([a-z])/g, (_match, letter: string) => letter.toUpperCase());

function requireValue(value: string | undefined, option: string): string {
  if (value === undefined || value.length === 0) {
    throw new Error(`Missing value for --${option}`);
  }

  return value;
}

function parseBoolean(
  value: string | undefined,
  fallback: boolean,
  option: string,
): boolean {
  if (value === undefined) {
    return fallback;
  }

  if (value === "true") {
    return true;
  }

  if (value === "false") {
    return false;
  }

  throw new Error(
    `Expected a boolean value for --${option}, received "${value}"`,
  );
}

function parseList(value: string | undefined, option: string): string[] {
  return requireValue(value, option)
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function parseEnum<T extends readonly string[]>(
  value: string | undefined,
  option: string,
  allowedValues: T,
): T[number] {
  const resolvedValue = requireValue(value, option);

  if ((allowedValues as readonly string[]).includes(resolvedValue)) {
    return resolvedValue as T[number];
  }

  throw new Error(`Invalid value for --${option}: "${resolvedValue}"`);
}

function parseEnv(
  value: string | undefined,
): NonNullable<Bun.BuildConfig["env"]> {
  const resolvedValue = requireValue(value, "env");

  if (
    resolvedValue === "inline" ||
    resolvedValue === "disable" ||
    resolvedValue.endsWith("*")
  ) {
    return resolvedValue as NonNullable<Bun.BuildConfig["env"]>;
  }

  throw new Error(`Invalid value for --env: "${resolvedValue}"`);
}

function isMinifyKey(value: string): value is MinifyKey {
  return (minifyKeys as readonly string[]).includes(value);
}

function createMinifyOptions(
  currentValue: CliBuildConfig["minify"],
): MinifyOptions {
  if (typeof currentValue === "object" && currentValue !== null) {
    return { ...currentValue };
  }

  if (currentValue === true) {
    return {
      whitespace: true,
      syntax: true,
      identifiers: true,
      keepNames: false,
    };
  }

  if (currentValue === false) {
    return {
      whitespace: false,
      syntax: false,
      identifiers: false,
      keepNames: false,
    };
  }

  return {};
}

function setConfigOption(
  config: CliBuildConfig,
  option: string,
  value: string | undefined,
  isNegated: boolean,
): void {
  if (option.startsWith("define.")) {
    if (isNegated) {
      throw new Error(`--no-${option} is not supported`);
    }

    const defineKey = option.slice("define.".length);
    config.define ??= {};
    config.define[defineKey] = requireValue(value, option);
    return;
  }

  if (option.startsWith("minify.")) {
    const minifyKey = option.slice("minify.".length);
    if (!isMinifyKey(minifyKey)) {
      throw new Error(`Unsupported minify option --${option}`);
    }

    const minifyOptions = createMinifyOptions(config.minify);
    minifyOptions[minifyKey] = parseBoolean(value, !isNegated, option);
    config.minify = minifyOptions;
    return;
  }

  switch (option) {
    case "outdir":
      config.outdir = requireValue(value, option);
      return;
    case "minify":
      config.minify = parseBoolean(value, !isNegated, option);
      return;
    case "sourcemap":
      config.sourcemap = isNegated
        ? false
        : value === undefined
          ? true
          : value === "true" || value === "false"
            ? value === "true"
            : parseEnum(value, option, sourcemapModes);
      return;
    case "target":
      if (isNegated) {
        throw new Error(`--no-${option} is not supported`);
      }
      config.target = parseEnum(value, option, buildTargets);
      return;
    case "format":
      if (isNegated) {
        throw new Error(`--no-${option} is not supported`);
      }
      config.format = parseEnum(value, option, buildFormats);
      return;
    case "splitting":
      config.splitting = parseBoolean(value, !isNegated, option);
      return;
    case "packages":
      if (isNegated) {
        throw new Error(`--no-${option} is not supported`);
      }
      config.packages = parseEnum(value, option, packageModes);
      return;
    case "publicPath":
      if (isNegated) {
        throw new Error(`--no-${option} is not supported`);
      }
      config.publicPath = requireValue(value, option);
      return;
    case "env":
      if (isNegated) {
        throw new Error(`--no-${option} is not supported`);
      }
      config.env = parseEnv(value);
      return;
    case "conditions":
      if (isNegated) {
        throw new Error(`--no-${option} is not supported`);
      }
      config.conditions = parseList(value, option);
      return;
    case "external":
      if (isNegated) {
        throw new Error(`--no-${option} is not supported`);
      }
      config.external = parseList(value, option);
      return;
    case "banner":
      if (isNegated) {
        throw new Error(`--no-${option} is not supported`);
      }
      config.banner = requireValue(value, option);
      return;
    case "footer":
      if (isNegated) {
        throw new Error(`--no-${option} is not supported`);
      }
      config.footer = requireValue(value, option);
      return;
    case "define":
      throw new Error("Use --define.KEY=value to set define entries");
    default:
      throw new Error(`Unsupported option --${option}`);
  }
}

function parseArgs(): CliBuildConfig {
  const config: CliBuildConfig = {};
  const args = process.argv.slice(2);

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === undefined) continue;
    if (!arg.startsWith("--")) continue;

    const isNegated = arg.startsWith("--no-");
    const normalizedArg = isNegated ? `--${arg.slice(5)}` : arg;
    const normalizedBody = normalizedArg.slice(2);
    const separatorIndex = normalizedBody.indexOf("=");

    let rawKey =
      separatorIndex === -1
        ? normalizedBody
        : normalizedBody.slice(0, separatorIndex);
    let value =
      separatorIndex === -1
        ? undefined
        : normalizedBody.slice(separatorIndex + 1);

    if (value === undefined && !isNegated) {
      const nextArg = args[i + 1];
      if (nextArg !== undefined && !nextArg.startsWith("--")) {
        value = nextArg;
        i += 1;
      }
    }

    rawKey = toCamelCase(rawKey);
    setConfigOption(config, rawKey, value, isNegated);
  }

  return config;
}

const formatFileSize = (bytes: number): string => {
  const units = ["B", "KB", "MB", "GB"];
  let size = bytes;
  let unitIndex = 0;

  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex++;
  }

  return `${size.toFixed(2)} ${units[unitIndex]}`;
};

console.log("\n🚀 Starting build process...\n");

const cliConfig = parseArgs();
const outdir = cliConfig.outdir ?? path.join(process.cwd(), "dist");

if (existsSync(outdir)) {
  console.log(`🗑️ Cleaning previous build at ${outdir}`);
  await rm(outdir, { recursive: true, force: true });
}

const start = performance.now();

const entrypoints = [...new Bun.Glob("**.html").scanSync("src")]
  .map((a) => path.resolve("src", a))
  .filter((dir) => !dir.includes("node_modules"));
console.log(
  `📄 Found ${entrypoints.length} HTML ${entrypoints.length === 1 ? "file" : "files"} to process\n`,
);

const result = await Bun.build({
  entrypoints,
  outdir,
  plugins: [plugin],
  minify: true,
  target: "browser",
  sourcemap: "linked",
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
  ...cliConfig,
});

const end = performance.now();

const outputTable = result.outputs.map((output) => ({
  File: path.relative(process.cwd(), output.path),
  Type: output.kind,
  Size: formatFileSize(output.size),
}));

console.table(outputTable);
const buildTime = (end - start).toFixed(2);

console.log(`\n✅ Build completed in ${buildTime}ms\n`);
