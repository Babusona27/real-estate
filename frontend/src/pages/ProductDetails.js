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
import {StickyShareButtons} from 'sharethis-reactjs';

const ProductDetails = () => {
  const dispatch = useDispatch();

  const params = useParams();
  // console.log('params', params);
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

      <Box>
        <Footer />
      </Box>
      <Box>
      <StickyShareButtons
          config={{
            alignment: 'right',    // alignment of buttons (left, right)
            color: 'social',      // set the color of buttons (social, white)
            enabled: true,        // show/hide buttons (true, false)
            font_size: 16,        // font size for the buttons
            hide_desktop: false,  // hide buttons on desktop (true, false)
            labels: 'counts',     // button labels (cta, counts, null)
            language: 'en',       // which language to use (see LANGUAGES)
            min_count: 0,         // hide react counts less than min_count (INTEGER)
            networks: [           // which networks to include (see SHARING NETWORKS)
              'linkedin',
              'facebook',
              'twitter',
              'pinterest',
              'email'
            ],
            padding: 12,          // padding within buttons (INTEGER)
            radius: 4,            // the corner radius on each button (INTEGER)
            show_total: true,     // show/hide the total share count (true, false)
            show_mobile: true,    // show/hide the buttons on mobile (true, false)
            show_toggle: true,    // show/hide the toggle buttons (true, false)
            size: 48,             // the size of each button (INTEGER)
            top: 160,             // offset in pixels from the top of the page


            // OPTIONAL PARAMETERS

            min_count: 10,                    // (threshold for total share count to be displayed)
            url: 'https://www.sharethis.com', // (defaults to current url)
            image: 'https://bit.ly/2CMhCMC',  // (defaults to og:image or twitter:image)
            description: 'custom text',       // (defaults to og:description or twitter:description)
            title: 'custom title',            // (defaults to og:title or twitter:title)
            message: 'custom email text',     // (only for email sharing)
            subject: 'custom email subject',  // (only for email sharing)
            username: 'custom twitter handle' // (only for twitter sharing)

          }}
        />
      </Box>
    </>
  );
};


export default ProductDetails;