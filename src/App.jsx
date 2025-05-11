import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import "remixicon/fonts/remixicon.css";

function App() {
  let [showContent, setShowContent] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(".vi-mask-group", {
      rotate: 20,
      duration: 2.5,
      ease: "power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {
    
    if(!showContent) return;

    gsap.to(".main",{
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "expo.inOut"
    });
    gsap.to(".sky",{
      scale: 1.3,
      rotate: 0,
     
      delay: "-.8",
      ease: "expo.inOut"
    });
    gsap.to(".bg",{
      scale: 1.3,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "expo.inOut"
    });
    gsap.to(".character",{
      scale: 0.8,
      x: "-50%",
      bottom:"-35%",
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "expo.inOut"
    });
    

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".imagesdiv .textgta", {
        x: `${xMove * 3}`,
      });
      gsap.to(".sky", {
        x: xMove * 2,
        duration: 1,
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
      });
    });
  }, [showContent]);

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h- overflow-hidden bg-black">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="38%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className="main w-full rotate-[-10deg] scale-[1.7]">
          <div className="landing overflow-hidden relative w-full h-screen bg-black ">
            <div className=" navbar absolute z-10 top-0 left-0 py-10 px-10 w-full">
              <div className="logo flex gap-4">
                <div className="lines flex flex-col gap-1">
                  <div className="line w-12 h-[5px] bg-white"></div>
                  <div className="line w-6 h-[5px] bg-white"></div>
                  <div className="line w-4 h-[5px] bg-white"></div>
                </div>
                <div className="text-3xl mt-[-11px] text-white">Rockstar</div>
              </div>
            </div>

            <div className="imagesdiv relative overflow-hidden w-full h-screen ">
              <img
                className="sky absolute scale-[1.5] rotate-[-20deg] top-0 left-0 w-full h-full object-cover "
                src="./sky.png"
                alt=""
              />
              <img
                className="bg absolute scale-[1.8] rotate-[-25deg] top-0 left-0 w-full h-full object-cover "
                src="./bg.png"
                alt=""
              />
              <div className="textgta absolute flex flex-col gap-4 text-white top-20 left-1/2 -translate-x-1/2 ">
                <h1 className="text-9xl leading-none -ml-30">grand</h1>
                <h1 className="text-9xl leading-none ml-20">theft</h1>
                <h1 className="text-9xl leading-none -ml-30">auto</h1>
              </div>
              <img
                className="character absolute -bottom-[150%] left-1/2 -translate-x-1/2  scale-[3] rotate-[-20deg]"
                src="./girlbg.png"
                alt=""
              />
            </div>
            <div className="bottombar flex absolute bottom-0 left-0 w-full py-12 px-10 bg-gradient-to-t from-black to-transparent">
              <div className="flex items-center  text-white gap-2">
                <i className="text-2xl ri-arrow-down-line"></i>
                <h3 className="text-sm font-[poppins]">Navneet Now</h3>
              </div>
              <div>
                <img
                  className="absolute h-[45px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  src="./ps5.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="w-full h-screen  flex items-center justify-center bg-black">
            <div className="cntnr flex text-white w-full h-[80%] ">
              <div className="limg relative w-1/2 h-full scale-[1]">
                <img
                  className="absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  src="./imag.png"
                  alt=""
                />
              </div>
              <div className="rg w-[35%] py-20">
                <h1 className="text-8xl">Still Running,</h1>
                <h1 className="text-8xl">Not Hunting</h1>
                <p className="mt-15 text-sm font-[poppins]">
                  The game will reportedly feature two main protagonists (a male
                  and a female), inspired by the Bonnie and Clyde dynamic —
                  engaging in crime, heists, and escape narratives. Themes may
                  include drug trade, organized crime, corruption, and modern
                  American socio-political commentary, as is typical in Rockstar
                  titles.
                </p>
                <p className="mt-5 text-sm font-[poppins]">
                  The game is set within an open world based on the fictional
                  U.S. state of Leonida, which is inspired by Florida and its
                  Miami-inspired Vice City. The story follows the criminal duo
                  of Jason Duval and Lucia Caminos.
                </p>
                <p className="mt-5 text-sm font-[poppins]">
                  The game reportedly focuses on realism, evolving NPC
                  behaviors, dynamic in-game events, and a living, breathing
                  open world.
                </p>
                <button className="bg-yellow-500 px-8 py-8 text-black mt-10 text-4xl">
                  Download Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
