import React, { useEffect, useState } from 'react';
import Cadre from '../components/cadre';
import Header from '../components/header/header';
import AjoutArticle from './AjoutArticle';

import { useParams } from 'react-router-dom';
function Vendeur() {
  const [articles, setArticles] = useState([]);
  const user=JSON.parse(sessionStorage.getItem("user"));

  useEffect(() => {
    fetch(`http://localhost:8080/article/vendeur/${user.id_utilisateur}`)
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error('Erreur lors de la récupération des articles', error));
  }, []);
  console.log(articles);

  return (
    <div>     
        <Header/>
        <h1>Articles</h1>
        <AjoutArticle></AjoutArticle>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {articles.map((article) => (
          <Cadre key={article.id_article} article={article} style={{ margin: '10px' }} />
        ))}
        </div>
    </div>
  );
        }
export default Vendeur;


