import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import { memo, useState } from "react";

export const HoverEffect = memo(  ({
  items,
  className,
}: {
  items: {
    title: string;
    stacks: string[];
    link: string;
    image: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          href={item?.link}
          key={item?.link}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full border border-transparent dark:border-indigo-500/[0.2] bg-neutral-200 dark:bg-indigo-800/[0.5] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card image={item.image} title={item.title}>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription stacks={item.stacks} />
          </Card>
        </a>
      ))}
    </div>
  );
});

export const Card = memo( ({
  className,
  children,
  image,
  title
}: {
  className?: string;
  children: React.ReactNode;
  image: string;
  title: string;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-indigo-200/[0.2] group-hover:border-indigo-500 relative z-20 ",
        className
      )}
    >
      <div className="relative z-50  group-hover:opacity-0 transition-all duration-450 ease-in-out">
        <div className="p-4">{children}</div>
      </div>
      <img className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-all duration-450 ease-in-out object-fill w-full h-full"  loading="lazy"  src={image} alt={title}  />
    </div>
  );
});
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  stacks,
}: {
  className?: string;
  stacks: string[];
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-300 tracking-wide break-words leading-relaxed text-xs font-mono flex flex-wrap gap-2",
        className
      )}
    >
      {stacks.map((stack)=>{
              return <span key={stack} className="bg-indigo-800/40 p-1 rounded-md">{stack}</span>
            })}
    </p>
  );
};
