import React from "react";
import { Link, useLocation } from "react-router-dom";
import { MdFacebook } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { SiYoutube } from "react-icons/si";

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
                                location.pathname === "/about" ? "active" : ""
                            }
                        >
                            About
                        </span>
                    </Link>
                    <Link to={"programs"}>
                        <span
                            className={
                                location.pathname === "/programs"
                                    ? "active"
                                    : ""
                            }
                        >
                            Programs
                        </span>
                    </Link>
                    <Link to={"donate"}>
                        <span
                            className={
                                location.pathname === "/donate" ? "active" : ""
                            }
                        >
                            Donate
                        </span>
                    </Link>
                    <Link to={"contact"}>
                        <span
                            className={
                                location.pathname === "/contact" ? "active" : ""
                            }
                        >
                            Contact
                        </span>
                    </Link>
                </div>
            </div>
            {location.pathname === "/" ? (
                <div className="bar fade">
                    <a
                        href="https://www.linkedin.com/in/saad-amir"
                        target="_blank"
                        style={{ opacity: "0.3", color: "#121212" }}
                    >
                        Saad Amir
                    </a>
                    <div>
                        <MdFacebook
                            fontSize={20}
                            style={{
                                verticalAlign: "middle",
                                opacity: "0.3",
                                marginRight: "4px",
                            }}
                        />
                        <SiYoutube
                            fontSize={20}
                            style={{
                                verticalAlign: "middle",
                                opacity: "0.3",
                                marginRight: "4px",
                            }}
                        />
                        <RiInstagramFill
                            fontSize={20}
                            style={{
                                verticalAlign: "middle",
                                opacity: "0.3",
                                marginRight: "4px",
                            }}
                        />
                    </div>
                </div>
            ) : (
                ""
            )}
        </div>
    );
};

export default Screen;
