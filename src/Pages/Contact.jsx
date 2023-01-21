import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MdEmail, MdCall } from "react-icons/md";

const Contact = () => {
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
            key="contact"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 1 }}
            className="page"
        >
            <h1>Contact</h1>
            <motion.div variants={container} initial="hidden" animate="show">
                <motion.p variants={listItem}>
                    We are always happy to hear from you! <br /> If you have any
                    questions or comments, please feel free to reach out to us.
                </motion.p>
                <motion.p variants={listItem}>
                    <h4>
                        <MdCall
                            fontSize={20}
                            style={{
                                verticalAlign: "middle",
                                marginRight: "4px",
                            }}
                        />
                        +1123 456 7890
                    </h4>
                </motion.p>
                <motion.p variants={listItem}>
                    <h4>
                        <MdEmail
                            fontSize={20}
                            style={{
                                verticalAlign: "middle",
                                marginRight: "4px",
                            }}
                        />
                        hello@pathway.com
                    </h4>
                </motion.p>
                <motion.p variants={listItem}>
                    <h4>
                        <MdEmail
                            fontSize={20}
                            style={{
                                verticalAlign: "middle",
                                marginRight: "4px",
                            }}
                        />
                        volunteer@pathway.com
                    </h4>
                </motion.p>
                <motion.p variants={listItem}>
                    Thank you for your support!
                </motion.p>
            </motion.div>
        </motion.div>
    );
};

export default Contact;
