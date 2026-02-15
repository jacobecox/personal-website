import Image from "next/image";

const jobs = [
  {
    title: "Software Engineer",
    company: "Control Plane",
    period: "2025 – Present",
    description:
      "Building and maintaining cloud infrastructure on a multi-cloud platform spanning AWS, GCP, and Azure. Assisting customers with onboarding their infrastructure to the platform, creating Helm templates for popular open-source applications, and contributing to internal tooling and documentation to improve the developer experience.",
    logo: "/cpln-icon.svg",
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-8 text-3xl font-bold">Experience</h2>
        <div className="space-y-8">
          {jobs.map((job) => (
            <div
              key={job.title + job.company}
              className="rounded-lg border border-border bg-card p-6"
            >
              <div className="mb-2 flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                <div className="flex items-center gap-3">
                  {"logo" in job && job.logo && (
                    <Image
                      src={job.logo}
                      alt={job.company}
                      width={32}
                      height={32}
                      className="h-8 w-auto"
                    />
                  )}
                  <h3 className="text-lg font-semibold">{job.title}</h3>
                </div>
                <span className="text-sm text-muted">{job.period}</span>
              </div>
              <p className="mb-3 text-sm font-medium text-primary">
                {job.company}
              </p>
              <p className="text-muted">{job.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
