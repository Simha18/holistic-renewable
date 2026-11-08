import React, { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "./Link.jsx";
import CTA from "./CTA.jsx";
import { config, nav } from "../data/siteContent.js";
export default function Header({ path }) {
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    const close = () => setMenu(false);
    window.addEventListener("popstate", close);
    return () => window.removeEventListener("popstate", close);
  }, []);
  return (
    <>
      <div className="topline">
        <span>
          <span className="live-dot" /> Local resources. Lasting possibilities.
        </span>
        <a href={`mailto:${config.email}`}>
          Start a conversation <ArrowUpRight size={12} />
        </a>
      </div>
      <header>
        <Link to="/" className="brand">
          <img
            className="brand-logo"
            src="/hrt-logo-v6.png"
            alt="Holistic Renewable Technologies"
            width="2100"
            height="749"
          />
        </Link>
        <nav aria-label="Main navigation" className={menu ? "open" : ""}>
          {nav.map(([label, to]) => (
            <Link
              key={to}
              to={to}
              className={path === to ? "active" : ""}
              aria-current={path === to ? "page" : void 0}
            >
              {label}
            </Link>
          ))}
        </nav>
        <CTA>Let’s talk</CTA>
        <button
          className="menu-toggle"
          aria-label={menu ? "Close menu" : "Open menu"}
          aria-expanded={menu}
          onClick={() => setMenu(!menu)}
        >
          {menu ? <X /> : <Menu />}
        </button>
      </header>
    </>
  );
}
