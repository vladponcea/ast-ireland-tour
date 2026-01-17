"use client";

import { FadeInUp } from "../animations";

export function ValueProp() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Heading */}
          <FadeInUp>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl italic text-text-primary leading-tight">
              This is not a conference.
              <br />
              <span className="text-accent">Sales Training Redefined.</span>
            </h2>
          </FadeInUp>

          {/* Right Column - Body Text */}
          <FadeInUp delay={0.2}>
            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
              <p>
                Most events are filled with theory and no action. No real skills.
                No lasting change.
              </p>
              <p>
                The AST Roadshow is different. We filter the noise. We create
                experiences.
              </p>
              <p>
                You are not coming here to listen to a lecture. You are coming here
                to transform your sales game, find your next client, your next
                strategy, or simply experience a day like no other.
              </p>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
