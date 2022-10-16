import InputButton from "../InputButton";
import styles from "./RequestInput.module.css";

export default function TextArea() {
  return (
    <div className={styles.root}>
      <div className={styles.input}>
        <textarea className={styles.textarea}/>
        <InputButton text="SUBMIT"/>
      </div>
    </div>
  );
}
