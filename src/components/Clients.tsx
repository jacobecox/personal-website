const clients = [
  {
    name: "Client One",
    description:
      "Brief description of the work you did for this client and the impact it had.",
    url: "https://clientone.com",
  },
  {
    name: "Client Two",
    description:
      "What you built or improved for this client. Mention key outcomes if possible.",
    url: "https://clienttwo.com",
  },
  {
    name: "Client Three",
    description:
      "Another client project — what was the challenge and how did you help solve it?",
    url: "https://clientthree.com",
  },
  {
    name: "Client Four",
    description:
      "Describe the scope of work, technologies used, and results delivered.",
    url: "https://clientfour.com",
  },
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
