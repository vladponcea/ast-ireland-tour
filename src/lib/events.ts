export type EventStatus = "TICKETS_LIVE" | "WAITLIST_OPEN" | "COMING_SOON" | "COMPLETED";

export interface CalendarDetails {
  title: string;
  location: string;
  startTime: string;
  endTime: string;
}

export interface TicketOption {
  id: string;
  name: string;
  price: string;
  summary: string;
  inclusions?: string[];
  stripeLink: string;
}

export interface Event {
  id: string;
  month: string;
  date: string;
  time?: string;
  city: string;
  county: string;
  theme: string;
  status: EventStatus;
  host: string;
  description: string;
  stripeLink: string;
  whatsappLink: string;
  calendarDetails: CalendarDetails;
  image?: string;
  tickets?: TicketOption[];
}

export const events: Event[] = [
  {
    id: "cavan-jan-2026",
    month: "January",
    date: "January 31, 2026",
    city: "Cavan",
    county: "County Cavan",
    theme: "THE LAKELAND CHAPTER",
    status: "COMPLETED",
    host: "Casey",
    description:
      "Begin the journey in Ireland's lakeland region. Where determination meets opportunity in an intimate setting designed for transformation.",
    stripeLink: "https://buy.stripe.com/cNi7sK4LqgDk6lM2xPeEo0B",
    whatsappLink: "",
    calendarDetails: {
      title: "AST Irish Entrepreneur Roadshow - Cavan",
      location: "Cavan",
      startTime: "2026-01-31T09:00:00",
      endTime: "2026-01-31T18:00:00",
    },
    image: "/images/cities/cavan.jpg",
  },
  {
    id: "limerick-feb-2026",
    month: "February",
    date: "February 28, 2026",
    city: "Limerick",
    county: "County Limerick",
    theme: "THE TREATY CITY",
    status: "COMPLETED",
    host: "TBD",
    description:
      "The treaty city welcomes ambitious professionals. Connect with Munster's finest in a city known for its fighting spirit.",
    stripeLink: "https://buy.stripe.com/7sYaEWcdS72KdOe5K1eEo0D",
    whatsappLink: "",
    calendarDetails: {
      title: "AST Irish Entrepreneur Roadshow - Limerick",
      location: "Limerick",
      startTime: "2026-02-28T09:00:00",
      endTime: "2026-02-28T18:00:00",
    },
    image: "/images/cities/limerick.jpg",
  },
  {
    id: "cork-mar-2026",
    month: "March",
    date: "March 28, 2026",
    city: "Cork",
    county: "County Cork",
    theme: "THE REBEL COUNTY",
    status: "COMPLETED",
    host: "Tiann, Sean Coffey",
    description:
      "The rebel county rises. Experience world-class training in Ireland's second city, where innovation meets tradition.",
    stripeLink: "https://buy.stripe.com/28E6oG7XC2Mu4dE2xPeEo0E",
    whatsappLink: "",
    calendarDetails: {
      title: "AST Irish Entrepreneur Roadshow - Cork",
      location: "Cork",
      startTime: "2026-03-31T09:00:00",
      endTime: "2026-03-31T18:00:00",
    },
    image: "/images/cities/cork.jpg",
  },
  {
    id: "belfast-apr-2026",
    month: "April",
    date: "April 25, 2026",
    city: "Belfast",
    county: "Northern Ireland",
    theme: "THE NORTHERN POWERHOUSE",
    status: "COMPLETED",
    host: "Sean Casey",
    description:
      "Cross the border to Belfast. A city transformed, now home to tech giants and ambitious entrepreneurs ready to level up.",
    stripeLink: "https://buy.stripe.com/eVq9ASem0bj039AfkBeEo0P",
    whatsappLink: "",
    calendarDetails: {
      title: "AST Irish Entrepreneur Roadshow - Belfast",
      location: "Belfast",
      startTime: "2026-04-25T09:00:00",
      endTime: "2026-04-25T18:00:00",
    },
    image: "/images/cities/belfast.jpg",
  },
  {
    id: "meath-may-2026",
    month: "May",
    date: "May 23, 2026",
    city: "Meath",
    county: "County Meath",
    theme: "THE ROYAL COUNTY",
    status: "TICKETS_LIVE",
    host: "James Doyle",
    description:
      "The Royal County calls. Ancient heritage meets modern ambition in the heart of Ireland's Ancient East, hosted at Knightsbrook Hotel Spa and Golf Resort, Dublin Rd, Iffernock, Trim, Co. Meath.",
    stripeLink: "https://buy.stripe.com/cNidR8a5KgDkbG67S9eEo0R",
    whatsappLink: "",
    calendarDetails: {
      title: "AST Irish Entrepreneur Roadshow - Meath",
      location: "Knightsbrook Hotel Spa and Golf Resort, Dublin Rd, Iffernock, Trim, Co. Meath",
      startTime: "2026-05-23T09:00:00",
      endTime: "2026-05-23T18:00:00",
    },
    image: "/images/cities/meath.jpg",
  },
  {
    id: "wexford-jun-2026",
    month: "June",
    date: "27 June, 2026",
    time: "11am–3pm",
    city: "Wexford",
    county: "County Wexford",
    theme: "AI & PERSONAL BRANDING WORKSHOP – NATIONAL OPERA HOUSE, WEXFORD",
    status: "TICKETS_LIVE",
    host: "TBD",
    description:
      "A hands-on workshop focused on harnessing AI and building a powerful personal brand.",
    stripeLink: "https://buy.stripe.com/28E4gy5Pu1Iq8tU0pHeEo0S",
    whatsappLink: "",
    calendarDetails: {
      title: "AST Irish Entrepreneur Roadshow - Wexford",
      location: "National Opera House, High St, Townparks, Wexford, Y35 FEP3",
      startTime: "2026-06-27T11:00:00",
      endTime: "2026-06-27T15:00:00",
    },
    image: "/images/cities/wexford.jpg",
    tickets: [
      {
        id: "wexford-ai-personal-branding-workshop",
        name: "AI & Personal Branding Workshop",
        price: "€50",
        summary: "Saturday workshop at the National Opera House, Wexford, 11:00am - 3:00pm.",
        stripeLink: "https://buy.stripe.com/28E4gy5Pu1Iq8tU0pHeEo0S",
      },
    ],
  },
  {
    id: "galway-jul-2026",
    month: "July",
    date: "31 July 4:30–8:30pm & 1 Aug 12pm – late",
    city: "Galway",
    county: "County Galway",
    theme: "EXCLUSIVE SALES WORKSHOP & GALWAY RACES – THE DEAN HOTEL, GALWAY",
    status: "TICKETS_LIVE",
    host: "TBD",
    description:
      "A two-day experience combining an intensive sales, scaling, systems, and leadership workshop with a day at the Galway Races the following afternoon.",
    stripeLink: "https://buy.stripe.com/8x25kC7XC0EmdOe3BTeEo10",
    whatsappLink: "",
    calendarDetails: {
      title: "AST Irish Entrepreneur Roadshow - Galway",
      location: "The Dean Hotel, Galway",
      startTime: "2026-07-31T16:30:00",
      endTime: "2026-07-31T20:30:00",
    },
    image: "/images/cities/galway.jpg",
    tickets: [
      {
        id: "galway-roadshow-only",
        name: "Exclusive Sales Workshop",
        price: "€60",
        summary: "Friday Exclusive Sales Workshop at The Dean Hotel, 4:30 - 8:30pm.",
        stripeLink: "https://buy.stripe.com/8x25kC7XC0EmdOe3BTeEo10",
      },
      {
        id: "galway-roadshow-races",
        name: "Sales Workshop + Day at the Galway Races with AST",
        price: "€199",
        summary: "Friday Exclusive Sales Workshop plus Saturday's Premium Festival Package at the Galway Races.",
        inclusions: [
          "Friday Exclusive Sales Workshop, 4:30 - 8:30pm",
          "Saturday 1st Aug Day at the Galway Races with AST, 12:30pm - late",
          "Admission ticket",
          "Grandstand reserved seating badge",
          "Access to The Winning Post bar with panoramic finish-line views",
          "Racecard",
          "€5 betting voucher",
          "€7 drink voucher",
          "Shuttle bus to and from the races",
        ],
        stripeLink: "https://buy.stripe.com/bJefZg2DigDkeSiegxeEo11",
      },
    ],
  },
  {
    id: "waterford-aug-2026",
    month: "August",
    date: "29 August, 2026",
    time: "11am–3pm",
    city: "Waterford",
    county: "County Waterford",
    theme: "IDENTITY & PURPOSE WORKSHOP –",
    status: "COMING_SOON",
    host: "TBD",
    description:
      "A deep-dive full-day workshop exploring your core values, beliefs, identity, and purpose as an entrepreneur.",
    stripeLink: "",
    whatsappLink: "",
    calendarDetails: {
      title: "AST Irish Entrepreneur Roadshow - Waterford",
      location: "Waterford",
      startTime: "2026-08-29T11:00:00",
      endTime: "2026-08-29T15:00:00",
    },
    image: "/images/cities/waterford.jpg",
  },
  {
    id: "kerry-oct-2026",
    month: "October",
    date: "10 October, 2026",
    time: "11am–3pm",
    city: "Kerry",
    county: "County Kerry",
    theme: "ENTREPRENEUR ROADSHOW",
    status: "COMING_SOON",
    host: "TBD",
    description:
      "A community roadshow coming to Kerry, tailored specifically for the local entrepreneurial scene.",
    stripeLink: "",
    whatsappLink: "",
    calendarDetails: {
      title: "AST Irish Entrepreneur Roadshow - Kerry",
      location: "Kerry",
      startTime: "2026-10-10T11:00:00",
      endTime: "2026-10-10T15:00:00",
    },
    image: "/images/cities/kerry.jpg",
  },
  {
    id: "dublin-dec-2026",
    month: "December",
    date: "12 & 13 December, 2026",
    city: "Dublin",
    county: "County Dublin",
    theme: "MASS AWAKENING",
    status: "WAITLIST_OPEN",
    host: "TBD",
    description:
      "A landmark two-day end-of-year event featuring a full-day conference on the 12th (11am–6pm), followed by a VIP Black Tie Gala on the 13th.",
    stripeLink: "",
    whatsappLink: "",
    calendarDetails: {
      title: "AST Irish Entrepreneur Roadshow - Dublin",
      location: "Dublin",
      startTime: "2026-12-12T11:00:00",
      endTime: "2026-12-13T18:00:00",
    },
    image: "/images/cities/dublin.jpg",
  },
];

export function getUpcomingEvents(): Event[] {
  return events.filter((event) => event.status !== "COMPLETED");
}

export function getEventByCity(city: string): Event | undefined {
  return events.find(
    (event) => event.city.toLowerCase() === city.toLowerCase()
  );
}

export function getActiveEvent(): Event | undefined {
  return events.find((event) => event.status === "TICKETS_LIVE");
}

export function getStatusLabel(status: EventStatus): string {
  switch (status) {
    case "TICKETS_LIVE":
      return "Tickets Live";
    case "WAITLIST_OPEN":
      return "Waitlist Open";
    case "COMING_SOON":
      return "Tickets Coming Soon";
    case "COMPLETED":
      return "Completed";
  }
}

export function getStatusColor(status: EventStatus): string {
  switch (status) {
    case "TICKETS_LIVE":
      return "bg-status-live";
    case "WAITLIST_OPEN":
      return "bg-status-waitlist";
    case "COMING_SOON":
      return "bg-status-coming";
    case "COMPLETED":
      return "bg-text-secondary";
  }
}
