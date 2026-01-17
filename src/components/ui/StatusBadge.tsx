"use client";

import { motion } from "framer-motion";
import { EventStatus, getStatusLabel } from "@/lib/events";

interface StatusBadgeProps {
  status: EventStatus;
  className?: string;
}

export function StatusBadge({ status, className = "" }: StatusBadgeProps) {
  const getStatusStyles = () => {
    switch (status) {
      case "TICKETS_LIVE":
        return "bg-status-live/20 text-status-live border-status-live/30";
      case "WAITLIST_OPEN":
        return "bg-status-waitlist/20 text-status-waitlist border-status-waitlist/30";
      case "COMING_SOON":
        return "bg-status-coming/20 text-status-coming border-status-coming/30";
    }
  };

  return (
    <motion.span
      className={`
        inline-flex items-center gap-2
        px-3 py-1.5
        text-xs font-semibold uppercase tracking-wider
        border rounded-full
        ${getStatusStyles()}
        ${className}
      `}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {status === "TICKETS_LIVE" && (
        <motion.span
          className="w-2 h-2 rounded-full bg-status-live"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      )}
      {getStatusLabel(status)}
    </motion.span>
  );
}
