import { Grid } from '@mui/material';
import React from 'react';
import { brands } from '../data/brands';

const Brands = () => {
  return (
    <Grid container gap={2} justifyContent='space-evenly' alignContent='center' >
    {brands.map(( { url, brandName } ) => (
      <Grid item key={brandName} flexGrow={1} >
        <img src={ url } alt={brandName} width='100px'  />
      </Grid>
    ))}
  </Grid>
  )
}

export default Brands