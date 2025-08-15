import  { useEffect } from 'react';
import NET from 'vanta/dist/vanta.net.min';
import './About.css';

const About = () => {
  useEffect(() => {
    const effect = NET({
      el: "#about",
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
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="bio-content">
          <p>
            I am a professional web developer with 5+ years of experience creating modern, 
            responsive websites and applications. My expertise lies in front-end development 
            with a strong focus on user experience and clean code architecture.
          </p>
          
          <p>
            Throughout my career, I've worked with various clients ranging from startups 
            to established enterprises, helping them translate their vision into functional 
            digital products. I specialize in JavaScript frameworks and have extensive 
            experience with React, Vue, and modern CSS methodologies.
          </p>
          
          <h3 className="subsection-title">Professional Approach</h3>
          <p>
            My development philosophy centers around creating solutions that are both 
            technically robust and user-friendly. I believe in:
          </p>
          <ul className="approach-list">
            <li>Writing maintainable, well-documented code</li>
            <li>Implementing responsive, accessible designs</li>
            <li>Following best practices and industry standards</li>
            <li>Continuous learning and skill development</li>
          </ul>
          
          <h3 className="subsection-title">Work Ethic</h3>
          <p>
            I take pride in delivering projects on time and to specification, while maintaining 
            open communication with clients and team members. My process involves thorough 
            planning, regular updates, and attention to detail at every stage of development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;