"use client"; // Add this to mark it as a client-side component

import { useRouter } from "next/navigation"; // Correct import for the app directory
import { Button } from "@/components/ui/button";

function Filter() {
  const router = useRouter();
  const searchParams = new URLSearchParams(window.location.search);
  const currentCategory = searchParams.get("category") || "";

  const handleCategoryChange = (newCategory: string | null) => {
    if (newCategory) {
      searchParams.set("category", newCategory);
    } else {
      searchParams.delete("category"); // Remove the category parameter to show all products
    }

    const newUrl = `/products?${searchParams.toString()}`;
    router.push(newUrl); // Navigate to the new category or all products
  };

  return (
    <div className="flex space-x-4 mb-6">
      <Button
        variant={currentCategory === "" ? "default" : "ghost"}
        onClick={() => handleCategoryChange(null)} // All products (no category filter)
      >
        All
      </Button>
      <Button
        variant={currentCategory === "Men" ? "default" : "ghost"}
        onClick={() => handleCategoryChange("Men")}
      >
        Men
      </Button>
      <Button
        variant={currentCategory === "Women" ? "default" : "ghost"}
        onClick={() => handleCategoryChange("Women")}
      >
        Women
      </Button>
      <Button
        variant={currentCategory === "Kids" ? "default" : "ghost"}
        onClick={() => handleCategoryChange("Kids")}
      >
        Kids
      </Button>
    </div>
  );
}

export default Filter;
