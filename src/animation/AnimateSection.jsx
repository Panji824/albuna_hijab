import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// This component wraps your standard HTML section
const AnimatedSection = ({ children, id, className, threshold = 0.5 }) => {
    const ref = useRef(null);
    // useInView: detects if the element is currently visible in the viewport
    const isInView = useInView(ref, { amount: threshold, once: false });

    // Determine the state for CSS/class application
    const animationStateClass = isInView ? 'is-active' : 'is-inactive';

    return (
        <motion.section 
            id={id}
            ref={ref}
            className={`${className} ${animationStateClass}`}
            
            // Framer Motion's built-in animation properties
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.5 }}
        >
            {children}
        </motion.section>
    );
};

export default AnimatedSection;