import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Page1() {
  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1 });
    tl.to(".text-loop>h1", {
      top: "-100%",
      duration: 1.5,
    })
      .to(".text-loop>h1", {
        top: "-200%",
        duration: 1.5,
      })
      .to(".text-loop>h1", {
        top: "-300%",
        duration: 1.5,
      })
      .to(".text-loop>h1", {
        top: "-400%",
        duration: 1.5,
      })
      .to(".text-loop>h1", {
        top: "0%",
        duration: 3,
      });
  });

  return (
    <div className="page1 w-full h-screen text-white flex flex-col md:flex-row">
      <div className="page1-left w-full md:w-1/2 h-full flex flex-col justify-center items-center px-4 md:px-8">
        <h1 className="text-4xl md:text-[8vw] uppercase font-bold leading-tight">
          HERE TO
        </h1>
        <div className="text-loop h-[20vh] overflow-hidden text-center mt-4">
          <h1 className="relative text-4xl md:text-[8vw] uppercase font-bold leading-tight">
            Dream
          </h1>
          <h1 className="relative text-4xl md:text-[8vw] uppercase font-bold leading-tight">
            Create
          </h1>
          <h1 className="relative text-4xl md:text-[8vw] uppercase font-bold leading-tight">
            Develop
          </h1>
          <h1 className="relative text-4xl md:text-[8vw] uppercase font-bold leading-tight">
            Amaze
          </h1>
          <h1 className="relative text-4xl md:text-[8vw] uppercase font-bold leading-tight">
            Explore
          </h1>
        </div>
        <p className="mt-4 text-base md:text-sm font-semibold">
          DIGITAL BUILDER IN SWITZERLAND
        </p>
      </div>
      <div className="page1-right w-full md:w-1/2 h-full overflow-hidden">
        <video
          className="h-full w-full object-cover"
          src="/videos/rivair.mp4"
          autoPlay
          loop
          muted
        ></video>
      </div>
    </div>
  );
}

export default Page1;
