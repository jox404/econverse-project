export default async function fetchProducts() {
  const url =
    "https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json";
  var result;
  try {
    await fetch(url, {
      method: "get",
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.success) {
          return (result = response.products);
        }
      });
  } catch (error) {
    console.log(error);
  }
  return result;
}
