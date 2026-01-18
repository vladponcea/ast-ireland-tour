export type EventStatus = "TICKETS_LIVE" | "WAITLIST_OPEN" | "COMING_SOON";

export interface CalendarDetails {
  title: string;
  location: string;
  startTime: string;
  endTime: string;
}

export interface Event {
  id: string;
  month: string;
  date: string;
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
}

export const events: Event[] = [
  {
    id: "cavan-jan-2026",
    month: "January",
    date: "January 31, 2026",
    city: "Cavan",
    county: "County Cavan",
    theme: "THE LAKELAND CHAPTER",
    status: "TICKETS_LIVE",
    host: "Casey",
    description:
      "Begin the journey in Ireland's lakeland region. Where determination meets opportunity in an intimate setting designed for transformation.",
    stripeLink: "https://buy.stripe.com/cNi7sK4LqgDk6lM2xPeEo0B",
    whatsappLink: "",
    calendarDetails: {
      title: "AST Irish Roadshow - Cavan",
      location: "Cavan, Ireland",
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
    status: "COMING_SOON",
    host: "TBD",
    description:
      "The treaty city welcomes ambitious professionals. Connect with Munster's finest in a city known for its fighting spirit.",
    stripeLink: "",
    whatsappLink: "",
    calendarDetails: {
      title: "AST Irish Roadshow - Limerick",
      location: "Limerick, Ireland",
      startTime: "2026-02-28T09:00:00",
      endTime: "2026-02-28T18:00:00",
    },
    image: "/images/cities/limerick.jpg",
  },
  {
    id: "cork-mar-2026",
    month: "March",
    date: "March 31, 2026",
    city: "Cork",
    county: "County Cork",
    theme: "THE REBEL COUNTY",
    status: "COMING_SOON",
    host: "Tiann, Sean Coffey",
    description:
      "The rebel county rises. Experience world-class training in Ireland's second city, where innovation meets tradition.",
    stripeLink: "",
    whatsappLink: "",
    calendarDetails: {
      title: "AST Irish Roadshow - Cork",
      location: "Cork, Ireland",
      startTime: "2026-03-31T09:00:00",
      endTime: "2026-03-31T18:00:00",
    },
    image: "/images/cities/cork.jpg",
  },
  {
    id: "belfast-apr-2026",
    month: "April",
    date: "April 30, 2026",
    city: "Belfast",
    county: "Northern Ireland",
    theme: "THE NORTHERN POWERHOUSE",
    status: "COMING_SOON",
    host: "Sean Casey",
    description:
      "Cross the border to Belfast. A city transformed, now home to tech giants and ambitious entrepreneurs ready to level up.",
    stripeLink: "",
    whatsappLink: "",
    calendarDetails: {
      title: "AST Irish Roadshow - Belfast",
      location: "Belfast, Northern Ireland",
      startTime: "2026-04-30T09:00:00",
      endTime: "2026-04-30T18:00:00",
    },
    image: "/images/cities/belfast.jpg",
  },
  {
    id: "meath-may-2026",
    month: "May",
    date: "May 31, 2026",
    city: "Meath",
    county: "County Meath",
    theme: "THE ROYAL COUNTY",
    status: "COMING_SOON",
    host: "James Doyle",
    description:
      "The Royal County calls. Ancient heritage meets modern ambition in the heart of Ireland's Ancient East.",
    stripeLink: "",
    whatsappLink: "",
    calendarDetails: {
      title: "AST Irish Roadshow - Meath",
      location: "County Meath, Ireland",
      startTime: "2026-05-31T09:00:00",
      endTime: "2026-05-31T18:00:00",
    },
    image: "/images/cities/meath.jpg",
  },
  {
    id: "wexford-jun-2026",
    month: "June",
    date: "June 30, 2026",
    city: "Wexford",
    county: "County Wexford",
    theme: "THE MODEL COUNTY",
    status: "COMING_SOON",
    host: "TBD",
    description:
      "Summer arrives in the sunny southeast. Wexford's golden coastline provides the backdrop for your next breakthrough.",
    stripeLink: "",
    whatsappLink: "",
    calendarDetails: {
      title: "AST Irish Roadshow - Wexford",
      location: "Wexford, Ireland",
      startTime: "2026-06-30T09:00:00",
      endTime: "2026-06-30T18:00:00",
    },
    image: "/images/cities/wexford.jpg",
  },
  {
    id: "galway-jul-2026",
    month: "July",
    date: "July 31, 2026",
    city: "Galway",
    county: "County Galway",
    theme: "THE CITY OF TRIBES",
    status: "COMING_SOON",
    host: "TBD",
    description:
      "The cultural heart of the West. Galway's creative energy and wild Atlantic backdrop fuel transformation.",
    stripeLink: "",
    whatsappLink: "",
    calendarDetails: {
      title: "AST Irish Roadshow - Galway",
      location: "Galway, Ireland",
      startTime: "2026-07-31T09:00:00",
      endTime: "2026-07-31T18:00:00",
    },
    image: "/images/cities/galway.jpg",
  },
  {
    id: "waterford-aug-2026",
    month: "August",
    date: "August 31, 2026",
    city: "Waterford",
    county: "County Waterford",
    theme: "THE CRYSTAL CITY",
    status: "COMING_SOON",
    host: "TBD",
    description:
      "Ireland's oldest city shines bright. Where Viking heritage meets cutting-edge sales mastery.",
    stripeLink: "",
    whatsappLink: "",
    calendarDetails: {
      title: "AST Irish Roadshow - Waterford",
      location: "Waterford, Ireland",
      startTime: "2026-08-31T09:00:00",
      endTime: "2026-08-31T18:00:00",
    },
    image: "/images/cities/waterford.jpg",
  },
  {
    id: "clare-sep-2026",
    month: "September",
    date: "September 30, 2026",
    city: "Clare",
    county: "County Clare",
    theme: "THE BANNER COUNTY",
    status: "COMING_SOON",
    host: "TBD",
    description:
      "Where the Cliffs of Moher meet limitless potential. Clare's raw beauty inspires breakthrough performances.",
    stripeLink: "",
    whatsappLink: "",
    calendarDetails: {
      title: "AST Irish Roadshow - Clare",
      location: "County Clare, Ireland",
      startTime: "2026-09-30T09:00:00",
      endTime: "2026-09-30T18:00:00",
    },
    image: "/images/cities/clare.jpg",
  },
  {
    id: "sligo-oct-2026",
    month: "October",
    date: "October 31, 2026",
    city: "Sligo",
    county: "County Sligo",
    theme: "YEATS COUNTRY",
    status: "COMING_SOON",
    host: "TBD",
    description:
      "The land of heart's desire. Sligo's mystical landscapes set the stage for your transformation story.",
    stripeLink: "",
    whatsappLink: "",
    calendarDetails: {
      title: "AST Irish Roadshow - Sligo",
      location: "Sligo, Ireland",
      startTime: "2026-10-31T09:00:00",
      endTime: "2026-10-31T18:00:00",
    },
    image: "/images/cities/sligo.jpg",
  },
  {
    id: "kerry-nov-2026",
    month: "November",
    date: "November 30, 2026",
    city: "Kerry",
    county: "County Kerry",
    theme: "THE KINGDOM",
    status: "COMING_SOON",
    host: "TBD",
    description:
      "The Kingdom awaits. Kerry's legendary hospitality and stunning Ring provide the ultimate penultimate chapter.",
    stripeLink: "",
    whatsappLink: "",
    calendarDetails: {
      title: "AST Irish Roadshow - Kerry",
      location: "Kerry, Ireland",
      startTime: "2026-11-30T09:00:00",
      endTime: "2026-11-30T18:00:00",
    },
    image: "/images/cities/kerry.jpg",
  },
  {
    id: "dublin-dec-2026",
    month: "December",
    date: "December 31, 2026",
    city: "Dublin",
    county: "County Dublin",
    theme: "THE GRAND FINALE",
    status: "COMING_SOON",
    host: "TBD",
    description:
      "The tour concludes in the capital. Dublin's energy, history, and ambition unite for an unforgettable finale and celebration.",
    stripeLink: "",
    whatsappLink: "",
    calendarDetails: {
      title: "AST Irish Roadshow - Dublin",
      location: "Dublin, Ireland",
      startTime: "2026-12-31T09:00:00",
      endTime: "2026-12-31T18:00:00",
    },
    image: "/images/cities/dublin.jpg",
  },
];

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
      return "Coming Soon";
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
  }
}
