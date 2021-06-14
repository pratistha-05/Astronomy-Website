import React, { Component } from 'react';
import {Grid} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {makeStyles,createStyles,withStyles} from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  card:
  {
     marginRight:20,
      marginBottom:30,
      marginLeft:20
  },
  img:{
    display:'block',
    justify:'center',
  marginLeft:'auto',
  marginRight:'auto',
    width:150,
    height:150
  },
  dots:{
    borderRadius:'50%',
    height:10,
    width:10,
    display:"inline-block",
    backgroundColor:'black'
  }

}));

export default function Planets(){
    const classes = useStyles();

    return(

       <div style={{backgroundColor:'#ace5ee'}}>
         <Card className={classes.card}>
             <Grid container style={{paddingBottom:20}}>
         <Grid item xs={2} >
         <img className={classes.img}src="https://th.bing.com/th/id/R937e0e6734a61c9e08a7f23a83e043ab?rik=ZZKjlaODPtVihQ&riu=http%3a%2f%2fcdn.phys.org%2fnewman%2fgfx%2fnews%2fhires%2f2015%2fwhatsimporta.jpg&ehk=Hxd0RjMK1PjkIIj1DkjzvyL73vUsHZ5vYPSmL9FX9dk%3d&risl=&pid=ImgRaw"/>
        </Grid>
        <Grid item xs={9} >
          <p>The smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earth's Moon and takes an orbit around the Sun in about 87.97 Earth days, the shortest of all the Sun's planets.
From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth, and the sunlight would be as much as seven times brighter. Despite its proximity to the Sun, Mercury is not the hottest planet in our solar system due to its dense atmosphere.</p>
        </Grid>
        </Grid>
        <span class="dots"></span>
        <span class="dots"></span>
        <span class="dots"></span>

     
             <Grid container style={{paddingBottom:20}}>
         <Grid item xs={2} >
         <img className={classes.img}src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pd36-1-pia00271.jpg?auto=format&bg=transparent&con=3&cs=srgb&dpr=1&fm=jpg&ixlib=php-3.1.0&mark=rawpixel-watermark.png&markalpha=90&markpad=13&markscale=10&markx=25&q=75&usm=15&vib=3&w=1400&s=210c3cfd809379a07c2d19c41c0b396f"/>
        </Grid>
        <Grid item xs={9} >
         <p>Venus is the second planet from the Sun. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be visible to the naked eye in broad daylight.
            Venus has been called Earth’s twin because of the similarities in their masses, sizes, and densities and their similar relative locations in the solar system. Because they presumably formed in the solar nebula from the same kind of rocky planetary building blocks, they also likely have similar overall chemical compositions.
            Venus has a thick, toxic atmosphere filled with carbon dioxide and it’s perpetually shrouded in thick, yellowish clouds of sulfuric acid that trap heat, causing a runaway greenhouse effect. It’s the hottest planet in our solar system, even though Mercury is closer to the Sun.</p>
        </Grid>
        </Grid>
      

    
             <Grid container style={{paddingBottom:20}}>
         <Grid item xs={2} >
         <img className={classes.img}src="https://th.bing.com/th/id/Ra0bfb71f028adc686ba7292a9ed53700?rik=9THk6CAatWf4QA&riu=http%3a%2f%2fwww.greenpeace.org.au%2fblog%2fwp-content%2fuploads%2f2014%2f08%2f7187190855_a50e94ba18_z.jpg&ehk=0cr%2bokqf1JknDEyd6zWc3K0TN6rCfWsmlDpPVxkO0fc%3d&risl=&pid=ImgRaw"/>
        </Grid>
        <Grid item xs={9} >
          <p>While Earth is only the fifth largest planet in the solar system, it is the only world in our solar system with liquid water on the surface. Just slightly larger than nearby Venus, Earth is the biggest of the four planets closest to the Sun, all of which are made of rock and metal.
          About 29.2% of Earth's surface is land consisting of continents and islands.. Earth's outer layer is divided into several rigid tectonic plates that migrate across the surface over many millions of years, while its interior remains active with a solid iron inner core, a liquid outer core that generates Earth's magnetic field, and a convective mantle that drives plate tectonics. Earth's atmosphere consists mostly of nitrogen and oxygen. More solar energy is received by tropical regions than polar regions and is redistributed by atmospheric and ocean circulation.</p>
        </Grid>
        </Grid>
      

   
             <Grid container style={{paddingBottom:30}}>
         <Grid item xs={2} >
         <img className={classes.img}src="https://www.renderhub.com/ardera/planet-mars/planet-mars-01.jpg"/>
        </Grid>
        <Grid item xs={9} >
          <p>Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System. Mars is a terrestrial planet with a thin atmosphere, with surface features reminiscent of the impact craters of the Moon and the valleys, deserts and polar ice caps of Earth.
          It has two moons, Phobos and Deimos, which are small and irregularly shaped. Moreover, 
          Mars is one of the most explored bodies in our solar system, and it's the only planet where NASA has sent rovers to roam the alien landscape. Mariner 4 was the first spacecraft to visit Mars; launched by NASA and Zhurong rover was successfully deployed on 22 May 2021, which makes China the second country to successfully deploy a rover on Mars, after the United States.
          </p>
        </Grid>
        </Grid>

        <Grid container style={{paddingBottom:20}}>
         <Grid item xs={2} >
         <img className={classes.img}src="https://th.bing.com/th/id/R72204dd9e99cf52ea9c1f8ffe1dad93b?rik=b%2buTrX6VbHK%2bxQ&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2fe%2fe2%2fJupiter.jpg&ehk=r53zSTpxoq9omA2Q0KwMjbHj9SZhxd7NO93ugz%2bpMts%3d&risl=&pid=ImgRaw"/>
        </Grid>
        <Grid item xs={9} >
          <p>Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined, but slightly less than one-thousandth the mass of the Sun.
             It is the third-brightest natural object in the Earth's night sky after the Moon and Venus.
             Jupiter is primarily composed of hydrogen, but helium comprises one quarter of its mass and one tenth of its volume. It likely has a rocky core of heavier elements,[17] but like the other giant planets, Jupiter lacks a well-defined solid surface.
             The on-going contraction of its interior generates heat greater than the amount received from the Sun.or. The outer atmosphere is visibly segregated into several bands at different latitudes, with turbulence and storms along their interacting boundaries. 
             A prominent result of this is the Great Red Spot, a giant storm that is known to have existed since at least the 17th century.
          </p>
        </Grid>
        </Grid>
        </Card>

       </div>
    );
}