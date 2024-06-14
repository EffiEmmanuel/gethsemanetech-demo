import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import "./scrollbar.css";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import NavBar from "./components/NavBar";

function App() {
  return (
    // <div className="" data-scroll-container ref={scrollRef}>
    //   {/* <NavBar navbarRef={navbarRef} /> */}
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
    // </div>
  );
}

export default App;
