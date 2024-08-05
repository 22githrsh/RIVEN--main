import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Page3() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        scroller: "body",
        trigger: ".page3",
        start: "top 70%",
        end: "top 30%",
        // markers: true,
        scrub: 1,
      },
    });
    tl.from(".heading", {
      opacity: 0,
      y: 10,
    })
      .from(".para1", {
        opacity: 0,
        y: 10,
      }, "-=0.5")  // Overlap animation timing
      .from(".para2", {
        opacity: 0,
        y: 10,
      }, "-=0.5")  // Overlap animation timing
      .from(".city", {
        opacity: 0,
        y: 10,
      }, "-=0.5")  // Overlap animation timing
      .from(".btn", {
        opacity: 0,
        y: 10,
      }, "-=0.5"); // Overlap animation timing
  });

  return (
    <div className="page3 w-full min-h-screen flex flex-col items-center text-white px-4 md:px-8 py-8 md:py-16">
      <h3 className="heading text-base md:text-lg font-semibold">CREATIVE MAKERS</h3>
      <h1 className="para1 text-2xl md:text-4xl w-full md:w-[30%] text-center mt-5 font-bold">
        We are a creative agency focused on digital production.
      </h1>
      <h1 className="para2 text-xl md:text-4xl w-full md:w-[33%] text-center mt-8 font-bold">
        Passionate about technology and creativity, we push the boundaries
        further to transform every digital creation into an immersive
        experience, aiming to amaze you as much as we are.
      </h1>
      <div className="city flex justify-center items-center my-8">
        <img
          className="h-8 w-8 md:h-12 md:w-12 object-cover"
          src="/images/swiss.png"
          alt=""
        />
        <h3 className="text-sm md:text-base font-semibold ml-2">BASED IN GENEVA</h3>
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
        className="btn border relative border-zinc-500 rounded-full py-3 px-6 md:py-4 md:px-8 flex justify-center items-center overflow-hidden"
      >
        <h3 className="t1 text-xs md:text-sm absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-none whitespace-nowrap font-medium">
          READ MORE
        </h3>
        <h3 className="t2 text-xs md:text-sm absolute top-[120%] left-1/2 -translate-x-1/2 -translate-y-1/2 leading-none whitespace-nowrap font-medium">
          READ MORE
        </h3>
      </div>
    </div>
  );
}

export default Page3;
