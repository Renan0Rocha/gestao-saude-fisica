import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/global.css";
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/gestao-saude-fisica">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
