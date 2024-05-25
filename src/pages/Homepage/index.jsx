import React, { useRef, useState } from "react";
import NavBar from "../../components/NavBar";
import MouseFollower from "mouse-follower";
import gsap from "gsap";
import { MdLink } from "react-icons/md";

// Images
import gethsemaneTechCircleAsset from "../../assets/images/gethsemane-tech-circle-asset.png";
import wave from "../../assets/images/wave.jpg";
// Project images
import shuttlelaneThumbnail from "../../assets/images/projects/shuttlelane/shuttlelane-thumb2.png";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import Footer from "../../components/Footer";

MouseFollower.registerGSAP(gsap);
const cursor = new MouseFollower();

export default function Homepage() {
  // Client interest states
  const [isSiteFromScratch, setIsSiteFromScratch] = useState(false);
  const [isAppFromScratch, setIsAppFromScratch] = useState(false);
  const [isUIUXDesign, setIsUIUXDesign] = useState(false);
  const [isWebAppDevelopment, setIsWebAppDevelopment] = useState(false);
  const [isMaintenance, setIsMaintenance] = useState(false);
  const [isOther, setIsOther] = useState(false);

  // Client budget states
  const [is700To1500, setIs700To1500] = useState(false);
  const [is1500To5000, setIs1500To5000] = useState(false);
  const [is5000To10000, setIs5000To10000] = useState(false);
  const [is20000AndAbove, setIs20000AndAbove] = useState(false);
  const [is10000To20000, setIs10000To20000] = useState(false);

  // Form field states

  // Attachmanet states
  const fileInputRef = useRef(null);
  const [attachmentFileName, setAttachmentFileName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setAttachmentFileName(file.name);
      // Here, you can upload the file to Cloudinary using their SDK or API
    } else {
      setAttachmentFileName("");
    }
  };

  return (
    <div className="pt-7">
      <NavBar />

      <div className="mt-24">
        {/* Hero section */}
        <div className="relative w-full overflow-hidden">
          <div className="w-full px-7 lg:px-14 min-h-[45vh] lg:min-h-[70vh] mt-12 lg:relative lg:top-6">
            <h1 className="lg:text-[4rem] text-4xl">We are a Software</h1>
            <div className="lg:mt-7 flex flex-row lg:gap-x-4 gap-x-2 items-center">
              <img
                src={gethsemaneTechCircleAsset}
                className="max-w-[60px] w-[60px] lg:max-w-[80px] lg:w-[80px] object-contain animate-spin"
                alt="Gethsemane Technologies"
              />

              <h1 className="lg:text-[4rem] text-4xl">
                <span className="italic font-light">design</span> and de-
              </h1>
            </div>
            <h1 className="lg:mt-7 lg:text-[4rem] text-4xl">
              -velopment agency
            </h1>

            <img
              src={gethsemaneTechCircleAsset}
              className="absolute -bottom-10 -right-10 max-w-[250px] lg:w-[250px] object-contain animate-spin"
              alt=""
            />
          </div>
        </div>

        {/* About section */}
        <div className="min-h-[600px] lg:min-h-[700px] relative -top-32 bg-black flex gap-x-24 flex-row items-center justify-between text-white mt-20 rounded-tr-[40px] lg:rounded-tr-[70px] rounded-tl-[40px] lg:rounded-tl-[70px] w-full p-7 lg:px-14">
          <div className="lg:w-[50%] lg:inline-block hidden overflow-hidden">
            <video
              className="h-[400px] object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="https://res.cloudinary.com/gethsemane-tech/video/upload/v1716549555/gt-3d-asset1_ifb7tq.mp4" />
            </video>
          </div>

          <div className="flex flex-col lg:px-12 gap-y-3">
            <div className="flex flex-col">
              <h2 className="lg:text-6xl text-4xl lg:leading-[60px] leading-[30px]">
                About{" "}
                <span className="lg:text-6xl text-4xl lg:leading-[60px] leading-[30px] italic font-light">
                  Us
                </span>
              </h2>
            </div>
            <p className="">
              Gethsemane Technologies is a leading software development agency
              focused on UI/UX design, mobile and web development.
            </p>

            <button className="mt-4 border-2 border-white bg-transparent h-24 w-full lg:w-1/2 rounded-full">
              How we work
            </button>
          </div>
        </div>

        {/* Featured projects section */}
        <div className="lg:min-h-[600px] relative -top-48 bg-white flex gap-x-24 flex-row justify-between text-gethsemaneBlack rounded-tr-[40px] lg:rounded-tr-[70px] rounded-tl-[40px] lg:rounded-tl-[70px] w-full p-7 lg:px-14 py-24">
          <div className="flex flex-col lg:px-12 gap-y-3">
            <div className="flex flex-col">
              <h2 className="lg:text-6xl text-4xl lg:leading-[60px] leading-[30px]">
                Featured{" "}
                <span className="lg:text-6xl text-4xl lg:leading-[60px] leading-[30px] italic font-light">
                  Project
                </span>
              </h2>
            </div>
            <p className="">Check out our most recent project.</p>

            <div className="flex flex-row flex-wrap gap-10">
              {/* Featured Project Card */}
              <div className="w-full flex flex-col gap-y-48">
                <div className="flex lg:flex-row flex-wrap w-full lg:justify-between">
                  <div className="lg:w-[48%] w-full">
                    <div className="rounded-lg w-full h-[400px] overflow-hidden flex flex-row items-center justify-center bg-[#AECAB4]">
                      <img
                        src={shuttlelaneThumbnail}
                        className="object-cover"
                      />
                    </div>
                    <p className="text-sm text-center w-full">Shuttlelane</p>
                  </div>
                  <div className="lg:w-[48%] w-full relative mt-16 lg:-bottom-80">
                    <div className="rounded-lg w-full h-[400px] overflow-hidden flex flex-row items-center justify-center bg-[#AECAB4]">
                      <img
                        src={shuttlelaneThumbnail}
                        className="object-cover"
                      />
                    </div>
                    <p className="text-sm text-center w-full">Shuttlelane</p>
                  </div>
                </div>
                {/* <div className="flex lg:flex-row flex-wrap w-full lg:justify-between">
                  <div className="lg:w-[48%] w-full">
                    <div className="rounded-lg w-full h-[400px] overflow-hidden flex flex-row items-center justify-center bg-[#AECAB4]">
                      <img
                        src={shuttlelaneThumbnail}
                        className="object-cover"
                      />
                    </div>
                    <p className="text-sm text-center w-full">Shuttlelane</p>
                  </div>
                  <div className="lg:w-[48%] w-full relative -bottom-80">
                    <div className="rounded-lg w-full h-[400px] overflow-hidden flex flex-row items-center justify-center bg-[#AECAB4]">
                      <img
                        src={shuttlelaneThumbnail}
                        className="object-cover"
                      />
                    </div>
                    <p className="text-sm text-center w-full">Shuttlelane</p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* Our philosophy section */}
        <div className="min-h-[850px] -top-24 lg:-top-0 relative bg-black flex gap-x-24 flex-row items-center justify-between text-white lg:mt-44 rounded-tr-[40px] lg:rounded-tr-[70px] rounded-tl-[40px] lg:rounded-tl-[70px] w-full p-7 lg:px-14 pb-32">
          <div className="lg:w-[50%] lg:inline-block hidden overflow-hidden">
            <video
              className="h-[400px] object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="https://res.cloudinary.com/gethsemane-tech/video/upload/v1716581364/_import_61b859cfb32924.99788186_rt5wdd.mp4" />
            </video>
          </div>

          <div className="flex flex-col lg:px-12 gap-y-3 lg:w-[50%] w-full">
            <div className="flex flex-col">
              <h2 className="lg:text-6xl text-4xl lg:leading-[60px] leading-[30px]">
                Our <br />{" "}
                <span className="lg:text-6xl text-4xl lg:leading-[60px] leading-[30px] italic font-light">
                  Philosophy
                </span>
              </h2>
            </div>

            <div className="lg:text-lg text-md flex flex-col gap-y-4 mt-4">
              <p className="">
                At Gethsemane Technologies, our developers work together with
                our UI/UX designers. We are big on building to specification.
                Gethsemane Technologies does not do cookie-cutter solutions, we
                build products exactly as they are during the design phase, no
                shortcuts or simplifications whatsoever.
              </p>
              <p className="">
                We are driven by user-centered design and development that
                drives productivity and increass revenue. We always strive to
                exceed the expectations of every of our client.
              </p>
            </div>

            <button className="mt-4 border-[1.5px] lg:text-lg text-md lg:border-2 border-white bg-transparent h-24 w-full lg:w-1/2 rounded-full">
              Contact Us
            </button>
          </div>
        </div>

        <div className="-top-48 lg:-top-20 bg-white rounded-tr-[40px] lg:rounded-tr-[70px] rounded-tl-[40px] lg:rounded-tl-[70px] relative text-gethsemaneBlack overflow-hidden p-7 lg:px-14 py-24">
          <div className="flex flex-col">
            <h2 className="lg:text-6xl text-4xl lg:leading-[60px] leading-[30px]">
              <span className="lg:text-6xl text-3xl italic font-light">
                Hey!{" "}
              </span>
              Tell us about <br />
              your project{" "}
              <img
                src={wave}
                alt="Hey! Tell us about your project"
                className="inline-block lg:w-12 w-6"
              />
            </h2>
          </div>

          <form className="flex flex-col gap-y-7 mt-7">
            <div className="">
              <h2 className="lg:text-3xl text-2xl lg:leading-[60px]">
                I'm interested in
              </h2>

              <div className="lg:text-lg text-sm my-3 lg:w-1/2 w-full flex flex-row flex-wrap gap-4 items-center">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setIsSiteFromScratch(!isSiteFromScratch);
                  }}
                  className={`h-10 flex items-center justify-center flex-row w-auto p-4 transition-all ${
                    isSiteFromScratch
                      ? "bg-black text-white"
                      : "bg-transparent border-[1.5px] lg:border-2 border-black"
                  }  rounded-full`}
                >
                  Site from scratch
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setIsAppFromScratch(!isAppFromScratch);
                  }}
                  className={`h-10 flex items-center justify-center flex-row w-auto p-4 transition-all ${
                    isAppFromScratch
                      ? "bg-black text-white"
                      : "bg-transparent border-[1.5px] lg:border-2 border-black"
                  }  rounded-full`}
                >
                  App from scratch
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setIsUIUXDesign(!isUIUXDesign);
                  }}
                  className={`h-10 flex items-center justify-center flex-row w-auto p-4 transition-all ${
                    isUIUXDesign
                      ? "bg-black text-white"
                      : "bg-transparent border-[1.5px] lg:border-2 border-black"
                  }  rounded-full`}
                >
                  UI / UX design
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setIsWebAppDevelopment(!isWebAppDevelopment);
                  }}
                  className={`h-10 flex items-center justify-center flex-row w-auto p-4 transition-all ${
                    isWebAppDevelopment
                      ? "bg-black text-white"
                      : "bg-transparent border-[1.5px] lg:border-2 border-black"
                  }  rounded-full`}
                >
                  Web app development
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMaintenance(!isMaintenance);
                  }}
                  className={`h-10 flex items-center justify-center flex-row w-auto p-4 transition-all ${
                    isMaintenance
                      ? "bg-black text-white"
                      : "bg-transparent border-[1.5px] lg:border-2 border-black"
                  }  rounded-full`}
                >
                  Maintenance
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOther(!isOther);
                  }}
                  className={`h-10 flex items-center justify-center flex-row w-auto p-4 transition-all ${
                    isOther
                      ? "bg-black text-white"
                      : "bg-transparent border-[1.5px] lg:border-2 border-black"
                  }  rounded-full`}
                >
                  Other
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-y-7 lg:flex-row lg:justify-between lg:items-center lg:gap-x-7">
              <div className="flex flex-col gap-y-1 lg:w-[48%] w-full">
                <label htmlFor="firstName" className="text-sm">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="John"
                  className="h-16 p-4 bg-slate-200"
                />
              </div>
              <div className="flex flex-col gap-y-1 lg:w-[48%] w-full">
                <label htmlFor="lastName" className="text-sm">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Doe"
                  className="h-16 p-4 bg-slate-200"
                />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center lg:gap-x-7 gap-y-7">
              <div className="flex flex-col gap-y-1 lg:w-[48%] w-full">
                <label htmlFor="emailAddress" className="text-sm">
                  Email Address
                </label>
                <input
                  type="email"
                  name="emailAddress"
                  id="emailAddress"
                  placeholder="johndoe@organization.com"
                  className="h-16 p-4 bg-slate-200"
                />
              </div>
              <div className="flex flex-col gap-y-1 lg:w-[48%] w-full">
                <label htmlFor="projectDescription" className="text-sm">
                  Tell us about your project
                </label>
                <input
                  type="text"
                  name="projectDescription"
                  id="projectDescription"
                  placeholder="Tell us about your project"
                  className="h-16 p-4 bg-slate-200"
                />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center lg:gap-x-7 gap-y-7">
              <div className="flex flex-col gap-y-1 lg:w-[48%] w-full">
                <label htmlFor="lastName" className="text-sm">
                  Project budget (USD)
                </label>
                <div className="lg:text-lg text-sm my-3 w-full flex flex-row flex-wrap gap-4 items-center">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setIs700To1500(!is700To1500);
                      setIs1500To5000(false);
                      setIs5000To10000(false);
                      setIs10000To20000(false);
                      setIs20000AndAbove(false);
                    }}
                    className={`h-10 flex items-center justify-center flex-row w-auto p-4 transition-all ${
                      is700To1500
                        ? "bg-black text-white"
                        : "bg-transparent border-[1.5px] lg:border-2 border-black"
                    }  rounded-full`}
                  >
                    700-1.5K
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setIs700To1500(false);
                      setIs1500To5000(!is1500To5000);
                      setIs5000To10000(false);
                      setIs10000To20000(false);
                      setIs20000AndAbove(false);
                    }}
                    className={`h-10 flex items-center justify-center flex-row w-auto p-4 transition-all ${
                      is1500To5000
                        ? "bg-black text-white"
                        : "bg-transparent border-[1.5px] lg:border-2 border-black"
                    }  rounded-full`}
                  >
                    1.5-5K
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setIs700To1500(false);
                      setIs1500To5000(false);
                      setIs5000To10000(!is5000To10000);
                      setIs10000To20000(false);
                      setIs20000AndAbove(false);
                    }}
                    className={`h-10 flex items-center justify-center flex-row w-auto p-4 transition-all ${
                      is5000To10000
                        ? "bg-black text-white"
                        : "bg-transparent border-[1.5px] lg:border-2 border-black"
                    }  rounded-full`}
                  >
                    5-10K
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setIs700To1500(false);
                      setIs10000To20000(!is10000To20000);
                      setIs1500To5000(false);
                      setIs5000To10000(false);
                      setIs20000AndAbove(false);
                    }}
                    className={`h-10 flex items-center justify-center flex-row w-auto p-4 transition-all ${
                      is10000To20000
                        ? "bg-black text-white"
                        : "bg-transparent border-[1.5px] lg:border-2 border-black"
                    }  rounded-full`}
                  >
                    10-20K
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setIs700To1500(false);
                      setIs1500To5000(false);
                      setIs5000To10000(false);
                      setIs10000To20000(false);
                      setIs20000AndAbove(!is20000AndAbove);
                    }}
                    className={`h-10 flex items-center justify-center flex-row w-auto p-4 transition-all ${
                      is20000AndAbove
                        ? "bg-black text-white"
                        : "bg-transparent border-[1.5px] lg:border-2 border-black"
                    }  rounded-full`}
                  >
                    20K{">"}
                  </button>
                </div>
              </div>
            </div>

            <div className="maxContent cursor-pointer lg:text-lg text-sm">
              <div className="cursor-pointer flex flex-row gap-x-1 items-center w-full relative">
                <MdLink size={16} className="text-gethsemaneBlack rotate-45" />
                <input
                  type="file"
                  ref={fileInputRef}
                  accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="absolute top-0 w-full h-full opacity-0 z-40 cursor-pointer"
                />
                <span>Add attachment</span>
              </div>
              {attachmentFileName && (
                <span className="text-slate-400">{attachmentFileName}</span>
              )}
            </div>

            <button className="mt-4 lg:text-lg text-sm border-[1.5px] lg:border-2 border-black bg-transparent h-24 w-full lg:w-1/2 rounded-full">
              Send request
            </button>
          </form>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
