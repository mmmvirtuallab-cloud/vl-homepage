// src/AboutPage.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./AboutPage.module.css";
import { CAROUSEL_SLIDES, TEAM_MEMBERS } from "./about-content";

const AboutPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Effect for the automatic carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === CAROUSEL_SLIDES.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer); // Clean up the interval
  }, []);

  return (
    <main className={styles.main}>
      {/* 1. Hero Section: Mission & Vision */}
      <section className={styles.heroSection}>
        <h1 className={styles.heroTitle}>Our Vision: Science for Everyone</h1>
        <p className={styles.heroSubtitle}>
          The <strong>Virtual Lab</strong> was created to break down barriers to
          scientific education. We believe that access to powerful, hands-on
          learning simulations should be universal, regardless of location or
          resource availability.
        </p>
      </section>

      {/* 2. Affiliation Section: MIT Chennai */}
      <section className={styles.affiliationSection}>
        <div className={styles.affiliationCard}>
          <div className={styles.affiliationContent}>
            <h2 className={styles.affiliationTitle}>
              An Initiative from MIT, Chennai
            </h2>
            <p className={styles.affiliationText}>
              This educational platform is proudly developed by students and
              faculty from the <strong>Production Technology Department</strong>{" "}
              at the{" "}
              <strong>Madras Institute of Technology (MIT), Chennai</strong>.
              Our work combines core engineering principles with digital
              innovation to create impactful learning tools, reflecting the high
              standards of <strong>Anna University</strong>.
            </p>
          </div>
          <div className={styles.affiliationIcon}>
            <span>🎓</span>
          </div>
        </div>
      </section>

      {/* 3. Automatic Image Carousel */}
      <section className={styles.carouselSection}>
        <h2 className={styles.sectionTitle}>Featured Simulations</h2>
        <div className={styles.carouselContainer}>
          <div
            className={styles.carouselSlider}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {CAROUSEL_SLIDES.map((slide) => (
              <div key={slide.id} className={styles.carouselSlide}>
                <img
                  src={slide.imagePath}
                  alt={slide.topic}
                  className={styles.slideImage}
                />
                <div className={styles.slideContent}>
                  <h3 className={styles.slideTopic}>{slide.topic}</h3>
                  <p className={styles.slideDescription}>{slide.description}</p>
                  <div className={styles.slideMeta}>
                    <p>
                      <strong>Developed by:</strong> {slide.developedBy}
                    </p>
                    <p>
                      <strong>Coordinated by:</strong> {slide.coordinatedBy}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.carouselDots}>
            {CAROUSEL_SLIDES.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${
                  index === currentIndex ? styles.dotActive : ""
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. The Team Section */}
      <section className={styles.teamSection}>
        <h2 className={styles.sectionTitle}>Meet the Core Team</h2>
        <div className={styles.teamGrid}>
          {TEAM_MEMBERS.map((member) => (
            <div key={member.id} className={styles.teamCard}>
              <img
                src={member.imagePath}
                alt={member.name}
                className={styles.teamImage}
              />
              <h3 className={styles.teamName}>{member.name}</h3>
              <p className={styles.teamRole}>{member.role}</p>
              <p className={styles.teamQualification}>{member.qualification}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Footer Call to Action */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <h3 className={styles.ctaTitle}>
            Want to collaborate or learn more?
          </h3>
          <Link to="/contact" className={styles.ctaButton}>
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
