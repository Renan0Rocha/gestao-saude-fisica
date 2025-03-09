import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/home";
import ListaTreinos from "./pages/listaTreinos";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/treino/:tipo" element={<ListaTreinos />} />
      </Routes>
    </Router>
  );
}

export default App;
