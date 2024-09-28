import { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import Logo from "./Logo";
import { GlobalContext } from "@/context/GlobalContext";
const TABS = ["about", "projects", "contact", "resume"];

const ElementWrapper = (props: { [x: string]: any; tab: any; })=> {
  const {tab,...rest} = props
  return (
    tab ==='resume' ? <motion.a href='/resume' {...rest}>{props.children}</motion.a> : <motion.button {...rest}>{props.children}</motion.button>
  )
}

export const NavbarReact = () => {
  const [hovered, setHovered] = useState("");
  const [clicked, setClicked] = useState("");
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);
  const {currentHash} = useContext(GlobalContext)
  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll === 0) {
      setIsHeaderSticky(false);
    } else {
      setIsHeaderSticky(true);
    }
  };
  useEffect(()=>{
    if(currentHash){
      setHovered(currentHash)
    }
  },[currentHash])
  useEffect(() => {
    if (clicked) {
      const elm = document.getElementById(clicked);
      if (elm) {
        elm?.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [clicked]);
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  });

  return (
    <div
      className={`fixed top-2 inset-x-0 max-w-3xl mx-auto z-50 flex items-center justify-center w-full py-2  rounded-full transition-all duration-200 ease-in-out  ${
        isHeaderSticky ? "dark:bg-brand shadow-[0px_0px_20px_#6366F1]" : ""
      }`}
    >
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          staggerChildren: 0.5,
        }}
        className="flex space-x-1 md:space-x-6 items-center"
      >
        <Logo />
        {TABS.map((tab, index) => (
          <ElementWrapper tab={tab} key={index}
          initial={{
            opacity: 0,
            filter: "blur(8px)",
            scale: 1.3,
          }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
            scale: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          onHoverStart={() => setHovered(tab)}
          onHoverEnd={() => setHovered(clicked ? clicked : tab)}
          onClick={()=>setClicked(tab)}
          className="group relative text-sm md:text-2xl font-normal px-3 md:px-5 py-2 dark:text-white duration-200 capitalize ">
          {tab}
            {hovered === tab && (
              <motion.span
                layoutId="nav-item"
                className="absolute border-2 border-white rounded-full bg-transparent inset-0 "
              ></motion.span>
            )}
          </ElementWrapper>
        ))}
      </motion.div>
    </div>
  );
};
