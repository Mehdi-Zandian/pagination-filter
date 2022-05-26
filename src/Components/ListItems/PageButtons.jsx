function PageButtons({ setPage, pages, page }) {
  return (
    <div className="flex mx-auto flex-col justify-center md:text-base text-xs pb-40 items-center text-white">
      <div className="flex items-center justify-between">
        <button
          onClick={() => setPage("firstLastPage", "firstPage")}
          className="mx-2 w-8 h-8 rounded-full border-yellow-500 border-2"
        >
          {1}
        </button>

        <span className="mx-2">...</span>

        <div>
          {page - 1 > 0 && (
            <button className="mx-2 w-8 h-8 rounded-full border-yellow-500 border-2">
              {page - 1}
            </button>
          )}

          <button className="bg-yellow-400 text-black rounded-full w-7 h-7 m-2">
            {page}
          </button>

          {page < pages - 1 && (
            <button className="mx-2 w-7 h-7 rounded-full border-yellow-500 border-2">
              {page + 1}
            </button>
          )}
        </div>

        <span className="mx-2">...</span>

        <button
          onClick={() => setPage("firstLastPage", "lastPage")}
          className="mx-2 w-7 h-7 rounded-full border-yellow-500 border-2"
        >
          {pages - 1 != 0 ? pages - 1 : pages}
        </button>
      </div>

      <div>
        <button
          onClick={() => setPage("prevPage")}
          className="text-yellow-500 outline-none p-1 px-3 mx-2"
        >
          {"<"} Previous
        </button>
        <button
          onClick={() => setPage("nextPage")}
          className="text-yellow-500 outline-none p-2 mx-2"
        >
          Next {">"}
        </button>
      </div>
    </div>
  );
}

export default PageButtons;
