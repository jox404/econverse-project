import styles from "../../styles/header.module.scss";
import {
  shieldCheck,
  creditCard,
  truck,
  logo,
  box,
  heart,
  shoppingCart,
  userCircle,
  search,
  crownSimple,
} from "../../assets/icons";
import IconButton from "../IconButton";
import { useState } from "react";

type Benefits = {
  textPrimary: string;
  textSecondary: string;
  highlighted: number;
  icon: string;
}[];
type FilterList = {
  text: string;
  selected: boolean;
  icon: string | null;
}[];

export default function Header() {
  const benefits: Benefits = [
    {
      textPrimary: "Compra",
      textSecondary: "100% segura",
      highlighted: 2,
      icon: shieldCheck,
    },
    {
      textPrimary: "Frete grátis",
      textSecondary: "acima de R$ 200",
      highlighted: 1,
      icon: truck,
    },
    {
      textPrimary: "Parcele",
      textSecondary: "Suas Compras",
      highlighted: 1,
      icon: creditCard,
    },
  ];
  const [filterList, setFilterList] = useState<FilterList>([
    {
      text: "todas categorias",
      selected: false,
      icon: null,
    },
    {
      text: "supermercado",
      selected: false,
      icon: null,
    },
    {
      text: "livros",
      selected: false,
      icon: null,
    },
    {
      text: "moda",
      selected: false,
      icon: null,
    },
    {
      text: "lançamentos",
      selected: false,
      icon: null,
    },
    {
      text: "ofertas do dia",
      selected: true,
      icon: null,
    },
    {
      text: "assinatura",
      selected: false,
      icon: crownSimple,
    },
  ]);

  return (
    <header className={styles.header}>
      <div className={styles.benefits}>
        {benefits.map((benefit, key) => {
          return (
            <span className={styles.benefit} key={key}>
              <div>
                <img
                  src={benefit.icon}
                  alt={`${benefit.textPrimary + benefit.textSecondary}`}
                />
              </div>
              <div>
                <p
                  className={
                    benefit.highlighted === 1
                      ? styles.highlighted
                      : styles.unfocused
                  }
                >
                  {benefit.textPrimary + " "}
                </p>
                <p
                  className={
                    benefit.highlighted === 2
                      ? styles.highlighted
                      : styles.unfocused
                  }
                >
                  {benefit.textSecondary}
                </p>
              </div>
            </span>
          );
        })}
      </div>
      <div className={styles.navBar}>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.search}>
          <div>
            <input type="text" placeholder="O que você está procurando" />
            <IconButton icon={search} width={34} height={34} />
          </div>
        </div>
        <div>
          <IconButton icon={box} />
          <IconButton icon={heart} />
          <IconButton icon={userCircle} />
          <IconButton icon={shoppingCart} />
        </div>
      </div>
      <nav className={styles.filterList}>
        <ul>
          {filterList.map((categorie, key) => {
            return (
              <li
                className={categorie.selected ? styles.selected : ""}
                key={key}
              >
                {categorie.text}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
