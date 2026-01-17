"use client";

import { FadeInUp } from "../animations";
import { EventCard } from "../ui/EventCard";
import { events, Event } from "@/lib/events";

interface RoadmapProps {
  onEventSelect: (event: Event) => void;
}

export function Roadmap({ onEventSelect }: RoadmapProps) {
  return (
    <section id="roadmap" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeInUp>
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-text-secondary">
                Roadmap
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl italic text-text-primary mb-4">
              The Irish Roadshow
            </h2>
            <p className="font-display text-3xl sm:text-4xl italic text-accent">
              Road Map
            </p>
          </div>
        </FadeInUp>

        {/* Event Cards */}
        <div className="space-y-24 md:space-y-32">
          {events.map((event, index) => (
            <EventCard
              key={event.id}
              event={event}
              index={index}
              onSelect={onEventSelect}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
