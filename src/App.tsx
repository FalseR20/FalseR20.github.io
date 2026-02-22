import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import "./index.css";

import logo from "./logo.svg";
import reactLogo from "./react.svg";

export function App() {
  return (
    <div className="container mx-auto p-8 text-center relative z-10">
      <div className="flex justify-center items-center gap-8 mb-8">
        <img
          src={logo}
          alt="Bun Logo"
          className="h-36 p-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#646cffaa] scale-120"
        />
        <img
          src={reactLogo}
          alt="React Logo"
          className="h-36 p-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa] animate-[spin_20s_linear_infinite]"
        />
      </div>
      <Card>
        <CardHeader className="gap-4">
          <CardTitle className="text-3xl font-bold">Frontend-Only Bun + React</CardTitle>
          <CardDescription>
            This app now runs as a client-only frontend. Edit{" "}
            <code className="rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono">src/App.tsx</code> to build your UI.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-left">
          <p className="text-sm text-muted-foreground">
            The previous Bun API demo was removed. You can deploy the built <code className="font-mono">dist/</code>{" "}
            output as static files.
          </p>
          <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
            <Button>Primary action</Button>
            <Button variant="outline">Secondary action</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
