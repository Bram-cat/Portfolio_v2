import Image from "next/image";
import { Github, ExternalLink, Linkedin, Mail, ArrowRight, Sparkles, Zap, Code2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Animated gradient background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-black/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500" />
              <span className="font-semibold text-lg">Bram</span>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <a href="#about">About</a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="#projects">Projects</a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="#contact">Contact</a>
              </Button>
              <Button size="sm" className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200" asChild>
                <a href="https://github.com/Bram-cat" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            {/* Status Badge with Green Dot */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-black/50 backdrop-blur-sm">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </div>
              <span className="text-sm font-medium">Available for opportunities</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="block">Full Stack Developer</span>
                <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Building the Future
                </span>
              </h1>
              <p className="mx-auto max-w-2xl text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                Computer Science student at UPEI, crafting innovative mobile and web applications
                with modern technologies. Turning ideas into elegant code, one commit at a time.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200" asChild>
                <a href="#projects">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">
                  Get In Touch
                </a>
              </Button>
            </div>

            {/* Profile Image */}
            <div className="relative inline-block mt-12">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-2xl opacity-20 animate-pulse" />
              <Image
                src="/pfp.png"
                alt="Profile"
                width={200}
                height={200}
                className="relative rounded-full border-4 border-white dark:border-gray-900 shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="outline" className="text-sm">About Me</Badge>
              <h2 className="text-4xl font-bold">Passionate About Creating Impact</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  My journey in software development began with a curiosity for how technology shapes our world.
                  As a Computer Science student at UPEI, I&apos;ve transformed that curiosity into practical skills,
                  building real-world applications that solve meaningful problems.
                </p>
                <p>
                  I specialize in the modern JavaScript ecosystem—React Native for mobile, Next.js for web,
                  with robust backends using Supabase and authentication via Clerk. From AI-powered apps to
                  local business websites, each project expands my expertise in full-stack development.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                      <Code2 className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle>Education</CardTitle>
                      <CardDescription>Currently pursuing</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold">Bachelor of Science in Computer Science</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">University of Prince Edward Island (UPEI)</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Tech Stack</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["React Native", "Next.js", "TypeScript", "Supabase", "Clerk", "Stripe", "Tailwind CSS"].map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Featured Work</Badge>
            <h2 className="text-4xl font-bold mb-4">Projects That Make a Difference</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              From AI-powered applications to intuitive web experiences, here are some of my recent works
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* VisualAIze - AI Vision Board Generator */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
                    AI Powered
                  </Badge>
                </div>
                <CardTitle className="text-2xl">VisualAIze</CardTitle>
                <CardDescription>AI Vision Board Generator</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 dark:text-gray-400">
                  An innovative AI-powered application that transforms keywords and user images into personalized
                  vision boards, helping users visualize and manifest their goals through intelligent image generation.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "AI/ML", "TypeScript", "Tailwind CSS"].map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button size="sm" variant="outline" className="flex-1">
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </Button>
                <Button size="sm" className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Demo
                </Button>
              </CardFooter>
            </Card>

            {/* Lovelock Website */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-purple-500/20">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl overflow-hidden bg-white flex-shrink-0">
                    <Image src="/lovelock.png" alt="Lovelock" width={48} height={48} className="w-full h-full object-cover" />
                  </div>
                  <Badge className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                    <Heart className="h-3 w-3 mr-1" />
                    Featured
                  </Badge>
                </div>
                <CardTitle className="text-2xl">Lovelock</CardTitle>
                <CardDescription>Numerology & Relationship Platform</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 dark:text-gray-400">
                  Complete web platform combining ancient numerology with modern psychology. Offers AI-powered
                  personality insights, love compatibility assessment, and trust analysis with secure authentication
                  and payment processing.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "Clerk", "Supabase", "AI/ML", "Stripe"].map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button size="sm" variant="outline" className="flex-1" asChild>
                  <a href="https://github.com/Bram-cat/lovelock" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </a>
                </Button>
                <Button size="sm" className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600" asChild>
                  <a href="https://lovelock.it.com" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visit Site
                  </a>
                </Button>
              </CardFooter>
            </Card>

            {/* Fadez Barbershop */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl overflow-hidden bg-white flex-shrink-0">
                    <Image src="/fadezlogo.png" alt="Fadez" width={48} height={48} className="w-full h-full object-cover" />
                  </div>
                  <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                    Local Business
                  </Badge>
                </div>
                <CardTitle className="text-2xl">Fadez Barbershop</CardTitle>
                <CardDescription>Modern Business Website</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 dark:text-gray-400">
                  A sleek, performance-optimized website bringing a local barbershop into the digital age.
                  Features stunning visuals, smooth animations, and an intuitive user experience.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Vite", "React", "Tailwind CSS", "Framer Motion"].map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button size="sm" variant="outline" className="w-full" asChild>
                  <a href="https://github.com/Bram-cat/fadez-new1" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="outline" className="mb-4">Get In Touch</Badge>
            <h2 className="text-4xl font-bold mb-4">Let&apos;s Build Something Amazing</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              I&apos;m always open to new opportunities, collaborations, and interesting projects.
              Feel free to reach out!
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" variant="outline" asChild>
                <a href="https://github.com/Bram-cat" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button size="lg" className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200" asChild>
                <a href="mailto:your.email@example.com">
                  <Mail className="h-5 w-5 mr-2" />
                  Send Email
                </a>
              </Button>
            </div>

            {/* Activity Indicator with Green Dot */}
            <div className="mt-12 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </div>
              <span className="text-xs text-gray-600 dark:text-gray-400">
                Usually responds within 24 hours
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500" />
                <span className="font-semibold text-lg">Bram</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Full Stack Developer building the future with modern technologies.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li><a href="#about" className="hover:text-black dark:hover:text-white transition-colors">About</a></li>
                <li><a href="#projects" className="hover:text-black dark:hover:text-white transition-colors">Projects</a></li>
                <li><a href="#contact" className="hover:text-black dark:hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <div className="flex gap-4">
                <a href="https://github.com/Bram-cat" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="mailto:your.email@example.com" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-600 dark:text-gray-400">
            <p>© {new Date().getFullYear()} Bram. Built with Next.js, Tailwind CSS, and shadcn/ui.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
