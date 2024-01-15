import { useState } from "react";
import "../App.css";
import "../index.css";
import { ContactButton } from "./ContactButton";
import ImageSlider from "./ImageSlider";
import { slideshow1, slideshow2, slideshow3 } from "./Slideshows";

const Portfolio = () => {
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });

  return (
    <body>
      <div className="App">
        <ImageSlider images={slideshow1} time={3100} />
        <ImageSlider images={slideshow2} time={2300} />
        <ImageSlider images={slideshow3} time={2900} />
        <div></div>
        <div></div>
        <div className="card">
          <ContactButton />
        </div>
      </div>
    </body>
  );
};

export default Portfolio;
