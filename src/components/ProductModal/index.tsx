import styles from "../../styles/productModal.module.scss";
import { close } from "../../assets/icons/";
import { IconButton } from "../";
import { Product } from "../../types";

export default function ProductModal(props: {
  closeModal: any;
  dataModal: Product | undefined;
}) {
  const { closeModal, dataModal } = props;
  var priceFormated = dataModal?.price.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
  return (
    <div className={styles.productModal}>
      <div>
        <IconButton icon={close} onClick={closeModal}></IconButton>
      </div>
      <div>
        <img src={`${dataModal?.photo}`} alt="" />

        <div>
          <h1>{dataModal?.productName}</h1>
          <h2>{priceFormated}</h2>
          <p>
            Many desktop publishing packages and web page editors now many
            desktop publishing
          </p>
          <a href="#">{`Veja mais detalhes do produto >`}</a>
        </div>
      </div>
    </div>
  );
}
