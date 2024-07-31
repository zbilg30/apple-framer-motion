import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

export const FadeIn: React.FC<Props> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: "100% 0px -200px 0px" }}
    >
      {children}
    </motion.div>
  );
};
