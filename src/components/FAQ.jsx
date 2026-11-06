import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";
export default function FAQ() {
  const [open, setOpen] = useState(0);
  const q = [
    [
      "Which feedstocks can we discuss?",
      "Cow dung, Napier grass, organic waste and food waste are starting points. Suitability, availability, contamination and consistency should be assessed for each project.",
    ],
    [
      "Do you support small and medium scale plants?",
      "Yes. Plant implementation and consulting for small and medium scale CBG projects are part of our business. Contact us to discuss your context and requirements.",
    ],
    [
      "Can you help develop a training curriculum?",
      "Yes. We work on curriculum building, education and training for CBG plant maintenance and talent development. A learning programme can be discussed around the intended audience and needs.",
    ],
  ];
  return (
    <div className="faq">
      <p className="eyebrow">A LITTLE MORE CLARITY</p>
      <h2>Good questions. Useful answers.</h2>
      {q.map(([a, b], i) => (
        <div key={a}>
          <button
            aria-expanded={open === i}
            onClick={() => setOpen(open === i ? -1 : i)}
          >
            {a}
            {open === i ? <Minus size={20} /> : <Plus size={20} />}
          </button>
          {open === i && <p>{b}</p>}
        </div>
      ))}
    </div>
  );
}
