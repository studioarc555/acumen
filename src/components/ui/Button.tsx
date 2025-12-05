import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "glass";
  size?: "sm" | "md" | "lg" | "xl" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const variants = {
      // Primary: Uses dark purple for strong contrast
      primary: "bg-acumen-primary text-white hover:bg-acumen-secondary shadow-lg hover:shadow-acumen-primary/50",
      
      // FIX 1: Replaced hardcoded HSL with custom acumen colors
      secondary:
        "bg-acumen-primary text-white hover:bg-acumen-secondary shadow-lg",
        
      // FIX 2: Replaced slate colors with acumen colors
      outline: "border-2 border-acumen-primary/30 bg-transparent text-acumen-primary hover:border-acumen-secondary hover:text-acumen-secondary", 
      
      // FIX 3: Replaced slate colors with acumen colors/tints
      ghost: "hover:bg-acumen-primary/10 text-acumen-light hover:text-acumen-secondary",
      
      // Glass: Retained original styling
      glass:
        "backdrop-blur-md bg-white/10 border border-white/20 text-white hover:bg-white/20",
    };

    const sizes = {
      sm: "h-9 px-4 text-xs rounded-full",
      md: "h-11 px-6 text-sm rounded-full",
      lg: "h-12 px-8 text-base rounded-full",
      xl: "h-14 px-10 text-lg rounded-full",
      icon: "h-10 w-10 rounded-full p-2",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 font-semibold transition-all",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };