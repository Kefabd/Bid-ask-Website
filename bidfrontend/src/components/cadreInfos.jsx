import React, { useEffect, useState } from 'react';
import imageSrc from '../images/cat.jpg'; // Remplacez le chemin par le chemin réel de votre image

function CadreInfos({article}) {
  const [prixPropose, setPrixPropose] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [NvPrix, setNvPrix] = useState(localStorage.getItem('NvPrix'));
  const [nbEnrichisseurs, setNbEnrichisseurs] = useState(
    parseInt(localStorage.getItem('nbEnrichisseurs')) || 0
  );

  useEffect(() => {
    // Mettez à jour les valeurs dans le stockage local à chaque modification
    localStorage.setItem('NvPrix', NvPrix);
    localStorage.setItem('nbEnrichisseurs', nbEnrichisseurs.toString());
  }, [NvPrix, nbEnrichisseurs]);

  const handleAcheterClick = () => {
    setShowForm(true);
  };
  const handleConfirmerClick = () => {
    // Envoyez le prixPropose au backend pour vérification
    // Vous pouvez utiliser fetch ou axios pour effectuer une requête HTTP
    // Assurez-vous d'ajuster l'URL et les détails de la requête en fonction de votre backend
    fetch('http://localhost:8080/article/verifierPrix', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prixPropose }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.accepte) {
          // Implémentez ici la logique de confirmation (par exemple, rediriger vers une page de confirmation)
          console.log('Prix accepté');
          setNvPrix(prixPropose);
          setNbEnrichisseurs(nbEnrichisseurs+1);
        } else {
          alert('Le prix proposé doit être supérieur ou égal au prix minimum.');
        }
      })
      .catch(error => {
        console.error('Erreur lors de la vérification du prix :', error);
      });
  };
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
