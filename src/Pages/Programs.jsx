import React, { useState } from "react";
import { motion } from "framer-motion";
import Card from "../Components/Card";
import programming from "../assets/cardimg/programming.jpg";
import school from "../assets/cardimg/school.jpg";
import dummies from "../assets/cardimg/computerfordummies.jpg";
import social from "../assets/cardimg/social.jpg";
import freelance from "../assets/cardimg/freelance.jpg";
import agri from "../assets/cardimg/agri.jpg";
import graphic from "../assets/cardimg/graphic.jpg";
import report from "../assets/cardimg/reportwriting.jpg";

const Programs = () => {
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
            key="programs"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 1 }}
            className="page"
        >
            <h1>Educational Programs</h1>
            <p>
                Prosperity Pathways provides educational programs for residents
                of under-developed regions in the world. We help people become
                better citizens, get a better-paid job, show them the difference
                between good and bad. Education shows us the importance of hard
                work and, at the same time, helps us grow and develop. Thus, we
                are able to shape a better society to live in. <br />
                <br />
                Below is the list of currently active programs:
                <br />
                <br />
            </p>
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                class="cards"
            >
                <motion.div variants={listItem} class="card">
                    <Card
                        img={programming}
                        title="Programming Fundamentals"
                        desc="Learn fundamental concepts like variables, functions and loops."
                    />
                </motion.div>
                <motion.div variants={listItem} class="card">
                    <Card
                        img={social}
                        title="Social Infrastructure"
                        desc="literacy programme, education, public health, housing, drinking water and sanitation."
                    />
                </motion.div>
                <motion.div variants={listItem} class="card">
                    <Card
                        img={agri}
                        title="Agriculture Development"
                        desc="Social context of agriculture, atmosphere, soil, seeds, weather, and climate."
                    />
                </motion.div>
                <motion.div variants={listItem} class="card">
                    <Card
                        img={graphic}
                        title="Graphic Design"
                        desc="The basics of image manipulation with photoshop and other tools."
                    />
                </motion.div>
                <motion.div variants={listItem} class="card">
                    <Card
                        img={freelance}
                        title="Entrepreneur Guide"
                        desc="Brainstorming and planning. Finding ideal customers. Calculate best prices."
                    />
                </motion.div>
                <motion.div variants={listItem} class="card">
                    <Card
                        img={school}
                        title="Primary Studies"
                        desc="Language, mathematics, science, art, music and social studies for children."
                    />
                </motion.div>
                <motion.div variants={listItem} class="card">
                    <Card
                        img={report}
                        title="MS Office and Reports"
                        desc="Learn the go-to features offered by MS Office package. Compose great Reports."
                    />
                </motion.div>
                <motion.div variants={listItem} class="card">
                    <Card
                        img={dummies}
                        title="Computer 101"
                        desc="Parts of computer. Applications and usage. Basic operating system functionality."
                    />
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Programs;
