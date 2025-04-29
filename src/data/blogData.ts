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
  "week-7": {
    title: "Week 7",
    content: "Tijdens week 7 hebben we het Tia4Me project afgerond. De laatste schermen zijn gemaakt en de laatste bugs zijn opgelost.",
    subcontent:
      "In mijn geval waren de grootste bugs omtrent het inboeken en editeren van gewerkte tijden. Tijden konden in verschillende ranges (18:00-22:00 & 06:00-08:00 & 10:00-18:00) worden ingegeven, wat een behoorlijke uitdaging was om te valideren. Dit heb ik opgelost door packages en procedures te schrijven die de tijden valideren en opslaan in de database.",
    timestamp: "17/03/25 - 21/03/25",
  },
  "week-8": {
    title: "Week 8",
    content: "In week 8 hadden we het eerste project afgerond en hebben we 2 demo's gegeven. De eerste demo was voor onze collega's en de tweede demo was voor de klant.",
    subcontent:
      "We hebben veel positieve feedback gekregen van onze collega's en de klant. We hebben ook een aantal verbeterpunten gekregen die we in de toekomst kunnen implementeren.",
    timestamp: "17/03/25 - 21/03/25",
  },"week-9": {
    title: "Week 9",
    content: "In week 9 moesten we de punten die we als feedback hadden gekregen van de klant implementeren. Dit was een behoorlijke uitdaging omdat we niet veel tijd hadden en we ook nog een ander project moesten doen.",
    subcontent:
      "We hebben de feedback in 1 week kunnen implementeren en hebben dit ook getest. We hebben ook een aantal nieuwe functionaliteiten toegevoegd die we zelf hadden bedacht.",
    timestamp: "17/03/25 - 21/03/25",
  },"week-10": {
    title: "Week 10",
    content: "Week 10 was een week waaraan we aan het 2de project hebben gewerkt 'Centerfield'. Dit project is een interne HR-tool die we hebben gemaakt voor de HR-afdeling.",
    subcontent:
      "Het doel van het Centerfield project is om een tool te maken die de HR-afdeling helpt bij het beheren van de medewerkers. Het grote verschil tussen Centerfield en Tia4Me is dat Centerfield al een bestaand project is dat we moeten verbeteren. We hebben een aantal schermen moeten maken om de on- en offboarding taken te beheren.",
    timestamp: "07/04/25 - 11/04/25",
  },"week-11": {
    title: "Week 11",
    content: "Gedurende week 11 hebben we weer terug aan Tia4Me gewerkt. We hebben een aantal nieuwe functionaliteiten toegevoegd waarnaar gevraagd werd. Dit omvat het toevoegen van een nieuw scherm en het verbeteren van enkele bestaande schermen.",
    subcontent:
      "We zijn veel moeten swappen tussen projecten omdat we ook aan Centerfield moesten werken. Dit was een behoorlijke uitdaging omdat we niet veel tijd hadden om ons in te werken in de nieuwe functionaliteiten. We hebben dit opgelost door een goede planning te maken en de tijd goed te verdelen.",
    timestamp: "14/04/25 - 18/04/25",
  },"week-12": {
    title: "Week 12",
    content: "Week 12 was weer een week waar er veel geswitched werd tussen projecten. We hebben een aantal nieuwe functionaliteiten toegevoegd aan Centerfield en Tia4Me.",
    subcontent:
      "Het switchen tussen projecten is een behoorlijke uitdaging omdat we niet veel tijd hebben om ons in te werken in de nieuwe functionaliteiten. We hebben dit opgelost door een goede planning te maken en de tijd goed te verdelen. We hebben ook een aantal nieuwe schermen moeten maken voor Centerfield.",
    timestamp: "14/04/25 - 18/04/25",
  },"week-13": {
    title: "Week 13",
    content: "Week 13 en het tia4me project is eindelijk afgerond. We hebben de laatste functionaliteiten toegevoegd en de laatste bugs opgelost.",
    subcontent:
      "Het werken aan een bestaande project brengt andere uitdagingen met zich mee. Persoonlijk vind ik het moeilijker om een bestaand project te verbeteren dan om een nieuw project te maken. Dit komt omdat je niet altijd weet wat de bedoeling is van de functionaliteiten die al bestaan. We hebben dit opgelost door veel te overleggen met onze collega's en mentor.",
    timestamp: "14/04/25 - 18/04/25",
  },
};

export default blogData;
