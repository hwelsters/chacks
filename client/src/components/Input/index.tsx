import styles from "./Input.module.css";

type InputParams = {
    text: string,
    type: string
}

export default function Input({text, type} : InputParams) {
  return (
    <div className={styles.root}>
        <label>{text}</label>
        <input className={styles.input} type={type}/>
    </div>
  )
}
