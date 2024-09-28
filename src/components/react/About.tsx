
import { FlipWords } from "../ui/flip-words";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { motion, useInView } from "framer-motion";
import { useContext, useEffect, useRef } from "react";
import { GlobalContext } from "@/context/GlobalContext";

const adjectiveWords = [
  "passionate",
  "experienced",
  "creative",
  "dedicated",
  "skilled",
  "versatile",
  "proactive",
  "strategic",
  "professional",
  "solution-focused",
];

const About = () => {
  const ref = useRef(null)
  const inView = useInView(ref,{
    margin: '-300px'
  })
  const {setCurrentHash} = useContext(GlobalContext)

  useEffect(()=>{
    if(inView){
      setCurrentHash('about')
    }
  },[inView])
  return (
    <section
      id="about"
      className="flex flex-col justify-center align-middle gap-0 max-w-5xl mx-auto in-view px-8 py-20 overflow-hidden"
      ref={ref}
    >
      <motion.div
        className="text-center my-8"
        viewport={{ once: true, amount: 0.2 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        initial={{ opacity: 0, y: -100, scale: 1.5 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
      >
        <h2 className="text-4xl font-bold">About Me</h2>
      </motion.div>
      <div className="flex flex-col md:flex-row justify-around">
        <motion.div
          viewport={{ once: true, amount: 0.2 }}
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
          className="flex flex-col space-y-4 order-2 md:order-1 ml-2  md:w-[65%]"
        >
          <p className="text-3xl leading-snug tracking-wide font-bold relative">
            Hello! I’m Shuvo, a <br className="block md:hidden" /> <FlipWords words={adjectiveWords} /> <br className="hidden md:block" />{" "}
            full-stack developer with over 8 years in the tech industry.
          </p>

          <TextGenerateEffect words="I specialize in creating robust, scalable, user-friendly web applications that solve real-world problems. My expertise spans front and backend development, enabling me to build seamless and efficient end-to-end solutions." />
        </motion.div>
        <motion.div
          viewport={{ once: true, amount: 0.2 }}
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
          className="flex justify-center md:justify-end items-center order-1 md:order-2 mr-2 mb-8 md:mb-0 md:w-[30%]"
        >
          <img
            src="/shuvo_arm.jpeg"
            alt="Shuvo Anirban Roy"
            width="300"
            height="400"
            className="rounded-full w-[200px] h-[200px] md:w-[300px] md:h-[400px] object-cover object-top md:rounded-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
