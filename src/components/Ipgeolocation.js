import React, { useState ,Component } from 'react';
import Typography from '@material-ui/core/Typography';
import axios from "axios";
import { Button, Paper } from '@material-ui/core';
import {makeStyles,createStyles,withStyles, StylesProvider} from '@material-ui/core/styles';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import '../App.css';


const useStyles=makeStyles(()=>
  createStyles({
      button1:
      {
        backgroundColor:'#7BCCB5',
        justify:'center',
        fontSize: 20,
        textTransform: 'capitalize'
      },
      paper:
      {
        backgroundImage:`url('https://cdn.dribbble.com/users/5716533/screenshots/15329647/media/60bb154b2ae4b5bf406ac1905c2b5a0c.png')`,
        height:'1356',
       
        
      }
    
  }
  ));

 
  const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'Ranchers'
      ].join(','),
    },
   
    });

export default function Ipgeolocation() {
  const classes=useStyles();

var f=1;
  const [datas, setData] = useState([]); //fetching data
/*if(f==1)
{
  axios
  .get(`https://api.ipgeolocation.io/astronomy?apiKey=81f5f3932ece4462aaacd14b1b6eaf6e&location=New%20Delhi,%20US`)
  .then((res) => {
    console.log(res);
    setData(res.data);
  })
  .catch((err) => {
    console.log(err);
  });
  f++;
}
   */

      return(
         
            <Paper className={classes.paper}>
          <ThemeProvider theme={theme}>
             <Typography align="center" variant="h4">Enter the City's name</Typography>
             </ThemeProvider>
            {/*} <img src="https://cdn.dribbble.com/users/5716533/screenshots/15329647/media/60bb154b2ae4b5bf406ac1905c2b5a0c.png"
             className={classes.image}></img>
            */}
            <Button color="inherit" className={classes.button1}>Search</Button>
            
            </Paper>
           
      
);
}
//  
