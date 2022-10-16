import { Link } from "react-router-dom";

import styles from "./Logo.module.css";

import { paths } from "../../data/paths";

export default function Logo() {
  return (
    <Link className={styles.root} to={paths.home}>
      hitch_hike
    </Link>
  );
}
