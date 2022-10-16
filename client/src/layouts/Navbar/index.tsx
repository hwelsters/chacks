import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import Logo from "../../components/Logo";

import styles from "./Navbar.module.css";

import { paths } from "../../data/paths";
import Searchbar from "../../components/Searchbar";

export default function Navbar() {
  return (
    <div className={styles.root}>
      <Logo />
      <Searchbar/>
      <Link to={paths.login}>
        <div className={styles.button}>SIGN IN</div>
        <div className={styles.icon}>
          <AccountCircleIcon />
        </div>
      </Link>
    </div>
  );
}
