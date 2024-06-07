import { NavLink } from "react-router-dom";
import StartIcon from "../../assets/start-menu-button.png"; // Importe o ícone do botão iniciar
import "./styles.css"; // Importe o arquivo de estilos CSS da barra de tarefas

export const BarraTarefas = () => {
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
