"use client";

import { motion } from "framer-motion";

const carouselImages = [
  { id: 1, src: "/images/carousel/photo-1.jpeg", alt: "Event photo 1" },
  { id: 2, src: "/images/carousel/photo-2.jpeg", alt: "Event photo 2" },
  { id: 3, src: "/images/carousel/photo-3.jpeg", alt: "Event photo 3" },
  { id: 4, src: "/images/carousel/photo-4.jpeg", alt: "Event photo 4" },
  { id: 5, src: "/images/carousel/photo-5.jpeg", alt: "Event photo 5" },
  { id: 6, src: "/images/carousel/photo-6.jpeg", alt: "Event photo 6" },
  { id: 7, src: "/images/carousel/photo-7.jpeg", alt: "Event photo 7" },
  { id: 8, src: "/images/carousel/photo-8.jpeg", alt: "Event photo 8" },
  { id: 9, src: "/images/carousel/photo-9.jpeg", alt: "Event photo 9" },
  { id: 10, src: "/images/carousel/photo-10.jpeg", alt: "Event photo 10" },
];

export function PhotoCarousel() {
  // Duplicate images for seamless infinite scroll
  const duplicatedImages = [...carouselImages, ...carouselImages];

  return (
    <section className="py-12 bg-background overflow-hidden">
      <div className="relative">
        <motion.div
          className="flex gap-4"
          animate={{
            x: [0, -50 * carouselImages.length * 16], // Move by the width of original images
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {duplicatedImages.map((image, index) => (
            <div
              key={`${image.id}-${index}`}
              className="flex-shrink-0 w-72 h-48 md:w-96 md:h-64 relative overflow-hidden rounded-lg"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
