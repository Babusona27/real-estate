import { Box, Container } from "@mui/material";
import React from "react";
import PropertyLeftBar from "./PropertyLeftBar";
import Property from "../pages/Property";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AllProperties = () => {
  return (
    <Box sx={{
      backgroundColor:"#eaf7f4" ,
    }}>
      <Header />
      <Box>
      <Container maxWidth="xl" sx={{ height: "100%", padding:{xs:"40px 10px",sm:"40px 10px",md:"40px 10px",lg:"40px 0px"}, backgroundColor:"#eaf7f4" }}>
      <Box
        sx={{
          display: { xs: "block", sm: "block", md: "block", lg: "flex" },
          justifyContent: "space-between",
          margin:"30px 0px"
        }}
      >
        <PropertyLeftBar />
        <Property />
      </Box>
      </Container>
      </Box>
      
      <Footer/>
    </Box>
  );
};

export default AllProperties;
