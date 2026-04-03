"use client";

import { motion } from "framer-motion";
import { Utensils, Users, Clock, ArrowRight } from "lucide-react";
import { Event } from "@/lib/events";
import { StatusBadge } from "./StatusBadge";

interface EventCardProps {
  event: Event;
  index: number;
  onSelect: (event: Event) => void;
}

export function EventCard({ event, index, onSelect }: EventCardProps) {
  const isLeft = index % 2 === 0;
  const isCompleted = event.status === "COMPLETED";
  const ctaText = event.status === "TICKETS_LIVE" ? "Buy Tickets" : "Join the Waitlist";

  return (
    <div className="space-y-6">
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
              {event.date} &nbsp;·&nbsp; 12 PM to 4 PM
            </p>

            {/* Status Badge */}
            <div className={isLeft ? "" : "lg:flex lg:justify-end"}>
              <StatusBadge status={event.status} />
            </div>

            {/* Theme */}
            <p className="text-xs text-[#FF883E] uppercase tracking-[0.2em] font-semibold">
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
            {!isCompleted && (
              <motion.button
                onClick={() => onSelect(event)}
                className={`text-[#FF883E] hover:text-white hover:bg-[#FF883E] border-2 border-[#FF883E] px-6 py-2 rounded-full transition-all mt-4 ${
                  isLeft ? "" : "lg:ml-auto lg:block"
                }`}
                whileHover={{ scale: 1.02 }}
              >
                <span className="font-medium">{ctaText}</span>
              </motion.button>
            )}
          </div>
        </div>
      </motion.div>

      {/* VIP Add-On */}
      {event.vipAddOn && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative overflow-hidden rounded-sm border border-[#C9A54E]/30 bg-gradient-to-br from-[#0a0a0a] to-[#1a1a2e]"
        >
          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#C9A54E]/40 rounded-tl-sm" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#C9A54E]/40 rounded-br-sm" />

          <div className="relative px-6 py-8 md:px-10 md:py-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="space-y-4 flex-1">
                {/* Label */}
                <div className="flex items-center gap-3">
                  <Utensils className="w-5 h-5 text-[#C9A54E]" />
                  <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C9A54E]">
                    Exclusive Add-On
                  </span>
                </div>

                {/* Title */}
                <h4 className="font-display text-2xl md:text-3xl italic text-white">
                  {event.vipAddOn.title}
                </h4>

                {/* Description */}
                <p className="text-white/60 leading-relaxed max-w-lg text-sm">
                  {event.vipAddOn.description}
                </p>

                {/* Includes */}
                <ul className="space-y-2.5 pt-2">
                  {event.vipAddOn.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/80">
                      <span className="mt-1 block w-1.5 h-1.5 rounded-full bg-[#C9A54E] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price & CTA column */}
              <div className="flex flex-col items-start md:items-end gap-4 md:text-right shrink-0 md:pt-8">
                {/* Details pills */}
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 text-xs text-white/50 bg-white/5 border border-white/10 rounded-full px-3 py-1.5">
                    <Clock className="w-3 h-3" />
                    {event.vipAddOn.departure}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-white/50 bg-white/5 border border-white/10 rounded-full px-3 py-1.5">
                    <Users className="w-3 h-3" />
                    Limited to {event.vipAddOn.capacity} guests
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-display italic text-white">{event.vipAddOn.price}</span>
                  <span className="text-sm text-white/40">per person</span>
                </div>

                {/* CTA */}
                <motion.a
                  href={event.vipAddOn.stripeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C9A54E] to-[#E8C86A] text-[#0a0a0a] font-semibold text-sm px-6 py-3 rounded-full transition-all hover:shadow-[0_0_24px_rgba(201,165,78,0.3)]"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Secure Your Seat
                  <ArrowRight className="w-4 h-4" />
                </motion.a>

                <p className="text-[11px] text-white/30">
                  Reserve your place before they&apos;re gone
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
