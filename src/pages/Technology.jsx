import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import CTA from "../components/CTA.jsx";
import PageHero from "../components/PageHero.jsx";
import FAQ from "../components/FAQ.jsx";
import { services } from "../data/siteContent.js";
export default function Technology() {
  return (
    <>
      <PageHero
        label="OUR TECHNOLOGY & SOLUTIONS"
        title={
          <>
            Organic beginnings.
            <br />
            <em>Extraordinary potential.</em>
          </>
        }
        text="A connected approach to compressed biogas, from the resources that enter a plant to the people who keep it running."
      />
      <section className="section">
        <p className="eyebrow">UNDERSTANDING THE PROCESS</p>
        <h2>From feedstock to clean fuel.</h2>
        <div className="process">
          {[
            [
              "Collect & prepare",
              "Assess, sort and prepare suitable organic material, matched to the plant\u2019s process.",
            ],
            [
              "Digest",
              "Microorganisms break down organic matter without oxygen, producing raw biogas and digestate.",
            ],
            [
              "Upgrade & compress",
              "Raw biogas is cleaned and upgraded to biomethane, then compressed for suitable end uses.",
            ],
            [
              "Return nutrients",
              "Digestate can be processed for nutrient recovery, subject to quality and applicable requirements.",
            ],
          ].map(([t, p], i) => (
            <article key={t}>
              <span>
                0{i + 1}
                <ArrowRight size={20} />
              </span>
              <h3>{t}</h3>
              <p>{p}</p>
            </article>
          ))}
        </div>
        <p className="footnote">
          Process design, gas quality and outputs depend on feedstock,
          equipment, operating conditions and applicable standards.
        </p>
      </section>
      <section className="section solutions">
        {services.map((s, i) => (
          <article id={"service-" + i} className="solution-row" key={s.title}>
            <span className={"solution-icon " + s.color}>
              <s.icon size={32} />
            </span>
            <div>
              <p className="eyebrow">{s.tag}</p>
              <h2>{s.title}</h2>
              <p>{s.text}</p>
              <ul>
                {[
                  [
                    "Feedstock and process planning",
                    "Operations and resource-use considerations",
                    "Production-focused project conversations",
                  ],
                  [
                    "Feasibility and site assessment",
                    "Technology selection and implementation planning",
                    "Commissioning and operations readiness",
                  ],
                  [
                    "Cow dung and Napier grass sourcing",
                    "Organic and food waste supply planning",
                    "Collection, logistics and feedstock consistency",
                  ],
                  [
                    "Curriculum and learning pathway design",
                    "Practical operations and maintenance training",
                    "Talent development for the CBG ecosystem",
                  ],
                ][i].map((v) => (
                  <li key={v}>
                    <CheckCircle2 size={16} />
                    {v}
                  </li>
                ))}
              </ul>
              <CTA>Discuss your requirements</CTA>
            </div>
          </article>
        ))}
        <div id="training" />
        <FAQ />
      </section>
    </>
  );
}
