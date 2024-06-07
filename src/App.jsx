import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Mensagem } from "./pages/Mensagem";
import { Coracao } from "./pages/Coracao";
import { Pedido } from "./pages/Pedido";
import { Home } from "./pages/Home";
import { BarraTarefas } from "./components/BarraTarefas/BarraTarefas";

function App() {
  return (
    <>
      {" "}
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/pedido" element={<Pedido />} />
          <Route path="/mensagem" element={<Mensagem />} />
          <Route path="/coracao" element={<Coracao />} />
        </Routes>
        <BarraTarefas />
      </Router>
    </>
  );
}

export default App;
