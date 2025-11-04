// src/HomePage.jsx
import React, { useState, useMemo, useRef } from "react";
import styles from "./HomePage.module.css";
import EXPERIMENTS, { SUBJECTS, HEADER_CONTENT } from "./content";

// Component for a single experiment card (UPDATED)
const ExperimentCard = ({ experiment }) => {
  // Conditionally apply background style
  const cardStyle = experiment.imagePath
    ? { backgroundImage: `url(${experiment.imagePath})` }
    : {};

  // NOTE: If the image path is invalid, the browser will not load it,
  // and the CSS fallback (white background) will apply.

  return (
    // If imagePath is present, add the .hasImage class for background and overlay
    <div
      className={`${styles.card} ${
        experiment.imagePath ? styles.hasImage : ""
      }`}
      style={cardStyle}
    >
      {/* Container for text content and button, which is lifted above the background */}
      <div className={styles.cardContent}>
        {/* The Card Title (Will use white text on image background) */}
        <h3 className={styles.cardTitle}>{experiment.title}</h3>

        {/* Scrollable description area */}
        <div className={styles.cardDescriptionContainer}>
          <p className={styles.cardDescription}>{experiment.description}</p>
        </div>

        {/* The <a> tag for navigation (Unchanged) */}
        <a href={experiment.link} className={styles.launchButton}>
          Launch Experiment
        </a>
      </div>
    </div>
  );
};

// Component for a single experiment card (Unchanged)

// HomePage Component (Updated)
const HomePage = () => {
  const [activeSubject, setActiveSubject] = useState("All Subjects");
  const [isSearchMode, setIsSearchMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const experimentsRef = useRef(null);

  const handleBrowseClick = () => {
    if (experimentsRef.current) {
      experimentsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // FIX 1: Ensure initial results show when entering search mode
  const handleSearchButtonClick = () => {
    setIsSearchMode(true);
    // Ensure the filter remains 'All Subjects' so experiments show up initially
    setActiveSubject("All Subjects");
  };

  const handleExitSearch = () => {
    setIsSearchMode(false);
    setSearchTerm(""); // Clear search term on exit
    setActiveSubject("All Subjects"); // Reset filter
  };

  // Clear search term inside the search input only
  const handleClearSearch = () => {
    setSearchTerm("");
  };

  // UPDATED: Filter logic now correctly applies both subject filter and search term
  const filteredExperiments = useMemo(() => {
    let list = EXPERIMENTS;
    const lowerSearchTerm = searchTerm.toLowerCase();

    // 1. Filter by Subject (only if not in search mode, or if a specific subject is selected)
    // When in search mode, we rely on the search term, but we still allow 'All Subjects' or a specific one.
    if (activeSubject !== "All Subjects") {
      list = list.filter((exp) => exp.subject === activeSubject);
    }

    // 2. Filter by Search Term (Title or Description)
    // FIX 2: This block ensures the search actually filters the list
    if (searchTerm.length > 0) {
      list = list.filter(
        (exp) =>
          exp.title.toLowerCase().includes(lowerSearchTerm) ||
          exp.description.toLowerCase().includes(lowerSearchTerm)
      );
    }

    return list;
  }, [activeSubject, searchTerm]);

  // Handle filter button click, resets search if subject changes
  const handleFilterClick = (subject) => {
    setActiveSubject(subject);
    setSearchTerm(""); // Clear search if a filter is chosen
    setIsSearchMode(false); // Exit search mode
  };

  const titleWords = HEADER_CONTENT.mainTitle.split(" ");
  const dynamicTitle = titleWords.map((word, index) => {
    const isBold =
      word.toLowerCase() === "virtual" || word.toLowerCase() === "laboratory";
    return (
      <span key={index} className={isBold ? styles.boldWord : ""}>
        {word}{" "}
      </span>
    );
  });

  return (
    <div className={styles.homepage}>
      {/* --- Top Navigation/Header (Cleaned) --- */}
      <header className={styles.header}>
        <div className={styles.logo}>University of Science Virtual Labs</div>
        <nav className={styles.nav}>
          <a href="#">Home</a>
          <a href="#">About</a>
        </nav>
      </header>

      {/* --- Welcome Section (Unchanged) --- */}
      <section className={styles.welcomeSection}>
        <div className={styles.welcomeContent}>
          <h1>{dynamicTitle}</h1>
          <p>{HEADER_CONTENT.description}</p>
          <button
            className={`${styles.ctaButton} ${styles.primaryButton}`}
            onClick={handleBrowseClick}
          >
            {HEADER_CONTENT.browseButtonText}
          </button>
          <button className={`${styles.ctaButton} ${styles.secondaryButton}`}>
            {HEADER_CONTENT.learnMoreButtonText}
          </button>
        </div>
        <div className={styles.welcomeImage}>{/* Image Placeholder */}</div>
      </section>

      {/* --- Available Experiments Section --- */}
      <section className={styles.experimentsSection} ref={experimentsRef}>
        <h2>{HEADER_CONTENT.availableExperimentsTitle}</h2>

        {/* --- Filter and Search Row Logic --- */}
        {isSearchMode ? (
          // Display short search bar when in search mode
          <div className={styles.largeSearchContainer}>
            <div className={`${styles.searchBox} ${styles.shortSearchBox}`}>
              <input
                type="text"
                placeholder="Search for an experiment..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                // FIX: Add logic for the 'X' button visible in the image
                // The visual X is handled by CSS on the input
              />
              {searchTerm.length > 0 && (
                <button
                  className={styles.clearSearchButton}
                  onClick={handleClearSearch}
                >
                  ✕
                </button>
              )}
            </div>
            {/* The primary exit button when search bar is visible */}
            <button
              className={styles.exitSearchButton}
              onClick={handleExitSearch}
            >
              ✕
            </button>
          </div>
        ) : (
          // Display filters and search button
          <div className={styles.subjectFilterRow}>
            {/* Search Button */}
            <button
              className={styles.searchFilterButton}
              onClick={handleSearchButtonClick}
            >
              Search
            </button>

            {/* Subject Filter Buttons */}
            {SUBJECTS.map((subject) => (
              <button
                key={subject}
                className={
                  subject === activeSubject
                    ? styles.filterButtonActive
                    : styles.filterButton
                }
                onClick={() => handleFilterClick(subject)}
              >
                {subject}
              </button>
            ))}
          </div>
        )}

        {/* --- Experiment Grid --- */}
        {filteredExperiments.length === 0 && (
          // FIX: Only show "No results" message if search is active OR a non-matching filter is applied
          <p className={styles.noResults}>
            No experiments found matching your criteria.
          </p>
        )}

        {filteredExperiments.length > 0 && (
          <div className={styles.experimentGrid}>
            {filteredExperiments.map((experiment) => (
              <ExperimentCard key={experiment.id} experiment={experiment} />
            ))}
          </div>
        )}
      </section>

      {/* --- Footer (Unchanged) --- */}
      <footer className={styles.footer}>
        <p>© 2024 University of Science. All rights reserved.</p>
        <nav className={styles.footerNav}>
          <a href="#">Help Center</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Contact Us</a>
        </nav>
      </footer>
    </div>
  );
};

export default HomePage;
