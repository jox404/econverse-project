import styles from "../../styles/productsFilter.module.scss";

export default function ProductsFilter() {
  const categories: { name: string; selected: boolean }[] = [
    { name: "CELULAR", selected: true },
    { name: "ACESSÓRIOS", selected: false },
    { name: "TABLETS", selected: false },
    { name: "NOTEBOOKS", selected: false },
    { name: "TVS", selected: false },
    { name: "VERTODOS", selected: false },
  ];

  return (
    <div className={styles.productsFilter}>
      <div>
        <ul>
          {categories.map((categorie, key) => {
            return (
              <li
                key={key}
                className={categorie.selected ? styles.selected : ""}
              >
                {categorie.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
