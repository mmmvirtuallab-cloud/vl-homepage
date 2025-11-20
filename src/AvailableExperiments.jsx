// src/AvailableExperiments.jsx
import React, { useState, useMemo } from "react";
import EXPERIMENTS from "./content"; // Make sure this path is correct
import styles from "./AvailableExperiments.module.css";

// 3. Define the Experiment Card JSX
// The prop is named "experiment"
const ExperimentCard = ({ experiment }) => {
  return (
    // We are removing target="_blank" to open in the same tab
    <a
      href={experiment.link}
      className={styles.card}
      target="_blank" // <--- ADD THIS LINE
      rel="noopener noreferrer" // <--- ADD THIS LINE (for security)
    >
      <div
        className={styles.cardImage}
        style={{ backgroundImage: `url(${experiment.imagePath})` }} // <-- MUST use "experiment.imagePath"
      >
        {/* The background image is handled by CSS */}
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{experiment.title}</h3>{" "}
        {/* <-- MUST use "experiment.title" */}
        <p className={styles.cardDescription}>{experiment.description}</p>{" "}
        {/* <-- MUST use "experiment.description" */}
        {/* This line is also fixed (no more "classNameclassName") */}
        <div className={styles.cardLink}>Launch Experiment →</div>
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
    // 'exp' is fine here, it's only used inside this filter
    return EXPERIMENTS.filter(
      (exp) =>
        exp.title.toLowerCase().includes(lowerSearchTerm) ||
        exp.description.toLowerCase().includes(lowerSearchTerm)
    );
  }, [searchTerm]); // Only re-filter when searchTerm changes

  // 5. Simplified render function
  const renderContent = () => {
    if (filteredExperiments.length === 0) {
      return (
        <div className={styles.noResults}>
          No experiments found for "{searchTerm}".
        </div>
      );
    }

    // Here, we map over the array and call each item "experiment"
    return filteredExperiments.map((experiment) => (
      // We pass the prop as "experiment"
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
