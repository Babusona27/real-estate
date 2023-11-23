import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';


import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import theme from "../Theme";

const NoPropertiesAdd = () => {

    const handleAddProduct = () => {
        // Implement your logic for adding a product
        console.log('Adding a product...');
      };
  return (
    <>
      <Box>
        <Header />
      </Box>
      <Box
        sx={{
          position: "relative",
          backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/porperty.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "88px",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: "0",
            left: "0",
            background: "rgb(0 0 0 / 72%)",
            backdropFilter: "blur(3px)",
          }}
        ></Box>
        <Container
          maxWidth="lg"
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
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100%",
              height: "auto",
              textAlign:"center"
            }}
          >
            <Typography
              variant="h4"
              component={"h1"}
              sx={{
                fontSize: "45px",
                fontWeight: "500",
                lineHeight: "32px",
                margin: "0px 0px 25px",
                textAlign: "center",
                color:theme.palette.primary.white
              }}
            >
              No properties are added
            </Typography>
            <Typography  component={"p"}
              sx={{
                fontSize: "16px",
                fontWeight: "300",
                lineHeight: "24px",
                letterSpacing:"1.5px",
                margin: "0px 0px 25px",
                textAlign: "center",
                color:theme.palette.primary.white
              }} paragraph>
          Please add your properties to get started.
        </Typography>
        <Button className="customBtnStyle new_btn"
            sx={{
              fontFamily: "'Roboto', sans-serif !important",
              backgroundColor: "transparent",
              color:theme.palette.primary.white,
              border:"1px solid",
              borderColor:theme.palette.primary.logoColor,
              padding: "5px 22px",
              minHeight:"55px",
              fontSize: "16px",
              lineHeight: "18px",
              fontWeight: "500",
              overflow: "hidden",
              position: "relative",
              boxShadow: "none",
              zIndex: "1",
              textTransform: "capitalize",
              "&:hover": {
                backgroundColor: theme.palette.primary.logoColor,
                color: theme.palette.primary.white,
                boxShadow: "none",
              }
            }} variant="contained"> 
            <IconButton sx={{
                 color:theme.palette.primary.white
            }}
            aria-label="add product"
            className="addProductButton"
          >
            <AddShoppingCartOutlinedIcon />
          </IconButton>
                Add Properties</Button>

          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default NoPropertiesAdd;
