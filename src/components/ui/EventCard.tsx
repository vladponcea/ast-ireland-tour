"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Event } from "@/lib/events";
import { StatusBadge } from "./StatusBadge";

interface EventCardProps {
  event: Event;
  index: number;
  onSelect: (event: Event) => void;
}

export function EventCard({ event, index, onSelect }: EventCardProps) {
  const isLeft = index % 2 === 0;
  const ctaText = event.status === "TICKETS_LIVE" ? "Buy Tickets" : "Join the Waitlist";

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
        isLeft ? "" : "lg:flex-row-reverse"
      }`}
    >
      {/* Image */}
      <motion.div
        className="w-full lg:w-1/2 aspect-[4/3] relative overflow-hidden rounded-sm group"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-0 bg-background-secondary">
          {event.image ? (
            <img
              src={event.image}
              alt={event.city}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-text-secondary">
              <span className="text-4xl font-display italic">{event.city}</span>
            </div>
          )}
        </div>
      </motion.div>

      {/* Content */}
      <div className={`w-full lg:w-1/2 ${isLeft ? "lg:text-left" : "lg:text-right"}`}>
        <div className={`space-y-4 ${isLeft ? "" : "lg:ml-auto"}`}>
          {/* Date */}
          <p className="text-sm text-text-secondary uppercase tracking-widest font-medium">
            {event.date}
          </p>

          {/* Status Badge */}
          <div className={isLeft ? "" : "lg:flex lg:justify-end"}>
            <StatusBadge status={event.status} />
          </div>

          {/* Theme */}
          <p className="text-xs text-accent uppercase tracking-[0.2em] font-semibold">
            {event.theme}
          </p>

          {/* City */}
          <h3 className="font-display text-4xl md:text-5xl lg:text-6xl italic text-text-primary">
            {event.city}
          </h3>

          {/* Description */}
          <p className={`text-text-secondary leading-relaxed max-w-md ${isLeft ? "" : "lg:ml-auto"}`}>
            {event.description}
          </p>

          {/* CTA */}
          <motion.button
            onClick={() => onSelect(event)}
            className={`inline-flex items-center gap-2 text-accent hover:text-text-primary transition-colors group mt-4 ${
              isLeft ? "" : "lg:ml-auto"
            }`}
            whileHover={{ x: isLeft ? 5 : -5 }}
          >
            {isLeft ? (
              <>
                <span className="font-medium">{ctaText}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </>
            ) : (
              <>
                <ArrowRight className="w-4 h-4 rotate-180 transition-transform group-hover:-translate-x-1" />
                <span className="font-medium">{ctaText}</span>
              </>
            )}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
