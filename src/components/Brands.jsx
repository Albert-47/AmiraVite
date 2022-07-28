import { Grid, Box } from "@mui/material";
import React from "react";
import { brands } from "../data/brands";

const Brands = () => {
  return (
    <Grid container gap={2} justifyContent="center">
      {brands.map(({ url, brandName }) => (
        <Grid
          item
          key={brandName}
          flexGrow={1}
          sx={{
            bgcolor: "rgba(50, 50, 50, 0.65)",
            justifySelf: "center",
            maxWidth: "100px",
          }}
        >
          <Box sx={{ textAlign: "center", width: "100%", textAlign: "center" }}>
            <Box component="img" src={url} alt={brandName} width="100%" />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default Brands;
