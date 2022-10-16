import styles from "./InputButton.module.css";

type InputButtonParams = {
  text: string | React.ReactNode;
  onClick?: any;
};

export default function InputButton({ text, onClick }: InputButtonParams) {
  return (
    <div className={styles.root} onClick={onClick}>
      {text}
    </div>
  );
}
