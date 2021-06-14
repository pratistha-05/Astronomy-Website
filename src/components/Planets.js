import React, { Component } from 'react';
import {Grid} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {makeStyles,createStyles,withStyles} from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  card:
  {
      backgroundColor:'#dcdcdc',
      marginBottom:30,
      marginLeft:20
  }

}));

export default function Planets(){
    const classes = useStyles();

    return(

       <div>
         <Card className={classes.card}>
             <Grid container style={{textAlign:'center',paddingBottom:20}}>
         <Grid item xs={3} >
          <h3>Mercury</h3>
        </Grid>
        <Grid item xs={9} >
          <h3>Mercury</h3>
        </Grid>
        </Grid>
        </Card>

        <Card className={classes.card}>
             <Grid container style={{textAlign:'center',paddingBottom:20}}>
         <Grid item xs={3} >
          <h3>Mercury</h3>
        </Grid>
        <Grid item xs={9} >
          <h3>Mercury</h3>
        </Grid>
        </Grid>
        </Card>

        <Card className={classes.card}>
             <Grid container style={{textAlign:'center',paddingBottom:20}}>
         <Grid item xs={3} >
          <h3>Mercury</h3>
        </Grid>
        <Grid item xs={9} >
          <h3>Mercury</h3>
        </Grid>
        </Grid>
        </Card>

        <Card className={classes.card}>
             <Grid container style={{textAlign:'center',paddingBottom:20}}>
         <Grid item xs={3} >
          <h3>Mercury</h3>
        </Grid>
        <Grid item xs={9} >
          <h3>Mercury</h3>
        </Grid>
        </Grid>
        </Card>

       </div>
    );
}