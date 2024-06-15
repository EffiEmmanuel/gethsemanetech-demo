import React, { useEffect, useRef, useState } from "react";
import NavBar from "../../components/NavBar";
import MouseFollower from "mouse-follower";
import gsap from "gsap";
import { MdLightbulb, MdLink } from "react-icons/md";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import LocomotiveScroll from "locomotive-scroll";

// Images
import gethsemaneTechCircleAsset from "../../assets/images/gethsemane-tech-circle-asset.png";
import wave from "../../assets/images/wave.jpg";
// Project images
import shuttlelaneThumbnail from "../../assets/images/projects/shuttlelane/shuttlelane-thumb2.png";
import { Fade } from "react-awesome-reveal";

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
  const [is1500To3000, setIs1500To00] = useState(false);
  const [is3000To5000, setIs3000To5000] = useState(false);
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
    <div className="heroBg">
      <NavBar />
      <div className="mt-16">
        {/* Hero section */}
        <div className="relative w-full overflow-hidden">
          <div className="w-full text-center px-7 lg:px-14 min-h-[60vh] lg:min-h-[70vh] mt-12 lg:relative lg:top-6">
            <Fade
              duration={1000}
              direction="up"
              delay={1300}
              className="lg:-mt-5"
            >
              <h1 className="lg:text-[1.5rem] text-2xl mb-5 text-[#ED2A6C]">
                /ɡɛθˈsɛməni/
              </h1>
            </Fade>
            <Fade duration={1000} className="lg:-mt-5">
              <h1 className="lg:text-[3rem] text-[1.8rem]">
                We are a <span className="text-[#ED2A6C]">Software</span>{" "}
                <span className="italic font-light">design</span>
              </h1>
            </Fade>
            <Fade duration={1000} className="lg:-mt-10">
              <h1 className="lg:mt-7 lg:text-[3rem] text-[1.8rem]">
                and <span className="italic font-light">development</span>{" "}
                agency
              </h1>
            </Fade>

            <Fade delay={1500} duration={1300}>
              <img
                src={gethsemaneTechCircleAsset}
                className="absolute -bottom-10 -right-10 max-w-[250px] lg:w-[250px] object-contain animate-spin"
                alt=""
              />
            </Fade>

            <div className="mt-8 w-full flex lg:flex-row flex-col gap-5 items-center justify-center">
              <Fade direction="up" className="lg:w-52 w-[70%]" duration={1000}>
                <Link
                  to="/"
                  className="h-10 text-sm lg:w-52 w-full border-[1.8px] flex flex-row items-center justify-center border-black p-3 rounded-full"
                >
                  Learn more
                </Link>
              </Fade>

              <Fade
                direction="up"
                className="lg:w-52 w-[70%]"
                duration={1000}
                delay={300}
              >
                <Link
                  to="/"
                  className="h-10 text-sm lg:w-52 w-full bg-gethsemaneRed text-white flex flex-row items-center justify-center p-3 rounded-full"
                >
                  Get a quote
                </Link>
              </Fade>
            </div>
          </div>
        </div>

        {/* About section */}
        <div className="min-h-[800px] lg:min-h-[800px] relative -top-32 bg-black flex gap-x-24 flex-row items-center justify-between text-white mt-20 rounded-tr-[30px] lg:rounded-tr-[30px] rounded-tl-[30px] lg:rounded-tl-[30px] w-full p-7 lg:px-14">
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

          <div className="lg:w-[50%] w-full flex flex-col lg:px-12 gap-y-3">
            <div className="flex flex-col">
              <h2 className="font-matter lg:text-[3rem] text-4xl lg:leading-[60px] leading-[50px]">
                Building a website or web application is a{" "}
                <span className="font-matter text-gethsemaneRed lg:text-[3rem] text-4xl lg:leading-[60px] leading-[30px] italic font-light">
                  complex
                </span>{" "}
                thing to build on your own{" "}
              </h2>
            </div>
            <p className="font-matter">
              Most times, you just go wild cherry-picking & managing freelancers
              but it doesn’t have to be like that. Gethsemane Technologies is a
              leading software development agency focused on UI/UX design,
              mobile and web development.
            </p>

            <button className="mt-4 border-2 border-white bg-transparent h-24 w-full lg:w-1/2 rounded-full">
              How we work
            </button>
          </div>
        </div>

        {/* Featured projects section */}
        <div className="relative -top-48 bg-white flex gap-x-24 flex-row justify-between text-gethsemaneBlack rounded-tr-[30px] lg:rounded-tr-[30px] rounded-tl-[30px] lg:rounded-tl-[30px] w-full p-7 lg:px-14 pt-32">
          <div className="flex w-full flex-col lg:px-12 gap-y-3">
            <div className="flex flex-col">
              <h2 className="font-matter lg:text-[3rem] text-4xl lg:leading-[60px] leading-[30px]">
                Featured{" "}
                <span className="font-matter text-gethsemaneRed lg:text-[3rem] text-4xl lg:leading-[60px] leading-[30px] italic font-light">
                  Project
                </span>
              </h2>
            </div>
            <p className="font-matter">Check out our most recent project.</p>

            <div className="flex flex-row justify-center gap-10 w-full">
              {/* Featured Project Card */}
              <div className="w-full flex flex-col justify-center gap-y-48">
                <div className="flex lg:flex-row flex-col gap-y-16 w-full lg:justify-between">
                  <div className="lg:w-[48%] w-full">
                    <div className="rounded-xl w-full h-[400px] overflow-hidden flex flex-row items-center justify-center bg-[#AECAB4]">
                      <video
                        className="h-[400px] w-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                      >
                        <source src="https://res.cloudinary.com/gethsemane-tech/video/upload/v1717873683/Untitled_design_anqubd.mp4" />
                      </video>
                    </div>
                    <p className="font-matter text-md text-center w-full mt-4">
                      Shuttlelane
                    </p>
                  </div>
                  <div className="lg:w-[48%] w-full flex lg:flex-row lg:justify-center justify-center gap-x-10 lg:items-center">
                    <Link
                      to="https://www.shuttlelane.com"
                      target="_blank"
                      className="h-24 w-24 rounded-full transition-all lg:border-[2px] text-black hover:text-slate-500 border-[1.5px] hover:border-slate-500 border-black flex flex-row items-center justify-center"
                    >
                      <MdLink size={24} className="rotate-45" />
                    </Link>
                    <Link
                      to="https://www.shuttlelane.com"
                      target="_blank"
                      className="h-24 w-24 transition-all rounded-full lg:border-[2px] border-[1.5px] text-black hover:text-slate-500 hover:border-slate-500 border-black flex flex-row items-center justify-center"
                    >
                      <MdLightbulb size={24} className="" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our philosophy section */}
        <div className="min-h-[850px] -top-24 relative bg-black flex gap-x-24 flex-row items-center justify-between text-white rounded-tr-[30px] lg:rounded-tr-[30px] rounded-tl-[30px] lg:rounded-tl-[30px] w-full p-7 lg:px-14 pb-48 pt-20">
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
              <h2 className="font-matter lg:text-[3rem] text-4xl lg:leading-[60px] leading-[30px]">
                Our <br />{" "}
                <span className="font-matter text-gethsemaneRed lg:text-[3rem] text-4xl lg:leading-[60px] leading-[30px] italic font-light">
                  Philosophy
                </span>
              </h2>
            </div>

            <div className="lg:text-lg text-md flex flex-col gap-y-4 mt-4">
              <p className="font-matter">
                At Gethsemane Technologies, our developers work together with
                our UI/UX designers. We are big on building to specification.
                Gethsemane Technologies does not do cookie-cutter solutions, we
                build products exactly as they are during the design phase, no
                shortcuts or simplifications whatsoever.
              </p>
              <p className="font-matter">
                We are driven by user-centered design and development that
                drives productivity and increass revenue. We always strive to
                exceed the expectations of every of our client.
              </p>
            </div>

            <button className="font-matter mt-4 border-[1.5px] lg:text-lg text-md lg:border-2 border-white bg-transparent h-24 w-full lg:w-1/2 rounded-full">
              Contact Us
            </button>
          </div>
        </div>

        <div className="-top-40 bg-white rounded-tr-[30px] lg:rounded-tr-[30px] rounded-tl-[30px] lg:rounded-tl-[30px] relative text-gethsemaneBlack overflow-hidden p-7 lg:px-14 py-10"></div>

        <div className="-top-20 bg-white rounded-tr-[30px] lg:rounded-tr-[30px] rounded-tl-[30px] lg:rounded-tl-[30px] relative text-gethsemaneBlack overflow-hidden p-7 lg:px-14 pb-24">
          <div className="flex flex-col">
            <h2 className="font-matter lg:text-[3rem] text-4xl lg:leading-[60px] leading-[30px]">
              <span className="font-matter text-gethsemaneRed lg:text-[3rem] text-3xl italic font-light">
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
              <h2 className="font-matter lg:text-3xl text-2xl lg:leading-[60px]">
                I'm interested in
              </h2>

              <div className="lg:text-lg text-sm my-3 lg:w-1/2 w-full flex flex-row flex-wrap gap-4 items-center">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setIsSiteFromScratch(!isSiteFromScratch);
                  }}
                  className={`font-matter h-10 flex items-center justify-center flex-row w-auto p-4 transition-all ${
                    isSiteFromScratch
                      ? "bg-gethsemaneRed text-white"
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
                  className={`font-matter h-10 flex items-center justify-center flex-row w-auto p-4 transition-all ${
                    isAppFromScratch
                      ? "bg-gethsemaneRed text-white"
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
                  className={`font-matter h-10 flex items-center justify-center flex-row w-auto p-4 transition-all ${
                    isUIUXDesign
                      ? "bg-gethsemaneRed text-white"
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
                  className={`font-matter h-10 flex items-center justify-center flex-row w-auto p-4 transition-all ${
                    isWebAppDevelopment
                      ? "bg-gethsemaneRed text-white"
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
                  className={`font-matter h-10 flex items-center justify-center flex-row w-auto p-4 transition-all ${
                    isMaintenance
                      ? "bg-gethsemaneRed text-white"
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
                  className={`font-matter h-10 flex items-center justify-center flex-row w-auto p-4 transition-all ${
                    isOther
                      ? "bg-gethsemaneRed text-white"
                      : "bg-transparent border-[1.5px] lg:border-2 border-black"
                  }  rounded-full`}
                >
                  Other
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-y-7 lg:flex-row lg:justify-between lg:items-center lg:gap-x-7">
              <div className="flex flex-col gap-y-1 lg:w-[48%] w-full">
                <label htmlFor="font-matter firstName" className="text-sm">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="John"
                  className="h-16 p-4 bg-slate-200 font-matter text-[16px]"
                />
              </div>
              <div className="flex flex-col gap-y-1 lg:w-[48%] w-full">
                <label htmlFor="lastName" className="text-sm font-matter">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Doe"
                  className="h-16 p-4 bg-slate-200 font-matter text-[16px]"
                />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center lg:gap-x-7 gap-y-7">
              <div className="flex flex-col gap-y-1 lg:w-[48%] w-full">
                <label htmlFor="emailAddress" className="text-sm font-matter">
                  Email Address
                </label>
                <input
                  type="email"
                  name="emailAddress"
                  id="emailAddress"
                  placeholder="johndoe@organization.com"
                  className="h-16 p-4 bg-slate-200 font-matter text-[16px]"
                />
              </div>
              <div className="flex flex-col gap-y-1 lg:w-[48%] w-full">
                <label
                  htmlFor="projectDescription"
                  className="text-sm font-matter"
                >
                  Tell us about your project
                </label>
                <input
                  type="text"
                  name="projectDescription"
                  id="projectDescription"
                  placeholder="Tell us about your project"
                  className="h-16 p-4 bg-slate-200 font-matter text-[16px]"
                />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center lg:gap-x-7 gap-y-7">
              <div className="flex flex-col gap-y-1 lg:w-[48%] w-full">
                <label htmlFor="lastName" className="text-sm font-matter">
                  Project budget (USD)
                </label>
                <div className="lg:text-lg text-sm my-3 w-full flex flex-row flex-wrap gap-4 items-center">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setIs1500To00(!is1500To3000);
                      setIs3000To5000(false);
                      setIs5000To10000(false);
                      setIs10000To20000(false);
                      setIs20000AndAbove(false);
                    }}
                    className={`font-matter h-10 flex items-center justify-center flex-row w-auto p-4 transition-all ${
                      is1500To3000
                        ? "bg-gethsemaneRed text-white"
                        : "bg-transparent border-[1.5px] lg:border-2 border-black"
                    }  rounded-full`}
                  >
                    1.5K - 3K
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setIs1500To00(false);
                      setIs3000To5000(!is3000To5000);
                      setIs5000To10000(false);
                      setIs10000To20000(false);
                      setIs20000AndAbove(false);
                    }}
                    className={`font-matter h-10 flex items-center justify-center flex-row w-auto p-4 transition-all ${
                      is3000To5000
                        ? "bg-gethsemaneRed text-white"
                        : "bg-transparent border-[1.5px] lg:border-2 border-black"
                    }  rounded-full`}
                  >
                    3k - 5K
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setIs1500To00(false);
                      setIs3000To5000(false);
                      setIs5000To10000(!is5000To10000);
                      setIs10000To20000(false);
                      setIs20000AndAbove(false);
                    }}
                    className={`font-matter h-10 flex items-center justify-center flex-row w-auto p-4 transition-all ${
                      is5000To10000
                        ? "bg-gethsemaneRed text-white"
                        : "bg-transparent border-[1.5px] lg:border-2 border-black"
                    }  rounded-full`}
                  >
                    5k - 10K
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setIs1500To00(false);
                      setIs10000To20000(!is10000To20000);
                      setIs3000To5000(false);
                      setIs5000To10000(false);
                      setIs20000AndAbove(false);
                    }}
                    className={`font-matter h-10 flex items-center justify-center flex-row w-auto p-4 transition-all ${
                      is10000To20000
                        ? "bg-gethsemaneRed text-white"
                        : "bg-transparent border-[1.5px] lg:border-2 border-black"
                    }  rounded-full`}
                  >
                    10k - 20K
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setIs1500To00(false);
                      setIs3000To5000(false);
                      setIs5000To10000(false);
                      setIs10000To20000(false);
                      setIs20000AndAbove(!is20000AndAbove);
                    }}
                    className={`font-matter h-10 flex items-center justify-center flex-row w-auto p-4 transition-all ${
                      is20000AndAbove
                        ? "bg-gethsemaneRed text-white"
                        : "bg-transparent border-[1.5px] lg:border-2 border-black"
                    }  rounded-full`}
                  >
                    20K{" >"}
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
                <span className="font-matter">Add attachment</span>
              </div>
              {attachmentFileName && (
                <span className="text-slate-400 font-matter">
                  {attachmentFileName}
                </span>
              )}
            </div>

            <button className="font-matter mt-4 lg:text-lg text-sm border-[1.5px] lg:border-2 border-black bg-transparent h-24 w-full lg:w-1/2 rounded-full">
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
