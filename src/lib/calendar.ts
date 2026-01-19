import { CalendarDetails } from "./events";

export function generateGoogleCalendarUrl(details: CalendarDetails): string {
  const { title, location, startTime, endTime } = details;

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  };

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: title,
    dates: `${formatDate(startTime)}/${formatDate(endTime)}`,
    location: location,
    details: `Join us for the Irish Entrepreneur Roadshow event in ${location}.\n\n• Check your email for confirmation\n• Join the WhatsApp group using the link in the confirmation email\n• Add the event to your calendar`,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function generateAppleCalendarUrl(details: CalendarDetails): string {
  const { title, location, startTime, endTime } = details;

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  };

  // Apple Calendar uses the same format as ICS
  const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:${formatDate(startTime)}
DTEND:${formatDate(endTime)}
SUMMARY:${title}
LOCATION:${location}
DESCRIPTION:Join us for the Irish Entrepreneur Roadshow event in ${location}.\\n\\n• Check your email for confirmation\\n• Join the WhatsApp group using the link in the confirmation email\\n• Add the event to your calendar
END:VEVENT
END:VCALENDAR`;

  return `data:text/calendar;charset=utf8,${encodeURIComponent(icsContent)}`;
}

export function generateOutlookCalendarUrl(details: CalendarDetails): string {
  const { title, location, startTime, endTime } = details;

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toISOString();
  };

  const params = new URLSearchParams({
    path: "/calendar/action/compose",
    rru: "addevent",
    subject: title,
    startdt: formatDate(startTime),
    enddt: formatDate(endTime),
    location: location,
    body: `Join us for the Irish Entrepreneur Roadshow event in ${location}.\n\n• Check your email for confirmation\n• Join the WhatsApp group using the link in the confirmation email\n• Add the event to your calendar`,
  });

  return `https://outlook.live.com/calendar/0/deeplink/compose?${params.toString()}`;
}

export function downloadICSFile(details: CalendarDetails): void {
  const { title, location, startTime, endTime } = details;

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  };

  const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//AST Irish Entrepreneur Roadshow//EN
BEGIN:VEVENT
UID:${Date.now()}@affinitysalestraining.ie
DTSTART:${formatDate(startTime)}
DTEND:${formatDate(endTime)}
SUMMARY:${title}
LOCATION:${location}
DESCRIPTION:Join us for the Irish Entrepreneur Roadshow event in ${location}.\\n\\n• Check your email for confirmation\\n• Join the WhatsApp group using the link in the confirmation email\\n• Add the event to your calendar
END:VEVENT
END:VCALENDAR`;

  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${title.replace(/\s+/g, "-").toLowerCase()}.ics`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
