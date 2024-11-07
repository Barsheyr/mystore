"use client"; // Mark this component as a Client Component

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Pagination = ({
  totalProducts,
  productsPerPage,
}: {
  totalProducts: number;
  productsPerPage: number;
}) => {
  const router = useRouter();
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  // Synchronize the current page with the URL parameter on initial render
  useEffect(() => {
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      const pageParam = searchParams.get("page");
      setCurrentPage(pageParam ? parseInt(pageParam) : 1);
    }
  }, []); // Empty dependency array: only run on initial render

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return; // Prevent navigation to invalid pages

    const params = new URLSearchParams(window.location.search);
    params.set("page", newPage.toString());

    router.push(`/products?${params.toString()}`);
    setCurrentPage(newPage); // Update the current page state
  };

  return (
    <div className="flex justify-center items-center my-8 gap-4">
      <button
        className="px-4 py-2 bg-yellow-200 rounded-md"
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        Previous
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button
        className="px-4 py-2 bg-yellow-200 rounded-md"
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
