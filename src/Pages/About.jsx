import React, { useEffect, useRef } from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";

const About = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.5,
            },
        },
    };

    const listItem = {
        hidden: { opacity: 0 },
        show: { opacity: 1 },
    };
    return (
        <motion.div
            key="about"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 1 }}
            className="page"
        >
            <h1>About Us</h1>
            <motion.div variants={container} initial="hidden" animate="show">
                <motion.p variants={listItem}>
                    Our mission is to provide quality education to all students
                    living in rural areas in order to give them the best chance
                    at success. We believe that all students should have access
                    to the same educational opportunities, regardless of where
                    they live. We are a nonprofit organization that works to
                    bridge the gap between rural and urban areas in terms of
                    educational resources. We provide educational programs and
                    materials, mentoring and tutoring services, and scholarships
                    to students in rural areas.
                </motion.p>
                <motion.p variants={listItem}>
                    We also work with schools and communities to ensure that
                    students in rural areas have the same access to educational
                    resources as students in urban areas. Our team is composed
                    of a diverse group of volunteers and professionals from
                    various backgrounds who are passionate about making a
                    difference in the lives of rural students. We are committed
                    to providing the best possible educational experience for
                    rural students and believe that this will help create a
                    better future for our communities.
                </motion.p>
                <motion.div variants={listItem}>
                    <Player
                        autoplay
                        loop
                        src="https://assets3.lottiefiles.com/packages/lf20_zi361grc.json"
                        style={{ height: "300px", width: "300px" }}
                    >
                        <Controls visible={false} />
                    </Player>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default About;
