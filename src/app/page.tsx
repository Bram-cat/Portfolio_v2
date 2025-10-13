"use client";

import Image from "next/image";
import { Github, ExternalLink, Linkedin, Mail, ArrowRight, Sparkles, Terminal, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentText, setCurrentText] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = ["Bram", "an AI Developer", "a Full Stack Developer", "a Passionate Developer"];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const currentFullText = texts[currentText];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    if (!isDeleting && displayText === currentFullText) {
      setTimeout(() => setIsDeleting(true), pauseTime);
      return;
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentText((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? currentFullText.substring(0, displayText.length - 1)
          : currentFullText.substring(0, displayText.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentText, texts]);

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

      {/* Hero Section with Enhanced Neon Animations */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        {/* Neon light rays animation */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 w-1 h-full origin-bottom"
                style={{
                  transform: `rotate(${i * 30}deg)`,
                  animation: `pulse 3s ease-in-out infinite`,
                  animationDelay: `${i * 0.2}s`,
                }}
              >
                <div className="w-full h-1/2 bg-gradient-to-t from-purple-500/20 via-cyan-500/10 to-transparent blur-sm" />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 relative z-10">
            {/* Catchphrase */}
            <div className="space-y-3">
              <p className="text-xl sm:text-2xl text-gray-400 font-light tracking-wide">
                Designing interfaces that don&apos;t just function —
              </p>
              <p className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent [text-shadow:0_0_20px_rgba(139,92,246,0.3)]">
                they motivate.
              </p>
            </div>

            {/* Animated Typing Text */}
            <div className="space-y-6 relative pt-8">
              <div className="relative inline-block">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight">
                  <span className="block text-gray-300">Hi, I&apos;m</span>
                  <span className="block relative mt-4 min-h-[80px] sm:min-h-[100px] lg:min-h-[120px]">
                    {/* Multiple neon glow layers */}
                    <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 blur-3xl opacity-50 animate-pulse"></span>
                    <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 blur-2xl opacity-30 animate-pulse" style={{ animationDelay: '0.3s' }}></span>
                    <span className="relative bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent [text-shadow:0_0_30px_rgba(139,92,246,0.5)]">
                      {displayText}
                      <span className="animate-pulse">|</span>
                    </span>
                  </span>
                </h1>
              </div>

              {/* Animated Neon Underline with flowing effect */}
              <div className="flex justify-center relative">
                <div className="absolute h-1 w-96 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full shadow-[0_0_20px_rgba(168,85,247,0.8)] blur-sm"></div>
                <div className="h-1 w-96 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full shadow-[0_0_20px_rgba(34,211,238,0.8)] animate-pulse"></div>
              </div>

              <p className="mx-auto max-w-2xl text-base sm:text-lg text-gray-400 leading-relaxed pt-4">
                Building <span className="text-cyan-400 font-semibold [text-shadow:0_0_10px_rgba(34,211,238,0.5)]">innovative online businesses</span> and transforming ideas into reality through elegant code and cutting-edge technologies.
              </p>
            </div>

            {/* Enhanced CTA Buttons with Neon Glow */}
            <div className="flex flex-wrap items-center justify-center gap-6">
              <Button
                size="lg"
                className="group relative bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0 shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:shadow-[0_0_40px_rgba(34,211,238,0.8)] transition-all duration-300"
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
                className="border-2 border-purple-500/50 text-purple-300 hover:bg-purple-500/10 hover:text-white hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300"
                asChild
              >
                <a href="#contact">
                  <Terminal className="mr-2 h-5 w-5" />
                  Get In Touch
                </a>
              </Button>
            </div>

            {/* Enhanced floating particles with trails */}
            <div className="absolute top-20 left-10 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.8)] animate-ping"></div>
            <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.8)] animate-ping" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-20 left-20 w-3 h-3 bg-pink-400 rounded-full shadow-[0_0_15px_rgba(236,72,153,0.8)] animate-ping" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-cyan-300 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)] animate-ping" style={{ animationDelay: '1.5s' }}></div>
            <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-purple-300 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)] animate-ping" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>

        {/* Enhanced scrolling indicator with neon glow */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-purple-500/50 rounded-full flex items-start justify-center p-2 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
            <div className="w-1.5 h-3 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(168,85,247,0.8)]"></div>
          </div>
        </div>
      </section>

      {/* About Section with Enhanced Bento Box */}
      <section id="about" className="py-20 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-purple-500/50 text-purple-300 animate-pulse">About Me</Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                Entrepreneur & Developer
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Passionate about building online businesses that make a difference
            </p>
          </div>

          {/* Enhanced Bento Box Grid with Better Proportions */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[280px]">
            {/* Profile Picture - Portrait (pfp.png) - Takes 1 col, 2 rows */}
            <Card className="md:col-span-1 md:row-span-2 overflow-hidden border-purple-500/30 hover:border-purple-500/70 transition-all duration-700 group relative bg-gradient-to-br from-purple-900/30 to-pink-900/30 hover:shadow-[0_0_40px_rgba(168,85,247,0.4)]">
              {/* Enhanced neon glow overlay with pulsing effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-purple-500/0 group-hover:from-purple-500/30 group-hover:via-pink-500/20 group-hover:to-purple-500/30 transition-all duration-700 z-10 animate-pulse" />

              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10">
                <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(168,85,247,0.5)] rounded-lg" />
                <div className="absolute inset-0 shadow-[0_0_30px_rgba(168,85,247,0.3)]" />
              </div>

              <div className="relative h-full w-full bg-black">
                <Image
                  src="/pfp.png"
                  alt="Bram - Profile"
                  fill
                  className="object-cover object-center group-hover:scale-105 group-hover:rotate-1 transition-all duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30 group-hover:from-black/70 transition-all duration-700" />

                {/* Animated corner highlights */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-purple-400/0 group-hover:border-purple-400/80 rounded-tl-lg transition-all duration-700" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-pink-400/0 group-hover:border-pink-400/80 rounded-br-lg transition-all duration-700" />

                {/* Enhanced neon particles */}
                <div className="absolute bottom-6 left-6 w-3 h-3 bg-purple-400 rounded-full shadow-[0_0_20px_rgba(168,85,247,1)] opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-500" />
                <div className="absolute top-6 right-6 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_20px_rgba(34,211,238,1)] opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-500" style={{ animationDelay: '0.3s' }} />
              </div>
            </Card>

            {/* Large About Card - Takes 3 cols, 2 rows */}
            <Card className="md:col-span-3 md:row-span-2 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-cyan-900/20 border-purple-500/30 hover:border-purple-500 transition-all duration-500 group relative overflow-hidden">
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-pink-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Neon glow effect */}
              <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(168,85,247,0)] group-hover:shadow-[inset_0_0_60px_rgba(168,85,247,0.1)] transition-shadow duration-500" />

              {/* Animated neon border lines */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <CardContent className="p-8 h-full flex flex-col justify-center relative z-10">
                <div className="flex items-start gap-6">
                  <div className="relative flex-shrink-0">
                    {/* Multiple glow layers */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-2xl blur-2xl opacity-50 group-hover:opacity-100 transition-opacity animate-pulse" />
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-70 transition-opacity animate-pulse" style={{ animationDelay: '0.5s' }} />
                    <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center group-hover:rotate-12 transition-transform duration-500 shadow-[0_0_30px_rgba(168,85,247,0.6)]">
                      <Sparkles className="h-10 w-10 text-white animate-pulse" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all [text-shadow:0_0_20px_rgba(168,85,247,0)] group-hover:[text-shadow:0_0_20px_rgba(168,85,247,0.5)]">
                      Building The Future
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                      I&apos;m a passionate entrepreneur and full-stack developer focused on creating innovative online businesses.
                      From AI-powered applications to intuitive web platforms, I transform ideas into reality through elegant code
                      and cutting-edge technologies. Currently studying Computer Science at UPEI while building the next generation
                      of digital products.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Photo 3 - me.jpg - Takes 1 col, 1 row */}
            <Card className="md:col-span-1 md:row-span-1 overflow-hidden border-pink-500/30 hover:border-pink-500/70 transition-all duration-700 group relative bg-gradient-to-br from-pink-900/30 to-purple-900/30 hover:shadow-[0_0_40px_rgba(236,72,153,0.4)]">
              {/* Enhanced neon glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 to-purple-500/0 group-hover:from-pink-500/30 group-hover:to-purple-500/30 transition-all duration-700 z-10" />

              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10">
                <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(236,72,153,0.5)] rounded-lg" />
              </div>

              <div className="relative h-full w-full bg-black">
                <Image
                  src="/me.jpg"
                  alt="Bram"
                  fill
                  className="object-cover object-center group-hover:scale-105 group-hover:brightness-110 transition-all duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40 group-hover:from-black/70 transition-all duration-700" />

                {/* Corner highlights */}
                <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-pink-400/0 group-hover:border-pink-400/80 rounded-tr-lg transition-all duration-700" />
                <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-purple-400/0 group-hover:border-purple-400/80 rounded-bl-lg transition-all duration-700" />

                {/* Enhanced neon particles */}
                <div className="absolute bottom-4 right-4 w-3 h-3 bg-pink-400 rounded-full shadow-[0_0_20px_rgba(236,72,153,1)] opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-500" />
              </div>
            </Card>

            {/* Business Focus Card - Takes 1 col, 1 row */}
            <Card className="md:col-span-1 md:row-span-1 bg-gradient-to-br from-purple-900/30 to-cyan-900/30 border-purple-500/30 hover:border-purple-500 transition-all duration-500 group relative overflow-hidden">
              {/* Animated shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              {/* Neon pulse effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-cyan-500/0 group-hover:from-purple-500/10 group-hover:to-cyan-500/10 transition-all duration-500" />

              <CardContent className="p-6 h-full flex flex-col items-center justify-center gap-3 relative z-10 text-center">
                <div className="relative flex-shrink-0">
                  {/* Rotating neon ring */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full blur-xl opacity-50 animate-pulse" />
                  <div className="absolute inset-[-4px] rounded-full border-2 border-transparent bg-gradient-to-br from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 group-hover:animate-spin transition-opacity" style={{ animationDuration: '3s' }} />
                  <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center group-hover:rotate-[360deg] transition-transform duration-1000 shadow-[0_0_25px_rgba(168,85,247,0.6)]">
                    <Rocket className="h-7 w-7 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all">
                    Building Businesses
                  </h3>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    Creating scalable SaaS products and digital solutions
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Photo 2 - Landscape (me2.jpg) - Takes 2 cols, 1 row */}
            <Card className="md:col-span-2 md:row-span-1 overflow-hidden border-cyan-500/30 hover:border-cyan-500/70 transition-all duration-700 group relative bg-gradient-to-br from-cyan-900/30 to-blue-900/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.4)]">
              {/* Enhanced neon glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-cyan-500/0 group-hover:from-cyan-500/30 group-hover:via-blue-500/20 group-hover:to-cyan-500/30 transition-all duration-700 z-10" />

              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10">
                <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(34,211,238,0.5)] rounded-lg" />
                <div className="absolute inset-0 shadow-[0_0_30px_rgba(34,211,238,0.3)]" />
              </div>

              {/* Animated corner accents */}
              <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-cyan-400/0 group-hover:border-cyan-400/80 transition-all duration-700 z-10 rounded-tl-lg" />
              <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-blue-400/0 group-hover:border-blue-400/80 transition-all duration-700 z-10 rounded-br-lg" />

              <div className="relative h-full w-full bg-black">
                <Image
                  src="/me2.jpg"
                  alt="Bram"
                  fill
                  className="object-cover object-center group-hover:scale-105 group-hover:brightness-110 transition-all duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80 group-hover:from-black/60 group-hover:to-black/60 transition-all duration-700" />

                {/* Enhanced animated scan line effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/0 via-cyan-400/30 to-cyan-500/0 h-32 w-full -translate-y-full group-hover:translate-y-[400%] transition-transform duration-1500 opacity-0 group-hover:opacity-100" />

                {/* Neon particles in corners */}
                <div className="absolute top-4 left-4 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_20px_rgba(34,211,238,1)] opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-500" />
                <div className="absolute bottom-4 right-4 w-3 h-3 bg-blue-400 rounded-full shadow-[0_0_20px_rgba(59,130,246,1)] opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-500" style={{ animationDelay: '0.3s' }} />
              </div>
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
            {/* VisualAIze (Dreamboard) - AI Vision Board Generator */}
            <Card className="group relative bg-gray-900/50 border-purple-500/30 hover:border-purple-500 backdrop-blur-sm hover:shadow-[0_0_50px_rgba(168,85,247,0.4)] transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-pink-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Multiple animated shine effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500" style={{ transitionDelay: '0.2s' }} />

              {/* Neon border animation */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse" />
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-pink-500 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>

              {/* Floating neon particles */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)] opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity" />
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-pink-400 rounded-full shadow-[0_0_10px_rgba(236,72,153,0.8)] opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity" style={{ animationDelay: '0.3s' }} />

              <CardHeader className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="relative">
                    {/* Multiple pulsing glow layers */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl blur-2xl opacity-50 group-hover:opacity-100 transition-opacity animate-pulse" />
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl blur-xl opacity-30 group-hover:opacity-70 transition-opacity animate-pulse" style={{ animationDelay: '0.5s' }} />
                    <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center group-hover:rotate-[360deg] transition-transform duration-700 shadow-[0_0_20px_rgba(168,85,247,0.6)]">
                      <Sparkles className="h-6 w-6 text-white animate-pulse" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 animate-pulse shadow-[0_0_10px_rgba(168,85,247,0.3)]">
                      AI Powered
                    </Badge>
                    <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30 shadow-[0_0_10px_rgba(234,179,8,0.3)]">
                      In Progress
                    </Badge>
                  </div>
                </div>
                <CardTitle className="text-2xl text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all group-hover:[text-shadow:0_0_20px_rgba(168,85,247,0.5)]">
                  VisualAIze
                </CardTitle>
                <CardDescription className="text-gray-400">AI Vision Board Generator</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 relative z-10">
                <p className="text-gray-300">
                  An innovative AI-powered application that transforms keywords and user images into personalized
                  vision boards, helping users visualize and manifest their goals through intelligent image generation.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "AI/ML", "TypeScript", "Tailwind CSS"].map((tech) => (
                    <Badge key={tech} className="bg-purple-500/10 text-purple-300 border-purple-500/30 hover:bg-purple-500/20 hover:shadow-[0_0_10px_rgba(168,85,247,0.3)] transition-all">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2 relative z-10">
                <Button size="sm" variant="outline" className="flex-1 border-purple-500/30 text-purple-300 hover:bg-purple-500/10 hover:border-purple-500 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all" asChild>
                  <a href="https://github.com/Bram-cat/Dreamboard" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </a>
                </Button>
                <Button size="sm" className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:shadow-[0_0_30px_rgba(236,72,153,0.6)] transition-all" disabled>
                  <Terminal className="h-4 w-4 mr-2" />
                  Coming Soon
                </Button>
              </CardFooter>
            </Card>

            {/* Lovelock Website */}
            <Card className="group relative bg-gray-900/50 border-cyan-500/30 hover:border-cyan-500 backdrop-blur-sm hover:shadow-[0_0_50px_rgba(34,211,238,0.4)] transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Animated neon top border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.8)]" />

              {/* Rotating neon ring around card */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-cyan-500/50 rounded-tl-lg animate-pulse" />
                <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-purple-500/50 rounded-br-lg animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>

              {/* Floating neon orbs */}
              <div className="absolute top-6 right-6 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.8)] opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity" />
              <div className="absolute bottom-6 left-6 w-3 h-3 bg-purple-400 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.8)] opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity" style={{ animationDelay: '0.4s' }} />

              {/* Sweeping light effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1200" />

              <CardHeader className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden">
                    {/* Multiple glow layers */}
                    <div className="absolute inset-[-4px] bg-gradient-to-br from-cyan-500 to-purple-500 blur-xl opacity-50 group-hover:opacity-100 transition-opacity animate-pulse" />
                    <div className="absolute inset-[-2px] bg-gradient-to-br from-purple-500 to-cyan-500 blur-md opacity-30 group-hover:opacity-70 transition-opacity animate-pulse" style={{ animationDelay: '0.3s' }} />
                    <Image src="/lovelock.png" alt="Lovelock" width={48} height={48} className="relative w-full h-full object-cover rounded-xl shadow-[0_0_20px_rgba(34,211,238,0.4)]" />
                  </div>
                  <Badge className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white border-0 shadow-[0_0_20px_rgba(34,211,238,0.6)] animate-pulse">
                    <Sparkles className="h-3 w-3 mr-1 animate-spin" style={{ animationDuration: '3s' }} />
                    Featured
                  </Badge>
                </div>
                <CardTitle className="text-2xl text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all group-hover:[text-shadow:0_0_20px_rgba(34,211,238,0.5)]">
                  Lovelock
                </CardTitle>
                <CardDescription className="text-gray-400">Numerology & Relationship Platform</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 relative z-10">
                <p className="text-gray-300">
                  Complete web platform combining ancient numerology with modern psychology. Offers AI-powered
                  personality insights, love compatibility assessment, and trust analysis.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "Clerk", "Supabase", "AI/ML", "Stripe"].map((tech) => (
                    <Badge key={tech} className="bg-cyan-500/10 text-cyan-300 border-cyan-500/30 hover:bg-cyan-500/20 hover:shadow-[0_0_10px_rgba(34,211,238,0.3)] transition-all">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2 relative z-10">
                <Button size="sm" variant="outline" className="flex-1 border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all" asChild>
                  <a href="https://github.com/Bram-cat/lovelock" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </a>
                </Button>
                <Button size="sm" className="flex-1 bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all" asChild>
                  <a href="https://lovelock.it.com" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visit Site
                  </a>
                </Button>
              </CardFooter>
            </Card>

            {/* Fadez Barbershop */}
            <Card className="group relative bg-gray-900/50 border-blue-500/30 hover:border-blue-500 backdrop-blur-sm hover:shadow-[0_0_50px_rgba(59,130,246,0.4)] transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-cyan-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Diagonal neon lines */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-blue-500 via-cyan-500 to-transparent rotate-12 blur-sm animate-pulse" />
                <div className="absolute bottom-0 left-0 w-1 h-full bg-gradient-to-t from-blue-500 via-cyan-500 to-transparent -rotate-12 blur-sm animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>

              {/* Pulsing corner accents */}
              <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-blue-500/0 group-hover:border-blue-500/50 rounded-tr-lg transition-all duration-500 shadow-[0_0_20px_rgba(59,130,246,0)]  group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]" />
              <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-cyan-500/0 group-hover:border-cyan-500/50 rounded-bl-lg transition-all duration-500 shadow-[0_0_20px_rgba(34,211,238,0)] group-hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]" />

              {/* Animated particles */}
              <div className="absolute top-8 left-8 w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)] opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity" />
              <div className="absolute bottom-8 right-8 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)] opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity" style={{ animationDelay: '0.3s' }} />

              {/* Sweeping glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-400/10 to-transparent -translate-x-full -translate-y-full group-hover:translate-x-full group-hover:translate-y-full transition-transform duration-1500" />

              <CardHeader className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden">
                    {/* Neon glow layers */}
                    <div className="absolute inset-[-4px] bg-gradient-to-br from-blue-500 to-cyan-500 blur-xl opacity-50 group-hover:opacity-100 transition-opacity animate-pulse" />
                    <div className="absolute inset-[-2px] bg-gradient-to-br from-cyan-500 to-blue-500 blur-md opacity-30 group-hover:opacity-70 transition-opacity animate-pulse" style={{ animationDelay: '0.4s' }} />
                    <Image src="/fadezlogo.png" alt="Fadez" width={48} height={48} className="relative w-full h-full object-cover rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.4)] group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 shadow-[0_0_10px_rgba(59,130,246,0.3)] group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-shadow">
                    Local Business
                  </Badge>
                </div>
                <CardTitle className="text-2xl text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all group-hover:[text-shadow:0_0_20px_rgba(59,130,246,0.5)]">
                  Fadez Barbershop
                </CardTitle>
                <CardDescription className="text-gray-400">Modern Business Website</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 relative z-10">
                <p className="text-gray-300">
                  A sleek, performance-optimized website bringing a local barbershop into the digital age.
                  Features stunning visuals, smooth animations, and an intuitive user experience.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Vite", "React", "Tailwind CSS", "Framer Motion"].map((tech) => (
                    <Badge key={tech} className="bg-blue-500/10 text-blue-300 border-blue-500/30 hover:bg-blue-500/20 hover:shadow-[0_0_10px_rgba(59,130,246,0.3)] transition-all">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="relative z-10">
                <Button size="sm" variant="outline" className="w-full border-blue-500/30 text-blue-300 hover:bg-blue-500/10 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all" asChild>
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
