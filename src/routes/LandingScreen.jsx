/* eslint-disable no-unused-vars */
import React from "react";
import {
  Typography,
  Box,
  Divider,
  IconButton,
  CssBaseline,
  Avatar,
} from "@mui/material";
import Brands from "../components/Brands";
import MPProducts from "../components/MPProducts";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Container } from "@mui/system";
import complexBanner from "../assets/complexBanner.jpeg";
import storeImage from "../assets/store.jpeg";

const LandingScreen = () => {
  return (
    <>
      <CssBaseline />

      {/* Banner */}

      <Box
        component="img"
        src={complexBanner}
        alt="Amira Logo"
        sx={{
          width: { md: "100%", xs: "100%" },
          height: { lg: "38rem", xs: "auto" },
          overflow: "hidden",
        }}
        className="animate__animated animate__fadeIn animate__slow"
      />

      <Typography
        className="animate__animated animate__fadeInUp animate__slow animate__delay-1s"
        sx={{
          position: "absolute",
          top: { md: "21rem", xs: "12.7rem" },
          left: "1rem",
          zIndex: "1000",
          fontFamily: "Merriweather, serif",
          fontSize: { md: "30px", xs: "12px" },
          fontWeight: "800",
        }}
      >
        La mejor calidad...
      </Typography>
      <Typography
        className="animate__animated animate__fadeInUp animate__slow animate__delay-2s"
        sx={{
          position: "absolute",
          top: { md: "21rem", xs: "12.7rem" },
          left: { md: "67rem", xs: "17rem" },
          zIndex: "1000",
          fontFamily: "Merriweather, serif",
          fontSize: { md: "30px", xs: "12px" },
          fontWeight: "800",
        }}
      >
        A tu alcance...
      </Typography>

      <Container>
        <Typography
          variant="h2"
          sx={{
            margin: "20px 0px 50px",
            fontFamily: "Merriweather, serif",
            fontSize: { xs: "30px", sm: "55px" },
          }}
        >
          Somos la tienda que estabas buscando
        </Typography>

        <Box
          component="img"
          src={storeImage}
          alt="Tienda"
          className="animate__animated animate__fadeIn animate__slow"
          sx={{
            width: { xs: "250px", sm: "600px" },
            height: { xs: "auto", sm: "auto" },
            margin: { xs: "0% 13%", lg: "0% 22%", sm: "0% 20%" },
            borderRadius: "10px",
            boxShadow: "2px 2px 1px black",
          }}
        />

        {/* Marcas */}
        <Typography
          variant="h2"
          sx={{
            margin: "50px 0px 50px",
            fontFamily: "Merriweather, serif",
            fontSize: { xs: "30px", sm: "55px" },
          }}
        >
          Con las mejores marcas
        </Typography>

        <Brands sx={{ alignSelf: "center" }} />

        <Typography
          variant="h2"
          sx={{
            margin: "50px 0px 50px",
            fontFamily: "Merriweather, serif",
            fontSize: { xs: "30px", sm: "55px" },
          }}
        >
          Y la mayor variedad...
        </Typography>

        <MPProducts sx={{ paddingBottom: 2 }} />
      </Container>

      <Divider />

      <Box
        component="footer"
        sx={{ bgcolor: "rgba(235,110,22,0.8519782913165266)" }}
      >
        <Typography variant="subtitle2" align="center" sx={{ paddingTop: 2 }}>
          ¡Visítanos!{" "}
        </Typography>
        <Typography variant="subtitle2" align="center" sx={{ color: "black" }}>
          Valencia, Mercado Los Guajiros, Pasillo Sambilito
        </Typography>
        <Typography variant="subtitle2" align="center">
          ... O contáctanos por nuestras redes:{" "}
        </Typography>
        <Box display="flex" justifyContent="center">
          <IconButton>
            <FacebookIcon />
          </IconButton>
          <IconButton>
            <InstagramIcon />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default LandingScreen;
