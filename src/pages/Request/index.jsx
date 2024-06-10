import { useState, useEffect } from "react";
import "./request.css";
import { NavLink } from "react-router-dom";
import { LoandingWindow } from "./components/LoandingWindow";
import { ErrorWindows } from "./components/ErrorWindows";
import { ThanksWindow } from "./components/ThanksWindow";
import { AttentionWindow } from "./components/AttentionWindow";

export const Request = () => {
  const [progress, setProgress] = useState(0);
  const [errorWindows, setErrorWindows] = useState([]);
  const [thanksVisible, setThanksVisible] = useState(false);
  const [loadingVisible, setLoadingVisible] = useState(false);
  const [attentionVisible, setAttentionVisible] = useState(false);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  const loadingPhrases = [
    "Carregando...",
    "Testando sua paciência...",
    "Tem que ter paciência comigo heim...",
    "Quase lá...",
  ];

  useEffect(() => {
    if (loadingVisible) {
      const phraseInterval = setInterval(() => {
        setCurrentPhraseIndex(
          (prevIndex) => (prevIndex + 1) % loadingPhrases.length
        );
      }, 2000);

      return () => clearInterval(phraseInterval);
    }
  }, [loadingVisible]);

  const handleYesChoice = () => {
    setLoadingVisible(true);

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 1;
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoadingVisible(false);
            setThanksVisible(true);
          }, 1000);
        }
        return newProgress;
      });
    }, 100);
  };

  const handleNoChoice = () => {
    const newErrorWindows = Array.from({ length: 10 }, () => ({
      top: Math.random() * window.innerHeight + "px",
      left: Math.random() * window.innerWidth + "px",
    }));
    setErrorWindows(newErrorWindows);
  };

  const handleMaybeClick = () => {
    setAttentionVisible(true);
  };

  const handleCloseClick = () => {
    setLoadingVisible(false);
    setThanksVisible(false);
    setErrorWindows([]);
    setAttentionVisible(false);
  };

  return (
    <div className="contaiener-request">
      <div id="first-part">
        <div className="title-bar">
          <span className="title">Pedido</span>
          <span className="close-btn">
            <NavLink to="/">X</NavLink>
          </span>
        </div>

        <div className="hearth-img">
          <img
            src="https://imagensemoldes.com.br/wp-content/uploads/2020/04/coracao-rosa-png.png"
            alt="Heart"
          />
        </div>

        <h1>Você aceita namorar comigo?</h1>

        <button onClick={handleYesChoice}>Sim</button>
        <button onClick={handleMaybeClick}>Talvez</button>
        <button onClick={handleNoChoice}>Não</button>
      </div>

      <LoandingWindow
        loadingVisible={loadingVisible}
        loadingPhrases={loadingPhrases}
        currentPhraseIndex={currentPhraseIndex}
        progress={progress}
        handleCloseClick={handleCloseClick}
      />

      <ErrorWindows
        errorWindows={errorWindows}
        handleCloseClick={handleCloseClick}
      />

      <ThanksWindow
        thanksVisible={thanksVisible}
        handleCloseClick={handleCloseClick}
      />

      <AttentionWindow
        attentionVisible={attentionVisible}
        handleCloseClick={handleCloseClick}
      />
    </div>
  );
};
