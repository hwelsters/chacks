import styles from "./Searchbar.module.css";
import SearchIcon from "@mui/icons-material/Search";

export default function Searchbar() {
  return (
    <div className={styles.root}>
      From
      <input className={styles.input} type="text" />
      To
      <input className={styles.input} type="text" />
      <div className={styles.button}>SEARCH</div>
    </div>
  );
}
