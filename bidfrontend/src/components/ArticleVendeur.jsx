import React, { useEffect, useState } from 'react';


const ArticleVendeur = ({ sellerId }) => {
  const [Articles, setArticles] = useState([]);

  

  useEffect(() => {
    console.log(sessionStorage.getItem('user'));
    // fetch(`http://localhost:8080/article/vendeur?id=${ema}`)
    //   .then((response) => response.json())
    //   .then((data) => setArticles(data))
    //   .catch((error) => console.error('Erreur lors de la récupération des articles', error));
    const user=JSON.parse(sessionStorage.getItem("user"));
    fetch(`http://localhost:8080/article/vendeur/${user.email}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Check if data is not null or undefined before setting the state
        if (data) {
          setArticles(data);
        }
      })
      .catch((error) => console.error('Erreur lors de la récupération des articles', error));
  }, []);
  



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
            {/* Ajoutez d'autres colonnes en fonction de vos besoins */}
          </tr>
        </thead>
        <tbody>
          
            <tr>
              <td>id</td>
              <td>name</td>
              <td>desc</td>
              <td>prix</td>
              {/* Ajoutez d'autres colonnes en fonction de vos besoins */}
            </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ArticleVendeur;
