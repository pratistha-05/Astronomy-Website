import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Typography } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {makeStyles,createStyles,withStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
   
    text:
    {
        position: 'absolute',
        right: '10%',
        left: '60%',
        bottom: '15%',
        color:'white'
    },
    text1:{
        fontSize:80,
        marginBottom:-8
    },
    heading:{
        position: 'absolute',
        right: '65%',
        left: '0%',
        bottom: '80%',
        color:'white'

    }
   
}));

const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'Ranchers'
      ].join(','),
    },
   
    });

export default function CarouselSlides(){
    const classes = useStyles();

    return(

        <Carousel showThumbs={false} autoPlay infiniteLoop interval="5000">
        <div >
           <div>
            <img src="https://coverfiles.alphacoders.com/494/49416.jpg"/>
            </div>
            <div className={classes.text}>
           <h3 className={classes.text1}><span style={{ fontSize:30}}>WHO ARE</span> WE? </h3>
               <p>
               <b><i>THE HUMAN RACE IS JUST A CHEMICAL SCUM ON A MODERATE-SIZED PLANET, ORBITING AROUND A VERY AVERAGE STAR IN THE OUTER SUBURB OF ONE AMONG A HUNDRED BILLION GALAXIES.</i></b>
               </p>
            </div>
            <div className={classes.heading}>
                <ThemeProvider theme={theme}>
            <Typography variant="h4">Somewhere, Something incredible is waiting to be known</Typography>
            </ThemeProvider>
            </div>
        </div>
        <div>
            <div>
            <img src="https://png.pngtree.com/thumb_back/fw800/back_our/20190622/ourmid/pngtree-purple-gradient-flat-space-planet-banner-background-image_229576.jpg" />
            </div>
            <div className={classes.text}>
            <h3 className={classes.text1}><span style={{ fontSize:30}}>WHERE ARE</span> WE?</h3>
               <p>
               <b><i>WE FIND THAT WE LIVE IN AN INSIGNIFICANT PLANET OF A HUMDRUM STAR LOST IN A GALAXY TUCKED AWAY IN A CORNOR OF A UNIVERSE IN WHICH THERE ARE FAR MORE GALAXIES THAN PEOPLE</i></b>
            </p>
            </div>
            <div className={classes.heading}>
                <ThemeProvider theme={theme}>
            <Typography variant="h4">Somewhere, Something incredible is waiting to be known</Typography>
            </ThemeProvider>
            </div>
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