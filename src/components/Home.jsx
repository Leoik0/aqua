import React, { useState, useEffect } from "react";
import "./Home.css";
import wpp1 from "../assets/wpp01.mp4";
import wpp2 from "../assets/wpp02.mp4";
import wpp3 from "../assets/wpp03.mp4";
import wpp4 from "../assets/wpp04.mp4";

const Home = () => {
  const [videoIndex, setVideoIndex] = useState(0);
  const [text, setText] = useState("");
  const [displayText, setDisplayText] = useState("");
  const intervalDuration = 100;

  const videos = [wpp1, wpp2, wpp3, wpp4];

  useEffect(() => {
    const interval = setInterval(() => {
      setVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (text.length < displayText.length) {
      const timeout = setTimeout(() => {
        setText(displayText.slice(0, text.length + 1));
      }, intervalDuration);

      return () => clearTimeout(timeout);
    }
  }, [text, displayText]);

  useEffect(() => {
    const initialTimeout = setTimeout(() => {
      setDisplayText("Olá, seja-bem vindo(a) a Aqua Lavagem!!!");
    }, 1000);

    return () => clearTimeout(initialTimeout);
  }, []);

  const handleContrateClick = () => {
    const phoneNumber = "+555190106479";
    const message = "Olá, estou interessado(a) em contratar seus serviços.";

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="home">
      <video
        className="video-home"
        autoPlay
        muted
        loop
        id="video-background"
        key={videos[videoIndex]}
      >
        <source src={videos[videoIndex]} type="video/mp4" />
      </video>
      <div className="overlay"></div>
      <div className="home-content">
        <p className="p-home">{displayText && <>{text}</>}</p>

        <div className="button-container">
          <button className="button-71">
            <a href="#service"> Conheça nossos serviços</a>
          </button>
          <p className="p-ou">ou</p>
          <button className="button-71" onClick={handleContrateClick}>
            Contrate nossos serviços
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
