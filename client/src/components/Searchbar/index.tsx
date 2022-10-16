import styles from "./Searchbar.module.css";
import { useState } from "react";
import { Select } from "@mantine/core";

import { airportCodes } from "../../data/airports";

export default function Searchbar({ text, onSubmit }: any) {
  const [from, setFrom] = useState<null | string>("");
  const [to, setTo] = useState<null | string>("");

  console.log(onSubmit);
  return (
    <div className={styles.root}>
      From
      <Select
        label=""
        data={airportCodes}
        className={styles.input}
        searchable
        maxDropdownHeight={280}
        onChange={(e) => setFrom(e)}
      />
      To
      <Select
        label=""
        data={airportCodes}
        className={styles.input}
        searchable
        maxDropdownHeight={280}
        onChange={(e) => setTo(e)}
      />
      <div className={styles.button} onClick={() => onSubmit(from, to)}>
        {text}
      </div>
    </div>
  );
}
