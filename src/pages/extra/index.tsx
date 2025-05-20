import styles from "@/styles/Extra.module.css";
import { useState } from "react";

const Extra = () => {
  const [hoverHeading, setHoverHeading] = useState(false);
  const [hoverSubheading, setHoverSubheading] = useState(false);

  return (
    <div className={styles.main}>
      <h2
        className={`${styles.heading} ${
          hoverHeading ? styles.headingHover : ""
        }`}
        onMouseEnter={() => setHoverHeading(true)}
        onMouseLeave={() => setHoverHeading(false)}
      >
        Bijdragen
      </h2>
      <p className={styles.paragraph}>
        Gedurende mijn stage heb ik gewerkt aan verschillende projecten en heb
        ik veel nieuwe vaardigheden geleerd. Hieronder vind je een overzicht van
        mijn stage-ervaringen.
      </p>
      <h3
        className={`${styles.subheading} ${
          hoverHeading ? styles.subheadingHover : ""
        }`}
        onMouseEnter={() => setHoverSubheading(true)}
        onMouseLeave={() => setHoverSubheading(false)}
      >
        Projecten
      </h3>
      <ul>
        <li>Xurrent-Tia</li>
      </ul>
      <p className={styles.paragraph}>
        Xurrent-Tia (voorheen bekend als 4Me-Tia) is het nieuwe platform waarmee
        administratieve medewerkers de gepresteerde uren van alle medewerkers
        centraal kunnen registreren. Voor de komst van dit platform moesten deze
        uren afzonderlijk ingevoerd worden in twee verschillende systemen (4Me
        en Timesheet). Dankzij Xurrent-Tia volstaat het nu om deze registratie
        slechts één keer uit te voeren, wat de efficiëntie en
        gebruiksvriendelijkheid aanzienlijk verhoogt.
      </p>

      <p className={styles.paragraph}>
        Deze applicatie werd door ons van scratch ontwikkeld.
      </p>

      <ul>
        <li>Centerfield</li>
      </ul>

      <p className={styles.paragraph}>
        Centerfield (Ook wel bekend als de HR-tool) is een interne applicatie
        die ontwikkeld wordt om het werk van onze HR-medewerkers en
        coördinatoren te vereenvoudigen. Alle gesprekken die moeten
        plaatsvinden, zoals tussentijdse evaluaties, jaarlijkse gesprekken of
        exitgesprekken, worden via de tool gestroomlijnd. Deze gesprekken worden
        ook doorgestuurd naar de frontoffice: een onderdeel van de applicatie
        waar andere medewerkers toegang toe hebben. Daar kunnen zij al hun
        gesprekken en bijbehorende taken eenvoudig raadplegen. Daarnaast worden
        ook praktische taken die bij een werknemer horen via de applicatie
        beheerd. Denk hierbij aan onboarding- en offboardingtaken, zoals het
        ophalen of inleveren van een badge, laptop of bedrijfswagen. Centerfield
        was al een bestaande applicatie waaraan wij verbeteringen of
        aanpassingen aan moesten brengen.
      </p>

      <p className={styles.paragraph}>
        Centerfield was al een bestaande applicatie waaraan wij verbeteringen of
        aanpassingen aan moesten brengen.
      </p>

      <h3
        className={`${styles.subheading} ${
          hoverHeading ? styles.subheadingHover : ""
        }`}
        onMouseEnter={() => setHoverSubheading(true)}
        onMouseLeave={() => setHoverSubheading(false)}
      >
        Systemen
      </h3>
      <p className={styles.paragraph}>
        Het vetrouwd geraken met de systemen was een grote uitdagingen. Het feit
        dat ik met een Macbook met een qwerty toetsenbord moest werken was ook
        even een uitdaging.
      </p>
      <p>Tech Stack:</p>
      <ul>
        <li>Oracle APEX</li>
        <li>PL/SQL</li>
        <li>Liquibase</li>
      </ul>
      <h3
        className={`${styles.subheading} ${
          hoverHeading ? styles.subheadingHover : ""
        }`}
        onMouseEnter={() => setHoverSubheading(true)}
        onMouseLeave={() => setHoverSubheading(false)}
      >
        Collega's
      </h3>
      <p className={styles.paragraph}>
        De kennismaking met de collega's verliep vlot. Iedereen was heel
        behulpzaam en vriendelijk. Ik kon altijd bij iemand terecht met vragen.
        De sfeer op de werkvloer was goed en ik voelde me snel op mijn gemak.
      </p>
    </div>
  );
};

export default Extra;
