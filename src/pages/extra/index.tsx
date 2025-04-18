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
        <li>Tia 4 Me</li>
        <li>Interne HR Tool</li>
      </ul>
      <p  className={styles.paragraph}>
        Het 4me-Tia-project vereist de ontwikkeling van APEX-schermen om
        beheertaken te vergemakkelijken. Deze schermen zijn essentieel voor
        beheerders om alle benodigde gegevens te configureren via een intuïtieve
        en gebruiksvriendelijke interface. Er worden meerdere schermen gemaakt
        om de configuratie van verschillende instellingen te ondersteunen. Het
        was zeker een uitdaging om samen met Shreejan de meeste funtionaliteit
        van Oracle Apex uit te zoeken aangezien we maar 1 dag opleiding hierover
        kregen.
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
        Het vetrouwd geraken met de systemen was een van de grootste
        uitdagingen. Voor elk nieuw onderdeel kregen we een collega toegewezen
        die ons hielp hiermee vertrouwd te geraken. Het feit dat ik met een
        Macbook moest werken was ook even een uitdaging.
      </p>
      <p>De systemen waren :</p>
      <ul>
        <li>Het intranet van Fieldside</li>
        <li>Phishing Academy</li>
        <li>Alle conventies</li>
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
