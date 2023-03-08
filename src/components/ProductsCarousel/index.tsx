import styles from "../../styles/productsCarousel.module.scss";
import Slider from "react-slick";
import { ProductCard, ProductModal } from "../index";
import { arrowLeft, arrowRight } from "../../assets/icons";
import { useEffect, useState } from "react";
import fetchProducts from "../../utils/fetchProducts";
import { Product, Arrow } from "../../types";
import Modal from "react-modal";

export default function ProductsCarousel() {
  const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <NextArrow onClick />,
    prevArrow: <PrevArrow onClick />,
  };
  const customStyles = {
    content: {
      width: "769px",
      height: "299px",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#ffffff",
      boderRadius: "0px",
      boder: "none !importante",
    },
    overlay: {
      background: "#00000081",
    },
  };

  const [modalIsOpen, setIsOpen] = useState(false);
  const [dataModal, setDataModal] = useState<Product | undefined>(undefined);

  function openModal(data: Product | undefined) {
    setIsOpen(true);
    setDataModal(data);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [productsList, setProductsList] = useState<Product[]>([]);

  useEffect(() => {
    (async () => {
      const data = await fetchProducts();
      if (data) {
        setProductsList(data);
      }
    })();
  }, []);

  return (
    <>
      <div className={styles.productsCarousel}>
        <Slider {...settings} className={styles.carousel}>
          {productsList.map((product, key) => {
            return (
              <ProductCard
                key={key}
                {...product}
                openModal={() => openModal(product)}
              />
            );
          })}
        </Slider>
      </div>

      {/*     <button onClick={openModal}>Open Modal</button> */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ProductModal closeModal={openModal} dataModal={dataModal} />
      </Modal>
    </>
  );
}

function NextArrow(props: Arrow) {
  const { className, onClick } = props;
  return (
    <img
      src={arrowRight}
      alt="arrowRight"
      style={{ width: "20px", height: "34px", right: -10 }}
      className={className}
      onClick={onClick}
    />
  );
}

function PrevArrow(props: Arrow) {
  const { className, onClick } = props;
  return (
    <img
      src={arrowLeft}
      alt="arrowLeft"
      style={{ width: "20px", height: "34px", left: -10 }}
      className={className}
      onClick={onClick}
    />
  );
}
