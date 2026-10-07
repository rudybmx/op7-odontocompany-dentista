"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CarouselImage = { src: string; alt: string };

const images: CarouselImage[] = [
  { src: "https://pub-db8ed4fb33634589a6ce5fb07e85cb46.r2.dev/landingpage_odc_franchising/ODC_01.png", alt: "Clínica OdontoCompany" },
  { src: "https://pub-db8ed4fb33634589a6ce5fb07e85cb46.r2.dev/landingpage_odc_franchising/ODC_02.jpeg", alt: "Clínica OdontoCompany" },
  { src: "https://pub-db8ed4fb33634589a6ce5fb07e85cb46.r2.dev/landingpage_odc_franchising/ODC_03.jpg", alt: "Clínica OdontoCompany" },
  { src: "https://pub-db8ed4fb33634589a6ce5fb07e85cb46.r2.dev/landingpage_odc_franchising/ODC_04.jpg", alt: "Clínica OdontoCompany" },
  { src: "https://pub-db8ed4fb33634589a6ce5fb07e85cb46.r2.dev/landingpage_odc_franchising/ODC_05.jpg", alt: "Clínica OdontoCompany" },
  { src: "https://pub-db8ed4fb33634589a6ce5fb07e85cb46.r2.dev/landingpage_odc_franchising/ODC_06.jpg", alt: "Clínica OdontoCompany" },
  { src: "https://pub-db8ed4fb33634589a6ce5fb07e85cb46.r2.dev/landingpage_odc_franchising/ODC_07.png", alt: "Clínica OdontoCompany" },
];

export default function ClinicCarousel() {
  const [currentIndex, setCurrentIndex] = React.useState(
    Math.floor(images.length / 2)
  );

  const handleNext = React.useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  React.useEffect(() => {
    const timer = setInterval(handleNext, 4000);
    return () => clearInterval(timer);
  }, [handleNext]);

  return (
    <div className="clinic-carousel">
      <div className="clinic-carousel__stage">
        {images.map((image, index) => {
          const total = images.length;
          let pos = (index - currentIndex + total) % total;
          if (pos > Math.floor(total / 2)) pos = pos - total;

          const isCenter = pos === 0;
          const isAdjacent = Math.abs(pos) === 1;

          return (
            <div
              key={index}
              className="clinic-carousel__card"
              style={{
                transform: `translateX(${pos * 60}%) scale(${
                  isCenter ? 1 : isAdjacent ? 0.85 : 0.7
                }) rotateY(${pos * -10}deg)`,
                zIndex: isCenter ? 10 : isAdjacent ? 5 : 1,
                opacity: isCenter ? 1 : isAdjacent ? 0.45 : 0,
                filter: isCenter ? "blur(0px)" : "blur(4px)",
                visibility: Math.abs(pos) > 1 ? "hidden" : "visible",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={image.src} alt={image.alt} />
            </div>
          );
        })}

        <Button
          variant="outline"
          size="icon"
          aria-label="Anterior"
          className={cn(
            "clinic-carousel__nav clinic-carousel__nav--prev"
          )}
          onClick={handlePrev}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          aria-label="Próxima"
          className={cn(
            "clinic-carousel__nav clinic-carousel__nav--next"
          )}
          onClick={handleNext}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
