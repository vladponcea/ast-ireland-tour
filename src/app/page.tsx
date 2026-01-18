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
    // Send data to Make.com webhook
    try {
      await fetch("https://hook.eu2.make.com/ato6ffjqvqxk5bni5ly2qhy7ch1cpn8z", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          event: {
            id: event.id,
            city: event.city,
            county: event.county,
            date: event.date,
            month: event.month,
            status: event.status,
          },
          submittedAt: new Date().toISOString(),
        }),
      });
    } catch (error) {
      console.error("Webhook error:", error);
    }

    if (event.status === "TICKETS_LIVE" && event.stripeLink) {
      // Redirect to Stripe
      window.location.href = event.stripeLink;
    } else {
      // Add to waitlist - redirect to thank you page
      window.location.href = `/thank-you?event=${event.id}&waitlist=true`;
    }
  };

  return (
    <div className="overflow-x-hidden w-full">
      <Navbar onOpenModal={() => handleOpenModal()} />

      <main className="overflow-x-hidden">
        <Hero onOpenModal={() => handleOpenModal()} />
        <ValueProp />
        <PhotoCarousel />
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
    </div>
  );
}
