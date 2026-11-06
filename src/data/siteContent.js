import { Factory, Sprout, Truck, GraduationCap } from "lucide-react";
export const config = {
  companyName: "Holistic Renewable Technologies Private Limited",
  email: "holisticrenewabletech@gmail.com",
  phone: "63020 77933",
  phoneHref: "+916302077933",
  address: "No 1-50-5\nRajendra Prasad Street\nKadiri\n515591 Sri Satya Sai district, Andhra Pradesh",
  mapQuery: "14.1162684,78.1541796",
  mapUrl: "https://www.google.com/maps?q=14.1162684,78.1541796&z=17&hl=en",
};
export const photos = {
  hero: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2200&q=85",
  field:
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=85",
  plant:
    "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1000&q=85",
  grass:
    "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1000&q=85",
  training:
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=85",
};
export const services = [
  {
    icon: Factory,
    title: "CBG production",
    text: "Turning organic resources into compressed biogas, with a focus on dependable operations and responsible resource use.",
    color: "green",
    tag: "CLEAN ENERGY",
  },
  {
    icon: Sprout,
    title: "Plant consulting",
    text: "From the first feasibility conversation to plant implementation. Practical guidance for small and medium scale projects.",
    color: "orange",
    tag: "IDEA TO IMPLEMENTATION",
  },
  {
    icon: Truck,
    title: "Feedstock supply chain",
    text: "Connecting cow dung, Napier grass, food waste and organic waste to the plants that can put them to work.",
    color: "blue",
    tag: "CONNECTED RESOURCES",
  },
  {
    icon: GraduationCap,
    title: "Education & training",
    text: "Building curricula, hands-on skills and a talent pool ready for CBG plant operations and maintenance.",
    color: "yellow",
    tag: "PEOPLE POWERED PROGRESS",
  },
];
export const nav = [
  ["Home", "/"],
  ["About us", "/about"],
  ["Technology", "/technology"],
  ["Projects", "/projects"],
  ["Contact us", "/contact"],
];
