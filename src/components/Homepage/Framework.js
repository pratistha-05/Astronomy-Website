import {makeStyles,createStyles,withStyles} from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
root:{
    color:'white',
    paddingTop:30,
    marginLeft:20,
    paddingBottom:20
},
img:{
    height:'auto',
    width:'100%'
  }
}));

export default function Framework(){
    const classes = useStyles();
    return(
<div style={{backgroundColor:'black'}}>
  <div className={classes.root} >
  <h2>Made Using :</h2>
  </div>
 <Grid container style={{color:'white',textAlign:'center',paddingBottom:20}}>
 <Grid item xs={2} >
          <h3>HTML</h3>
          <img className={classes.img}src="http://assets.stickpng.com/thumbs/5847f5bdcef1014c0b5e489c.png"/>
        </Grid>
        <Grid item xs={3} >
        <h3>CSS</h3>
        <img className={classes.img}src="https://logodix.com/logo/1111675.png"/>
        </Grid>
        <Grid item xs={3}>
        <h3>JavaScript</h3>
        <img className={classes.img}src="https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png"/>
        </Grid>
        <Grid item xs={2}>
        <h3>ReactJs</h3>
        <img className={classes.img}src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"/>
        </Grid>
        <Grid item xs={2}>
        <h3>Material UI</h3>
        <img className={classes.img}src="https://img.icons8.com/color/480/material-ui.png"/>
        </Grid>
 </Grid>
</div>
    );
}