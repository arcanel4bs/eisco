import React, { useState, useEffect } from 'react';

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/image1.jpg",
    "/image2.jpg",
    "/image3.jpg",
    "/image4.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-96 overflow-hidden">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Project ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
}

export default ImageSlider;
