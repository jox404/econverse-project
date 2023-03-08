import Slider from "react-slick";
import styles from "../../styles/brandsCarousel.module.scss";
import { arrowLeftTwo, arrowRightTwo, brandVTEX } from "../../assets/icons";

type Arrow = {
  className?: string;
  style?: {};
  onClick: any;
};

export default function BrandsCarousel() {
  const settings = {
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: false,
    nextArrow: <NextArrow onClick />,
    prevArrow: <PrevArrow onClick />,
  };

  const bandsList = [{}, {}, {}, {}, {}, {}];

  return (
    <div className={styles.bandsCarousel}>
      <h1>Navegue por marcas</h1>
      <Slider {...settings} className={styles.carousel}>
        {bandsList.map((service, key) => {
          return (
            <div key={key}>
              <div className={styles.brand}>
                <img src={brandVTEX} alt={"brandVTEX"} />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
function NextArrow(props: Arrow) {
  const { className, onClick } = props;
  return (
    <img
      src={arrowRightTwo}
      alt="arrowRight"
      style={{ width: "82px", height: "82px", right: 20, zIndex: 2 }}
      className={className}
      onClick={onClick}
    />
  );
}

function PrevArrow(props: Arrow) {
  const { className, onClick } = props;
  return (
    <img
      src={arrowLeftTwo}
      alt="arrowLeft"
      style={{ width: "82px", height: "82px", left: 20, zIndex: 2 }}
      className={className}
      onClick={onClick}
    />
  );
}
