import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams } from 'react-router-dom';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
 

const ArticleVendeur = () => {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();
  const user = JSON.parse(sessionStorage.getItem("user"));
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [nom_article, setNom_article] = useState('');
  const [date_debut, setDate_debut] = useState('');
  const [date_fin, setDate_fin] = useState('');
  const [délai, setDelai] = useState('');
  const [description, setDescription] = useState('');
  const [prixMin, setPrixMin] = useState(0);
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check if the user is authenticated as a vendor
        const userIdAsInt = parseInt(user.id_utilisateur, 10);

        // Check if the conversion is successful and userIdAsInt is a valid integer
        if (isNaN(userIdAsInt) || !user.isVendor) {
          // Redirect to the authentication page or another suitable page
          navigate('/authenticate'); // Adjust the route as needed
          return;
        }

        // Fetch articles if the user is authenticated as a vendor
        const vendeur = await fetch(`http://localhost:8080/article/vendeur?email=${user.email}`);
        const response = await vendeur.json();
        setArticles(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [user, navigate]);

  const handleDelete = async (articleId) => {
    try {
      // Envoyez une requête DELETE à l'API Spring
      await fetch(`http://localhost:8080/article/delete/${articleId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          // Vous pouvez ajouter des en-têtes supplémentaires si nécessaire
        },
      });

      // Mettez à jour localement la liste des articles après la suppression
      setArticles((prevArticles) => prevArticles.filter((article) => article.id_article !== articleId));
    } catch (error) {
      console.error('Error deleting article:', error);
    }
  };

  const handleEdit = (id) => {
    // Redirection vers la page d'édition avec l'ID spécifique
    navigate(`/edit-article/${id}`);
  };

  return (
    <div className="seller-article-table-container">
      <h2>Seller Article Table</h2>
      <table className="seller-article-table">
        <thead>
          <tr>
            <th>Article ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Date Debut</th>
            <th>Date Fin</th>
            <th>Delai</th>
            <th>Actions</th>
            {/* Add other columns as needed */}
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => (
            <tr key={article.id_article}>
              <td>{article.id_article}</td>
              <td>{article.nom_article}</td>
              <td>{article.description}</td>
              <td>{article.prixMin}</td>
              <td>{article.date_debut}</td>
              <td>{article.date_fin}</td>
              <td>{article.délai}</td>
              <td>
              <button className="delete-button" onClick={() => handleDelete(article.id_article)}>
                  <FontAwesomeIcon icon={faTrashAlt} />
                </button>
                <button className="edit-button" onClick={() => handleEdit(article.id_article)}>
                  <FontAwesomeIcon icon={faEdit} />
                </button>
              </td>
              {/* Add other columns as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArticleVendeur;
