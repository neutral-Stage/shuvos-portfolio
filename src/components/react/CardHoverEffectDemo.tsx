import { GlobalContext } from "@/context/GlobalContext";
import { HoverEffect } from "@ui/card-hover-effect";
import { motion, useInView } from "framer-motion";
import { memo, useContext, useEffect, useRef } from "react";

const CardHoverEffectDemo = ()=> {
  const ref = useRef(null)
  const inView = useInView(ref,{
    margin: '-300px'
  })
  const {setCurrentHash} = useContext(GlobalContext)
  useEffect(()=>{
    if(inView){
      setCurrentHash('projects')
    }
  },[inView])
  return (
    <section
      id="projects"
      className="flex flex-col justify-center align-middle gap-2 py-20  max-w-5xl mx-auto in-view px-8 overflow-hidden"
      style={{
        scrollMarginTop: "2rem",
      }}
      ref={ref}
    >
      <motion.div
        className="text-center my-8"
        viewport={{ once: true, amount: 0.2,  }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        initial={{ opacity: 0, y: -100, scale: 1.5 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
      >
        <h2 className="text-4xl font-bold">My Most Recent Projects</h2>
      </motion.div>
      <div className="max-w-5xl mx-auto px-8" data-scroll>
        <HoverEffect items={projects} />
      </div>
    </section>
  );
}
export const projects = [
  {
    title: "Operation Nation",
    stacks: ['Next.js', 'React.js', 'Sanity.io', 'GROQ', 'Typescript', 'Chakra UI'],
    link: "https://operationnation.co/",
    image: '/projects/operation_nation.png'
  },
  {
    title: "ONE Builder",
    stacks: ['Next.js', 'React.js', 'Sanity.io', 'GROQ', 'Typescript',  'Panda CSS'],
    link: "https://one-builder-v2.vercel.app/",
    image: '/projects/one_builder.png'
  },
  {
    title: "Probely",
    stacks: ['Next.js', 'React.js', 'Sanity.io', 'GROQ', 'Typescript', 'Panda CSS'],
    link: "https://probely.com/",
    image: '/projects/probely.png'
  },
  {
    title: "Code Builder IT",
    stacks: ['Astro.js', 'React.js', 'Sanity.io', 'Typescript', 'GROQ' , 'Aceternity UI', 'Tailwind CSS'],
    link: "https://code-builder-it.vercel.app/",
    image: '/projects/code_builder_it.png'
  },
  {
    title: "Westminster 2024",
    stacks: ['Vue.js', 'Nuxt.js', 'Sanity.io', 'GROQ' , 'Tailwind CSS'],
    link: "https://degree-shows.westminster.ac.uk/",
    image: '/projects/westminister_2024.png'
  },
  {
    title: "Lookbooks Store",
    stacks: ['React.js', 'Gatsby.js', 'Sanity.io', 'GROQ', 'GraphQL', 'Shopify API', 'Tailwind CSS'],
    link: "https://lookbooks.store/",
    image: '/projects/lookbooks.png'
  },
  
];


export default memo(CardHoverEffectDemo);