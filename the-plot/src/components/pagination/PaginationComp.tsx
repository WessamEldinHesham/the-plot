import React from "react";

import "./Pagination.css";

interface IPaginationProps {
  pages: number[];
  pageNo: number;
  setPageNo: any;
}

export default function PaginationComp({
  pages,
  pageNo,
  setPageNo,
}: IPaginationProps) {
  function paginationHandler(event: React.MouseEvent<HTMLButtonElement> | any) {
    if (pageNo !== event.target.value) {
      const selectedPage = event.target.value;
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
      setPageNo(selectedPage);
    }
  }

  return (
    <div className="pagination-wrapper">
      <ul className="pagination-pages">
        {pageNo > 1 && (
          <li
            className="pagination-page first-page"
            onClick={() => {
              return setPageNo(1);
            }}
          >
            {"<"}
          </li>
        )}
        {pageNo > 1 && (
          <li
            className="pagination-page backward-page"
            onClick={() => {
              setPageNo((prev: number) => {
                return prev - 1;
              });
            }}
          >
            {"<<"}
          </li>
        )}
        <li
          key={pageNo}
          className={`pagination-page active`}
          role="button"
          onClick={paginationHandler}
          value={pageNo}
        >
          {pageNo}
        </li>
        {pageNo < pages.length && (
          <li
            className="pagination-page forward-page"
            onClick={() => {
              setPageNo((prev: number) => {
                return prev + 1;
              });
            }}
          >
            {">>"}
          </li>
        )}
        {pageNo < pages.length && (
          <li
            className="pagination-page last-page"
            onClick={() => {
              return setPageNo(pages.length);
            }}
          >
            {">"}
          </li>
        )}
      </ul>
    </div>
  );
}
