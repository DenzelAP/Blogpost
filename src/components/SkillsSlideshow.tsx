import React, { useEffect, useState } from 'react';
import styles from "@/styles/Slideshow.module.css";

const skills = [
  'React',
  'TypeScript',
  'JavaScript',
  'C#',
  'ASP.NET Core',
  'Node.js',
  'Express.js',
  'EJS',
  'Storybook',
  'Styled Components',
  'Oracle Apex',
  'SQL',
  'PL/SQL'
];

const SkillsSlideshow: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }, 1000); // Change every 2 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.skillsSlideshow}>
      <div className={styles.slideshow}>
        <h2 className={styles.skillText}>{skills[currentIndex]}</h2>
      </div>
    </div>
  );
};

export default SkillsSlideshow;
