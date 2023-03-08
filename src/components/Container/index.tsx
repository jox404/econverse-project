import {
  Header,
  OffersPanel,
  ServicesCarousel,
  RelatedProducts,
  ProductsCarousel,
  ProductsFilter,
  PartnersList,
  BrandsCarousel,
  Footer,
} from "../index";

export default function Container() {
  return (
    <div>
      <Header />
      <OffersPanel />
      <ServicesCarousel />
      <RelatedProducts />
      <ProductsFilter />
      <ProductsCarousel />
      <PartnersList height={350} width={574} />
      <RelatedProducts />
      <ProductsCarousel />
      <PartnersList height={284} width={589} />
      <BrandsCarousel />
      <RelatedProducts />
      <ProductsCarousel />
      <Footer />
    </div>
  );
}
