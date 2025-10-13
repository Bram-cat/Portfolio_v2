"use client";

import Image from "next/image";
import { Github, ExternalLink, Linkedin, Mail, ArrowRight, Sparkles, Terminal, Rocket, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated neon grid background */}
      <div className="fixed inset-0 -z-10">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

        {/* Mouse follow glow */}
        <div
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-30 pointer-events-none transition-all duration-300"
          style={{
            background: 'radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%)',
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-purple-500/20 bg-black/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur-md animate-pulse" />
                <div className="relative w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500" />
              </div>
              <span className="font-bold text-lg bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Bram
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-purple-500/10" asChild>
                <a href="#about">About</a>
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-purple-500/10" asChild>
                <a href="#projects">Projects</a>
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-purple-500/10" asChild>
                <a href="#contact">Contact</a>
              </Button>
              <Button
                size="sm"
                className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0 shadow-lg shadow-purple-500/50"
                asChild
              >
                <a href="https://github.com/Bram-cat" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Neon Animations */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-12">
            {/* Animated Status Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm animate-pulse">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500 shadow-lg shadow-cyan-500/50"></span>
              </div>
              <span className="text-sm font-medium text-cyan-300">Available for opportunities</span>
            </div>

            {/* Glitch Text Effect */}
            <div className="space-y-6 relative">
              <div className="relative inline-block">
                <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight">
                  <span className="block relative">
                    <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 blur-2xl opacity-50 animate-pulse"></span>
                    <span className="relative bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                      Full Stack
                    </span>
                  </span>
                  <span className="block relative mt-2">
                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 blur-2xl opacity-50 animate-pulse" style={{ animationDelay: '0.5s' }}></span>
                    <span className="relative bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse" style={{ animationDelay: '0.5s' }}>
                      Developer
                    </span>
                  </span>
                </h1>
              </div>

              {/* Neon Underline */}
              <div className="flex justify-center">
                <div className="h-1 w-64 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full shadow-lg shadow-purple-500/50 animate-pulse"></div>
              </div>

              <p className="mx-auto max-w-2xl text-lg sm:text-xl text-gray-400 leading-relaxed">
                <span className="text-cyan-400 font-semibold">Passionate entrepreneur</span> building innovative online businesses.
                Transforming ideas into reality through elegant code and cutting-edge technologies.
              </p>
            </div>

            {/* Animated CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-6">
              <Button
                size="lg"
                className="group relative bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0 shadow-2xl shadow-purple-500/50 hover:shadow-cyan-500/50 transition-all duration-300"
                asChild
              >
                <a href="#projects" className="relative z-10">
                  <Rocket className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-purple-500/50 text-purple-300 hover:bg-purple-500/10 hover:text-white hover:border-purple-400 transition-all duration-300"
                asChild
              >
                <a href="#contact">
                  <Terminal className="mr-2 h-5 w-5" />
                  Get In Touch
                </a>
              </Button>
            </div>

            {/* Neon Profile Image */}
            <div className="relative inline-block mt-16">
              {/* Rotating neon ring */}
              <div className="absolute inset-0 rounded-full">
                <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-500 border-r-cyan-500 animate-spin" style={{ animationDuration: '3s' }}></div>
                <div className="absolute inset-0 rounded-full border-4 border-transparent border-b-pink-500 border-l-blue-500 animate-spin" style={{ animationDuration: '4s', animationDirection: 'reverse' }}></div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-full blur-3xl opacity-40 animate-pulse" />

              {/* Profile image */}
              <div className="relative">
                <Image
                  src="/pfp.png"
                  alt="Profile"
                  width={240}
                  height={240}
                  className="relative rounded-full border-4 border-purple-500/50 shadow-2xl shadow-purple-500/50"
                  priority
                />
              </div>
            </div>

            {/* Floating particles */}
            <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
            <div className="absolute top-40 right-20 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-20 left-20 w-2 h-2 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        {/* Scrolling indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-purple-500/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section with Bento Box */}
      <section id="about" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-purple-500/50 text-purple-300">About Me</Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Entrepreneur & Developer
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Passionate about building online businesses that make a difference
            </p>
          </div>

          {/* Bento Box Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
            {/* Large card - About */}
            <Card className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-purple-900/20 to-cyan-900/20 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 group">
              <CardContent className="p-8 h-full flex flex-col justify-center">
                <Sparkles className="h-12 w-12 text-purple-400 mb-4 group-hover:rotate-12 transition-transform" />
                <h3 className="text-2xl font-bold text-white mb-4">Building The Future</h3>
                <p className="text-gray-300 leading-relaxed">
                  I&apos;m a passionate entrepreneur and full-stack developer focused on creating innovative online businesses.
                  From AI-powered applications to intuitive web platforms, I transform ideas into reality through elegant code
                  and cutting-edge technologies. Currently studying Computer Science at UPEI while building the next generation
                  of digital products.
                </p>
              </CardContent>
            </Card>

            {/* Photo 1 */}
            <Card className="md:col-span-1 md:row-span-1 overflow-hidden border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 group">
              <div className="relative h-64 md:h-full">
                <Image
                  src="/me.jpg"
                  alt="Me"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </Card>

            {/* Photo 2 */}
            <Card className="md:col-span-1 md:row-span-1 overflow-hidden border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 group">
              <div className="relative h-64 md:h-full">
                <Image
                  src="/me2.jpg"
                  alt="Me"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </Card>

            {/* Tech Stack */}
            <Card className="md:col-span-2 bg-gradient-to-br from-cyan-900/20 to-purple-900/20 border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Code2 className="h-5 w-5 text-cyan-400" />
                  Tech Stack
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["React Native", "Next.js", "TypeScript", "Supabase", "Clerk", "Stripe", "Tailwind CSS", "AI/ML"].map((tech) => (
                    <Badge
                      key={tech}
                      className="bg-purple-500/10 text-purple-300 border-purple-500/30 hover:bg-purple-500/20 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Stats or Focus */}
            <Card className="md:col-span-2 bg-gradient-to-br from-pink-900/20 to-purple-900/20 border-pink-500/20 hover:border-pink-500/50 transition-all duration-300 group">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center flex-shrink-0 group-hover:rotate-180 transition-transform duration-500">
                  <Rocket className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Building Online Businesses</h3>
                  <p className="text-gray-300 text-sm">
                    Focused on creating scalable SaaS products and digital solutions that solve real problems
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        {/* Section glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-cyan-500/50 text-cyan-300">Featured Work</Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Projects That Make a Difference
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Building the future, one project at a time
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* VisualAIze - AI Vision Board Generator */}
            <Card className="group relative bg-gray-900/50 border-purple-500/30 hover:border-purple-500 backdrop-blur-sm hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-pink-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <CardHeader className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl blur-md opacity-50 group-hover:opacity-100 transition-opacity" />
                    <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <Sparkles className="h-6 w-6 text-white group-hover:rotate-12 transition-transform" />
                    </div>
                  </div>
                  <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                    AI Powered
                  </Badge>
                </div>
                <CardTitle className="text-2xl text-white">VisualAIze</CardTitle>
                <CardDescription className="text-gray-400">AI Vision Board Generator</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 relative z-10">
                <p className="text-gray-300">
                  An innovative AI-powered application that transforms keywords and user images into personalized
                  vision boards, helping users visualize and manifest their goals.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "AI/ML", "TypeScript", "Tailwind CSS"].map((tech) => (
                    <Badge key={tech} className="bg-purple-500/10 text-purple-300 border-purple-500/30">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2 relative z-10">
                <Button size="sm" variant="outline" className="flex-1 border-purple-500/30 text-purple-300 hover:bg-purple-500/10">
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </Button>
                <Button size="sm" className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg shadow-purple-500/50">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Demo
                </Button>
              </CardFooter>
            </Card>

            {/* Lovelock Website */}
            <Card className="group relative bg-gray-900/50 border-cyan-500/30 hover:border-cyan-500 backdrop-blur-sm hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Featured glow */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 animate-pulse" />

              <CardHeader className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-500 blur-md opacity-50 group-hover:opacity-100 transition-opacity" />
                    <Image src="/lovelock.png" alt="Lovelock" width={48} height={48} className="relative w-full h-full object-cover" />
                  </div>
                  <Badge className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white border-0 shadow-lg shadow-purple-500/50">
                    <Sparkles className="h-3 w-3 mr-1" />
                    Featured
                  </Badge>
                </div>
                <CardTitle className="text-2xl text-white">Lovelock</CardTitle>
                <CardDescription className="text-gray-400">Numerology & Relationship Platform</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 relative z-10">
                <p className="text-gray-300">
                  Complete web platform combining ancient numerology with modern psychology. Offers AI-powered
                  personality insights, love compatibility assessment, and trust analysis.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "Clerk", "Supabase", "AI/ML", "Stripe"].map((tech) => (
                    <Badge key={tech} className="bg-cyan-500/10 text-cyan-300 border-cyan-500/30">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2 relative z-10">
                <Button size="sm" variant="outline" className="flex-1 border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10" asChild>
                  <a href="https://github.com/Bram-cat/lovelock" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </a>
                </Button>
                <Button size="sm" className="flex-1 bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 shadow-lg shadow-cyan-500/50" asChild>
                  <a href="https://lovelock.it.com" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visit Site
                  </a>
                </Button>
              </CardFooter>
            </Card>

            {/* Fadez Barbershop */}
            <Card className="group relative bg-gray-900/50 border-blue-500/30 hover:border-blue-500 backdrop-blur-sm hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-cyan-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <CardHeader className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 blur-md opacity-50 group-hover:opacity-100 transition-opacity" />
                    <Image src="/fadezlogo.png" alt="Fadez" width={48} height={48} className="relative w-full h-full object-cover" />
                  </div>
                  <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                    Local Business
                  </Badge>
                </div>
                <CardTitle className="text-2xl text-white">Fadez Barbershop</CardTitle>
                <CardDescription className="text-gray-400">Modern Business Website</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 relative z-10">
                <p className="text-gray-300">
                  A sleek, performance-optimized website bringing a local barbershop into the digital age.
                  Features stunning visuals, smooth animations, and an intuitive user experience.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Vite", "React", "Tailwind CSS", "Framer Motion"].map((tech) => (
                    <Badge key={tech} className="bg-blue-500/10 text-blue-300 border-blue-500/30">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="relative z-10">
                <Button size="sm" variant="outline" className="w-full border-blue-500/30 text-blue-300 hover:bg-blue-500/10" asChild>
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
      <section id="contact" className="py-20 relative">
        {/* Glow effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/10 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="outline" className="mb-4 border-cyan-500/50 text-cyan-300">Get In Touch</Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Let&apos;s Build Something Amazing
              </span>
            </h2>
            <p className="text-gray-400 mb-12">
              I&apos;m always open to new opportunities, collaborations, and interesting projects.
              Feel free to reach out!
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-purple-500/50 text-purple-300 hover:bg-purple-500/10 hover:text-white hover:border-purple-400 transition-all duration-300"
                asChild
              >
                <a href="https://github.com/Bram-cat" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 hover:text-white hover:border-cyan-400 transition-all duration-300"
                asChild
              >
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0 shadow-2xl shadow-purple-500/50 hover:shadow-cyan-500/50 transition-all duration-300"
                asChild
              >
                <a href="mailto:your.email@example.com">
                  <Mail className="h-5 w-5 mr-2" />
                  Send Email
                </a>
              </Button>
            </div>

            {/* Activity Indicator with Green Dot */}
            <div className="mt-12 inline-flex items-center gap-2 px-6 py-3 rounded-full border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500 shadow-lg shadow-cyan-500/50"></span>
              </div>
              <span className="text-sm text-cyan-300">
                Usually responds within 24 hours
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-500/20 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur-md animate-pulse" />
                  <div className="relative w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500" />
                </div>
                <span className="font-bold text-lg bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Bram
                </span>
              </div>
              <p className="text-sm text-gray-400">
                Full Stack Developer & Entrepreneur building the future with modern technologies.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#about" className="hover:text-purple-400 transition-colors">About</a></li>
                <li><a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a></li>
                <li><a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Connect</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Bram-cat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="mailto:your.email@example.com"
                  className="text-gray-400 hover:text-pink-400 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-purple-500/20 text-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Bram. Built with{" "}
              <span className="text-purple-400">Next.js</span>,{" "}
              <span className="text-cyan-400">Tailwind CSS</span>, and{" "}
              <span className="text-pink-400">shadcn/ui</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
