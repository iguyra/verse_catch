import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <header className={styles.headerContainer}>
        <div data-aos="zoom-out-down" className={styles.name}>
          <div className={styles.nameInitial}>.A.</div>
          {/* Preston A. */}
        </div>
        <div className={styles.menuContainer}>
          <img className={styles.menu} src={"static/weber.png"} alt="" />
        </div>
      </header>
    </div>
  );
}

export default Header;
