"use client";

import { FadeInUp } from "../animations";

export function ValueProp() {
  return (
    <section className="py-12 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <FadeInUp>
            <h2 className="font-display text-[1.7rem] sm:text-5xl md:text-6xl italic text-text-primary leading-tight text-center mb-12 whitespace-nowrap">
              What is the Irish Entrepreneur Roadshow?
            </h2>
          </FadeInUp>

          {/* Body Text */}
          <FadeInUp delay={0.2}>
            <div className="space-y-6 text-text-secondary text-lg leading-relaxed text-center">
              <p>
                The Irish Entrepreneur Roadshow is a 12 month, 12 county tour bringing salespeople and entrepreneurs together across Ireland.
              </p>
              <p>
                In partnership with YIE (Young Irish Entrepreneurs), each event is a practical, in-person workshop built for real networking, real learning and real connections.
              </p>
              <p>
                Not a conference. Not a mastermind. Just interactive events with guest speakers from across Ireland, designed for people at every stage of the journey.
              </p>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
