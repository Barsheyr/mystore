import ProductsContainer from "@/components/products/ProductsContainer";
import Pagination from "@/components/products/Pagination";
import Filter from "@/components/products/Filter";

async function ProductsPage({
  searchParams,
}: {
  searchParams: {
    layout?: string;
    search?: string;
    page?: string;
    category?: string;
  };
}) {
  const layout = searchParams.layout || "grid";
  const search = searchParams.search || "";
  const page = parseInt(searchParams.page || "1");
  const category = (searchParams.category || "all") as
    | "all"
    | "men"
    | "women"
    | "kids";

  return (
    <>
      <Filter currentCategory={category} />
      <ProductsContainer
        layout={layout}
        search={search}
        page={page}
        category={category}
      />
      <Pagination currentPage={page} />
    </>
  );
}
export default ProductsPage;
