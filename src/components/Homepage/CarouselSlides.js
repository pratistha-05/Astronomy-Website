import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from 'react-material-ui-carousel'
import { Typography } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {makeStyles,createStyles,withStyles} from '@material-ui/core/styles';
import slide1 from '../assests/slide1.jpg';
import slide2 from '../assests/slide2.jpg';


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
        [theme.breakpoints.down("sm")] : {
            fontSize:40,
            },
        marginBottom:-8
    },
    heading:{
        position: 'absolute',
        right: '65%',
        left: '0%',
        bottom: '70%',
        top:'20%',
        color:'white'

    },
    photo:
    {
        width:'1800vh',
        height:'600px'
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

        <Carousel showThumbs={false} autoPlay infiniteLoop interval="5000" dynamicHeight="true">
        <div >
           <div >
            <img src={slide1} className={classes.photo}/>
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
            <img src={slide2} style={{height:600,width:2000}}/>
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