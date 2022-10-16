import React from "react";
import InputButton from "../../../../components/InputButton";
import UserPost from "../../../../components/UserPost";

import styles from "./Request.module.css";

export default function Request() {
  return (
    <div className={styles.root}>
      <UserPost sender={false}>
        <div className={styles.footer}>
          <InputButton text="ACCEPT" />
          <InputButton text="DECLINE" />
        </div>
      </UserPost>
    </div>
  );
}
