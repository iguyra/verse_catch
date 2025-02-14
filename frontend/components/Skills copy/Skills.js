import styles from "./skills.module.css";

function Skills() {
  return (
    <div className={styles.skills} id="skills">
      <div className={styles.skillsHeader}>skills & counting</div>
      <p className={styles.knowledgeDes}>
        ***Take these as the ingridients & the <b>projects</b> as the soup.
      </p>
      <ul className={styles.skillsContainer}>
        <li data-aos="fade-up" className={styles.skillsList}>
          <p>DATABASE</p>
        </li>
        <li data-aos="fade-up" className={styles.skillsList}>
          <p>Git</p>
        </li>
        <li data-aos="fade-up" className={styles.skillsList}>
          <p>CI / CD</p>
        </li>
        <li data-aos="fade-up" className={styles.skillsList}>
          <p>Celery</p>
        </li>

        <li data-aos="fade-up" className={styles.skillsList}>
          <p>Nodejs</p>
        </li>

        <li data-aos="fade-up" className={styles.skillsList}>
          <p> {"<Nginx />"}</p>
        </li>

        <li data-aos="fade-up" className={styles.skillsList}>
          <p>Docker</p>
        </li>

        <li data-aos="fade-up" className={styles.skillsList}>
          <p>Reactjs</p>
        </li>
        <li data-aos="fade-up" className={styles.skillsList}>
          <p>Nextjs</p>
        </li>
        <li data-aos="fade-up" className={styles.skillsList}>
          <p>Postgres</p>
        </li>
        <li data-aos="fade-up" className={styles.skillsList}>
          <p>Python</p>
        </li>

        <li data-aos="fade-up" className={styles.skillsList}>
          <p>Expressjs</p>
        </li>

        <li data-aos="fade-up" className={styles.skillsList}>
          <p>Django</p>
        </li>

        <li data-aos="fade-up" className={styles.skillsList}>
          <p>JavaScript</p>
        </li>

        <li data-aos="fade-up" className={styles.skillsList}>
          <p>Socket-io</p>
        </li>
        <li data-aos="fade-up" className={styles.skillsList}>
          <p>Websockets</p>
        </li>

        <li data-aos="fade-up" className={styles.skillsList}>
          <p>React Native</p>
        </li>

        <li data-aos="fade-up" className={styles.skillsList}>
          <p>Django Channels</p>
        </li>
        <li data-aos="fade-up" className={styles.skillsList}>
          <p>MongoDb/Mongoose</p>
        </li>
      </ul>
    </div>
  );
}

export default Skills;
