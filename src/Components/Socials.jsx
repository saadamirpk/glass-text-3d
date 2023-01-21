import React from "react";
import { MdFacebook } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { SiYoutube } from "react-icons/si";

const Socials = () => {
    return (
        <>
            <a href="https://www.facebook.com/">
                <MdFacebook
                    fontSize={20}
                    style={{
                        verticalAlign: "middle",
                        opacity: 0.6,
                        marginRight: "4px",
                    }}
                />
            </a>
            <a href="https://www.youtube.com/">
                <SiYoutube
                    fontSize={20}
                    style={{
                        verticalAlign: "middle",
                        opacity: 0.6,
                        marginRight: "4px",
                    }}
                />
            </a>
            <a href="https://www.instagram.com/">
                <RiInstagramFill
                    fontSize={20}
                    style={{
                        verticalAlign: "middle",
                        opacity: 0.6,
                        marginRight: "4px",
                    }}
                />
            </a>
        </>
    );
};

export default Socials;
