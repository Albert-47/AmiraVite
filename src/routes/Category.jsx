import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardActions, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
// import CategoryItem from '../components/CategoryItem';
import { getCategoryData } from '../data/merch';
import '../styles.css'; 


const Categories = () => {

  const { category } = useParams( 'category' );

  const data = getCategoryData( category );

  const { items } = data;

  return (
      <Grid container justifyContent='center' spacing={2}>
        { items.map( item => (
          <Grid item key={item.name}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt={item.name}
              height="140"
              image={item.img}
              sx={{flexGrow:1, flexShrink: 1}}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                12$
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton >Share</IconButton>
              <IconButton >Learn More <InfoIcon/> </IconButton>
            </CardActions>
          </Card>
        </Grid>
        ) ) }
      </Grid>
  )
}

export default Categories