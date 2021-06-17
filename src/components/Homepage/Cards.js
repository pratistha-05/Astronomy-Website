import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Button} from '@material-ui/core';
import {makeStyles,createStyles,withStyles} from '@material-ui/core/styles';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/styles";



const useStyles = makeStyles((theme) => ({

    root:
    {
      maxWidth: 310,
        [theme.breakpoints.down("sm")] : {
      maxWidth:'100%',
      height:'auto',
      },
    marginLeft:30,
    marginRight:30,
    marginBottom:10,
      float: 'left',
    },
    card:
    {
      [theme.breakpoints.down("sm")] : {
        flexDirection:'column'
      },
      marginTop:30,
      paddingBottom:30,
      display:'flex',
      flexDirection:'row'
    },
   
}));


export default function Cards(){
  const theme = useTheme();


    const classes = useStyles();

    return(
        <div className={classes.card}>
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Black Hole"
          height="180"
          image="https://www.extremetech.com/wp-content/uploads/2019/09/black-hole-nasa.jpg"
          title="Black Hole"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           Black Hole
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Black holes are points in space that are so dense they create deep gravity sinks.Because of which not even light can escape it's powerful tug of gravity. And anything that ventures too close—be it star, planet, or spacecraft—will be stretched and compressed and We can only imagine as if it has galloped</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Button size="small" color="primary" >
          Learn More
        </Button>
      </CardActions>
    </Card>

    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="180"
          image="https://www.thoughtco.com/thmb/Od7pkHI_V_j7r8uti4hVqbJGBaQ=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/GalCenterNewColors_medium-58b8487f3df78c060e6889bc.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          What's Happening in the Milky Way's Core?
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Something intriguing and really fascinating! All the activity is related to the galaxy's supermassive black hole, named Sagittarius A and it lies right at the center of our galaxy. Astronomers have began to notice "chatter" that's visible to x-ray telescopes</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Button size="small" color="primary" >
          Learn More
        </Button>
      </CardActions>
    </Card>

    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="180"
          image="https://i2.wp.com/www.drewexmachina.com/wp-content/uploads/2015/02/HST_Prox_Cen_potw1343a.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Proxima Centuary
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          A small, low-mass star located 4.2465 light-years away from the Sun in the southern constellation of Centaurus. Its Latin name means the "nearest [star] of Centaurus". This object was discovered in 1915 by Robert Innes and is the nearest-known star to the Sun.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Button size="small" color="primary" >
          Learn More
        </Button>
      </CardActions>
    </Card>

    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="180"
          image="https://www.thoughtco.com/thmb/TVZkXhCMqbm7cl3Dj-ZMTlx0X_o=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/1786px-ESO_-_The_Carina_Nebula_by-f00346e904274bfc90bbe37978c5fe8c.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Carina Nebula
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          It is one of the largest that can be observed from Earth, dwarfing the Orion Nebula in the constellation Orion. It lies in the heart of the constellation Carina and often referred to as the Keyhole Nebula due to its keyhole-shaped central region. The distance to the Carina Nebula is somewhere 10,000 light-years away from us. It's very extensive, stretching across some 230 light-years of space          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Button size="small" color="primary" >
          Learn More
        </Button>
      </CardActions>
    </Card>
    </div>
    );
}

// maxWidth: 310,  [theme.breakpoints.down("sm")] : {}