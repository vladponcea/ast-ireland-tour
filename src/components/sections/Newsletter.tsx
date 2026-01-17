"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { FadeInUp } from "../animations";
import { Button } from "../ui/Button";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setIsSubmitted(true);
  };

  return (
    <section id="newsletter" className="py-24 md:py-32 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeInUp>
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-text-secondary">
              Stay Updated
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl italic text-text-primary mb-6">
            Join the Inner Circle
          </h2>
          <p className="text-text-secondary text-lg mb-8">
            Be the first to know when tickets drop, get exclusive content, and
            receive early access to special offers.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.2}>
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 bg-background-secondary rounded-lg border border-accent/30"
            >
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <Send className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                You&apos;re In!
              </h3>
              <p className="text-text-secondary">
                Check your inbox for a confirmation email.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-3 bg-background-secondary border border-text-secondary/30 rounded-sm text-text-primary placeholder:text-text-secondary/50 focus:border-accent focus:outline-none transition-colors"
                />
                <Button type="submit" variant="primary" size="md">
                  Subscribe
                </Button>
              </div>
              <p className="mt-4 text-xs text-text-secondary">
                No spam, ever. Unsubscribe anytime.
              </p>
            </form>
          )}
        </FadeInUp>
      </div>
    </section>
  );
}
