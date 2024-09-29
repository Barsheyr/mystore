import db from "@/utils/db";

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
  page = 1,
}: {
  search: string;
  category?: string;
  page?: number; // New page parameter
}) => {
  const skip = (page - 1) * 10;
  const take = 10;

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
    skip, // Skipping records based on the page number
    take, // Taking only 10 records
  });
};
