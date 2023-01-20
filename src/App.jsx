import { react } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ThreeCanvas from "./ThreeCanvas";
import Screen from "./Screen";
import About from "./Pages/About";
import Programs from "./Pages/Programs";
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
                </Routes>
            </AnimatePresence>
            <ThreeCanvas />
            <Screen />
        </div>
    );
}

export default App;
