import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import "../styles.js";

const Categories = () => {
  const [data, setData] = useState([]);

  const { category } = useParams("category");

  useEffect(() => {
    axios.get(`http://localhost:8000/categories/${category}`).then((res) => {
      setData(res.data);
    });
  }, [category]);

  return (
    <Grid container justifyContent="center" spacing={2}>
      {data.map((item) => (
        <Grid item key={item.name}>
          <Card
            sx={{
              maxWidth: 345,
              mt: 2,
              minWidth: { xs: "100px", sm: "267px" },
            }}
          >
            <CardMedia
              component="img"
              alt={item.name}
              height="300"
              image={item.img}
              sx={{ flexGrow: 1, flexShrink: 1 }}
            />
            <CardContent sx={{ textAlign: "center" }}>
              <Typography gutterBottom variant="h5" component="div">
                {item.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Precio al Mayor: {item.bulkPrice} <br />
                Precio al Detal: {item.individualPrice} <br />
                {/* {category === 'Zapatos' ? 'Tallas: ' + item.sizes : null } */}
                Tallas: {item.sizes}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Categories;
