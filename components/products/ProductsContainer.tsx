import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import { LuLayoutGrid, LuList } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { fetchAllProducts } from "@/utils/actions";
import Link from "next/link";
import Pagination from "./Pagination";
import Filter from "./Filter";

async function ProductsContainer({
  layout,
  search,
  category,
  page = 1,
}: {
  layout: string;
  search: string;
  category: string;
  page: number;
}) {
  const productsPerPage = 10; // Set limit of products per page
  const skip = (page - 1) * productsPerPage;

  const products = await fetchAllProducts({ search, category });
  const totalProducts = products.length;
  const displayedProducts = products.slice(skip, skip + productsPerPage);
  const searchTerm = search ? `&search=${search}` : "";
  const categoryParam = category ? `&category=${category}` : "";

  return (
    <>
      {/* HEADER */}
      <section>
        <div className="flex justify-between items-center">
          <h4 className="font-medium text-lg">
            {totalProducts} product{totalProducts > 1 && "s"}
          </h4>
          <div className="flex gap-x-4">
            <Button
              variant={layout === "grid" ? "default" : "ghost"}
              size="icon"
              asChild
            >
              <Link href={`/products?layout=grid${searchTerm}${categoryParam}`}>
                <LuLayoutGrid />
              </Link>
            </Button>
            <Button
              variant={layout === "list" ? "default" : "ghost"}
              size="icon"
              asChild
            >
              <Link href={`/products?layout=list${searchTerm}${categoryParam}`}>
                <LuList />
              </Link>
            </Button>
          </div>
        </div>
        <Separator className="mt-4" />
      </section>

      {/* FILTER */}
      <Filter />

      {/* PRODUCTS */}
      <div>
        {totalProducts === 0 ? (
          <h5 className="text-2xl mt-16">
            Sorry, no products matched your search...
          </h5>
        ) : layout === "grid" ? (
          <ProductsGrid products={displayedProducts} />
        ) : (
          <ProductsList products={displayedProducts} />
        )}
      </div>

      {/* PAGINATION */}
      <Pagination
        totalProducts={totalProducts}
        productsPerPage={productsPerPage}
      />
    </>
  );
}

export default ProductsContainer;
