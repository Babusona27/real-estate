import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Box, Button, Typography } from "@mui/material";
import styled from "@emotion/styled";
import theme from "../Theme";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { IMAGE_BASE_URL } from "../common/urls";
import { useSelector } from "react-redux";


const BannerSlider = () => {
  const propertyDetails = useSelector((state) => state.PropertyReducer.value);
  const option = {
    items: 1,
    loop: true,
    autoplay: false,
    autoplayTimeout: 4000,
    nav: true,
    navText: [
      '<i class="fa-solid fa-angle-left"></i>',
      '<i class="fa-solid fa-angle-right"></i>',
    ],
    dots: false,
    margin: 0,
    responsive: {
      1180: {
        items: 1,
      },
      724: {
        items: 1,
      },
      500: {
        items: 1,
      },
      370: {
        items: 1,
        innerWidth: "100%",
        outerWidth: "100%",
      },
    },
  };
  return (
    <Box
      sx={{
        height: { xs: "300px", sm: "450px", md: "450px", lg: "650px" },
        position: "relative",
      }}
      className="banner_slider"
    >
      <OwlCarousel className="owl-theme" {...option}>
        {propertyDetails && propertyDetails.images.map((item, key) => (
          <div class="item">
          <img src={IMAGE_BASE_URL+item} />
        </div>
        ))}
        
        
      </OwlCarousel>
      <Box
        sx={{
          position: "absolute",
          top:{ xs: "58%", sm: "50%", lg: "60%" },
          left: { xs: "50%", sm: "50%", lg: "0%" },
          padding: { xs: "20px 20px", sm: "20px 20px", lg: "20px 50px" },
          height: { xs: "100%", sm: "55%", lg: "40%" },
          width: { xs: "85%", sm: "85%", lg: "65%" },
          transform: {
            xs: "translate(-50%,-50%)",
            sm: "translate(-50%, -50%)",
            lg: "translate(0%, 0%)",
          },
          zIndex: "1",
        }}
        className="banner_content"
      >
        <Box
          className="catagory_box"
          sx={{
            display: "flex",
            gap: { xs: "10px", sm: "10px", lg: "20px" },
            alignItems: "center",
            justifyContent: { xs: "center", sm: "center", lg: "flex-start" },
          }}
        >
          <Box
            sx={{
              padding: "5px 10px",
              borderRadius: "3px",
              fontSize: "13px",
              fontWeight: "400",
              lineHeight: "1.15px",
              color: theme.palette.primary.white,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minWidth: "85px",
              minHeight: "28px",
            }}
            bgcolor={"#ff9642"}
            variant="contained"
            className="catagory"
          >
            Featured
          </Box>
          <Box
            sx={{
              padding: "5px 10px",
              borderRadius: "3px",
              fontSize: "13px",
              fontWeight: "400",
              lineHeight: "1.15px",
              color: theme.palette.primary.white,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minWidth: "85px",
              minHeight: "28px",
            }}
            bgcolor={"#17a2b8 "}
            variant="contained"
            className="catagory"
          >
            Top
          </Box>
          <Box
            sx={{
              padding: "5px 10px",
              borderRadius: "3px",
              fontSize: "13px",
              fontWeight: "400",
              lineHeight: "1.15px",
              color: theme.palette.primary.white,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minWidth: "85px",
              minHeight: "28px",
            }}
            bgcolor={"#5f40fb"}
            variant="contained"
            className="catagory"
          >
            Bump Up
          </Box>
        </Box>
        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: "20px", sm: "20px", lg: "28px" },
            fontWeight: "600",
            lineHeight: { xs: "28px", sm: "28px", lg: "42px" },
            color: theme.palette.primary.white,
            margin: "20px 0px",
            textAlign: { xs: "center", sm: "center", lg: "left" },
          }}
        >
          Full Sea View | Loft Type | Soon to be Available – Mamsha Al Saadiyat
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "25px",
          }}
        >
          <Box
            sx={{
              display: { xs: "grid", sm: "grid", lg: "flex" },
              alignItems: "center",
              gap: "7px",
              textAlign: { xs: "center", sm: "center", lg: "left" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", sm: "center", lg: "start" },
              }}
            >
              <LocationOnIcon
                sx={{
                  color: theme.palette.primary.logoColor,
                }}
              />
            </Box>

            <Typography
              variant="span"
              sx={{
                fontSize: "15px",
                fontWeight: "400",
                fontFamily: "'Roboto',sans-serif !important",
                color: theme.palette.primary.white,
              }}
            >
              Saadiyat Island
            </Typography>
          </Box>
          <Box
            sx={{
              display: { xs: "grid", sm: "grid", lg: "flex" },
              alignItems: "center",
              gap: "7px",
              textAlign: { xs: "center", sm: "center", lg: "left" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", sm: "center", lg: "start" },
              }}
            >
              <WatchLaterIcon
                sx={{
                  color: theme.palette.primary.logoColor,
                }}
              />
            </Box>
            <Typography
              variant="span"
              sx={{
                fontSize: "15px",
                fontWeight: "400",
                fontFamily: "'Roboto',sans-serif !important",
                color: theme.palette.primary.white,
              }}
            >
              Saadiyat Island
            </Typography>
          </Box>
          <Box
            sx={{
              display: { xs: "grid", sm: "grid", lg: "flex" },
              alignItems: "center",
              gap: "7px",
              textAlign: { xs: "center", sm: "center", lg: "left" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", sm: "center", lg: "start" },
              }}
            >
              <VisibilityIcon
                sx={{
                  color: theme.palette.primary.logoColor,
                }}
              />
            </Box>

            <Typography
              variant="span"
              sx={{
                fontSize: "15px",
                fontWeight: "400",
                fontFamily: "'Roboto',sans-serif !important",
                color: theme.palette.primary.white,
              }}
            >
              Saadiyat Island
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
const Span = styled(Box)(({ theme }) => ({
  padding: "5px 10px",
  borderRadius: "3px",
  fontSize: "13px",
  fontWeight: "400",
  lineHeight: "1.15",
  color: theme.palette.primary.white,
}));
export default BannerSlider;
