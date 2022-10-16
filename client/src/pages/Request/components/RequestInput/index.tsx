import InputButton from "../../../../components/InputButton";
import styles from "./RequestInput.module.css";

export default function RequestInput() {
  return (
    <div className={styles.root}>
      <h3>Make a request</h3>
      <div className={styles.input}>
        <textarea className={styles.textarea}/>
        <InputButton text="SUBMIT"/>
      </div>
    </div>
  );
}
