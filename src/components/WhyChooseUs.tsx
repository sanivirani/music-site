"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const projectContent = [
  {
    id: 1,
    title: "E-commerce Website",
    description:
      "A fully functional e-commerce website built using React.js and Node.js.",
    technologies: ["React.js", "Node.js", "Express", "MongoDB"],
    github_repo: "https://github.com/example/e-commerce-website",
    demo_url: "https://example.com/e-commerce",
    image_url: "https://example.com/e-commerce/screenshot.png",
  },
  {
    id: 2,
    title: "Weather App",
    description:
      "A simple weather application that displays current weather conditions.",
    technologies: ["Vue.js", "Node.js", "Express", "OpenWeatherMap API"],
    github_repo: "https://github.com/example/weather-app",
    demo_url: "https://example.com/weather",
    image_url: "https://example.com/weather-app/screenshot.png",
  },
  {
    id: 3,
    title: "Task Management System",
    description:
      "A web application for managing tasks and projects within a team.",
    technologies: ["Angular", "Spring Boot", "MySQL"],
    github_repo: "https://github.com/example/task-management-system",
    demo_url: "https://example.com/task-management",
    image_url: "https://example.com/task-management-system/screenshot.png",
  },
  {
    id: 4,
    title: "My Blog Website",
    description:
      "A web application for managing tasks and projects within a team.",
    technologies: ["Angular", "Spring Boot", "MySQL", "React"],
    github_repo: "https://github.com/example/task-management-system",
    demo_url: "https://example.com/task-management",
    image_url: "https://example.com/task-management-system/screenshot.png",
  },
  {
    id: 5,
    title: "My Portfolio",
    description:
      "A web application for managing tasks and projects within a team.",
    technologies: ["Angular", "Spring Boot", "MySQL", "React"],
    github_repo: "https://github.com/example/task-management-system",
    demo_url: "https://example.com/task-management",
    image_url: "https://example.com/task-management-system/screenshot.png",
  },
];

function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={projectContent} />
    </div>
  );
}

export default WhyChooseUs;
