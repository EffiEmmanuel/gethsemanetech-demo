import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import "./scrollbar.css";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import NavBar from "./components/NavBar";

function App() {
  // Locomotive scroll
  const scrollRef = useRef(null);
  const navbarRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      smoothMobile: true,
      inertia: 1, // Adjust the inertia value as needed
    });

    // Clean up the instance on component unmount
    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div className="pt-7" data-scroll-container ref={scrollRef}>
      <NavBar navbarRef={navbarRef} />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
