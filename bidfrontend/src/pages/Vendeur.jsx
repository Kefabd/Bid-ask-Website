import React, { useEffect, useState } from 'react';
import Cadre from '../components/cadre';
import Header from '../components/header/header';
import AjoutArticle from './AjoutArticle';
import { useParams, useNavigate } from 'react-router-dom';

function Vendeur() {
    const { id } = useParams();
    const [articles, setArticles] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Check if the user is authenticated as a vendor
        const user = JSON.parse(sessionStorage.getItem('user'));
        if (!user || !user.isVendor) {
            // Redirect to the authentication page or another suitable page
            navigate('/authenticate'); // Adjust the route as needed
            return;
        }

        // Fetch articles if the user is authenticated as a vendor
        fetch(`http://localhost:8080/article/vendeur/${id}`)
            .then((response) => response.json())
            .then((data) => setArticles(data))
            .catch((error) => console.error('Erreur lors de la récupération des articles', error));
    }, [id, navigate]);

    console.log(articles);

    return (
        <div>
            <Header />
            <h1>Articles</h1>
            <AjoutArticle></AjoutArticle>
            {/* 
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {articles.map((article) => (
                    <Cadre key={article.id_article} article={article} style={{ margin: '10px' }} />
                ))}
            </div>
            */}
        </div>
    );
}

export default Vendeur;
