import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BreadcrumbsBanner from "../components/BreadcrumbsBanner";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import theme from "../Theme";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const Wishlist = () => { 

  return (
    <>
      <Box>
        <Header />
      </Box>
      {/* <BreadcrumbsBanner /> */}
      <BreadcrumbsBanner title="My Favorite Property" />


        <Box
          className="wishlist_sec"
          component={"section"}
          sx={{
            padding: "50px 0px",
            backgroundColor: theme.palette.primary.white,
          }}
        >
          <Container
            maxWidth="lg"
            sx={{
              height: "100%",
              padding: {
                xs: "0px 10px",
                sm: "0px 10px",
                md: "0px 10px",
                lg: "0px 24px",
              },
            }}
          >
            <Box
               sx={{
                padding: "30px",
                background: theme.palette.primary.white,
                border: "1px solid #ebebeb",
                borderRadius: "8px",
                marginBottom: "25px",
                transition: "all 0.4s ease-out",
                marginTop: {
                  xs: "30px",
                  lg: "0px",
                },
                "&:hover": {
                  boxShadow: "0 4px 12px rgba(0,0,0,.1)",
                },
              }}
            >
             
             
            </Box>

          </Container>
        </Box>
      <Footer />
    </>
  );
};
export default Wishlist;
