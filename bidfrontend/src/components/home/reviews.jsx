import React from "react";
import antique from '../../dependecies/images/120x80-0.jpg'
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
                        type: 'loop',
                        perPage: 2,
                        perMove: 1,
                        pagination: false,
                        focus: 'center'
                    }}
                    style={{width: "100%"}}
                >
                    {avis.map((avisItem, index) => (
                        <SplideSlide key={index}>
                            <>
                                <div className="my-5" key={index}  >
                                    <div className="cards" style={{ overflow: 'visible' }}>
                                        <article className="review">
                                            <div className="img-container">
                                                <img src={antique} id="person-img" alt={`Review ${index}`} />
                                            </div>
                                            <h4 id="author">sra jones</h4>
                                            <p id="job">UX Designer</p>
                                            <p id="info">
                                                {avisItem.text}
                                            </p>
                                        </article>

                                    </div>
                                </div >
                            </>
                        </SplideSlide>
                    ))}
                </Splide>
                
            </section>
            

        </>

    )

}