import React from "react";
import { Link, useLocation } from "react-router-dom";

const Screen = () => {
    const location = useLocation();

    return (
        <div className="overlay">
            <div className="bar">
                <Link to={"/"}>Prosperity Pathways</Link>

                <div className="menu">
                    <Link to={"about"}>
                        <span
                            className={
                                location.pathname === "about" ? "active" : ""
                            }
                        >
                            About
                        </span>
                    </Link>
                    <Link to={"programs"}>
                        <span
                            className={
                                location.pathname === "programs" ? "active" : ""
                            }
                        >
                            Programs
                        </span>
                    </Link>
                    <Link to={"donate"}>
                        <span
                            className={
                                location.pathname === "donate" ? "active" : ""
                            }
                        >
                            Donate
                        </span>
                    </Link>
                    <Link to={"contact"}>
                        <span
                            className={
                                location.pathname === "contact" ? "active" : ""
                            }
                        >
                            Contact
                        </span>
                    </Link>
                </div>
            </div>
            {/* location.pathname === "/" ? (
                <div className="bar fade">
                    <p>Saad Amir</p>
                    <p>Socials</p>
                </div>
            ) : (
                ""
            ) */}
        </div>
    );
};

export default Screen;
