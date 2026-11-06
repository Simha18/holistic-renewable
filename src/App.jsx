import React, { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ClosingCTA from "./components/ClosingCTA.jsx";
import CTA from "./components/CTA.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Technology from "./pages/Technology.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import { nav } from "./data/siteContent.js";
const routes = {
  "/": Home,
  "/about": About,
  "/technology": Technology,
  "/projects": Projects,
  "/contact": Contact,
};
export default function App() {
  const [route, setRoute] = useState(() => ({
    path: window.location.pathname,
    hash: window.location.hash,
  }));
  useEffect(() => {
    const updateRoute = () =>
      setRoute({ path: window.location.pathname, hash: window.location.hash });
    window.addEventListener("popstate", updateRoute);
    window.addEventListener("hashchange", updateRoute);
    return () => {
      window.removeEventListener("popstate", updateRoute);
      window.removeEventListener("hashchange", updateRoute);
    };
  }, []);
  useEffect(() => {
    document.title =
      (nav.find((item) => item[1] === route.path)?.[0] || "Page not found") +
      " | Holistic Renewable Technologies";
    if (!route.hash) {
      window.scrollTo(0, 0);
      return;
    }
    const timer = window.setTimeout(() => {
      let id = route.hash.slice(1);
      try {
        id = decodeURIComponent(id);
      } catch {}
      document
        .getElementById(id)
        ?.scrollIntoView({
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
            .matches
            ? "auto"
            : "smooth",
        });
    }, 0);
    return () => window.clearTimeout(timer);
  }, [route]);
  const Page = routes[route.path];
  return (
    <>
      <Header path={route.path} />
      <main>
        {Page ? (
          <Page />
        ) : (
          <section className="section">
            <h1>Page not found.</h1>
            <CTA to="/">Back to home</CTA>
          </section>
        )}
        <ClosingCTA />
      </main>
      <Footer />
    </>
  );
}
