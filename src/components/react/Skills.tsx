import { useRef, useEffect, useContext } from "react";
import { motion, useInView } from "framer-motion";
import { GlobalContext } from "@/context/GlobalContext";


const skills = [
  { name: "React", value: 90 },
  { name: "Vue", value: 85 },
  { name: "CSS", value: 90 },
  { name: "Next.js", value: 95 },
  { name: "Sanity", value: 95 },
  { name: "Node.js", value: 85 },
  { name: "Gatsby.js", value: 95 },
  { name: "Nuxt.js", value: 95 },
  { name: "Javascript", value: 92 },
  { name: "GraphQl", value: 86 },
  { name: "GROQ", value: 99 },
  { name: "Webflow", value: 85 },
];

const Skills = () => {
  const ref = useRef(null)
  const inView = useInView(ref,{
    margin: '-300px'
  })
  const {setCurrentHash} = useContext(GlobalContext)

  useEffect(()=>{
    if(inView){
      setCurrentHash('skills')
    }
  },[inView])
  const variants = {
    hidden: { opacity: 0, scale: 0.3, y: 100 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };
  return (
    <section
      id="skills"
      className="flex flex-col justify-center align-middle gap-8 max-w-5xl h-screen mx-auto in-view px-8 py-80"
      ref={ref}
    >
      <motion.div
        className="text-center my-8"
        viewport={{ once: true, amount: 0.2 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        initial={{ opacity: 0, y: 100, scale: 1.5 }}
        transition={{ duration: 0.4, delay: 0.2, ease: "easeInOut" }}
      >
        <h2 className="text-4xl font-bold">Skills</h2>
      </motion.div>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 grid-rows-4 gap-2"
        initial="hidden"
        whileInView="visible"
        variants={variants}
      >
        {skills.map((skill) => {
          return (
            <motion.div
              key={skill.name}
              variants={variants}
              className="cursor-pointer text-center gap-4 flex flex-col md:flex-row p-8 font-mono text-sm md:text-lg font-bold justify-between border rounded-2xl hover:shadow-inner-big hover:shadow-red-700 text-slate-100 border-slate-700 bg-black"
            >
              <p>{skill.name}</p>
              <div>{skill.value}%</div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};
export default Skills;
