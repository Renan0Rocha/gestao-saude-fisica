import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/header"; // Importando o Header
import "../styles/pages/listaTreinos.css";

const ListaTreinos = () => {
  const { tipo } = useParams();
  const navigate = useNavigate();

  const treinos = {
    academia: [
      "Supino reto", "Supino inclinado", "Supino declinado", "Agachamento livre",
      "Leg press", "Flexora deitado", "Abdominal supra", "Abdominal infra", "Prancha isométrica"
    ],
    casa: [
      "Flexão de braço", "Flexão diamante", "Flexão militar", "Agachamento livre",
      "Agachamento sumô", "Elevação de panturrilha", "Superman", "Mountain climbers"
    ],
    "ar-livre": [
      "Corrida leve", "Corrida intervalada", "Corrida longa", "Polichinelos", "Skipping alto",
      "Pular corda", "Movimentos calistênicos", "Escalada em morro"
    ],
  };
  

  const [concluidos, setConcluidos] = useState({});
  const [timers, setTimers] = useState({});
  const [descanso, setDescanso] = useState({});
  const [finalizado, setFinalizado] = useState(false);

  useEffect(() => {
    if (
      treinos[tipo] &&
      treinos[tipo].length > 0 &&
      Object.keys(concluidos).length === treinos[tipo].length
    ) {
      setTimeout(() => setFinalizado(true), 500);
    }
  }, [concluidos, tipo, treinos]);

  const handleCheck = (exercicio) => {
    if (tipo === "ar-livre") {
      setConcluidos((prev) => ({ ...prev, [exercicio]: !prev[exercicio] }));
      return;
    }

    if (!concluidos[exercicio]) {
      setConcluidos((prev) => ({ ...prev, [exercicio]: true }));
      setTimers((prev) => ({ ...prev, [exercicio]: 50 }));
      setDescanso((prev) => ({ ...prev, [exercicio]: true }));

      const interval = setInterval(() => {
        setTimers((prev) => {
          const tempoRestante = prev[exercicio] - 1;
          if (tempoRestante <= 0) {
            clearInterval(interval);
            setDescanso((prev) => ({ ...prev, [exercicio]: false }));
            return { ...prev, [exercicio]: 0 };
          }
          return { ...prev, [exercicio]: tempoRestante };
        });
      }, 1000);
    }
  };

  return (
    <>
      <Header /> {/* Adicionando o Header na página */}

      <div className="lista-treinos-container">
        <h2>Treinos para {tipo.replace("-", " ")}</h2>

        {/* Botão de Voltar */}
        <button className="voltar-btn" onClick={() => navigate("/")}>
          ⬅ Voltar
        </button>

        {finalizado && <div className="concluido">✅ Treino Concluído! Parabéns! 🎉</div>}

        <ul>
          {treinos[tipo]?.map((exercicio, index) => (
            <li key={index} className="treino-item">
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={!!concluidos[exercicio]}
                  disabled={tipo !== "ar-livre" && !!concluidos[exercicio]}
                  onChange={() => handleCheck(exercicio)}
                />
                <span className="toggle-slider"></span>
              </label>
              {exercicio}{" "}
              
              {tipo !== "ar-livre" && timers[exercicio] > 0 && (
                <span className="timer">({timers[exercicio]}s)</span>
              )}
              {tipo !== "ar-livre" && descanso[exercicio] && (
                <div className="descanso">⏳ Pausa para descanso...</div>
              )}
            </li>
          )) || <li>Nenhum treino encontrado.</li>}
        </ul>
      </div>
    </>
  );
};

export default ListaTreinos;
