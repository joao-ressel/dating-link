export const ThanksWindow = ({ thanksVisible, handleCloseClick }) => {
  return (
    <>
      {thanksVisible && (
        <div id="thanksWindow" className="window">
          <div className="title-bar">
            <span className="title">Concluído</span>
            <span className="close-btn" onClick={handleCloseClick}>
              X
            </span>
          </div>
          <div className="window-content">
            <p>
              Parabéns Isis Vitória!! Agora terá a incrivel oportunidade de ser
              namorada do Joãozinho.
            </p>
          </div>
        </div>
      )}
    </>
  );
};
