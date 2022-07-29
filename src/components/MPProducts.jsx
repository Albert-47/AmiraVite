import { Box, Grid } from "@mui/material";
import React from "react";
import { mpShoes } from "../data/mpShoes";

const MPProducts = () => {
  return (
    <Grid
      container
      gap={2}
      justifyContent="space-evenly"
      alignContent="center"
      mb={2}
    >
      {mpShoes.map(({ url, product }) => (
        <Grid
          item
          key={product}
          flexGrow={1}
          sx={{
            bgcolor: "rgba(50, 50, 50, 0.65)",
            maxWidth: { md: "300px", xs: "200px" },
            borderRadius: "10px",
          }}
        >
          <Box
            component="img"
            src={url}
            alt={product}
            sx={{ borderRadius: "10px", width: "100%", height: "100%" }}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default MPProducts;
