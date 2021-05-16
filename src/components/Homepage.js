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
  }));
  
  export default function Homepage() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <AppBar style={{backgroundColor: '#BB8FCE'}}position="static">
          <Toolbar>
          
            <Typography variant="h6" className={classes.title} onClick={() => history.push('/date_and_timings')}>
              Todays Timings
            </Typography>
            <Typography variant="h6" className={classes.title}  onClick={() => history.push('/pictures')}>
              Pic Of The Day
            </Typography>
            
            <Button variant="outlined">Rate</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }