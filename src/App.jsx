import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Heart } from "./pages/Heart";
import { Message } from "./pages/Message";
import { Gallery } from "./pages/Gallery";
import { Request } from "./pages/Request";
import { Taskbar } from "./components/TaskBar";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/request" element={<Request />} />
          <Route path="/message" element={<Message />} />
          <Route path="/heart" element={<Heart />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Taskbar />
      </Router>
    </>
  );
}

export default App;
