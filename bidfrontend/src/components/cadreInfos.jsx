import React from 'react';
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Header from './header/header';

function CadreInfos() {
  const { id } = useParams();
  const [article, setArticle] = useState([]);

useEffect(() => {
  fetch(`http://localhost:8080/article/${id}`)
    .then((response) => response.json())
    .then((data) => setArticle(data))
    .catch((error) => console.error('Erreur lors de la récupération de l\'article', error));
}, [id]); 
  const source = `http://localhost:3000/${article.image}`;

  return (
    <nav>
      <Header></Header>
      <div className="cadre-titre">
        <h2>{article.nom_article}</h2>
      </div>
      <div className="nouveau-cadre-avec-image">
        <img src={source} alt="Description de l'image" className="cadre-image2" />
        <div>
        <div className="nouveau-cadre">
          <div className="nouveau-cadre-gris">
            <div className="nouveau-cadre-blanc">
              <p className='textCentrer'><b>3 jours</b></p><br />
              <div className="nouveau-cadre-contenu">
                <div className='petit'>
                <p>Offre Actuelle :</p> 
                <p><b className='bb'>{NvPrix}€</b></p>
                </div>
                <div className='petit'>
                <p>Enchérisseurs :</p>
                <p><b className='bb'> {nbEnrichisseurs}</b> </p>
                </div>
              </div>
              <div className="nouveau-cadre-boutons">
                <button className="cd-signin" type="button" onClick={handleAcheterClick}>
                  Acheter
                </button>
              </div>
              {showForm && (
              <div>
                <label>
                  Prix proposé :
                  <input
                    type="number"
                    value={prixPropose}
                    onChange={e => setPrixPropose(e.target.value)}
                  />
                </label>
                <button type="button" onClick={handleConfirmerClick}>
                  Confirmer
                </button>
              </div>
            )}
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
