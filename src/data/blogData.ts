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
    content:
      "In de eerste week lag de focus vooral op het leren kennen van de systemen, onze collega's en SQL + PL/SQL.",
    subcontent:
      "Voor SQL en PL/SQL hadden we een collega bij ons (Jan Snelders) die ons hielp door de theorie te gaan en oefeningen maakte.",
    timestamp: "03/02/25 - 07/02/25",
  },
  "week-2": {
    title: "Week 2",
    content: "In week 2 begon onze opleiding over Oracle Apex.",
    subcontent:
      "Nick Buytaert moest ons training geven maar viel die week ziek.",
    timestamp: "10/02/25 - 15/02/25",
  },
  "week-3": {
    title: "Week 3",
    content: "In week 3 begonnen we aan ons eerste project TIA 4 ME.",
    subcontent:
      "Het 4me-Tia-project vereist de ontwikkeling van APEX-schermen om beheertaken te vergemakkelijken. Deze schermen zijn essentieel voor beheerders om alle benodigde gegevens te configureren via een intuïtieve en gebruiksvriendelijke interface. Er worden meerdere schermen gemaakt om de configuratie van verschillende instellingen te ondersteunen.",
    timestamp: "17/02/25 - 21/02/25",
  },
};

export default blogData;
