import styles from "./Projects.module.css";

function Projects() {
  return (
    <div id="projects" className={styles.projects}>
      <div id="knowledge" className={styles.knowledge2}>
        <div className={styles.knowledgeHeader}>Some projects</div>
        <p className={styles.knowledgeDes}>***Some soups </p>
        <ul className={styles.KnowledgeContainer}>
          <li className={styles.knowledgeList2}>
            <div className={styles.imgContainer2}>
              <img src={"static/g1.png"} alt="" />
            </div>
            <div data-aos="fade-up" className={styles.knowledgeside}>
              <p className={styles.knowledgeTitle}>
                <a href="https://shop.inlineplus.com">
                  Multi vendor ecommerce store
                </a>
              </p>
              <p className={styles.knowledgeDes}>
                stack: nextjs, nodejs, expressjs, mongoDb,cron job, sass/css
                <br />
                <b>BullMQ and Redis</b> for background tasks eg. sending email.
              </p>

              <p className={styles.knowledgeDes}>How it works</p>
              <p className={styles.knowledgeDes}>
                1. Allows vendors to register and a shop is automaticaly created
                for <br /> every registered vendor
              </p>

              <p className={styles.knowledgeDes}>
                2. Vendors can change shop names, shop pofile pitures, banners
                etc
              </p>

              <p className={styles.knowledgeDes}>
                3. Vendors can add and update their shop policies
              </p>

              <p className={styles.knowledgeDes}>
                4. Vendors can add custom product categories
              </p>

              <p className={styles.knowledgeDes}>
                5. Shops can be followed by their favourite users
              </p>

              <p className={styles.knowledgeDes}>
                6. Product recommendations are tailored to users based on the{" "}
                <br /> products they have previously viewed.
              </p>

              <div className="features">
                <ul>
                  <li></li>
                </ul>
              </div>
            </div>
          </li>

          <li className={styles.projectListColumn}>
            <div data-aos="fade-up" className={styles.knowledgeside}>
              <p className={styles.knowledgeTitle}>
                <a href="https://digimage.vercel.app">
                  DIG IMAGE (FACIAL RECOGNITION)
                </a>
              </p>

              {/* <img src={"static/digimage.png"} alt="" /> */}

              <p className={styles.knowledgeDes}>
                stack: docker, nextjs, django, postgres, celery, redis, facial
                recognition, Deep Learning Model, numpy, cv2.
              </p>
              <p className={styles.knowledgeDes}>How it works</p>
              <p className={styles.knowledgeDes}>
                1. it detects and extract the faces in the images using cv2 and
                pre-trained <br /> Cascade classifier
              </p>
              <p className={styles.knowledgeDes}>
                2. The extracted faces are then compared using Deep Learning
                Model, <br /> facial recognition and numpy to determine the best
                match index
              </p>
              <p className={styles.knowledgeDes}>
                2. Build the server with Django, Postgres,Celery, Redis, and is
                deployed with docker on northflank
              </p>

              <p className={styles.knowledgeDes}>
                3. The database, Postgres, is hosted on supabase
              </p>

              <p className={styles.knowledgeDes}>
                4. Redis is hosted on redislabs
              </p>

              <p className={styles.knowledgeDes}>
                5. Implemented the task/background worker using celery, redis,{" "}
                <br />
                django, postgres and is also hosted on northflank. <br />
                The worker handles the execution of the tasks.
              </p>

              <div className={styles.knowledgeDes}>
                <p className={styles.knowledgeTitle}>
                  <a href="https://digimage.vercel.app">WATCH HOW IT WORKS</a>
                </p>
                <ul>
                  <video width="100%" controls autoPlay muted loop playsInline>
                    <source src="/static/video/dig.webm" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </ul>
              </div>
            </div>
          </li>

          <li className={styles.knowledgeList}>
            <div data-aos="fade-right" className={styles.imgContainer}>
              <img src={"static/prio.png"} alt="" />
            </div>
            <div data-aos="fade-up" className={styles.knowledgeside}>
              <p className={styles.knowledgeTitle}>
                <a href="https://codeinkk.vercel.app">Web development agency</a>
              </p>
              <p className={styles.knowledgeDes}>
                stack: nextjs + nextjs api, sass/css etc
              </p>
            </div>
          </li>

          <li className={styles.knowledgeList}>
            <div data-aos="fade-right" className={styles.imgContainer}>
              <img src={"static/inline.png"} alt="" />
            </div>
            <div data-aos="fade-up" className={styles.knowledgeside}>
              <p className={styles.knowledgeTitle}>
                <a href="https://vehicles.inlineplus.com">
                  Multi vendor vehicles distribution store
                </a>
              </p>
              <p className={styles.knowledgeDes}>
                stack: nextjs, nodejs, expressjs, mongoDb, cron job, sass/css
                etc <br />
                <b>BullMQ and Redis</b> for background tasks eg. sending email.
              </p>

              <p className={styles.knowledgeDes}>How it works</p>
              <p className={styles.knowledgeDes}>
                1. Logged in users can chat with car vendors about specific cars{" "}
                <br /> implemented with socket io for live chat and mongoDb for
                data persistency
              </p>

              <p className={styles.knowledgeDes}>
                2. users can follow their favourite car vendors etc.
              </p>
            </div>
          </li>

          {/* <li className={styles.knowledgeList}>
            <div data-aos="fade-right" className={styles.imgContainer}>
              <img src={"static/bt.png"} alt="" />
            </div>
            <div data-aos="fade-up" className={styles.knowledgeside}>
              <p className={styles.knowledgeTitle}>
                <a href="https://quantum-bit.vercel.app/">Bit-mining</a>
              </p>
              <p className={styles.knowledgeDes}>
                stack: nextjs, nodejs, expressjs, mongoDb, sass/css etc
              </p>
            </div>
          </li> */}

          <li className={styles.knowledgeList}>
            <div data-aos="fade-right" className={styles.imgContainer}>
              <img src={"static/beel.png"} alt="" />
            </div>
            <div data-aos="fade-up" className={styles.knowledgeside}>
              <p className={styles.knowledgeTitle}>
                <a href="https://firelock.vercel.app/">
                  Multi vendor ecommerce store
                </a>
              </p>
              <p className={styles.knowledgeDes}>
                stack: nextjs, nodejs, expressjs, mongoDb, sass/css etc
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div id="knowledge" className={styles.knowledge}>
        {/* <div className={styles.knowledgeHeader}>CRM projects</div> */}
        <p className={styles.small_head}>
          <br />
          Some CRM projects
        </p>
        <ul className={styles.KnowledgeContainer}>
          <li className={styles.knowledgeList}>
            <div data-aos="fade-right" className={styles.imgContainer}>
              <img src={"static/bmn.png"} alt="" />
            </div>
            <div data-aos="fade-up" className={styles.knowledgeside}>
              <p className={styles.knowledgeDes}>pc only</p>
              <p className={styles.knowledgeTitle}>
                <a href="https://buukmenow.vercel.app/">CRUD crm dashboard</a>
              </p>
              <p className={styles.knowledgeDes}>
                stack: nextjs, nodejs, expressjs, mongoDb, sass/css etc
              </p>
            </div>
          </li>

          <li className={styles.knowledgeList}>
            <div data-aos="fade-right" className={styles.imgContainer}>
              <img src={"static/ss.png"} alt="" />
            </div>

            <div data-aos="fade-up" className={styles.knowledgeside}>
              <p className={styles.knowledgeDes}>pc only</p>

              <p className={styles.knowledgeTitle}>
                <a href="https://softsuite.vercel.app/">CRUD crm dashboard</a>
              </p>
              <p className={styles.knowledgeDes}>
                stack: react, sass/css, external mockapi
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Projects;
