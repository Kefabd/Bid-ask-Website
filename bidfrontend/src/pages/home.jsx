// Home.jsx


import React, { useEffect, useState } from "react";
import Header from "../components/header/header";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../dependecies/images/500-2 (1).jpg";
import image2 from "../dependecies/images/500.jpg";
import image3 from "../dependecies/images/600.jpg";
import { useNavigate } from "react-router-dom";
import Reviews from "../components/home/reviews";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Cadre from "../components/cadre";
import Footer from "../components/Footer";
import Populaires from "../components/Populaires";
import Avis from "../components/home/Avis";




export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [text, setAvis] = useState('');
  const [reviews, setReviews] = useState([]);
  const [recent, setRecent] = useState([]);
  const navigate = useNavigate();

  const handleCarouselSelect = (selectedIndex) => {
    setCurrentIndex(selectedIndex);

  };

  const handleSumit = async (e) => {
    e.preventDefault();
    const currentUser = JSON.parse(sessionStorage.getItem("user"));
    if (currentUser) {
      const user_id = currentUser.id_utilisateur;
      const avis = { text, utilisateur: { id_utilisateur: user_id } };
      console.log(avis);
      const response = await fetch("http://localhost:8080/avis/add", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(avis)
      })
        .then(console.log("Avis Added successefly"))

    } else
      navigate('/authenticate');
  }



  useEffect(() => {
    const fetchDataFromServer = async () => {
      try {
        const response = await fetch("http://localhost:8080/article/recent");
        const result = await response.json();
        console.log(result);
        setRecent(result);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataFromServer();
  }, []);
  // console.log(reviews)

  return (
    <>
      <div>
        <Header />
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1 }}>
            <Carousel onSelect={handleCarouselSelect}>
              <Carousel.Item>
                <img src={image1} alt="Image 1" className="image-carousel" />
              </Carousel.Item>
              <Carousel.Item>
                <img src={image2} alt="Image 2" className="image-carousel" />
              </Carousel.Item>
              <Carousel.Item>
                <img src={image3} alt="Image 3" className="image-carousel" />
              </Carousel.Item>
            </Carousel>
          </div>
          <div style={{ flex: 1 }} className="flex2">
            <h1 className="TitreHome">
              Explorez l'Exclusivité: Enchères en Ligne Exceptionnelles
              {/* {user.id_utilisateur} */}
            </h1>
            <p className="SubTitreHome">
              Rejoignez notre communauté passionnée et plongez dans le frisson des
              enchères en ligne pour des acquisitions inoubliables.
            </p>
            <div style={{ display: "flex" }}>
              {[image1, image2, image3].map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Small Image ${index + 1}`}
                  className={`image-carousel2 ${currentIndex === index ? 'active' : ''}`}
                />
              ))}
            </div>
          </div>
          {/* <h1 className="Titre1">Récemment publiés</h1>
          <div style={{ display: "flex", overflow: 'scroll' }}>
                {recent.map((articlee, index) => {
                  <Cadre article={articlee} />
                })}
          </div >
          <h1 className="Titre1">Plus populaires</h1>
          <div style={{ display: "flex" }}>
          </div > */}

        </div>
        <div>
          <h1 className="Titre1">Récemment publiés</h1>

          <div style={{ display: "flex", overflowX: 'scroll', scrollbarWidth:'none' }} className="recent">
            {recent.map((articlee, index) => (
              <div key={index} style={{ flex: '0 0 auto' }} className="mx-2">
                <Cadre article={articlee} />
              </div>
            ))}
          </div >
          <h1 className="Titre1">Plus populaires</h1>
          <Populaires></Populaires>
        </div>
        <div>
          <form className="avis-form" action="POST" onSubmit={handleSumit}>
            <label htmlFor="avis-text">Donner avis</label>
            <textarea
              id="avis-text"
              className="avis-textarea"
              name="description"
              required
              onChange={(e) => {
                setAvis(e.target.value);
              }}
            ></textarea>
            <input type="submit" className="cd-signin" value="Submit Avis" />
          </form>
          <br></br>

          <Avis />

        </div>
      </div>
      <Footer></Footer>
    </>
  )
}