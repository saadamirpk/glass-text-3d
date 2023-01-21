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

    return (
        <div className="App">
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path="/" />
                    <Route path="/about" element={<About />} />
                    <Route path="/programs" element={<Programs />} />
                    <Route path="/donate" element={<Donate />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </AnimatePresence>
            <ThreeCanvas />
            <Screen />
        </div>
    );
}

export default App;
