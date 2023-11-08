import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import theme from "../Theme";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import NoCrashIcon from '@mui/icons-material/NoCrash';
import KingBedIcon from '@mui/icons-material/KingBed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const PropertyDetailsLeftbar = () => {
  return (
    <Box
      flex={2}
      paddingLeft={{ xs: "0px", md: "15px" }}
      paddingRight={{ xs: "0px", md: "15px" }}
    >
      <Box component={"div"}
        sx={{
          padding: "25px 30px 30px",
          background: theme.palette.primary.white,
          boxShadow: "0 4px 18px 0 rgba(194, 200, 213, 0.3)",
          borderRadius: "6px",
          marginBottom: "10px",
        }}
      >
        <Typography
          sx={{
            fontSize: "22px",
            color: "#212121",
            lineHeight: "30px",
            marginBottom: "25px",
            fontWeight: "500",
          }}
          variant="h6"
        >
          Overview
        </Typography>
        <Box className="details_icon_list"
          component="ul"
          sx={{
            display: "grid",
            gap: "30px 15px",
            gridTemplateColumns:{ xs: "repeat(2, 1fr)", sm:"repeat(2, 1fr)", lg: "repeat(4, 1fr)" },
            alignItems: "center",
          }}
        >
          <Box
            component="li"
            sx={{
              display: "flex",
              gap: "15px",
              alignItems: "center",
              width: "100%",
            }}
          >
              <IconButton
                className="filter_btn"
                sx={{
                  height: "50px",
                  width: "53px",
                  borderRadius: "8px",
                  backgroundColor: theme.palette.primary.white,
                  border: "1px solid rgb(232, 233, 241)",
                  color: theme.palette.primary.logoColor,
                  transition: "0.4s",
                  boxShadow:"0 4px 18px 0 rgba(188, 192, 202, 0.26)"
                }}>
                <LocalOfferIcon />
              </IconButton>
              <Box sx={{
                display:"flex",
flexDirection:"column",
alignItems:"start",
justifyContent:"center",
gap:"5px"
              }}>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: theme.palette.primary.logoColor,
                  fontFamily:theme.palette.primary.Roboto,
                }}
                variant="h6" >ID No </Typography>
                 <Typography
                sx={{
                  fontSize: "14px",
                  color: theme.palette.primary.lightGrey,
                }}
                variant="span" >32145 </Typography>

              </Box>
              
            </Box>
            <Box
            component="li"
            sx={{
              display: "flex",
              gap: "15px",
              alignItems: "center",
              width: "100%",
            }}
          >
              <IconButton
                className="filter_btn"
                sx={{
                  height: "50px",
                  width: "53px",
                  borderRadius: "8px",
                  backgroundColor: theme.palette.primary.white,
                  border: "1px solid rgb(232, 233, 241)",
                  color: theme.palette.primary.logoColor,
                  transition: "0.4s",
                  boxShadow:"0 4px 18px 0 rgba(188, 192, 202, 0.26)"
                }}>
                <NoCrashIcon />
              </IconButton>
              <Box sx={{
                display:"flex",
flexDirection:"column",
alignItems:"start",
justifyContent:"center",
gap:"5px"
              }}>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: theme.palette.primary.logoColor,
                  fontFamily:theme.palette.primary.Roboto,
                }}
                variant="h6" >Parking </Typography>
                 <Typography
                sx={{
                  fontSize: "14px",
                  color: theme.palette.primary.lightGrey,
                }}
                variant="span" >Yes </Typography>

              </Box>
              
            </Box>
            <Box
            component="li"
            sx={{
              display: "flex",
              gap: "15px",
              alignItems: "center",
              width: "100%",
            }}
          >
              <IconButton
                className="filter_btn"
                sx={{
                  height: "50px",
                  width: "53px",
                  borderRadius: "8px",
                  backgroundColor: theme.palette.primary.white,
                  border: "1px solid rgb(232, 233, 241)",
                  color: theme.palette.primary.logoColor,
                  transition: "0.4s",
                  boxShadow:"0 4px 18px 0 rgba(188, 192, 202, 0.26)"
                }}>
                <KingBedIcon />
              </IconButton>
              <Box sx={{
                display:"flex",
flexDirection:"column",
alignItems:"start",
justifyContent:"center",
gap:"5px"
              }}>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: theme.palette.primary.logoColor,
                  fontFamily:theme.palette.primary.Roboto,
                }}
                variant="h6" >Bedroom</Typography>
                 <Typography
                sx={{
                  fontSize: "14px",
                  color: theme.palette.primary.lightGrey,
                }}
                variant="span" >2 </Typography>

              </Box>
              
            </Box>
            <Box
            component="li"
            sx={{
              display: "flex",
              gap: "15px",
              alignItems: "center",
              width: "100%",
            }}
          >
              <IconButton
                className="filter_btn"
                sx={{
                  height: "50px",
                  width: "53px",
                  borderRadius: "8px",
                  backgroundColor: theme.palette.primary.white,
                  border: "1px solid rgb(232, 233, 241)",
                  color: theme.palette.primary.logoColor,
                  transition: "0.4s",
                  boxShadow:"0 4px 18px 0 rgba(188, 192, 202, 0.26)"
                }}>
                <BathtubIcon />
              </IconButton>
              <Box sx={{
                display:"flex",
flexDirection:"column",
alignItems:"start",
justifyContent:"center",
gap:"5px"
              }}>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: theme.palette.primary.logoColor,
                  fontFamily:theme.palette.primary.Roboto,
                }}
                variant="h6" >Bath</Typography>
                 <Typography
                sx={{
                  fontSize: "14px",
                  color: theme.palette.primary.lightGrey,
                }}
                variant="span" >2 </Typography>

              </Box>
              
            </Box>
            <Box
            component="li"
            sx={{
              display: "flex",
              gap: "15px",
              alignItems: "center",
              width: "100%",
            }}
          >
              <IconButton
                className="filter_btn"
                sx={{
                  height: "50px",
                  width: "53px",
                  borderRadius: "8px",
                  backgroundColor: theme.palette.primary.white,
                  border: "1px solid rgb(232, 233, 241)",
                  color: theme.palette.primary.logoColor,
                  transition: "0.4s",
                  boxShadow:"0 4px 18px 0 rgba(188, 192, 202, 0.26)"
                }}>
                < ZoomOutMapIcon />
              </IconButton>
              <Box sx={{
                display:"flex",
flexDirection:"column",
alignItems:"start",
justifyContent:"center",
gap:"5px"
              }}>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: theme.palette.primary.logoColor,
                  fontFamily:theme.palette.primary.Roboto,
                }}
                variant="h6" >Sqft </Typography>
                 <Typography
                sx={{
                  fontSize: "14px",
                  color: theme.palette.primary.lightGrey,
                }}
                variant="span" >1478 </Typography>

              </Box>
              
            </Box>
            <Box
            component="li"
            sx={{
              display: "flex",
              gap: "15px",
              alignItems: "center",
              width: "100%",
            }}
          >
              <IconButton
                className="filter_btn"
                sx={{
                  height: "50px",
                  width: "53px",
                  borderRadius: "8px",
                  backgroundColor: theme.palette.primary.white,
                  border: "1px solid rgb(232, 233, 241)",
                  color: theme.palette.primary.logoColor,
                  transition: "0.4s",
                  boxShadow:"0 4px 18px 0 rgba(188, 192, 202, 0.26)"
                }}>
                <LocationOnIcon  />
              </IconButton>
              <Box sx={{
                display:"flex",
flexDirection:"column",
alignItems:"start",
justifyContent:"center",
gap:"5px"
              }}>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: theme.palette.primary.logoColor,
                  fontFamily:theme.palette.primary.Roboto,
                }}
                variant="h6" >Location</Typography>
                 <Typography
                sx={{
                  fontSize: "14px",
                  color: theme.palette.primary.lightGrey,
                }}
                variant="span" >Saadiyat Island</Typography>

              </Box>
              
            </Box>
          </Box>


        </Box>
        <Box  sx={{
          padding: "25px 30px 30px",
          background: theme.palette.primary.white,
          boxShadow: "0 4px 18px 0 rgba(194, 200, 213, 0.3)",
          borderRadius: "6px",
          marginBottom: "10px",
        }} component={"div"}>
  <Typography
          sx={{
            fontSize: "22px",
            color: "#212121",
            lineHeight: "30px",
            marginBottom: "25px",
            fontWeight: "500",
          }}
          variant="h6"
        >
          About This Listing
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            color: "rgb(85, 85, 85)",
            lineHeight: "25px",
            marginBottom: "25px",
            fontWeight: "600",
            fontFamily:theme.palette.primary.Roboto,
          }}
         component={"p"}
        >
         Full Sea View | Loft Type | Soon to be Available
        </Typography>
        <Typography
         sx={{
          fontSize: "16px",
          color: "rgb(85, 85, 85)",
          lineHeight: "28px",
          marginBottom: "25px",
          fontFamily:theme.palette.primary.Roboto,
        }}
       component={"p"}
     >
      <p className="para"><b> MD REAL ESTATE </b>is delighted to offer you this spacious one bedroom for rent located in Mamsha . The size is 1497 Sqft with amazing sea view. The spacious apartment with large windows makes for a bright apartment with excellent views . Enjoy preparing meals in the closed kitchen that is fully fitted and has high quality countertops . The bedroom is complete with built in wardrobes and a respective modern bathroom. Perfectly finished with a large terrace for a breath of fresh air.</p>
      <h3 className="details_list_heading">
      Overview :
      </h3>
    <ul className="details_lists">
      <li>
      One Bedroom With Elegant Built-In-Wardrobes
      </li>
      <li>
      Fitted Kitchen With Built-In-Cabinets and High Quality Countertops
      </li>
      <li>
      Extensive Open Living and Dinning Area
      </li>
      <li>
      Modern Bathroom With Walk-In-Shower and Bathtub
        </li>
        <li>
        BUA: 1497.47 Sqft
        </li>
        <li>
        One Designated Parking
        </li>
        <li>
        For More information <b> Please Contact Our Property Consultant Carine</b>
        </li>
        <li>
        <b>Margossian</b> +971565399293
        </li>
    </ul>
       

        </Typography>
</Box>
<Box sx={{
          padding: "25px 30px 30px",
          background: theme.palette.primary.white,
          boxShadow: "0 4px 18px 0 rgba(194, 200, 213, 0.3)",
          borderRadius: "6px",
          marginBottom: "10px",
        }} component={"div"}>
  <Typography
          sx={{
            fontSize: "22px",
            color: "#212121",
            lineHeight: "30px",
            marginBottom: "25px",
            fontWeight: "500",
          }}
          variant="h6"
        >
         Features & Amenities
        </Typography>
</Box>
<Box sx={{
          padding: "25px 30px 30px",
          background: theme.palette.primary.white,
          boxShadow: "0 4px 18px 0 rgba(194, 200, 213, 0.3)",
          borderRadius: "6px",
          marginBottom: "10px",
        }} component={"div"}>
  <Typography
          sx={{
            fontSize: "22px",
            color: "#212121",
            lineHeight: "30px",
            marginBottom: "25px",
            fontWeight: "500",
          }}
          variant="h6"
        >
        Map Location
        </Typography>
        <Box className="map_box" component={"div"}>
      <img height={"100%"} width={"100%"} src="./assets/images/map.jpeg"/>
        </Box>
</Box>
<Box sx={{
          padding: "25px 30px 30px",
          background: theme.palette.primary.white,
          boxShadow: "0 4px 18px 0 rgba(194, 200, 213, 0.3)",
          borderRadius: "6px",
          marginBottom: "25px",
        }} component={"div"}>
  <Typography
          sx={{
            fontSize: "22px",
            color: "#212121",
            lineHeight: "30px",
            marginBottom: "25px",
            fontWeight: "500",
          }}
          variant="h6"
        >
         Yelp Nearby Places
        </Typography>
</Box>
      </Box>

  );
};

export default PropertyDetailsLeftbar;
