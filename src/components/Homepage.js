import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button, Grid, TextField } from '@material-ui/core';
import {makeStyles,createStyles,withStyles} from '@material-ui/core/styles';
import history from '../history';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles((theme) => ({

title: {
  flexGrow: 1,
  color: "#ffffff"
},
root:
{
  maxWidth: 345,
},

text:
{
  textShadow:'4px 4px 4px #BB8FCE',
  fontStyle: 'arial',
  marginLeft:20,   
  fontSize:100,
  letterSpacing:0.7,
},
img:{
  height:600,
  width:'765px',
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
    <AppBar style={{backgroundColor: '#BB8FCE',width:'100%'}}position="static">
      <Toolbar>
      
        <Button  variant="outlined" 
          onClick={() => history.push('/date_and_timings')}>
          Todays Timings
        </Button>
        <Button variant="outlined" style={{marginLeft:30}}
        onClick={() => history.push('/pictures')}>
          Pic Of The Day
        </Button>
        <Button variant="outlined"  style={{marginLeft:30}}
        onClick={() => history.push('/planets')}>
          Planets
        </Button>
        <Button  variant="outlined" style={{marginLeft:30}}>Rate</Button>
      </Toolbar>
    </AppBar>
    </div>
    <Grid container> 


      <Grid item xs={12} sm={6}>
          <Typography className={classes.text}><span style={{ fontSize:30,}}>WHO ARE</span> WE?</Typography>
               <Typography style={{ fontSize:20}}>
               <b><i>WE FIND THAT WE LIVE IN AN INSIGNIFICANT PLANET OF A HUMDRUM STAR LOST IN A GALAXY TUCKED AWAY IN A CORNOR OF A UNIVERSE IN WHICH THERE ARE FAR MORE GALAXIES THAN PEOPLE</i></b>
</Typography>
      </Grid>


    <Grid item xs={12} sm={6}>
      
    
<img src="https://cdn.dribbble.com/users/2417352/screenshots/11385575/media/1de58f77695f02bbc6b8c7d12fa061ed.jpg" 
className={classes.img}/>


  </Grid>
  <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
</Grid>
</div>
);
}