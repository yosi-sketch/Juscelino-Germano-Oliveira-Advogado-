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
    | "onyx"
    | "cocoa"
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

  // Visual identity based on Juscelino Germano Oliveira — Advogado
  // Polished Metallic Gold, Architectural Deep Onyx & Charcoal
  const variantClasses = {
    gold:
      "border border-[#f9efcb]/80 bg-gradient-to-r from-[#b88836] via-[#f1ce89] to-[#c89a47] text-[#0a0c0f] font-black shadow-lg shadow-[#c89a47]/30 hover:-translate-y-0.5 hover:brightness-110 hover:border-white hover:shadow-[0_12px_32px_-4px_rgba(200,154,71,0.55)]",
    onyx:
      "border border-[#c89a47]/50 bg-gradient-to-r from-[#0a0c0f] via-[#12151a] to-[#181c22] text-[#f1ce89] font-bold shadow-lg shadow-[#0a0c0f]/50 hover:-translate-y-0.5 hover:border-[#f1ce89] hover:text-white hover:shadow-[0_12px_30px_-4px_rgba(18,21,26,0.7)]",
    cocoa: // legacy alias to onyx for safety
      "border border-[#c89a47]/50 bg-gradient-to-r from-[#0a0c0f] via-[#12151a] to-[#181c22] text-[#f1ce89] font-bold shadow-lg shadow-[#0a0c0f]/50 hover:-translate-y-0.5 hover:border-[#f1ce89] hover:text-white hover:shadow-[0_12px_30px_-4px_rgba(18,21,26,0.7)]",
    outline:
      "border border-[#181c22] bg-transparent text-[#111317] font-bold hover:-translate-y-0.5 hover:border-[#c89a47] hover:bg-[#181c22]/5",
    outlineGold:
      "border border-[#c89a47]/80 bg-[#c89a47]/10 text-[#f1ce89] font-bold hover:-translate-y-0.5 hover:border-[#f9efcb] hover:bg-[#c89a47]/20 hover:text-white",
    light:
      "border border-[#e6e2d8] bg-[#faf9f5] text-[#111317] font-bold shadow-xs hover:-translate-y-0.5 hover:bg-white hover:border-[#c89a47]",
    white:
      "border border-[#e6e2d8] bg-white text-[#111317] font-bold shadow-xs hover:-translate-y-0.5 hover:border-[#c89a47] hover:text-[#0a0c0f]",
  }[variant];

  const classes =
    "inline-flex items-center justify-center gap-2 rounded-lg font-bold uppercase transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#c89a47] select-none text-center cursor-pointer " +
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
