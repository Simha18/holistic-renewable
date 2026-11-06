import React from "react";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import PageHero from "../components/PageHero.jsx";
import ContactForm from "../components/ContactForm.jsx";
import { config } from "../data/siteContent.js";
export default function Contact() {
  return (
    <>
      <PageHero
        label="LET’S CONNECT"
        title={
          <>
            Big possibilities.
            <br />
            <em>Start with a hello.</em>
          </>
        }
        text="Planning a CBG plant? Looking for feedstock support or a training partner? Tell us what you have in mind."
      />
      <section className="section contact-grid">
        <div>
          <p className="eyebrow">START A CONVERSATION</p>
          <h2>
            Let’s find your
            <br />
            next step.
          </h2>
          <a className="contact-detail" href={`mailto:${config.email}`}>
            <Mail />
            <span>
              <small>EMAIL US</small>
              {config.email}
            </span>
            <ArrowUpRight size={19} />
          </a>
          <a className="contact-detail" href={`tel:${config.phoneHref}`}>
            <Phone />
            <span>
              <small>CALL US</small>
              {config.phone}
            </span>
            <ArrowUpRight size={19} />
          </a>
          <a className="contact-detail" href={config.mapUrl} target="_blank" rel="noopener noreferrer">
            <MapPin />
            <span>
              <small>VISIT US</small>
              <strong>{config.companyName}</strong>
              <span className="business-address">{config.address}</span>
            </span>
            <ArrowUpRight size={19} />
          </a>
          <div className="office-map">
            <iframe
              title="Holistic Renewable Technologies office location in Kadiri"
              src={`https://www.google.com/maps?q=${config.mapQuery}&z=17&hl=en&output=embed`}
              width="100%"
              height="300"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <a className="under-link" href={config.mapUrl} target="_blank" rel="noopener noreferrer">
              Open in Google Maps <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
