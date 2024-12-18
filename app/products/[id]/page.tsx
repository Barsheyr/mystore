import BreadCrumbs from "@/components/single-products/BreadCrumbs";
import Image from "next/image";
import { formatCurrency } from "@/utils/format";
import FavoriteToggleButton from "@/components/products/FavoriteToggleButton";
import AddToCart from "@/components/single-products/AddToCart";
import ProductRating from "@/components/single-products/ProductRating";
import ShareButton from "@/components/single-products/ShareButton";
import SubmitReview from "@/components/reviews/SubmitReview";
import ProductReviews from "@/components/reviews/ProductReviews";
import { fetchSingleProduct, findExistingReview } from "@/utils/actions";
import { auth } from "@clerk/nextjs/server";

async function SingleProductPage({ params }: { params: { id: string } }) {
  const product = await fetchSingleProduct(params.id);
  const { name, image, company, description, price } = product;
  const dollarsAmount = formatCurrency(price);
  const { userId } = auth();
  const reviewDoesNotExist =
    userId && !(await findExistingReview(userId, product.id));

  return (
    <section>
      <BreadCrumbs name={product.name} />
      <div className="mt-6">
        {/* IMAGE FIRST COL */}

        <div className="py-10 grid lg:grid-cols-2 grid-cols-1 gap-10">
          {/* Left side: Picture 1 */}
          <div>
            <Image
              src={image}
              alt={name}
              className="rounded-md h-full"
              width={800}
              height={500}
            />
          </div>

          {/* Right side: Pictures 2 and 3 stacked vertically */}
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-10">
            <Image
              src={image}
              alt={name}
              className="rounded-md"
              width={300}
              height={150}
            />
            <Image
              src={image}
              alt={name}
              className="rounded-md"
              width={300}
              height={150}
            />
          </div>
        </div>

        {/* PRODUCT INFO SECOND COL */}
        <div>
          <div className="flex gap-x-8 items-center">
            <h1 className="capitalize text-3xl font-bold">{name}</h1>
            <div className="flex items-center gap-x-2">
              <FavoriteToggleButton productId={params.id} />
              <ShareButton name={product.name} productId={params.id} />
            </div>
          </div>
          <ProductRating productId={params.id} />
          <h4 className="text-xl mt-2">{company}</h4>
          <p className="mt-3 text-md bg-muted inline-block p-2 rounded-md">
            {dollarsAmount}
          </p>
          <p className="mt-6 leading-8 text-muted-foreground">{description}</p>
          <AddToCart productId={params.id} />
        </div>
      </div>

      <ProductReviews productId={params.id} />
      {reviewDoesNotExist && <SubmitReview productId={params.id} />}
    </section>
  );
}
export default SingleProductPage;
