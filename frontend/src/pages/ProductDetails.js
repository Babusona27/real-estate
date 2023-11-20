import { Box, Container, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import styled from '@emotion/styled';
import BannerSlider from "../components/BannerSlider";
import PropertyDetailsLeftbar from "../components/PropertyDetailsLeftbar";
import PropertyDetailsRightbar from "../components/PropertyDetailsRightbar";

import { useParams } from "react-router-dom";
import { GET_PRODUCT_DETAILS_PAGE_API, IMAGE_BASE_URL } from "../common/urls";
import { GetApiFetch } from "../common/CommonFunction";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProperty } from "../redux/reducers/PropertyReducer";
const ProductDetails = () => {
  const dispatch = useDispatch();
  const propertyDetails = useSelector((state) => state.PropertyReducer.value);
  const params = useParams();
  console.log('params', params);
  useEffect(() => {
    /* get properties  */
    const getPropertiesDetails = async () => {
      await axios
        .get(GET_PRODUCT_DETAILS_PAGE_API+params.slug)
        .then((res) => {       
          if (res.data.status) {
            dispatch(setProperty(res.data.data));
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
    /* get properties  */
    getPropertiesDetails();
  }, []);

  return (
    <>
      <Box>
        <Header />
      </Box>

      <Box>
        <BannerSlider  />
      </Box>
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
          backgroundColor: "#eaf7f4",
        }}
      >
        <Box
          sx={{
            display: { xs: "block", sm: "block", md: "flex", lg: "flex" },
            justifyContent: "space-between",
          }}
        >
          <PropertyDetailsLeftbar  />
          <PropertyDetailsRightbar />
        </Box>
      </Container>
      {/* <Typography
              variant="span"
              sx={{
                fontSize: "15px",
                fontWeight: "400",
                fontFamily: "'Roboto',sans-serif !important",
              }}
            >
              {propertyDetails.property_name}
            </Typography> */}

      <Box>
        <Footer />
      </Box>
    </>
  );
};


export default ProductDetails;