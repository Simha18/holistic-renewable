import React from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "./Link.jsx";
import { config, nav } from "../data/siteContent.js";
export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <Link to="/" className="brand">
          <img
            className="brand-logo"
            src="/hrt-logo-v7.png"
            alt="Holistic Renewable Technologies"
            width="2098"
            height="750"
          />
        </Link>
        <p>
          Renewable energy.
          <br />
          Circular thinking. Shared progress.
        </p>
        <div>
          <span className="tiny">EXPLORE</span>
          {nav.map(([t, p]) => (
            <Link to={p} key={p}>
              {t}
            </Link>
          ))}
        </div>
        <div>
          <span className="tiny">GET IN TOUCH</span>
          <a href={`mailto:${config.email}`}>
            {config.email}
            <ArrowUpRight size={14} />
          </a>
          <a href={`tel:${config.phoneHref}`}>{config.phone}</a>
          <address className="footer-address">
            <strong>{config.companyName}</strong>
            <a href={config.mapUrl} target="_blank" rel="noopener noreferrer" className="business-address">
              {config.address}
            </a>
          </address>
        </div>
      </div>
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} {config.companyName}.
        </span>
        <span>
          Designed and developed by{" "}
          <a href="https://ketsc.com" target="_blank" rel="noopener noreferrer">KETSC LIMITED</a>
        </span>
      </div>
    </footer>
  );
}
