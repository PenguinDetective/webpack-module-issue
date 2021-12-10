import React from "react";

import styles from "./Button.module.scss";

type ButtonProps = {
  text: string;
};

export function Button(props: ButtonProps) {
  return <button className={styles.banana}>{props.text} XXXXXX</button>;
}
