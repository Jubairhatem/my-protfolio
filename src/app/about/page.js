import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MapPin, GraduationCap, Code, Calendar } from "lucide-react";

export const metadata = {
  title: "About | Jubair Hatem",
  description:
    "Learn more about Jubair Hatem — a MERN Stack Developer and student at Programming Hero Batch-14, based in Dhaka, Bangladesh.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      {/* Page Header */}
      <div className="mb-12">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          About
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Who I Am
        </h1>
        <Separator className="mt-4" />
      </div>

      {/* Main Content */}
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Left Column — Bio */}
        <div className="lg:col-span-2 space-y-6">
          <p className="text-base leading-relaxed text-muted-foreground">
            Hi, I'm <span className="font-semibold text-foreground">Jubair Hatem</span>, 
            a passionate MERN Stack Developer based in Dhaka, Bangladesh. I specialize 
            in building clean, responsive, and performant web applications using modern 
            technologies like React, Next.js, Node.js, and MongoDB.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            I'm currently a student at <span className="font-semibold text-foreground">Programming Hero Batch-14</span>, 
            where I'm sharpening my full-stack development skills and learning 
            industry-standard practices. My goal is to craft user-centric applications 
            that solve real-world problems with clean code and thoughtful design.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            I enjoy working across the entire stack — from designing intuitive user 
            interfaces with Tailwind CSS and shadcn/ui to building robust APIs with 
            Express and MongoDB. I'm always eager to learn new tools and frameworks 
            to stay current in the ever-evolving JavaScript ecosystem.
          </p>
        </div>

        {/* Right Column — Quick Facts */}
        <div className="space-y-4">
          <Card className="border-border/60">
            <CardContent className="space-y-4 p-5">
              <div className="flex items-start gap-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-md bg-muted">
                  <MapPin className="size-4 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Location
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>

              <Separator />

              <div className="flex items-start gap-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-md bg-muted">
                  <GraduationCap className="size-4 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Education
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    Programming Hero
                  </p>
                  <p className="text-xs text-muted-foreground">Batch-14</p>
                </div>
              </div>

              <Separator />

              <div className="flex items-start gap-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-md bg-muted">
                  <Code className="size-4 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Role
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    MERN Stack Developer
                  </p>
                </div>
              </div>

              <Separator />

              <div className="flex items-start gap-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-md bg-muted">
                  <Calendar className="size-4 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Status
                  </p>
                  <Badge variant="secondary" className="mt-0.5 text-xs">
                    <span className="mr-1.5 inline-flex size-1.5 rounded-full bg-green-500" />
                    Available for work
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* What I Do Section */}
      <div className="mt-16">
        <h2 className="text-xl font-bold tracking-tight text-foreground">
          What I Do
        </h2>
        <Separator className="mt-3 mb-6" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Frontend Development",
              description:
                "Building responsive and interactive UIs with React, Next.js, Tailwind CSS, and shadcn/ui.",
            },
            {
              title: "Backend Development",
              description:
                "Designing RESTful APIs and server-side logic with Node.js, Express, and MongoDB.",
            },
            {
              title: "Deployment & DevOps",
              description:
                "Deploying and managing applications on Vercel and Netlify with CI/CD workflows.",
            },
          ].map((item) => (
            <Card key={item.title} className="border-border/60">
              <CardContent className="p-5">
                <h3 className="text-sm font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
