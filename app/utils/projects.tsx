import { StaticImageData } from "next/image";
import project1 from "../assets/images/project1.jpeg";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import project4 from "../assets/images/project4.png";
import project5 from "../assets/images/project5.png";
import project6 from "../assets/images/project6.png";

const projects: {
  id: number;
  name: string;
  role: string;
  duties: string;
  image: StaticImageData;
  url: string | null;
  description: string;
}[] = [
  {
    id: 1,
    name: "SHOPN — A trust-first marketplace for Ghana",
    role: "Product Designer",
    duties: "Product Design, UX Research, Visual Design",
    image: project1,
    url: "figma.com/design/yLon2IQFKwIQwbJWq3zvHm/Prototyping?node-id=98-255&t=PhekqnHVj7xzNkmG-1",
    description:
      "Designed a swipe-based mobile marketplace that solves Ghana's online shopping trust problem through vendor verification, escrow payments, and on-platform buyer-vendor communication. Built end-to-end from research and wireframes to high-fidelity prototype.",
  },
  {
    id: 2,
    name: "Safelynk — Sell online. Get paid. Grow.",
    role: "Co-Founder, Product Designer",
    duties: "Product Design, Go-to-Market Strategy, UX Design",
    image: project2,
    url: "https://safelynk.io/",
    description:
      "Designed the end-to-end experience for a mobile-first e-commerce platform built for African vendors. Safelynk lets small businesses launch a branded storefront, accept mobile money and card payments, and manage orders and delivery from one place. Trusted by 500+ businesses across Ghana.",
  },
  {
    id: 3,
    name: "FixNotify — Workshop management that actually works",
    role: "Product Designer",
    duties: "UI Design, UX Design, Wireframing",
    image: project3,
    url: "https://fixnotify.com",
    description:
      "Designed screens for a comprehensive workshop management system that helps automotive workshops manage customers, vehicles, services, and automated maintenance reminders. Solved the operational chaos small garages face by bringing customer tracking and notifications into one clean interface.",
  },
  {
    id: 4,
    name: "Inventa — All-in-one business management platform",
    role: "Product Design Intern",
    duties: "UI Design, Wireframing, Interaction Design",
    image: project4,
    url: "https://inventaposhq.com/",
    description:
      "Designed wireframes for Inventa Pay, a payment workspace module within a POS system. Worked across six screens with multiple states, translating complex payment flows into a clean, intuitive interface built for retail, restaurants, and service businesses.",
  },
  {
    id: 5,
    name: "CodeNova360 — Building solutions that move industries forward",
    role: "Product Design Intern",
    duties: "Product Design, UI Design, Prototyping",
    image: project5,
    url: "https://codenova360.com/",
    description:
      "Contributed to product design work at a software development company building industry-grade digital solutions. Designed screens and interface components across multiple internal projects during my internship.",
  },
  {
    id: 6,
    name: "Viibre Technologies — Tech solutions for modern business",
    role: "Product Designer",
    duties: "UI Design, Visual Design",
    image: project6,
    url: "https://viibretech.com/",
    description:
      "Designed screens for a technology company building digital products and services for businesses. Contributed to interface design that supports their product development work.",
  },
];

export default projects;
