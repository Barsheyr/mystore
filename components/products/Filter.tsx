"use client"; // Marking this as a client component

import { useRouter } from "next/navigation"; // Correct import for Next.js app directory
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

type Category = "Men" | "Women" | "Kids" | "";

function Filter() {
  const router = useRouter();
  const [currentCategory, setCurrentCategory] = useState<Category>("");

  useEffect(() => {
    // Only run this on the client-side
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      const category = searchParams.get("category") || "";
      setCurrentCategory(category as Category); // Type assertion
    }
  }, []);

  const handleCategoryChange = (newCategory: Category | null) => {
    const searchParams = new URLSearchParams(window.location.search);
    if (newCategory) {
      searchParams.set("category", newCategory);
    } else {
      searchParams.delete("category");
    }
    const newUrl = `/products?${searchParams.toString()}`;
    router.push(newUrl); // Navigate to the new category
  };

  return (
    <div className="flex space-x-4 mb-6">
      <Button
        variant={currentCategory === "" ? "default" : "ghost"}
        onClick={() => handleCategoryChange(null)}
        aria-pressed={currentCategory === ""}
      >
        All
      </Button>
      <Button
        variant={currentCategory === "Men" ? "default" : "ghost"}
        onClick={() => handleCategoryChange("Men")}
        aria-pressed={currentCategory === "Men"}
      >
        Men
      </Button>
      <Button
        variant={currentCategory === "Women" ? "default" : "ghost"}
        onClick={() => handleCategoryChange("Women")}
        aria-pressed={currentCategory === "Women"}
      >
        Women
      </Button>
      <Button
        variant={currentCategory === "Kids" ? "default" : "ghost"}
        onClick={() => handleCategoryChange("Kids")}
        aria-pressed={currentCategory === "Kids"}
      >
        Kids
      </Button>
    </div>
  );
}

export default Filter;
