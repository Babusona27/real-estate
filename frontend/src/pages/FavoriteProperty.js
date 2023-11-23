import { Box, Container, Divider, IconButton, Tooltip, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BreadcrumbsBanner from "../components/BreadcrumbsBanner";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import theme from "../Theme";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setFevoriteProperty } from "../redux/reducers/FavoritePropertyReducer";

const FavoriteProperty = () => {
  const favoriteProperty = useSelector((state) => state.FavoritePropertyReducer.value);
  console.log('favoriteProperty', favoriteProperty);
  return (
    <>
      <Box>
        <Header />
      </Box>
      {/* <BreadcrumbsBanner /> */}
      <BreadcrumbsBanner title="My Favorite Property" />

      <Box
        className="wishlist_sec"
        component={"section"}
        sx={{
          padding: "50px 0px",
          backgroundColor: theme.palette.primary.white,
        }}
      >
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
              padding: "30px",
              background: theme.palette.primary.white,
              border: "1px solid #ebebeb",
              borderRadius: "8px",
              marginBottom: "25px",
              transition: "all 0.4s ease-out",
              marginTop: {
                xs: "30px",
                lg: "0px",
              },
              "&:hover": {
                boxShadow: "0 4px 12px rgba(0,0,0,.1)",
              },
            }}
          >
            <Box sx={{
              display: "grid",
              gap: "20px"
            }}>
              {/* Wishlist */}
              {favoriteProperty.map((item, key) => {
                <Box
                  sx={{
                    display: { xs: "flex", sm: "flex", md: "flex", lg: "flex" },
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: {
                      xs: "column",
                      sm: "column",
                      md: "row",
                      lg: "row",
                      gap: "20px"

                    }
                  }}
                >
                  <Box
                    sx={{
                      display: { xs: "flex", sm: "flex", md: "flex", lg: "flex" },
                      justifyContent: "center",
                      alignItems: "center",
                      gap: {
                        xs: "10px",
                        sm: "10px",
                        md: "30px",
                        lg: "30px",
                      },
                      flexDirection: {
                        xs: "column",
                        sm: "column",
                        md: "row",
                        lg: "row",

                      }
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                      }}
                    >
                      <Box
                        sx={{
                          height: "150px",
                          width: {
                            xs: "100%",
                            sm: "100%",
                            md: "200px",
                            lg: "200px"
                          },
                          borderRadius: "10px",
                          objectFit: "cover",
                        }}
                        component={"img"}
                        src={process.env.PUBLIC_URL + "/assets/images/R1.jpg"}
                      />

                    </Box>
                    <Box
                      sx={{
                        display: { xs: "grid", sm: "Grid", md: "Grid", lg: "Grid" },
                        gap: "5px",
                        textAlign: { xs: "center", sm: "center", md: "left", lg: "left" }
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
                          margin: "0px",
                          width: "300px",
                          color: theme.palette.primary.logoColor,
                        }}
                        gutterBottom
                        variant="h5"
                        component="h3"
                      >
                        Luxury Family Home
                      </Typography>
                      <Box
                        sx={{
                          display: { xs: "block", sm: "flex", md: "flex", lg: "flex" },
                          alignItems: "center",
                          gap: "5px",
                          textAlign: { xs: "center", sm: "center", md: "left", lg: "left" }

                        }}
                      >
                        <RoomOutlinedIcon
                          sx={{
                            fontSize: "18px",
                            color: theme.palette.primary.dark,
                            textAlign: { xs: "center", sm: "center", md: "left", lg: "left" }
                          }}
                        />
                        <Typography
                          sx={{
                            color: theme.palette.primary.dark,
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
                          1421 San Pedro St, Los Angeles, CA 900015
                        </Typography>

                      </Box>
                      <Typography
                        sx={{
                          padding: "5px 10px",
                          borderRadius: "3px",
                          fontSize: "12px",
                          fontWeight: "400",
                          lineHeight: "1.15",
                          color: theme.palette.primary.white,
                          backgroundColor: theme.palette.primary.logoColor,
                          display: "block",
                          width: "fit-content"
                        }}
                        component={"p"}
                      >
                        Apartment for Rent
                      </Typography>
                    </Box>
                  </Box>
                  <Typography
                    sx={{
                      color: theme.palette.primary.logoColor,
                      fontSize: "20px",
                      fontWeight: "500",
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
                    $13000/mo
                  </Typography>
                  <Box
                    sx={{
                      display: { xs: "flex", sm: "grid", md: "grid", lg: "grid" },
                      gap: "10px",

                    }}
                  >
                    <Tooltip title="Add to Cart" placement="top">
                      <IconButton
                        sx={{
                          background: theme.palette.primary.Green,
                          borderRadius: "8px",
                          color: theme.palette.primary.white,
                          "&:hover": {
                            background: theme.palette.primary.logoColor,
                            color: theme.palette.primary.white,
                          },
                        }}
                      >
                        <AddShoppingCartOutlinedIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <IconButton
                        sx={{
                          background: "#ff383e",
                          borderRadius: "8px",
                          color: theme.palette.primary.white,
                          "&:hover": {
                            background: "#ff383e",
                            color: theme.palette.primary.white,
                          },
                        }}>
                        <DeleteOutlinedIcon />

                      </IconButton>
                    </Tooltip>
                  </Box>
                </Box>
              })}

              {/* Wishlist */}
              <Divider />
              {/* Wishlist */}
              {/* <Box
                sx={{
                  display: { xs: "flex", sm: "flex", md: "flex", lg: "flex" },
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: {
                    xs: "column",
                    sm: "column",
                    md: "row",
                    lg: "row",
                    gap: "20px"

                  }
                }}
              >
                <Box
                  sx={{
                    display: { xs: "flex", sm: "flex", md: "flex", lg: "flex" },
                    justifyContent: "center",
                    alignItems: "center",
                    gap: {
                      xs: "10px",
                      sm: "10px",
                      md: "30px",
                      lg: "30px",
                    },
                    flexDirection: {
                      xs: "column",
                      sm: "column",
                      md: "row",
                      lg: "row",

                    }
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                    }}
                  >
                    <Box
                      sx={{
                        height: "150px",
                        width: {
                          xs: "100%",
                          sm: "100%",
                          md: "200px",
                          lg: "200px"
                        },
                        borderRadius: "10px",
                        objectFit: "cover",
                      }}
                      component={"img"}
                      src={process.env.PUBLIC_URL + "/assets/images/R1.jpg"}
                    />

                  </Box>
                  <Box
                    sx={{
                      display: { xs: "grid", sm: "Grid", md: "Grid", lg: "Grid" },
                      gap: "5px",
                      textAlign: { xs: "center", sm: "center", md: "left", lg: "left" }
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
                        margin: "0px",
                        width: "300px",
                        color: theme.palette.primary.logoColor,
                      }}
                      gutterBottom
                      variant="h5"
                      component="h3"
                    >
                      Luxury Family Home
                    </Typography>
                    <Box
                      sx={{
                        display: { xs: "block", sm: "flex", md: "flex", lg: "flex" },
                        alignItems: "center",
                        gap: "5px",
                        textAlign: { xs: "center", sm: "center", md: "left", lg: "left" }

                      }}
                    >
                      <RoomOutlinedIcon
                        sx={{
                          fontSize: "18px",
                          color: theme.palette.primary.dark,
                          textAlign: { xs: "center", sm: "center", md: "left", lg: "left" }
                        }}
                      />
                      <Typography
                        sx={{
                          color: theme.palette.primary.dark,
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
                        1421 San Pedro St, Los Angeles, CA 900015
                      </Typography>

                    </Box>
                    <Typography
                      sx={{
                        padding: "5px 10px",
                        borderRadius: "3px",
                        fontSize: "12px",
                        fontWeight: "400",
                        lineHeight: "1.15",
                        color: theme.palette.primary.white,
                        backgroundColor: theme.palette.primary.logoColor,
                        display: "block",
                        width: "fit-content"
                      }}
                      component={"p"}
                    >
                      Apartment for Rent
                    </Typography>
                  </Box>
                </Box>
                <Typography
                  sx={{
                    color: theme.palette.primary.logoColor,
                    fontSize: "20px",
                    fontWeight: "500",
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
                  $13000/mo
                </Typography>
                <Box
                  sx={{
                    display: { xs: "flex", sm: "grid", md: "grid", lg: "grid" },
                    gap: "10px",

                  }}
                >
                  <Tooltip title="Add to Cart" placement="top">
                    <IconButton
                      sx={{
                        background: theme.palette.primary.Green,
                        borderRadius: "8px",
                        color: theme.palette.primary.white,
                        "&:hover": {
                          background: theme.palette.primary.logoColor,
                          color: theme.palette.primary.white,
                        },
                      }}
                    >
                      <AddShoppingCartOutlinedIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete">
                    <IconButton
                      sx={{
                        background: "#ff383e",
                        borderRadius: "8px",
                        color: theme.palette.primary.white,
                        "&:hover": {
                          background: "#ff383e",
                          color: theme.palette.primary.white,
                        },
                      }}>
                      <DeleteOutlinedIcon />

                    </IconButton>
                  </Tooltip>
                </Box>
              </Box> */}
              {/* Wishlist */}
            </Box>

          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
};
export default FavoriteProperty;
