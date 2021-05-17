import React, { useState ,Component } from 'react';
import Typography from '@material-ui/core/Typography';
import axios from "axios";
import { Button, Grid, TextField } from '@material-ui/core';
import {fade,makeStyles,createStyles,withStyles, StylesProvider} from '@material-ui/core/styles';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import '../App.css';


const useStyles=makeStyles((theme)=>
  ({
      button1:
      {
        backgroundColor:'#7BCCB5',
        justify:'center',
        fontSize: 20,
        textTransform: 'capitalize',
        marginLeft: 'auto',
        marginRight:'auto',
        display:'block',
        marginTop:30

      },
      paper:
      {
        backgroundImage:`url('https://cdn.dribbble.com/users/5716533/screenshots/15329647/media/60bb154b2ae4b5bf406ac1905c2b5a0c.png')`,
        height:'100%',
       
        
      },
      search: {
        display:'block',
        align:'center',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.common.white,
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.7),
        },
        marginLeft: 'auto',
        marginRight:'auto',
        marginTop:100,
        width: '300px',
        //height:50
      },

  
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

  const [datas, setData] = useState([]); //fetching data
  const[loc,setLoc] = useState("");

  const handleChange = (event) =>{
    console.log(event.target.value);
    setLoc(event.target.value);

  }

const handleSearch = () =>{
 console.log(loc);
 
  axios
  .get(`https://api.ipgeolocation.io/astronomy?apiKey=81f5f3932ece4462aaacd14b1b6eaf6e&location=${loc},%20US`)
  .then((res) => {
    console.log(res);
    setData(res.data);
  })
  .catch((err) => {
    console.log(err);
  });
  
}


  

  

      return(
         <div>
        <Grid container style={{minHeight: '100vh' }}> 


        <Grid item xs={12} sm={6}
        style={{height:'100vh',
        flexGrow:1,
        width:'auto',
        backgroundImage:'linear-gradient(red,yellow)',
       
            
        objectFit: 'cover'}} 
        >
          <ThemeProvider theme={theme}>
             <Typography align="center" variant="h4">Enter the City's name</Typography>
             </ThemeProvider>
           
            
            
            <InputBase 
            className={classes.search}
              placeholder="Search"
              inputProps={{ 'aria-label': 'search' }}
              value={loc}
              onChange={handleChange}
            />
          
          
            <Button color="inherit" 
            className={classes.button1} 
            onClick={handleSearch}
            >Search</Button>

            <Typography  display="block" align="center"
            style={{color:'white',fontStyle: 'Poppins',marginTop:'20px',fontSize:18,letterSpacing:0.7,textShadow:'4px 4px 4px black'}}
            >
              Hey There! You can give location of any city in here and get timings of all astronomicals events like moonrise, moonset, sunrise, sunset, daylenth and current-time</Typography>
            </Grid>


            <Grid item xs={12} sm={6}
        style={{maxHeight:'0'}}>
          <div style={{
            fontFamily:"Times",fontSize:22,marginTop:50,marginLeft:50}}>
          {/*<p>{loc}{" "}is at <b><i>{datas.location.latitude}</i></b>{" "}latitude and <b><i>{datas.location.longitude}</i></b>{" "}longitude</p>*/}
          <p>Today's Date : <b>{datas.date}</b></p>
          <p>Length of Day : <b>{datas.day_length}</b>{" "}Hours</p>

          <p>Solar Noon : <b>{datas.solar_noon}</b>{" "}Hours</p>
          <p>Sun's Distance from Earth : <b>{datas.sun_distance}</b>{" "}K.M</p>
          <p>Sun Rise Time : <b>{datas.sunrise}</b>{" "}Hours</p>
          <p>Sun Set Time : <b>{datas.sunset}</b>{" "}Hours</p>           

          <p>Moon's Distance from Earth : <b>{datas.moon_distance}</b>{" "}K.M</p>
          <p>Moon Rise Time : <b>{datas.moonrise}</b>{" "}Hours</p>
          <p>Moon Set Time : <b>{datas.moonset}</b>{" "}Hours</p> 
          </div>

            </Grid>
            </Grid>
            </div>
           
      
);
}
// data.location.latitude,data.location.longitude
//data.moon_distance
//data.moonrise
//data.mooset
//data.solar_noon

//TODO
//data.sun_distance
//data.sunrise
//data.sunset 
