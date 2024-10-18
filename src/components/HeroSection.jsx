import React from 'react';
import './HeroSection.css';
import { useInView } from 'react-intersection-observer';

const HeroSection = () => {
  const { ref: heroRef, inView: isVisible } = useInView({ triggerOnce: true, threshold: 0.3 });

  // Function to handle smooth scroll
  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist-section');
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" ref={heroRef}>
      <div className="overlay"></div> {/* Darker overlay */}
      <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
        <h1 className="hero-heading">Your Store, Your Style</h1>
        <p className="hero-subheading">
          Discover exclusive collections and the latest trends, only available in our upcoming store.
        </p>
        <button onClick={scrollToWaitlist} className="cta-button">Join the Waitlist</button> {/* Call to action */}
      </div>
    </section>
  );
};

export default HeroSection;
