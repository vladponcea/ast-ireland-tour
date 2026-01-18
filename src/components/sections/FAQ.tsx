"use client";

import { ArrowRight } from "lucide-react";
import { FadeInUp } from "../animations";
import { Accordion } from "../ui/Accordion";

const faqItems = [
  {
    question: "Who should attend the AST Irish Roadshow?",
    answer:
      "The AST Irish Roadshow is designed for ambitious sales professionals, business owners, entrepreneurs, and anyone looking to elevate their sales skills and expand their network. Whether you're just starting out or you're a seasoned professional, our events are structured to deliver value at every level.",
  },
  {
    question: "What's the schedule like?",
    answer:
      "Each event runs for a full day, typically from 9am to 6pm. The day includes interactive workshops, mastermind sessions, live training demonstrations, and structured networking opportunities. Every moment is designed for maximum impact.",
  },
  {
    question: "How is this different from other sales training?",
    answer:
      "Most sales training is passive—you sit, listen, and forget. The AST Irish Roadshow is immersive and action-oriented. You'll practice in real-time, get immediate feedback, and leave with strategies you can implement the next day. Plus, the connections you make are curated and valuable.",
  },
  {
    question: "Why attend in-person when I can learn online?",
    answer:
      "There's no substitute for in-person energy, connection, and accountability. Online learning is convenient but easily forgotten. When you invest your time and presence, you commit at a different level. The relationships built in-person lead to partnerships, referrals, and friendships that last.",
  },
  {
    question: "How do I know if I'll fit in with other attendees?",
    answer:
      "Our attendees share one thing in common: ambition. You'll find people at various stages of their journey, but everyone is there to grow. The atmosphere is supportive, not competitive. Past attendees consistently mention how welcoming and diverse our community is.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-32 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column */}
          <div className="lg:col-span-4">
            <FadeInUp>
              <div className="lg:sticky lg:top-32">
                <h2 className="font-display text-4xl sm:text-5xl italic text-text-primary mb-6">
                  FAQs
                </h2>
                <p className="text-text-secondary mb-8">
                  Still have questions? We&apos;re here to help.
                </p>
                <a
                  href="mailto:hello@affinitysalestraining.ie"
                  className="inline-flex items-center gap-2 text-accent hover:text-text-primary transition-colors group"
                >
                  <span className="font-medium">Contact us</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </FadeInUp>
          </div>

          {/* Right Column - Accordion */}
          <div className="lg:col-span-8">
            <FadeInUp delay={0.2}>
              <Accordion items={faqItems} />
            </FadeInUp>
          </div>
        </div>
      </div>
    </section>
  );
}
