import React from "react";
import { useLocation } from "wouter";

const Screen = () => {
    const [location, setLocation] = useLocation();

    return (
        <div className="overlay">
            <div className="bar">
                <a onClick={() => setLocation("/")}>Prosperity Pathways</a>

                <div className="menu">
                    <span
                        onClick={() => setLocation("/about")}
                        className={location === "/about" ? "active" : ""}
                    >
                        About
                    </span>

                    <span
                        onClick={() => setLocation("/programs")}
                        className={location === "/programs" ? "active" : ""}
                    >
                        Programs
                    </span>

                    <span
                        onClick={() => setLocation("/donate")}
                        className={location === "/donate" ? "active" : ""}
                    >
                        Donate
                    </span>

                    <span
                        onClick={() => setLocation("/contact")}
                        className={location === "/contact" ? "active" : ""}
                    >
                        Contact
                    </span>
                </div>
            </div>
            {location === "/" ? (
                <div className="bar fade">
                    <p>Saad Amir</p>
                    <p>Socials</p>
                </div>
            ) : (
                ""
            )}
        </div>
    );
};

export default Screen;
