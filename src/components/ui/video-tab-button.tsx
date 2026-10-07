import React from "react";
import { LucideProps } from "lucide-react";
import { cn } from "@/lib/utils";

interface VideoTabButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactElement<LucideProps>;
  title: string;
  subtitle?: string;
  isActive?: boolean;
  size?: "sm" | "md" | "lg";
}

export const VideoTabButton: React.FC<VideoTabButtonProps> = ({
  icon,
  title,
  subtitle,
  isActive = false,
  size = "md",
  className,
  ...props
}) => {
  const sizes = {
    sm: "p-3 rounded-xl",
    md: "p-4 rounded-2xl",
    lg: "p-5 rounded-2xl",
  };

  return (
    <button
      {...props}
      className={cn(
        `group relative overflow-hidden cursor-pointer transition-all duration-500 ease-out text-left
         border-2 shadow-xl hover:-translate-y-0.5 active:scale-95`,
        sizes[size],
        isActive
          ? "border-[#b5e800]/50 bg-gradient-to-br from-[#b5e800]/20 via-[#04261e]/80 to-[#042b26]/90 shadow-[#b5e800]/20"
          : "border-white/10 bg-gradient-to-br from-white/5 via-white/3 to-transparent hover:border-[#b5e800]/25 hover:shadow-[#b5e800]/10",
        className
      )}
    >
      {/* Moving shimmer layer */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-r from-transparent to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out",
          isActive ? "via-[#d4ff66]/20" : "via-white/10"
        )}
      />

      {/* Overlay glow on hover */}
      <div
        className={cn(
          "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
          isActive
            ? "bg-gradient-to-r from-[#b5e800]/10 via-[#d4ff66]/5 to-[#b5e800]/10"
            : "bg-gradient-to-r from-white/5 via-white/3 to-white/5"
        )}
      />

      {/* Content */}
      <div className="relative z-10 flex items-center gap-3">
        {/* Icon */}
        <div
          className={cn(
            "p-2.5 rounded-lg backdrop-blur-sm transition-all duration-300 flex-shrink-0",
            isActive
              ? "bg-gradient-to-br from-[#b5e800]/50 to-[#628c00]/30 group-hover:from-[#d4ff66]/60 group-hover:to-[#b5e800]/40"
              : "bg-white/10 group-hover:bg-[#b5e800]/20"
          )}
        >
          {React.cloneElement(icon, {
            className: cn(
              "w-5 h-5 transition-all duration-300 group-hover:scale-110 drop-shadow-sm",
              isActive ? "text-[#d4ff66]" : "text-white/60 group-hover:text-[#b5e800]"
            ),
          } as LucideProps)}
        </div>

        {/* Texts */}
        <div className="flex-1 min-w-0">
          <p
            className={cn(
              "font-bold text-sm leading-tight transition-colors duration-300 truncate",
              isActive ? "text-white" : "text-white/60 group-hover:text-white/90"
            )}
          >
            {title}
          </p>
          {subtitle && (
            <p
              className={cn(
                "text-xs mt-0.5 transition-colors duration-300 truncate",
                isActive ? "text-[#b5e800]/80" : "text-white/40 group-hover:text-white/60"
              )}
            >
              {subtitle}
            </p>
          )}
        </div>

        {/* Arrow */}
        <div
          className={cn(
            "transition-all duration-300 flex-shrink-0 group-hover:translate-x-0.5",
            isActive ? "opacity-80" : "opacity-30 group-hover:opacity-70"
          )}
        >
          <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" className={cn("w-4 h-4", isActive ? "text-[#b5e800]" : "text-white")}>
            <path d="M9 5l7 7-7 7" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </button>
  );
};
