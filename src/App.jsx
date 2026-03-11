import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import GridLoader from "react-spinners/GridLoader";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // 1. Wait for 2 seconds of "loading"
    const timer = setTimeout(() => {
      setIsFadingOut(true); // Trigger the CSS crossfade animations

      // 2. Wait 500ms for the fade animation to finish, then unmount the loader completely to free up memory
      setTimeout(() => {
        setIsLoading(false);
      }, 500);

    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* The Loading Overlay 
        Uses fixed positioning to sit on top of everything. Fades out smoothly when isFadingOut becomes true.
      */}
      {isLoading && (
        <div
          className={`fixed inset-0 z-[999] flex items-center justify-center bg-background transition-opacity duration-500 ease-in-out ${
            isFadingOut ? "opacity-0" : "opacity-100"
          }`}
        >
          <GridLoader color="#0f172a" size={15} margin={2} />
        </div>
      )}

      {/* The Main Application
        Renders secretly in the background to load images/fonts. Fades in smoothly when isFadingOut becomes true.
      */}
      <div
        className={`min-h-screen transition-opacity duration-700 ease-in-out ${
          isFadingOut ? "opacity-100" : "opacity-0"
        }`}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </>
  );
}

export default App;