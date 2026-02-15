const projects = [
  {
    name: "Project One",
    description:
      "A brief description of this project — what it does, the tech stack, and why you built it.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/yourusername/project-one",
  },
  {
    name: "Project Two",
    description:
      "Another project you're proud of. Describe the problem it solves and the approach you took.",
    tech: ["React", "Node.js", "PostgreSQL"],
    link: "https://github.com/yourusername/project-two",
  },
  {
    name: "Project Three",
    description:
      "A side project or open-source contribution that showcases your skills and interests.",
    tech: ["TypeScript", "Express", "Redis"],
    link: "https://github.com/yourusername/project-three",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-8 text-3xl font-bold">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.name}
              className="flex flex-col rounded-lg border border-border bg-card p-6"
            >
              <h3 className="mb-2 text-lg font-semibold">{project.name}</h3>
              <p className="mb-4 flex-1 text-sm text-muted">
                {project.description}
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
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
      </div>
    </section>
  );
}
