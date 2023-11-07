import { Box } from "@mui/material";
import React from "react";
import PropertyLeftBar from "./PropertyLeftBar";
import Property from "../pages/Property";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AllProperties = () => {
  return (
    <Box>
      <Header />
      <Box
        sx={{
          display: { xs: "grid", sm: "grid", md: "flex", lg: "flex" },
          justifyContent: "space-between",
        }}
      >
        <PropertyLeftBar />
        <Property />
      </Box>
      <Footer/>
    </Box>
  );
};

export default AllProperties;
