import Nav from "./Components/Nav";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useEffect } from "react";
import Page1 from "./Components/Page1";
import Page2 from "./Components/Page2";
import Page3 from "./Components/Page3";
import Page4 from "./Components/Page4";
import Page5 from "./Components/Page5";
import Page6 from "./Components/Page6";
import Footer from "./Components/Footer";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const lenisJS = () => {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {});

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 700);
    });

    gsap.ticker.lagSmoothing(0);
  };

  useEffect(() => {
    document.title = "RIVEN";
    lenisJS();
  }, []);

  return (
    <div className="w-full relative bg-black">
      <Nav />
      <div className="container mx-auto px-4">
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
        <Page5 />
        <Page6 />
        <div className="line w-full h-[1px] bg-zinc-600 my-4 md:my-6"></div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
