import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import '../App.css';
import { FaRocket } from 'react-icons/fa';
import history from '../history';
import {makeStyles,createStyles,withStyles} from '@material-ui/core/styles';


const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Ranchers'
    ].join(','),
  },
 
  });
  
  const useStyles=makeStyles(()=>
createStyles({
    button1:
    {
      backgroundColor:'#7BCCB5',
      justify:'center',
      fontSize: 20,
      textTransform: 'capitalize'
    },
  page:{
    width:1535,
    height:'100vh',
    backgroundImage:`url(https://cdn.dribbble.com/users/730703/screenshots/7749062/media/897d251900a10f173ea8a2adece4cec1.jpg)`
  }
}
)
);



const Welcome = () => {
 
  const classes=useStyles();
    return(
     
      <div >
         
      <header class="App-header">
       <div >
      <FaRocket size={150}/>
      </div>
     <ThemeProvider theme={theme}>
         <Typography variant="h2" color="white">Welcome to Spaconomy</Typography>
     </ThemeProvider>
     
     <p style={{fontSize:20,maxWidth:500,alignItems:'center',justifyContent:'center'}}>One of the things we can do is inspire young mind to that kind of Math and Science education that will help youngsters take us to next level of space travel</p>
    
     <Button className={classes.button1}
      onClick={() => history.push('/homepage')}
     aria-label="large outlined primary button group"
     style={{fontSize:18,color:"white"}}>
     Let's Get Started
     </Button>
     
     </header>
     </div>
    )
}
export default Welcome;

