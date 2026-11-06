import React from "react";
import { Sun } from "lucide-react";
import CTA from "./CTA.jsx";
export default function ClosingCTA() {
  return (
    <section className="closing">
      <div>
        <p className="eyebrow light">SMALL CONVERSATIONS. BIG POSSIBILITIES.</p>
        <h2>
          A better tomorrow
          <br />
          starts <em>with us.</em>
        </h2>
      </div>
      <div>
        <p>
          Have a project, a question, or an idea?
          <br />
          Let’s turn possibility into a plan.
        </p>
        <CTA light>Let’s start a conversation</CTA>
      </div>
      <Sun className="closing-sun" size={230} strokeWidth={0.5} />
    </section>
  );
}
