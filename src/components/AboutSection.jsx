import React from 'react';
import './AboutSection.css';
import { useInView } from 'react-intersection-observer';  // For scroll-triggered animation

const AboutSection = () => {
  const { ref: aboutRef, inView: isVisible } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="about-section" ref={aboutRef}>
      <div className={`about-content ${isVisible ? 'visible' : ''}`}>
        <div className="about-text">
          <h2 className="about-heading">About Our Brand</h2>
          <p className="about-description">
            {/* Short Description: Replace this text */}
            Our brand focuses on delivering top-notch, exclusive products designed to meet your needs. With a passion for quality and sustainability, we aim to offer affordable luxury to everyone.
          </p>
          <ul className="key-benefits">
            <li>Exclusive and high-quality products</li>
            <li>Affordable prices without compromising on style</li>
            <li>Committed to sustainability and eco-friendly packaging</li>
          </ul>
        </div>
        <div className="about-image">
          <img
            src="https://i.pinimg.com/564x/07/d5/47/07d5476867916449a7016a7e416f910d.jpg"
            alt="Product Image"
            className="about-img"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
