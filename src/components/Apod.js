import React, { Component, useState , setState} from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {makeStyles,createStyles,withStyles} from '@material-ui/core/styles';
import '../App.css';
import Box from '@material-ui/core/Box';



  

const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'Ranchers'
      ].join(','),
      allVariants:{
        color:"#900c3f",
        fontSize: 50,
    }
    },
    
    });
    const useStyles=makeStyles(()=>
    createStyles({
       heading:
       {
         fontSize:40,
         fontFamily:'Times New Roman',
         textShadow:'4px 4px 4px #BB8FCE',
         align:'center',
         display:'block',
         marginLeft:'auto',
        marginRight:'auto'
         
       },
       h1:{
        align:'center',
        display:'block',
        marginLeft:'auto',
        marginRight:'auto'
       },
       p:{
        fontSize:24,
        fontFamily:"Times New Roman",
        marginTop:50,
        width:1000,
        border:'thick',
        borderStyle:'ridge',
        justify:'center',
        display:'block',
        marginLeft:'auto',
        marginRight:'auto'
        }
    }
    )
    );
    const defaultProps = {
      bgcolor: 'background.paper',
      borderColor: 'text.primary',
      m: 1,
      border: 1,
      marginTop:10,
      style: { width: '45rem',align:'center',
      display:'block',
      marginLeft:'auto',
      marginRight:'auto' },
     
    };
    


  const Photo = props => {
    const classes = useStyles();

    return(
    <div >
      <h2 align="center"className={classes.heading}>{props.photo.title}</h2>
      <br></br>
      <img src={props.photo.url} alt={props.photo.title} className={classes.heading}/>
      <div className={classes.p}>
      <p style={{marginLeft:20,marginRight:20}}>{props.photo.explanation}</p>
      </div>
    </div>
  );
  }
 
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
      
    <Box borderRadius={16} {...defaultProps} >
       <Typography align="center">NASA's Astronomy Picture of the Day</Typography>
   </Box>
       </ThemeProvider>
      

        <Photo photo={this.state.photo} />
      </div>
)
}

}
export default Apod;