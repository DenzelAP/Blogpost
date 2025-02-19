// src/data/blogData.ts
export interface Blog {
    title: string;
    content: string;
    subcontent: string;
    timestamp: string;
  }
  
  const blogData: Record<string, Blog> = {
    "week-1": {
      title: "Week 1",
      content: "In de eerste week lag de focus vooral op het leren kennen van de systemen, onze collega's en SQL + PL/SQL.",
      subcontent: "Voor SQL en PL/SQL hadden we een collega bij ons (Jan Snelders) die ons hielp door de theorie te door te gaan en ook oefeningen maakte.",
      timestamp: "03/02/25 - 07/02/25",
    },
    "week-2": {
      title: "Week 2",
      content: "In week 2 begon onze opleiding over Oracle Apex.",
      subcontent: "Nick Buytaert moest ons training geven maar viel die week ziek.",
      timestamp: "10/02/25 - 15/02/25",
    },
  };
  
  export default blogData;
  