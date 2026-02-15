const clients = [
  {
    name: "Anchor Baptist Church",
    description:
      "Built a modern, SEO-optimized church website with structured data markup, a custom admin panel for the pastor to manage events, edit service times, and monitor site traffic, along with a photo gallery, contact form, and live stream integration for remote visitors.",
    url: "https://anchor-baptist-website.vercel.app/",
  }
];

export default function Clients() {
  return (
    <section id="clients" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-8 text-3xl font-bold">Clients</h2>
        <p className="mb-8 max-w-2xl text-muted">
          I&apos;ve had the pleasure of working with a range of clients to
          build and improve their digital products. Here are a few highlights.
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          {clients.map((client) => (
            <a
              key={client.name}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary"
            >
              <h3 className="mb-2 text-lg font-semibold group-hover:text-primary">
                {client.name}
              </h3>
              <p className="mb-3 text-sm text-muted">{client.description}</p>
              <span className="text-sm font-medium text-primary">
                Visit Site &rarr;
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
