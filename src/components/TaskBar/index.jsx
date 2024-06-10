import { NavLink } from "react-router-dom";
import StartIcon from "../../assets/start-menu-button.png"; 
import "./styles.css"; 

export const Taskbar = () => {
  return (
    <div className="taskbar">
      <NavLink to="/">
        <div className="start-button">
          <img src={StartIcon} alt="Ícone do Botão Iniciar" />
        </div>
      </NavLink>
    </div>
  );
};
