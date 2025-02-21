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
    </div>
  );
};

export default Extra;
