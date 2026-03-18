import TechTags from "@/components/TechTags";

const projects: {
  name: string;
  description: string;
  tech: string[];
  link: string;
}[] = [
  {
    name: "Flourish",
    description:
      "A sourdough baking companion app that helps bakers manage recipes (with URL import), track starter health with a feeding timer and readiness checklist, and keep a baker's journal with photos, notes, and ratings linked to each bake.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "FusionAuth", "Cloudflare R2", "Control Plane"],
    link: "https://flourishbake.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-12">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-8 text-3xl font-bold">Projects</h2>
        {projects.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.name}
                className="group flex flex-col rounded-lg border border-border bg-card p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5 hover:border-primary/40"
              >
                <h3 className="mb-2 text-lg font-semibold transition-colors group-hover:text-primary">{project.name}</h3>
                <p className="mb-4 flex-1 text-sm text-muted">
                  {project.description}
                </p>
                <TechTags tags={project.tech} />
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-primary hover:underline"
                >
                  View Project &rarr;
                </a>
              </div>
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
