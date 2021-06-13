import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button, Grid, TextField } from '@material-ui/core';
import history from '../../history';
import Cards from './Cards';
import Framework from './Framework';
import CarouselSlides from './CarouselSlides';


export default function Homepage() {

return (
  
  <div>
  
 <div>
   <div >
    <AppBar color="transparent" elevation={0} position="fixed">
      <Toolbar>
      
        <Button style={{color:'white'}}
          onClick={() => history.push('/date_and_timings')}>
          Todays Timings
        </Button>
        <Button  style={{marginLeft:30,color:'white'}}
        onClick={() => history.push('/pictures')}>
          Pic Of The Day
        </Button>
        <Button style={{marginLeft:30,color:'white'}}
        onClick={() => history.push('/planets')}>
          Planets
        </Button>
        <Button  style={{marginLeft:30,color:'white'}}>Rate</Button>
      </Toolbar>
    </AppBar>
    </div>

     {/*CAROUSEL*/}
       
      <CarouselSlides/>
      </div>
      

   <div style={{backgroundColor:'#dcdcdc'}}>
      <Typography style={{fontSize:30,marginLeft:20,paddingTop:20}} >What's New!</Typography>
      <Cards/>
    </div>
    
<div style={{backgroundColor:'black'}}>
  <div  style={{color:'white',paddingTop:30,marginLeft:20,paddingBottom:20}}>
  <h2>Made Using :</h2>
  </div>
 <Grid container spacing={3} style={{color:'white',textAlign:'center',paddingBottom:20}}>
 <Grid item xs={3} >
          <h3>HTML</h3>
        </Grid>
        <Grid item xs={3} >
        <h3>CSS</h3>
        </Grid>
        <Grid item xs={3}>
        <h3>JavaScript</h3>
        </Grid>
        <Grid item xs={3}>
        <h3>ReactJs</h3>
        </Grid>
 </Grid>
</div>

</div>
);
}