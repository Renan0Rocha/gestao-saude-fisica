import React from "react";
import Carrossel from "../components/carrossel";
import Footer from "../components/footer";
import Header from "../components/header";
import SecaoTreinos from "../components/secaoTreinos";
import "../styles/pages/home.css"; // Importando o CSS da página

const Home = () => {
  return (
    <div className="w-full">
      <Header />

      <div className="h-16"></div>

      <Carrossel />
      <SecaoTreinos />

      {/* Divider separando as seções */}
      <div className="divider"></div>

      {/* Nova Seção Motivacional */}
      <section className="saude-bem-estar">
        <h2>💪 A Importância da Rotina de Exercícios 🏋️‍♂️</h2>
        <p>
          A prática regular de exercícios físicos é essencial para manter o equilíbrio 
          entre corpo e mente. Além de fortalecer os músculos e melhorar a resistência,
          a atividade física reduz o estresse, melhora a qualidade do sono e 
          aumenta a disposição para o dia a dia.  
        </p>
        <p>
          Criar uma rotina de treinos ajuda a desenvolver disciplina, manter a 
          concentração e promover o bem-estar geral. Seja na academia, em casa ou ao 
          ar livre, movimentar-se é o caminho para uma vida mais saudável e equilibrada!  
        </p>
        <p>
          👉 **Dê o primeiro passo hoje e cuide do seu corpo e da sua mente!**  
        </p>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
