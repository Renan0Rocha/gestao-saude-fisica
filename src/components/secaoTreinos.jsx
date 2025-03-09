import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/components/secaoTreinos.css";

const SecaoTreinos = () => {
  const navigate = useNavigate();

  const treinos = [
    { nome: "Treinos para academia", img: `${import.meta.env.BASE_URL}images/academia.jpg`, path: "/treino/academia" },
    { nome: "Treinos para casa", img: `${import.meta.env.BASE_URL}images/casa.jpg`, path: "/treino/casa" },
    { nome: "Treinos ao ar livre", img: `${import.meta.env.BASE_URL}images/ar_livre.jpg`, path: "/treino/ar-livre" },
  ];
  
  return (
    <div className="treinos-container">
      <h2 className="treinos-title">Treinos</h2>

      <div className="treinos-grid">
        {treinos.map((treino, index) => (
          <div
            key={index}
            className="treino-card"
            style={{ backgroundImage: `url(${treino.img})` }}
            onClick={() => navigate(treino.path)}
          >
            <div className="treino-overlay">
              <h3>{treino.nome}</h3>
              <p className="clique-aqui">Clique aqui para ver os treinos</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecaoTreinos;
