import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import theme from "../Theme";
import HomeIcon from "@mui/icons-material/Home";
import GrainIcon from "@mui/icons-material/Grain";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <>
      <Box>
        <Header />
      </Box>
      {/* banner section  */}
      <Box
        sx={{
          padding: {
            xs: "70px 0px 50px",
            sm: "160px 0px 50px",
            md: "160px 0px 50px",
            lg: "160px 0px 50px",
          },
        }}
      >
        <Container
          maxWidth="xl"
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
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              to="/"
              underline="hover"
              sx={{ display: "flex", alignItems: "center" }}
              color="inherit"
            >
              <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Home
            </Link>
            <Typography
              sx={{ display: "flex", alignItems: "center" }}
              color="text.primary"
            >
              <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Blog
            </Typography>
          </Breadcrumbs>
          <Typography
              variant="h4"
              component={"h2"}
              sx={{
                fontSize: "28px",
                fontWeight: "500",
                lineHeight: "32px",
                margin: "20px 0px",
              }}
            >
             Blog
            </Typography>
        </Container>
      </Box>
      {/* blog area  */}

      <Container
          maxWidth="xl"
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
        <Box >
            </Box>    
        </Container> 
    </>
  );
};
export default Blog;
