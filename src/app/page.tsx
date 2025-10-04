import Image from "next/image";
import { Github, ExternalLink, Linkedin, Mail, MapPin, Building2, BookOpen, Star, GitFork } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* GitHub-style header */}
      <header className="border-b border-[#30363d] bg-[#0d1117] sticky top-0 z-50">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-[#30363d]">
                <Image src="/pfp.png" alt="Profile" width={32} height={32} className="w-full h-full object-cover" />
              </div>
              <h1 className="text-xl font-semibold text-[#f0f6fc]">Portfolio</h1>
            </div>
            <nav className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="text-[#c9d1d9] hover:text-[#f0f6fc] hover:bg-[#30363d]" asChild>
                <a href="https://github.com/Bram-cat" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="text-[#c9d1d9] hover:text-[#f0f6fc] hover:bg-[#30363d]" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Section - GitHub style */}
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          {/* Left Sidebar */}
          <div className="md:w-[296px] flex-shrink-0">
            <div className="sticky top-20">
              <div className="relative">
                <Image
                  src="/pfp.png"
                  alt="Profile"
                  width={296}
                  height={296}
                  className="w-full rounded-full border border-[#30363d]"
                  priority
                />
              </div>
              <div className="mt-4">
                <h1 className="text-2xl font-semibold text-[#f0f6fc]">Full Stack Developer</h1>
                <p className="text-xl text-[#7d8590] mt-1">Bram</p>
              </div>
              <p className="mt-4 text-[#c9d1d9]">
                Turning ideas into elegant code, one commit at a time
              </p>

              {/* Info */}
              <div className="mt-4 space-y-2 text-sm text-[#7d8590]">
                <div className="flex items-center gap-2">
                  <Building2 className="h-4 w-4" />
                  <span>University of Prince Edward Island</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  <span>Computer Science Student</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:your.email@example.com" className="hover:text-[#58a6ff] hover:underline">
                    Contact me
                  </a>
                </div>
              </div>

              {/* Social buttons - GitHub style */}
              <div className="mt-4 flex gap-2">
                <Button
                  size="sm"
                  className="flex-1 bg-[#21262d] hover:bg-[#30363d] text-[#c9d1d9] border border-[#30363d]"
                  asChild
                >
                  <a href="https://github.com/Bram-cat" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button
                  size="sm"
                  className="flex-1 bg-[#21262d] hover:bg-[#30363d] text-[#c9d1d9] border border-[#30363d]"
                  asChild
                >
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 min-w-0">
            {/* About Section */}
            <section className="mb-6">
              <h2 className="text-xl font-semibold text-[#f0f6fc] mb-4 pb-2 border-b border-[#21262d]">
                About
              </h2>
              <div className="text-[#c9d1d9] space-y-3 text-[15px] leading-relaxed">
                <p>
                  My journey in software development began with a curiosity for how technology shapes our world.
                  As a Computer Science student at UPEI, I&apos;ve transformed that curiosity into practical skills,
                  building real-world applications that solve meaningful problems.
                </p>
                <p>
                  I specialize in the modern JavaScript ecosystem—React Native for mobile, Next.js for web,
                  with robust backends using Supabase and authentication via Clerk. My focus is on creating
                  seamless user experiences while maintaining clean, scalable code.
                </p>
              </div>
            </section>

            {/* Education */}
            <section className="mb-6">
              <h2 className="text-xl font-semibold text-[#f0f6fc] mb-4 pb-2 border-b border-[#21262d]">
                Education
              </h2>
              <div className="bg-[#161b22] border border-[#30363d] rounded-md p-4">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded bg-[#21262d] flex items-center justify-center flex-shrink-0">
                    <BookOpen className="h-6 w-6 text-[#58a6ff]" />
                  </div>
                  <div>
                    <h3 className="text-[#f0f6fc] font-semibold">Bachelor of Science in Computer Science</h3>
                    <p className="text-[#7d8590] text-sm mt-1">University of Prince Edward Island (UPEI)</p>
                    <Badge className="mt-2 bg-[#1f6feb]/10 text-[#58a6ff] border-[#1f6feb]/20">Currently pursuing</Badge>
                  </div>
                </div>
              </div>
            </section>

            {/* Pinned Projects - GitHub style */}
            <section className="mb-6">
              <h2 className="text-xl font-semibold text-[#f0f6fc] mb-4 pb-2 border-b border-[#21262d]">
                Pinned Projects
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Lovelock */}
                <div className="bg-[#161b22] border border-[#30363d] rounded-md p-4 hover:border-[#58a6ff] transition-colors">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-white flex-shrink-0">
                      <Image src="/lovelock.png" alt="Lovelock" width={48} height={48} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[#58a6ff] font-semibold hover:underline">
                        <a href="https://github.com/Bram-cat/lovelock" target="_blank" rel="noopener noreferrer">
                          Lovelock
                        </a>
                      </h3>
                      <p className="text-[#7d8590] text-xs mt-0.5">Public</p>
                    </div>
                  </div>

                  <p className="text-[#c9d1d9] text-sm mb-3 leading-relaxed">
                    AI-powered numerology app with full payment integration. React Native mobile app with Next.js payment website.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {["React Native", "TypeScript", "Clerk", "Supabase", "Stripe"].map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs bg-[#1f6feb]/10 text-[#58a6ff] border-[#1f6feb]/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 text-xs text-[#7d8590]">
                    <div className="flex items-center gap-1">
                      <Star className="h-3.5 w-3.5" />
                      <span>Featured</span>
                    </div>
                    <a href="https://github.com/Bram-cat/lovelock" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-[#58a6ff]">
                      <Github className="h-3.5 w-3.5" />
                      <span>View Code</span>
                    </a>
                    <a href="https://lovelock.it.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-[#58a6ff]">
                      <ExternalLink className="h-3.5 w-3.5" />
                      <span>Live Site</span>
                    </a>
                  </div>
                </div>

                {/* Fadez Barbershop */}
                <div className="bg-[#161b22] border border-[#30363d] rounded-md p-4 hover:border-[#58a6ff] transition-colors">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-white flex-shrink-0">
                      <Image src="/fadezlogo.png" alt="Fadez" width={48} height={48} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[#58a6ff] font-semibold hover:underline">
                        <a href="https://github.com/Bram-cat/fadez-new1" target="_blank" rel="noopener noreferrer">
                          Fadez Barbershop
                        </a>
                      </h3>
                      <p className="text-[#7d8590] text-xs mt-0.5">Public</p>
                    </div>
                  </div>

                  <p className="text-[#c9d1d9] text-sm mb-3 leading-relaxed">
                    Modern, responsive website for a local barbershop. Performance-first design with stunning visuals and smooth UX.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {["Vite", "React", "Tailwind CSS"].map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs bg-[#1f6feb]/10 text-[#58a6ff] border-[#1f6feb]/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 text-xs text-[#7d8590]">
                    <a href="https://github.com/Bram-cat/fadez-new1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-[#58a6ff]">
                      <Github className="h-3.5 w-3.5" />
                      <span>View Code</span>
                    </a>
                  </div>
                </div>

                {/* Portfolio v1 */}
                <div className="bg-[#161b22] border border-[#30363d] rounded-md p-4 hover:border-[#58a6ff] transition-colors">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-[#21262d] flex-shrink-0 flex items-center justify-center">
                      <BookOpen className="h-6 w-6 text-[#58a6ff]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[#58a6ff] font-semibold hover:underline">
                        <a href="https://github.com/Bram-cat/Portfolio" target="_blank" rel="noopener noreferrer">
                          Portfolio v1
                        </a>
                      </h3>
                      <p className="text-[#7d8590] text-xs mt-0.5">Public</p>
                    </div>
                  </div>

                  <p className="text-[#c9d1d9] text-sm mb-3 leading-relaxed">
                    First portfolio showcasing web development fundamentals. A testament to growth and continuous learning.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {["HTML", "CSS", "JavaScript"].map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs bg-[#1f6feb]/10 text-[#58a6ff] border-[#1f6feb]/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 text-xs text-[#7d8590]">
                    <a href="https://github.com/Bram-cat/Portfolio" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-[#58a6ff]">
                      <Github className="h-3.5 w-3.5" />
                      <span>View Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Footer - GitHub style */}
      <footer className="border-t border-[#30363d] mt-12">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#7d8590]">
            <div className="flex items-center gap-4">
              <span>© {new Date().getFullYear()} Bram</span>
              <span className="hidden md:inline">•</span>
              <span className="text-[#58a6ff] hover:underline cursor-pointer">Built with Next.js & Tailwind CSS</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://github.com/Bram-cat" target="_blank" rel="noopener noreferrer" className="hover:text-[#58a6ff] hover:underline">
                GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#58a6ff] hover:underline">
                LinkedIn
              </a>
              <a href="mailto:your.email@example.com" className="hover:text-[#58a6ff] hover:underline">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
