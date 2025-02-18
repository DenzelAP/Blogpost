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
          <a href="https://contribute.be" className={styles.internship} target="_blank">Contribute</a>
        </div>
      </main>
      <main className={styles.mainRight}>
        <div className={styles.learnMore}></div>
      </main>
    </div>
  );
};

export default About;
