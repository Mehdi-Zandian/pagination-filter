function PageButtons({ setPage, currentPage }) {
  return (
    <div className="flex justify-center text-sm pb-5 items-center text-white">
      <button
        onClick={() => setPage("prev")}
        className="text-yellow-500 p-1 px-3 m-2"
      >
        Previous
      </button>

      {currentPage > 2 && (
        <>
          <button
            onClick={() => setPage("select", 1)}
            className="m-2 w-9 h-9 rounded-full border-yellow-500 border-2"
          >
            1
          </button>

          <span className="tetx-white font-bold text-xl m-2">...</span>
        </>
      )}

      {currentPage != 1 && (
        <button
          onClick={() => setPage("select", currentPage - 1)}
          className="m-2 w-9 h-9 rounded-full border-yellow-500 border-2"
        >
          {currentPage - 1}
        </button>
      )}

      <button className="bg-yellow-400 text-black rounded-full w-9 h-9 m-2">
        {currentPage}
      </button>

      {currentPage < 40 && (
        <button
          onClick={() => setPage("select", currentPage + 1)}
          className="m-2 w-9 h-9 rounded-full border-yellow-500 border-2"
        >
          {currentPage + 1}
        </button>
      )}

      {currentPage < 39 && (
        <>
          <span className="tetx-white font-bold text-xl m-2">...</span>

          <button
            onClick={() => setPage("select", 40)}
            className="m-2 w-9 h-9 rounded-full border-yellow-500 border-2"
          >
            40
          </button>
        </>
      )}

      <button
        onClick={() => setPage("next")}
        className="text-yellow-500 p-2 m-2"
      >
        Next
      </button>
    </div>
  );
}

export default PageButtons;
