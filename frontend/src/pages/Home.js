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
  TextField,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { setPropertyList } from "../redux/reducers/PropertyListReducer";
import { GET_PROPERTIES_API, GET_PROPERTIES_WITHOUT_AUTH_API, IMAGE_BASE_URL } from "../common/urls";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// const TabPanel = ({ children, value, index }) => (
//   <div className={`tab-panel ${value === index ? "active" : ""}`}>
//     {value === index && <Box padding={"20px 0px"}>{children}</Box>}
//   </div>
// );

const newSlider = {
  loop: false,
  autoplay: false,
  autoplayTimeout: 4000,
  nav: false,
  margin: 20,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
};

const Home = () => {
  const navigate = useNavigate();
  const propertyList = useSelector((state) => state.PropertyListReducer.value);
  const userData = useSelector(state => state.UserReducer.value);
  // console.log("propertyList", propertyList);
  const dispatch = useDispatch();
  const [propertyType, setPropertyType] = useState("");
  const [propertyName, setPropertyName] = useState("");
  // const [propertyNameList, setPropertyNameList] = useState(false);
  // const handleChangeProperType = (event) => {
  //   console.log("event.target.value", event.target.value);
  //   setPropertyType(event.target.value);
  // };
  // const handleChange2 = (event) => {
  //   setVal1(event.target.value);
  // };

  // ===============select box

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    //console.log("==>",newValue);
    // setPropertyType(newValue == 1 ? "rent" : "sale");
    setPropertyType(event.target.value);
  };
  const handleChange1 = (event) => {
    setPropertyName(event.target.value);
  };
  const changeRouteFromHome = () => {
    let search_params = "";
    if (propertyType !== "") {
      search_params = search_params + 'propertyType=' + propertyType;
    }
    if (propertyName !== "") {
      search_params = search_params + '&property_name=' + propertyName;
    }

    // console.log('search_params_property_left_bar', search_params);
    navigate('/properties?' + search_params);

  };
  useEffect(() => {
    /* get properties  */
    // const getProperties = async () => {
    //   await axios
    //     .get(GET_PROPERTIES_API)
    //     .then((res) => {
    //       if (res.data.status) {
    //         // console.log(res.data.data);
    //         dispatch(setPropertyList(res.data.data));
    //       }
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // };
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
            // setPropertyNameList(res.data.data)
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
    <>
      <Box>
        <Header />
      </Box>
      {/* banner section  */}
      <Box
        component={"div"}
        className="banner_sec"
        sx={{
          marginTop: "88px",
          background: "URL(./assets/images/heroBg.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "50%",
          minHeight: {
            xs: "130vh",
            sm: "50vh",
            md: "100vh",
            lg: "100vh",
            xl: "100vh",
          },
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
              width: {
                xs: "95%",
                sm: "95%",
                md: "75%",
                lg: "75%",
              },
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
              <Box sx={{
                display: "flex",
                gap: "20px",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "25px",
              }}>
                <Button
                  sx={{
                    width: "12%",
                    backgroundColor: theme.palette.primary.white,
                    color: theme.palette.primary.logoColor,
                    height: "40px",
                    "&:hover":
                    {
                      backgroundColor: theme.palette.primary.logoColor,
                      color: theme.palette.primary.white,
                    },
                  }}
                >Sale</Button>
                <Button
                  sx={{
                    width: "12%",
                    backgroundColor: theme.palette.primary.logoColor,
                    height: "40px",
                    color: theme.palette.primary.white,
                    "&:hover":
                    {
                      backgroundColor: "#00a376"
                    },
                  }}
                >Rent</Button>
              </Box>

              <Box
                className={"tab_cont"}
                sx={{
                  backgroundColor: theme.palette.primary.white,
                  padding: "20px 20px",
                  display: {
                    xs: "block",
                    sm: "flex",
                    md: "flex",
                    lg: "flex",
                  },
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
                  label="Enter Property Name"
                  variant="outlined"
                  value={propertyName}
                  onChange={handleChange1}
                  sx={{
                    marginBottom: {
                      xs: "20px",
                      sm: "0px",
                      md: "0px",
                      lg: "0px",
                      xl: "0px",
                    },
                  }}
                />
                <Box sx={{
                  width: "100%", marginBottom: {
                    xs: "20px",
                    sm: "0px",
                    md: "0px",
                    lg: "0px",
                    xl: "0px",
                  }
                }}>
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
                      value={propertyType}
                      label="Property Type"
                      onChange={handleChange}
                    >
                      <MenuItem value={''}>Property Type</MenuItem>
                      <MenuItem value={'sell'}>Sell</MenuItem>
                      <MenuItem value={'rent'}>Rent</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                {/* <TextField
                    className="form_input1"
                    fullWidth
                    id="outlined-basic"
                    label="Location"
                    variant="outlined"
                    onChange={(e) => {
                      setKeyword(e.target.value);
                    }}
                    sx={{
                      width: "100%",
                      marginBottom: {
                        xs: "20px",
                        sm: "0px",
                        md: "0px",
                        lg: "0px",
                        xl: "0px",
                      },
                    }}
                  /> */}

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
                  onClick={changeRouteFromHome}
                >
                  Search
                </Button>
              </Box>
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
          <Box>
            <OwlCarousel className="owl-theme" {...newSlider}>
              {/* need to be chenge property_items  */}
              {propertyList &&
                propertyList.map((item, key) => (
                  <div class="property_item">
                    {/* {console.log("item", item)} */}
                    {item.features && item.features ?
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
                                {/* <Span
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
                                </Span> */}
                              </Catagorys>
                              <CardMedia
                                component="img"
                                height="200"
                                image={item.images.length > 0 ? IMAGE_BASE_URL + item.images[0] : "./assets/images/R1.jpg"}
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
                                  {item.price}
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
                                        backgroundColor:
                                          theme.palette.primary.white,
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
                                        backgroundColor:
                                          theme.palette.primary.white,
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
                                        backgroundColor:
                                          theme.palette.primary.white,
                                        color: theme.palette.primary.logoColor,
                                      },
                                    }}
                                  >
                                    <SavedSearchIcon />
                                  </IconButton>
                                </Listings>
                              </BottomBar>
                              <Rent>{item.category}</Rent>
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
                                  {item.property_name}
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
                                      {item.bedroom}
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
                                      {item.bath}
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
                                      {item.sqft}
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
                                      src={process.env.PUBLIC_URL + "/assets/images/avatar.png"}
                                    />
                                    <Typography
                                      sx={{
                                        display: "-webkit-box",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        WebkitLineClamp: "1",
                                        WebkitBoxOrient: "vertical",
                                        fontFamily:
                                          "'Roboto', sans-serif !important",
                                        fontSize: "14px",
                                        fontWeight: "500",
                                        color: "#666666",
                                      }}
                                      variant="span"
                                    >
                                      Suraj
                                    </Typography>
                                  </UserBox>
                                  <Button
                                    className="customBtnStyle"
                                    sx={{
                                      fontFamily:
                                        "'Roboto', sans-serif !important",
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
                                    onClick={() => {
                                      window.location.href = "/ProductDetails/" + item.slug

                                    }}>
                                    Details
                                  </Button>
                                </FlexBox>
                              </Box>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </Box>
                      :
                      <></>
                    }

                  </div>
                ))}
            </OwlCarousel>
          </Box>
        </Container>
      </Box>
      {/* Find Properties in These Cities */}
      <Box
        className="find_properties_section"
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
              display: {
                xs: "flex",
                sm: "flex",
                md: "flex",
                lg: "flex",
                xl: "flex",
              },
              justifyContent: "space-between",
              alignItems: "center",
              gap: "30px",
              flexWrap: "wrap",
              padding: "15px 0px",
            }}
          >
            <Box
              sx={{
                flex: {
                  xs: "100%",
                  sm: "1",
                  md: "1",
                  lg: "1",
                  xl: "1",
                },
                minHeight: "300px",
                borderRadius: "20px",
                position: "relative",
                overflow: "hidden",
                "&:hover": {
                  boxShadow: "3px 5px 10px 7px rgb(19 19 28 / 13%)",
                },
              }}
              className={"cities_box"}
              component={"a"}
              href="#"
            >
              <Box
                className={"city_img"}
                sx={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                }}
                component={"img"}
                src={process.env.PUBLIC_URL + "/assets/images/R6.jpg"}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  height: "100%",
                  width: "100%",
                  background: "rgb(0,0,0,30%)",
                  opacity: "0",
                }}
                className={"overlay"}
              ></Box>
              <Box
                sx={{
                  position: "absolute",
                  bottom: "-50%",
                  left: "0",
                  height: "30%",
                  width: "100%",
                }}
                className={"cities_content_box"}
              >
                <Typography
                  sx={{
                    fontSize: "24px",
                    color: theme.palette.primary.white,
                    fontWeight: "500",
                    lineHeight: "30px",
                    textAlign: "center",
                  }}
                  component={"h3"}
                >
                  Miami
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    color: theme.palette.primary.white,
                    fontWeight: "500",
                    lineHeight: "35px",
                    textAlign: "center",
                  }}
                  component={"h4"}
                >
                  24 properties
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                flex: {
                  xs: "100%",
                  sm: "2",
                  md: "2",
                  lg: "2",
                  xl: "2",
                },
                minHeight: "300px",
                borderRadius: "20px",
                position: "relative",
                overflow: "hidden",
                "&:hover": {
                  boxShadow: "3px 5px 10px 7px rgb(19 19 28 / 13%)",
                },
              }}
              className={"cities_box"}
              component={"a"}
              href="#"
            >
              <Box
                className={"city_img"}
                sx={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                }}
                component={"img"}
                src={process.env.PUBLIC_URL + "/assets/images/R4.jpg"}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  height: "100%",
                  width: "100%",
                  background: "rgb(0,0,0,30%)",
                  opacity: "0",
                }}
                className={"overlay"}
              ></Box>
              <Box
                sx={{
                  position: "absolute",
                  bottom: "-50%",
                  left: "0",
                  height: "30%",
                  width: "100%",
                }}
                className={"cities_content_box"}
              >
                <Typography
                  sx={{
                    fontSize: "24px",
                    color: theme.palette.primary.white,
                    fontWeight: "500",
                    lineHeight: "30px",
                    textAlign: "center",
                  }}
                  component={"h3"}
                >
                  New York
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    color: theme.palette.primary.white,
                    fontWeight: "500",
                    lineHeight: "35px",
                    textAlign: "center",
                  }}
                  component={"h4"}
                >
                  48 properties
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              display: {
                xs: "flex",
                sm: "flex",
                md: "flex",
                lg: "flex",
                xl: "flex",
              },
              flexDirection: "row-reverse",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "30px",
              flexWrap: "wrap",
              padding: "15px 0px",
            }}
          >
            <Box
              sx={{
                flex: {
                  xs: "100%",
                  sm: "1",
                  md: "1",
                  lg: "1",
                  xl: "1",
                },
                minHeight: "300px",
                borderRadius: "20px",
                position: "relative",
                overflow: "hidden",
                "&:hover": {
                  boxShadow: "3px 5px 10px 7px rgb(19 19 28 / 13%)",
                },
              }}
              className={"cities_box"}
              component={"a"}
              href="#"
            >
              <Box
                className={"city_img"}
                sx={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                }}
                component={"img"}
                src={process.env.PUBLIC_URL + "/assets/images/R9.jpg"}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  height: "100%",
                  width: "100%",
                  background: "rgb(0,0,0,30%)",
                  opacity: "0",
                }}
                className={"overlay"}
              ></Box>
              <Box
                sx={{
                  position: "absolute",
                  bottom: "-50%",
                  left: "0",
                  height: "30%",
                  width: "100%",
                }}
                className={"cities_content_box"}
              >
                <Typography
                  sx={{
                    fontSize: "24px",
                    color: theme.palette.primary.white,
                    fontWeight: "500",
                    lineHeight: "30px",
                    textAlign: "center",
                  }}
                  component={"h3"}
                >
                  Florida
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    color: theme.palette.primary.white,
                    fontWeight: "500",
                    lineHeight: "35px",
                    textAlign: "center",
                  }}
                  component={"h4"}
                >
                  35 properties
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                flex: {
                  xs: "100%",
                  sm: "2",
                  md: "2",
                  lg: "2",
                  xl: "2",
                },
                minHeight: "300px",
                borderRadius: "20px",
                position: "relative",
                overflow: "hidden",
                "&:hover": {
                  boxShadow: "3px 5px 10px 7px rgb(19 19 28 / 13%)",
                },
              }}
              className={"cities_box"}
              component={"a"}
              href="#"
            >
              <Box
                className={"city_img"}
                sx={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                }}
                component={"img"}
                src={process.env.PUBLIC_URL + "/assets/images/R8.jpg"}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  height: "100%",
                  width: "100%",
                  background: "rgb(0,0,0,30%)",
                  opacity: "0",
                }}
                className={"overlay"}
              ></Box>
              <Box
                sx={{
                  position: "absolute",
                  bottom: "-50%",
                  left: "0",
                  height: "30%",
                  width: "100%",
                }}
                className={"cities_content_box"}
              >
                <Typography
                  sx={{
                    fontSize: "24px",
                    color: theme.palette.primary.white,
                    fontWeight: "500",
                    lineHeight: "30px",
                    textAlign: "center",
                  }}
                  component={"h3"}
                >
                  Los Angeles
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    color: theme.palette.primary.white,
                    fontWeight: "500",
                    lineHeight: "35px",
                    textAlign: "center",
                  }}
                  component={"h4"}
                >
                  18 properties
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      {/* Why Choose Us */}
      <Box
        className="why_choose_us_section"
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
              Why Choose Us
            </Typography>
            <Typography
              component={"p"}
              sx={{
                fontSize: "14px",
              }}
            >
              We provide full service at every step.
            </Typography>
          </Box>
          <Box
            sx={{
              display: {
                xs: "grid",
                sm: "flex",
                md: "flex",
                lg: "flex",
                xl: "flex",
              },
              justifyContent: "space-between",
              alignItems: "center",
              gap: "30px",
            }}
          >
            <Box
              className={"choose_box"}
              sx={{
                backgroundColor: theme.palette.primary.white,
                padding: "30px",
                borderRadius: "10px",
                transition: "all .3s ease",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "25px",
                minHeight: "250px",
                "&:hover": {
                  boxShadow: "0 0 50px 0 rgba(19,19,28,.12)",
                },
              }}
              flex={1}
            >
              <Box
                sx={{
                  height: "70px",
                  width: "70px",
                  borderRadius: "100%",
                  padding: "20px",
                  background: theme.palette.primary.LightGreen,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className={"choose_icon_box"}
              >
                <Box
                  className={"img_color"}
                  component={"img"}
                  src={process.env.PUBLIC_URL + "/assets/images/trust.png"}
                />
              </Box>
              <Box className={"box_details"}>
                <Typography
                  sx={{
                    fontSize: "24px",
                    fontWeight: "500",
                    lineHeight: "30px",
                    marginBottom: "25px",
                  }}
                  component={"h3"}
                >
                  Trusted By Thousands
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",

                    fontWeight: "400",
                    lineHeight: "20px",
                  }}
                  component={"p"}
                >
                  Aliquam dictum elit vitae mauris facilisis at dictum urna
                  dignissim donec vel lectus vel felis.
                </Typography>
              </Box>
            </Box>
            <Box
              className={"choose_box"}
              sx={{
                backgroundColor: theme.palette.primary.white,
                padding: "30px",
                borderRadius: "10px",
                transition: "all .3s ease",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "25px",
                minHeight: "250px",
                "&:hover": {
                  boxShadow: "0 0 50px 0 rgba(19,19,28,.12)",
                },
              }}
              flex={1}
            >
              <Box
                sx={{
                  height: "70px",
                  width: "70px",
                  borderRadius: "100%",
                  padding: "20px",
                  background: theme.palette.primary.LightGreen,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className={"choose_icon_box"}
              >
                <Box
                  className={"img_color"}
                  component={"img"}
                  src={process.env.PUBLIC_URL + "/assets/images/home.png"}
                />
              </Box>
              <Box className={"box_details"}>
                <Typography
                  sx={{
                    fontSize: "24px",
                    fontWeight: "500",
                    lineHeight: "30px",
                    marginBottom: "25px",
                  }}
                  component={"h3"}
                >
                  Wide Renge Of Properties
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",

                    fontWeight: "400",
                    lineHeight: "20px",
                  }}
                  component={"p"}
                >
                  Aliquam dictum elit vitae mauris facilisis at dictum urna
                  dignissim donec vel lectus vel felis.
                </Typography>
              </Box>
            </Box>
            <Box
              className={"choose_box"}
              sx={{
                backgroundColor: theme.palette.primary.white,
                padding: "30px",
                borderRadius: "10px",
                transition: "all .3s ease",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "25px",
                minHeight: "250px",
                "&:hover": {
                  boxShadow: "0 0 50px 0 rgba(19,19,28,.12)",
                },
              }}
              flex={1}
            >
              <Box
                sx={{
                  height: "70px",
                  width: "70px",
                  borderRadius: "100%",
                  padding: "20px",
                  background: theme.palette.primary.LightGreen,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className={"choose_icon_box"}
              >
                <Box
                  className={"img_color"}
                  component={"img"}
                  src={process.env.PUBLIC_URL + "/assets/images/budget.png"}
                />
              </Box>
              <Box className={"box_details"}>
                <Typography
                  sx={{
                    fontSize: "24px",
                    fontWeight: "500",
                    lineHeight: "30px",
                    marginBottom: "25px",
                  }}
                  component={"h3"}
                >
                  Financing Made Easy
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",

                    fontWeight: "400",
                    lineHeight: "20px",
                  }}
                  component={"p"}
                >
                  Aliquam dictum elit vitae mauris facilisis at dictum urna
                  dignissim donec vel lectus vel felis.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* our partner  */}
      <Box
        className="partner_section"
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
              Our Partners
            </Typography>
            <Typography
              component={"p"}
              sx={{
                fontSize: "14px",
              }}
            >
              We only work with the best companies around the globe
            </Typography>
          </Box>
          <Box
            sx={{
              display: {
                xs: "grid",
                sm: "flex",
                md: "flex",
                lg: "flex",
                xl: "flex",
              },
              justifyContent: "space-around",
              gap: "15px",
            }}
          >
            <Box
              sx={{
                height: {
                  xs: "130px",
                  sm: "100px",
                  md: "150px",
                  lg: "150px",
                  xl: "150px",
                },
                width: {
                  xs: "130px",
                  sm: "100px",
                  md: "150px",
                  lg: "150px",
                  xl: "150px",
                },
                objectFit: "contain",
                textAlign: "center",
              }}
              component={"img"}
              src={process.env.PUBLIC_URL + "/assets/images/logos/logo1.png"}
            />
            <Box
              sx={{
                height: {
                  xs: "130px",
                  sm: "100px",
                  md: "150px",
                  lg: "150px",
                  xl: "150px",
                },
                width: {
                  xs: "130px",
                  sm: "100px",
                  md: "150px",
                  lg: "150px",
                  xl: "150px",
                },
                objectFit: "contain",
                textAlign: "center",
              }}
              component={"img"}
              src={process.env.PUBLIC_URL + "/assets/images/logos/logo2.png"}
            />
            <Box
              sx={{
                height: {
                  xs: "130px",
                  sm: "100px",
                  md: "150px",
                  lg: "150px",
                  xl: "150px",
                },
                width: {
                  xs: "130px",
                  sm: "100px",
                  md: "150px",
                  lg: "150px",
                  xl: "150px",
                },
                objectFit: "contain",
                textAlign: "center",
              }}
              component={"img"}
              src={process.env.PUBLIC_URL + "/assets/images/logos/logo5.png"}
            />
            <Box
              sx={{
                height: {
                  xs: "130px",
                  sm: "100px",
                  md: "150px",
                  lg: "150px",
                  xl: "150px",
                },
                width: {
                  xs: "130px",
                  sm: "100px",
                  md: "150px",
                  lg: "150px",
                  xl: "150px",
                },
                objectFit: "contain",
                textAlign: "center",
              }}
              component={"img"}
              src={process.env.PUBLIC_URL + "/assets/images/logos/logo2.png"}
            />
            <Box
              sx={{
                height: {
                  xs: "130px",
                  sm: "100px",
                  md: "150px",
                  lg: "150px",
                  xl: "150px",
                },
                width: {
                  xs: "130px",
                  sm: "100px",
                  md: "150px",
                  lg: "150px",
                  xl: "150px",
                },
                objectFit: "contain",
                textAlign: "center",
              }}
              component={"img"}
              src={process.env.PUBLIC_URL + "/assets/images/logos/logo1.png"}
            />
            <Box
              sx={{
                height: {
                  xs: "130px",
                  sm: "100px",
                  md: "150px",
                  lg: "150px",
                  xl: "150px",
                },
                width: {
                  xs: "130px",
                  sm: "100px",
                  md: "150px",
                  lg: "150px",
                  xl: "150px",
                },
                objectFit: "contain",
                textAlign: "center",
              }}
              component={"img"}
              src={process.env.PUBLIC_URL + "/assets/images/logos/logo5.png"}
            />
          </Box>
        </Container>
      </Box>
      {/* Partner section  */}
      <Box
        className="partner_section"
        component={"section"}
        sx={{
          padding: "50px 0px",
          backgroundColor: theme.palette.primary.Green,
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
            sx={{
              display: {
                xs: "grid",
                sm: "flex",
                md: "flex",
                lg: "flex",
                xl: "flex",
              },
              justifyContent: "space-between",
              gap: "15px",
            }}
          >
            <Box
              className={"heading"}
              sx={{
                textAlign: "left",
              }}
            >
              <Typography
                variant="h4"
                component={"h2"}
                sx={{
                  fontSize: "30px",
                  fontWeight: "500",
                  lineHeight: "32px",
                  marginBottom: "10px",
                  color: theme.palette.primary.white,
                }}
              >
                Become a Real Estate Agent
              </Typography>
              <Typography
                component={"p"}
                sx={{
                  fontSize: "14px",
                  color: theme.palette.primary.white,
                }}
              >
                We only work with the best companies around the globe
              </Typography>
            </Box>
            <Button
              className="customBtnStyle"
              sx={{
                fontFamily: "'Roboto', sans-serif !important",
                backgroundColor: "#dceeea",
                color: theme.palette.primary.logoColor,
                padding: "8px 22px",
                fontSize: "18px",
                minHeight: "50px",
                height: "50px",
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
                },
              }}
              variant="contained"
            >
              Register Now
            </Button>
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
  justifyContent: "flex-end",
  alignItems: "center",
  gap: "10px",
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
