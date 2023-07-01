import { motion } from 'framer-motion';

const LayoutMotion = ({ children }) => (
	<motion.div
		initial={{ delay: 1, x: -200, opacity: 1 }}
		animate={{ x: 0, opacity: 1 }}
		exit={{ x: 200, opacity: 1 }}
		transition={{ ease: 'easeInOut', duration: 0.8 }}>
		{children}
	</motion.div>
);
export default LayoutMotion;
