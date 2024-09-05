import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Typed from 'typed.js';

const HeroSection: React.FC = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });

    // Initialize Typed.js
    const selectTyped = document.querySelector('.typed') as HTMLElement;
    if (selectTyped) {
      const typedStrings = selectTyped.getAttribute('data-typed-items')?.split(',') || [];
      new Typed('.typed', {
        strings: typedStrings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
      });
    }
  }, []);

  return (
    <section id="hero" className="hero section dark-background">
      <img src="/img/main_1.png" alt="Main" data-aos="fade-in" />

      <div
        className="container d-flex flex-column align-items-center justify-content-center text-center"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h2>I am GO minseo</h2>
        <p>
          <span className="typed" data-typed-items="WebPublisher, Frontend"></span>
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
