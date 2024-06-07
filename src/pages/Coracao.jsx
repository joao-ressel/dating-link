import { useEffect, useRef, useState } from "react";
import "../styles/coracao.css";
import hljs from "highlight.js";
import "highlight.js/styles/default.css";
import confetti from "canvas-confetti";

export const Coracao = () => {
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
      }, 1000); // Delay de 1 segundo para adicionar a classe active após o coração abrir completamente
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
          <div class="side side-a">
            <div class="back">
              <div class="heart">
                <div class="heart-half">
                  <div class="circle"></div>
                  <div class="rect"></div>
                </div>
                <pre class="ijustcode">
                  <code class="language-javascript">
                    &nbsp;&nbsp;console.log( &nbsp;&nbsp;&nbsp;&nbsp;'I Love You
                    Dabbu 💕❤️💕😘' &nbsp;&nbsp;);
                  </code>
                </pre>
              </div>
            </div>
            <div class="front">
              <div class="heart">
                <div class="heart-half">
                  <div class="circle"></div>
                  <div class="rect"></div>
                </div>
                <pre class="ijustcode">
                  <code class="language-javascript">
                    &nbsp;&nbsp;console.log( &nbsp;&nbsp;&nbsp;&nbsp;'I Love You
                    Dabbu 💕❤️💕😘' &nbsp;&nbsp;);
                  </code>
                </pre>
              </div>
            </div>
          </div>
          <div class="side side-b">
            <div class="back">
              <div class="heart">
                <div class="heart-half">
                  <div class="circle"></div>
                  <div class="rect"></div>
                </div>
                <pre class="ijustcode">
                  <code class="language-javascript">
                    &nbsp;&nbsp;console.log( &nbsp;&nbsp;&nbsp;&nbsp;'I Love You
                    Dabbu 💕❤️💕😘' &nbsp;&nbsp;);
                  </code>
                </pre>
                <div class="title">Click me</div>
              </div>
            </div>
            <div class="front">
              <div class="heart">
                <div class="heart-half">
                  <div class="circle"></div>
                  <div class="rect"></div>
                </div>
                <pre class="ijustcode">
                  <code class="language-javascript">
                    &nbsp;&nbsp;console.log( &nbsp;&nbsp;&nbsp;&nbsp;'I Love You
                    Dabbu 💕❤️💕😘 ' &nbsp;&nbsp;);
                  </code>
                </pre>
                <div class="title">Click me</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="gradient" ref={gradientRef}></div>
    </div>
  );
};
