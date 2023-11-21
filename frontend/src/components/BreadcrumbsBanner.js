import { Box, Breadcrumbs, Container, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from "@mui/icons-material/Home";
import GrainIcon from "@mui/icons-material/Grain";

const BreadcrumbsBanner = ({ title }) => {
  return (
    <Box
    sx={{
      position: 'relative',
backgroundImage: "url(./assets/images/R6.jpg)",
backgroundSize: 'cover',
backgroundPosition: 'center',
height: {
  xs:"200px",
  sm:"200px",
  lg:"300px"
}, // Set the height as needed
display: 'flex',
alignItems: 'center',
justifyContent: 'center',
marginTop:"88px"
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
      <Box sx={{
         position:"absolute",
         top:"50%",
         left:"50%",
         transform:"translate(-50%, -50%)",
         width:"100%",
         height:"auto"
      }}>
      <Typography
        variant="h4"
        component={"h2"}
        sx={{
          fontSize: "35px",
          fontWeight: "500",
          lineHeight: "32px",
          margin: "20px 0px",
      textAlign:"center"  ,
        }}
      >
        {title}
      </Typography>
      <Breadcrumbs sx={{
         background: 'rgba(255, 255, 255, 0.7)', // Adjust the background color and opacity
         padding: '10px',
         borderRadius: '5px',
         display:"table",
         margin:"auto"
      }} aria-label="breadcrumb">
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
        {title}
        </Typography>
      </Breadcrumbs>
      </Box>

   
    </Container>
  </Box>
  )
}

export default BreadcrumbsBanner