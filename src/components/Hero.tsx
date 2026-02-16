import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col-reverse items-center gap-12 md:flex-row md:items-start md:justify-between">
          <div className="flex-1">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              Software Developer
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
              Hi, I&apos;m Jacob Cox.
            </h1>
            <p className="mb-8 max-w-2xl text-lg text-muted">
              I build modern web applications and help businesses bring their
              ideas to life. I&apos;m passionate about clean code, great user
              experiences, and solving real problems with software.
            </p>
            <div className="flex gap-4">
              <a
                href="#contact"
                className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
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
          <div className="relative h-48 w-48 shrink-0 overflow-hidden rounded-full border-4 border-border md:h-64 md:w-64">
            <Image
              src="/headshot.jpg"
              alt="Jacob Cox"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
