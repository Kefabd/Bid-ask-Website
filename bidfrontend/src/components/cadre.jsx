import React, { useEffect, useState } from 'react';
import 'moment/locale/fr'; // Assurez-vous d'importer la localisation souhaitée
import image from '../images/cat.jpg';

function Cadre({ article }) {
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
    <div className="cadre">
      <img className="cadre-image" src={image} alt="Description de l'image" />
      <div className="cadre-content">
        <p>{article.description}</p>
        <div className="cadre-info">
          <p className="cadre-prix">{article.prixMin} €</p>
          <p className="cadre-temps">
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cadre;
