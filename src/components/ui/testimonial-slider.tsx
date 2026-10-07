import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

// Defines the data structure for a single testimonial
export interface Testimonial {
  image: string;
  quote: string;
  name: string;
  role: string;
  rating: number;
}

// Defines the props accepted by the TestimonialSlider component
interface TestimonialSliderProps {
  testimonials: Testimonial[];
  className?: string;
}

// A reusable StarRating component to display ratings visually
const StarRating = ({ rating, className }: { rating: number; className?: string }) => {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={cn(
            "h-4 w-4",
            i < rating ? "text-yellow-400 fill-yellow-400" : "text-slate-300 fill-slate-100"
          )}
        />
      ))}
    </div>
  );
};

// The main TestimonialSlider component
export const TestimonialSlider = ({ testimonials, className }: TestimonialSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Memoized function to handle the "next" slide transition
  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, [testimonials.length]);

  // Memoized function to handle the "previous" slide transition
  const handlePrevious = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  const currentTestimonial = testimonials[currentIndex];

  // Animation variants for the slide transition using Framer Motion
  const slideVariants = {
    hidden: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    visible: {
      x: '0%',
      opacity: 1,
      transition: { type: 'spring' as const, stiffness: 260, damping: 30 },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      transition: { type: 'spring' as const, stiffness: 260, damping: 30 },
    }),
  };

  return (
    <div className={cn("relative w-full max-w-2xl mx-auto overflow-hidden px-4 md:px-0", className)}>
      {/* Container height optimized to fit content perfectly without scrollbars or overlapping */}
      <div className="relative min-h-[460px] sm:min-h-[380px] md:min-h-[290px] flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute w-full h-full flex items-center justify-center"
          >
            <div className="flex flex-col md:flex-row items-center justify-center w-full h-full p-4">
              {/* Image Section */}
              <div className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0 mb-4 md:mb-0 md:mr-[-4rem] z-10">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-full h-full object-cover rounded-2xl shadow-lg border border-slate-100"
                />
              </div>

              {/* Text & Controls Section */}
              <div className="relative w-full bg-white text-slate-800 rounded-2xl shadow-xl pt-10 md:pt-8 px-6 md:pl-24 pr-6 pb-8 border border-slate-100 flex flex-col justify-between min-h-[240px]">
                {/* Watermark Quote Icon */}
                <Quote className="absolute top-5 left-5 h-7 w-7 text-slate-200/50" aria-hidden="true" />
                
                <div className="space-y-3 relative z-10">
                  <blockquote className="text-sm md:text-base mb-4 leading-relaxed text-slate-600 font-medium">
                    "{currentTestimonial.quote}"
                  </blockquote>
                  <StarRating rating={currentTestimonial.rating} className="mb-4" />
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="pr-16">
                    <p className="font-bold text-lg text-slate-900 tracking-tight">{currentTestimonial.name}</p>
                    <p className="text-sm text-slate-400 font-semibold">{currentTestimonial.role}</p>
                  </div>
                  
                  {/* Navigation Controls */}
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <button
                      onClick={handlePrevious}
                      className="inline-flex items-center justify-center rounded-full h-10 w-10 border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-300"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="inline-flex items-center justify-center rounded-full h-10 w-10 border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-300"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "h-2 w-2 rounded-full transition-all duration-300",
              currentIndex === index ? 'w-4 bg-slate-800' : 'bg-slate-300 hover:bg-slate-400'
            )}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
