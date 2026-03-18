import Image from "next/image";

const jobs = [
  {
    title: "Software Engineer",
    company: "Control Plane",
    url: "https://controlplane.com/",
    period: "2025 – Present",
    description:
      "Building and maintaining cloud infrastructure on a multi-cloud platform spanning AWS, GCP, and Azure. Assisting customers with onboarding their infrastructure to the platform, creating Helm templates for popular open-source applications, and contributing to internal tooling and documentation to improve the developer experience.",
    logo: "/cpln-icon.svg",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-12">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-8 text-3xl font-bold">Experience</h2>
        <div className="space-y-6">
          {jobs.map((job) => {
            const CardWrapper = job.url
              ? ({ children }: { children: React.ReactNode }) => (
                  <a
                    href={job.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block rounded-lg border border-border bg-card p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5 hover:border-primary/40"
                  >
                    {children}
                  </a>
                )
              : ({ children }: { children: React.ReactNode }) => (
                  <div className="group rounded-lg border border-border bg-card p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5 hover:border-primary/40">
                    {children}
                  </div>
                );

            return (
              <CardWrapper key={job.title + job.company}>
                <div className="mb-2 flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                  <div className="flex items-center gap-3">
                    {job.logo && (
                      <Image
                        src={job.logo}
                        alt={job.company}
                        width={32}
                        height={32}
                        className="h-8 w-auto"
                      />
                    )}
                    <h3 className="text-lg font-semibold transition-colors group-hover:text-primary">
                      {job.title}
                    </h3>
                  </div>
                  <span className="text-sm text-muted">{job.period}</span>
                </div>
                <p className="mb-3 text-sm font-medium text-primary">{job.company}</p>
                <p className="text-muted">{job.description}</p>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
