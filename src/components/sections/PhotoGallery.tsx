"use client";

import { motion } from "framer-motion";
import { FadeInUp } from "../animations";

// Placeholder images - these should be replaced with actual event photos
const galleryImages = [
  { id: 1, src: "/images/gallery/event-1.jpg", alt: "Networking moment", size: "tall" },
  { id: 2, src: "/images/gallery/event-2.jpg", alt: "Training session", size: "wide" },
  { id: 3, src: "/images/gallery/event-3.jpg", alt: "Group photo", size: "square" },
  { id: 4, src: "/images/gallery/event-4.jpg", alt: "Networking event", size: "square" },
  { id: 5, src: "/images/gallery/event-5.jpg", alt: "Mastermind session", size: "wide" },
  { id: 6, src: "/images/gallery/event-6.jpg", alt: "Candid moment", size: "tall" },
  { id: 7, src: "/images/gallery/event-7.jpg", alt: "Workshop activity", size: "square" },
  { id: 8, src: "/images/gallery/event-8.jpg", alt: "Celebration", size: "square" },
];

export function PhotoGallery() {
  return (
    <section className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <FadeInUp>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-text-secondary">
              Gallery
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl italic text-text-primary">
            Moments That Matter
          </h2>
        </FadeInUp>
      </div>

      {/* Masonry Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <GalleryItem key={image.id} image={image} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryItem({
  image,
  index,
}: {
  image: { id: number; src: string; alt: string; size: string };
  index: number;
}) {
  const sizeClasses = {
    tall: "row-span-2",
    wide: "col-span-2",
    square: "",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className={`relative aspect-square overflow-hidden rounded-sm group cursor-pointer ${
        sizeClasses[image.size as keyof typeof sizeClasses]
      }`}
    >
      <div className="absolute inset-0 bg-background-secondary">
        {/* Placeholder - replace with actual images */}
        <div className="w-full h-full flex items-center justify-center text-text-secondary/30">
          <svg
            className="w-12 h-12"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5-7l-3 3.72L9 13l-3 4h12l-4-5z" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-white text-sm">{image.alt}</p>
      </div>
    </motion.div>
  );
}
