"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { motion } from "framer-motion";
import { Calendar, MessageCircle, CheckCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { getEventByCity, events } from "@/lib/events";
import {
  generateGoogleCalendarUrl,
  generateOutlookCalendarUrl,
  downloadICSFile,
} from "@/lib/calendar";

function ThankYouContent() {
  const searchParams = useSearchParams();
  const eventId = searchParams.get("event");
  const isWaitlist = searchParams.get("waitlist") === "true";

  // Find event by ID
  const event = events.find((e) => e.id === eventId) || events[0];

  const handleGoogleCalendar = () => {
    window.open(generateGoogleCalendarUrl(event.calendarDetails), "_blank");
  };

  const handleAppleCalendar = () => {
    downloadICSFile(event.calendarDetails);
  };

  const handleOutlookCalendar = () => {
    window.open(generateOutlookCalendarUrl(event.calendarDetails), "_blank");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl w-full text-center"
      >
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-8"
        >
          <CheckCircle className="w-10 h-10 text-accent" />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="font-display text-4xl sm:text-5xl italic text-text-primary mb-4"
        >
          {isWaitlist ? "You're on the List!" : "You're In!"}
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-text-secondary text-lg mb-8"
        >
          {isWaitlist
            ? `You've joined the waitlist for The Irish Entrepreneur Roadshow in ${event.city}. We'll notify you when tickets become available.`
            : `Your seat at The Irish Entrepreneur Roadshow in ${event.city} is confirmed.`}
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.5 }}
          className="w-full h-px bg-text-secondary/20 my-8"
        />

        {!isWaitlist && (
          <>
            {/* Calendar Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-8"
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <Calendar className="w-5 h-5 text-accent" />
                <h2 className="text-lg font-medium text-text-primary">
                  Add to Calendar
                </h2>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                <button
                  onClick={handleGoogleCalendar}
                  className="px-4 py-2 bg-background-secondary border border-text-secondary/20 rounded-sm text-text-primary hover:border-accent hover:text-accent transition-colors text-sm"
                >
                  Google
                </button>
                <button
                  onClick={handleAppleCalendar}
                  className="px-4 py-2 bg-background-secondary border border-text-secondary/20 rounded-sm text-text-primary hover:border-accent hover:text-accent transition-colors text-sm"
                >
                  Apple
                </button>
                <button
                  onClick={handleOutlookCalendar}
                  className="px-4 py-2 bg-background-secondary border border-text-secondary/20 rounded-sm text-text-primary hover:border-accent hover:text-accent transition-colors text-sm"
                >
                  Outlook
                </button>
              </div>
            </motion.div>

            {/* WhatsApp Section */}
            {event.whatsappLink && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mb-8"
              >
                <div className="flex items-center justify-center gap-2 mb-4">
                  <MessageCircle className="w-5 h-5 text-accent" />
                  <h2 className="text-lg font-medium text-text-primary">
                    Join Your Event WhatsApp Group
                  </h2>
                </div>
                <p className="text-text-secondary text-sm mb-4">
                  Connect with fellow attendees before the event.
                </p>
                <Button
                  variant="outline"
                  href={event.whatsappLink}
                  className="inline-flex items-center gap-2"
                >
                  Join WhatsApp Group
                </Button>
              </motion.div>
            )}
          </>
        )}

        {/* What's Next */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-background-secondary border border-text-secondary/20 rounded-lg p-6 mb-8 text-left"
        >
          <h3 className="font-medium text-text-primary mb-4">What&apos;s Next?</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-text-secondary">
              <CheckCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
              <span>Check your email for confirmation</span>
            </li>
            {isWaitlist ? (
              <li className="flex items-start gap-3 text-text-secondary">
                <CheckCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <span>Our team will call you when tickets go live</span>
              </li>
            ) : (
              <>
                <li className="flex items-start gap-3 text-text-secondary">
                  <CheckCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <span>Join the WhatsApp group using the link in the confirmation email</span>
                </li>
                <li className="flex items-start gap-3 text-text-secondary">
                  <CheckCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <span>Add the event to your calendar</span>
                </li>
              </>
            )}
          </ul>
        </motion.div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <Button
            variant="ghost"
            href="/"
            className="inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Homepage
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <ThankYouContent />
    </Suspense>
  );
}
