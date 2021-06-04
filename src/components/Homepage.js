import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button, Grid, TextField } from '@material-ui/core';
import {makeStyles,createStyles,withStyles} from '@material-ui/core/styles';
import history from '../history';


const useStyles = makeStyles((theme) => ({

title: {
  flexGrow: 1,
  color: "#ffffff"
},
root:
{
  backgroundColor:'red'
},
text:
{
  textShadow:'4px 4px 4px #BB8FCE',
  fontStyle: 'arial',   
  fontSize:100,
  letterSpacing:0.7,
},
img:{
  height:600,
  width:'auto',
  align:'center',
display:'block',
marginLeft:'auto',
marginRight:'auto',
borderRadius:10
}

}));

export default function Homepage() {
const classes = useStyles();

return (
  //<div style={{backgroundImage:"url("+"https://images.wallpaperscraft.com/image/space_planet_astronomy_133670_3840x2160.jpg"+")",
//backgroundSize:'cover',backgroundPosition:'center',backgroundRepeat:'no-repeat',height:'100vh',objectFit:'cover',width:'auto'
  // }}>
  <div>
  <div>
    <AppBar style={{backgroundColor: '#BB8FCE',width:'1000px'}}position="static">
      <Toolbar>
      
        <Button variant="h6" 
          onClick={() => history.push('/date_and_timings')}>
          Todays Timings
        </Button>
        <Button variant="h6"  
        onClick={() => history.push('/pictures')}>
          Pic Of The Day
        </Button>
        <Button variant="h6" 
        onClick={() => history.push('/planets')}>
          Planets
        </Button>
        <Button >Rate</Button>
      </Toolbar>
    </AppBar>
    </div>
    <Grid container style={{minHeight: '100vh' }}> 


      <Grid item xs={12} sm={6}
      style={{
      flexGrow:1,
      width:'auto',
      objectFit: 'cover',
      backgroundColor:'red'}} >

        <div style={{marginTop:'200px',marginleft:'100px',width:'630px'}}>
          <Typography className={classes.text}><span style={{ fontSize:30,}}>WHO</span>ARE WE?</Typography>
          <Typography style={{ fontSize:20}}>
               <b><i>WE FIND THAT WE LIVE IN AN INSIGNIFICANT PLANET OF A HUMDRUM STAR LOST IN A GALAXY TUCKED AWAY IN A CORNOR OF A UNIVERSE IN WHICH THERE ARE FAR MORE GALAXIES THAN PEOPLE</i></b></Typography>
         </div>
      </Grid>


    <Grid item xs={12} sm={6}
      style={{
      width:'auto',
      height:'100vh',
      objectFit: 'cover'}}>
    
<img src="https://cdn.dribbble.com/users/2417352/screenshots/11385575/media/1de58f77695f02bbc6b8c7d12fa061ed.jpg" 
className={classes.img}/>


  </Grid>
</Grid>
</div>
);
}