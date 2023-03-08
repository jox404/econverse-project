import React from "react";
import styles from "../../styles/iconButton.module.scss";

type IconButtonProps = {
  icon: string;
  width?: number;
  height?: number;
  onClick?: any;
};

export default function IconButton(props: IconButtonProps) {
  const { icon, onClick } = props;
  return (
    <button className={styles.iconButton} onClick={onClick}>
      <img src={icon} alt="" />
    </button>
  );
}
