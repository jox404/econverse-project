import styles from "../../styles/partners.module.scss";
import { Button } from "../";
import partnersBg from "../../assets/images/image 45.png";

type PartnersProps = {
  width: number;
  height: number;
};

export default function Partners(props: PartnersProps) {
  const { width, height } = props;
  return (
    <div>
      <div
        className={styles.partners}
        style={{
          backgroundImage: `url("${partnersBg}")`,
          width: width,
          height: height,
        }}
      >
        <div>
          <p>Parceiros</p>
          <p>Lorem ipsum dolor sit amet, consectetur</p>
          <Button
            width={131}
            heigth={48}
            style={{ fontWeight: 900, fontSize: 16 }}
          >
            CONFIRA
          </Button>
        </div>
      </div>
      <div className={styles.bgShadow} />
    </div>
  );
}
