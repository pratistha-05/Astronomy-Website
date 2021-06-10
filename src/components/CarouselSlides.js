import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import {makeStyles,createStyles,withStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    carousel1:{
        position: 'relattive',
    },
    text:
    {
        position: 'absolute',
        right: '50%',
        left: '50%',
        bottom: '15%',
    },
   
}));



export default function CarouselSlides(){
    const classes = useStyles();

    return(

        <Carousel showThumbs={false} showArrows={false} autoPlay >
        <div >
           <div className={classes.carousel1}>
            <img src="https://coverfiles.alphacoders.com/494/49416.jpg"/>
            </div>
            <div className={classes.text}>
            <TextField id="standard-basic" label="Standard" />
            <p>hooooollllllllllaaaaaa</p>
            </div>
        </div>
        <div>
            <img src="https://png.pngtree.com/thumb_back/fw800/back_our/20190622/ourmid/pngtree-purple-gradient-flat-space-planet-banner-background-image_229576.jpg" />
            <p className="legend">Legend 2</p>
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