function PageButtons({ setPage, currentPage }) {
  return (
    <div className="flex mx-auto flex-col justify-center md:text-base text-xs pb-40 items-center text-white">
      <div>
        {currentPage > 2 && (
          <>
            <button
              onClick={() => setPage("select", 1)}
              className="mx-2 w-8 h-8 rounded-full border-yellow-500 border-2"
            >
              1
            </button>

            <span className="tetx-white font-bold text-xl">...</span>
          </>
        )}

        {currentPage != 1 && (
          <button
            onClick={() => setPage("select", currentPage - 1)}
            className="mx-2 w-8 h-8 rounded-full border-yellow-500 border-2"
          >
            {currentPage - 1}
          </button>
        )}

        <button className="bg-yellow-400 text-black rounded-full w-7 h-7 m-2">
          {currentPage}
        </button>

        {currentPage < 40 && (
          <button
            onClick={() => setPage("select", currentPage + 1)}
            className="mx-2 w-7 h-7 rounded-full border-yellow-500 border-2"
          >
            {currentPage + 1}
          </button>
        )}

        {currentPage < 39 && (
          <>
            <span className="tetx-white font-bold text-xl">...</span>

            <button
              onClick={() => setPage("select", 40)}
              className="mx-2 w-7 h-7 rounded-full border-yellow-500 border-2"
            >
              40
            </button>
          </>
        )}
      </div>

      <div>
        <button
          onClick={() => setPage("prev")}
          className="text-yellow-500 outline-none p-1 px-3 mx-2"
        >
          {"<<"} Previous
        </button>
        <button
          onClick={() => setPage("next")}
          className="text-yellow-500 outline-none p-2 mx-2"
        >
          Next {">>"}
        </button>
      </div>
    </div>
  );
}

export default PageButtons;
