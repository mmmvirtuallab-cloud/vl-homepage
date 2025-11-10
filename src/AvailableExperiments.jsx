// src/AvailableExperiments.jsx
import React, { useState, useMemo } from "react";
// 1. Import static data from content.js
import EXPERIMENTS from "./content"; // Make sure this path is correct
// 2. Import the new CSS module
import styles from "./AvailableExperiments.module.css";

// 3. Define the Experiment Card JSX directly inside the component
const ExperimentCard = ({ experiment }) => {
  return (
    <a
      href={experiment.link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
    >
      <div
        className={styles.cardImage}
        style={{ backgroundImage: `url(${experiment.imagePath})` }}
      >
        {/* The background image is handled by CSS */}
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{experiment.title}</h3>
        <p className={styles.cardDescription}>{experiment.description}</p>
        <div classNameclassName={styles.cardLink}>Launch Experiment →</div>
      </div>
    </a>
  );
};

function AvailableExperiments() {
  const [searchTerm, setSearchTerm] = useState("");

  // 4. Filter the static EXPERIMENTS array
  const filteredExperiments = useMemo(() => {
    if (!searchTerm) {
      return EXPERIMENTS; // Return all if search is empty
    }
    const lowerSearchTerm = searchTerm.toLowerCase();
    return EXPERIMENTS.filter(
      (exp) =>
        exp.title.toLowerCase().includes(lowerSearchTerm) ||
        exp.description.toLowerCase().includes(lowerSearchTerm)
    );
  }, [searchTerm]); // Only re-filter when searchTerm changes

  // 5. Simplified render function (no loading/error)
  const renderContent = () => {
    if (filteredExperiments.length === 0) {
      return (
        <div className={styles.noResults}>
          No experiments found for "{searchTerm}".
        </div>
      );
    }

    // Render the card component we defined above
    return filteredExperiments.map((experiment) => (
      <ExperimentCard key={experiment.id} experiment={experiment} />
    ));
  };

  // 6. All classNames converted to CSS modules
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Select Your Experiment</h1>
      <p className={styles.subtitle}>
        Choose from the available virtual experiments below. Each is designed to
        provide a hands-on learning experience.
      </p>

      <div className={styles.searchContainer}>
        <input
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for an experiment..."
          className={styles.searchInput}
        />
      </div>

      <div className={styles.grid}>{renderContent()}</div>
    </main>
  );
}

export default AvailableExperiments;
