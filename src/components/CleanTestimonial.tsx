"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface Testimonial {
  nome: string;
  titulo: string;
  depoimento: string;
}

interface CleanTestimonialProps {
  testimonials: Testimonial[];
  className?: string;
}

function getOffset(index: number, activeIndex: number, length: number) {
  const raw = index - activeIndex;
  const half = Math.floor(length / 2);
  if (raw > half) return raw - length;
  if (raw < -half) return raw + length;
  return raw;
}

export function CleanTestimonial({ testimonials, className }: CleanTestimonialProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || isPaused || testimonials.length <= 1) return;

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 3800);

    return () => window.clearInterval(timer);
  }, [isPaused, reduceMotion, testimonials.length]);

  if (!testimonials.length) return null;

  const transition = reduceMotion
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 140, damping: 18, mass: 0.85 };

  return (
    <div
      className={cn("testimonial-deck", className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="testimonial-deck__stage">
        <div className="testimonial-deck__grid" aria-hidden="true" />

        {testimonials.map((testimonial, index) => {
          const offset = getOffset(index, activeIndex, testimonials.length);
          const isActive = offset === 0;
          const isVisible = Math.abs(offset) <= 1;

          return (
            <motion.article
              key={`${testimonial.nome}-${index}`}
              className={cn("testimonial-deck__card", isActive && "is-active")}
              style={{ zIndex: 20 - Math.abs(offset) }}
              animate={{
                x: `${offset * 15}%`,
                y: isActive ? 0 : 18,
                scale: isActive ? 1 : 0.94,
                opacity: isVisible ? (isActive ? 1 : 0.62) : 0,
                rotate: isActive ? 0 : offset * 2.5,
              }}
              transition={transition}
            >
              <div className="testimonial-deck__topline">
                <span className="testimonial-deck__pill">Franqueado real</span>
                <span className="testimonial-deck__counter">
                  {String(index + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
                </span>
              </div>

              <div className="testimonial-deck__quote-mark" aria-hidden="true">
                {"\""}
              </div>

              <p className="testimonial-deck__quote">{testimonial.depoimento}</p>

              <div className="testimonial-deck__footer">
                <div>
                  <p className="testimonial-deck__name">{testimonial.nome}</p>
                  <p className="testimonial-deck__title">{testimonial.titulo}</p>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      <div className="testimonial-deck__dots" aria-label="Selecionar depoimento">
        {testimonials.map((testimonial, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={testimonial.nome}
              type="button"
              aria-label={`Ir para o depoimento de ${testimonial.nome}`}
              aria-pressed={isActive}
              className={cn("testimonial-deck__dot", isActive && "is-active")}
              onClick={() => setActiveIndex(index)}
            />
          );
        })}
      </div>
    </div>
  );
}

