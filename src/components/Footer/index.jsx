import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="relative bg-black gap-x-24 text-white w-full py-7">
      <div className="flex flex-col gap-y-7 w-full">
        <Link
          to="https://linkedin.com/in/gethsemane-technologies-ltd"
          target="_blank"
          className="lg:px-14 px-7 flex items-center justify-between w-full pb-3 border-b-[0.1px] border-b-white"
        >
          <span>LinkedIn</span>
          <FaExternalLinkAlt size={15} className="text-white" />
        </Link>
        <Link
          to="https://instagram.com/gethsemanetech"
          target="_blank"
          className="lg:px-14 px-7 flex items-center justify-between w-full pb-3 border-b-[0.1px] border-b-white"
        >
          <span>Instagram</span>
          <FaExternalLinkAlt size={15} className="text-white" />
        </Link>
        <Link
          to="https://twitter.com/in/gethsemanetech"
          target="_blank"
          className="lg:px-14 px-7 flex items-center justify-between w-full pb-3 border-b-[0.1px] border-b-white"
        >
          <span>Twitter (X)</span>
          <FaExternalLinkAlt size={15} className="text-white" />
        </Link>
      </div>

      <div className="flex lg:flex-row lg:items-center lg:justify-between flex-col gap-3 mt-7 lg:px-14 px-7">
        <div className="flex lg:flex-row flex-col gap-y-4 lg:items-center gap-x-3">
          <Link
            to="mailto:@gethsemanestech@gmail.com"
            target="_blank"
            className="text-sm h-10 w-52 p-4 border-white border-[0.2px] flex items-center justify-center rounded-full"
          >
            info@gethsemanestech.com
          </Link>
          <Link
            to="tel:+2348118412819"
            target="_blank"
            className="text-sm h-10 w-52 p-4 border-white border-[0.2px] flex items-center justify-center rounded-full"
          >
            CALL US: +2348118412819
          </Link>
          <Link className="text-sm" to="/company/privacy-policy">
            PRIVACY POLICY
          </Link>
        </div>
        <div className="text-sm flex lg:flex-row lg:items-center lg:justify-between flex-col gap-y-4">
          <p className="text-xs">
            Copyright&copy; 2024 Gethsemane Technologies
          </p>
        </div>
      </div>
    </div>
  );
}
