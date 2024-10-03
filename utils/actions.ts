import db from "@/utils/db";
import { redirect } from "next/navigation";

export const fetchFeaturedProducts = async () => {
  const products = await db.product.findMany({
    where: {
      featured: true,
    },
  });
  return products;
};

export const fetchAllProducts = ({
  search = "",
  category = "",
  skip = 0,
  take = 10, // Fetch 10 products per page by default
}: {
  search: string;
  category?: string;
  skip?: number;
  take?: number;
}) => {
  return db.product.findMany({
    where: {
      AND: [
        {
          OR: [
            { name: { contains: search, mode: "insensitive" } },
            { company: { contains: search, mode: "insensitive" } },
          ],
        },
        {
          category: category ? { equals: category } : undefined,
        },
      ],
    },
    orderBy: {
      createdAt: "desc",
    },
    skip,
    take,
  });
};

export const fetchSingleProduct = async (productId: string) => {
  const product = await db.product.findUnique({
    where: {
      id: productId,
    },
  });
  if (!product) {
    redirect("/products");
  }
  return product;
};
