export default function Hero() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
          Software Developer
        </p>
        <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
          Hi, I&apos;m Jacob Cox.
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-muted">
          I build modern web applications and help businesses bring their ideas
          to life. Passionate about clean code, great user experiences, and
          solving real problems with software.
        </p>
        <div className="flex gap-4">
          <a
            href="#contact"
            className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="rounded-lg border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-card"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
}
