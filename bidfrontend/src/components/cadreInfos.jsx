import React from 'react';
import imageSrc from '../images/cat.jpg'; // Remplacez le chemin par le chemin réel de votre image

function CadreInfos() {
  return (
    <nav>
      <div className="cadre-titre">
        <h2>Titre du Cadre</h2>
      </div>
      <div className="nouveau-cadre-avec-image">
        <img src={imageSrc} alt="Description de l'image" className="cadre-image" />
        <div>
        <div className="nouveau-cadre">
          <div className="nouveau-cadre-gris">
            <div className="nouveau-cadre-blanc">
              <p className='textCentrer'><b>3 jours</b></p><br />
              <div className="nouveau-cadre-contenu">
                <div className='petit'>
                <p>Offre Actuelle :</p> 
                <p><b className='bb'>99,99 €</b></p>
                </div>
                <div className='petit'>
                <p>Enchérisseurs :</p>
                <p><b className='bb'> 5</b> </p>
                </div>
              </div>
              <div className="nouveau-cadre-boutons">
                <button className="cd-signin" type="button">Acheter</button>
              </div>
            </div>
            <div className="nouveau-cadre-info">
              <p className="nouveau-cadre-prix"> <b>79,99 €</b> acheteur</p>
              <p className="nouveau-cadre-temps"> 2 jours</p>
            </div>
            <div className='bgBlanc'>
            <p>Toutes nos enchères sont supervisées par une notaire</p><hr></hr>
            <p>Ce montant ne comprend pas le prix 6,50 € frais d'enchère et le prix 6,99 € frais de livraison. Lorsque vous gagnez, vous êtes tenu de payer. Pour plus d'informations, consulte les conditions générales.</p>
          </div>
          </div>
        </div>
      </div>
      </div>
    </nav>
  );
}

export default CadreInfos;
