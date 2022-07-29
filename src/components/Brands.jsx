import { Grid, Box } from "@mui/material";
import React from "react";
import { brands } from "../data/brands";

const Brands = () => {
  return (
    <Grid container gap={2} justifyContent="space-evenly">
      {brands.map(({ url, brandName }) => (
        <Grid
          item
          key={brandName}
          flexGrow={1}
          sx={{
            bgcolor: "rgba(50, 50, 50, 0.65)",
            maxWidth: { sm: "300px", xs: "100px" },
            borderRadius: "10px",
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              width: "100%",
              height: "100%",
              borderRadius: "10px",
            }}
          >
            <Box
              component="img"
              src={url}
              alt={brandName}
              sx={{ width: "100%", height: "100%", borderRadius: "10px" }}
            />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default Brands;
