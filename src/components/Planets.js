import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Planets(){
    return(

        <Carousel showThumbs={false} showArrows={false} autoPlay interval="1000">
        <div>
            <img src="https://www.extremetech.com/wp-content/uploads/2019/09/black-hole-nasa.jpg" />
            <p className="legend">Legend 1</p>
        </div>
        <div>
            <img src="assets/2.jpeg" />
            <p className="legend">Legend 2</p>
        </div>
        <div>
            <img src="assets/3.jpeg" />
            <p className="legend">Legend 3</p>
        </div>
    </Carousel>
    );
}