import hljs from "highlight.js";
import confetti from "canvas-confetti";
import "highlight.js/styles/default.css";
import { useEffect, useRef, useState } from "react";

import "./heart.css";

export const Heart = () => {
  const cardWrapperRef = useRef(null);
  const contentRef = useRef(null);
  const gradientRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  const handleCardClick = () => {
    const cardWrapper = cardWrapperRef.current;
    const gradientElement = gradientRef.current;

    const isActive = cardWrapper.classList.contains("active");

    if (isActive) {
      cardWrapper.classList.remove("active");
      gradientElement.style.opacity = 0;
      setIsAnimating(false);
    } else {
      setIsAnimating(true);
      setTimeout(() => {
        cardWrapper.classList.add("active");
        gradientElement.style.opacity = 1;
        launchConfetti();
      }, 1000);
    }
  };

  const launchConfetti = () => {
    const duration = 2 * 1000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  return (
    <div className="content" ref={contentRef}>
      <div className="card-wrapper" ref={cardWrapperRef}>
        <div className="card" onClick={handleCardClick}>
          <div className="side side-a">
            <div className="back">
              <div className="heart">
                <div className="heart-half">
                  <div className="circle"></div>
                  <div className="rect"></div>
                </div>
                <pre className="ijustcode">
                  <code className="language-javascript">
                    &nbsp;&nbsp;console.log( &nbsp;&nbsp;&nbsp;&nbsp;'João e
                    Isis tão namorando 💕❤️💕😘' &nbsp;&nbsp;);
                  </code>
                </pre>
              </div>
            </div>
            <div className="front">
              <div className="heart">
                <div className="heart-half">
                  <div className="circle"></div>
                  <div className="rect"></div>
                </div>
                <pre className="ijustcode">
                  <code className="language-javascript">
                    &nbsp;&nbsp;console.log( &nbsp;&nbsp;&nbsp;&nbsp;'João e
                    Isis tão namorando 💕❤️💕😘' &nbsp;&nbsp;);
                  </code>
                </pre>
              </div>
            </div>
          </div>
          <div className="side side-b">
            <div className="back">
              <div className="heart">
                <div className="heart-half">
                  <div className="circle"></div>
                  <div className="rect"></div>
                </div>
                <pre className="ijustcode">
                  <code className="language-javascript">
                    &nbsp;&nbsp;console.log( &nbsp;&nbsp;&nbsp;&nbsp;'João e
                    Isis tão namorando 💕❤️💕😘' &nbsp;&nbsp;);
                  </code>
                </pre>
                <div className="title">Click me</div>
              </div>
            </div>
            <div className="front">
              <div className="heart">
                <div className="heart-half">
                  <div className="circle"></div>
                  <div className="rect"></div>
                </div>
                <pre className="ijustcode">
                  <code className="language-javascript">
                    &nbsp;&nbsp;console.log( &nbsp;&nbsp;&nbsp;&nbsp;'João e
                    Isis tão namorando 💕❤️💕😘' &nbsp;&nbsp;);
                  </code>
                </pre>
                <div className="title">Abrir coração</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="gradient" ref={gradientRef}></div>
    </div>
  );
};
