export const AttentionWindow = ({ attentionVisible, handleCloseClick }) => {
  return (
    <>
      {attentionVisible && (
        <div id="attentionWindow" className="window attention">
          <div className="title-bar">
            <span className="title">Atenção!</span>
            <span className="close-btn" onClick={handleCloseClick}>
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
    </>
  );
};
