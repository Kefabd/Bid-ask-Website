import React, { useEffect, useState } from 'react';
import Cadre from '../components/cadre';
import Header from '../components/header/header';

import { useParams } from 'react-router-dom';
function Vendeur() {
    const { id } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/article/vendeur/${id}`)
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error('Erreur lors de la récupération des articles', error));
  }, []);
  console.log(articles);

  return (
    <div>     
        <Header/>
        <h1>Articles</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {articles.map((article) => (
          <Cadre key={article.id_article} article={article} style={{ margin: '10px' }} />
        ))}
      </div>
    </div>
  );
}

export default Vendeur;


