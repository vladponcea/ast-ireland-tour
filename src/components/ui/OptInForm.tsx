"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./Button";
import { events, Event, getStatusLabel } from "@/lib/events";

const countryCodes = [
  { code: "+353", country: "Ireland", flag: "🇮🇪" },
  { code: "+44", country: "United Kingdom", flag: "🇬🇧" },
  { code: "+1", country: "United States", flag: "🇺🇸" },
  { code: "+1", country: "Canada", flag: "🇨🇦" },
  { code: "+93", country: "Afghanistan", flag: "🇦🇫" },
  { code: "+355", country: "Albania", flag: "🇦🇱" },
  { code: "+213", country: "Algeria", flag: "🇩🇿" },
  { code: "+376", country: "Andorra", flag: "🇦🇩" },
  { code: "+244", country: "Angola", flag: "🇦🇴" },
  { code: "+54", country: "Argentina", flag: "🇦🇷" },
  { code: "+374", country: "Armenia", flag: "🇦🇲" },
  { code: "+61", country: "Australia", flag: "🇦🇺" },
  { code: "+43", country: "Austria", flag: "🇦🇹" },
  { code: "+994", country: "Azerbaijan", flag: "🇦🇿" },
  { code: "+973", country: "Bahrain", flag: "🇧🇭" },
  { code: "+880", country: "Bangladesh", flag: "🇧🇩" },
  { code: "+375", country: "Belarus", flag: "🇧🇾" },
  { code: "+32", country: "Belgium", flag: "🇧🇪" },
  { code: "+501", country: "Belize", flag: "🇧🇿" },
  { code: "+229", country: "Benin", flag: "🇧🇯" },
  { code: "+975", country: "Bhutan", flag: "🇧🇹" },
  { code: "+591", country: "Bolivia", flag: "🇧🇴" },
  { code: "+387", country: "Bosnia", flag: "🇧🇦" },
  { code: "+267", country: "Botswana", flag: "🇧🇼" },
  { code: "+55", country: "Brazil", flag: "🇧🇷" },
  { code: "+359", country: "Bulgaria", flag: "🇧🇬" },
  { code: "+855", country: "Cambodia", flag: "🇰🇭" },
  { code: "+237", country: "Cameroon", flag: "🇨🇲" },
  { code: "+56", country: "Chile", flag: "🇨🇱" },
  { code: "+86", country: "China", flag: "🇨🇳" },
  { code: "+57", country: "Colombia", flag: "🇨🇴" },
  { code: "+506", country: "Costa Rica", flag: "🇨🇷" },
  { code: "+385", country: "Croatia", flag: "🇭🇷" },
  { code: "+53", country: "Cuba", flag: "🇨🇺" },
  { code: "+357", country: "Cyprus", flag: "🇨🇾" },
  { code: "+420", country: "Czech Republic", flag: "🇨🇿" },
  { code: "+45", country: "Denmark", flag: "🇩🇰" },
  { code: "+593", country: "Ecuador", flag: "🇪🇨" },
  { code: "+20", country: "Egypt", flag: "🇪🇬" },
  { code: "+503", country: "El Salvador", flag: "🇸🇻" },
  { code: "+372", country: "Estonia", flag: "🇪🇪" },
  { code: "+251", country: "Ethiopia", flag: "🇪🇹" },
  { code: "+358", country: "Finland", flag: "🇫🇮" },
  { code: "+33", country: "France", flag: "🇫🇷" },
  { code: "+995", country: "Georgia", flag: "🇬🇪" },
  { code: "+49", country: "Germany", flag: "🇩🇪" },
  { code: "+233", country: "Ghana", flag: "🇬🇭" },
  { code: "+30", country: "Greece", flag: "🇬🇷" },
  { code: "+502", country: "Guatemala", flag: "🇬🇹" },
  { code: "+504", country: "Honduras", flag: "🇭🇳" },
  { code: "+852", country: "Hong Kong", flag: "🇭🇰" },
  { code: "+36", country: "Hungary", flag: "🇭🇺" },
  { code: "+354", country: "Iceland", flag: "🇮🇸" },
  { code: "+91", country: "India", flag: "🇮🇳" },
  { code: "+62", country: "Indonesia", flag: "🇮🇩" },
  { code: "+98", country: "Iran", flag: "🇮🇷" },
  { code: "+964", country: "Iraq", flag: "🇮🇶" },
  { code: "+972", country: "Israel", flag: "🇮🇱" },
  { code: "+39", country: "Italy", flag: "🇮🇹" },
  { code: "+81", country: "Japan", flag: "🇯🇵" },
  { code: "+962", country: "Jordan", flag: "🇯🇴" },
  { code: "+7", country: "Kazakhstan", flag: "🇰🇿" },
  { code: "+254", country: "Kenya", flag: "🇰🇪" },
  { code: "+965", country: "Kuwait", flag: "🇰🇼" },
  { code: "+371", country: "Latvia", flag: "🇱🇻" },
  { code: "+961", country: "Lebanon", flag: "🇱🇧" },
  { code: "+218", country: "Libya", flag: "🇱🇾" },
  { code: "+370", country: "Lithuania", flag: "🇱🇹" },
  { code: "+352", country: "Luxembourg", flag: "🇱🇺" },
  { code: "+60", country: "Malaysia", flag: "🇲🇾" },
  { code: "+356", country: "Malta", flag: "🇲🇹" },
  { code: "+52", country: "Mexico", flag: "🇲🇽" },
  { code: "+373", country: "Moldova", flag: "🇲🇩" },
  { code: "+377", country: "Monaco", flag: "🇲🇨" },
  { code: "+976", country: "Mongolia", flag: "🇲🇳" },
  { code: "+382", country: "Montenegro", flag: "🇲🇪" },
  { code: "+212", country: "Morocco", flag: "🇲🇦" },
  { code: "+258", country: "Mozambique", flag: "🇲🇿" },
  { code: "+95", country: "Myanmar", flag: "🇲🇲" },
  { code: "+977", country: "Nepal", flag: "🇳🇵" },
  { code: "+31", country: "Netherlands", flag: "🇳🇱" },
  { code: "+64", country: "New Zealand", flag: "🇳🇿" },
  { code: "+505", country: "Nicaragua", flag: "🇳🇮" },
  { code: "+234", country: "Nigeria", flag: "🇳🇬" },
  { code: "+850", country: "North Korea", flag: "🇰🇵" },
  { code: "+389", country: "North Macedonia", flag: "🇲🇰" },
  { code: "+47", country: "Norway", flag: "🇳🇴" },
  { code: "+968", country: "Oman", flag: "🇴🇲" },
  { code: "+92", country: "Pakistan", flag: "🇵🇰" },
  { code: "+507", country: "Panama", flag: "🇵🇦" },
  { code: "+595", country: "Paraguay", flag: "🇵🇾" },
  { code: "+51", country: "Peru", flag: "🇵🇪" },
  { code: "+63", country: "Philippines", flag: "🇵🇭" },
  { code: "+48", country: "Poland", flag: "🇵🇱" },
  { code: "+351", country: "Portugal", flag: "🇵🇹" },
  { code: "+974", country: "Qatar", flag: "🇶🇦" },
  { code: "+40", country: "Romania", flag: "🇷🇴" },
  { code: "+7", country: "Russia", flag: "🇷🇺" },
  { code: "+966", country: "Saudi Arabia", flag: "🇸🇦" },
  { code: "+381", country: "Serbia", flag: "🇷🇸" },
  { code: "+65", country: "Singapore", flag: "🇸🇬" },
  { code: "+421", country: "Slovakia", flag: "🇸🇰" },
  { code: "+386", country: "Slovenia", flag: "🇸🇮" },
  { code: "+27", country: "South Africa", flag: "🇿🇦" },
  { code: "+82", country: "South Korea", flag: "🇰🇷" },
  { code: "+34", country: "Spain", flag: "🇪🇸" },
  { code: "+94", country: "Sri Lanka", flag: "🇱🇰" },
  { code: "+46", country: "Sweden", flag: "🇸🇪" },
  { code: "+41", country: "Switzerland", flag: "🇨🇭" },
  { code: "+886", country: "Taiwan", flag: "🇹🇼" },
  { code: "+66", country: "Thailand", flag: "🇹🇭" },
  { code: "+216", country: "Tunisia", flag: "🇹🇳" },
  { code: "+90", country: "Turkey", flag: "🇹🇷" },
  { code: "+380", country: "Ukraine", flag: "🇺🇦" },
  { code: "+971", country: "UAE", flag: "🇦🇪" },
  { code: "+598", country: "Uruguay", flag: "🇺🇾" },
  { code: "+998", country: "Uzbekistan", flag: "🇺🇿" },
  { code: "+58", country: "Venezuela", flag: "🇻🇪" },
  { code: "+84", country: "Vietnam", flag: "🇻🇳" },
  { code: "+967", country: "Yemen", flag: "🇾🇪" },
  { code: "+260", country: "Zambia", flag: "🇿🇲" },
  { code: "+263", country: "Zimbabwe", flag: "🇿🇼" },
];

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
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);
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
      // Combine country code with phone number
      const fullFormData = {
        ...formData,
        phone: `${selectedCountry.code} ${formData.phone}`,
      };
      onSubmit(fullFormData, selectedEvent);
    }
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const country = countryCodes.find(c => c.country === e.target.value);
    if (country) {
      setSelectedCountry(country);
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
              {event.date.replace(/, \d{4}$/, "")} - {event.city} ({getStatusLabel(event.status)})
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
          <div className="flex flex-col sm:flex-row border border-text-secondary/30 rounded-sm focus-within:border-accent transition-colors overflow-hidden">
            <select
              value={selectedCountry.country}
              onChange={handleCountryChange}
              className="w-full sm:w-28 px-2 py-3 bg-background text-text-primary focus:outline-none text-sm"
            >
              {countryCodes.map((country) => (
                <option key={`${country.country}-${country.code}`} value={country.country}>
                  {country.flag} {country.code}
                </option>
              ))}
            </select>
            <div className="flex flex-1 items-center bg-background">
              <span className="pl-4 text-text-primary">{selectedCountry.code}</span>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={handleChange}
                className="flex-1 px-2 py-3 bg-background text-text-primary placeholder:text-text-secondary/50 focus:outline-none min-w-0"
              />
            </div>
          </div>
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
