import { Product } from "@prisma/client";
import { formatCurrency } from "@/utils/format";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import FavoriteToggleButton from "./FavoriteToggleButton";
import { Button } from "@/components/ui/button";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

function ProductsGrid({ products }: { products: Product[] }) {
  return (
    <section className="">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => {
          const { name, price, image, category } = product;
          const productId = product.id;
          const dollarsAmount = formatCurrency(price);
          return (
            <article key={productId} className="group relative">
              <Link href={`/products/${productId}`}>
                <Card className="transform group-hover:shadow-xl transition-shadow duration-500">
                  <CardContent className="p-4">
                    <div className="relative h-64 md:h-48 rounded overflow-hidden ">
                      <Image
                        src={image}
                        alt={name}
                        fill
                        sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"
                        priority
                        className="rounded w-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="mt-4">
                      <div className="flex flex-row justify-between mt-10">
                        <p className="">{category} </p>
                        <Button
                          variant="outline"
                          className="capitalize p-2 bg-black lg:-top-8 text-white outline-dashed outline-1"
                        >
                          Shop Now
                          <ArrowTopRightIcon className="ml-2" />
                        </Button>
                      </div>
                      <div className="mt-10">
                        <h2 className="text-lg  capitalize">{name}</h2>
                        <p className="text-muted-foreground mt-2">
                          Price: {dollarsAmount}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
              <div className="absolute top-7 right-7 z-5">
                <FavoriteToggleButton productId={productId} />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
export default ProductsGrid;
