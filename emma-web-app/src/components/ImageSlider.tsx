import { useState, useEffect } from "react";
import "../App.css";
import "../index.css";

export interface slideImage {
  url: string;
}

export interface imageSlideInput {
  time: number;
  images: string[];
}

function ImageSlider(input: imageSlideInput) {
  let len: number = input.images.length;
  const [currentIndex, setSeconds] = useState(
    Math.floor(Math.random() * 15) % len
  );

  const slideStyle = {
    width: "40%",
    height: "auto",
    padding: "0px",
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(
        (currentIndex) => (currentIndex + Math.floor(Math.random() * 100)) % len
      );
    }, input.time);
    return () => clearInterval(interval);
  }, [len]);

  return (
    <div>
      <img src={input.images[currentIndex]} style={slideStyle} />
    </div>
  );
}

export default ImageSlider;
