"use client";

import type { ReactNode } from "react";

interface GlowingButtonProps {
  children: ReactNode;
  href?: string;
  target?: string;
  onClick?: () => void;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?:
    | "navy"
    | "platinum"
    | "silver"
    | "dark"
    | "outline"
    | "light"
    | "white";
}

export default function GlowingButton({
  children,
  href,
  target,
  onClick,
  className = "",
  size = "md",
  variant = "navy",
}: GlowingButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-2.5 text-[10px] tracking-[0.14em]",
    md: "px-6 py-3.5 text-xs tracking-[0.14em]",
    lg: "px-7 py-4 text-xs tracking-[0.14em]",
  }[size];

  // Visual identity based on Ronaldo Giliard Advocacia
  // Deep Oxford Navy (matching Dr. Ronaldo's tie), Polished Platinum & Charcoal Slate
  const variantClasses = {
    navy:
      "border border-white/25 bg-gradient-to-r from-[#141f33] via-[#1c2e4d] to-[#263e68] text-white font-black shadow-lg shadow-[#141f33]/35 hover:-translate-y-0.5 hover:brightness-110 hover:border-white/50 hover:shadow-[0_12px_30px_-4px_rgba(28,46,77,0.55)]",
    platinum:
      "border border-white/80 bg-gradient-to-r from-[#cbd5e1] via-[#ffffff] to-[#cbd5e1] text-[#06090e] font-black shadow-md shadow-white/20 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-[0_12px_32px_-4px_rgba(255,255,255,0.4)]",
    silver:
      "border border-[#cbd5e1] bg-gradient-to-r from-[#94a3b8] via-[#e2e8f0] to-[#94a3b8] text-[#06090e] font-black shadow-md shadow-slate-400/25 hover:-translate-y-0.5 hover:brightness-105",
    dark:
      "border border-white/20 bg-[#0f172a] text-[#f8fafc] font-bold shadow-md hover:-translate-y-0.5 hover:border-white/50 hover:bg-[#1e293b] hover:text-white",
    outline:
      "border border-[#263e68] bg-transparent text-[#141f33] font-bold hover:-translate-y-0.5 hover:border-[#1c2e4d] hover:bg-[#1c2e4d]/10",
    light:
      "border border-[#e2e8f0] bg-[#f8fafc] text-[#0b0f17] font-bold shadow-xs hover:-translate-y-0.5 hover:bg-white hover:border-[#94a3b8]",
    white:
      "border border-slate-200 bg-white text-[#0b0f17] font-bold shadow-xs hover:-translate-y-0.5 hover:border-[#64748b] hover:text-black",
  }[variant];

  const classes =
    "inline-flex items-center justify-center gap-2 rounded-lg font-bold uppercase transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white select-none text-center cursor-pointer " +
    sizeClasses +
    " " +
    variantClasses +
    " " +
    className;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
