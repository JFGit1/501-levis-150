import { motion } from 'framer-motion';

const LayoutMotion = ({ children }) => (
	<motion.div
		initial={{ delay: 1, x: 0, opacity: 0 }}
		animate={{ x: 0, opacity: 1 }}
		exit={{ x: 0, opacity: 0 }}
		transition={{ ease: 'easeInOut', duration: 1.2 }}>
		{children}
	</motion.div>
);
export default LayoutMotion;
