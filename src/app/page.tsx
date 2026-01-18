"use client";

import { useState } from "react";
import { Navbar, Footer } from "@/components/layout";
import {
  Hero,
  PhotoCarousel,
  ValueProp,
  Roadmap,
  FAQ,
} from "@/components/sections";
import { Modal, OptInForm } from "@/components/ui";
import { Event } from "@/lib/events";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const handleOpenModal = (event?: Event) => {
    setSelectedEvent(event || null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  const handleFormSubmit = async (
    formData: { firstName: string; lastName: string; email: string; phone: string },
    event: Event
  ) => {
    // Handle form submission
    console.log("Form submitted:", { formData, event });

    if (event.status === "TICKETS_LIVE" && event.stripeLink) {
      // Redirect to Stripe
      window.location.href = event.stripeLink;
    } else {
      // Add to waitlist - redirect to thank you page
      window.location.href = `/thank-you?event=${event.id}&waitlist=true`;
    }
  };

  return (
    <>
      <Navbar onOpenModal={() => handleOpenModal()} />

      <main>
        <Hero onOpenModal={() => handleOpenModal()} />
        <PhotoCarousel />
        <ValueProp />
        <Roadmap onEventSelect={handleOpenModal} />
        <FAQ />
      </main>

      <Footer />

      {/* Opt-in Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Select Your Event"
      >
        <OptInForm
          onSubmit={handleFormSubmit}
          preSelectedEventId={selectedEvent?.id}
        />
      </Modal>
    </>
  );
}
