import styled from "@emotion/styled";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  List,
  Typography,
} from "@mui/material";
import React from "react";
import theme from "../Theme";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";
import SingleBedIcon from '@mui/icons-material/SingleBed';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import { Link, useNavigate } from "react-router-dom";
import { IMAGE_BASE_URL } from "../common/urls";


const PropertyPost = ({ propertyDetails }) => {
  // console.log(propertyDetails);
  return (
    <Box>
      {/* <a href="/ProductDetails"> */}
        <Link to={"/ProductDetails/"+ propertyDetails._id}>
        <Card className="post_card" sx={{
          width: "100%",
          border: "1px solid #e9e7d",
          boxShadow: "0 4px 18px 0 rgb(194 200 213 / 0%)",
          "&:hover":
          {
            boxShadow: "0 11px 35px 0 rgba(0, 0, 0, .1)",
          },
        }}>
          <CardActionArea>
            <Box sx={{ position: "relative" }}>
              <Catagorys>
                <Span bgcolor={"#ff9642"} variant="span" className="catagory">
                  Featured
                </Span>
                <Span bgcolor={"#17a2b8 "} variant="span" className="catagory">
                  Top
                </Span>
                <Span bgcolor={"#5f40fb"} variant="span" className="catagory">
                  Bump Up
                </Span>
              </Catagorys>
              <CardMedia
                component="img"
                height="200"
                image={propertyDetails.images.length > 0 ? IMAGE_BASE_URL+propertyDetails.images[0] : "./assets/images/R1.jpg"}
                alt="green iguana"
                sx={{
                  height: "250px"
                }}
              />
              <BottomBar>
                <Typography sx={{
                  fontSize: "22px",
                  fontWeight: "600",
                  textShadow: "0.5px 0.5px #000000",
                  color: theme.palette.primary.white
                }} variant="h6">{propertyDetails.price}</Typography>
                <Listings className="listings">
                  <IconButton
                    sx={{
                      height: "35px",
                      width: "35px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "16px",
                      lineHeight: "1",
                      borderRadius: "3px",
                      backgroundColor: theme.palette.primary.LightBlue,
                      border: "none",
                      color: theme.palette.primary.white,
                      transition: "0.4s",
                      "&:hover": {
                        backgroundColor: theme.palette.primary.white,
                        color: theme.palette.primary.logoColor,
                      },
                    }}
                  >
                    <FavoriteBorderIcon />
                  </IconButton>
                  <IconButton
                    sx={{
                      height: "35px",
                      width: "35px",
                      display: "flex",
                      fontSize: "16px",
                      lineHeight: "1",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "3px",
                      backgroundColor: theme.palette.primary.LightBlue,
                      border: "none",
                      color: theme.palette.primary.white,
                      transition: "0.4s",
                      "&:hover": {
                        backgroundColor: theme.palette.primary.white,
                        color: theme.palette.primary.logoColor,
                      },
                    }}
                  >
                    <CompareArrowsIcon />
                  </IconButton>
                  <IconButton
                    sx={{
                      height: "35px",
                      width: "35px",
                      borderRadius: "3px",
                      fontSize: "16px",
                      lineHeight: "1",
                      backgroundColor: theme.palette.primary.LightBlue,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      border: "none",
                      color: theme.palette.primary.white,
                      transition: "0.4s",
                      "&:hover": {
                        backgroundColor: theme.palette.primary.white,
                        color: theme.palette.primary.logoColor,
                      },
                    }}
                  >
                    <SavedSearchIcon />
                  </IconButton>
                </Listings>
              </BottomBar>
              <Rent>
                {propertyDetails.category}
              </Rent>
            </Box>
            <CardContent sx={{
              paddingLeft: "0px",
              paddingRight: "0px"
            }}>
              <Box sx={{
                paddingLeft: "20px",
                paddingRight: "20px",
                paddingBottom: "10px",
                marginBottom: "10px",
                borderBottom: "1px solid #e1e1e1"
              }}>
                <Typography
                  sx={{
                    display: "-webkit-box",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    WebkitLineClamp: "1",
                    WebkitBoxOrient: "vertical",
                    fontSize: "22px",
                    fontWeight: "500",
                    lineHeight: "32px",
                    marginBottom: "15px",

                  }} gutterBottom variant="h5" component="h4">
                  {propertyDetails.property_name} </Typography>
                <FlexBox>
                  <List sx={{
                    display: "flex",
                    gap: "7px",
                    alignItems: "center",
                    padding: "0px"
                  }} >
                    <IconButton sx={{
                      backgroundColor: theme.palette.primary.LightVlue2,
                      color: theme.palette.primary.logoColor,
                      width: "32px",
                      height: "32px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}>
                      <SingleBedIcon />
                    </IconButton>
                    <Typography sx={{
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "#666666",
                    }} variant="span" component="h3">{propertyDetails.bedroom}</Typography>
                  </List>
                  <List sx={{
                    display: "flex",
                    gap: "7px",
                    alignItems: "center",
                    padding: "0px",
                  }} >
                    <IconButton sx={{
                      backgroundColor: theme.palette.primary.LightVlue2,
                      color: theme.palette.primary.logoColor,
                      width: "32px",
                      height: "32px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}>
                      <BathtubOutlinedIcon />
                    </IconButton>
                    <Typography sx={{
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "#666666",
                    }} variant="span" component="h3">{propertyDetails.bath}</Typography>
                  </List>
                  <List sx={{
                    display: "flex",
                    gap: "7px",
                    alignItems: "center",
                    padding: "0px",
                  }} >
                    <IconButton sx={{
                      backgroundColor: theme.palette.primary.LightVlue2,
                      color: theme.palette.primary.logoColor,
                      width: "32px",
                      height: "32px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}>
                      <ZoomOutMapIcon />
                    </IconButton>
                    <Typography sx={{
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "#666666",
                    }} variant="span" component="h3">{propertyDetails.sqft}</Typography>
                  </List>
                </FlexBox>
              </Box>
              <Box sx={{
                paddingLeft: "20px",
                paddingRight: "20px",
              }}>
                <FlexBox>
                  <UserBox>
                    <Avatar
                      sx={{ width: "36px", height: "36px" }}
                      src="./assets/images/avtar/avatar.png"
                    />
                    <Typography sx={{
                      display: "-webkit-box",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      WebkitLineClamp: "1",
                      WebkitBoxOrient: "vertical",
                      fontFamily: "'Roboto', sans-serif !important",
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "#666666",
                    }} variant="span">suraj</Typography>
                  </UserBox>
                  <Button className="customBtnStyle"
                    sx={{
                      fontFamily: "'Roboto', sans-serif !important",
                      backgroundColor: "#dceeea",
                      color: theme.palette.primary.logoColor,
                      padding: "8px 22px",
                      fontSize: "14px",
                      lineHeight: "18px",
                      fontWeight: "500",
                      border: "none",
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
                    }} variant="contained">Details</Button>
                </FlexBox>
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
        {/* </a> */}
      </Link>

    </Box>
  );
};
const Catagorys = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "60%",
  marginLeft: "auto",
  position: "absolute",
  right: "20px",
  top: "20px",
}));
const Span = styled(Box)(({ theme }) => ({
  padding: "5px 10px",
  borderRadius: "3px",
  fontSize: "13px",
  fontWeight: "400",
  lineHeight: "1.15",
  color: theme.palette.primary.white,
}));
const Rent = styled(Box)(({ theme }) => ({
  padding: "8px 12px",
  borderRadius: "3px",
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "1.15",
  color: theme.palette.primary.logoColor,
  backgroundColor: theme.palette.primary.white,
  display: "inline-block",
  position: "absolute",
  left: "15px",
  bottom: "-10px"

}));
const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
}));
const BottomBar = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0px 20px",
  position: "absolute",
  bottom: "15%",
  left: "0",
  width: "100%"
}));
const Listings = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  position: "absolute",
  bottom: "-45%",
  left:"auto",
  right: "50px",
  opacity: "0",
  transition: "0.3s ease-in-out"
}));
const FlexBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  transition: "0.3s ease-in-out"
}));

export default PropertyPost;
