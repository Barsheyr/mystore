import ProductsContainer from "@/components/products/ProductsContainer";
import Filter from "@/components/products/Filter";

async function ProductsPage({
  searchParams,
}: {
  searchParams: {
    layout?: string;
    search?: string;
    category?: string;
    page?: string;
  };
}) {
  const layout = searchParams.layout || "grid";
  const search = searchParams.search || "";
  const category = searchParams.category || "";
  const page = parseInt(searchParams.page || "1");

  return (
    <>
      <ProductsContainer
        layout={layout}
        search={search}
        category={category}
        page={page}
      />
    </>
  );
}

export default ProductsPage;
