import { useState } from "react";
import "../styles/pedido.css";

export const Pedido = () => {
  const [progress, setProgress] = useState(0);
  const [loadingVisible, setLoadingVisible] = useState(false);
  const [thanksVisible, setThanksVisible] = useState(false);
  const [errorVisible, setErrorVisible] = useState(false);
  const [attentionVisible, setAttentionVisible] = useState(false);

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
    setErrorVisible(true);
  };

  const handleTalvezClick = () => {
    setAttentionVisible(true);
  };

  const handleFecharClick = () => {
    setLoadingVisible(false);
    setThanksVisible(false);
    setErrorVisible(false);
    setAttentionVisible(false);
  };

  return (
    <div className="containerPedido">
      <div  id="parteUm">
        <div className="title-bar">
          <span className="title">Pedido</span>
          <span className="close-btn" onClick={handleFecharClick}>
            X
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
            <p>Carregando...</p>
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
            <span className="title">Mensagem</span>
            <span className="close-btn" onClick={handleFecharClick}>
              X
            </span>
          </div>
          <div className="window-content">
            <p>Thanks</p>
          </div>
        </div>
      )}

      {errorVisible && (
        <div id="errorWindow" className="window error">
          <div className="title-bar">
            <span className="title">Erro</span>
            <span className="close-btn" onClick={handleFecharClick}>
              X
            </span>
          </div>
          <div className="window-content">
            <p>Ocorreu um erro!</p>
          </div>
        </div>
      )}

      {attentionVisible && (
        <div id="attentionWindow" className="window attention">
          <div className="title-bar">
            <span className="title">Atenção</span>
            <span className="close-btn" onClick={handleFecharClick}>
              X
            </span>
          </div>
          <div className="window-content">
            <p>Atenção!</p>
          </div>
        </div>
      )}
    </div>
  );
};
