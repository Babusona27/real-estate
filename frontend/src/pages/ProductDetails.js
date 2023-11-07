import { Box } from '@mui/material';
import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
// import styled from '@emotion/styled';
import BannerSlider from '../components/BannerSlider';

const ProductDetails = () => {
  return (
    <>
    <Box>
    <Header/>
   </Box>
   <Box>
    <BannerSlider/>
   </Box>
   <Box>
    <Footer/>
   </Box>
    </>
   

  )
}
// const Banner = styled(Box)(({ theme }) => ({
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
//   padding: "0px 20px",
//   width:"100%"
// }));
export default ProductDetails;