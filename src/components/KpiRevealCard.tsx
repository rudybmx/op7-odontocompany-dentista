"use client";

import * as React from "react";
import { motion } from "framer-motion";

interface KpiRevealCardProps {
  label: string;
  title: string;
  subtitle: string;
  value: string;
  valueSuffix?: string;
  accentColor: string;
  delay?: number;
}

export function KpiRevealCard({
  label,
  title,
  subtitle,
  value,
  valueSuffix,
  accentColor,
  delay = 0,
}: KpiRevealCardProps) {
  return (
    <motion.div
      className="kpi-reveal-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      {/* Unified top accent bar — same color for all cards */}
      <div className="kpi-reveal-topbar" />

      {/* Text content — slides up on hover */}
      <div className="kpi-reveal-content">
        <span className="kpi-reveal-label" style={{ color: accentColor }}>
          {label}
        </span>
        <h3 className="kpi-reveal-title">{title}</h3>
        <p className="kpi-reveal-subtitle">{subtitle}</p>
      </div>

      {/* Value — revealed from bottom on hover */}
      <div className="kpi-reveal-value-wrap">
        <div className="kpi-reveal-value" style={{ color: accentColor }}>
          <span className="kpi-reveal-value-text">
            {value}
            {valueSuffix && (
              <span className="kpi-reveal-suffix">{valueSuffix}</span>
            )}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
