import SkillsSlideshow from "@/components/SkillsSlideshow";
import styles from "@/styles/Home.module.css";

const About = () => {
  return (
    <div className={styles.main}>
      <main className={styles.mainLeft}>
        <div className={styles.imgContainer}>
          <img src="/itsme.jpeg" alt="itsa mee" className={styles.myImage} />
        </div>
        <div>
          <h1>Hi my name is Denzel,</h1>
          <p>
            and I'm a fullstack developer, experienced in the following tech
            stack :
          </p>
          <SkillsSlideshow />
          <h2>I'm currently in the midst of my internship, working hard for</h2>
          <a
            href="https://contribute.be"
            className={styles.internship}
            target="_blank"
          >
            Contribute
          </a>
        </div>
      </main>
      <div className={styles.extraInfo}>
        <h2>More lore about me</h2>
        <p>
          2022, is het jaar dat ik besloot om een carriere-switch te maken om
          een beroep te vinden dat beter aansluit bij zijn passie.
        </p>
        <p>
          Met een sterke motivatie om te groeien en een impact te maken, koos ik
          ervoor om programmeren te gaan studeren.
        </p>
        <p>
          Mijn eerdere jaren werkervaring in diverse functies hebben me
          waardevolle vaardigheden opgeleverd.
        </p>
        <p>
          Deze kwaliteiten combineer ik nu met mijn technische kennis om mezelf
          verder te ontwikkelen in de wereld van software development.
        </p>
      </div>
      <div className={styles.socialLinks}>
        <a
          href="https://www.linkedin.com/in/denzel-bruckenburg-4218062a0/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/4-1.png" alt="linkedIn logo" height={50} width={50}/>
        </a>
      </div>
    </div>
  );
};

export default About;
