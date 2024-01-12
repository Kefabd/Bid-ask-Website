import React from 'react';
import image from '../images/cat.jpg';

function Cadre() {
  return (
    <div className="cadre">
      <img
        className="cadre-image"
        src={image}
        alt="Description de l'image"
      />
      <div className="cadre-content">
        <p>Texte de l'article...</p>
        <div className="cadre-info">
          <p className="cadre-prix">Prix : 19,99 €</p>
          <p className="cadre-temps">Temps estimé : 2 heures</p>
        </div>
      </div>
    </div>
  );
}

export default Cadre;
