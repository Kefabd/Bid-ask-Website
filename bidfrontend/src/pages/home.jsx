// Home.jsx


import React, { useState } from "react";
import Header from "../components/header/header";
import Shop from './shop';
import CadreInfos from "../components/cadreInfos";
import AjoutArticle from "./AjoutArticle";

import Carousel from "react-bootstrap/Carousel";
import image1 from "../dependecies/images/500-2 (1).jpg";
import image2 from "../dependecies/images/500.jpg";
import image3 from "../dependecies/images/600.jpg";
import Cadre from '../components/cadre';



export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);


  const handleCarouselSelect = (selectedIndex) => {
    setCurrentIndex(selectedIndex);

  };
    return(
        <>
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
        <h1 className="Titre1">Récemment publiés</h1>
        <div style={{ display: "flex" }}>

        </div >
        <h1 className="Titre1">Plus populaires</h1>
        <div style={{ display: "flex" }}>
        </div >

        <div className="avis">
          <h1 className="Titre2">Avis</h1><br />
          <p className="davis">Les avis de nos clients parlent d'eux-mêmes. Explorez leurs expériences et découvertes uniques lors de nos enchères. Rejoignez notre communauté et partagez votre propre histoire aujourd'hui.</p>
          <div style={{ display: "flex" }}>
            <div className="avis-container">
              <div className="user-info">
                <img src={image1} alt="Nom de l'utilisateur" className="user-avatar" />
                <p className="user-name">Nom de l'utilisateur</p>
              </div>
              <p className="avis-texte">
                "Je suis absolument ravi de mon expérience sur ce site d'enchères. Les sélections uniques et la variété des objets proposés m'ont permis de trouver des trésors que je n'aurais jamais trouvés ailleurs. Les enchères sont excitantes, et le processus est simple et transparent. J'ai remporté plusieurs articles exceptionnels à des prix incroyables. De plus, le service client est réactif et amical. Je recommande vivement cette plateforme à tous les amateurs de découvertes exceptionnelles et d'aventures d'enchères en ligne!"
              </p>
            </div>

            <div className="avis-container">
              <div className="user-info">
                <img src={image1} alt="Nom de l'utilisateur" className="user-avatar" />
                <p className="user-name">Nom de l'utilisateur</p>
              </div>
              <p className="avis-texte">
                "Je suis absolument ravi de mon expérience sur ce site d'enchères. Les sélections uniques et la variété des objets proposés m'ont permis de trouver des trésors que je n'aurais jamais trouvés ailleurs. Les enchères sont excitantes, et le processus est simple et transparent. J'ai remporté plusieurs articles exceptionnels à des prix incroyables. De plus, le service client est réactif et amical. Je recommande vivement cette plateforme à tous les amateurs de découvertes exceptionnelles et d'aventures d'enchères en ligne!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}