import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-20 sm:py-32">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-shrink-0">
              <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <Image
                  src="/pfp.png"
                  alt="Profile"
                  width={224}
                  height={224}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl sm:text-7xl font-bold text-white mb-4">
                Full Stack Developer
              </h1>
              <p className="text-2xl text-gray-300 mb-6">
                Computer Science Student at UPEI
              </p>
              <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
                Passionate about building innovative mobile and web applications.
                Experienced in React Native, Next.js, TypeScript, and modern full-stack development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="bg-gradient-to-b from-black to-gray-950 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-4xl font-bold text-white mb-8">My Journey</h2>
          <Card className="bg-gray-900 border-gray-700">
            <CardContent className="pt-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                My journey in software development began with a curiosity for how technology shapes our world.
                As a Computer Science student at UPEI, I've transformed that curiosity into practical skills,
                building real-world applications that solve meaningful problems. From creating an AI-powered
                numerology app with full payment integration to developing websites for local businesses,
                each project has expanded my expertise in full-stack development. I specialize in the modern
                JavaScript ecosystem—React Native for mobile, Next.js for web, with robust backends using
                Supabase and authentication via Clerk. My focus is on creating seamless user experiences
                while maintaining clean, scalable code.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Education Section */}
      <section className="bg-gray-950 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-4xl font-bold text-white mb-8">Education</h2>
          <Card className="bg-gray-900 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white">
                Bachelor of Science in Computer Science
              </CardTitle>
              <CardDescription className="text-lg text-gray-300">
                University of Prince Edward Island (UPEI)
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-black border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-4xl font-bold text-white mb-12">Projects</h2>

          <div className="space-y-8">
            {/* Lovelock Project */}
            <Card className="bg-gray-900 border-gray-700 hover:border-gray-500 transition-all">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Lovelock</CardTitle>
                <CardDescription className="text-gray-300">AI Numerology Android Application</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  A comprehensive AI-powered numerology app with payment processing.
                  Built with React Native for mobile, featuring authentication via Clerk,
                  Supabase backend, and Stripe payment integration. Includes a companion
                  Next.js website for payment processing.
                </p>
                <div className="mb-6">
                  <p className="text-sm font-semibold text-white mb-3">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    {["React Native", "Clerk", "Supabase", "Stripe", "TypeScript", "Next.js"].map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-white text-black hover:bg-gray-200">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex gap-4">
                <Button asChild variant="default" className="bg-white text-black hover:bg-gray-200">
                  <a href="https://github.com/Bram-cat/lovelock" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                  <a href="https://lovelock.it.com" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visit Website
                  </a>
                </Button>
              </CardFooter>
            </Card>

            {/* Fadez Barbershop Project */}
            <Card className="bg-gray-900 border-gray-700 hover:border-gray-500 transition-all">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Fadez Barbershop</CardTitle>
                <CardDescription className="text-gray-300">Local Business Website</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  A modern, responsive website for a local barbershop featuring service listings,
                  booking information, and gallery. Built with a focus on performance and user experience.
                </p>
                <div className="mb-6">
                  <p className="text-sm font-semibold text-white mb-3">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    {["Vite", "React", "Tailwind CSS"].map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-white text-black hover:bg-gray-200">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="default" className="bg-white text-black hover:bg-gray-200">
                  <a href="https://github.com/Bram-cat/fadez-new1" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </a>
                </Button>
              </CardFooter>
            </Card>

            {/* Previous Portfolio Project */}
            <Card className="bg-gray-900 border-gray-700 hover:border-gray-500 transition-all">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Portfolio Website</CardTitle>
                <CardDescription className="text-gray-300">Personal Portfolio</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  Previous iteration of personal portfolio showcasing web development skills and projects.
                </p>
                <div className="mb-6">
                  <p className="text-sm font-semibold text-white mb-3">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    {["HTML", "CSS", "JavaScript"].map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-white text-black hover:bg-gray-200">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="default" className="bg-white text-black hover:bg-gray-200">
                  <a href="https://github.com/Bram-cat/Portfolio" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
