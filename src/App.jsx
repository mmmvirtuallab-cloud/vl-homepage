// src/App.jsx

import {
  createBrowserRouter,
  RouterProvider,
  // We don't need Navigate anymore
} from "react-router-dom";
import MainLayout from "./MainLayout";
import HomePage from "./HomePage.jsx";
import "./App.css";
import AvailableExperiments from "./AvailableExperiments.jsx";

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
// ------------------------------------

// 2. Define your routes
const router = createBrowserRouter(
  [
    {
      // The parent path is now just "/"
      // The basename will be added automatically
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true, // Renders HomePage at "/"
          element: <HomePage />,
        },
        {
          path: "experiments", // Renders at "/experiments"
          element: <AvailableExperiments />,
        },
        // Add "resources" and "about" here when ready
        // {
        //   path: "resources",
        //   element: <ResourcesPage />,
        // },
        // {
        //   path: "about",
        //   element: <AboutPage />,
        // },
      ],
    },
  ],
  {
    // 3. THIS IS THE FIX: Tell the router about your base path
    basename: "/vl-homepage/",
  }
);

// 4. Update the App component to use the router
function App() {
  return <RouterProvider router={router} />;
}

export default App;
