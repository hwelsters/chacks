import styles from "./InputButton.module.css";

type InputButtonParams = {
    text: string | React.ReactNode
}

export default function InputButton({text} : InputButtonParams) {
  return (
    <div className={styles.root}>{text}</div>
  )
}
