"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/Button";

interface NavbarProps {
  onOpenModal: () => void;
}

const navLinks = [
  { label: "Counties", href: "#roadmap" },
];

export function Navbar({ onOpenModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? "bg-background border-b border-text-secondary/10" : "bg-background"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="#"
              className="text-sm font-bold tracking-[0.2em] uppercase flex flex-col items-center"
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">☘️</span>
                <span className="bg-gradient-to-r from-[#169B62] via-[#999999] to-[#FF883E] bg-clip-text text-transparent">Affinity Sales Training</span>
                <span className="text-lg">☘️</span>
              </div>
              <span className="text-xs font-medium tracking-[0.15em] text-text-secondary text-center">Young Irish Entrepreneurs</span>
            </a>

            {/* Center Title - only shows when scrolled */}
            <div
              className={`absolute left-1/2 -translate-x-1/2 transition-all duration-300 hidden md:block ${
                isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <span className="font-display text-2xl lg:text-3xl italic text-text-primary">
                The Irish Entrepreneur Roadshow
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium tracking-wider uppercase transition-colors ${
                    isScrolled ? "text-text-secondary hover:text-text-primary" : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <Button
                variant="outline"
                size="sm"
                onClick={onOpenModal}
className=""
              >
                Secure your seat
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 ${isScrolled ? "text-text-primary" : "text-text-primary"}`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-20 z-30 bg-background border-b border-text-secondary/10 md:hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-lg font-medium text-text-secondary hover:text-text-primary transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <Button
                variant="outline"
                className="w-full mt-4"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenModal();
                }}
              >
                Secure your seat
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
