import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import List from "./List";
import PageButtons from "./PageButtons";

function ListItems() {
  // search params *****
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page") || 1);

  // fetch random characters *****
  const [chars, setChars] = useState([]);
  const getChars = () => {
    fetch(
      `https://rickandmortyapi.com/api/character?count=5&page=${currentPage}`
    )
      .then((res) => res.json())
      .then((data) => setChars(data?.results));
  };
  useEffect(() => {
    getChars();
  }, [currentPage]);

  // set next, prev, select Page ****
  const setPage = (target, num = 1) => {
    if (target == "next" && currentPage < 40) {
      setSearchParams({ page: currentPage + 1 });
    } else if (target == "prev" && currentPage > 1) {
      setSearchParams({ page: currentPage - 1 });
    } else if (target == "select") {
      setSearchParams({ page: num });
    }
  };

  return (
    <div className="bg-gray-800 min-h-[400px]">
      {/* Search and Filter here */}

      {chars.length !== 0 ? (
        <>
          <List chars={chars} />
          <PageButtons setPage={setPage} currentPage={currentPage} />
        </>
      ) : (
        <div className="relative pt-40 w-full">
          <span className="loader"></span>
        </div>
      )}
    </div>
  );
}

export default ListItems;
