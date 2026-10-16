import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden" id="hero-section">
        {/* Subtle grid background */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,hsl(var(--background))_70%)]" />

        <div className="relative mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            {/* Status badge */}
            <Badge
              variant="secondary"
              className="mb-6 gap-1.5 px-3 py-1 text-xs font-medium"
              id="status-badge"
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-green-500" />
              </span>
              Available for work
            </Badge>

            {/* Name & Role */}
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Jubair Hatem
            </h1>
            <p className="mt-4 text-lg font-medium text-muted-foreground sm:text-xl">
              MERN Stack Developer
            </p>

            {/* Description */}
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground/80">
              Building modern, performant web applications with React, Next.js,
              Node.js, and MongoDB. Based in Dhaka, Bangladesh.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link href="/contact">
                <Button size="lg" id="hero-contact-btn">
                  Get in Touch
                  <ArrowRight className="ml-1.5 size-4" />
                </Button>
              </Link>
              <Link href="/skills">
                <Button variant="outline" size="lg" id="hero-skills-btn">
                  View Skills
                </Button>
              </Link>
            </div>

            {/* Social Links */}
            <div className="mt-10 flex items-center gap-2">
              <Link
                href="https://github.com/Jubairhatem"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon" id="hero-github">
                  <GithubIcon className="size-4" />
                </Button>
              </Link>
              <Link
                href="https://www.linkedin.com/in/jubair-hatem-47256b3b5/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon" id="hero-linkedin">
                  <LinkedinIcon className="size-4" />
                </Button>
              </Link>
              <Link href="mailto:jubairhatem@gmail.com">
                <Button variant="ghost" size="icon" id="hero-email">
                  <Mail className="size-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Strip */}
      <section className="border-t border-border/40 bg-muted/30 py-10" id="tech-strip">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="mb-6 text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Tech Stack
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "Tailwind CSS",
              "React",
              "Next.js",
              "shadcn/ui",
              "Node.js",
              "Express",
              "MongoDB",
              "Better Auth",
              "Vercel",
              "Netlify",
            ].map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="px-3 py-1 text-xs font-medium"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
