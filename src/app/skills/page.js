import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "Skills | Jubair Hatem",
  description:
    "Technical skills and expertise of Jubair Hatem — HTML, CSS, JavaScript, React, Next.js, Node.js, Express, MongoDB, and more.",
};

const skillCategories = [
  {
    title: "Frontend",
    description: "Client-side technologies for building user interfaces.",
    skills: [
      { name: "HTML", level: "Advanced" },
      { name: "CSS", level: "Advanced" },
      { name: "JavaScript", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "React", level: "Advanced" },
      { name: "Next.js", level: "Intermediate" },
      { name: "shadcn/ui", level: "Intermediate" },
    ],
  },
  {
    title: "Backend",
    description: "Server-side technologies and databases.",
    skills: [
      { name: "Node.js", level: "Intermediate" },
      { name: "Express", level: "Intermediate" },
      { name: "MongoDB", level: "Intermediate" },
      { name: "Better Auth", level: "Intermediate" },
    ],
  },
  {
    title: "Tools & Deployment",
    description: "Development tools and hosting platforms.",
    skills: [
      { name: "Git & GitHub", level: "Advanced" },
      { name: "VS Code", level: "Advanced" },
      { name: "Vercel", level: "Intermediate" },
      { name: "Netlify", level: "Intermediate" },
    ],
  },
];

const levelColor = {
  Advanced: "bg-foreground text-background",
  Intermediate: "bg-muted text-muted-foreground",
  Beginner: "bg-muted/50 text-muted-foreground/70",
};

export default function SkillsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      {/* Page Header */}
      <div className="mb-12">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Skills
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Technical Expertise
        </h1>
        <p className="mt-3 text-base text-muted-foreground">
          Technologies and tools I use to build web applications.
        </p>
        <Separator className="mt-4" />
      </div>

      {/* Skills Grid */}
      <div className="space-y-8">
        {skillCategories.map((category) => (
          <div key={category.title}>
            <h2 className="text-lg font-semibold tracking-tight text-foreground">
              {category.title}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {category.description}
            </p>

            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {category.skills.map((skill) => (
                <Card
                  key={skill.name}
                  className="border-border/60 transition-colors hover:border-border"
                >
                  <CardContent className="flex items-center justify-between p-4">
                    <span className="text-sm font-medium text-foreground">
                      {skill.name}
                    </span>
                    <Badge
                      className={`text-[10px] font-medium ${levelColor[skill.level]}`}
                    >
                      {skill.level}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Separator className="mt-8" />
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-12">
        <Card className="border-border/60 bg-muted/30">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                Total Skills
              </p>
              <p className="mt-2 text-4xl font-bold text-foreground">
                {skillCategories.reduce(
                  (acc, cat) => acc + cat.skills.length,
                  0
                )}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Technologies & Tools
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
