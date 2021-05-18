import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
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
      color:'white',
      fontStyle: 'arial',   
      fontSize:100,
      letterSpacing:0.7,
    },
   
  }));
  
  export default function Homepage() {
    const classes = useStyles();
  
    return (
      <div style={{backgroundImage:"url("+"https://images.wallpaperscraft.com/image/space_planet_astronomy_133670_3840x2160.jpg"+")",
    backgroundSize:'cover',backgroundPosition:'center',backgroundRepeat:'no-repeat',height:'100vh',objectFit:'cover',width:'auto'
      }}>
        <AppBar style={{backgroundColor: '#BB8FCE'}}position="static">
          <Toolbar>
          
            <Button variant="h6" //className={classes.title}
             onClick={() => history.push('/date_and_timings')}>
              Todays Timings
            </Button>
            <Button variant="h6" //className={classes.title}  
            onClick={() => history.push('/pictures')}>
              Pic Of The Day
            </Button>
            
            <Button >Rate</Button>
          </Toolbar>
        </AppBar>
        <div style={{marginTop:'200px',marginleft:'100px'}}>
    <Typography className={classes.text}><span style={{ fontSize:30,}}>WHO ARE </span>ARE WE?</Typography>
    </div>
      </div>
    );
  }