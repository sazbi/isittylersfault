"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

type Screen = "home" | "mouse" | "else";

declare global {
  interface Window {
    particlesJS: (id: string, config: object) => void;
  }
}

export default function Home() {
  const [screen, setScreen] = useState<Screen>("home");
  const [particlesReady, setParticlesReady] = useState<boolean>(false);

  useEffect(() => {
    if (particlesReady && typeof window !== "undefined" && window.particlesJS) {
      initParticles();
    }
  }, [particlesReady]);

  function initParticles(): void {
    window.particlesJS("particles-js", {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: false },
        size: { value: 3, random: true },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 3,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "repulse" },
          onclick: { enable: true, mode: "push" },
          resize: true,
        },
        modes: {
          repulse: { distance: 100, duration: 0.4 },
          push: { particles_nb: 4 },
        },
      },
      retina_detect: true,
    });
  }

  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"
        onLoad={() => setParticlesReady(true)}
      />

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html, body {
          width: 100%;
          height: 100%;
        }

        .wrapper {
          position: relative;
          width: 100vw;
          height: 100vh;
          background: #0d0d2b;
          overflow: hidden;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }

        #particles-js {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .content {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          gap: 28px;
          padding: 24px;
          text-align: center;
        }

        .headline {
          font-size: clamp(2rem, 6vw, 4rem);
          font-weight: 700;
          color: #ffffff;
          letter-spacing: -0.02em;
          text-shadow: 0 2px 20px rgba(0,0,0,0.5);
        }

        .subtext {
          font-size: clamp(1.1rem, 3vw, 1.6rem);
          color: rgba(255,255,255,0.85);
          max-width: 560px;
          line-height: 1.5;
        }

        .btn-row {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .btn {
          padding: 14px 32px;
          border-radius: 50px;
          border: none;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.15s ease, opacity 0.15s ease;
          text-decoration: none;
          display: inline-block;
        }

        .btn:hover {
          transform: translateY(-2px);
          opacity: 0.92;
        }

        .btn:active {
          transform: scale(0.97);
        }

        .btn-primary {
          background: #ffffff;
          color: #0d0d2b;
        }

        /* --- Blame Chad: Formula 1 --- */
        .btn-chad {
          background: #e10600;
          color: #ffffff;
          border-radius: 4px;
          font-family: "Arial Black", "Arial Bold", sans-serif;
          font-size: 0.95rem;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 14px 36px;
          border: none;
          position: relative;
          overflow: hidden;
          box-shadow: inset -4px 0 0 0 #a00000, inset 0 -3px 0 0 #7a0000;
        }

        .btn-chad::before {
          content: "";
          position: absolute;
          top: 0; left: 0;
          width: 6px; height: 100%;
          background: #1a1a1a;
        }

        .btn-chad::after {
          content: "▶";
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 0.7rem;
          color: rgba(255,255,255,0.6);
        }

        .btn-chad:hover {
          background: #ff1a1a;
          box-shadow: inset -4px 0 0 0 #c00000, inset 0 -3px 0 0 #900000, 0 0 18px rgba(225,6,0,0.6);
          transform: translateY(-2px);
          opacity: 1;
        }

        /* --- Blame Julie: Rainbow --- */
        @keyframes rainbowShift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes shimmer {
          0%   { transform: translateX(-100%) rotate(25deg); }
          100% { transform: translateX(300%) rotate(25deg); }
        }

        .btn-julie {
          background: linear-gradient(
            270deg,
            #ff0000, #ff7700, #ffee00, #00dd00, #0099ff, #8800ff, #ff00cc, #ff0000
          );
          background-size: 400% 400%;
          animation: rainbowShift 3s ease infinite;
          color: #ffffff;
          font-weight: 800;
          font-size: 1rem;
          letter-spacing: 0.04em;
          border-radius: 50px;
          border: 2.5px solid rgba(255,255,255,0.6);
          position: relative;
          overflow: hidden;
          text-shadow: 0 1px 3px rgba(0,0,0,0.4);
        }

        .btn-julie::before {
          content: "";
          position: absolute;
          top: -50%; left: -60%;
          width: 40%; height: 200%;
          background: rgba(255,255,255,0.35);
          transform: rotate(25deg);
          animation: shimmer 2.4s ease-in-out infinite;
        }

        .btn-julie:hover {
          transform: translateY(-2px) scale(1.04);
          border-color: #ffffff;
          opacity: 1;
        }
      `}</style>

      <div className="wrapper">
        <div id="particles-js" />

        <div className="content">
          {screen === "home" && (
            <>
              <h1 className="headline">Who are you?</h1>
              <div className="btn-row">
                <button className="btn btn-primary" onClick={() => setScreen("mouse")}>
                  A Random Mouse
                </button>
                <button
                  className="btn"
                  style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "1.5px solid rgba(255,255,255,0.4)" }}
                  onClick={() => setScreen("else")}
                >
                  Someone Else
                </button>
              </div>
            </>
          )}

          {screen === "mouse" && (
            <>
              <img src={"./mouse.png"} alt="A random mouse" />
              <h1 className="headline">
                Yes, can I have some cheese please?
              </h1>
            </>
          )}

          {screen === "else" && (
            <>
              <h1 className="headline">No, it&apos;s probably their fault</h1>
              <div className="btn-row">
                <a
                  href="https://isitchadsfault.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-chad"
                >
                  Blame Chad
                </a>
                <a
                  href="https://isitjuliesfault.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-julie"
                >
                  Blame Julie
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}