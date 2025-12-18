"use client";

import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Code2,
  Briefcase,
  GraduationCap,
  Rocket,
  ExternalLink,
  Star,
  Sparkles,
  Zap,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="font-bold text-2xl tracking-tight">Ram</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#about"
                className="text-sm text-white/60 hover:text-white transition-colors duration-300"
              >
                About
              </a>
              <a
                href="#skills"
                className="text-sm text-white/60 hover:text-white transition-colors duration-300"
              >
                Skills
              </a>
              <a
                href="#work"
                className="text-sm text-white/60 hover:text-white transition-colors duration-300"
              >
                Work
              </a>
              <a
                href="#projects"
                className="text-sm text-white/60 hover:text-white transition-colors duration-300"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-sm text-white/60 hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </div>
            <Button
              size="sm"
              className="bg-white text-black hover:bg-white/90 transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="#contact">Get in touch</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        {/* Animated background gradient */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 animate-pulse"
          style={{ animationDuration: "4s" }}
        />

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="animate-fade-in-up">
              <Badge
                variant="outline"
                className="border-white/20 text-white/70 uppercase text-xs tracking-wider mb-6 animate-bounce"
                style={{ animationDuration: "3s" }}
              >
                Full Stack Developer & Entrepreneur
              </Badge>
            </div>

            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              Building digital experiences that{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                drive results
              </span>
            </h1>

            <p
              className="text-xl text-white/60 leading-relaxed max-w-2xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Transforming ideas into elegant, high-performance web
              applications. Specializing in AI integration, modern web
              technologies, and scalable SaaS solutions.
            </p>

            <div
              className="flex flex-wrap items-center justify-center gap-4 pt-4 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 h-12 px-8 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/20"
                asChild
              >
                <a href="#projects">
                  View my work
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 h-12 px-8 transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="#contact">Let&apos;s talk</a>
              </Button>
            </div>

            {/* Social Links */}
            <div
              className="flex items-center justify-center gap-4 pt-8 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <a
                href="https://github.com/Bram-cat"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all duration-300 hover:scale-110"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/brvs-app-developer/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:vsbharaniram5@gmail.com"
                className="p-3 rounded-full border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all duration-300 hover:scale-110"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <Badge
              variant="outline"
              className="border-white/20 text-white/70 uppercase text-xs tracking-wider mb-4"
            >
              About Me
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What I bring to the table
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Combining education, expertise, and entrepreneurial spirit to
              build exceptional digital solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Education Card */}
            <Card className="bg-gradient-to-br from-purple-500/10 to-transparent border-white/10 hover:border-purple-500/30 transition-all duration-500 overflow-hidden group hover:scale-105">
              <CardHeader className="space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-purple-500/20 backdrop-blur-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <GraduationCap className="h-8 w-8 text-purple-300" />
                </div>
                <div>
                  <CardTitle className="text-2xl text-white mb-2 group-hover:text-purple-300 transition-colors">
                    Education
                  </CardTitle>
                  <CardDescription className="text-white/60 text-base">
                    Computer Science @ UPEI
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-white/70 leading-relaxed">
                  Currently pursuing my Bachelor&apos;s degree in Computer
                  Science, focusing on software engineering, AI development, and
                  modern application architecture.
                </p>
              </CardContent>
            </Card>

            {/* Development Card */}
            <Card className="bg-gradient-to-br from-blue-500/10 to-transparent border-white/10 hover:border-blue-500/30 transition-all duration-500 overflow-hidden group hover:scale-105">
              <CardHeader className="space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-blue-500/20 backdrop-blur-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Code2 className="h-8 w-8 text-blue-300" />
                </div>
                <div>
                  <CardTitle className="text-2xl text-white mb-2 group-hover:text-blue-300 transition-colors">
                    Development
                  </CardTitle>
                  <CardDescription className="text-white/60 text-base">
                    Full Stack Expertise
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-white/70 leading-relaxed mb-4">
                  Expert in Next.js, React, TypeScript, and modern web
                  technologies. Building scalable applications with clean,
                  maintainable code.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Next.js",
                    "React",
                    "TypeScript",
                    "Node.js",
                    "Tailwind",
                  ].map((tech, i) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="border-blue-500/30 text-blue-300 bg-blue-500/10 hover:bg-blue-500/20 transition-all duration-300"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Entrepreneurship Card */}
            <Card className="bg-gradient-to-br from-green-500/10 to-transparent border-white/10 hover:border-green-500/30 transition-all duration-500 overflow-hidden group hover:scale-105">
              <CardHeader className="space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-green-500/20 backdrop-blur-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Briefcase className="h-8 w-8 text-green-300" />
                </div>
                <div>
                  <CardTitle className="text-2xl text-white mb-2 group-hover:text-green-300 transition-colors">
                    Entrepreneur
                  </CardTitle>
                  <CardDescription className="text-white/60 text-base">
                    Building Online Businesses
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-white/70 leading-relaxed">
                  Creating innovative SaaS products and digital solutions that
                  solve real-world problems. From concept to launch, I build
                  businesses that scale.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <Badge
              variant="outline"
              className="border-white/20 text-white/70 uppercase text-xs tracking-wider mb-4"
            >
              Technical Skills
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technologies I work with
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Frontend */}
            <Card className="bg-white/5 border-white/10 hover:border-blue-500/30 transition-all duration-500 group hover:scale-105">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-blue-500/20">
                    <Sparkles className="h-5 w-5 text-blue-300" />
                  </div>
                  <CardTitle className="text-lg text-white group-hover:text-blue-300 transition-colors">
                    Frontend
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[
                    "React",
                    "Next.js",
                    "TypeScript",
                    "Tailwind CSS",
                    "Framer Motion",
                  ].map((skill) => (
                    <div
                      key={skill}
                      className="text-sm text-white/70 hover:text-white hover:translate-x-2 transition-all duration-300 cursor-default"
                    >
                      • {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Backend */}
            <Card className="bg-white/5 border-white/10 hover:border-green-500/30 transition-all duration-500 group hover:scale-105">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-green-500/20">
                    <Zap className="h-5 w-5 text-green-300" />
                  </div>
                  <CardTitle className="text-lg text-white group-hover:text-green-300 transition-colors">
                    Backend
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[
                    "Node.js",
                    "Express",
                    "Supabase",
                    "PostgreSQL",
                    "REST APIs",
                  ].map((skill) => (
                    <div
                      key={skill}
                      className="text-sm text-white/70 hover:text-white hover:translate-x-2 transition-all duration-300 cursor-default"
                    >
                      • {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* AI/ML */}
            <Card className="bg-white/5 border-white/10 hover:border-purple-500/30 transition-all duration-500 group hover:scale-105">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-purple-500/20">
                    <Target className="h-5 w-5 text-purple-300" />
                  </div>
                  <CardTitle className="text-lg text-white group-hover:text-purple-300 transition-colors">
                    AI/ML
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[
                    "OpenAI API",
                    "Machine Learning",
                    "Image Generation",
                    "NLP",
                    "AI Integration",
                  ].map((skill) => (
                    <div
                      key={skill}
                      className="text-sm text-white/70 hover:text-white hover:translate-x-2 transition-all duration-300 cursor-default"
                    >
                      • {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tools */}
            <Card className="bg-white/5 border-white/10 hover:border-yellow-500/30 transition-all duration-500 group hover:scale-105">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-yellow-500/20">
                    <Rocket className="h-5 w-5 text-yellow-300" />
                  </div>
                  <CardTitle className="text-lg text-white group-hover:text-yellow-300 transition-colors">
                    Tools
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {["Git", "VS Code", "Figma", "Vercel", "Stripe"].map(
                    (skill) => (
                      <div
                        key={skill}
                        className="text-sm text-white/70 hover:text-white hover:translate-x-2 transition-all duration-300 cursor-default"
                      >
                        • {skill}
                      </div>
                    )
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* My Company Section */}
      <section id="work" className="py-20 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <Badge
              variant="outline"
              className="border-white/20 text-white/70 uppercase text-xs tracking-wider mb-4"
            >
              My Company
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              PEI Web Agency
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Building professional websites and digital solutions for
              businesses across Prince Edward Island
            </p>
          </div>

          {/* Featured Company Card */}
          <Card className="bg-gradient-to-br from-blue-900/20 via-purple-800/10 to-transparent border-white/10 hover:border-blue-500/30 transition-all duration-500 group overflow-hidden hover:scale-[1.02]">
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="aspect-video lg:aspect-auto relative overflow-hidden min-h-[300px]">
                <Image
                  src="/hero.png"
                  alt="PEI Web Agency"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 lg:p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl overflow-hidden border border-white/20">
                    <Image
                      src="/logo.png"
                      alt="PEI Web Agency Logo"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                    My Freelancing Company
                  </Badge>
                </div>
                <CardTitle className="text-3xl text-white mb-3 group-hover:text-blue-300 transition-colors">
                  PEI Web Agency
                </CardTitle>
                <CardDescription className="text-white/60 text-lg mb-4">
                  Professional Web Development Services in PEI
                </CardDescription>
                <p className="text-white/70 leading-relaxed mb-6">
                  I founded PEI Web Agency to help local businesses establish
                  their online presence. We specialize in creating modern,
                  responsive websites, e-commerce solutions, and custom web
                  applications tailored to each client&apos;s unique needs.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    "Web Design",
                    "E-Commerce",
                    "SEO",
                    "Custom Development",
                    "Hosting",
                  ].map((service) => (
                    <Badge
                      key={service}
                      variant="outline"
                      className="border-blue-500/30 text-blue-300 bg-blue-500/10"
                    >
                      {service}
                    </Badge>
                  ))}
                </div>
                <Button
                  className="w-fit bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                  asChild
                >
                  <a
                    href="https://peiwebagency.xyz"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Website
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Personal Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <Badge
              variant="outline"
              className="border-white/20 text-white/70 uppercase text-xs tracking-wider mb-4"
            >
              Personal Projects
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Building the future
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Innovative projects showcasing AI integration, modern
              architecture, and creative solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* VisualAIze Project */}

            {/* Lovelock Project */}
            <Card className="bg-gradient-to-br from-pink-500/10 via-rose-500/5 to-transparent border-white/10 hover:border-pink-500/30 transition-all duration-500 group hover:scale-105">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-pink-500/30 group-hover:border-pink-500/50 transition-all">
                    <Image
                      src="/lovelock.png"
                      alt="Lovelock"
                      width={64}
                      height={64}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <Badge className="bg-pink-500/20 text-pink-300 border-pink-500/30 gap-1">
                    <Star className="h-3 w-3 fill-pink-300" />
                    Featured
                  </Badge>
                </div>
                <CardTitle className="text-2xl text-white mb-2 group-hover:text-pink-300 transition-colors">
                  Lovelock
                </CardTitle>
                <CardDescription className="text-white/60">
                  Numerology & Relationship Platform
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-white/70 leading-relaxed">
                  Comprehensive platform combining ancient numerology wisdom
                  with modern psychology. AI-powered personality insights and
                  compatibility analysis.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "Clerk", "Supabase", "AI", "Stripe"].map(
                    (tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-pink-500/30 text-pink-300 bg-pink-500/10 text-xs hover:bg-pink-500/20 transition-all"
                      >
                        {tech}
                      </Badge>
                    )
                  )}
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-pink-500/30 text-pink-300 hover:bg-pink-500/10 transition-all duration-300"
                    asChild
                  >
                    <a
                      href="https://github.com/Bram-cat/lovelock"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 transition-all duration-300"
                    asChild
                  >
                    <a
                      href="https://lovelock.it.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Visit
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Vision Board Project */}
            <Card className="bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent border-white/10 hover:border-cyan-500/30 transition-all duration-500 group hover:scale-105">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-cyan-500/30 group-hover:border-cyan-500/50 transition-all">
                    <Image
                      src="/visionboard.png"
                      alt="Vision Board"
                      width={64}
                      height={64}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30">
                    Productivity
                  </Badge>
                </div>
                <CardTitle className="text-2xl text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  Vision Board Creator
                </CardTitle>
                <CardDescription className="text-white/60">
                  Goal Visualization Tool
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-white/70 leading-relaxed">
                  A creative tool for building digital vision boards to
                  visualize goals and aspirations. Drag-and-drop interface with
                  customizable layouts and inspiring templates.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "React", "Tailwind", "Canvas API"].map(
                    (tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-cyan-500/30 text-cyan-300 bg-cyan-500/10 text-xs hover:bg-cyan-500/20 transition-all"
                      >
                        {tech}
                      </Badge>
                    )
                  )}
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 transition-all duration-300"
                  asChild
                >
                  <a
                    href="https://github.com/Bram-cat/Dreamboard"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    View on GitHub
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto text-center">
          <Badge
            variant="outline"
            className="border-white/20 text-white/70 uppercase text-xs tracking-wider mb-4"
          >
            Get In Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let&apos;s build something amazing together
          </h2>
          <p className="text-white/60 text-lg mb-12 max-w-2xl mx-auto">
            Whether you need a website for your business, have a project idea,
            or just want to chat about technology — I&apos;m here to help.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 h-12 px-6 transition-all duration-300 hover:scale-105"
              asChild
            >
              <a
                href="https://github.com/Bram-cat"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5 mr-2" />
                GitHub
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 h-12 px-6 transition-all duration-300 hover:scale-105"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/brvs-app-developer/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button
              size="lg"
              className="bg-white text-black hover:bg-white/90 h-12 px-6 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/20"
              asChild
            >
              <a href="mailto:vsbharaniram5@gmail.com">
                <Mail className="h-5 w-5 mr-2" />
                Send email
              </a>
            </Button>
          </div>

          {/* Availability Badge */}
          <div className="mt-12 inline-flex items-center gap-3 px-6 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </div>
            <span className="text-sm text-white/70">
              Available for new projects • Usually responds within 24 hours
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div className="sm:col-span-2">
              <div className="mb-4">
                <span className="font-bold text-2xl">Ram</span>
              </div>
              <p className="text-sm text-white/60 max-w-xs">
                Full Stack Developer & Entrepreneur building innovative digital
                solutions with modern technologies.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Navigation</h3>
              <ul className="space-y-2 text-sm text-white/60">
                <li>
                  <a
                    href="#about"
                    className="hover:text-white transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="hover:text-white transition-colors"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#work"
                    className="hover:text-white transition-colors"
                  >
                    Work
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="hover:text-white transition-colors"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Connect</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Bram-cat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/brvs-app-developer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="mailto:vsbharaniram5@gmail.com"
                  className="text-white/60 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} Ram. All rights reserved.
            </p>
            <p className="text-sm text-white/60">
              Built with Next.js, Tailwind CSS, and shadcn/ui
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
