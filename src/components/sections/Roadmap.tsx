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
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl italic text-text-primary">
              Tour Dates &amp; Locations
            </h2>
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
