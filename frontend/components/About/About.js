import { useRef, useState } from "react";

import MovinfSKills from "../MovingSkills/MovingSkills";
import styles from "./About.module.css";

import ParticlesBackground from "../ParticlesBackground/ParticlesBackground";

function About() {
  const [visible, setVisible] = useState(false);

  const menuRef = useRef(null);

  const openMenu = () => {
    setVisible(!visible);
    scrollToView();
  };

  function scrollToView() {
    menuRef.current.scrollIntoView({ behavior: "smooth" });
  }

  const scroll = (type) => {
    if (type === "skills") {
      const section = document.querySelector("#skills");
      section.scrollIntoView({ behavior: "smooth" });
    } else if (type === "knowledge") {
      const section = document.querySelector("#knowledge");
      section.scrollIntoView({ behavior: "smooth" });
    } else if (type === "contact") {
      const section = document.querySelector("#contact");
      section.scrollIntoView({ behavior: "smooth" });

      setVisible(false);
    } else if (type === "projects") {
      const section = document.querySelector("#projects");
      section.scrollIntoView({ behavior: "smooth" });

      setVisible(false);
    }
  };

  const menu = visible ? `${styles.menu} ${styles.menuVisible}` : styles.menu;

  return (
    <div className={styles.header}>
      <ParticlesBackground />
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <img
            data-aos="flip-right"
            data-aos-duration="2000"
            className={styles.image}
            src={"static/ra.png"}
            alt=""
          />
        </div>

        <div className={styles.rowBottom}>
          <div ref={menuRef} style={styles.aboutBottom}>
            <div className={styles.bottomContainer}>
              <div className={styles.who}>
                <div className={styles.bottomDeeds}>
                  {" < software engineer /> "}
                </div>
                <div className={styles.name}>Preston A.</div>
              </div>

              <div className={styles.description}>
                <MovinfSKills />
              </div>
            </div>
          </div>
          <div className={styles.menuContainer}>
            <ul className={styles.menuListContainer}>
              <li
                onClick={() => scroll("knowledge")}
                className={styles.menuList}
              >
                knowledge
              </li>
              <li onClick={() => scroll("skills")} className={styles.menuList}>
                skills
              </li>

              <li
                onClick={() => scroll("projects")}
                className={styles.menuList}
              >
                projects
              </li>
              <li onClick={() => scroll("contact")} className={styles.menuList}>
                contact
              </li>
            </ul>
          </div>
        </div>
        <div className={menu}>
          <button onClick={() => openMenu()} className={styles.menubutton}>
            <img className={styles.image} src={"static/menu.png"} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
