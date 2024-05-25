// @ts-nocheck
import React from "react";
// Images
import gethsemaneTechLogo from "../../assets/logos/gethsemane-technologies-logo.png";

function NavBar(props) {
  return (
    <div className="relative z-[30] w-full px-7 lg:px-14">
      <div className="w-full flex items-center justify-between">
        <img
          src={gethsemaneTechLogo}
          className="max-w-[110px] w-[110px] object-contain"
        />

        <button className="focus:outline-none">
          <span className="text-lg lg:text-xl mr-8">menu</span>
          <div className="fixed top-10 lg:right-14 right-7">
            <button className="flex flex-col gap-y-1 items-center justify-center w-6">
              <span className="block relative top-0 h-[2px] w-full my-[1px] bg-black transition-all"></span>
              <span className="block relative top-0 h-[2px] w-full my-[1px] bg-black transition-all"></span>
            </button>
          </div>
        </button>
      </div>
    </div>
  );
}

export default NavBar;
