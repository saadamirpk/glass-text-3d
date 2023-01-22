import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ThreeCanvas from "./Components/ThreeCanvas";
import Screen from "./Components/Screen";
import About from "./Pages/About";
import Donate from "./Pages/Donate";
import Programs from "./Pages/Programs";
import Contact from "./Pages/Contact";
import { AnimatePresence } from "framer-motion";
import "./App.css";

function App() {
    const location = useLocation();

    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });
    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="App">
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<></>} />
                    <Route path="/about" element={<About />} />
                    <Route path="/programs" element={<Programs />} />
                    <Route path="/donate" element={<Donate />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </AnimatePresence>
            <ThreeCanvas windowSize={windowSize} />
            <Screen windowSize={windowSize} />
        </div>
    );
}

export default App;
