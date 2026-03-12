import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import GridLoader from "react-spinners/GridLoader";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PageTransition from "./components/PageTransition";
import { AnimatePresence } from "framer-motion";
import BlogPage from "./pages/BlogPage";
import BlogPost from "./pages/BlogPost";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFadingOut(true);

      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && (
        <div
          className={`fixed inset-0 z-[999] flex items-center justify-center bg-background transition-opacity duration-500 ease-in-out ${
            isFadingOut ? "opacity-0" : "opacity-100"
          }`}
        >
          <GridLoader color="#0f172a" size={15} margin={2} />
        </div>
      )}

      <div
        className={`min-h-screen transition-opacity duration-700 ease-in-out ${
          isFadingOut ? "opacity-100" : "opacity-0"
        }`}
      >
        <AnimatePresence
          mode="wait"
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransition>
                  <Home />
                </PageTransition>
              }
            />
            <Route
              path="/login"
              element={
                <PageTransition>
                  <Login />
                </PageTransition>
              }
            />
            <Route
              path="/signup"
              element={
                <PageTransition>
                  <Signup />
                </PageTransition>
              }
            />
            <Route
              path="/blog"
              element={
                <PageTransition>
                  <BlogPage />
                </PageTransition>
              }
            />
            <Route
              path="/blog/:id"
              element={
                <PageTransition>
                  <BlogPost />
                </PageTransition>
              }
            />
          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
