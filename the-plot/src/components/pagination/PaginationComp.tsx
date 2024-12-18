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
      {pages?.length > 6 ? (
        pageNo < 6 ? (
          <ul className="pagination-pages">
            {pageNo > 1 && <li className="pagination-page">{"<"}</li>}
            {pages.slice(0, 6).map((page) => {
              return (
                <li
                  key={page}
                  className={`pagination-page ${
                    pageNo == page ? "active" : ""
                  }`}
                  value={page}
                  role="button"
                  onClick={paginationHandler}
                >
                  {page}
                </li>
              );
            })}
            <li
              className={`pagination-page ${
                pageNo == pages.length ? "active" : ""
              }`}
              value={pages.length}
              role="button"
              onClick={paginationHandler}
            >
              {pages.length}
            </li>
            {pageNo < pages.length - 5 && (
              <li className="pagination-page">{">>"}</li>
            )}
            {pageNo < pages.length && (
              <li className="pagination-page">{">"}</li>
            )}
          </ul>
        ) : pageNo > pages[pages.length - 4] ? (
          <ul className="pagination-pages">
            {pageNo > 1 && <li className="pagination-page">{"<"}</li>}
            {pageNo > 5 && <li className="pagination-page">{"<<"}</li>}
            <li
              className={`pagination-page ${
                pageNo === pages[0] ? "active" : ""
              }`}
              value={pages[0]}
              role="button"
              onClick={paginationHandler}
            >
              {pages[0]}
            </li>
            {pages.slice(pages.length - 6, pages.length).map((page) => {
              return (
                <li
                  key={page}
                  className={`pagination-page ${
                    pageNo === page ? "active" : ""
                  }`}
                  value={page}
                  role="button"
                  onClick={paginationHandler}
                >
                  {page}
                </li>
              );
            })}
            {pageNo < pages.length && (
              <li className="pagination-page">{">"}</li>
            )}
          </ul>
        ) : (
          <ul className="pagination-pages">
            <li className="pagination-page">{"<"}</li>
            <li className="pagination-page">{"<<"}</li>
            <li
              className={`pagination-page ${
                pageNo == pages[0] ? "active" : ""
              }`}
              value={pages[0]}
              role="button"
              onClick={paginationHandler}
            >
              {pages[0]}
            </li>
            {pages?.slice(pageNo - 3, pageNo + 2).map((page) => {
              return (
                <li
                  key={page}
                  className={`pagination-page ${
                    pageNo == page ? "active" : ""
                  }`}
                  value={page}
                  role="button"
                  onClick={paginationHandler}
                >
                  {page}
                </li>
              );
            })}
            <li
              className={`pagination-page ${
                pageNo == pages.length ? "active" : ""
              }`}
              value={pages.length}
              role="button"
              onClick={paginationHandler}
            >
              {pages.length}
            </li>
            <li className="pagination-page">{">>"}</li>
            <li className="pagination-page">{">"}</li>
          </ul>
        )
      ) : (
        <ul className="pagination-pages">
          {" "}
          {pages?.map((page) => {
            return (
              <li
                key={page}
                className={`pagination-page ${pageNo === page ? "active" : ""}`}
                role="button"
                onClick={paginationHandler}
                value={page}
              >
                {page}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
