import Form from "../Form/Form";

import styles from "./footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <Form />

        <div className={styles.container}>
          <div className={styles.footerSocials}>
            <li>
              <a href="https://github.com/iguyra">
                <img src={"static/hub.png"} alt="" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/prestonxa/">
                <img src={"static/lin.png"} alt="" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/guyrabot_">
                <img src={"static/twi.png"} alt="" />
              </a>
            </li>
          </div>
          <div className={styles.reserved}>GUYRA</div>
        </div>
      </div>
      <p className={styles.message}>i build this with NextJs and CSS ❤️</p>
    </>
  );
};

export default Footer;
