import React from "react";
import LeftImg from "./LeftImg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Page6() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        scroller: "body",
        trigger: ".page6",
        start: "top 50%",
        end: "top 0",
        scrub: 1,
      },
    });
    tl.from(".page6-text", {
      opacity: 0,
    });
  });

  return (
    <div className="page6 w-full h-screen px-4 md:px-8 py-8 flex flex-col md:flex-row">
      <LeftImg img="/images/last.avif" />
      <div className="page6-right w-full md:w-1/2 h-full text-white flex flex-col justify-center items-center px-4 md:px-8">
        <h1 className="page6-text text-3xl md:text-6xl uppercase font-bold leading-tight text-center">
          LET'S CREATE TOGETHER
        </h1>
        <div
          onMouseEnter={() => {
            gsap.to(".t1", {
              top: "-50%",
            });

            gsap.to(".t2", {
              top: "50%",
            });
          }}
          onMouseLeave={() => {
            gsap.to(".t1", {
              top: "50%",
            });

            gsap.to(".t2", {
              top: "120%",
            });
          }}
          className="btn mt-4 border relative w-fit border-zinc-500 rounded-full py-4 px-8 flex justify-center items-center overflow-hidden"
        >
          <h3 className="t1 text-sm md:text-base absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-none whitespace-nowrap font-medium">
            START
          </h3>
          <h3 className="t2 text-sm md:text-base absolute top-[120%] left-1/2 -translate-x-1/2 -translate-y-1/2 leading-none whitespace-nowrap font-medium">
            START
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Page6;
