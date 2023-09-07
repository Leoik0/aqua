import React from "react";
import imgAbout1 from "../assets/imgAbout1.jpg";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";
import "./Service.css";

const Service = () => {
  return (
    <div id="service" className="about">
      <h3>Sobre Nós</h3>
      <div className="about-content">
        <div className="about-paragraph">
          <img src={imgAbout1} alt="imgAbout1" className="about-img" />
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;Bem-vindo à Aqua Lavagem! Somos uma equipe
            dedicada e apaixonada por transformar estofados em verdadeiras obras
            de arte. Com anos de experiência no setor de lavagem de estofados,
            nos tornamos líderes reconhecidos no mercado, oferecendo serviços de
            limpeza excepcionais para nossos clientes em [Localização].
          </p>
        </div>

        <div className="about-paragraph">
          <video
            src={video2}
            autoPlay
            muted
            loop
            playsInline
            className="about-video"
          >
            Seu navegador não suporta o elemento de vídeo.
          </video>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;O que nos diferencia é nosso compromisso
            inabalável com a qualidade, atendimento ao cliente de classe mundial
            e um profundo respeito pelos materiais e tecidos de seus estofados.
            Utilizamos as técnicas mais avançadas e produtos de limpeza
            ecologicamente corretos para garantir que seus estofados fiquem
            impecavelmente limpos e revitalizados.
          </p>
        </div>

        <div className="about-paragraph">
          <video
            src={video3}
            autoPlay
            muted
            loop
            playsInline
            className="about-video"
          >
            Seu navegador não suporta o elemento de vídeo.
          </video>
          <p>
            &nbsp;Na Aqua Lavagem, acreditamos que um ambiente limpo e fresco é
            essencial para o conforto e a saúde da sua família. Trabalhamos
            incansavelmente para remover manchas, odores e sujeira, devolvendo a
            beleza original aos seus estofados, móveis e carpetes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
