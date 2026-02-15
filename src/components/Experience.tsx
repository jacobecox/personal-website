const jobs = [
  {
    title: "Senior Software Developer",
    company: "Company Name",
    period: "2023 – Present",
    description:
      "Building and maintaining web applications using React, Next.js, and TypeScript. Leading front-end architecture decisions and mentoring junior developers.",
  },
  {
    title: "Software Developer",
    company: "Previous Company",
    period: "2021 – 2023",
    description:
      "Developed full-stack features for client-facing products. Worked with Node.js, PostgreSQL, and React to deliver scalable solutions.",
  },
  {
    title: "Junior Developer",
    company: "First Company",
    period: "2019 – 2021",
    description:
      "Started my professional career building internal tools and customer-facing web apps. Gained foundational skills in JavaScript, HTML/CSS, and REST APIs.",
  },
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
                <h3 className="text-lg font-semibold">{job.title}</h3>
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
