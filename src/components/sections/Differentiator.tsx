"use client";

import { FadeInUp } from "../animations";

export function Differentiator() {
  return (
    <section className="py-24 md:py-32 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column */}
          <FadeInUp>
            <div className="space-y-4">
              <p className="text-2xl sm:text-3xl text-text-secondary leading-relaxed">
                No more boring seminars. No more generic advice.
              </p>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl italic leading-tight">
                <span className="text-text-primary">Real Training</span>
                <br />
                <span className="text-accent">Like Never Before.</span>
              </h2>
            </div>
          </FadeInUp>

          {/* Right Column */}
          <FadeInUp delay={0.2}>
            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
              <p>
                Most events are boring one-day events structured in a way that
                doesn&apos;t create real change.
              </p>
              <p>
                The AST Ireland Tour is different. Real experiences. Real skills.
                Real connections that last.
              </p>
              <p>
                Each event is crafted to push you beyond your comfort zone and into
                a new level of performance. This is where transformation happens.
              </p>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
