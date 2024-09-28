import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.a
      className="flex flex-col gap-2 p-2 md:gap-0 md:p-0 max-w-[150px] mx-auto text-xs md:text-lg font-bold text-center hover:drop-shadow-[0px_0px_4px_#6366F1]"
      style={{
        background: "linear-gradient(to right, #fff, #D1D5DB)", // Light gray to shadow gray
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        textShadow: "0px 0px 0px #ffffff",
      }}
      href="/"
      initial={{
        opacity: 0,
        y: -40,
        x: 40,
        filter: "blur(8px)",
        scale: 2,
      }}
      animate={{
        opacity: 1,
        y: 0,
        x: 0,
        filter: "blur(0px)",
        scale: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      whileHover={{
        textShadow: "0px 10px 20px #6366F1",
      }}
      whileTap={{
        textShadow: "0px 10px 20px #6366F1",
      }}
      
    >
      <span>Shuvo's</span>
      <span>Portfolio</span>
    </motion.a>
  );
};

export default Logo;
