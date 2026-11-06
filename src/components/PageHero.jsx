import React from "react";
import { Sprout } from "lucide-react";
export default function PageHero({ label, title, text }) {
  return (
    <section className="page-hero">
      <p className="eyebrow">{label}</p>
      <h1>{title}</h1>
      <p>{text}</p>
      <div className="page-symbol">
        <Sprout size={160} strokeWidth={0.6} />
      </div>
    </section>
  );
}
