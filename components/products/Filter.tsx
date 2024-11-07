import Link from "next/link";

const Filter = ({
  currentCategory,
}: {
  currentCategory: "all" | "men" | "women" | "kids";
}) => {
  const categories = ["all", "men", "women", "kids"];

  return (
    <div className="flex gap-4 mb-4">
      {categories.map((cat) => (
        <Link
          key={cat}
          href={`/products?category=${cat}`}
          className={`${
            currentCategory === cat ? "font-bold" : "text-gray-600"
          }`}
        >
          {cat.charAt(0).toUpperCase() + cat.slice(1)}
        </Link>
      ))}
    </div>
  );
};

export default Filter;
