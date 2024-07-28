import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "../src/dist/styles.css"; // Assuming your styles are in a separate file
import About from "./Pages/About";
import Home from "./Pages/Home";
import Navbar from "../src/components/Navbar"; // Import the Navbar component
import Models from "./Pages/Models";
import TestimonialsPage from "./Pages/TestimonialsPage";
import Team from "./Pages/Team";
import Contact from "./Pages/Contact";
import SignedIn from "./Pages/SignedIn"; // Adjust the path accordingly


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedLoggedIn = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(storedLoggedIn === "true");
  }, []);

  const handleSignIn = (status) => {
    setIsLoggedIn(status);
    localStorage.setItem("isLoggedIn", status);
  };

  return (
    <>
      {/* Always render the Navbar if the user is logged in */}
      {/* {isLoggedIn &&<Navbar />} */}

      <Routes>
   
      {/* {isLoggedIn && <Navbar />} */}

        {/* Home route with conditional rendering based on login status */}
        <Route
          path="/"
          element={isLoggedIn ? <Home /> : <Navigate to="/signedin" replace />}
        />
         
        <Route path="/about" element={<About />} />
        <Route path="/models" element={<Models />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />

        {/* Signed-in route with callback prop for login status update */}
        <Route
          path="/signedin"
          element={<SignedIn onSignIn={handleSignIn} />}
        />

        {/* Catch-all route for unmatched paths */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
