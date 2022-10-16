import { useState } from "react";
import { paths } from "../../data/paths";
import { post } from "../../services/apiCalls";
import InputButton from "../InputButton";
import styles from "./RequestInput.module.css";

export default function TextArea() {
  const [text, setText] = useState<string>("");

  const handleSubmit = async () => {
    const res = await post("posts/create", { text: text, username: "pickuper" });
    console.log(res);
    let win:Window = window;
    win.location = paths.home;
    window.open(paths.stripe, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={styles.root}>
      <div className={styles.input}>
        <textarea
          className={styles.textarea}
          onChange={(e) => setText(e.target.value)}
        />
        <InputButton text="SUBMIT" onClick={handleSubmit}/>
      </div>
    </div>
  );
}
