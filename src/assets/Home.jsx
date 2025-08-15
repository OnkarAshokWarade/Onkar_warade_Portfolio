import React, { useEffect } from "react";
import "./Home.css";
import profilePhoto from "./Onkar.jpg";
import NET from "vanta/dist/vanta.net.min";
import TextType from "./TextType";

const Home = () => {
  useEffect(() => {
    const effect = NET({
      el: "#home",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 220.0,
      scale: 1.0,
      scaleMobile: 1.0,
    });

    return () => {
      if (effect) effect.destroy();
    };
  }, []);

  return (
    <section id="home" className="home-section">
      <div className="home-wrapper">
        <div className="home-container">
          <div className="profile-content">
            {/* Left text content */}
            <div className="text-content">
              <h1 className="name-title">Hii,i am<br></br>Onkar Warade</h1>

              {/* Animated subtitle */}
              <h2 className="role-subtitle">
                <TextType
                  text={[
                    "Web Developer",
                    "Frontend Enthusiast",
                    "Tech Explorer",
                  ]}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="|"
                  textColors={["#ff6f00", "#f200ffff", "#ffcc02ff", ]}
                />
              </h2>
              <p className="description">
                I'm Onkar Ashok Warade, a dedicated Software Developer and Tech Enthusiast,
                currently pursuing my Bachelor's in Information Technology at SKN College of Engineering
                Vadgaon(bk) Pune. I bring a strong foundation in web development.
              </p>

              <div className="cta-buttons">
                <a href="#project" className="primary-btn">View My Work</a>
                <a href="#contact" className="secondary-btn">Contact Me</a>
              </div>
            </div>

            {/* Right image content */}
            <div className="image-section">
              <div className="image-container">
                <div className="image-inner">
                  <img
                    src={profilePhoto}
                    alt="Onkar Warade - Professional Web Developer"
                    className="profile-image"
                    loading="eager"
                  />
                  <div className="image-overlay"></div>
                  <div className="image-border-accent"></div>
                  <div className="image-shadow"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
