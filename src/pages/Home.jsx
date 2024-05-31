import { Link } from "react-router-dom";
import "../styles/home.css";
import MensageBlock from "../assets/mensage-block-icon.png";
import AskIcon from "../assets/cartas-icon.png";
import HeartIcon from "../assets/heart.png";

export const Home = () => {
  return (
    <>
      <div className="desktop">
        <div className="icon">
          <Link to="/mensagem">
            <img src={MensageBlock} alt="Ícone Mensagem" />
            <span>Mensagem</span>
          </Link>
        </div>
        <div className="icon">
          <Link to="/pedido">
            <img src={AskIcon} alt="Ícone Pedido" />
            <span>Pedido</span>
          </Link>
        </div>
        <div className="icon">
          <Link to="/coracao">
            <img src={HeartIcon} alt="Ícone Coração" />
            <span>Coração</span>
          </Link>
        </div>
      </div>
     
    </>
  );
};
