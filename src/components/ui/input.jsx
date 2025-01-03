import * as React from "react"
import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        "col-span-6 flex h-10 w-full bg-stone-800 px-4 py-2 font-mono text-sm text-stone-400 caret-stone-400 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-stone-200/50 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
