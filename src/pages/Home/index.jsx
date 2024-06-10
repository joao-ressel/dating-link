import { NavLink } from "react-router-dom";

import "./home.css";
import HeartIcon from "../../assets/heart.png";
import AskIcon from "../../assets/cartas-icon.png";
import GalleryIcon from "../../assets/paste-icon.png";
import MessageBlock from "../../assets/mensage-block-icon.png";

export const Home = () => {
  return (
    <>
      <div className="desktop">
        <div className="icon">
          <NavLink to="/message">
            <img src={MessageBlock} alt="Ícone Mensagem" />
            <span>Mensagem</span>
          </NavLink>
        </div>

        <div className="icon">
          <NavLink to="/request">
            <img src={AskIcon} alt="Ícone Request" />
            <span>Pedido</span>
          </NavLink>
        </div>

        <div className="icon">
          <NavLink to="/heart">
            <img src={HeartIcon} alt="Ícone Coração" />
            <span>Coração</span>
          </NavLink>
        </div>

        <div className="icon">
          <NavLink to="/gallery">
            <img src={GalleryIcon} alt="Ícone Request" />
            <span>Galeria</span>
          </NavLink>
        </div>
      </div>
    </>
  );
};
