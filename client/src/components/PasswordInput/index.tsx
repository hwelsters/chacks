import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

import styles from "./PasswordInput.module.css";

type PasswordInputParams = {
  text: string;
  onChange?: any
};
export default function PasswordInput({ text, onChange }: PasswordInputParams) {
  const [passwordShown, setPasswordShown] = useState(false);
  return (
    <div className={styles.root}>
      <label>{text}</label>
      <div className={styles.input}>
        <input
          className={styles.innerInput}
          type={passwordShown ? "text" : "password"}
          onChange={onChange}
        />
        <div className={styles.eye} onClick={() => setPasswordShown(!passwordShown)}>
          {passwordShown ? <VisibilityIcon /> : <VisibilityOffIcon />}
        </div>
      </div>
    </div>
  );
}
