import styles from "./Knowledge.module.css";

function Knowledge() {
  return (
    <div id="knowledge" className={styles.knowledge}>
      <div className={styles.knowledgeHeader}>Knowledge</div>
      <ul className={styles.KnowledgeContainer}>
        {/* <li className={styles.knowledgeList}>
          <div className={styles.imgContainer}>
            <img src={"static/rn.png"} alt="" />
          </div>
          <div className={styles.knowledgeside}>
            <p className={styles.knowledgeTitle}>Mobile Development</p>
            <p className={styles.knowledgeDes}>
              Modern Mobile Apps using React Native.
            </p>
          </div>
        </li> */}
        <li className={styles.knowledgeList}>
          <div data-aos="fade-right" className={styles.imgContainer}>
            <img src={"static/aws.png"} alt="" />
          </div>
          <div data-aos="fade-up" className={styles.knowledgeside}>
            <p className={styles.knowledgeTitle}>AWS Cloud Platform</p>
            <p className={styles.knowledgeDes}>
              Development and deployment of secure and highly scalable cloud
              infastructure on Amazon Web Services(AWS) using{" "}
              <b>Docker and Docker Compose </b>
              for containerization and orchestration.
            </p>
          </div>
        </li>
        <li className={styles.knowledgeList}>
          <div data-aos="fade-right" className={styles.imgContainer}>
            <img src={"static/js.png"} alt="" />
          </div>
          <div data-aos="fade-up" className={styles.knowledgeside}>
            <p className={styles.knowledgeTitle}>WebApp Development</p>
            <p className={styles.knowledgeDes}>
              Modern and responsive web applications with the latest
              technologies like <b>React and NextJs </b>
            </p>
          </div>
        </li>

        <li className={styles.knowledgeList}>
          <div data-aos="fade-right" className={styles.imgContainer}>
            <img src={"static/be.png"} alt="" />
          </div>
          <div data-aos="fade-up" className={styles.knowledgeside}>
            <p className={styles.knowledgeTitle}>Backend Development</p>
            <p className={styles.knowledgeDes}>
              Highly secure and scalable backend applications with{" "}
              <b>Nodejs, ExpressJs and Django </b>
            </p>
          </div>
        </li>

        <li className={styles.knowledgeList}>
          <div data-aos="fade-right" className={styles.imgContainer}>
            <img src={"static/dbb.png"} alt="" />
          </div>
          <div data-aos="fade-up" className={styles.knowledgeside}>
            <p className={styles.knowledgeTitle}>Database Expect</p>
            <p className={styles.knowledgeDes}>
              Professional experience in <b>NoSQL and Mysql</b> databases like{" "}
              <b>PostgreSQL and MongoDB</b>
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Knowledge;
