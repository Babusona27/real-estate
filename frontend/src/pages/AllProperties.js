import { useState, useEffect } from "react";
import { Box, Breadcrumbs, Container, Typography } from "@mui/material";
import React from "react";
import PropertyLeftBar from "../components/PropertyLeftBar";
import Property from "../components/Property";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BreadcrumbsBanner from "../components/BreadcrumbsBanner";
import axios from "axios";
import { GET_PROPERTIES_API } from "../common/urls";
import { useDispatch, useSelector } from "react-redux";
import { setPropertyList } from "../redux/reducers/PropertyListReducer";
import HomeIcon from "@mui/icons-material/Home";
import GrainIcon from "@mui/icons-material/Grain";
import { Link } from "react-router-dom";
import theme from "../Theme";

const AllProperties = () => {
  const dispatch = useDispatch();
  

  useEffect(() => {
    /* get properties  */
    const getProperties = async () => {
      await axios
        .get(GET_PROPERTIES_API)
        .then((res) => {
          if (res.data.status) {
            dispatch(setPropertyList(res.data.data));
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
    /* get properties  */
    getProperties();
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#eaf7f4",
      }}
    >
      {/* Header */}
      <Header />
      {/* Header */}
      <BreadcrumbsBanner/>
            {/* banner section  */}
 
      {/* blog area  */}
      <Box>
        <Container
          maxWidth="xl"
          sx={{
            height: "100%",
            padding: {
              xs: "40px 10px",
              sm: "40px 10px",
              md: "40px 10px",
              lg: "40px 0px",
            },
            background:theme.palette.primary.LightVlue2,
          }}
        >
          <Box
            sx={{
              display: { xs: "block", sm: "block", md: "block", lg: "flex" },
              justifyContent: "space-between",
              margin: "30px 0px",
            }}
          >
            {/* property left component */}
            <PropertyLeftBar />
            {/* property left component */}
            {/* Single Property component  */}
            <Property />
            {/* Single Property component  */}
          </Box>
        </Container>
      </Box>
      {/* Footer */}
      <Footer />
      {/* Footer */}
    </Box>
  );
};

export default AllProperties;
