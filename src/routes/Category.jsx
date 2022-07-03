import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material';
import { getCategoryData } from '../data/merch';
import '../styles.js'; 


const Categories = () => {

  const { category } = useParams( 'category' );

  const data = getCategoryData( category );

  const { items } = data;

  return (
      <Grid container justifyContent='center' spacing={2}>
        { items.map( item => (
          <Grid item key={item.name}>
          <Card sx={{ maxWidth: 345, mt: 2, minWidth:{xs: '100px', sm: '267px'} }}>
            <CardMedia
              component="img"
              alt={item.name}
              height="140"
              image={item.img}
              sx={{flexGrow:1, flexShrink: 1}}
            />
            <CardContent sx={{textAlign: 'center'}}>
              <Typography gutterBottom variant="h5" component="div">
                {item.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.price} <br /> 
                {category === 'Zapatos' ? 'Tallas: ' + item.sizes : null }
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        ) ) }
      </Grid>
  )
}

export default Categories