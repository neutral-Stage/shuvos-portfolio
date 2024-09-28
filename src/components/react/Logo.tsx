import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.a
      className="max-w-[40px] md:max-w-[150px] mr-10 md:mx-auto text-xs md:text-md md:text-xl font-bold text-center hover:drop-shadow-[0px_0px_4px_#6366F1]"
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
      Shuvo's Portfolio
    </motion.a>
  );
};

export default Logo;
