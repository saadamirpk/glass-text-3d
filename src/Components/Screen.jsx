import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Socials from "../Components/Socials";
import NavLinks from "./NavLinks";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

const Screen = ({ windowSize }) => {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    const newLinkOpened = () => {
        setMenuOpen(false);
    };

    return (
        <div className="overlay">
            <div className="bar">
                <Link to={"/"}>Prosperity Pathways</Link>
                <div className="menu">
                    {windowSize.width > 700 ? (
                        <NavLinks />
                    ) : (
                        <div className="splash">
                            <div
                                className="splash-bg"
                                style={
                                    menuOpen
                                        ? {
                                              width: "100vw",
                                              height: "100vh",
                                              transition: "all ease 200ms",
                                          }
                                        : {
                                              width: "0",
                                              height: "0",
                                              transition: "all ease 200ms",
                                          }
                                }
                            >
                                <div className="splash-menu">
                                    {menuOpen && (
                                        <NavLinks
                                            isSplashStyle={true}
                                            isClicked={newLinkOpened}
                                        />
                                    )}
                                </div>
                            </div>
                            <div className="splash-icon">
                                {menuOpen ? (
                                    <MdClose
                                        onClick={() => {
                                            setMenuOpen(false);
                                        }}
                                        style={{
                                            color: "#fff",
                                            pointerEvents: "all",
                                        }}
                                    />
                                ) : (
                                    <GiHamburgerMenu
                                        onClick={() => {
                                            setMenuOpen(true);
                                        }}
                                        style={{
                                            color: "#ff9064",
                                            pointerEvents: "all",
                                        }}
                                    />
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {location.pathname === "/" ? (
                <div className="bar fade">
                    <a
                        href="https://www.linkedin.com/in/saad-amir"
                        target="_blank"
                        style={{ opacity: 0.2 }}
                    >
                        Saad Amir
                    </a>
                    <div>
                        <Socials />
                    </div>
                </div>
            ) : (
                ""
            )}
        </div>
    );
};

export default Screen;
