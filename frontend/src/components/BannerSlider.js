import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';
import theme from '../Theme';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import VisibilityIcon from '@mui/icons-material/Visibility';


const BannerSlider = () => {

    const option ={
        items :1,
        loop:true,
        autoplay:false,
        autoplayTimeout:4000,
        nav:true,
        navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
        dots:false,
        margin:0,
        responsive:{
            1180:{
                items:1,
            },
            724:{
                items:1,
            },
            500:{
                items:1,
            },
            370:{
                items:1,
                innerWidth:"100%",
                outerWidth:"100%",

            },
        }
    }
  return (
    <Box sx={{
        height:"650px",
        position:"relative"
    }} className="banner_slider">
    <OwlCarousel className='owl-theme' {...option}>
    <div class='item'>
    <img src="./assets/images/R4.jpg"/>

    </div>
    <div class='item'>
    <img src="./assets/images/R3.jpg"/>


    </div>
    <div class='item'>
    <img src="./assets/images/R2.jpg"/>

    </div>
    <div class='item'>
    <img src="./assets/images/R1.jpg"/>
    </div>
</OwlCarousel>
<Box sx={{
    position:"absolute",
    bottom:"0%",
    left:"0",
    padding:"20px 50px",
    height:"40%",
    width:"65%",
    zIndex:"1",
}} className="banner_content">
<ul class="catagory_box">
              <Span bgcolor={"#ff9642"} variant="span" className="catagory">
                Featured
              </Span>
              <Span bgcolor={"#17a2b8 "} variant="span" className="catagory">
                Top
              </Span>
              <Span bgcolor={"#5f40fb"} variant="span" className="catagory">
                Bump Up
              </Span>
</ul>
<Typography variant='h4'sx={{
    fontSize:"28px",
    fontWeight:"600",
lineHeight:"42px",
color:theme.palette.primary.white,
margin:"20px 0px",
}}>Full Sea View | Loft Type | Soon to be Available – Mamsha Al Saadiyat</Typography>
<Box sx={{
    display:"flex",
    alignItems:"center",
    gap:"25px"
}}>
    <Box sx={{
        display:"flex",
        alignItems:"center",
        gap:"10px"
    }}>
        <LocationOnIcon sx={{
            color:theme.palette.primary.logoColor,
        }}/>
        <Typography variant='span'sx={{
    fontSize:"15px",
    fontWeight:"400",
    fontFamily:"'Roboto',sans-serif !important",
color:theme.palette.primary.white,
}}>Saadiyat Island</Typography>
    </Box>
    <Box sx={{
        display:"flex",
        alignItems:"center",
        gap:"7px"
    }}>
        <WatchLaterIcon sx={{
            color:theme.palette.primary.logoColor,
        }}/>
        <Typography variant='span'sx={{
    fontSize:"15px",
    fontWeight:"400",
    fontFamily:"'Roboto',sans-serif !important",
color:theme.palette.primary.white,
}}>Saadiyat Island</Typography>
    </Box>
    <Box sx={{
        display:"flex",
        alignItems:"center",
        gap:"10px"
    }}>
        <VisibilityIcon sx={{
            color:theme.palette.primary.logoColor,
        }}/>
        <Typography variant='span'sx={{
    fontSize:"15px",
    fontWeight:"400",
    fontFamily:"'Roboto',sans-serif !important",
color:theme.palette.primary.white,
}}>Saadiyat Island</Typography>
    </Box>
    
</Box>
</Box>


</Box>

  )
}
const Span = styled(Box)(({ theme }) => ({
    padding: "5px 10px",
    borderRadius: "3px",
    fontSize: "13px",
    fontWeight: "400",
    lineHeight: "1.15",
    color: theme.palette.primary.white,
  }));
export default BannerSlider;