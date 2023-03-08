import styles from "../../styles/serviceCard.module.scss";

type CardProps = {
  icon: string;
  name: string;
};

export default function ServiceCard(props: CardProps) {
  const { icon, name } = props;
  return (
    <div className={styles.serviceCard}>
      <div className={styles.card}>
        <img className={styles.selected} src={icon} alt={name} />
      </div>
      <div>
        <p>{name}</p>
      </div>
    </div>
  );
}
