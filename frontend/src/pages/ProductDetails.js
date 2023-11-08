import { Box, Container } from "@mui/material";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import styled from '@emotion/styled';
import BannerSlider from "../components/BannerSlider";
import PropertyDetailsLeftbar from "../components/PropertyDetailsLeftbar";
import PropertyDetailsRightbar from "../components/PropertyDetailsRightbar";

const ProductDetails = () => {
  return (
    <>
      <Box>
        <Header />
      </Box>
      <Box>
        <BannerSlider />
      </Box>
      <Container maxWidth="xl" sx={{ height: "100%", padding:{xs:"40px 10px",sm:"40px 10px",md:"40px 10px",lg:"40px 0px"}, backgroundColor:"#eaf7f4" }}>
        <Box
          sx={{
            display: { xs: "block", sm: "block", md: "flex", lg: "flex" },
            justifyContent: "space-between",
          }}
        >
          <PropertyDetailsLeftbar />
          <PropertyDetailsRightbar />
        </Box>
      </Container>

      <Box>
        <Footer />
      </Box>
    </>
  );
};
// const Banner = styled(Box)(({ theme }) => ({
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
//   padding: "0px 20px",
//   width:"100%"
// }));
export default ProductDetails;
