import React from "react";
import "./Project.css";
import NET from 'vanta/dist/vanta.net.min';
import { useEffect } from 'react';
// Image imports - just update these paths when changing images
import Project1Image from "../assets/Images/ecommerce.png";
import Project2Image from "../assets/Images/Alphabet.jpeg";
import Project3Image from "../assets/Images/food2.jpeg";

const projects = [
    {
    id: 1,
    title: "KitchenNest",
    description:
"A simple and user-friendly web application designed for small home kitchens to manage daily recipes, orders, and customer interactions. Built with a clean, responsive interface, it allows users to browse menus, place orders, and receive updates in real time",   
     image: Project3Image,
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    id: 2,
    title: "Learn Wiht Alphabet",
    description:
"Learn with Alphabets is an interactive educational website where users can click on alphabet buttons (A–Z) to display a related image for each letter",
   image: Project2Image,
    liveUrl: "https://learn-with-alphabets.vercel.app/",
    codeUrl: "https://github.com/OnkarAshokWarade/LearnWithAlphabets",
  },  
   {
    id: 3,
    title: "E-Commerce Platform",
    description:
"A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and inventory management",   
 image: Project1Image,
    liveUrl: "#",
    codeUrl: "#",
  },
];

export default function ProjectSection() {
   useEffect(() => {
    const effect = NET({
      el: "#project",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 220.00,
      scale: 1.00,
      scaleMobile: 1.00
    });

    // Cleanup function to remove the effect when component unmounts
    return () => {
      if (effect) effect.destroy();
    };
  }, []);
  return (
    <section id="project" className="project-section">
      <div className="container">
        <div className="section-header">
          <h2>Featured Projects</h2>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-buttons">
                  <button
                    className="btn animated-btn"
                    onClick={() => window.open(project.liveUrl, "_blank")}
                  >
                    View Live
                  </button>
                  <button
                    className="btn animated-btn outline"
                    onClick={() => window.open(project.codeUrl, "_blank")}
                  >
                    View Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}