import { Grid } from '@mui/material';
import React from 'react';
import { mpShoes } from '../data/mpShoes';

const MPProducts = () => {
  return (
    <Grid container gap={2} justifyContent='space-evenly' alignContent='center' >
    {mpShoes.map(( { url, product } ) => (
      <Grid item key={product} flexGrow={1} >
        <img src={ url } alt={product} width='100px'  />
      </Grid>
    ))}
  </Grid>
  )
}

export default MPProducts