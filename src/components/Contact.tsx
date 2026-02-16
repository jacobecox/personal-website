"use client";

import type { FormEventHandler } from "react";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/xlgwbyjd", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-12">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-4 text-3xl font-bold">Get in Touch</h2>
        <p className="mb-8 max-w-xl text-muted">
          Have a project in mind or just want to say hello? Fill out the form
          below and I&apos;ll get back to you as soon as I can.
        </p>

        {status === "success" ? (
          <div className="max-w-xl rounded-lg border border-primary/30 bg-primary/5 p-8 text-center">
            <h3 className="mb-2 text-xl font-semibold">Thanks for reaching out!</h3>
            <p className="mb-4 text-muted">
              Your message has been sent. I&apos;ll get back to you as soon as I can.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="text-sm font-medium text-primary hover:underline"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-xl space-y-6">
            <div>
              <label
                htmlFor="name"
                className="mb-1 block text-sm font-medium"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-sm font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-1 block text-sm font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary"
              />
            </div>
            {status === "error" && (
              <p className="text-sm text-red-500">
                Something went wrong. Please try again.
              </p>
            )}
            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-dark disabled:opacity-50"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
