import Image from "next/image";
import SkillsTicker from "@/components/SkillsTicker";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-8 md:pt-24 md:pb-10">
      {/* Decorative gradient blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -top-16 right-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex flex-col-reverse items-center gap-12 md:flex-row md:items-center md:justify-between">
          <div className="flex-1">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              Full Stack Software Engineer
            </p>
            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Jacob Cox.
              </span>
            </h1>
            <p className="mb-8 max-w-xl text-lg text-muted">
              I build modern web applications and help businesses bring their
              ideas to life. Passionate about clean code, great user
              experiences, and solving real problems with software.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-dark hover:shadow-primary/30"
              >
                Get in Touch
              </a>
              <a
                href="#clients"
                className="rounded-lg border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-card"
              >
                View My Work
              </a>
            </div>
          </div>

          <div className="relative shrink-0">
            {/* Glow ring behind photo */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-accent/20 blur-xl" />
            <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-primary/30 md:h-64 md:w-64">
              <Image
                src="/headshot.jpg"
                alt="Jacob Cox"
                fill
                className="object-cover object-[center_10%] scale-[1.30]"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Skills ticker below hero content */}
      <div className="mt-16">
        <SkillsTicker />
      </div>
    </section>
  );
}
