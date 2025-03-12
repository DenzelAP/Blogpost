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
      "Voor SQL en PL/SQL hadden we een collega bij ons (Jan Snelders) die ons hielp door de theorie te gaan en oefeningen maakte. We hebben ook een rondleiding gekregen in het bedrijf en kennis gemaakt met de verschillende afdelingen. We hebben ook een introductie gekregen over de verschillende systemen die we zullen gebruiken zoals Oracle Apex, Jira, Confluence, ...",
    timestamp: "03/02/25 - 07/02/25",
  },
  "week-2": {
    title: "Week 2",
    content: "In week 2 begon onze opleiding over Oracle Apex.",
    subcontent:
      "Nick Buytaert moest ons training geven maar viel die week ziek. Hierdoor kregen we maar 1 dag opleiding over Oracle Apex. We hebben wel een basis meegekregen en konden al experimenteren met het maken van schermen. We hebben ook een introductie gekregen over het project waar we aan zullen werken.",
    timestamp: "10/02/25 - 14/02/25",
  },
  "week-3": {
    title: "Week 3",
    content: "In week 3 begonnen we aan ons eerste project 4me-Tia.",
    subcontent:
      "Het 4me-Tia-project vereist de ontwikkeling van APEX-schermen om beheertaken te vergemakkelijken. Deze schermen zijn essentieel voor beheerders om alle benodigde gegevens te configureren via een intuïtieve en gebruiksvriendelijke interface. Er worden meerdere schermen gemaakt om de configuratie van verschillende instellingen te ondersteunen. Het was zeker een uitdaging om samen met Shreejan de meeste funtionaliteit van Oracle Apex uit te zoeken aangezien we maar 1 dag opleiding hierover kregen.",
    timestamp: "17/02/25 - 21/02/25",
  },
  "week-4": {
    title: "Week 4",
    content: "Gedurende week 4 hebben we verder gewerkt aan het 4me-Tia-project. We hebbe behoorlijk wat vooruitgang geboekt. Ik heb zelf een grote fout gemaakt door een clear schema script te runnen op de verkeerde database. Hierdoor was alle data weg en moest Filip iemand raadplegen om de data terug te krijgen.",
    subcontent:
      "De reden waarom ik dit deed was omdat ik dacht dat ik op de dev-omgeving zat maar ik zat op de test-omgeving. Ik heb hieruit geleerd dat ik altijd moet controleren of ik op de juiste omgeving zit. En indien mogelijk altijd een backup moet maken van de data voordat ik zo'n script run. ",
    timestamp: "24/02/25 - 28/02/25",
  },
  "week-5": {
    title: "Week 5",
    content: "Week 5 was een goede week. We hebben veel vooruitgang geboekt met het 4me-Tia-project. De laatste openstaande tickets op Jira zijn uitdagender dan verwacht maar we hebben hiervoor wat ondersteuning gekregen van onze collega's.",
    subcontent:
      "Het uitdagend deel van de tickets zijn de functionaliteiten om de verschillende data te kunnen configureren. We hebben hiervoor een aantal schermen moeten maken en de data moeten kunnen ophalen en opslaan in de database. We hebben ook een aantal schermen moeten maken om de data te kunnen visualiseren.",
    timestamp: "03/03/25 - 07/03/25",
  },
  "week-6": {
    title: "Week 6",
    content: "Week 6 dachten we klaar te zijn met het 4me-Tia-project maar we hadden nog een aantal openstaande tickets. Het laatste grote werk was het verbeteren van het datamodel dat we hadden gekregen en het verbeteren van het scherm om de uren te kunnen registreren.",
    subcontent:
      "Het datamodel was niet goed geoptimaliseerd en we hadden dit moeten aanpassen. Het scherm om de uren te registreren was ook niet gebruiksvriendelijk dus hebben we dit veranderd.",
    timestamp: "10/03/25 - 14/03/25",
  },
};

export default blogData;
