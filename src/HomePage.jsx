// src/HomePage.jsx
import React from "react";
// Import static content instead of API hooks
import EXPERIMENTS, { HEADER_CONTENT } from "./content";
import styles from "./HomePage.module.css";

const features = [
  {
    icon: "🔬",
    title: "Realistic Simulations",
    description:
      "Experience complex scientific phenomena in a safe, dynamic virtual environment.",
  },
  {
    icon: "💻",
    title: "Anywhere Access",
    description:
      "Conduct experiments from any device, anytime, eliminating physical lab constraints.",
  },
  {
    icon: "💡",
    title: "Guided Learning",
    description:
      "Follow step-by-step instructions and interactive guides to master core concepts.",
  },
  {
    icon: "📈",
    title: "Data Analysis Tools",
    description:
      "Capture, analyze, and visualize your experiment data using integrated tools.",
  },
];

const HomePage = () => {
  // Get experiments directly from the imported content
  const EXPERIMENTS_TO_SHOW_ON_HOME = 4;
  const featuredExperiments = (EXPERIMENTS || []).slice(
    0,
    EXPERIMENTS_TO_SHOW_ON_HOME
  );

  const renderPopularExperiments = () => {
    // No loading/error states needed for static content
    return (
      <div className={`${styles.experimentsContainer} ${styles.scrollbarHide}`}>
        {featuredExperiments.map((exp) => (
          // Use <a> tag for external links, as requested
          <a
            key={exp.id}
            href={exp.link}
            className={styles.experimentCard}
            target="_blank" // <--- ADD THIS LINE
            rel="noopener noreferrer"
          >
            {/* MODIFIED: Use imagePath for a background image */}
            <div
              className={styles.experimentImageContainer}
              style={{ backgroundImage: `url(${exp.imagePath})` }}
            >
              {/* This div is now the image */}
            </div>
            <div className={styles.experimentContent}>
              <h3 className={styles.experimentTitle}>{exp.title}</h3>
              <p className={styles.experimentDescription}>{exp.description}</p>
              <div className={styles.experimentLink}>Launch Experiment →</div>
            </div>
          </a>
        ))}
      </div>
    );
  };

  return (
    <main className={styles.main}>
      {/* --- Hero Section --- */}
      <section className={styles.heroSection}>
        {/* MODIFIED: Use HEADER_CONTENT for text */}
        <h1 className={styles.heroTitle}>{HEADER_CONTENT.mainTitle}</h1>
        <p className={styles.heroSubtitle}>{HEADER_CONTENT.description}</p>
      </section>

      {/* --- Popular Experiments Section --- */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Popular Experiments</h2>
          {/* Note: This "View All" link is static.
              You could later make it scroll down or link to a new page. */}
          <a href="/experiments" className={styles.viewAllLink}>
            View All →
          </a>
        </div>
        {renderPopularExperiments()}
      </section>

      {/* --- Features Section (Unchanged) --- */}
      <section className={`${styles.section} ${styles.featuresSection}`}>
        <h2 className={styles.featuresTitle}>Why Choose the Virtual Lab?</h2>
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- CTA Section (Unchanged) --- */}
      <section className={`${styles.section} ${styles.ctaSection}`}>
        <div className={styles.ctaCard}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Learn More About Our Mission</h2>
            <p className={styles.ctaText}>
              Founded on the belief that access to quality scientific education
              should be universal, our platform aims to democratize lab access.
              Explore our resources and drive scientific literacy forward.
            </p>
            <a href="#" className={styles.ctaButton}>
              View All Resources
            </a>
          </div>
          <div className={styles.ctaIconContainer}>
            <div className={styles.rocketIcon}>🚀</div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
