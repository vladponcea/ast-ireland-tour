"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./Button";
import { events, Event, getStatusLabel } from "@/lib/events";

interface OptInFormProps {
  onSubmit: (data: FormData, selectedEvent: Event) => void;
  isLoading?: boolean;
  preSelectedEventId?: string;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export function OptInForm({
  onSubmit,
  isLoading = false,
  preSelectedEventId,
}: OptInFormProps) {
  const [selectedEventId, setSelectedEventId] = useState(
    preSelectedEventId || events[0]?.id || ""
  );
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const selectedEvent = events.find((e) => e.id === selectedEventId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedEvent) {
      onSubmit(formData, selectedEvent);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Event Selection */}
      <div>
        <label
          htmlFor="event"
          className="block text-sm font-medium text-text-secondary mb-2"
        >
          Select Your Event
        </label>
        <select
          id="event"
          value={selectedEventId}
          onChange={(e) => setSelectedEventId(e.target.value)}
          className="w-full px-4 py-3 bg-background border border-text-secondary/30 rounded-sm text-text-primary focus:border-accent focus:outline-none transition-colors"
        >
          {events.map((event) => (
            <option key={event.id} value={event.id}>
              {event.month} - {event.city} ({getStatusLabel(event.status)})
            </option>
          ))}
        </select>
      </div>

      {/* Form Fields */}
      <div className="space-y-4">
        <p className="text-sm font-medium text-text-secondary">Your Details</p>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="sr-only">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              required
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-background border border-text-secondary/30 rounded-sm text-text-primary placeholder:text-text-secondary/50 focus:border-accent focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="sr-only">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              required
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-background border border-text-secondary/30 rounded-sm text-text-primary placeholder:text-text-secondary/50 focus:border-accent focus:outline-none transition-colors"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-background border border-text-secondary/30 rounded-sm text-text-primary placeholder:text-text-secondary/50 focus:border-accent focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label htmlFor="phone" className="sr-only">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-background border border-text-secondary/30 rounded-sm text-text-primary placeholder:text-text-secondary/50 focus:border-accent focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={isLoading}
        className="w-full"
      >
        {isLoading ? (
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="inline-block w-5 h-5 border-2 border-background border-t-transparent rounded-full"
          />
        ) : selectedEvent?.status === "TICKETS_LIVE" ? (
          "Continue to Checkout"
        ) : (
          "Join Waitlist"
        )}
      </Button>

      <p className="text-xs text-text-secondary text-center">
        By continuing, you agree to our terms and privacy policy.
      </p>
    </form>
  );
}
