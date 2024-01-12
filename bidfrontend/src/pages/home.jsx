// Home.jsx


import React, { useState } from "react";
import Header from "../components/header/header";
import Cadre from "../components/cadre";
import CadreInfos from "../components/cadreInfos";

import Carousel from "react-bootstrap/Carousel";
import image1 from "../dependecies/images/500-2 (1).jpg";
import image2 from "../dependecies/images/500.jpg";
import image3 from "../dependecies/images/600.jpg";

export default function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleCarouselSelect = (selectedIndex) => {
      setCurrentIndex(selectedIndex);
    };
    return (
        <div>
    <Header />
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <Carousel onSelect={handleCarouselSelect}>
            <Carousel.Item>
              <img src={image1} alt="Image 1" className="image-carousel" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={image2} alt="Image 2" className="image-carousel" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={image3} alt="Image 3" className="image-carousel" />
            </Carousel.Item>
          </Carousel>
        </div>
        <div style={{ flex: 1 }} className="flex2">
          <h1 className="TitreHome">
            Explorez l'Exclusivité: Enchères en Ligne Exceptionnelles
          </h1>
          <p className="SubTitreHome">
            Rejoignez notre communauté passionnée et plongez dans le frisson des
            enchères en ligne pour des acquisitions inoubliables.
          </p>
          <div style={{ display: "flex" }}>
            {[image1, image2, image3].map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Small Image ${index + 1}`}
                className={`image-carousel2 ${currentIndex === index ? 'active' : ''}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div>
        <h1 className="Titre1">Récemment publiés</h1>
        <Cadre></Cadre>
        <CadreInfos></CadreInfos>
      </div>
            <style>
                {
                    `
                    h2{
                        padding-top:50px;
                        align-items: center;
                    }
                    `

                }
            </style>
        </div>
    );
}

