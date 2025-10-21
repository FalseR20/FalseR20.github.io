<template>
  <div class="min-h-screen bg-white text-gray-900 font-sans">
    <!-- Main Container -->
    <div class="max-w-4xl mx-auto px-6 py-12">
      <!-- Header Section -->
      <header class="mb-16 animate-fade-in">
        <!-- Large Name Display -->
        <div class="mb-8">
          <h1 class="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-none mb-4">
            <span class="block animate-fade-in-up" style="animation-delay: 0.1s;">Mikhail</span>
            <span class="block animate-fade-in-up" style="animation-delay: 0.2s;">Krupenkov</span>
          </h1>
        </div>
        
        <!-- Title and Contact -->
        <div class="space-y-4 animate-fade-in-up" style="animation-delay: 0.3s;">
          <p class="text-xl sm:text-2xl text-gray-600 font-light">Python & Flutter Developer</p>
          
          <!-- Contact Links -->
          <div class="flex flex-wrap items-center gap-4 sm:gap-6 text-base sm:text-lg">
            <a href="mailto:work@falser.dev" 
               class="text-gray-600 hover:text-gray-900 transition-all duration-200 hover:underline hover-lift">
              work@falser.dev
            </a>
            <a href="https://linkedin.com/in/falser" 
               target="_blank" 
               rel="noopener noreferrer"
               class="text-gray-600 hover:text-gray-900 transition-all duration-200 hover:underline hover-lift">
              LinkedIn
            </a>
            <a href="https://github.com/FalseR20" 
               target="_blank" 
               rel="noopener noreferrer"
               class="text-gray-600 hover:text-gray-900 transition-all duration-200 hover:underline hover-lift">
              GitHub
            </a>
            <span class="text-gray-600">Belarus, Brest</span>
          </div>
        </div>
      </header>

      <!-- Main Content -->
      <main class="space-y-16">
        <!-- Work Experience -->
        <section class="animate-fade-in-up" style="animation-delay: 0.4s;">
          <h2 class="text-2xl sm:text-3xl font-bold mb-8 text-gray-900">Work Experience</h2>
          
          <div class="space-y-8">
            <!-- Job 1 -->
            <div class="group">
              <div class="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                <div>
                  <h3 class="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                    Middle Full-Stack Developer
                  </h3>
                  <p class="text-lg text-gray-600">Belarusian Railways</p>
                </div>
                <span class="text-gray-500 text-sm md:text-base mt-1 md:mt-0">
                  Jul 2024 – Jul 2026
                </span>
              </div>
              <p class="text-gray-500 text-sm mb-3">Full time, in-office</p>
              <p class="text-gray-600 mb-3">
                <span class="font-medium">Stack:</span> Flutter, Angular
              </p>
              <ul class="space-y-1">
                <li class="text-gray-600 flex items-start">
                  <span class="text-blue-500 mr-2 mt-1">•</span>
                  Developed mobile application designed for partners of Belarusian Railways to manage transportation and be aware of the movements
                </li>
              </ul>
            </div>

            <!-- Job 2 -->
            <div class="group">
              <div class="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                <div>
                  <h3 class="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                    Junior Python Backend Developer
                  </h3>
                  <p class="text-lg text-gray-600">Intelligent Semantic Systems</p>
                </div>
                <span class="text-gray-500 text-sm md:text-base mt-1 md:mt-0">
                  Mar 2022 – Sep 2023
                </span>
              </div>
              <p class="text-gray-500 text-sm mb-3">Half time, remotely</p>
              <p class="text-gray-600 mb-3">
                <span class="font-medium">Stack:</span> Flask, Flask-RestX, SQLAlchemy, PostgreSQL, gunicorn, Docker, websockets
              </p>
              <ul class="space-y-1">
                <li class="text-gray-600 flex items-start">
                  <span class="text-blue-500 mr-2 mt-1">•</span>
                  Developed server with pipelines for ML processing
                </li>
                <li class="text-gray-600 flex items-start">
                  <span class="text-blue-500 mr-2 mt-1">•</span>
                  Developed Flask-server for translation and preprocessing knowledge formats
                </li>
                <li class="text-gray-600 flex items-start">
                  <span class="text-blue-500 mr-2 mt-1">•</span>
                  Developed python libraries, which use websockets for building clients
                </li>
              </ul>
            </div>
          </div>
        </section>

        <!-- Education -->
        <section class="animate-fade-in-up" style="animation-delay: 0.5s;">
          <h2 class="text-2xl sm:text-3xl font-bold mb-8 text-gray-900">Education</h2>
          
          <div class="group">
            <div class="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
              <div>
                <h3 class="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                  Brest State Technical University
                </h3>
                <p class="text-lg text-gray-600">
                  <span class="font-medium">Specialty:</span> Computer Science
                </p>
              </div>
              <span class="text-gray-500 text-sm md:text-base mt-1 md:mt-0">
                2020 – 2024
              </span>
            </div>
          </div>
        </section>

        <!-- Languages -->
        <section class="animate-fade-in-up" style="animation-delay: 0.6s;">
          <h2 class="text-2xl sm:text-3xl font-bold mb-8 text-gray-900">Languages</h2>
          
          <div class="space-y-4">
            <div class="group">
              <h3 class="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                English
              </h3>
              <p class="text-gray-600">B2</p>
            </div>
            <div class="group">
              <h3 class="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                Russian
              </h3>
              <p class="text-gray-600">Native</p>
            </div>
          </div>
        </section>

        <!-- Hard Skills -->
        <section class="animate-fade-in-up" style="animation-delay: 0.7s;">
          <h2 class="text-2xl sm:text-3xl font-bold mb-8 text-gray-900">Hard Skills</h2>
          
          <div class="space-y-6">
            <div class="group">
              <h3 class="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 mb-2">
                Languages, frameworks & libs
              </h3>
              <p class="text-gray-600">Python, Django, Django REST Framework, Flask, FastAPI, SQLAlchemy, WSGI</p>
            </div>
            
            <div class="group">
              <h3 class="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 mb-2">
                Technologies
              </h3>
              <p class="text-gray-600">Git, Docker, SQL and NoSQL databases, CI tools, Cloud technologies</p>
            </div>
            
            <div class="group">
              <h3 class="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 mb-2">
                Other
              </h3>
              <p class="text-gray-600">Flutter, React, Angular</p>
            </div>
          </div>
        </section>
      </main>

      <!-- Footer -->
      <footer class="mt-20 pt-8 border-t border-gray-200 animate-fade-in-up" style="animation-delay: 0.8s;">
        <p class="text-gray-500 text-sm text-center">
          Built with <span class="text-red-500">♥</span> using Vue.js
        </p>
      </footer>
    </div>
  </div>
</template>

<script setup>
// No reactive data needed for this static design
</script>

<style scoped>
/* Enhanced animations and hover effects */
.group:hover h3 {
  transform: translateX(4px);
  color: #3b82f6;
}

.group h3 {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Smooth transitions for all interactive elements */
a {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

/* Enhanced hover effects for links */
a:hover {
  transform: translateY(-1px);
}

/* Subtle underline animation */
a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 1px;
  bottom: -2px;
  left: 0;
  background-color: #3b82f6;
  transition: width 0.3s ease;
}

a:hover::after {
  width: 100%;
}

/* Enhanced job card hover effects */
.group {
  transition: all 0.3s ease;
  padding: 0.5rem;
  margin: -0.5rem;
  border-radius: 0.5rem;
}

.group:hover {
  background-color: #f8fafc;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

/* Staggered animation delays for job items */
.group:nth-child(1) {
  animation-delay: 0.1s;
}

.group:nth-child(2) {
  animation-delay: 0.2s;
}

/* Enhanced responsive typography */
@media (max-width: 1024px) {
  h1 {
    font-size: 5rem;
    line-height: 0.9;
  }
}

@media (max-width: 768px) {
  h1 {
    font-size: 4rem;
    line-height: 0.9;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 3rem;
    line-height: 0.9;
  }
  
  .space-y-16 > * + * {
    margin-top: 3rem;
  }
}

/* Improved focus states */
a:focus-visible {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
  border-radius: 4px;
}

/* Enhanced selection styles */
::selection {
  background-color: #3b82f6;
  color: white;
}

/* Smooth page load animation */
@keyframes pageLoad {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.min-h-screen {
  animation: pageLoad 0.8s ease-out;
}

/* Subtle gradient text effect for name */
h1 span:first-child {
  background: linear-gradient(135deg, #1f2937 0%, #374151 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

h1 span:last-child {
  background: linear-gradient(135deg, #374151 0%, #4b5563 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>