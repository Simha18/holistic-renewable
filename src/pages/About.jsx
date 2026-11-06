import React from "react";
import CTA from "../components/CTA.jsx";
import PageHero from "../components/PageHero.jsx";
import { photos } from "../data/siteContent.js";
export default function About() {
  return (
    <>
      <PageHero
        label="ABOUT HOLISTIC"
        title={
          <>
            A shared purpose.
            <br />
            <em>A more circular world.</em>
          </>
        }
        text="We connect renewable energy, local resources and practical knowledge to give organic waste a meaningful next chapter."
      />
      <section className="section story">
        <div className="story-image">
          <img src={photos.field} alt="Agricultural landscape" />
          <span className="image-label">ROOTED IN POSSIBILITY</span>
        </div>
        <div className="story-content">
          <p className="eyebrow">WHY WE EXIST</p>
          <h2>
            Renewable thinking.
            <br />
            Holistic action.
          </h2>
          <p>
            Our work spans compressed biogas production, consulting for small
            and medium scale plants, feedstock supply chains, and education.
          </p>
          <p>
            These are connected parts of one ecosystem. Reliable feedstock
            supports better plant planning. Skilled people support daily
            operations. Thoughtful implementation brings them together.
          </p>
          <CTA>Build with us</CTA>
        </div>
      </section>
      <section className="section values">
        <p className="eyebrow">WHAT GUIDES OUR WORK</p>
        <h2>Purpose in every decision.</h2>
        <div className="three-grid">
          {[
            [
              "01",
              "Think in cycles",
              "Treat organic material as a resource and consider what happens before and after energy production.",
            ],
            [
              "02",
              "Start with the local context",
              "Build the conversation around available feedstock, project needs and the people who will operate the plant.",
            ],
            [
              "03",
              "Share what we know",
              "Turn technical understanding into practical training, useful curricula and stronger plant maintenance skills.",
            ],
          ].map(([n, t, p]) => (
            <article key={n}>
              <span>{n}</span>
              <h3>{t}</h3>
              <p>{p}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
