import { motion, AnimatePresence } from "framer-motion"
import React from 'react';

const AnimateShowWrapper = ({condition,keyName, children}) => (
    <AnimatePresence>
      {condition && (
        <motion.div
          key={keyName}
          animate={{ opacity: 1}}
          exit={{ opacity: 0}}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );

export default AnimateShowWrapper;
