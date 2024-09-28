// Input component extends from shadcnui - https://ui.shadcn.com/docs/components/input
'use client'
import * as React from 'react'
import { cn } from '@/utils/cn'
import { useMotionTemplate, useMotionValue, motion } from 'framer-motion'

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    const radius = 100 // change this to increase the rdaius of the hover effect
    const [visible, setVisible] = React.useState(false)

    let mouseX = useMotionValue(0)
    let mouseY = useMotionValue(0)

    function handleMouseMove({ currentTarget, clientX, clientY }: any) {
      let { left, top } = currentTarget.getBoundingClientRect()

      mouseX.set(clientX - left)
      mouseY.set(clientY - top)
    }
    return (
      <motion.div
        style={{
          background: useMotionTemplate`
        radial-gradient(
          ${visible ? radius + 'px' : '0px'} circle at ${mouseX}px ${mouseY}px,
          var(--indigo-700),
          transparent 80%
        )
      `
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className='group/input rounded-lg p-[2px] transition duration-200'
      >
        <textarea
          rows={6}
          className={cn(
            `dark:placeholder-text-neutral-600 placeholder:text-neutral-4000 flex w-full rounded-md border-none bg-gray-50 px-3 py-2 text-sm text-black shadow-input transition duration-400 file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 disabled:cursor-not-allowed disabled:opacity-50 group-hover/input:shadow-none dark:bg-zinc-800 dark:text-white dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] dark:focus-visible:ring-neutral-600`,
            className
          )}
          ref={ref}
          {...props}
          required
        />
      </motion.div>
    )
  }
)
Textarea.displayName = 'Textarea'

export { Textarea }
