import React from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "./Link.jsx";
export default function CTA({
  children = "Let\u2019s build something better",
  to = "/contact",
  light = false,
}) {
  return (
    <Link to={to} className={"button " + (light ? "cream" : "")}>
      {children}
      <ArrowUpRight size={18} />
    </Link>
  );
}
