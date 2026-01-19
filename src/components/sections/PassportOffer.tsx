"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { FadeInUp } from "../animations";
import { Button } from "../ui/Button";

const passportFeatures = [
  "VIP access to any 3 events of choice",
  "Priority seating at all Masterminds",
  "Exclusive Passport-holder WhatsApp group",
  "Significant savings vs. buying 3 tickets",
  "First access to sold-out events",
];

interface PassportOfferProps {
  onGetPassport: () => void;
}

export function PassportOffer({ onGetPassport }: PassportOfferProps) {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeInUp>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl italic text-text-primary mb-6">
            Commit to the journey.
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
            Serious about your transformation? Don&apos;t just come to one. Get the
            Irish Entrepreneur Roadshow Passport and secure VIP access to any 3 events of your
            choice for a single price.
          </p>
        </FadeInUp>

        {/* Pricing Card */}
        <FadeInUp delay={0.2}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-background-secondary border border-text-secondary/20 rounded-lg p-8 md:p-10 max-w-xl mx-auto"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 pb-6 border-b border-text-secondary/20">
              <h3 className="text-2xl font-semibold text-text-primary mb-2 sm:mb-0">
                Irish Entrepreneur Roadshow Passport
              </h3>
              <div className="text-right">
                <p className="text-3xl font-bold text-accent">
                  €XXX <span className="text-base font-normal text-text-secondary">/ total</span>
                </p>
              </div>
            </div>

            {/* Savings */}
            <div className="mb-6">
              <p className="text-text-secondary">
                <span className="line-through">Retail Price: €XXX</span>
                <span className="text-accent ml-2">Save €XXX</span>
              </p>
            </div>

            {/* Features */}
            <ul className="space-y-4 mb-8 text-left">
              {passportFeatures.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-text-primary">{feature}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTA */}
            <Button
              variant="primary"
              size="lg"
              className="w-full"
              onClick={onGetPassport}
            >
              Get the Passport
            </Button>
          </motion.div>
        </FadeInUp>

        {/* Note */}
        <FadeInUp delay={0.4}>
          <p className="mt-8 text-text-secondary text-sm">
            Limited Passports available. Pricing to be announced.
          </p>
        </FadeInUp>
      </div>
    </section>
  );
}
