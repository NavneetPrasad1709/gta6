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
    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "expo.inOut",
    });
    gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      delay: "-.8",
      ease: "expo.inOut",
    });
    gsap.to(".bg", {
      scale: 1.3,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "expo.inOut",
    });
    gsap.to(".character", {
      scale: 0.5,
      x: "-50%",
      bottom: "-50%",
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "expo.inOut",
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
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-full overflow-hidden bg-black">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
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
          <div className="landing overflow-hidden relative w-full h-screen bg-black">
            <div className="navbar absolute z-10 top-0 left-0 py-6 px-6 md:py-10 md:px-10 w-full">
              <div className="logo flex gap-3 md:gap-4">
                <div className="lines flex flex-col gap-1">
                  <div className="line w-8 md:w-12 h-[4px] bg-white"></div>
                  <div className="line w-4 md:w-6 h-[4px] bg-white"></div>
                  <div className="line w-3 md:w-4 h-[4px] bg-white"></div>
                </div>
                <div className="text-lg md:text-3xl -mt-3  text-white">Rockstar</div>
              </div>
            </div>

            <div className="imagesdiv relative overflow-hidden w-full h-screen">
              <img
                className="sky absolute scale-[1.5] rotate-[-20deg] top-0 left-0 w-full h-full object-cover"
                src="./sky.png"
                alt=""
              />
              <img
                className="bg absolute scale-[1.8] rotate-[-25deg] top-0 left-0 w-full h-full object-cover"
                src="./bg.png"
                alt=""
              />
              <div className="textgta absolute flex flex-col gap-4 text-white top-20 left-1/2 -translate-x-1/2 text-center">
                <h1 className="text-[10vw] md:text-8xl leading-none -ml-10 md:-ml-30">grand</h1>
                <h1 className="text-[10vw] md:text-8xl leading-none ml-5 md:ml-20">theft</h1>
                <h1 className="text-[10vw] md:text-8xl leading-none -ml-10 md:-ml-30">auto</h1>
              </div>
              <img
                className="character absolute -bottom-[150%] left-1/2 -translate-x-1/2 scale-[2.5] md:scale-[3] rotate-[-20deg]"
                src="./girlbg.png"
                alt=""
              />
            </div>

            <div className="bottombar flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 absolute bottom-0 left-0 w-full py-8 px-6 md:py-12 md:px-10 bg-gradient-to-t from-black to-transparent">
              <div className="flex items-center text-white gap-2">
                <i className="text-xl md:text-2xl ri-arrow-down-line"></i>
                <h3 className="text-sm font-[poppins]">Scroll Now</h3>
              </div>
              <div>
                <img
                  className="h-[35px] ps5-img md:h-[45px] mx-auto md:absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  src="./ps5.png"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="w-full min-h-screen flex items-center justify-center bg-black px-4">
            <div className="cntnr bg-yellow-20 mt-[1vw] flex flex-col md:flex-row text-white w-full max-w-7xl gap-10 py-10 md:py-0">
              <div className="limg relative w-full md:w-1/2 h-[300px] md:h-full scale-[1]">
                <img
                  className="absolute w-[70%] mt-[27vw] md:w-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  src="./imag.png"
                  alt=""
                />
              </div>
              <div className="rg  w-full md:w-[35%] mt-[10vw]">
                <h1 className="text-5xl md:text-7xl">Still Running,</h1>
                <h1 className="text-5xl md:text-7xl">Not Hunting</h1>
                <p className="mt-5 md:mt-10 text-xs md:text-sm font-[poppins]">
                  The game will reportedly feature two main protagonists (a male and a female),
                  inspired by the Bonnie and Clyde dynamic — engaging in crime, heists, and
                  escape narratives.
                </p>
                <p className="mt-4 text-xs md:text-sm font-[poppins]">
                  The game is set within an open world based on the fictional U.S. state of
                  Leonida, which is inspired by Florida and its Miami-inspired Vice City.
                </p>
                <p className="mt-4 text-xs md:text-sm font-[poppins]">
                  The game reportedly focuses on realism, evolving NPC behaviors, dynamic
                  in-game events, and a living, breathing open world.
                </p>
                <button className="bg-yellow-500 px-6 py-4 text-black mt-6 md:mt-10 text-lg md:text-4xl w-full md:w-auto">
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
