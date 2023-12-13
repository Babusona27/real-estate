import { useState, useEffect } from "react";
import { Box, Breadcrumbs, Container, Typography } from "@mui/material";
import React from "react";
import PropertyLeftBar from "../components/PropertyLeftBar";
import Property from "../components/Property";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BreadcrumbsBanner from "../components/BreadcrumbsBanner";
import axios from "axios";
import {
  GET_PROPERTIES_API,
  GET_PROPERTIES_WITHOUT_AUTH_API,
} from "../common/urls";
import { useDispatch, useSelector } from "react-redux";
import { setPropertyList } from "../redux/reducers/PropertyListReducer";
import HomeIcon from "@mui/icons-material/Home";
import GrainIcon from "@mui/icons-material/Grain";
import { Link } from "react-router-dom";
import theme from "../Theme";
import { useLocation } from "react-router-dom";

const AllProperties = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const userData = useSelector((state) => state.UserReducer.value);
  const searchData = useSelector((state) => state.SearchReducer.value);
 
  useEffect(() => {
    /* get properties  */
    const getProperties = async () => {
      await axios
        .get(
          userData
            ? GET_PROPERTIES_API
            : GET_PROPERTIES_WITHOUT_AUTH_API + "?limit=5&offset=0",
          {
            headers: {
              Authorization: userData && userData.token,
            },
          }
        )
        .then((res) => {
          if (res.data.status) {
            // console.log("add property list", res.data.data);
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
      <BreadcrumbsBanner title="Properties" />
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
            background: theme.palette.primary.LightVlue2,
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
