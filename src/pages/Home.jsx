import React from "react";
import {
  ArrowUpRight,
  ChevronDown,
  Leaf,
  Sprout,
  Wind,
  Recycle,
  Sun,
  GraduationCap,
} from "lucide-react";
import CTA from "../components/CTA.jsx";
import Link from "../components/Link.jsx";
import { photos, services } from "../data/siteContent.js";
export default function Home() {
  return (
    <>
      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(90deg,rgba(13,38,27,.78),rgba(13,38,27,.12)),url(${photos.hero})`,
        }}
      >
        <div className="hero-inner">
          <p className="eyebrow light">
            <span />
            ROOTED IN NATURE. ENGINEERED FOR TOMORROW.
          </p>
          <h1>
            Nothing wasted.
            <br />A greener world
            <br />
            <em>created.</em>
          </h1>
          <p className="hero-copy">
            Transforming organic waste into clean energy.
            <br />
            And possibility into lasting progress.
          </p>
          <div className="hero-actions">
            <CTA light>Explore our solutions</CTA>
            <Link to="/technology" className="text-link">
              Discover the process <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
        <div className="hero-bottom">
          <span>COMPRESSED BIOGAS. COMPLETE POSSIBILITIES.</span>
          <a href="#possibilities" aria-label="Explore below">
            SCROLL TO EXPLORE <ChevronDown size={17} />
          </a>
        </div>
        <div className="hero-stamp">
          <Leaf size={26} />
          <span>
            A circular future.
            <br />
            <strong>Starts here.</strong>
          </span>
        </div>
      </section>
      <div className="ticker">
        <span>
          <Sprout />
          FROM WASTE TO WORTH
        </span>
        <i>✳</i>
        <span>
          <Wind />
          CLEANER ENERGY
        </span>
        <i>✳</i>
        <span>
          <Recycle />
          CIRCULAR THINKING
        </span>
        <i>✳</i>
        <span>
          <Sun />
          BRIGHTER POSSIBILITIES
        </span>
      </div>
      <section className="section intro" id="possibilities">
        <div>
          <p className="eyebrow">A HOLISTIC APPROACH</p>
          <h2>
            Good for the earth.
            <br />
            <span className="muted">Built for the future.</span>
          </h2>
        </div>
        <div className="intro-copy">
          <p>We see potential where others see waste.</p>
          <p>
            At Holistic Renewable Technologies, we bring energy, expertise,
            resources and people together to build a stronger compressed biogas
            ecosystem.
          </p>
          <Link to="/about" className="under-link">
            Get to know us <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
      <section className="section service-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">ONE ECOSYSTEM. FOUR CONNECTED SOLUTIONS.</p>
            <h2>Progress, from every angle.</h2>
          </div>
          <span className="small-note">
            From the ground up.
            <br />
            Through the entire lifecycle.
          </span>
        </div>
        <div className="services">
          {services.map((s, i) => (
            <Link
              to={"/technology#service-" + i}
              className={"service " + s.color}
              key={s.title}
            >
              <div className="service-top">
                <s.icon size={28} strokeWidth={1.4} />
                <span>0{i + 1}</span>
              </div>
              <div>
                <span className="tiny">{s.tag}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
              <span className="round-arrow">
                <ArrowUpRight size={21} />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <section className="story section">
        <div className="story-image">
          <img
            src={photos.field}
            alt="Green agricultural fields in warm sunlight"
            loading="lazy"
          />
          <span className="image-label">
            <Sprout size={18} /> GROWN LOCALLY. THINKING GLOBALLY.
          </span>
        </div>
        <div className="story-content">
          <p className="eyebrow">NATURE HAS A CYCLE. SO DO WE.</p>
          <h2>
            Today’s waste.
            <br />
            Tomorrow’s <em>resource.</em>
          </h2>
          <p>
            From farms and communities to clean fuel and organic nutrients, CBG
            connects the dots in a more thoughtful energy system.
          </p>
          <div className="cycle-list">
            <span>
              <i>01</i> Organic resources, responsibly sourced
            </span>
            <span>
              <i>02</i> Biogas, produced and upgraded
            </span>
            <span>
              <i>03</i> Energy and nutrients, put back to work
            </span>
          </div>
          <CTA to="/technology">See how it works</CTA>
        </div>
      </section>
      <section className="learning section">
        <div>
          <p className="eyebrow">THE FUTURE NEEDS PEOPLE, TOO.</p>
          <h2>
            Clean energy.
            <br />
            <em>Capable hands.</em>
          </h2>
          <p>
            Technology is only one part of the story. We help build the
            knowledge and practical skills that keep CBG plants moving forward.
          </p>
          <Link to="/technology#training" className="under-link">
            Explore education & training <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="learning-art">
          <GraduationCap size={66} strokeWidth={1} />
          <span>KNOWLEDGE → SKILLS → OPPORTUNITY</span>
          <div>
            <span>Learn.</span>
            <span>Practice.</span>
            <span>Make a difference.</span>
          </div>
        </div>
      </section>
    </>
  );
}
