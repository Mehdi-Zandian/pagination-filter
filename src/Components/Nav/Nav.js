import React from "react";
import Icon from "../../assets/icon.png";

function Nav() {
  return (
    <div>
      <div className="nav__items container flex mx-auto p-3">
        <div>
          <img className="w-10 ml-4" src={Icon} alt="icon" />
        </div>
        <div className="flex-1 flex items-center justify-end">
          <a href="#" className="font-semibold hidden md:inline-block p-3 mr-5">
            Search
          </a>
          <a
            href="#"
            className="font-semibold text-sm md:text-base p-0 md:p-3 mr-5"
          >
            Contact Me ☕
          </a>
          <a
            href="#"
            className="font-semibold border-2 text-sm md:text-base p-1 md:p-3 rounded-lg inline-block border-yellow-500"
          >
            Github Code{" "}
            <span className="text-yellow-500 font-bold">{"</>"}</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Nav);
