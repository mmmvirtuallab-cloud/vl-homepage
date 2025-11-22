import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./MainLayout";
import HomePage from "./HomePage.jsx";
import "./App.css";
import AvailableExperiments from "./AvailableExperiments.jsx";
import ResourcesPage from "./ResourcePage.jsx";
import AboutPage from "./AboutPage.jsx";

// --- A Simple Error Page Component ---
const ErrorPage = () => {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>404 Not Found</p>
    </div>
  );
};

function App() {
  return (
    // We do NOT use RouterProvider here because main.jsx already has HashRouter.
    // We use simple <Routes> and <Route> components instead.
    <Routes>
      {/* Parent Route: MainLayout */}
      <Route path="/" element={<MainLayout />}>
        {/* Child Route: Home (index) */}
        <Route index element={<HomePage />} />

        {/* Child Route: Experiments */}
        <Route path="experiments" element={<AvailableExperiments />} />

        {/* Child Route: Resources */}
        <Route path="resources" element={<ResourcesPage />} />

        {/* Child Route: About */}
        <Route path="about" element={<AboutPage />} />

        {/* Catch-all Route for 404 Errors */}
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
