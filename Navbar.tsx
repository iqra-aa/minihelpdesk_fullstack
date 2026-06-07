import { Link } from "react-router-dom";
import styles from "../App.module.css";

type Props = {
  onLogout: () => void;
};

function Navbar({ onLogout }: Props) {
  return (
    <nav className={styles.navbar}>
      <Link to="/">Tickets</Link>

      <Link to="/create">New Ticket</Link>

      <button
        onClick={onLogout}
        style={{
          marginLeft: "10px",
          cursor: "pointer",
        }}
      >
        Logout
      </button>
    </nav>
  );
}

export default Navbar;