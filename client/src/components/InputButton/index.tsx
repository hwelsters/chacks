import styles from "./InputButton.module.css";

type InputButtonParams = {
    text: string
}

export default function InputButton({text} : InputButtonParams) {
  return (
    <div className={styles.root}>{text}</div>
  )
}
