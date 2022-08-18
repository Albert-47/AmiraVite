import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box
} from '@mui/material';
import '../styles.js';

const Categories = () => {
  const [data, setData] = useState([]); //Products to be shown
  const [filter, setFilter] = useState(''); //Filter option selected by the user

  const serverURL = 'https://amiraserver.herokuapp.com'; //Server URL
  const hasItem = data[0]; //A confirmation of the received data in the request to the server

  const { category } = useParams('category');

  //Function to filter out data

  const filterData = (param, array) => {
    let newData = [];
    if (param === 'Niños') {
      newData = array.filter((item) => item.age === param);
    } else {
      newData = array.filter((item) => item.gender === param);
    }
    setData(newData);
  };

  //UseEffect for requesting data every time the parameter changes

  useEffect(() => {
    const definitiveData = async () => {
      const res = await axios.get(`${serverURL}/categories/${category}`);
      const untouchedData = res.data;
      setData(untouchedData);

      if (filter !== '') {
        console.log('se ejecuta filter');
        filterData(filter, untouchedData);
      }
    };
    definitiveData();
  }, [category, filter]);

  return hasItem ? (
    <>
      <Box
        sx={{
          width: { xs: '90%' },
          margin: { xs: '20px 20px', md: '20px 50px' }
        }}
      >
        <FormControl fullWidth color='warning'>
          <InputLabel>Filtrar por...</InputLabel>
          <Select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <MenuItem value='Niños'>Niños</MenuItem>
            <MenuItem value='Caballero'>Caballero</MenuItem>
            <MenuItem value='Dama'>Dama</MenuItem>
            <MenuItem value='Unisex'>Unisex</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Grid container justifyContent='center' spacing={2}>
        {data.map((item) => (
          <Grid
            item
            key={item.name}
            className='animate__animated animate__fadeIn animate__slow'
          >
            <Card
              sx={{
                maxWidth: 345,
                mt: 2,
                minWidth: { xs: '100px', sm: '267px' }
              }}
            >
              <CardMedia
                component='img'
                alt={item.name}
                height='300'
                image={item.img}
                sx={{ flexGrow: 1, flexShrink: 1 }}
                loading='lazy'
              />
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant='h5'>{item.name}</Typography>
                <Typography
                  gutterBottom
                  variant='body1'
                  color='orange'
                  sx={{ display: 'inline' }}
                >
                  <i>{item.brand}, </i>
                </Typography>
                <Typography
                  gutterBottom
                  variant='body1'
                  color={`${
                    item.gender === 'Caballero' ? 'secondary' : 'purple'
                  }`}
                  sx={{ display: 'inline' }}
                >
                  {item.gender}
                </Typography>
                {item.age === 'Niños' && (
                  <Typography
                    gutterBottom
                    variant='body1'
                    sx={{
                      border: '1px solid darkGreen',
                      bgcolor: '#20a448',
                      borderRadius: '2px'
                    }}
                  >
                    {item.age}
                  </Typography>
                )}
                <Typography variant='body2' color='text.secondary'>
                  Precio al Mayor: {item.bulkPrice} <br />
                  Precio al Detal: {item.individualPrice} <br />
                  {category == ('Morrales' || 'Carteras')
                    ? null
                    : `Tallas: ${item.sizes}`}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  ) : (
    <>
      <Box
        sx={{
          width: { xs: '90%' },
          margin: { xs: '20px 20px', md: '20px 50px' }
        }}
      >
        <FormControl fullWidth color='warning'>
          <InputLabel>Filtrar por...</InputLabel>
          <Select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <MenuItem value='Niños'>Niños</MenuItem>
            <MenuItem value='Caballero'>Caballero</MenuItem>
            <MenuItem value='Dama'>Dama</MenuItem>
            <MenuItem value='Unisex'>Unisex</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Typography
        sx={{
          fontSize: { xs: 30, sm: 50 },
          textAlign: 'center',
          margin: { sm: '25% 25%', xs: '80% 15%' }
        }}
      >
        Próximamente...
      </Typography>
    </>
  );
};

export default Categories;
