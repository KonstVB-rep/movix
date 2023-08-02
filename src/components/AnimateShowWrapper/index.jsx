import React from 'react';
import { motion, AnimatePresence } from "framer-motion"

const AnimateShowWrapper = ({condition,keyName, children}) => {

  return (
    <AnimatePresence>
      {condition && (
        <motion.div
          key={keyName}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1}}
          exit={{ opacity: 0}}
          transition={{ duration: 0.2 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnimateShowWrapper;
