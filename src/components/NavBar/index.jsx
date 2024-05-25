// @ts-nocheck
import React, { useState } from "react";
// Images
import gethsemaneTechLogo from "../../assets/logos/gethsemane-technologies-logo.png";
import { Fade } from "react-awesome-reveal";
import { FaXmark } from "react-icons/fa6";

function NavBar(props) {
  const [attachAnimation, setAttachAnimation] = useState(false);
  const [detachAnimation, setDetachAnimation] = useState(false);
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
            <button
              onClick={() => setAttachAnimation(true)}
              className="flex flex-col gap-y-1 items-center justify-center w-6"
            >
              <span className="block relative top-0 h-[2px] w-full my-[1px] bg-black transition-all"></span>
              <span className="block relative top-0 h-[2px] w-full my-[1px] bg-black transition-all"></span>
            </button>
          </div>
        </button>
      </div>

      <div
        className={`flex-row w-full fixed left-0 z-[10] top-0 min-h-screen items-end ${
          attachAnimation ? "flex" : "hidden"
        }`}
      >
        <div
          className={`w-1/4 bg-black rec1 ${
            attachAnimation && "rec1OpenAnimation"
          }`}
        ></div>
        <div
          className={`w-1/4 bg-black rec2 ${
            attachAnimation && "rec2OpenAnimation"
          }`}
        ></div>
        <div
          className={`w-1/4 bg-black rec3 ${
            attachAnimation && "rec3OpenAnimation"
          }`}
        ></div>
        <div
          className={`w-1/4 bg-black rec4 ${
            attachAnimation && "rec4OpenAnimation"
          }`}
        ></div>
      </div>

      <div
        className={`flex-row w-full fixed left-0 z-[11] top-0 min-h-screen items-end ${
          attachAnimation ? "flex" : "hidden"
        }`}
      >
        <div
          className={`w-1/4 bg-white rec1 ${
            attachAnimation && "rec5OpenAnimation"
          } ${detachAnimation && "rec1CloseAnimation"}`}
        ></div>
        <div
          className={`w-1/4 bg-white rec2 ${
            attachAnimation && "rec6OpenAnimation"
          } ${detachAnimation && "rec2CloseAnimation"}`}
        ></div>
        <div
          className={`w-1/4 bg-white rec3 ${
            attachAnimation && "rec7OpenAnimation"
          } ${detachAnimation && "rec3CloseAnimation"}`}
        ></div>
        <div
          className={`w-1/4 bg-white rec4 ${
            attachAnimation && "rec8OpenAnimation"
          } ${detachAnimation && "rec4CloseAnimation"}`}
        ></div>
      </div>

      <div
        ref={props?.navbarRef}
        className={`${
          attachAnimation ? "navbarContentAnimation" : "hidden bg-transparent"
        } w-full z-[9] left-0 fixed top-0 right-0 shadow-md min-h-screen py-7 px-7 lg:px-14`}
      >
        <Fade duration={1000} delay={3200} className="w-full">
          <div className="w-full flex items-center justify-between">
            <img
              src={gethsemaneTechLogo}
              className="max-w-[110px] w-[110px] object-contain"
            />

            <button className="focus:outline-none">
              <span className="text-lg lg:text-xl mr-8">close</span>
              <div className="fixed top-[35px] lg:right-14 right-7">
                <button
                  onClick={() => setDetachAnimation(true)}
                  className="flex flex-col gap-y-1 items-center justify-center w-6"
                >
                  <FaXmark size={24} />
                </button>
              </div>
            </button>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default NavBar;
