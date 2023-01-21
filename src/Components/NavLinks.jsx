import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NavLinks = ({ isSplashStyle, isClicked }) => {
    const location = useLocation();
    const splashStyles = { fontSize: "22px", color: "#fff" };

    return (
        <>
            <Link
                to={"about"}
                onClick={() => {
                    isClicked();
                }}
            >
                <span
                    className={location.pathname === "/about" ? "active" : ""}
                    style={isSplashStyle ? splashStyles : {}}
                >
                    About
                </span>
            </Link>
            <Link
                to={"programs"}
                onClick={() => {
                    isClicked();
                }}
            >
                <span
                    className={
                        location.pathname === "/programs" ? "active" : ""
                    }
                    style={isSplashStyle ? splashStyles : {}}
                >
                    Programs
                </span>
            </Link>
            <Link
                to={"donate"}
                onClick={() => {
                    isClicked();
                }}
            >
                <span
                    className={location.pathname === "/donate" ? "active" : ""}
                    style={isSplashStyle ? splashStyles : {}}
                >
                    Donate
                </span>
            </Link>
            <Link
                to={"contact"}
                onClick={() => {
                    isClicked();
                }}
            >
                <span
                    className={location.pathname === "/contact" ? "active" : ""}
                    style={isSplashStyle ? splashStyles : {}}
                >
                    Contact
                </span>
            </Link>
        </>
    );
};

NavLinks.defaultProps = {
    isSplashStyle: false,
    isClicked: () => {},
};

export default NavLinks;
