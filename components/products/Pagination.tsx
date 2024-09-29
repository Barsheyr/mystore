"use client"; // Mark this as a client-side component

import { useRouter } from "next/navigation";

function Pagination({ totalProducts }: { totalProducts: number }) {
  const router = useRouter();
  const searchParams = new URLSearchParams(window.location.search);
  const currentPage = parseInt(searchParams.get("page") || "1");
  const totalPages = Math.ceil(totalProducts / 10);

  const handlePageChange = (newPage: number) => {
    searchParams.set("page", newPage.toString());
    const newUrl = `/products?${searchParams.toString()}`;
    router.push(newUrl);
  };

  return (
    <div className="flex justify-center mt-8 space-x-4">
      <button
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
        className="px-4 py-2 text-white bg-gray-500 rounded disabled:bg-gray-300"
      >
        Previous
      </button>
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i + 1}
          onClick={() => handlePageChange(i + 1)}
          className={`px-4 py-2 ${
            currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
          } rounded`}
        >
          {i + 1}
        </button>
      ))}
      <button
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
        className="px-4 py-2 text-white bg-gray-500 rounded disabled:bg-gray-300"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
