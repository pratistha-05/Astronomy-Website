import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button} from '@material-ui/core';
import history from '../../history';
import Cards from './Cards';
import Framework from './Framework';
import CarouselSlides from './CarouselSlides';
import {makeStyles,createStyles,withStyles} from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  

}));
export default function Homepage() {
  const classes = useStyles();
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
    
<Framework/>

</div>
);
}