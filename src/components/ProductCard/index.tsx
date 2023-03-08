import styles from "../../styles/productCard.module.scss";
import { Product } from "../../types";
import Button from "../Button";

export default function ProductCard(props: Product) {
  const { descriptionShort, photo, price, productName, openModal } = props;
  var priceFormated = price.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
  return (
    <div className={styles.productCard}>
      <div>
        <img src={`${photo}`} alt="" />
      </div>

      <h1>{productName}</h1>

      <p>{priceFormated}</p>

      <p>{priceFormated}</p>

      <p>ou 2x de R$ 49,95 sem juros</p>

      <p>Frete grátis</p>

      <Button
        width={"100%"}
        heigth={44}
        style={{ fontWeight: 700, fontSize: 14 }}
        onClick={openModal}
      >
        COMPRAR
      </Button>
    </div>
  );
}
