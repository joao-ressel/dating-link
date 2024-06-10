export const LoandingWindow = ({
  loadingVisible,
  loadingPhrases,
  currentPhraseIndex,
  progress,
  handleCloseClick
}) => {
  return (
    <>
      {loadingVisible && (
        <div id="loadingWindow" className="window">
          <div className="title-bar">
            <span className="title">Carregando...</span>
            <span className="close-btn" onClick={handleCloseClick}>
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
    </>
  );
};
