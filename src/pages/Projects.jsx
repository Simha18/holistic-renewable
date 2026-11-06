import React, { useState } from "react";
import { ArrowUpRight, Leaf } from "lucide-react";
import Link from "../components/Link.jsx";
import PageHero from "../components/PageHero.jsx";
import { photos } from "../data/siteContent.js";
export default function Projects() {
  return (
    <>
      <PageHero
        label="PROJECT POSSIBILITIES"
        title={
          <>
            Local resources.
            <br />
            <em>Real-world possibilities.</em>
          </>
        }
        text="Explore the kinds of projects we can discuss together, shaped around feedstock availability, plant needs and community context."
      />
      <ProjectListing />
      <section className="section">
        <p className="eyebrow">YOUR PROJECT, STEP BY STEP</p>
        <h2>Clarity before construction.</h2>
        <div className="three-grid">
          {[
            [
              "01",
              "Start a conversation",
              "Tell us about your site, organic resources and the outcome you want to achieve.",
            ],
            [
              "02",
              "Understand the opportunity",
              "Review feedstock, project scale, process options and implementation considerations.",
            ],
            [
              "03",
              "Define a practical path",
              "Shape the next steps around your resources, operational needs and project readiness.",
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
function ProjectListing() {
  const [filter, setFilter] = useState("All opportunities");
  const items = [
    {
      type: "CBG production",
      title: "Agricultural resources. Renewed.",
      image: photos.field,
      text: "A plant concept built around locally available cow dung and agricultural feedstocks.",
    },
    {
      type: "Feedstock",
      title: "Better connections. Better inputs.",
      image: photos.grass,
      text: "A supply-chain concept connecting organic material sources with plant requirements.",
    },
    {
      type: "Training",
      title: "Skills that keep plants running.",
      image: photos.training,
      text: "An education concept covering everyday operations, maintenance and technical foundations.",
    },
  ];
  return (
    <section className="section">
      <div className="project-note">
        <Leaf size={18} />
        <p>
          Illustrative project opportunities. Verified client projects and
          outcomes will be added when available.
        </p>
      </div>
      <div className="filters">
        {["All opportunities", "CBG production", "Feedstock", "Training"].map(
          (f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={filter === f ? "selected" : ""}
            >
              {f}
            </button>
          ),
        )}
      </div>
      <div className="project-grid">
        {items
          .filter((i) => filter === "All opportunities" || i.type === filter)
          .map((i) => (
            <article key={i.title}>
              <div className="project-image">
                <img
                  src={i.image}
                  alt={
                    i.type === "Training"
                      ? "Learning environment"
                      : "Illustrative natural landscape"
                  }
                  loading="lazy"
                />
                <span>PROJECT CONCEPT</span>
              </div>
              <p className="eyebrow">{i.type}</p>
              <h3>{i.title}</h3>
              <p>{i.text}</p>
              <Link to="/contact" className="under-link">
                Explore this opportunity <ArrowUpRight size={17} />
              </Link>
            </article>
          ))}
      </div>
    </section>
  );
}
