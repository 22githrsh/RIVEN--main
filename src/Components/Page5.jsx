import React from "react";
import Img from "./Img";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Page5() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        scroller: "body",
        trigger: ".page5",
        start: "top 100%",
        end: "top 0",
        scrub: 1,
      },
    });
    tl.from(".page5-text", {
      opacity: 0,
    }).from(".page5-para", {
      opacity: 0,
    }).from(".imgs>.img", {
      opacity: 0,
      stagger: 0.1,
    });
  });

  return (
    <div className="page5 w-full relative text-white px-4 md:px-8 py-8">
      <div className="page5-text flex flex-col justify-center items-center mt-4 md:mt-8">
        <h3 className="text1 text-sm md:text-base font-semibold">FEATURED WORK:</h3>
        <h1 className="page5-para text-xl md:text-3xl w-full md:w-1/2 text-center mt-4 md:mt-6 font-bold">
          We awaken your wonder... one project at a time.
        </h1>
      </div>
      <div className="imgs flex flex-wrap justify-center gap-4 mt-4 md:mt-8">
        <Img src={"/images/d1.jpg"} />
        <Img src={"/images/d2.jpg"} />
        <Img src={"/images/d3.jpg"} />
      </div>
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
        className="btn m-auto mt-4 border relative w-fit border-zinc-500 rounded-full py-4 px-8 flex justify-center items-center overflow-hidden"
      >
        <h3 className="t1 text-xs md:text-sm absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-none whitespace-nowrap font-medium">
          MORE WORKS
        </h3>
        <h3 className="t2 text-xs md:text-sm absolute top-[120%] left-1/2 -translate-x-1/2 -translate-y-1/2 leading-none whitespace-nowrap font-medium">
          MORE WORKS
        </h3>
      </div>
    </div>
  );
}

export default Page5;
