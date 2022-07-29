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
          zIndex: "2000",
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
          zIndex: "2000",
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
          src="https://media.istockphoto.com/photos/clothes-shop-interior-picture-id901863672?k=20&m=901863672&s=170667a&w=0&h=eotKOl8L6c3zO5lvJG4xzFZ1c3hV1EHV2MzxDQiOjSs="
          alt="Tienda"
          className="animate__animated animate__fadeIn animate__slow"
          sx={{
            width: { xs: "250px", sm: "500px" },
            margin: { xs: "0% 13%", lg: "0% 25%", sm: "0% 20%" },
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
          Visítanos!{" "}
        </Typography>
        <Typography variant="subtitle2" align="center" sx={{ color: "black" }}>
          Los Guajiros, Pasillo Sambilito... Ustedes saben donde es...{" "}
        </Typography>
        <Typography variant="subtitle2" align="center">
          ... O contáctanos por nuestras redes:{" "}
        </Typography>
        <Box display="flex" justifyContent="center">
          <IconButton onClick={() => alert("SIIIIIIUUUUU")}>
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
