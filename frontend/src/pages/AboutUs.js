import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BreadcrumbsBanner from "../components/BreadcrumbsBanner";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import { GET_ABOUT_US } from "../common/urls";
import theme from "../Theme";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const AboutUs = () => { 
  const [aboutUs, setAboutUs] = useState([]);
 

  const _getAboutUs = async () => {
    await axios
      .get(GET_ABOUT_US)
      .then((response) => {
        // console.log("response", response);
        if (response.data.status) {
          setAboutUs(response.data.data[0]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    _getAboutUs();
  }, []);
  
  return (
    <>
      <Box>
        <Header />
      </Box>
      {/* <BreadcrumbsBanner /> */}
      <BreadcrumbsBanner title="About Us" />
      <Box>
        <Container
          maxWidth="lg"
          sx={{
            height: "100%",
            padding: {
              xs: "40px 10px",
              sm: "40px 10px",
              md: "40px 10px",
              lg: "40px 0px",
            },
            background: theme.palette.primary.white,
          }}
        >
          <Box
            sx={{
              margin: "30px 0px",
            }}
          >
            <Typography
              variant="h4"
              component={"h2"}
              sx={{
                fontSize: "30px",
                fontWeight: "500",
                lineHeight: "32px",
                margin: "0px 0px 30px",
                textAlign: "center",
              }}
            >
              Our Mission

            </Typography>
            <Box
              sx={{
                display: { xs: "flex", sm: "flex", md: "flex", lg: "flex" },
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: {
                  xs: "column-reverse",
                  sm: "column-reverse",
                  md: "row",
                  lg: "row",

                }
              }}
            >
              <Box
                flex={2}
                paddingLeft={{ xs: "0px", md: "15px" }}
                paddingRight={{ xs: "0px", md: "15px" }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs: "18px",
                      xl: "20px",
                    },
                    color: theme.palette.primary.dark,
                    display: "block",
                    lineHeight: {
                      xs: "26px",
                      xl: "30px",
                    },
                    marginBottom: "25px",
                    fontWeight: "500",
                  }}
                  variant="h6"
                  component={"h3"}
                >
                  {aboutUs  && aboutUs.title}
                </Typography>
                <Typography
                  sx={{
                    color: theme.palette.primary.dark,
                    display: "block",
                    lineHeight: {
                      xs: "26px",
                      xl: "30px",
                    },
                    marginBottom: "25px",
                    fontFamily: theme.palette.primary.Roboto,
                  }}
                  variant="body2"
                  component={"p"}
                >
                  {aboutUs  && aboutUs.description}
                </Typography>
                {/* <Typography
                  sx={{
                    color: theme.palette.primary.dark,
                    display: "block",
                    lineHeight: {
                      xs: "26px",
                      xl: "30px",
                    },
                    marginBottom: "25px",
                    fontFamily: theme.palette.primary.Roboto,
                  }}
                  variant="body2"
                  component={"p"}
                >
                  Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Duis
                  Mollis Et Sem Sed Sollicitudin. Donec Non Odio Neque. Aliquam
                  Hendrerit Sollicitudin Purus, Quis Rutrum Mi Accumsan Nec.
                  Quisque Bibendum Orci Ac Nibh Facilisis, At Malesuada Orci
                  Congue. Nullam Tempus Sollicitudin Cursus.
                </Typography> */}
                <Box
                  component={"ul"}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "25px",
                    marginTop: "40px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "15px",
                    }}
                    component={"li"}
                  >
                    <PersonOutlineOutlinedIcon
                      sx={{
                        fontSize: "60px",
                        color: theme.palette.primary.logoColor,
                      }}
                    />
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "20px",
                          color: theme.palette.primary.logoColor,
                          display: "block",
                          fontWeight: "500",
                          lineHeight: "26px",
                          fontFamily: theme.palette.primary.Roboto,
                        }}
                        component={"h4"}
                      >
                        80,123
                      </Typography>
                      <Typography
                        sx={{
                          color: theme.palette.primary.grey,
                          display: "block",
                          lineHeight: {
                            xs: "26px",
                            xl: "30px",
                          },
                          fontFamily: theme.palette.primary.Roboto,
                        }}
                        variant="body2"
                        component={"p"}
                      >
                        {" "}
                        Customers to date
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "15px",
                    }}
                    component={"li"}
                  >
                    <HomeOutlinedIcon
                      sx={{
                        fontSize: "60px",
                        color: theme.palette.primary.logoColor,
                      }}
                    />
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "20px",
                          color: theme.palette.primary.logoColor,
                          display: "block",
                          fontWeight: "500",
                          lineHeight: "26px",
                          fontFamily: theme.palette.primary.Roboto,
                        }}
                        component={"h4"}
                      >
                        80,123
                      </Typography>
                      <Typography
                        sx={{
                          color: theme.palette.primary.grey,
                          display: "block",
                          lineHeight: {
                            xs: "26px",
                            xl: "30px",
                          },
                          fontFamily: theme.palette.primary.Roboto,
                        }}
                        variant="body2"
                        component={"p"}
                      >
                        Customers to date
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "15px",
                    }}
                    component={"li"}
                  >
                    <PaymentsOutlinedIcon
                      sx={{
                        fontSize: "60px",
                        color: theme.palette.primary.logoColor,
                      }}
                    />
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "20px",
                          color: theme.palette.primary.logoColor,
                          display: "block",
                          fontWeight: "500",
                          lineHeight: "26px",
                          fontFamily: theme.palette.primary.Roboto,
                        }}
                        component={"h4"}
                      >
                        80,123
                      </Typography>
                      <Typography
                        sx={{
                          color: theme.palette.primary.grey,
                          display: "block",
                          lineHeight: {
                            xs: "26px",
                            xl: "30px",
                          },
                          fontFamily: theme.palette.primary.Roboto,
                        }}
                        variant="body2"
                        component={"p"}
                      >
                        Customers to date
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box
                flex={1.5}
                paddingLeft={{ xs: "0px", md: "15px" }}
                paddingRight={{ xs: "0px", md: "15px" }}
              >
                <Box
                  sx={{
                    minHeight: {
                      xs: "250px",
                      sm: "250px",
                      md: "300px",
                      lg: "500px",
                      xl: "500px",
                    },
                    margin: {
                      xs: "30px 0px",
                      sm: "30px 0px",
                      lg: "0px",
                    },
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                  src={process.env.PUBLIC_URL+"/assets/images/R5.jpg"}
                  component={"img"}
                />
              </Box>
            </Box>
          </Box>
        </Container>
        {/* Why Choose Us */}
        <Box
          className="why_choose_us_section"
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
                    src={process.env.PUBLIC_URL+"/assets/images/trust.png"}
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
                    src={process.env.PUBLIC_URL+"/assets/images/home.png"}
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
                    src={process.env.PUBLIC_URL+"/assets/images/budget.png"}
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
      </Box>
      <Footer />
    </>
  );
};
export default AboutUs;
