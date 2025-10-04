import Image from "next/image";
import { Github, ExternalLink, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white">
      {/* Animated background gradient */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-purple-900/20 via-transparent to-transparent animate-pulse blur-3xl" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-blue-900/20 via-transparent to-transparent animate-pulse blur-3xl" style={{ animationDelay: '1s' }} />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center space-y-8">
            {/* Profile Image with glow effect */}
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-2xl opacity-50 animate-pulse" />
              <div className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl">
                <Image
                  src="/pfp.png"
                  alt="Profile"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>

            {/* Main heading with gradient text */}
            <div className="space-y-4">
              <h1 className="text-6xl sm:text-8xl font-black tracking-tight">
                <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                  Full Stack
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Developer
                </span>
              </h1>

              <p className="text-xl sm:text-2xl text-gray-400 font-light">
                Computer Science @ UPEI
              </p>

              {/* Catchy motto */}
              <p className="text-2xl sm:text-3xl font-medium text-gray-300 italic max-w-3xl mx-auto pt-4">
                &ldquo;Turning ideas into elegant code, one commit at a time&rdquo;
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center pt-8">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 transition-all"
                asChild
              >
                <a href="https://github.com/Bram-cat" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 transition-all"
                asChild
              >
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 transition-all"
                asChild
              >
                <a href="mailto:your.email@example.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>

            {/* Scroll indicator */}
            <div className="pt-16 animate-bounce">
              <div className="w-6 h-10 border-2 border-white/30 rounded-full mx-auto flex items-start justify-center p-2">
                <div className="w-1.5 h-3 bg-white/50 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl sm:text-6xl font-black mb-12 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p className="text-xl">
              My journey in software development began with a curiosity for how technology shapes our world.
              As a Computer Science student at UPEI, I&apos;ve transformed that curiosity into practical skills,
              building real-world applications that solve meaningful problems.
            </p>
            <p>
              From creating an AI-powered numerology app with full payment integration to developing websites
              for local businesses, each project has expanded my expertise in full-stack development. I specialize
              in the modern JavaScript ecosystem—React Native for mobile, Next.js for web, with robust backends
              using Supabase and authentication via Clerk.
            </p>
            <p className="text-xl font-semibold text-white">
              My focus is on creating seamless user experiences while maintaining clean, scalable code.
            </p>
          </div>

          {/* Education badge */}
          <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20">
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
              <div>
                <p className="text-sm text-gray-400">Currently pursuing</p>
                <p className="text-xl font-bold text-white">Bachelor of Science in Computer Science</p>
                <p className="text-gray-300">University of Prince Edward Island (UPEI)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl sm:text-6xl font-black mb-6 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Featured Work
            </span>
          </h2>
          <p className="text-center text-gray-400 mb-20 text-lg">
            Building experiences that matter
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Lovelock Project - Featured */}
            <div className="lg:col-span-2 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-900/40 via-gray-900/40 to-blue-900/40 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-500 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative p-8 sm:p-12">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <Badge className="mb-4 bg-purple-500/20 text-purple-300 border-purple-500/30">Featured Project</Badge>
                    <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2">Lovelock</h3>
                    <p className="text-xl text-purple-300 font-medium italic">
                      &ldquo;Where AI meets mysticism—numerology reimagined&rdquo;
                    </p>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  A comprehensive AI-powered numerology app that combines ancient wisdom with modern technology.
                  Complete payment integration, authentication, and cross-platform compatibility. From mobile app
                  to payment website—a full-stack masterpiece.
                </p>

                <div className="mb-8">
                  <div className="flex flex-wrap gap-2">
                    {["React Native", "Clerk", "Supabase", "Stripe", "TypeScript", "Next.js"].map((tech) => (
                      <Badge key={tech} variant="outline" className="border-purple-400/30 text-purple-200 bg-purple-500/10">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button asChild className="bg-white text-black hover:bg-gray-200 group/btn">
                    <a href="https://github.com/Bram-cat/lovelock" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
                      View Code
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white hover:text-black">
                    <a href="https://lovelock.it.com" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Site
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Fadez Barbershop */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700 hover:border-blue-500/50 transition-all duration-500 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative p-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Fadez Barbershop</h3>
                <p className="text-lg text-blue-300 font-medium italic mb-4">
                  &ldquo;Style meets code—digital excellence for local business&rdquo;
                </p>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  A sleek, modern website bringing a local barbershop into the digital age.
                  Performance-first design with stunning visuals and smooth UX.
                </p>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {["Vite", "React", "Tailwind CSS"].map((tech) => (
                      <Badge key={tech} variant="outline" className="border-blue-400/30 text-blue-200 bg-blue-500/10">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button asChild className="bg-white text-black hover:bg-gray-200 group/btn">
                  <a href="https://github.com/Bram-cat/fadez-new1" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
                    View Code
                  </a>
                </Button>
              </div>
            </div>

            {/* Portfolio v1 */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700 hover:border-cyan-500/50 transition-all duration-500 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/0 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative p-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Portfolio v1</h3>
                <p className="text-lg text-cyan-300 font-medium italic mb-4">
                  &ldquo;Where it all began—the foundation of my journey&rdquo;
                </p>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  My first portfolio showcasing the fundamentals of web development.
                  A testament to growth and continuous learning.
                </p>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {["HTML", "CSS", "JavaScript"].map((tech) => (
                      <Badge key={tech} variant="outline" className="border-cyan-400/30 text-cyan-200 bg-cyan-500/10">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button asChild className="bg-white text-black hover:bg-gray-200 group/btn">
                  <a href="https://github.com/Bram-cat/Portfolio" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
                    View Code
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-6 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div>
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Let&apos;s Build Something Amazing
            </h3>
            <p className="text-gray-400 text-lg">
              Always open to new opportunities and collaborations
            </p>
          </div>

          <div className="flex gap-4 justify-center">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 transition-all hover:scale-110"
              asChild
            >
              <a href="https://github.com/Bram-cat" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 transition-all hover:scale-110"
              asChild
            >
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 transition-all hover:scale-110"
              asChild
            >
              <a href="mailto:your.email@example.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>

          <div className="pt-8 border-t border-gray-800">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} • Built with Next.js, Tailwind CSS, and shadcn/ui
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
