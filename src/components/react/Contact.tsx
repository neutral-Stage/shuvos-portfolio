"use client";
import React, { useContext, useEffect, useRef,useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils/cn";
import emailjs from '@emailjs/browser'
import { Textarea } from "@/components/ui/textarea";
import { motion, useInView } from "framer-motion";
import { GlobalContext } from "@/context/GlobalContext";
import Dialog from "../ui/Dialog";

export function ContactForm() {
  const [isLoading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const ref = useRef(null)
  const inView = useInView(ref,{
    margin: '-300px'
  })
  const {setCurrentHash} = useContext(GlobalContext)

  useEffect(()=>{
    if(inView){
      setCurrentHash('contact')
    }
  },[inView])
  const form = useRef<HTMLFormElement>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const serviceID = "service_3sbdzu9";
    const templateID = "template_6z0ti89";
    e.preventDefault();
    if (form.current) {
      setLoading(true);
      emailjs
        .sendForm(serviceID, templateID, form.current, {
          publicKey: "user_lGefbjeUXEPQBgLK1x1qF",
        })
        .then(
          (data) => {
            console.log("SUCCESS!", data);
            setIsError(false)
          },
          (error) => {
            console.log("FAILED...", error.text);
            setIsError(true)
          }
        ).finally(()=>{setIsDialogOpen(true);setLoading(false);});
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col justify-center align-middle gap-0 max-w-5xl mx-auto in-view px-8 py-20"
      ref={ref}
    >
      <motion.div
        className="text-center my-8"
        viewport={{ once: true, amount: 0.2 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        initial={{ opacity: 0, y: -100, scale: 1.5 }}
        transition={{ duration: 0.4, delay: 0.2, ease: "easeInOut" }}
      >
        <h2 className="text-4xl font-bold">Get in touch</h2>
      </motion.div>
    
    <form
      ref={form}
      className="mx-auto my-8 w-full max-w-xl"
      onSubmit={handleSubmit}
    >
      <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
        <LabelInputContainer>
          <Label htmlFor="firstname">First name</Label>
          <Input
            id="firstname"
            placeholder="Tyler"
            type="text"
            name="firstname"
          />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="lastname">Last name</Label>
          <Input
            id="lastname"
            placeholder="Durden"
            type="text"
            name="lastname"
          />
        </LabelInputContainer>
      </div>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          placeholder="projectmayhem@fc.com"
          type="email"
          name="email"
        />
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="company">Company Name</Label>
        <Input
          id="company"
          placeholder="Company Name"
          type="text"
          name="company"
        />
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" placeholder="Message" name="message" />
      </LabelInputContainer>
      <button
        className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] dark:text-zinc-300 disabled:cursor-not-allowed disabled:opacity-50"
        type="submit"
        disabled={isLoading}
      >
        Submit
        <BottomGradient />
      </button>

      <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-200 to-transparent dark:via-neutral-700" />
    </form>
    {
      isDialogOpen ? <Dialog isError={isError} setIsDialogOpen={setIsDialogOpen} /> : null
    }
    </section>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-indigo-700 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-600 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
