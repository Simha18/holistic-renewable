import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { config, services } from "../data/siteContent.js";
export default function ContactForm() {
  const [state, setState] = useState("idle");
  const [error, setError] = useState("");
  async function submit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    setState("sending");
    setError("");
    const data = Object.fromEntries(new FormData(form));
    try {
      const r = await fetch(`https://formsubmit.co/ajax/${config.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...data,
          _subject: "New enquiry \u2014 Holistic Renewable Technologies",
          _template: "table",
          _honey: data.website,
        }),
      });
      const result = await r.json();
      if (!r.ok || !(result.success === true || result.success === "true"))
        throw new Error();
      setState("sent");
      form.reset();
    } catch {
      setState("error");
      setError(
        "Your enquiry could not be sent. Please try again or email us directly.",
      );
    }
  }
  return (
    <form className="contact-form" onSubmit={submit}>
      <h3>Tell us about your idea.</h3>
      <p>We’d love to understand what you’re working on.</p>
      <div className="form-row">
        <label>
          Your name *
          <input
            name="name"
            required
            autoComplete="name"
            placeholder="Full name"
            maxLength={100}
          />
        </label>
        <label>
          Email address *
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
          />
        </label>
      </div>
      <div className="form-row">
        <label>
          Phone number
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="Your phone number"
            maxLength={30}
          />
        </label>
        <label>
          Organisation
          <input
            name="organisation"
            autoComplete="organization"
            placeholder="Company or institution"
            maxLength={150}
          />
        </label>
      </div>
      <label>
        I’m interested in *
        <select name="interest" required defaultValue="">
          <option value="" disabled>
            Select a solution
          </option>
          {services.map((s) => (
            <option key={s.title}>{s.title}</option>
          ))}
          <option>Something else</option>
        </select>
      </label>
      <label>
        Your message *
        <textarea
          name="message"
          required
          minLength={10}
          maxLength={5e3}
          rows={5}
          placeholder="A little about your project, location and what you have in mind…"
        />
      </label>
      <input
        name="website"
        className="honeypot"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
      <label className="consent">
        <input type="checkbox" required />I agree to be contacted about my
        enquiry.
      </label>
      <button className="button" disabled={state === "sending"} type="submit">
        {state === "sending" ? "Sending\u2026" : "Send your enquiry"}
        <ArrowUpRight size={18} />
      </button>
      <p className="form-status" role="status">
        {state === "sent"
          ? "Your enquiry was accepted by the form service. Thank you for getting in touch."
          : error}
      </p>
      <small>
        Prefer email?{" "}
        <a href={`mailto:${config.email}`}>Write to us directly.</a>
      </small>
    </form>
  );
}
