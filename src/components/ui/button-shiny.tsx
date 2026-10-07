import * as React from "react"
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ButtonCtaProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    isActive?: boolean;
    className?: string;
}

function ButtonCta({ label = "Get Access", isActive = true, className, ...props }: ButtonCtaProps) {
    return (
        <Button
            variant="ghost"
            className={cn(
                "group relative h-11 px-5 rounded-lg overflow-hidden transition-all duration-300 w-max flex-none",
                isActive ? "opacity-100" : "opacity-60 hover:opacity-100",
                className
            )}
            {...props}
        >
            <div className={cn("absolute inset-0 rounded-lg p-[1px] transition-all duration-300", 
                isActive ? "bg-gradient-to-b from-[#b5e800]/60 via-[#042b26]/50 to-[#628c00]/40" : "bg-white/10"
            )}>
                <div className="absolute inset-0 bg-[#031713] rounded-lg opacity-90" />
            </div>

            <div className="absolute inset-[1px] bg-[#031713] rounded-lg opacity-95" />

            <div className="absolute inset-[1px] bg-gradient-to-r from-[#031713] via-[#04261e] to-[#031713] rounded-lg opacity-90" />
            
            {isActive && (
                <>
                    <div className="absolute inset-[1px] bg-gradient-to-b from-[#b5e800]/20 via-[#04261e] to-[#628c00]/10 rounded-lg opacity-80" />
                    <div className="absolute inset-[1px] bg-gradient-to-br from-[#d4ff66]/5 via-[#04261e] to-[#042b26]/30 rounded-lg" />
                    <div className="absolute inset-[1px] shadow-[inset_0_0_15px_rgba(181,232,0,0.1)] rounded-lg" />
                </>
            )}

            <div className="relative flex items-center justify-center gap-2">
                <span className={cn(
                    "text-sm font-medium tracking-wide transition-all duration-300 whitespace-nowrap",
                    isActive 
                        ? "bg-gradient-to-b from-[#d4ff66] to-[#b5e800] bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(181,232,0,0.3)]" 
                        : "text-white/70"
                )}>
                    {label}
                </span>
            </div>

            <div className="absolute inset-[1px] opacity-0 transition-opacity duration-300 bg-gradient-to-r from-[#042b26]/20 via-[#d4ff66]/10 to-[#042b26]/20 group-hover:opacity-100 rounded-lg" />
        </Button>
    );
}

export { ButtonCta }
