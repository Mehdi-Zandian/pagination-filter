import React from "react";

function Card({ char }) {
  return (
    <div className="card">
      <div className="md:w-60 max-h-72">
        <img className="card__img" src={char?.image} alt="Character Image" />
      </div>

      <div className="p-3">
        <div>
          <h1 className="font-bold text-3xl">{char?.name || "Not Found"}</h1>
          <h1>
            <span
              className={`rounded-full inline-block w-2 h-2 bg-${
                char?.status == "Alive"
                  ? "green"
                  : char?.status == "Dead"
                  ? "red"
                  : "gray"
              }-500 mr-2`}
            ></span>
            <span>{char?.status || "Not Found"}</span>
            {" - "}
            <span>{char?.species || "Not Found"}</span>
          </h1>
        </div>

        <div className="my-4">
          <h1 className="text-gray-400">Type:</h1>
          <h1 className="text-lg mt-1">{char?.type || "Normal"}</h1>
        </div>

        <div>
          <h1 className="text-gray-400">Last known location:</h1>
          <h1 className="text-lg mt-1">
            {char?.location?.name || "Not Found"}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Card;
