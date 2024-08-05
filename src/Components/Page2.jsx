import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Page2() {
  useGSAP(() => {
    gsap.from(".page2>img", {
      scale: 0.5,
      scrollTrigger: {
        scroller: "body",
        trigger: ".page2",
        start: "top 100%",
        end: "top 0",
        scrub: 1,
      },
    });
  });

  return (
    <div className="page2 w-full h-screen px-4 md:px-8 py-8 md:py-16 flex justify-center items-center overflow-hidden">
      <img
        className="w-full h-auto max-w-full object-cover"
        src="/images/oaxaca.png"
        alt=""
      />
    </div>
  );
}

export default Page2;
