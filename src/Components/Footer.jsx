import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Footer() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        scroller: "body",
        trigger: ".footer",
        start: "top 100%",
        end: "top 50%",
        scrub: 1,
        // markers: true,
      },
    });
    tl.from(".elem", {
      opacity: 0,
      stagger: 0.1,
    });
  });

  return (
    <div className="footer w-full h-auto px-4 py-8 text-white flex flex-col md:flex-row gap-8 md:gap-16 bg-black">
      <div className="elem flex flex-col gap-4 flex-1">
        <h3 className="text-sm font-semibold mb-2">NAVIGATE</h3>
        <h1 className="text-2xl md:text-4xl font-bold">HOME</h1>
        <h1 className="text-2xl md:text-4xl font-bold">WORKS</h1>
        <h1 className="text-2xl md:text-4xl font-bold">ABOUT</h1>
        <h1 className="text-2xl md:text-4xl font-bold">CONTACT</h1>
        <h1 className="text-2xl md:text-4xl font-bold">PRODUCTS</h1>
        <h1 className="text-2xl md:text-4xl font-bold">CAREERS</h1>
        <h1 className="text-2xl md:text-4xl font-bold">BLOG</h1>
        <h1 className="text-2xl md:text-4xl font-bold">MY RIVEN</h1>
        <h3 className="text-sm font-semibold">EN</h3>
      </div>

      <div className="elem flex flex-col gap-4 flex-1">
        <h3 className="text-sm font-semibold mb-2">CONNECT</h3>
        <h1 className="text-2xl md:text-4xl font-bold">INSTAGRAM</h1>
        <h1 className="text-2xl md:text-4xl font-bold">LINKEDIN</h1>
        <h1 className="text-2xl md:text-4xl font-bold">BEHANCE</h1>
        <h3 className="text-sm font-semibold">
          © 2024 RIVEN - ALL RIGHTS RESERVED
        </h3>
      </div>

      <div className="elem flex flex-col gap-4 flex-1">
        <h3 className="text-sm font-semibold mb-2">OFFICE</h3>
        <h1 className="text-2xl md:text-4xl font-bold">RUE DU RHÔNE 8</h1>
        <h1 className="text-2xl md:text-4xl font-bold">1204 GENÈVE</h1>
        <h3 className="text-sm font-semibold">
          RIVEN® IS A REGISTERED TRADEMARK
        </h3>
      </div>
    </div>
  );
}

export default Footer;
