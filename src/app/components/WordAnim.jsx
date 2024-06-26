"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const categories = [
  { label: "Drinks", color: "#017449" },
  { label: "Dairy", color: "#017449" },
  { label: "Personal Care", color: "#017449" },
  { label: "Snacks", color: "#017449" },
  { label: "Cleaning Essentials", color: "#017449" },
  { label: "Dry Foods", color: "#017449" },
];

const WordAnim = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const animateWord = () => {
      const timeoutId = setTimeout(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % categories.length);
      }, 2500);

      return () => clearTimeout(timeoutId); // Cleanup timeout
    };

    animateWord();
  }, [activeIndex]);

  return (
    <div className="overflow-hidden  h-10 md:h-14 lg:h-20">
      <AnimatePresence mode="wait" initial={false}>
        {categories.map((category, i) =>
          i === activeIndex ? (
            <motion.div
              key={i}
              initial={{
                y: "90%",
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: "-80%",
                opacity: 0,
              }}
              transition={{
                duration: 0.25,
              }}
              className="font-vest-b text-4xl md:text-3xl lg:text-5xl tracking-tighter"
              style={{
                color: category.color,
              }}
            >
              {category.label}
            </motion.div>
          ) : null
        )}
      </AnimatePresence>
    </div>
  );
};

export default WordAnim;
