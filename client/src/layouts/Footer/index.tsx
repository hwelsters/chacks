import Logo from "../../components/Logo";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.root}>
        <Logo/>
        <p className={styles.copyright}>ⓒ Copyright by _nvstr, but not really</p>
    </div>
  )
}
