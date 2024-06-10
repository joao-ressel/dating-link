export const ErrorWindows = ({ errorWindows, handleCloseClick }) => {
  return (
    <>
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
            <span className="close-btn" onClick={handleCloseClick}>
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
    </>
  );
};
