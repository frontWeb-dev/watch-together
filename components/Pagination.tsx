import { joinClass } from "@/libs/client/utils";
import React, { SetStateAction } from "react";

interface PaginationProps {
  total: number;
  limit: number;
  page: number;
  setPage: React.Dispatch<SetStateAction<number>>;
}
const Pagination = ({ total, limit, page, setPage }: PaginationProps) => {
  const totalPages = Math.ceil(total / limit);
  return (
    <div className="flex justify-center space-x-4">
      <button
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
        className="h-12 w-12 rounded-md border"
      >
        이전
      </button>
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i + 1}
          onClick={() => setPage(i + 1)}
          className={joinClass("h-12 w-12 rounded-md border", page === i + 1 ? "bg-blue-300" : "")}
        >
          {i + 1}
        </button>
      ))}
      <button
        onClick={() => setPage(page + 1)}
        disabled={page === totalPages}
        className="h-12 w-12 rounded-md border"
      >
        다음
      </button>
    </div>
  );
};

export default Pagination;
