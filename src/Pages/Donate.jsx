import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

const Donate = () => {
    const [val, setVal] = useState(50);

    const handleConfetti = () => {
        confetti({
            particleCount: 150,
            spread: 360,
            origin: {
                x: Math.random(),
                // since they fall down, start a bit higher than random
                y: Math.random() - 0.2,
            },
        });
    };

    return (
        <motion.div
            key="donate"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 1 }}
            className="page"
        >
            <h1>Donations</h1>
            <p>
                We invite you to join us in our mission to provide quality
                education to all students in rural areas. By supporting our
                cause, you can help us make sure that no student is left behind.
                Together, we can make a difference.
            </p>
            <div class="donations">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{
                        width: "45%",
                    }}
                    transition={{
                        duration: 3,
                        type: "spring",
                        stiffness: 40,
                        delay: 1,
                    }}
                    class="donations__progress-bar"
                ></motion.div>
                <h2 class="donations__progress">
                    $<span class="donations__amount">34,250</span> / $75,000
                </h2>
                <div class="donations__text">
                    Join the
                    <span class="donations__donors"> 4763 </span>
                    other donors who have already supported our projects.
                </div>
                <form class="donations__form">
                    <span class="donations__input-icon">$</span>
                    <input
                        class="donations__input"
                        type="number"
                        step={5}
                        value={val}
                        onChange={(e) => {
                            setVal(e.target.value);
                        }}
                        title="$"
                    />
                    <input
                        type="submit"
                        class="donations__submit"
                        onClick={(e) => {
                            e.preventDefault();
                            handleConfetti();
                        }}
                    />
                </form>
            </div>
        </motion.div>
    );
};

export default Donate;
