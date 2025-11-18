import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AnimatedSection = ({ children, id, className, threshold = 0.5 }) => {
    const ref = useRef(null);
    
    // 1. CRITICAL CHANGE: Set once: true. Animation will trigger ONLY the first time it enters the viewport.
    const isInView = useInView(ref, { amount: threshold, once: true });

    // The animationStateClass and transition properties are kept as they are good practice, 
    // but the core logic is now driven by 'isInView' (a boolean that only turns true once).
    
    return (
        <motion.section 
            id={id}
            ref={ref}
            className={className} 
            
            // Initial state (Hidden: opacity 0, offset 50px down)
            initial={{ opacity: 0, y: 50 }}
            
            // 2. CRITICAL CHANGE: Use the target state directly. 
            // Framer Motion automatically transitions from 'initial' to 'animate' when 'isInView' is true.
            // Since 'once' is true, it never reverts back to the 'initial' state.
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            
            transition={{ 
                type: "spring", 
                stiffness: 100, 
                damping: 20, 
                duration: 0.5,
                delay: 0.1 // Optional: Add a slight delay for better visual flow
            }}
        >
            {children}
        </motion.section>
    );
};

export default AnimatedSection;