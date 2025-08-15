import React, { useState, useEffect, useRef } from 'react';
import './Contact.css';
import NET from 'vanta/dist/vanta.net.min';
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const [isSending, setIsSending] = useState(false);
const [isSent, setIsSent] = useState(false);

  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);
  const form = useRef();

  const [formData, setFormData] = useState({
    from_name: '',  // Changed to match EmailJS template
    from_email: '', // Changed to match EmailJS template
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
 setIsSending(true);
    emailjs
      .sendForm('service_yomhb7l', 'template_es4a6wt', form.current, {
        publicKey: 'cHe4Lepa_PZWeVXZI',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setIsSending(false);
        setIsSent(true);
          // Reset form after sending
          setFormData({ from_name: '', from_email: '', message: '' });
        },
        (error) => {
          console.log('FAILED...', error.text);
             setIsSending(false);
        },
      );
  };

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(NET({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 220.00,
        scale: 1.00,
        scaleMobile: 1.00
      }));
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <section id="contact" className="contact-section" ref={vantaRef}>
      <div className="contact-container">
        <div className="contact-info">
          <h1>Get In Touch</h1>
          <p>Feel free to reach out for collaborations or just a hello!</p>

          <div className="contact-details">
            <div className="detail-item">
              <i className="fas fa-envelope"></i>
              <span>onkarwarade18@gmail.com</span>
            </div>
            <div className="detail-item">
              <i className="fas fa-phone"></i>
              <span>+91 9322070390</span>
            </div>
            <div className="detail-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>Pune</span>
            </div>
          </div>

          <div className="social-links">
            <a href="https://www.linkedin.com/in/onkar-warade-b1a558305" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/OnkarAshokWarade/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://twitter.com/your-twitter-username" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              value={formData.from_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              value={formData.from_email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
        <button type="submit" className={`submit-btn ${isSending ? 'sending' : ''} ${isSent ? 'sent' : ''}`} disabled={isSending}>
  {isSent ? '✔ Sent' : isSending ? 'Sending...' : 'Send Message'}
</button>
        </form>
      </div>
    </section>
  );
}