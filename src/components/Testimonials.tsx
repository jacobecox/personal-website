const testimonials = [
  {
    name: "Stevie Flynn",
    rating: 5,
    body: "Incredibly happy with my experience using Jacob Cox to design my website as a private practice dietitian! Jacob listened intently to my requests, provided user-friendly, detailed instructions for items on my end, and truly brought my vision to life! I am confident my business will expand thanks to Jacob's expertise in web development! Jacob is so kind, patient, and respectful, would 100/10 recommend to anyone!!",
    source: "Google",
  },
  {
    name: "Adam Batterson",
    rating: 5,
    body: "Jacob took care of our website for us! It's got everything we need, looks sharp, and easy to navigate. Thanks Jacob!",
    source: "Google",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-12">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-8 text-3xl font-bold">Testimonials</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-lg border border-border bg-card p-6"
            >
              <div className="mb-3 flex items-center gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mb-4 text-sm text-muted">&ldquo;{t.body}&rdquo;</p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold">{t.name}</span>
                <span className="text-xs text-muted">{t.source}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <a
            href="https://g.page/r/CWddpdjNj6vIEBM/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-primary"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Leave a review on Google
          </a>
        </div>
      </div>
    </section>
  );
}
