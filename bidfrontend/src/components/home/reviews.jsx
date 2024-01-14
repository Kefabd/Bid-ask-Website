import React from "react";
import inconnu from '../../dependecies/images/inconnu.png'
import { Splide, SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';


// or other themes
// import '@splidejs/react-splide/css/skyblue';
// import '@splidejs/react-splide/css/sea-green';


// // or only core styles
// import '@splidejs/react-splide/css/core';



export default function Reviews({ avis }) {
    return (
        <>
            <section class="Container avis">
                <div class="title">
                    <h2>our reviews</h2>
                    <div class="underline"></div>
                </div>
                <Splide
                    options={{
                        type: 'slide',
                        perPage: 2,
                        perMove: 1,
                        pagination: false,
                        focus: 'center',
                        arrows: false,
                        start: 3,
                    }}
                    style={{width: "100%"}}
                >
                    {avis.map((avisItem, index) => (
                        <SplideSlide key={index}>
                            <>
                                <div className="my-5" key={index}  >
                                    {/* <div className="cards" style={{ overflow: 'visible' }}> */}
                                        <article className="review mx-3">
                                            <div className="img-container">
                                                <img src={inconnu} id="person-img" alt={`Review ${index}`} />
                                            </div>
                                            <h4 id="author">{avisItem.utilisateur.firstName} {avisItem.utilisateur.lastName}</h4>
                                            <p id="job">{avisItem.utilisateur.isVendor === true ? "Vendeur" : "Acheteur"}</p>
                                            <p id="info">
                                                {avisItem.text}
                                            </p>
                                        </article>
                                    

                                    </div>
                                {/* </div > */}
                            </>
                        </SplideSlide>
                    ))}
                </Splide>
                
            </section>
            

        </>

    )

}