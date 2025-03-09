import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import ListaTreinos from "./pages/listaTreinos";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/treino/:tipo" element={<ListaTreinos />} />
    </Routes>
  );
}

export default App;
