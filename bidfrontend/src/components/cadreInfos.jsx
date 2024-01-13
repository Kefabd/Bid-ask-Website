import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from './header/header';

function CadreInfos() {
  const [prixPropose, setPrixPropose] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [NvPrix, setNvPrix] = useState(localStorage.getItem('NvPrix') || article.prixMin);
  const [nbEnrichisseurs, setNbEnrichisseurs] = useState(
    parseInt(localStorage.getItem('nbEnrichisseurs')) || 0
  );
  const { id } = useParams();
  const [article, setArticle] = useState([]);
  const navigate = useNavigate();
  const user=JSON.parse(sessionStorage.getItem("user"));
console.log(user)
  useEffect(() => {
    fetch(`http://localhost:8080/article/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setArticle(data);
        setNvPrix(localStorage.getItem(`NvPrix_${data.id_article}`) || data.prixMin);
        setNbEnrichisseurs(parseInt(localStorage.getItem(`nbEnrichisseurs_${data.id_article}`)) || 0);
      })
      .catch((error) =>
        console.error('Erreur lors de la récupération de l\'article', error)
      );
  }, [id]);

  useEffect(() => {
    localStorage.setItem(`NvPrix_${article.id_article}`, NvPrix);
    localStorage.setItem(`nbEnrichisseurs_${article.id_article}`, nbEnrichisseurs.toString());
  }, [NvPrix, nbEnrichisseurs, article]);

  const handleAcheterClick = () => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    if (user && !user.isVendor) {
      setShowForm(true);
    } else {
      navigate('/authenticate');
    }
  };

  const handleConfirmerClick = () => {
    const requestBody = {
      prixPropose,
      NvPrix,
    };
  
    fetch('http://localhost:8080/article/verifierPrix', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.accepte) {
          console.log('Prix accepté');
          setNvPrix(prixPropose);
          setNbEnrichisseurs(nbEnrichisseurs + 1);
        } else {
          if (timeLeft.days <= 0 && timeLeft.hours <= 0 && timeLeft.minutes <= 0 && timeLeft.seconds <= 0) {
            // If the time is up, update the article status and disable the button
            fetch(`http://localhost:8080/article/updateStatut/${article.id_article}`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ statut: 'Non disponible' }),
            })
              .then(response => response.json())
              .then(() => {
                alert('Le temps pour cette enchère est écoulé, l\'article est maintenant non disponible.');
                // Additional logic to disable the button or perform other actions
              })
              .catch((error) => {
                console.error('Erreur lors de la mise à jour du statut de l\'article :', error);
              });
          } else {
            alert('Le prix proposé doit être supérieur ou égal au prix minimum.');
          }
        }
      })
      .catch((error) => {
        console.error('Erreur lors de la vérification du prix :', error);
      });
  };
  
  const calculateTimeLeft = () => {
    const difference = new Date(article.date_fin) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <nav>
      <Header />
      <div className="cadre-titre">
        <h2>{article.nom_article}</h2>
      </div>
      <div className="nouveau-cadre-avec-image">
        <img
          src={`http://localhost:3000/${article.image}`}
          alt="Description de l'image"
          className="cadre-image2"
        />
        <div>
          <div className="nouveau-cadre">
            <div className="nouveau-cadre-gris">
              <div className="nouveau-cadre-blanc">
                <p className="textCentrer">
                <p className="cadre-temps">
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
          </p>
                </p>
                <br />
                <div className="nouveau-cadre-contenu">
                  <div className="petit">
                    <p>Offre Actuel :</p>
                    <p>
                      <b className="bb">{NvPrix}€</b>
                    </p>
                  </div>
                  <div className="petit">
                    <p>Enchérisseurs :</p>
                    <p>
                      <b className="bb"> {nbEnrichisseurs}</b>{' '}
                    </p>
                  </div>
                </div>
                <div className="nouveau-cadre-boutons">
                  <button
                    className="cd-signin"
                    type="button"
                    onClick={handleAcheterClick}
                  >
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
                        onChange={(e) => setPrixPropose(e.target.value)}
                      />
                    </label>
                    <button
                      type="button"
                      onClick={handleConfirmerClick}
                    >
                      Confirmer
                    </button>
                  </div>
                )}
              </div>
              <div className="nouveau-cadre-info">
                <p className="nouveau-cadre-prix">
                  {' '}
                  {/* <b>{NvPrix} €</b> {user.firstName} */}
          
                </p>
                <p className="nouveau-cadre-temps">{article.statut}</p>
              </div>
              <div className="bgBlanc">
                <p>
                  Toutes nos enchères sont supervisées par une notaire
                </p>
                <hr></hr>
                <p>
                  Ce montant ne comprend pas le prix 6,50 € frais d'enchère
                  et le prix 6,99 € frais de livraison. Lorsque vous gagnez,
                  vous êtes tenu de payer. Pour plus d'informations, consulte
                  les conditions générales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default CadreInfos;
