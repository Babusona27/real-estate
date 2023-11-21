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
      <Box>
        <Typography>Wishlist</Typography>
      </Box>
      <Footer />
    </>
  );
};
export default Wishlist;
