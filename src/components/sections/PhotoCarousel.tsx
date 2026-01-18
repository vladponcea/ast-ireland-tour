"use client";

const allImages = [
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
  return (
    <section className="py-16 bg-background overflow-hidden">
      {/* Title */}
      <h2 className="font-display text-2xl sm:text-5xl md:text-6xl italic text-text-primary text-center mb-12 whitespace-nowrap">
        Our Previous Events
      </h2>

      {/* Single Row - scrolls left */}
      <div className="relative">
        <div className="flex gap-4 animate-scroll-left">
          {[...allImages, ...allImages, ...allImages, ...allImages].map((image, index) => (
            <div
              key={`photo-${image.id}-${index}`}
              className="flex-shrink-0 h-48 md:h-64 relative overflow-hidden rounded-lg"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
