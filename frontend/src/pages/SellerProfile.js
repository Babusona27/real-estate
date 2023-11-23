import {
  Box,
  Typography,
  ListItem,

  ListItemIcon,
  ListItemText,
  Button,
  List,
  ListItemAvatar,
  Avatar,
  Tabs,
  Tab,
} from "@mui/material";
// import { styled } from '@mui/material/styles';

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import theme from "../Theme";
import PropTypes from 'prop-types';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import AllListingProperties from "../components/AllListingProperties";

const CustomTabPanel = ({ children, value, index }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`custom-tabpanel-${index}`}
      aria-labelledby={`custom-tab-${index}`}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
};

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};




const SellerProfile = () => {

  const [showMore, setShowMore] = useState(false);

  const handleReadMoreClick = () => {
    setShowMore(true);
  };

  const handleReadLessClick = () => {
    setShowMore(false);
  };
// tab section 

const [value, setValue] = React.useState(0);

const handleChange = (event, newValue) => {
  setValue(newValue);
};


  return (
    <>
      <Box>
        <Header />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "80%",
            backgroundColor: "#fff",
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            padding: "30px",
            margin: "150px 0 75px",
            borderRadius: "10px",
          
          }}
        >
          <Box sx={{
display: {
  xs: "block",
  sm: "block",
  md: "flex",
  lg: "flex",
},
 gap: "30px",
 justifyContent:"start",
          }}>
          <Box component="img" sx={{
              maxHeight: { xs: 150, md: 167 },
              maxWidth: { xs: 150, md: 167 },
              borderRadius: "100%",
              objectFit: "cover",
              boxShadow:"0 0 10px 0px rgb(0 0 0 / 22%)"
            }}
            alt="The house from the offer."
            src={process.env.PUBLIC_URL+"/assets/images/user-img.jpg"}
          />
          <Box>
            <Box sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              gap: "30px",
            }}>
            <Box className="leftBox">
            <Typography
              sx={{
                fontWeight: "500",
                fontSize: {
                  xs: "20px",
                  sm: "20px",
                  md: "26px",
                  lg: "26px",
                },
              }}
              variant="h4"
              component={"h3"}
            >
             Jennifer Barton
            </Typography>
            
            <ListItem disablePadding>
              <ListItemIcon sx={{
                minWidth:"auto",
               
              }}>
                <LocationOnOutlinedIcon sx={{
                   fontSize: {
                    xs: "14px",
                    sm: "14px",
                    md: "16px",
                    lg: "18px",
                  },
                }} />
              </ListItemIcon>
              <ListItemText sx={{
                fontWeight: "500",
                fontSize: {
                  xs: "14px",
                  sm: "14px",
                  md: "16px",
                  lg: "18px",
                },
                color:theme.palette.secondary.grey
              }}>Collins Street West, Victoria </ListItemText>
          </ListItem>
            </Box>
            <Box className="RightBox">
            <Button variant="contained"
                                        sx={{
                                            // width: {
                                            //     xs: "100%",
                                            //     sm: "100%",
                                            //     md: "50%",
                                            //     lg: "15%",
                                            // },
                                            borderRadius: "30px",
                                            display: { xs: "flex", sm: "flex", lg: "flex" },
                                            alignItems: "center",
                                            justifyContent: "center",
                                            border: "1px solid #dceeea",
                                            color: theme.palette.primary.white,
                                            padding: {
                                              xs:"5px 10px",
                                              sm:"8px 15px",
                                              md:"10px 20px",
                                              lg:"10px 20px"
                                            },
                                            background: theme.palette.primary.logoColor,
                                            transition: "background-color 0.3s",
                                            boxShadow: "none",
                                            width: "100%",
                                            fontSize:{
                                              xs:"14px",
                                              sm:"14px",
                                              md:"16px",
                                              lg:"16px"
                                            },
                                           
                                            minWidth:{
                                              xs:"max-content",
                                              sm:"max-content",
                                              md:"auto",
                                              lg:"auto"
                                            },
                                            minHeight: "45px",
                                            height: "45px",
                                            "&:hover": {
                                                backgroundColor: theme.palette.primary.logoColor,
                                                border: "none"
                                            },
                                        }}
                                    >Edit Profile</Button>
            </Box>
            </Box>
          
            <Box sx={{
              width:{
                xs:"100%",
                sm:"100%",
                md:"70%",
                lg:"70%",
              },
              margin:"15px 0px"
            }}>
            <Typography sx={{
                // fontWeight: "500",
                fontSize: "14px",
                color:theme.palette.secondary.grey
              }} variant="body1">
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy {!showMore && (
        <Box sx={{
          fontWeight:"500",
          cursor:"pointer",
          color:theme.palette.primary.logoColor,
          display:"inline-block",
          marginLeft:"5px"
        }} onClick={handleReadMoreClick}> More</Box>
      )}
      </Typography>
 {showMore && (

          <Typography sx={{
            // fontWeight: "500",
            fontSize: "14px",
            color:theme.palette.secondary.grey
          }} variant="body1">
          text ever since the 1500s, when an unknown printer took a galley of type and scrambled
          <Box sx={{
            fontWeight:"500",
          cursor:"pointer",
          display:"inline-block",
          marginLeft:"5px",
          color:theme.palette.primary.logoColor
        }}  onClick={handleReadLessClick}> Less</Box>
          </Typography>
         

      )}
            </Box>
          </Box>
          </Box>
         <Box sx={{
          margin:"25px 0px"
         }}>
         <List sx={{ width: '100%', maxWidth: 500,display:"flex",
        justifyContent:"space-between",
        alignItems:"center"}}>
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{
            background:theme.palette.primary.white,
            boxShadow:"0 0 10px 0px rgb(0 0 0 / 22%)"
          }}>
            <LocalMallOutlinedIcon sx={{
            color:theme.palette.primary.logoColor,
          }}/>
          </Avatar>
        </ListItemAvatar >
        <ListItemText primary="All properties" secondary="100+" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{
            background:theme.palette.primary.white,
            boxShadow:"0 0 10px 0px rgb(0 0 0 / 22%)"
          }}>
            <LocalMallOutlinedIcon sx={{
            color:theme.palette.primary.logoColor,
          }} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Sold properties" secondary="80+" />
      </ListItem>

    </List>
         </Box>
          <Box sx={{
            margin:"0px 0px 25px"
          }}>
 <Tabs className="scroll_tabbar"
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        aria-label="custom tabs example"
        sx={{
          overflowX:"scroll",
          display:"flex"
        }}
      >
        <Tab label="All properties" />
        <Tab label="sold properties" />
        <Tab label="active properties" />
      </Tabs>

      <CustomTabPanel padding={0} value={value} index={0}>
        <Box sx={{
          display:{
          xs: "grid",
          sm: "grid",
          md: "grid",
          lg: "grid",
        },
        gridTemplateColumns:{
          xs: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(1, 1fr)",
          lg: "repeat(1, 1fr)",
        },
          gap:"20px",
        }}>
          <AllListingProperties/>
          <AllListingProperties/>
          <AllListingProperties/>
          <AllListingProperties/>
          <AllListingProperties/>
          <AllListingProperties/>
          <AllListingProperties/>

        </Box>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
      <Box sx={{
          display:{
          xs: "grid",
          sm: "grid",
          md: "grid",
          lg: "grid",
        },
        gridTemplateColumns:{
          xs: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(1, 1fr)",
          lg: "repeat(1, 1fr)",
        },
          gap:"20px",
        }}>
          <AllListingProperties/>
          <AllListingProperties/>
          <AllListingProperties/>

        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      <Box sx={{
          display:{
          xs: "grid",
          sm: "grid",
          md: "grid",
          lg: "grid",
        },
        gridTemplateColumns:{
          xs: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(1, 1fr)",
          lg: "repeat(1, 1fr)",
        },
          gap:"20px",
        }}>
          <AllListingProperties/>
          <AllListingProperties/>
          <AllListingProperties/>
          <AllListingProperties/>
      

        </Box>
      </CustomTabPanel>
          </Box>
        </Box>
      
      </Box>

      <Box>
        <Footer />
      </Box>
    </>
  );
};
export default SellerProfile;