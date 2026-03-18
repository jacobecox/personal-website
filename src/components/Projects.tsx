import Image from "next/image";
import TechTags from "@/components/TechTags";

const projects: {
  name: string;
  description: string;
  tech: string[];
  link: string;
  screenshot?: string;
}[] = [
  {
    name: "Flourish",
    description:
      "A sourdough baking companion app with recipe management (including URL import), a baker's journal with photos and bake metrics, a starter tracker with feeding timer, and an AI assistant powered by Claude and RAG — giving it foundational sourdough knowledge alongside each user's own recipes and journal entries.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "pgvector", "Claude (Anthropic)", "Voyage AI", "FusionAuth", "Cloudflare R2", "Resend", "Control Plane"],
    link: "https://flourishbake.com",
    screenshot: "/flourish-website.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-12">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-4 text-3xl font-bold">Projects</h2>
        <p className="mb-8 max-w-2xl text-muted">
          A collection of personal projects I&apos;ve built to solve real problems and explore new technologies.
        </p>
        {projects.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5 hover:border-primary/40"
              >
                {project.screenshot && (
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={project.screenshot}
                      alt={`${project.name} screenshot`}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-2 text-lg font-semibold transition-colors group-hover:text-primary">
                    {project.name}
                  </h3>
                  <p className="mb-4 flex-1 text-sm text-muted">
                    {project.description}
                  </p>
                  <TechTags tags={project.tech} />
                  <span className="text-sm font-medium text-primary">
                    View Project &rarr;
                  </span>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-dashed border-border bg-card p-12 text-center">
            <p className="text-lg font-medium text-muted">
              Projects coming soon — stay tuned!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
