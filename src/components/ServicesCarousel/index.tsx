import styles from "../../styles/servicesCarousel.module.scss";
import Slider from "react-slick";
import ServiceCard from "../ServiceCard";

import {
  bread,
  run,
  healthCare,
  tools,
  fashion,
  monitorTabletSmartphone,
  shoppingCartTwo,
  supermarket,
  sushi,
  whiskey,
} from "../../assets/icons/";

type ServicesList = {
  icon: string;
  name: string;
}[];

export default function ServicesCarousel() {
  const settings = {
    dots: false,
    arrows: false,
    slidesToShow: 7,
    slidesToScroll: 5,
    infinite: false,
  };
  const servicesList: ServicesList = [
    {
      icon: monitorTabletSmartphone,
      name: "Tecnologia",
    },
    {
      icon: supermarket,
      name: "Supermercado",
    },
    {
      icon: whiskey,
      name: "Bebidas",
    },
    {
      icon: tools,
      name: "Ferramentas",
    },
    {
      icon: healthCare,
      name: "Saúde",
    },
    {
      icon: run,
      name: "Esporte e Fitness",
    },
    {
      icon: fashion,
      name: "Moda",
    },
    {
      icon: shoppingCartTwo,
      name: "Mercado",
    },
    {
      icon: bread,
      name: "Padarias",
    },

    {
      icon: sushi,
      name: "Oriental",
    },
  ];

  return (
    <div className={styles.servicesCarousel}>
      <Slider {...settings} className={styles.carousel}>
        {servicesList.map((service, key) => {
          return (
            <div className={styles.serviceSlide} key={key}>
              <ServiceCard name={service.name} icon={service.icon} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
