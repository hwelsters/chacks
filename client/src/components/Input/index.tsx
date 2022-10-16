import styles from "./Input.module.css";

type InputParams = {
  text: string;
  type: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

export default function Input({ text, type, onChange }: InputParams) {
  return (
    <div className={styles.root}>
      <label>{text}</label>
      <input className={styles.input} type={type} onChange={onChange} />
    </div>
  );
}
