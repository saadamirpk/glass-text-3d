import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Programs = () => {
    return (
        <motion.div
            key="programs"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 1 }}
            className="page"
        >
            <h1>Programs</h1>
            <h2>Welcome to About us Page</h2>
        </motion.div>
    );
};

export default Programs;
