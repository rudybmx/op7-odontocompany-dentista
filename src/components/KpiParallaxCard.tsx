"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const bounceStyle = `
@keyframes bounceFloat {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-10px) rotate(-3deg); }
  66% { transform: translateY(-6px) rotate(2deg); }
}
.kpi-icon-bounce {
  animation: bounceFloat 4s ease-in-out infinite;
}
`;

interface KpiParallaxCardProps {
  label: string;
  title: string;
  subtitle: string;
  value: string;
  valueSuffix?: string;
  iconUrl: string;
  accentColor: string;
  delay?: number;
}

export function KpiParallaxCard({
  label,
  title,
  subtitle,
  value,
  valueSuffix,
  iconUrl,
  accentColor,
  delay = 0,
}: KpiParallaxCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const ySpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(ySpring, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], ["-6deg", "6deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <>
      <style>{bounceStyle}</style>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 200, damping: 25, delay }}
        whileHover={{
          scale: 1.02,
          boxShadow: `0px 20px 50px rgba(0,0,0,0.35), 0 0 30px ${accentColor}33`,
        }}
        className="kpi-parallax-wrap"
      >
        {/* 3D floating icon */}
        <motion.img
          src={iconUrl}
          alt={title}
          className="kpi-float-icon kpi-icon-bounce"
          whileHover={{ scale: 1.2, y: -8 }}
          transition={{ type: "spring", stiffness: 250, damping: 20 }}
        />

        {/* Card body */}
        <div className="kpi-parallax-card">
          {/* Top accent bar */}
          <div className="kpi-parallax-topbar" style={{ background: accentColor }} />

          {/* Label */}
          <span className="kpi-parallax-label" style={{ color: accentColor }}>
            {label}
          </span>

          {/* Big value */}
          <div className="kpi-parallax-value" style={{ color: accentColor }}>
            {value}
            {valueSuffix && (
              <span className="kpi-parallax-suffix">{valueSuffix}</span>
            )}
          </div>

          {/* Title + subtitle */}
          <h4 className="kpi-parallax-title">{title}</h4>
          <p className="kpi-parallax-subtitle">{subtitle}</p>
        </div>
      </motion.div>
    </>
  );
}
