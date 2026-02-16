const projects: {
  name: string;
  description: string;
  tech: string[];
  link: string;
}[] = [];

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
