"use client";

import { motion } from "framer-motion";
import { ArrowRight, Instagram } from "lucide-react";
import { FadeInUp } from "../animations";

export function Footer() {
  return (
    <footer className="bg-background border-t border-text-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <FadeInUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
            {/* Left Column */}
            <div>
              <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-text-primary mb-4">
                Affinity Sales Training
              </h3>
              <p className="text-text-secondary">
                Where Top Performers Connect.
              </p>
            </div>

            {/* Right Column */}
            <div className="md:text-right">
              <motion.a
                href="https://www.instagram.com/affinitysalestraining/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:text-text-primary transition-colors group mb-4"
                whileHover={{ x: 5 }}
              >
                <Instagram className="w-5 h-5" />
                <span className="font-medium">Get in Touch</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.a>
              <p className="text-text-secondary text-sm">
                Have questions? Send us a message on Instagram.
                <br />
                We&apos;d love to hear from you.
              </p>
            </div>
          </div>
        </FadeInUp>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-text-secondary/10">
          <p className="text-text-secondary text-sm text-center">
            &copy; {new Date().getFullYear()} Affinity Sales Training. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
