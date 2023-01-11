import { useState, useEffect } from "react";
import { Router, Switch, Route } from "wouter";
import ThreeCanvas from "./ThreeCanvas";
import Screen from "./Screen";
import "./App.css";
import { useLocation } from "wouter";

function App() {
    const [location, setLocation] = useLocation();
    const [text3dVisible, setText3dVisible] = useState(false);

    useEffect(() => {
        if (location === "/") {
            setText3dVisible(true);
        } else if (text3dVisible) {
            setText3dVisible(false);
        }
    }, [location]);

    return (
        <div className="App">
            <Router />
            <Switch />
            <Route exact path="/"></Route>
            <Switch />
            <Router />
            <ThreeCanvas text3dVisible={text3dVisible} />
            <Screen />
        </div>
    );
}

export default App;
