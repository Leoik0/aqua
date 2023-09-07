import React, { useState } from "react";
import "./Gallery.css";
import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.jpg";
import photo4 from "../assets/photo4.jpg";
import photo5 from "../assets/photo5.jpg";
import photo6 from "../assets/photo6.jpg";
import photo7 from "../assets/photo7.jpg";
import photo8 from "../assets/photo8.jpg";
import photo9 from "../assets/photo9.jpg";
import photo10 from "../assets/photo10.jpg";
import photo11 from "../assets/photo11.jpg";
import photo12 from "../assets/photo12.jpg";
import photo13 from "../assets/photo13.jpg";
import photo14 from "../assets/photo14.jpg";
import photo15 from "../assets/photo15.jpg";
import photo16 from "../assets/photo16.jpg";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

  const initialPhotosCount = window.innerWidth > 768 ? 8 : 2; // Número inicial de fotos a serem exibidas
  const photos = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
    photo7,
    photo8,
    photo9,
    photo10,
    photo11,
    photo12,
    photo13,
    photo14,
    photo15,
    photo16,
  ];

  const handleNext = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + initialPhotosCount) % photos.length
      );
      setFade(false);
    }, 500);
  };

  const handlePrev = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex - initialPhotosCount + photos.length) % photos.length
      );
      setFade(false);
    }, 500);
  };

  const handlePhotoClick = (index) => {
    const actualIndex = currentIndex + index;
    setSelectedPhotoIndex(actualIndex);
  };

  const handlePhotoClose = () => {
    setSelectedPhotoIndex(null);
  };

  return (
    <div className="gallery" id="gallery">
      <div className="gallery-title">
        <h2>Galeria de Fotos</h2>
      </div>

      <div className="photo-section">
        <div className={`visible-photos ${fade ? "fade-out" : ""}`}>
          {photos
            .slice(currentIndex, currentIndex + initialPhotosCount)
            .map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`Photo ${index}`}
                className={`gallery-photo ${
                  selectedPhotoIndex === index ? "expanded" : ""
                }`}
                onClick={() => handlePhotoClick(index)}
              />
            ))}
        </div>

        <div className="photo-nav">
          <button className="btn-prev" onClick={handlePrev}>
            &#8592;
          </button>
          <button className="btn-next" onClick={handleNext}>
            &#8594;
          </button>
        </div>
      </div>

      {selectedPhotoIndex !== null && (
        <div className="enlarged-photo-overlay" onClick={handlePhotoClose}>
          <img
            src={photos[selectedPhotoIndex]}
            alt={`Foto ${selectedPhotoIndex + 1}`}
            className="enlarged-photo"
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
