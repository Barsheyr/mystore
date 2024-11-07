import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import { LuLayoutGrid, LuList } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { fetchAllProducts } from "@/utils/actions";
import SectionThree3 from "@/assets/SectionThree.svg";
import Image from "next/image";
import Link from "next/link";
import Pagination from "./Pagination";
import Filter from "./Filter";

// Accept page as an optional parameter
async function ProductsContainer({
  layout,
  search,
  category,
  page,
}: {
  layout: string;
  search: string;
  category: string;
  page?: number; // Make page optional
}) {
  const productsPerPage = 100; // Number of products per page
  const currentPage = page || 1; // Use page if provided, else default to 1
  const skip = (currentPage - 1) * productsPerPage; // Calculate how many products to skip

  // Fetch all products with filtering
  const products = await fetchAllProducts({ search, category });
  const totalProducts = products.length;
  const displayedProducts = products.slice(skip, skip + productsPerPage); // Correct slicing logic
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
      <div className="mt-10">
        <Filter />
      </div>

      {/* PRODUCTS */}
      <section className="mt-24 border-dashed border-2 relative">
        <div className="space-y-10 lg:p-24 p-10">
          <h1 className="lg:text-3xl text-xl uppercase">
            Explore the Latest Trends and Timeless Classics
          </h1>
          <p className="text-sm text-[#C4A484]">
            Each piece crafted to enhance your fashion statement
          </p>

          <Image
            src={SectionThree3}
            alt="image"
            className="absolute top-0 right-0 lg:block hidden"
          />
        </div>
        {totalProducts === 0 ? (
          <h5 className="text-2xl mt-16">
            Sorry, no products matched your search...
          </h5>
        ) : layout === "grid" ? (
          <ProductsGrid products={displayedProducts} />
        ) : (
          <ProductsList products={displayedProducts} />
        )}
      </section>

      {/* PAGINATION */}
      <Pagination
        totalProducts={totalProducts}
        productsPerPage={productsPerPage}
      />
    </>
  );
}

export default ProductsContainer;
