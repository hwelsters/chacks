import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import Logo from "../../components/Logo";

import styles from "./Navbar.module.css";

import { paths } from "../../data/paths";
import Searchbar from "../../components/Searchbar";
import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";

export default function Navbar() {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className={styles.root}>
      <Logo />
      {user ? (
        <>
          
          <Link to={paths.dashboard}>
            <div className={styles.button}>DASHBOARD</div>
          </Link>
          <Link to={paths.profile}>
            <div className={styles.button}>PROFILE</div>
          </Link>
        </>
      ) : (
        <>
          <Link to={paths.login}>
            <div className={styles.button}>SIGN IN</div>
            <div className={styles.icon}>
              <AccountCircleIcon />
            </div>
          </Link>
        </>
      )}
    </div>
  );
}
