import styles from "../../styles/offersPanel.module.scss";
import { Button } from "../index";
import bgImage from "../../assets/images/Rectangle 250.png";

export default function OffersPanel() {
  return (
    <>
      <div className={styles.offersPanel}>
        <div className={styles.container}>
          <h1>Venha conhecer nossas promoções</h1>
          <h2>50% Off nos produtos </h2>
          <Button
            width={227}
            heigth={60}
            style={{ fontWeight: 600, fontSize: 18 }}
          >
            Ver produto
          </Button>
        </div>
      </div>
      <div
        className={styles.bgImage}
        style={{ backgroundImage: `url("${bgImage}")` }}
      ></div>
    </>
  );
}
