import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Typography } from '@material-ui/core';

export default function CarouselSlides(){
    return(

        <Carousel showThumbs={false} showArrows={false} autoPlay >
        <div style={{backgroundImage:"url("+"https://www.extremetech.com/wp-content/uploads/2019/09/black-hole-nasa.jpg"+")",objectFit:"cover"}}>
           
            {/*<img src= />*/}
            <div style={{marginTop:30}}><Typography color="white">HIIII</Typography></div>
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

/*
<Typography className={classes.text}><span style={{ fontSize:30}}>WHO ARE</span> WE?</Typography>
               <Typography style={{ fontSize:20,marginLeft:30,maxWidth:500}} >
               <b><i>WE FIND THAT WE LIVE IN AN INSIGNIFICANT PLANET OF A HUMDRUM STAR LOST IN A GALAXY TUCKED AWAY IN A CORNOR OF A UNIVERSE IN WHICH THERE ARE FAR MORE GALAXIES THAN PEOPLE</i></b>
            </Typography>
            */