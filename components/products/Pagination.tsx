import Link from "next/link";

const Pagination = ({ currentPage }: { currentPage: number }) => {
  return (
    <div className="flex justify-center mt-8 gap-4">
      {currentPage > 1 && (
        <Link href={`/products?page=${currentPage - 1}`}>
          <button className="btn bg-gray-300 px-5 text-black">
            Previous Page
          </button>
        </Link>
      )}
      <Link href={`/products?page=${currentPage + 1}`}>
        <button className="btn bg-gray-300 px-5 text-black">Next page</button>
      </Link>
    </div>
  );
};

export default Pagination;
