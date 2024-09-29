import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import Pagination from "./Pagination";
import { LuLayoutGrid, LuList } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { fetchAllProducts } from "@/utils/actions";
import Link from "next/link";

async function ProductsContainer({
  layout,
  search,
  category,
  page,
}: {
  layout: string;
  search: string;
  category: string;
  page: number;
}) {
  const products = await fetchAllProducts({ search, category, page });
  const totalProducts = products.length;
  const searchTerm = search ? `&search=${search}` : "";
  const categoryParam = category ? `&category=${category}` : "";
  const pageParam = `&page=${page}`;

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
              <Link
                href={`/products?layout=grid${searchTerm}${categoryParam}${pageParam}`}
              >
                <LuLayoutGrid />
              </Link>
            </Button>
            <Button
              variant={layout === "list" ? "default" : "ghost"}
              size="icon"
              asChild
            >
              <Link
                href={`/products?layout=list${searchTerm}${categoryParam}${pageParam}`}
              >
                <LuList />
              </Link>
            </Button>
          </div>
        </div>
        <Separator className="mt-4" />
      </section>
      {/* PRODUCTS */}
      <div>
        {totalProducts === 0 ? (
          <h5 className="text-2xl mt-16">
            Sorry, no products matched your search...
          </h5>
        ) : layout === "grid" ? (
          <ProductsGrid products={products} />
        ) : (
          <ProductsGrid products={products} />
        )}
      </div>
      <Pagination totalProducts={totalProducts} />
    </>
  );
}

export default ProductsContainer;
