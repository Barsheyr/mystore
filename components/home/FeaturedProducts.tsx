import { fetchFeaturedProducts } from "@/utils/actions";
import EmptyList from "../global/EmptyList";
import Image from "next/image";
// import SectionTitle from "../global/SectionTitle";
import ProductsGrid from "../products/ProductsGrid";
import SectionThree3 from "@/assets/SectionThree.svg";
import Filter from "../products/Filter";

async function FeaturedProducts() {
  const products = await fetchFeaturedProducts();
  if (products.length === 0) return <EmptyList />;
  return (
    <section className="mt-24 border-dashed border-2 relative">
      {/* <SectionTitle text="ELEVATE YOUR STYLE WITH OUR LATEST COLLECTION" /> */}
      <div className="space-y-10 lg:p-24 p-10">
        <h1 className="lg:text-3xl text-xl">
          ELEVATE YOUR STYLE WITH OUR LATEST COLLECTION
        </h1>
        <p className="text-sm text-[#C4A484]">
          Each piece crafted to enhance your fashion statement
        </p>

        <Filter />
      </div>
      <Image
        src={SectionThree3}
        alt="image"
        className="absolute top-0 right-0 lg:block hidden"
      />

      <ProductsGrid products={products} />
    </section>
  );
}
export default FeaturedProducts;
