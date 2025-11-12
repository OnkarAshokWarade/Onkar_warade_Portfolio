import React, { useEffect, useRef } from "react";
import "./Project.css";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";

// Image imports (update paths if needed)
import Project1Image from "../assets/Images/ecommerce.png";
import Project2Image from "../assets/Images/Alphabet.jpeg";
import Project3Image from "../assets/Images/food2.jpeg";
import Project4Image from "../assets/Images/Weather.jpg";

const projects = [
  {
    id: 1,
    title: "KitchenNest",
    description:
      "A simple and user-friendly web app for small home kitchens to manage recipes, orders, and customer interactions. Clean, responsive UI for browsing menus and placing orders.",
    image: Project3Image,
    liveUrl: "",
    codeUrl: "",
  },
  {
    id: 2,
    title: "Learn With Alphabet",
    description:
      "Interactive educational site where clicking alphabet buttons (A–Z) displays a related image for each letter — great for kids learning letters and visuals.",
    image: Project2Image,
    liveUrl: "https://learn-with-alphabets.vercel.app/",
    codeUrl: "https://github.com/OnkarAshokWarade/LearnWithAlphabets",
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with user auth, payment processing and inventory management. Built with React, Node.js and PostgreSQL.",
    image: Project1Image,
    liveUrl: "",
    codeUrl: "",
  },
  {
    id: 4,
    title: "WeatherPro",
    description:
      "Simple weather app: enter a city or postal code to check the current temperature and weather conditions with a clean UI.",
    image: Project4Image,
    liveUrl: "https://weather-pro-snowy.vercel.app/",
    codeUrl: "https://github.com/OnkarAshokWarade/WeatherPro",
  },
];

export default function ProjectSection() {
  const vantaRef = useRef(null);
  const effectRef = useRef(null);

  useEffect(() => {
    // ensure THREE is available globally for Vanta
    // (Vanta expects a global THREE in some builds)
    if (!window.THREE) window.THREE = THREE;

    if (!effectRef.current) {
      effectRef.current = NET({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 220.0,
        scale: 1.0,
        scaleMobile: 1.0,
        // optional color tweaks:
        // color: 0x1d4ed8,
        // backgroundColor: 0xf9fafb,
      });
    }

    return () => {
      if (effectRef.current) {
        effectRef.current.destroy();
        effectRef.current = null;
      }
    };
  }, []);

  return (
    <section id="project" className="project-section" ref={vantaRef}>
      <div className="container">
        <div className="section-header">
          <h2>Featured Projects</h2>
        </div>

        <div className="project-grid">
          {projects.map((project) => {
            const hasLive = project.liveUrl && project.liveUrl !== "#";
            const hasCode = project.codeUrl && project.codeUrl !== "#";
            return (
              <div key={project.id} className="project-card" role="article">
                <div className="project-image">
                  <img
                    src={project.image}
                    alt={project.title + " screenshot"}
                    loading="lazy"
                    width="100%"
                    height="100%"
                  />
                </div>

                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="project-buttons">
                    <button
                      className={`btn animated-btn ${!hasLive ? "disabled" : ""}`}
                      onClick={() => {
                        if (hasLive) window.open(project.liveUrl, "_blank", "noopener");
                      }}
                      aria-disabled={!hasLive}
                    >
                      {hasLive ? "View Live" : "No Live"}
                    </button>

                    <button
                      className={`btn animated-btn outline ${!hasCode ? "disabled" : ""}`}
                      onClick={() => {
                        if (hasCode) window.open(project.codeUrl, "_blank", "noopener");
                      }}
                      aria-disabled={!hasCode}
                    >
                      {hasCode ? "View Code" : "No Repo"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

