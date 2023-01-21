import React from "react";
import { motion } from "framer-motion";

const Card = ({ img, title, desc }) => {
    return (
        <div>
            <motion.img
                whileHover={{
                    scale: 1.1,
                }}
                src={img}
                alt={title}
            />
            <div>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
        </div>
    );
};

export default Card;
