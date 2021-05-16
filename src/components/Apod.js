import React, { Component, useState , setState} from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {makeStyles,createStyles,withStyles} from '@material-ui/core/styles';
import '../App.css';


  

const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'Ranchers'
      ].join(','),
      allVariants:{
        color:"#900c3f",
        fontSize: 30,
    }
    },
    
    });

  const Photo = props => (
   
    <div >
      <h2 align="center">{props.photo.title}</h2>
      <img src={props.photo.url} alt={props.photo.title}  className="center" width="600"/>
      <p className="text">{props.photo.explanation}</p>
    </div>
  );
 
class Apod extends React.Component {
    state = {
      photo: ""
      };
    componentDidMount(){
        fetch(`https://api.nasa.gov/planetary/apod?api_key=prthtPMoMaUoWLdDHzsfGKjpvsJHhm0C6RRtEBN3`)
          .then(response => response.json())
          .then(json => this.setState({ photo: json }));
      
    };
render(){

return(
    <div>
    <ThemeProvider theme={theme}>
       <Typography align="center">NASA's Astronomy Picture of the Day</Typography>
       </ThemeProvider>
        <Photo photo={this.state.photo} />
      </div>
)
}

}
export default Apod;