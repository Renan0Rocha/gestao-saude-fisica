import React from "react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../styles/components/carrossel.css";

const Carrossel = () => {
  const imagens = [
    { nome: "Corrida", img: "/corrida.jpg" },
    { nome: "Treino Funcional", img: "/funcional.jpg" },
    { nome: "Treino de Força", img: "/forca.jpg" },
  ];

  return (
    <div className="carrossel-container">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="carrossel-swiper"
      >
        {imagens.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item.img} alt={item.nome} className="carrossel-img" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carrossel;
