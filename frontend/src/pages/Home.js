import {
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  FormControl,
  IconButton,
  InputLabel,
  List,
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
// import PropertyPost from "../components/PropertyPost";
import theme from "../Theme";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";
import SingleBedIcon from "@mui/icons-material/SingleBed";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import styled from "@emotion/styled";

const TabPanel = ({ children, value, index }) => (
  <div className={`tab-panel ${value === index ? "active" : ""}`}>
    {value === index && <Box padding={"20px 0px"}>{children}</Box>}
  </div>
);

// slider
// const newSlider = {
//   items: 3,
//   loop: true,
//   autoplay: false,
//   autoplayTimeout: 4000,
//   nav: true,
//   navText: [
//     '<i class="fa-solid fa-angle-left"></i>',
//     '<i class="fa-solid fa-angle-right"></i>',
//   ],
//   dots: false,
//   margin: 20,
//   responsive: {
//     1180: {
//       items: 3,
//     },
//     724: {
//       items: 3,
//     },
//     500: {
//       items: 2,
//     },
//     370: {
//       items: 1,
//     },
//   },
// };

const newSlider = {
  loop: false,
  autoplay: true,
  autoplayTimeout: 4000,
  nav: false,
  margin: 20,
  navText: [
    '<i class="fa-solid fa-angle-left"></i>',
    '<i class="fa-solid fa-angle-right"></i>',
  ],
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
};

const Home = () => {
  const [value1, setVal] = React.useState("");
  const [value2, setVal1] = React.useState("");
  const [value3, setVal2] = React.useState("");
  const [value4, setVal3] = React.useState("");
  const handleChange1 = (event) => {
    setVal(event.target.value);
  };
  const handleChange2 = (event) => {
    setVal1(event.target.value);
  };
  const handleChange3 = (event) => {
    setVal2(event.target.value);
  };
  const handleChange4 = (event) => {
    setVal3(event.target.value);
  };

  // ===============select box

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box>
        <Header />
      </Box>
      <Box
        component={"div"}
        className="banner_sec"
        sx={{
          background: "URL(./assets/images/heroBg.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "50%",
          minHeight: "100vh",
          position: "relative",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            backgroundColor: theme.palette.primary.BGColor,
            height: "100%",
            padding: {
              xs: "0px 10px",
              sm: "0px 10px",
              md: "0px 10px",
              lg: "0px 0px",
            },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "70%",
              height: "auto",
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                marginBottom: "15px",
              }}
              color={theme.palette.primary.white}
              variant="h3"
              component={"h1"}
            >
              Find Your Dream Home
            </Typography>
            <Typography
              fontSize={"16px"}
              color={theme.palette.primary.white}
              component={"p"}
            >
              From as low as $10 per day with limited time offer discounts.
            </Typography>

            <Box sx={{ width: "100%", margin: "0px auto", marginTop: "50px" }}>
              <Tabs
                className="tab_box"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                value={value}
                onChange={handleChange}
                centered
                indicatorColor="none"
                textColor="primary"
              >
                <Tab
                  sx={{
                    backgroundColor: "#fff",
                    height: "35px",
                    lineHeight: "1",
                    textAlign: "center",
                    width: "auto",
                    borderRadius: "8px",
                    fontSize: "16px",
                    fontWeight: "500",
                    overflow: "visible",
                  }}
                  label="Buy"
                  className={`tabBtn ${value === 0 ? "active_tab" : ""}`}
                />
                <Tab
                  sx={{
                    backgroundColor: "#fff",
                    height: "35px",
                    lineHeight: "1",
                    textAlign: "center",
                    width: "auto",
                    borderRadius: "8px",
                    fontSize: "16px",
                    fontWeight: "500",
                    overflow: "visible",
                  }}
                  label="Rent"
                  className={`tabBtn ${value === 1 ? "active_tab" : ""}`}
                />
              </Tabs>

              <TabPanel value={value} index={0}>
                <Box
                  className={"tab_cont"}
                  sx={{
                    backgroundColor: theme.palette.primary.white,
                    padding: "20px 20px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "20px",
                    position: "relative",
                    zIndex: "5",
                    borderRadius: "10px",
                  }}
                >
                  <TextField
                    className="form_input1"
                    fullWidth
                    id="outlined-basic"
                    label="Enter keyword..."
                    variant="outlined"
                  />
                  <Box sx={{ width: "100%" }}>
                    <FormControl
                      className="form_input1"
                      fullWidth
                      sx={{ color: theme.palette.primary.lightGrey }}
                    >
                      <InputLabel id="demo-controlled-open-select-label">
                        Property Type
                      </InputLabel>
                      <Select
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        value={value1}
                        label="Property Type"
                        onChange={handleChange1}
                      >
                        <MenuItem value={1}>Property Type </MenuItem>
                        <MenuItem value={2}>Sale</MenuItem>
                        <MenuItem value={3}>Rent</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                  <TextField
                    className="form_input1"
                    fullWidth
                    id="outlined-basic"
                    label="Location"
                    variant="outlined"
                  />
                  <Box sx={{ width: "100%" }}>
                    <FormControl
                      className="form_input1"
                      fullWidth
                      sx={{ color: theme.palette.primary.lightGrey }}
                    >
                      <InputLabel id="demo-controlled-open-select-label">
                        Property Type
                      </InputLabel>
                      <Select
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        value={value2}
                        label="Property Type"
                        onChange={handleChange2}
                      >
                        <MenuItem value={1}>Property Type </MenuItem>
                        <MenuItem value={2}>Sale</MenuItem>
                        <MenuItem value={3}>Rent</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                  <Button
                    sx={{
                      width: "100%",
                      backgroundColor: theme.palette.primary.logoColor,
                      height: "45px",
                      fontSize: "14px",
                      fontWeight: "600",
                      lineHeight: "1.2px",
                      boxShadow: "0 7px 18px 0 rgba(29, 142, 162, 0.32)",
                      color: theme.palette.primary.white,
                      "&:hover": { backgroundColor: "#00a376" },
                    }}
                  >
                    Search
                  </Button>
                </Box>
              </TabPanel>

              <TabPanel value={value} index={1}>
                <Box
                  className={"tab_cont"}
                  sx={{
                    backgroundColor: theme.palette.primary.white,
                    padding: "20px 20px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "20px",
                    position: "relative",
                    zIndex: "5",
                    borderRadius: "10px",
                  }}
                >
                  <TextField
                    className="form_input1"
                    fullWidth
                    id="outlined-basic"
                    label="Enter keyword..."
                    variant="outlined"
                  />
                  <Box sx={{ width: "100%" }}>
                    <FormControl
                      className="form_input1"
                      fullWidth
                      sx={{ color: theme.palette.primary.lightGrey }}
                    >
                      <InputLabel id="demo-controlled-open-select-label">
                        Property Type
                      </InputLabel>
                      <Select
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        value={value3}
                        label="Property Type"
                        onChange={handleChange3}
                      >
                        <MenuItem value={1}>Property Type </MenuItem>
                        <MenuItem value={2}>Sale</MenuItem>
                        <MenuItem value={3}>Rent</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                  <TextField
                    className="form_input1"
                    fullWidth
                    id="outlined-basic"
                    label="Location"
                    variant="outlined"
                  />
                  <Box sx={{ width: "100%" }}>
                    <FormControl
                      className="form_input1"
                      fullWidth
                      sx={{ color: theme.palette.primary.lightGrey }}
                    >
                      <InputLabel id="demo-controlled-open-select-label">
                        Property Type
                      </InputLabel>
                      <Select
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        value={value4}
                        label="Property Type"
                        onChange={handleChange4}
                      >
                        <MenuItem value={1}>Property Type </MenuItem>
                        <MenuItem value={2}>Sale</MenuItem>
                        <MenuItem value={3}>Rent</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                  <Button
                    sx={{
                      width: "100%",
                      backgroundColor: theme.palette.primary.logoColor,
                      height: "45px",
                      fontSize: "14px",
                      fontWeight: "600",
                      lineHeight: "1.2px",
                      boxShadow: "0 7px 18px 0 rgba(29, 142, 162, 0.32)",
                      color: theme.palette.primary.white,
                      "&:hover": { backgroundColor: "#00a376" },
                    }}
                  >
                    Search
                  </Button>
                </Box>
              </TabPanel>
            </Box>
          </Box>
        </Container>
      </Box>
      {/* Featured Properties section  */}
      <Box
        className="featured_section"
        component={"section"}
        sx={{
          padding: "50px 0px",
          backgroundColor: theme.palette.primary.BGColor,
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
          <Box
            className={"heading"}
            sx={{
              textAlign: "center",
              marginBottom: "50px",
            }}
          >
            <Typography
              variant="h4"
              component={"h2"}
              sx={{
                fontSize: "28px",
                fontWeight: "500",
                lineHeight: "32px",
                marginBottom: "10px",
              }}
            >
              Featured Properties
            </Typography>
            <Typography
              component={"p"}
              sx={{
                fontSize: "14px",
              }}
            >
              Handpicked properties by our team.
            </Typography>
          </Box>
          <Box
          // sx={{
          //   margin: {
          //     xs: "0px 0px",
          //     sm: "0px 0px",
          //     md: "0px 70px",
          //     lg: "0px 70px",
          //     xl: "0px 70px",
          //   },
          // }}
          >
            <OwlCarousel className="owl-theme" {...newSlider}>
              {/* need to be chenge property_items  */}
              <div class="property_item">
                {/* need to chenge  item  */}
                <Box>
                  <Card
                    className="post_card"
                    sx={{
                      width: "100%",
                      border: "1px solid #e9e7d",
                      boxShadow: "0 4px 18px 0 rgb(194 200 213 / 0%)",
                      "&:hover": {
                        boxShadow: "0 11px 35px 0 rgba(0, 0, 0, .1)",
                      },
                    }}
                  >
                    <CardActionArea>
                      <Box sx={{ position: "relative" }}>
                        <Catagorys>
                          <Span
                            bgcolor={"#ff9642"}
                            variant="span"
                            className="catagory"
                          >
                            Featured
                          </Span>
                          <Span
                            bgcolor={"#17a2b8 "}
                            variant="span"
                            className="catagory"
                          >
                            Top
                          </Span>
                          <Span
                            bgcolor={"#5f40fb"}
                            variant="span"
                            className="catagory"
                          >
                            Bump Up
                          </Span>
                        </Catagorys>
                        <CardMedia
                          component="img"
                          height="200"
                          image={"./assets/images/R1.jpg"}
                          alt="green iguana"
                          sx={{
                            height: "250px",
                          }}
                        />
                        <BottomBar>
                          <Typography
                            sx={{
                              fontSize: "22px",
                              fontWeight: "600",
                              textShadow: "0.5px 0.5px #000000",
                              color: theme.palette.primary.white,
                            }}
                            variant="h6"
                          >
                            15000
                          </Typography>
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
                                backgroundColor:
                                  theme.palette.primary.LightBlue,
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
                                backgroundColor:
                                  theme.palette.primary.LightBlue,
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
                                backgroundColor:
                                  theme.palette.primary.LightBlue,
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
                        <Rent>Apartment for Rent</Rent>
                      </Box>
                      <CardContent
                        sx={{
                          paddingLeft: "0px",
                          paddingRight: "0px",
                        }}
                      >
                        <Box
                          sx={{
                            paddingLeft: "20px",
                            paddingRight: "20px",
                            paddingBottom: "10px",
                            marginBottom: "10px",
                            borderBottom: "1px solid #e1e1e1",
                          }}
                        >
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
                            }}
                            gutterBottom
                            variant="h5"
                            component="h4"
                          >
                            Full Sea View For Rent
                          </Typography>
                          <FlexBox>
                            <List
                              sx={{
                                display: "flex",
                                gap: "7px",
                                alignItems: "center",
                                padding: "0px",
                              }}
                            >
                              <IconButton
                                sx={{
                                  backgroundColor:
                                    theme.palette.primary.LightVlue2,
                                  color: theme.palette.primary.logoColor,
                                  width: "32px",
                                  height: "32px",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                <SingleBedIcon />
                              </IconButton>
                              <Typography
                                sx={{
                                  fontSize: "14px",
                                  fontWeight: "500",
                                  color: "#666666",
                                }}
                                variant="span"
                                component="h3"
                              >
                                2
                              </Typography>
                            </List>
                            <List
                              sx={{
                                display: "flex",
                                gap: "7px",
                                alignItems: "center",
                                padding: "0px",
                              }}
                            >
                              <IconButton
                                sx={{
                                  backgroundColor:
                                    theme.palette.primary.LightVlue2,
                                  color: theme.palette.primary.logoColor,
                                  width: "32px",
                                  height: "32px",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                <BathtubOutlinedIcon />
                              </IconButton>
                              <Typography
                                sx={{
                                  fontSize: "14px",
                                  fontWeight: "500",
                                  color: "#666666",
                                }}
                                variant="span"
                                component="h3"
                              >
                                4
                              </Typography>
                            </List>
                            <List
                              sx={{
                                display: "flex",
                                gap: "7px",
                                alignItems: "center",
                                padding: "0px",
                              }}
                            >
                              <IconButton
                                sx={{
                                  backgroundColor:
                                    theme.palette.primary.LightVlue2,
                                  color: theme.palette.primary.logoColor,
                                  width: "32px",
                                  height: "32px",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                <ZoomOutMapIcon />
                              </IconButton>
                              <Typography
                                sx={{
                                  fontSize: "14px",
                                  fontWeight: "500",
                                  color: "#666666",
                                }}
                                variant="span"
                                component="h3"
                              >
                                1437
                              </Typography>
                            </List>
                          </FlexBox>
                        </Box>
                        <Box
                          sx={{
                            paddingLeft: "20px",
                            paddingRight: "20px",
                          }}
                        >
                          <FlexBox>
                            <UserBox>
                              <Avatar
                                sx={{ width: "36px", height: "36px" }}
                                src="./assets/images/avtar/avatar.png"
                              />
                              <Typography
                                sx={{
                                  display: "-webkit-box",
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  WebkitLineClamp: "1",
                                  WebkitBoxOrient: "vertical",
                                  fontFamily: "'Roboto', sans-serif !important",
                                  fontSize: "14px",
                                  fontWeight: "500",
                                  color: "#666666",
                                }}
                                variant="span"
                              >
                                suraj
                              </Typography>
                            </UserBox>
                            <Button
                              className="customBtnStyle"
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
                                  backgroundColor:
                                    theme.palette.primary.logoColor,
                                  color: theme.palette.primary.white,
                                  boxShadow: "none",
                                },
                              }}
                              variant="contained"
                            >
                              Details
                            </Button>
                          </FlexBox>
                        </Box>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Box>
              </div>
              <div class="property_item">
                {/* need to chenge  item  */}
                <Box>
                  <Card
                    className="post_card"
                    sx={{
                      width: "100%",
                      border: "1px solid #e9e7d",
                      boxShadow: "0 4px 18px 0 rgb(194 200 213 / 0%)",
                      "&:hover": {
                        boxShadow: "0 11px 35px 0 rgba(0, 0, 0, .1)",
                      },
                    }}
                  >
                    <CardActionArea>
                      <Box sx={{ position: "relative" }}>
                        <Catagorys>
                          <Span
                            bgcolor={"#ff9642"}
                            variant="span"
                            className="catagory"
                          >
                            Featured
                          </Span>
                          <Span
                            bgcolor={"#17a2b8 "}
                            variant="span"
                            className="catagory"
                          >
                            Top
                          </Span>
                          <Span
                            bgcolor={"#5f40fb"}
                            variant="span"
                            className="catagory"
                          >
                            Bump Up
                          </Span>
                        </Catagorys>
                        <CardMedia
                          component="img"
                          height="200"
                          image={"./assets/images/R1.jpg"}
                          alt="green iguana"
                          sx={{
                            height: "250px",
                          }}
                        />
                        <BottomBar>
                          <Typography
                            sx={{
                              fontSize: "22px",
                              fontWeight: "600",
                              textShadow: "0.5px 0.5px #000000",
                              color: theme.palette.primary.white,
                            }}
                            variant="h6"
                          >
                            15000
                          </Typography>
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
                                backgroundColor:
                                  theme.palette.primary.LightBlue,
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
                                backgroundColor:
                                  theme.palette.primary.LightBlue,
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
                                backgroundColor:
                                  theme.palette.primary.LightBlue,
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
                        <Rent>Apartment for Rent</Rent>
                      </Box>
                      <CardContent
                        sx={{
                          paddingLeft: "0px",
                          paddingRight: "0px",
                        }}
                      >
                        <Box
                          sx={{
                            paddingLeft: "20px",
                            paddingRight: "20px",
                            paddingBottom: "10px",
                            marginBottom: "10px",
                            borderBottom: "1px solid #e1e1e1",
                          }}
                        >
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
                            }}
                            gutterBottom
                            variant="h5"
                            component="h4"
                          >
                            Full Sea View For Rent
                          </Typography>
                          <FlexBox>
                            <List
                              sx={{
                                display: "flex",
                                gap: "7px",
                                alignItems: "center",
                                padding: "0px",
                              }}
                            >
                              <IconButton
                                sx={{
                                  backgroundColor:
                                    theme.palette.primary.LightVlue2,
                                  color: theme.palette.primary.logoColor,
                                  width: "32px",
                                  height: "32px",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                <SingleBedIcon />
                              </IconButton>
                              <Typography
                                sx={{
                                  fontSize: "14px",
                                  fontWeight: "500",
                                  color: "#666666",
                                }}
                                variant="span"
                                component="h3"
                              >
                                2
                              </Typography>
                            </List>
                            <List
                              sx={{
                                display: "flex",
                                gap: "7px",
                                alignItems: "center",
                                padding: "0px",
                              }}
                            >
                              <IconButton
                                sx={{
                                  backgroundColor:
                                    theme.palette.primary.LightVlue2,
                                  color: theme.palette.primary.logoColor,
                                  width: "32px",
                                  height: "32px",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                <BathtubOutlinedIcon />
                              </IconButton>
                              <Typography
                                sx={{
                                  fontSize: "14px",
                                  fontWeight: "500",
                                  color: "#666666",
                                }}
                                variant="span"
                                component="h3"
                              >
                                4
                              </Typography>
                            </List>
                            <List
                              sx={{
                                display: "flex",
                                gap: "7px",
                                alignItems: "center",
                                padding: "0px",
                              }}
                            >
                              <IconButton
                                sx={{
                                  backgroundColor:
                                    theme.palette.primary.LightVlue2,
                                  color: theme.palette.primary.logoColor,
                                  width: "32px",
                                  height: "32px",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                <ZoomOutMapIcon />
                              </IconButton>
                              <Typography
                                sx={{
                                  fontSize: "14px",
                                  fontWeight: "500",
                                  color: "#666666",
                                }}
                                variant="span"
                                component="h3"
                              >
                                1437
                              </Typography>
                            </List>
                          </FlexBox>
                        </Box>
                        <Box
                          sx={{
                            paddingLeft: "20px",
                            paddingRight: "20px",
                          }}
                        >
                          <FlexBox>
                            <UserBox>
                              <Avatar
                                sx={{ width: "36px", height: "36px" }}
                                src="./assets/images/avtar/avatar.png"
                              />
                              <Typography
                                sx={{
                                  display: "-webkit-box",
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  WebkitLineClamp: "1",
                                  WebkitBoxOrient: "vertical",
                                  fontFamily: "'Roboto', sans-serif !important",
                                  fontSize: "14px",
                                  fontWeight: "500",
                                  color: "#666666",
                                }}
                                variant="span"
                              >
                                suraj
                              </Typography>
                            </UserBox>
                            <Button
                              className="customBtnStyle"
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
                                  backgroundColor:
                                    theme.palette.primary.logoColor,
                                  color: theme.palette.primary.white,
                                  boxShadow: "none",
                                },
                              }}
                              variant="contained"
                            >
                              Details
                            </Button>
                          </FlexBox>
                        </Box>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Box>
              </div>
              <div class="property_item">
                {/* need to chenge  item  */}
                <Box>
                  <Card
                    className="post_card"
                    sx={{
                      width: "100%",
                      border: "1px solid #e9e7d",
                      boxShadow: "0 4px 18px 0 rgb(194 200 213 / 0%)",
                      "&:hover": {
                        boxShadow: "0 11px 35px 0 rgba(0, 0, 0, .1)",
                      },
                    }}
                  >
                    <CardActionArea>
                      <Box sx={{ position: "relative" }}>
                        <Catagorys>
                          <Span
                            bgcolor={"#ff9642"}
                            variant="span"
                            className="catagory"
                          >
                            Featured
                          </Span>
                          <Span
                            bgcolor={"#17a2b8 "}
                            variant="span"
                            className="catagory"
                          >
                            Top
                          </Span>
                          <Span
                            bgcolor={"#5f40fb"}
                            variant="span"
                            className="catagory"
                          >
                            Bump Up
                          </Span>
                        </Catagorys>
                        <CardMedia
                          component="img"
                          height="200"
                          image={"./assets/images/R1.jpg"}
                          alt="green iguana"
                          sx={{
                            height: "250px",
                          }}
                        />
                        <BottomBar>
                          <Typography
                            sx={{
                              fontSize: "22px",
                              fontWeight: "600",
                              textShadow: "0.5px 0.5px #000000",
                              color: theme.palette.primary.white,
                            }}
                            variant="h6"
                          >
                            15000
                          </Typography>
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
                                backgroundColor:
                                  theme.palette.primary.LightBlue,
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
                                backgroundColor:
                                  theme.palette.primary.LightBlue,
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
                                backgroundColor:
                                  theme.palette.primary.LightBlue,
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
                        <Rent>Apartment for Rent</Rent>
                      </Box>
                      <CardContent
                        sx={{
                          paddingLeft: "0px",
                          paddingRight: "0px",
                        }}
                      >
                        <Box
                          sx={{
                            paddingLeft: "20px",
                            paddingRight: "20px",
                            paddingBottom: "10px",
                            marginBottom: "10px",
                            borderBottom: "1px solid #e1e1e1",
                          }}
                        >
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
                            }}
                            gutterBottom
                            variant="h5"
                            component="h4"
                          >
                            Full Sea View For Rent
                          </Typography>
                          <FlexBox>
                            <List
                              sx={{
                                display: "flex",
                                gap: "7px",
                                alignItems: "center",
                                padding: "0px",
                              }}
                            >
                              <IconButton
                                sx={{
                                  backgroundColor:
                                    theme.palette.primary.LightVlue2,
                                  color: theme.palette.primary.logoColor,
                                  width: "32px",
                                  height: "32px",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                <SingleBedIcon />
                              </IconButton>
                              <Typography
                                sx={{
                                  fontSize: "14px",
                                  fontWeight: "500",
                                  color: "#666666",
                                }}
                                variant="span"
                                component="h3"
                              >
                                2
                              </Typography>
                            </List>
                            <List
                              sx={{
                                display: "flex",
                                gap: "7px",
                                alignItems: "center",
                                padding: "0px",
                              }}
                            >
                              <IconButton
                                sx={{
                                  backgroundColor:
                                    theme.palette.primary.LightVlue2,
                                  color: theme.palette.primary.logoColor,
                                  width: "32px",
                                  height: "32px",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                <BathtubOutlinedIcon />
                              </IconButton>
                              <Typography
                                sx={{
                                  fontSize: "14px",
                                  fontWeight: "500",
                                  color: "#666666",
                                }}
                                variant="span"
                                component="h3"
                              >
                                4
                              </Typography>
                            </List>
                            <List
                              sx={{
                                display: "flex",
                                gap: "7px",
                                alignItems: "center",
                                padding: "0px",
                              }}
                            >
                              <IconButton
                                sx={{
                                  backgroundColor:
                                    theme.palette.primary.LightVlue2,
                                  color: theme.palette.primary.logoColor,
                                  width: "32px",
                                  height: "32px",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                <ZoomOutMapIcon />
                              </IconButton>
                              <Typography
                                sx={{
                                  fontSize: "14px",
                                  fontWeight: "500",
                                  color: "#666666",
                                }}
                                variant="span"
                                component="h3"
                              >
                                1437
                              </Typography>
                            </List>
                          </FlexBox>
                        </Box>
                        <Box
                          sx={{
                            paddingLeft: "20px",
                            paddingRight: "20px",
                          }}
                        >
                          <FlexBox>
                            <UserBox>
                              <Avatar
                                sx={{ width: "36px", height: "36px" }}
                                src="./assets/images/avtar/avatar.png"
                              />
                              <Typography
                                sx={{
                                  display: "-webkit-box",
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  WebkitLineClamp: "1",
                                  WebkitBoxOrient: "vertical",
                                  fontFamily: "'Roboto', sans-serif !important",
                                  fontSize: "14px",
                                  fontWeight: "500",
                                  color: "#666666",
                                }}
                                variant="span"
                              >
                                suraj
                              </Typography>
                            </UserBox>
                            <Button
                              className="customBtnStyle"
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
                                  backgroundColor:
                                    theme.palette.primary.logoColor,
                                  color: theme.palette.primary.white,
                                  boxShadow: "none",
                                },
                              }}
                              variant="contained"
                            >
                              Details
                            </Button>
                          </FlexBox>
                        </Box>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Box>
              </div>
              <div class="property_item">
                {/* need to chenge  item  */}
                <Box>
                  <Card
                    className="post_card"
                    sx={{
                      width: "100%",
                      border: "1px solid #e9e7d",
                      boxShadow: "0 4px 18px 0 rgb(194 200 213 / 0%)",
                      "&:hover": {
                        boxShadow: "0 11px 35px 0 rgba(0, 0, 0, .1)",
                      },
                    }}
                  >
                    <CardActionArea>
                      <Box sx={{ position: "relative" }}>
                        <Catagorys>
                          <Span
                            bgcolor={"#ff9642"}
                            variant="span"
                            className="catagory"
                          >
                            Featured
                          </Span>
                          <Span
                            bgcolor={"#17a2b8 "}
                            variant="span"
                            className="catagory"
                          >
                            Top
                          </Span>
                          <Span
                            bgcolor={"#5f40fb"}
                            variant="span"
                            className="catagory"
                          >
                            Bump Up
                          </Span>
                        </Catagorys>
                        <CardMedia
                          component="img"
                          height="200"
                          image={"./assets/images/R1.jpg"}
                          alt="green iguana"
                          sx={{
                            height: "250px",
                          }}
                        />
                        <BottomBar>
                          <Typography
                            sx={{
                              fontSize: "22px",
                              fontWeight: "600",
                              textShadow: "0.5px 0.5px #000000",
                              color: theme.palette.primary.white,
                            }}
                            variant="h6"
                          >
                            15000
                          </Typography>
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
                                backgroundColor:
                                  theme.palette.primary.LightBlue,
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
                                backgroundColor:
                                  theme.palette.primary.LightBlue,
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
                                backgroundColor:
                                  theme.palette.primary.LightBlue,
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
                        <Rent>Apartment for Rent</Rent>
                      </Box>
                      <CardContent
                        sx={{
                          paddingLeft: "0px",
                          paddingRight: "0px",
                        }}
                      >
                        <Box
                          sx={{
                            paddingLeft: "20px",
                            paddingRight: "20px",
                            paddingBottom: "10px",
                            marginBottom: "10px",
                            borderBottom: "1px solid #e1e1e1",
                          }}
                        >
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
                            }}
                            gutterBottom
                            variant="h5"
                            component="h4"
                          >
                            Full Sea View For Rent
                          </Typography>
                          <FlexBox>
                            <List
                              sx={{
                                display: "flex",
                                gap: "7px",
                                alignItems: "center",
                                padding: "0px",
                              }}
                            >
                              <IconButton
                                sx={{
                                  backgroundColor:
                                    theme.palette.primary.LightVlue2,
                                  color: theme.palette.primary.logoColor,
                                  width: "32px",
                                  height: "32px",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                <SingleBedIcon />
                              </IconButton>
                              <Typography
                                sx={{
                                  fontSize: "14px",
                                  fontWeight: "500",
                                  color: "#666666",
                                }}
                                variant="span"
                                component="h3"
                              >
                                2
                              </Typography>
                            </List>
                            <List
                              sx={{
                                display: "flex",
                                gap: "7px",
                                alignItems: "center",
                                padding: "0px",
                              }}
                            >
                              <IconButton
                                sx={{
                                  backgroundColor:
                                    theme.palette.primary.LightVlue2,
                                  color: theme.palette.primary.logoColor,
                                  width: "32px",
                                  height: "32px",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                <BathtubOutlinedIcon />
                              </IconButton>
                              <Typography
                                sx={{
                                  fontSize: "14px",
                                  fontWeight: "500",
                                  color: "#666666",
                                }}
                                variant="span"
                                component="h3"
                              >
                                4
                              </Typography>
                            </List>
                            <List
                              sx={{
                                display: "flex",
                                gap: "7px",
                                alignItems: "center",
                                padding: "0px",
                              }}
                            >
                              <IconButton
                                sx={{
                                  backgroundColor:
                                    theme.palette.primary.LightVlue2,
                                  color: theme.palette.primary.logoColor,
                                  width: "32px",
                                  height: "32px",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                <ZoomOutMapIcon />
                              </IconButton>
                              <Typography
                                sx={{
                                  fontSize: "14px",
                                  fontWeight: "500",
                                  color: "#666666",
                                }}
                                variant="span"
                                component="h3"
                              >
                                1437
                              </Typography>
                            </List>
                          </FlexBox>
                        </Box>
                        <Box
                          sx={{
                            paddingLeft: "20px",
                            paddingRight: "20px",
                          }}
                        >
                          <FlexBox>
                            <UserBox>
                              <Avatar
                                sx={{ width: "36px", height: "36px" }}
                                src="./assets/images/avtar/avatar.png"
                              />
                              <Typography
                                sx={{
                                  display: "-webkit-box",
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  WebkitLineClamp: "1",
                                  WebkitBoxOrient: "vertical",
                                  fontFamily: "'Roboto', sans-serif !important",
                                  fontSize: "14px",
                                  fontWeight: "500",
                                  color: "#666666",
                                }}
                                variant="span"
                              >
                                suraj
                              </Typography>
                            </UserBox>
                            <Button
                              className="customBtnStyle"
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
                                  backgroundColor:
                                    theme.palette.primary.logoColor,
                                  color: theme.palette.primary.white,
                                  boxShadow: "none",
                                },
                              }}
                              variant="contained"
                            >
                              Details
                            </Button>
                          </FlexBox>
                        </Box>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Box>
              </div>
              <div class="property_item">
                {/* need to chenge  item  */}
                <Box>
                  <Card
                    className="post_card"
                    sx={{
                      width: "100%",
                      border: "1px solid #e9e7d",
                      boxShadow: "0 4px 18px 0 rgb(194 200 213 / 0%)",
                      "&:hover": {
                        boxShadow: "0 11px 35px 0 rgba(0, 0, 0, .1)",
                      },
                    }}
                  >
                    <CardActionArea>
                      <Box sx={{ position: "relative" }}>
                        <Catagorys>
                          <Span
                            bgcolor={"#ff9642"}
                            variant="span"
                            className="catagory"
                          >
                            Featured
                          </Span>
                          <Span
                            bgcolor={"#17a2b8 "}
                            variant="span"
                            className="catagory"
                          >
                            Top
                          </Span>
                          <Span
                            bgcolor={"#5f40fb"}
                            variant="span"
                            className="catagory"
                          >
                            Bump Up
                          </Span>
                        </Catagorys>
                        <CardMedia
                          component="img"
                          height="200"
                          image={"./assets/images/R1.jpg"}
                          alt="green iguana"
                          sx={{
                            height: "250px",
                          }}
                        />
                        <BottomBar>
                          <Typography
                            sx={{
                              fontSize: "22px",
                              fontWeight: "600",
                              textShadow: "0.5px 0.5px #000000",
                              color: theme.palette.primary.white,
                            }}
                            variant="h6"
                          >
                            15000
                          </Typography>
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
                                backgroundColor:
                                  theme.palette.primary.LightBlue,
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
                                backgroundColor:
                                  theme.palette.primary.LightBlue,
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
                                backgroundColor:
                                  theme.palette.primary.LightBlue,
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
                        <Rent>Apartment for Rent</Rent>
                      </Box>
                      <CardContent
                        sx={{
                          paddingLeft: "0px",
                          paddingRight: "0px",
                        }}
                      >
                        <Box
                          sx={{
                            paddingLeft: "20px",
                            paddingRight: "20px",
                            paddingBottom: "10px",
                            marginBottom: "10px",
                            borderBottom: "1px solid #e1e1e1",
                          }}
                        >
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
                            }}
                            gutterBottom
                            variant="h5"
                            component="h4"
                          >
                            Full Sea View For Rent
                          </Typography>
                          <FlexBox>
                            <List
                              sx={{
                                display: "flex",
                                gap: "7px",
                                alignItems: "center",
                                padding: "0px",
                              }}
                            >
                              <IconButton
                                sx={{
                                  backgroundColor:
                                    theme.palette.primary.LightVlue2,
                                  color: theme.palette.primary.logoColor,
                                  width: "32px",
                                  height: "32px",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                <SingleBedIcon />
                              </IconButton>
                              <Typography
                                sx={{
                                  fontSize: "14px",
                                  fontWeight: "500",
                                  color: "#666666",
                                }}
                                variant="span"
                                component="h3"
                              >
                                2
                              </Typography>
                            </List>
                            <List
                              sx={{
                                display: "flex",
                                gap: "7px",
                                alignItems: "center",
                                padding: "0px",
                              }}
                            >
                              <IconButton
                                sx={{
                                  backgroundColor:
                                    theme.palette.primary.LightVlue2,
                                  color: theme.palette.primary.logoColor,
                                  width: "32px",
                                  height: "32px",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                <BathtubOutlinedIcon />
                              </IconButton>
                              <Typography
                                sx={{
                                  fontSize: "14px",
                                  fontWeight: "500",
                                  color: "#666666",
                                }}
                                variant="span"
                                component="h3"
                              >
                                4
                              </Typography>
                            </List>
                            <List
                              sx={{
                                display: "flex",
                                gap: "7px",
                                alignItems: "center",
                                padding: "0px",
                              }}
                            >
                              <IconButton
                                sx={{
                                  backgroundColor:
                                    theme.palette.primary.LightVlue2,
                                  color: theme.palette.primary.logoColor,
                                  width: "32px",
                                  height: "32px",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                <ZoomOutMapIcon />
                              </IconButton>
                              <Typography
                                sx={{
                                  fontSize: "14px",
                                  fontWeight: "500",
                                  color: "#666666",
                                }}
                                variant="span"
                                component="h3"
                              >
                                1437
                              </Typography>
                            </List>
                          </FlexBox>
                        </Box>
                        <Box
                          sx={{
                            paddingLeft: "20px",
                            paddingRight: "20px",
                          }}
                        >
                          <FlexBox>
                            <UserBox>
                              <Avatar
                                sx={{ width: "36px", height: "36px" }}
                                src="./assets/images/avtar/avatar.png"
                              />
                              <Typography
                                sx={{
                                  display: "-webkit-box",
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  WebkitLineClamp: "1",
                                  WebkitBoxOrient: "vertical",
                                  fontFamily: "'Roboto', sans-serif !important",
                                  fontSize: "14px",
                                  fontWeight: "500",
                                  color: "#666666",
                                }}
                                variant="span"
                              >
                                suraj
                              </Typography>
                            </UserBox>
                            <Button
                              className="customBtnStyle"
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
                                  backgroundColor:
                                    theme.palette.primary.logoColor,
                                  color: theme.palette.primary.white,
                                  boxShadow: "none",
                                },
                              }}
                              variant="contained"
                            >
                              Details
                            </Button>
                          </FlexBox>
                        </Box>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Box>
              </div>
            </OwlCarousel>
          </Box>
        </Container>
      </Box>
      {/* Find Properties in These Cities */}
      <Box
        className="featured_section"
        component={"section"}
        sx={{
          padding: "50px 0px",
          backgroundColor: theme.palette.primary.white,
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
          <Box
            className={"heading"}
            sx={{
              textAlign: "center",
              marginBottom: "50px",
            }}
          >
            <Typography
              variant="h4"
              component={"h2"}
              sx={{
                fontSize: "28px",
                fontWeight: "500",
                lineHeight: "32px",
                marginBottom: "10px",
              }}
            >
              Find Properties in These Cities
            </Typography>
            <Typography
              component={"p"}
              sx={{
                fontSize: "14px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap:"30px"
            }}
          >
            <Box
              sx={{
                flex: "1",
                // backgroundImage:"url(./assets/images/R5.jpg)",
                // backgroundPosition:"center",
                // backgroundSize:"cover",
                // backgroundRepeat:"no-repeat",
                minHeight:"300px",
                borderRadius:"20px",
                position:"relative",
                overflow:"hidden",
              }}
              className={"cities_box"}
              component={"a"}
              href="#"
            >
                 <Box className={"city_img"} sx={{
                  position:"absolute",
                  bottom:"0",
                  left:"0",
                  height:"100%",
                  width:"100%",
                  objectFit:"cover"
              }} component={"img"} src="./assets/images/R3.jpg"/>
             <Box  sx={{
               position:"absolute",
               bottom:"0",
               left:"0",
               height:"100%",
               width:"100%",
               background:"rgb(0,0,0,30%)",
               opacity:"0"
              }} className={"overlay"}></Box>
             <Box sx={{
position:"absolute",
bottom:"-50%",
left:"0",
height:"30%",
width:"100%",

             }} 
             className={"cities_content_box"}>
             <Typography sx={{
fontSize:"28px",
color:theme.palette.primary.white,
fontWeight:"500",
lineHeight:"35px",
textAlign:"center",
             }}
              component={"h3"}>Miami</Typography>
             <Typography sx={{
fontSize:"18px",
color:theme.palette.primary.white,
fontWeight:"500",
lineHeight:"35px",
textAlign:"center",
             }} component={"h4"}>24 properties</Typography>
             </Box>
   
            </Box>
            <Box
              sx={{
                flex: "2",
                // backgroundImage:"url(./assets/images/R4.jpg)",
                // backgroundPosition:"center",
                // backgroundSize:"cover",
                // backgroundRepeat:"no-repeat",
                minHeight:"300px",
                borderRadius:"20px",
                position:"relative",
                overflow:"hidden"
              }}
              className={"cities_box"}
              component={"a"}
              href="#"
            >
              <Box className={"city_img"} sx={{
                  position:"absolute",
                  bottom:"0",
                  left:"0",
                  height:"100%",
                  width:"100%",
                  objectFit:"cover"
              }} component={"img"} src="./assets/images/R1.jpg"/>
             <Box  sx={{
               position:"absolute",
               bottom:"0",
               left:"0",
               height:"100%",
               width:"100%",
               background:"rgb(0,0,0,30%)",
               opacity:"0"
              }} className={"overlay"}></Box>
             <Box sx={{
position:"absolute",
bottom:"-50%",
left:"0",
height:"30%",
width:"100%",

             }} 
             className={"cities_content_box"}>
             <Typography sx={{
fontSize:"28px",
color:theme.palette.primary.white,
fontWeight:"500",
lineHeight:"35px",
textAlign:"center",
             }}
              component={"h3"}>Miami</Typography>
             <Typography sx={{
fontSize:"18px",
color:theme.palette.primary.white,
fontWeight:"500",
lineHeight:"35px",
textAlign:"center",
             }} component={"h4"}>24 properties</Typography>
             </Box>
   
            </Box>

          </Box>
        </Container>
      </Box>
      <Box>
        <Footer />
      </Box>
    </>
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
  bottom: "-10px",
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
  width: "100%",
}));
const Listings = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  position: "absolute",
  bottom: "-45%",
  left: "auto",
  right: "50px",
  opacity: "0",
  transition: "0.3s ease-in-out",
}));
const FlexBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  transition: "0.3s ease-in-out",
}));

export default Home;
