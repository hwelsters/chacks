import React from "react";
import InputButton from "../../../../components/InputButton";
import UserPost from "../../../../components/UserPost";

import styles from "./Request.module.css";

export default function Request({ text, bonk, index }: any) {
  return (
    <div className={styles.root}>
      <UserPost username="pickuper" sender={false} text={text}>
        <div className={styles.footer}>
          <InputButton text="ACCEPT" onClick={() => bonk(index)} />
          <InputButton text="DECLINE" onClick={() => bonk(index)} />
        </div>
      </UserPost>
    </div>
  );
}
