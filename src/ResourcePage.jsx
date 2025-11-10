import React from "react";
import { Link } from "react-router-dom";
import styles from "./ResourcePage.module.css"; // Import the CSS module

// Dummy data for structured links
const resourceSections = [
  {
    title: "Experiment Documentation",
    description:
      "In-depth manuals and theoretical background for every simulation.",
    icon: "📖",
    links: [
      { name: "Full Experiment Manuals (PDF)", href: "#" },
      { name: "Theoretical Principles", href: "#" },
      { name: "Data Analysis Guides", href: "#" },
    ],
  },
  {
    title: "Support & Community",
    description: "Get help, report issues, or connect with other learners.",
    icon: "💬",
    links: [
      { name: "FAQ / Help Center", href: "#" },
      { name: "Community Discussion Forum", href: "#" },
      { name: "Submit a Bug Report", href: "#" },
    ],
  },
  {
    title: "External Learning",
    description: "Curated links to deepen your understanding of core concepts.",
    icon: "🔗",
    links: [
      { name: "MIT OpenCourseWare Links", href: "#" },
      { name: "Educational Video Library", href: "#" },
      { name: "Glossary of Scientific Terms", href: "#" },
    ],
  },
];

const ResourcesPage = () => {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Knowledge Hub</h1>
        <p className={styles.heroSubtitle}>
          Access comprehensive guides, foundational knowledge, and community
          support to maximize your learning experience in the Virtual Lab.
        </p>
      </section>

      {/* Resources Grid */}
      <section className={styles.gridContainer}>
        <div className={styles.grid}>
          {resourceSections.map((section, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardIcon}>{section.icon}</div>
              <h2 className={styles.cardTitle}>{section.title}</h2>
              <p className={styles.cardDescription}>{section.description}</p>

              {/* List of Links */}
              <ul className={styles.linkList}>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link to={link.href} className={styles.link}>
                      <span className={styles.linkArrow}>→</span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className={styles.ctaContainer}>
        <div className={styles.cta}>
          <h2 className={styles.ctaTitle}>Can't Find What You Need?</h2>
          <p className={styles.ctaSubtitle}>
            Visit our comprehensive Help Center or contact our support team
            directly.
          </p>
          <Link to="/contact" className={styles.ctaButton}>
            Get Dedicated Support
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ResourcesPage;
