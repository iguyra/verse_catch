import styles from "./skills.module.css";

function Skills() {
  return (
    <div className={styles.skills} id="skills">
      <div className={styles.skillsHeader}>skills & counting</div>
      <p className={styles.knowledgeDes}>
        ***Take these as the ingridients & the <b>projects</b> as the soup.
      </p>
      <ul data-aos="fade-up" className={styles.skillsContainer}>
        <div className={styles.skillsItems}>
          <li className={styles.head}>
            <p>DATABASE</p>
          </li>

          <li className={styles.skillsList}>
            <p>MongoDb</p>
          </li>
          <li className={styles.skillsList}>
            <p>Postgres</p>
          </li>
          <li className={styles.skillsList}>
            <p>Supabase</p>
          </li>
        </div>
        <div data-aos="fade-up" className={styles.skillsItems}>
          <li className={styles.head}>
            <p>FRAMEWORKS</p>
          </li>
          <li className={styles.skillsList}>
            <p>Nextjs</p>
          </li>

          <li className={styles.skillsList}>
            <p>Reactjs</p>
          </li>

          <li className={styles.skillsList}>
            <p>Expressjs</p>
          </li>
        </div>
        <div data-aos="fade-up" className={styles.skillsItems}>
          <li className={styles.head}>
            <p>BACKEND</p>
          </li>
          <li className={styles.skillsList}>
            <p>Nodejs</p>
          </li>
          <li className={styles.skillsList}>
            <p>Django</p>
          </li>
        </div>
        <div data-aos="fade-up" className={styles.skillsItems}>
          <li data-aos="fade-up" className={styles.head}>
            <p>LANGUAGES</p>
          </li>

          <li className={styles.skillsList}>
            <p>Python</p>
          </li>

          <li className={styles.skillsList}>
            <p>JavaScript</p>
          </li>
        </div>
        <div data-aos="fade-up" className={styles.skillsItems}>
          <li className={styles.head}>
            <p>BROKERS/TASKS QUEUES</p>
          </li>
          <li className={styles.skillsList}>
            <p>Redis </p>
          </li>
          <li className={styles.skillsList}>
            <p>Celery </p>
          </li>

          <li className={styles.skillsList}>
            <p>BullMQ</p>
          </li>
        </div>
        <div data-aos="fade-up" className={styles.skillsItems}>
          <li className={styles.head}>
            <p>WEB SOCKETS</p>
          </li>

          <li className={styles.skillsList}>
            <p>Socket-io</p>
          </li>
          <li className={styles.skillsList}>
            <p>Websockets</p>
          </li>

          <li className={styles.skillsList}>
            <p>Django Channels</p>
          </li>
        </div>
        <div data-aos="fade-up" className={styles.skillsItems}>
          <li className={styles.head}>
            <p>DEVOPS</p>
          </li>
          <li className={styles.skillsList}>
            <p>CI/CD</p>
          </li>

          <li className={styles.skillsList}>
            <p>Docker</p>
          </li>
        </div>
        <div data-aos="fade-up" className={styles.skillsItems}>
          <li className={styles.head}>
            <p>ORMS</p>
          </li>

          <li className={styles.skillsList}>
            <p>Mongoose</p>
          </li>
          <li className={styles.skillsList}>
            <p>Django orm</p>
          </li>
        </div>
        <div data-aos="fade-up" className={styles.skillsItems}>
          <li className={styles.head}>
            <p>MOBILE</p>
          </li>

          <li className={styles.skillsList}>
            <p>React Native</p>
          </li>
        </div>
        <div data-aos="fade-up" className={styles.skillsItems}>
          <li className={styles.head}>
            <p>WEB SERVERS</p>
          </li>

          <li className={styles.skillsList}>
            <p> {"<Nginx />"}</p>
          </li>
        </div>

        <div data-aos="fade-up" className={styles.skillsItems}>
          <li className={styles.head}>
            <p>PAYMENT INTEGRATIONS</p>
          </li>

          <li className={styles.skillsList}>
            <p>Stripe </p>
          </li>
          <li className={styles.skillsList}>
            <p>Paystack </p>
          </li>
          <li className={styles.skillsList}>
            <p>Flutterwave</p>
          </li>
        </div>

        <div data-aos="fade-up" className={styles.skillsItems}>
          <li className={styles.head}>
            <p>TESTING</p>
          </li>

          <li className={styles.skillsList}>
            <p>Jest </p>
          </li>

          <li className={styles.skillsList}>
            <p> Unittest</p>
          </li>

          <li className={styles.skillsList}>
            <p>Webtest</p>
          </li>
        </div>

        <div data-aos="fade-up" className={styles.skillsItems}>
          <li className={styles.head}>
            <p>HOSTING PLATFORMS</p>
          </li>
          <li className={styles.skillsList}>
            <p>Vercel </p>
          </li>

          <li className={styles.skillsList}>
            <p>Heroku </p>
          </li>

          <li className={styles.skillsList}>
            <p>Railway </p>
          </li>
          <li className={styles.skillsList}>
            <p>Godaddy</p>
          </li>
          <li className={styles.skillsList}>
            <p>AWS (ec2)</p>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default Skills;
