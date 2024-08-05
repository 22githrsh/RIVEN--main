import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import LeftImg from "./LeftImg";

function Page4() {
  useGSAP(() => {
    gsap.from(".page4-right h1, .page4-right h3", {
      opacity: 0,
      stagger: 0.1,
      scrollTrigger: {
        scroller: "body",
        trigger: ".page4",
        start: "top 40%",
        end: "top 0%",
        scrub: 1,
        // markers: true,
      },
    });
  });

  return (
    <div className="page4 w-full min-h-screen flex flex-col md:flex-row px-4 md:px-8 py-8">
      <LeftImg img={"/images/img.avif"} />
      <div className="page4-right w-full md:w-1/2 h-full flex flex-col justify-center items-center text-white">
        <h3 className="text-xs md:text-sm font-medium mb-4">SERVICES:</h3>
        <div className="w-full flex flex-col items-center space-y-4">
          <h1 className="text-xl md:text-3xl leading-tight font-bold">Development</h1>
          <h1 className="text-xl md:text-3xl leading-tight font-bold">Branding</h1>
          <h1 className="text-xl md:text-3xl leading-tight font-bold">UI/UX</h1>
          <h1 className="text-xl md:text-3xl leading-tight font-bold">Art direction</h1>
          <h1 className="text-xl md:text-3xl leading-tight font-bold">Motion design</h1>
          <h1 className="text-xl md:text-3xl leading-tight font-bold">Maintenance</h1>
          <h1 className="text-xl md:text-3xl leading-tight font-bold">Design system</h1>
          <h1 className="text-xl md:text-3xl leading-tight font-bold">Audit and security</h1>
          <h1 className="text-xl md:text-3xl leading-tight font-bold">3D</h1>
        </div>
      </div>
    </div>
  );
}

export default Page4;
