import { useState, useEffect } from "react";
import "../styles/pedido.css";
import { NavLink } from "react-router-dom";

export const Pedido = () => {
  const [progress, setProgress] = useState(0);
  const [loadingVisible, setLoadingVisible] = useState(false);
  const [thanksVisible, setThanksVisible] = useState(false);
  const [errorWindows, setErrorWindows] = useState([]);

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
      }, 2000); // Change phrase every 2 seconds

      return () => clearInterval(phraseInterval);
    }
  }, [loadingVisible]);

  const handleSimClick = () => {
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

  const handleNaoClick = () => {
    const newErrorWindows = Array.from({ length: 10 }, () => ({
      top: Math.random() * window.innerHeight + "px",
      left: Math.random() * window.innerWidth + "px",
    }));
    setErrorWindows(newErrorWindows);
  };

  const handleTalvezClick = () => {
    setAttentionVisible(true);
  };

  const handleFecharClick = () => {
    setLoadingVisible(false);
    setThanksVisible(false);
    setErrorWindows([]);
    setAttentionVisible(false);
  };

  return (
    <div className="containerPedido">
      <div id="parteUm">
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

        <button className="Simmm" onClick={handleSimClick}>
          Sim
        </button>
        <button className="Talvez" onClick={handleTalvezClick}>
          Talvez
        </button>
        <button className="tenteMePegar" onClick={handleNaoClick}>
          Não
        </button>
      </div>

      {loadingVisible && (
        <div id="loadingWindow" className="window">
          <div className="title-bar">
            <span className="title">Carregando...</span>
            <span className="close-btn" onClick={handleFecharClick}>
              X
            </span>
          </div>
          <div className="window-content">
            <p> {loadingPhrases[currentPhraseIndex]}</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${progress}%` }}></div>
            </div>
            <p id="progress-text">{`${progress}%`}</p>
          </div>
        </div>
      )}

      {thanksVisible && (
        <div id="thanksWindow" className="window">
          <div className="title-bar">
            <span className="title">Concluído</span>
            <span className="close-btn" onClick={handleFecharClick}>
              X
            </span>
          </div>
          <div className="window-content">
            <p>
              Parabén Isis Vitória!! Agora terá a incrivel oportunidade de ser
              namorada do Joãozinho.
            </p>
          </div>
        </div>
      )}

      {errorWindows.map((position, index) => (
        <div
          key={index}
          className="window error"
          style={{
            position: "absolute",
            top: position.top,
            left: position.left,
          }}
        >
          <div className="title-bar">
            <span className="title">Erro</span>
            <span className="close-btn" onClick={handleFecharClick}>
              X
            </span>
          </div>
          <div className="window-content">
            <img
              className="icon-window"
              src="../assets/error-icon.png"
              alt=""
            />

            <p>Ocorreu um erro! Tente novamente</p>
          </div>
        </div>
      ))}

      {attentionVisible && (
        <div id="attentionWindow" className="window attention">
          <div className="title-bar">
            <span className="title">Atenção!</span>
            <span className="close-btn" onClick={handleFecharClick}>
              X
            </span>
          </div>
          <div className="window-content">
            <img
              className="icon-window"
              src="../assets/atention-icon.png"
              alt=""
            />
            <p>
              Acredito que há um potencial incrível entre nós e gostaria muito
              de ter a chance de fazer parte da sua vida de uma forma ainda mais
              significativa, como seu parceiro. Estou disposto a investir tempo,
              esforço e dedicação para construirmos algo bonito e verdadeiro
              juntos.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
