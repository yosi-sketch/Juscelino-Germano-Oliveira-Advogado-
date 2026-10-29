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
    | "gold"
    | "cocoa"
    | "terracotta"
    | "outline"
    | "outlineGold"
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
  variant = "gold",
}: GlowingButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-2.5 text-[10px] tracking-[0.14em]",
    md: "px-6 py-3.5 text-xs tracking-[0.14em]",
    lg: "px-7 py-4 text-xs tracking-[0.14em]",
  }[size];

  // Visual identity based on Alesânia Menezes — Advocacia Especializada
  // Warm Metallic Gold, Deep Espresso / Cocoa & Warm Terracotta
  const variantClasses = {
    gold:
      "border border-[#f9efcb]/80 bg-gradient-to-r from-[#b38e46] via-[#dfbe76] to-[#c5a059] text-[#190d08] font-black shadow-lg shadow-[#b38e46]/35 hover:-translate-y-0.5 hover:brightness-110 hover:border-white hover:shadow-[0_12px_32px_-4px_rgba(197,160,89,0.55)]",
    cocoa:
      "border border-[#c5a059]/40 bg-gradient-to-r from-[#190d08] via-[#26130b] to-[#361a10] text-[#f9efcb] font-bold shadow-lg shadow-[#190d08]/45 hover:-translate-y-0.5 hover:border-[#dfbe76] hover:text-white hover:shadow-[0_12px_30px_-4px_rgba(38,19,11,0.65)]",
    terracotta:
      "border border-[#f9efcb]/30 bg-gradient-to-r from-[#8a4d35] via-[#b86b5a] to-[#77402b] text-white font-black shadow-md shadow-[#8a4d35]/35 hover:-translate-y-0.5 hover:brightness-105",
    outline:
      "border border-[#361a10] bg-transparent text-[#190d08] font-bold hover:-translate-y-0.5 hover:border-[#b38e46] hover:bg-[#361a10]/5",
    outlineGold:
      "border border-[#c5a059]/70 bg-[#c5a059]/10 text-[#f9efcb] font-bold hover:-translate-y-0.5 hover:border-[#f9efcb] hover:bg-[#c5a059]/20 hover:text-white",
    light:
      "border border-[#ede4d5] bg-[#fdfbf7] text-[#1a0f0a] font-bold shadow-xs hover:-translate-y-0.5 hover:bg-white hover:border-[#c5a059]",
    white:
      "border border-[#ede4d5] bg-white text-[#1a0f0a] font-bold shadow-xs hover:-translate-y-0.5 hover:border-[#b38e46] hover:text-[#361a10]",
  }[variant];

  const classes =
    "inline-flex items-center justify-center gap-2 rounded-lg font-bold uppercase transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#c5a059] select-none text-center cursor-pointer " +
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
