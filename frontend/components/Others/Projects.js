import styles from "./Projects.module.css";

function Projects() {
  return (
    <div id="projects" className={styles.projects}>
      <div id="knowledge" className={styles.knowledge}>
        <div className={styles.knowledgeHeader}>Some other projects</div>

        <ul className={styles.KnowledgeContainer}>
          <li className={styles.knowledgeList}>
            <div data-aos="fade-right" className={styles.imgContainer}>
              <img src={"static/pb.png"} alt="" />
            </div>
            <div data-aos="fade-up" className={styles.knowledgeside}>
              <p className={styles.knowledgeTitle}>
                <a href="https://phonebook-navy.vercel.app/">Phonebook</a>
              </p>
              <p className={styles.knowledgeDes}>
                stack: nextjs, nodejs, expressjs, MongoDb, sass
              </p>
            </div>
          </li>

          <li className={styles.knowledgeList}>
            <div data-aos="fade-right" className={styles.imgContainer}>
              <img src={"static/tg.png"} alt="" />
            </div>
            <div data-aos="fade-up" className={styles.knowledgeside}>
              <p className={styles.knowledgeTitle}>
                <a href="https://typing-game-two-kappa.vercel.app/">
                  typing game
                </a>
              </p>
              <p className={styles.knowledgeDes}>html, css, javascript</p>
            </div>
          </li>

          <li className={styles.knowledgeList}>
            <div data-aos="fade-right" className={styles.imgContainer}>
              <img src={"static/bout.png"} alt="" />
            </div>
            <div data-aos="fade-up" className={styles.knowledgeside}>
              <p className={styles.knowledgeDes}>pc only </p>

              <p className={styles.knowledgeTitle}>
                <a href="https://breakout-game-six.vercel.app/">
                  breakout game
                </a>
              </p>
              <p className={styles.knowledgeDes}>html, css, javascript</p>
            </div>
          </li>

          <li className={styles.knowledgeList}>
            <div data-aos="fade-right" className={styles.imgContainer}>
              <img src={"static/hm.png"} alt="" />
            </div>
            <div data-aos="fade-up" className={styles.knowledgeside}>
              <p className={styles.knowledgeDes}>pc only</p>

              <p className={styles.knowledgeTitle}>
                <a href="https://hangman-beta-sand.vercel.app/">
                  Hang man game
                </a>
              </p>
              <p className={styles.knowledgeDes}>html, css, javascript</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Projects;
