import styles from "../../styles/partnersList.module.scss";
import { Partners } from "../";

type PartnersProps = {
  width: number;
  height: number;
};

export default function PartnersList(props: PartnersProps) {
  const { width, height } = props;
  return (
    <div className={styles.partnersList}>
      <Partners width={width} height={height} />
      <Partners width={width} height={height} />
    </div>
  );
}
