import styles from "@/styles/Home.module.css";

const Home = () => {
  return (
    <main className={styles.mainHome}>
      <div className={styles.welcomeText}>
        <h1>Welkom bij mijn blogpost</h1>
      </div>
      <div>
        <p>
          Gedurende mijn stage bij Contribute heb ik veel geleerd. Op deze blog
          vind je een overzicht van mijn stage-ervaringen.
        </p>
        <p>
          <span className={styles.pinkWord}>Cronos</span> is een grote Belgische
          IT-groep met een clusterstructuur, waarbij bedrijven gegroepeerd
          worden op basis van hun specialisaties.
        </p>
        <p>
          <span className={styles.pinkWord}>Fieldside</span> overkoepelt
          meerdere bedrijven die allemaal een specifieke IT-expertise hebben.
        </p>
        <p>
          <span className={styles.pinkWord}>Contribute</span> is een bedrijf
          binnen de Fieldside-cluster en focust zich op Oracle APEX development.
        </p>
        <div className={styles.logoContainer}>
          <a href="https://www.cronos.be" target="_blank">
            <img
              src="/Cronos-Logo.png"
              alt="Cronos logo"
              width={125}
              height={125}
            />
          </a>

          <a href="https://www.fieldside.be" target="_blank">
            <img
              src="/Fieldside-Logo.png"
              alt="Fieldside logo"
              width={125}
              height={50}
            />
          </a>

          <a href="https://www.contribute.be" target="_blank">
            <img src="/Contribute-NewLogo.png" alt="Contribute logo" />
          </a>
        </div>
      </div>
    </main>
  );
};

export default Home;
