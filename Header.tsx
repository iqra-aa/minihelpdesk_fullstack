import styles from "../App.module.css";

function Header() {
  return (
    <header
      className={styles.header}
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className={styles.logo}
        style={{
          position: "absolute",
          left: "20px",
        }}
      >
        MH
      </div>

      <div
        className={styles.headerTitles}
        style={{
          textAlign: "center",
        }}
      >
        <h2>MiniHelpDesk</h2>
        <p className={styles.subheading}>
          Your solution to problems
        </p>
      </div>
    </header>
  );
}

export default Header;