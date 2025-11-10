// src/MainLayout.jsx
import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import styles from "./MainLayout.module.css";

// Helper to determine the active link style
const getLinkClass = (path, currentPath) => {
  // Check for exact match for Home
  if (path === "/") {
    return currentPath === path
      ? `${styles.navLink} ${styles.navLinkActive}`
      : styles.navLink;
  }

  // Check for "starts with" for other pages
  return currentPath.startsWith(path)
    ? `${styles.navLink} ${styles.navLinkActive}`
    : styles.navLink;
};

const MainLayout = () => {
  const location = useLocation();

  return (
    <div className={styles.mainLayout}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          {/* LEFT SIDE: Logo and Text Group */}
          {/* FIX: Logo links to the root "/" */}
          <Link to="/" className={styles.logoLink}>
            <div className={styles.logoImageContainer}>
              <img
                src="/logo.svg"
                alt="Virtual Lab Logo"
                className={styles.logoImage}
              />
            </div>
            <div className={styles.logoTextContainer}>
              <span className={styles.logoTextMain}>Virtual Lab</span>
              <span className={styles.logoTextSub}>By MIT</span>
            </div>
          </Link>

          {/* CENTER: Navigation Links */}
          <nav className={styles.nav}>
            {/* FIX: All links are now relative to the basename */}
            <Link to="/" className={getLinkClass("/", location.pathname)}>
              Home
            </Link>
            <Link
              to="/experiments"
              className={getLinkClass("/experiments", location.pathname)}
            >
              Experiments
            </Link>
            <Link
              to="/resources"
              className={getLinkClass("/resources", location.pathname)}
            >
              Resources
            </Link>
            <Link
              to="/about"
              className={getLinkClass("/about", location.pathname)}
            >
              About
            </Link>
          </nav>

          {/* RIGHT SIDE: Icons */}
          <div className={styles.headerRight}>
            <button className={styles.helpButton}>?</button>
            <img src="/logo.svg" alt="User" className={styles.userAvatar} />
          </div>
        </div>
      </header>

      {/* Outlet renders the matched child route's component */}
      <Outlet />

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© 2024 Virtual Lab. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MainLayout;
