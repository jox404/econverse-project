import styles from "../../styles/button.module.scss";
import { ButtonProps } from "../../types";

export default function Button(props: ButtonProps) {
  const { children, style, heigth, width, onClick } = props;
  return (
    <button
      className={styles.button}
      style={{ ...style, width: width, height: heigth }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
