import styled from "@emotion/styled";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Popover,
  Popper,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import React, { useEffect, useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

import AddIcon from "@mui/icons-material/Add";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import CloseIcon from "@mui/icons-material/Close";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../redux/reducers/UserReducer";
import theme from "../Theme";
import { IMAGE_BASE_URL } from "../common/urls";
const Navbar = () => {
  // user box popup
  const [isBoxVisible, setIsBoxVisible] = useState(false);
  const handleButtonClick = () => {
    setIsBoxVisible(!isBoxVisible);
  };

  const handleBodyClick = (event) => {
    // Check if the click is outside the box and the button
    if (
      !event.target.closest(".custom-box") &&
      !event.target.closest(".toggle-button")
    ) {
      setIsBoxVisible(false);
    }
  };

  useEffect(() => {
    // Add event listener to the body when the component mounts
    document.body.addEventListener("click", handleBodyClick);

    // Remove event listener when the component unmounts
    return () => {
      document.body.removeEventListener("click", handleBodyClick);
    };
  }, []);

  // user box popup

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector(state => state.UserReducer.value);
  const favoriteProperty = useSelector(state => state.FavoritePropertyReducer.value);
  const [isNavOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const openNavMenu = document.querySelector(".open-nav-menu");
    const closeNavMenu = document.querySelector(".close-nav-menu");
    const navMenu = document.querySelector(".nav-menu");
    const menuOverlay = document.querySelector(".menu-overlay");

    function toggleNav() {
      // Use the setNavOpen function to toggle the state
      setNavOpen(!isNavOpen);
    }

    openNavMenu.addEventListener("click", toggleNav);
    closeNavMenu.addEventListener("click", toggleNav);
    menuOverlay.addEventListener("click", toggleNav);

    // Rest of your JavaScript code

    // Don't forget to remove event listeners when the component unmounts
    return () => {
      openNavMenu.removeEventListener("click", toggleNav);
      closeNavMenu.removeEventListener("click", toggleNav);
      menuOverlay.removeEventListener("click", toggleNav);
    };
  }, [isNavOpen]);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };




  }, []);

  const theme = useTheme();
  return (
    <Box>
      <AppBar
        className={` ${isScrolled ? "stickyHeader" : ""}`}
        sx={{
          position: "absolute",
          backgroundColor: theme.palette.primary.LightWhite,
          height: "88px",
          boxShadow: "0 5px 10px 0 rgb(87 101 128 / 12%)",
        }}
      >
        <Container maxWidth="xl" sx={{ height: "100%" }}>
          <Toolbar
            component={"header"}
            disableGutters
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <Box
              sx={{
                width: { xs: "80px", sm: "100px", lg: "120px" },
                minWidth: { xs: "80px", sm: "100px", lg: "120px" },
              }}
            >
              <Box
                component={"img"}
                className="logo"
                src={process.env.PUBLIC_URL + "/assets/images/logo.gif"}
              />
            </Box>

            <Box sx={{ display: { xs: "flex", md: "none", lg: "flex" } }}>
              <div
                className={`menu-overlay ${isNavOpen ? "active" : ""}`}
              ></div>
              {/* <!-- navigation menu start --> */}
              <nav className={`nav-menu ${isNavOpen ? "open" : ""}`}>
                <div className="close-nav-menu">
                  <CloseIcon
                    sx={{
                      color: theme.palette.primary.white,
                    }}
                  />
                </div>
                <div className="my_menu">
                  <ul className="menu">
                    <li className="menu-item">
                      <Link to="/" className="nav-link">
                        home
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/aboutus" className="nav-link">
                        About Us
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/properties" className="nav-link">
                        Properties
                      </Link>
                    </li>

                    <li className="menu-item">
                      <Link to="/blog" className="nav-link">
                        Blog
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/contactus" className="nav-link">
                        Contact us
                      </Link>
                    </li>
                    <li className="menu-item">
                      {userData ? (
                        <Link
                          onClick={() => {
                            dispatch(logOut());
                            navigate("/login");
                          }}
                          className="nav-link"
                        >
                          Logout
                        </Link>
                      ) : (
                        <Link to="/login" className="nav-link">
                          Login
                        </Link>
                      )}
                    </li>
                  </ul>
                </div>
              </nav>
              {/* <!-- navigation menu end --> */}
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { xs: "13px", lg: "20px" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: { xs: "13px", lg: "20px" },
                }}
              >
                {/* <Box>
                 <Avatar alt="Remy Sharp" src={process.env.PUBLIC_URL+"/assets/images/avtar/avatar.png"} />
                 </Box> */}
                <Box
                  sx={{
                    position: "relative",
                  }}
                  className="toggle-button"
                  onClick={handleButtonClick}

                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer"
                    }}
                  >
                    {userData &&
                      <Avatar
                        alt="User Image"
                        src={userData && userData.user_image ? IMAGE_BASE_URL + userData.user_image : "./assets/images/avtar/avatar.png"}
                        // src="./assets/images/avtar/avatar.png"
                        sx={{ marginRight: 1 }}
                      />
                    }

                    <Typography sx={{
                      fontSize: "16px",
                      color: theme.palette.primary.logoColor,
                      lineHeight: "1.2",
                      fontWeight: "500",
                      display: {
                        xs: "none",
                        sm: "none",
                        md: "block",
                        lg: "block"
                      }
                    }} component={"p"}>{userData && userData.user_name}</Typography>
                  </Box>

                  <Box
                    className={`custom-box ${isBoxVisible ? "useractive" : ""}`}
                    sx={{
                      width: "200px",
                      padding: "20px",
                      height: "fit-content",
                      transition: "all 0.3s ease-in-out",
                      backgroundColor: theme.palette.primary.white,
                      display: "block",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      top: "0px !important",
                      left: "0px !important",
                      inset: "0px auto auto 0px",
                      transform: "translate(-100px, 20px)",
                      boxShadow: "0 0 50px 0 rgba(32,32,32,.15)",
                      borderRadius: "8px",
                      visibility: isBoxVisible ? "" : "hidden",
                      opacity: "0"
                    }}
                  >
                    <Box
                      sx={{
                        marginTop: "5px",
                        width: "auto",
                        borderRadius: "8px",
                        overflow: "hidden",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          marginBottom: "20px",
                        }}
                      >
                        <Avatar
                          alt="User Image"
                          // src={
                          //   process.env.PUBLIC_URL +
                          //   "/assets/images/avtar/avatar.png"
                          // }

                          src={userData && userData.user_image ? IMAGE_BASE_URL + userData.user_image : "./assets/images/avtar/avatar.png"}
                          sx={{ marginRight: 1 }}
                        />
                        <Box
                          sx={{
                            display: "grid",
                            gap: "5px",
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: "16px",
                              color: theme.palette.primary.logoColor,
                              lineHeight: "1.2",
                              fontWeight: "500",
                            }}
                            variant="subtitle1"
                          >
                            {/* {userData && userData.data.user_name} */}
                            {userData && userData.user_name}
                          </Typography>
                          {/* <Typography
                            sx={{
                              fontSize: "14px",
                              color: "#7e7e7e",
                              lineHeight: "1.2",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              WebkitLineClamp: "1",
                              WebkitBoxOrient: "vertical",
                              width: "150px",
                            }}
                            component={"p"}
                          >
                            surajbanerjee.websadroit@gmail.com
                          </Typography> */}
                        </Box>
                      </Box>
                      <Box
                        component={"ul"}
                        sx={{
                          padding: "0px",
                        }}
                      >
                        <Link to="/userprofile">
                          <MenuItem
                            sx={{
                              color: theme.palette.primary.dark,
                              transform: "translateX(0px)",
                              transition: "0.3s all",
                              "&:hover": {
                                color: theme.palette.primary.logoColor,
                                background: "transparent",
                                transform: "translateX(15px)"
                              },
                            }}
                          >
                            My Profile
                          </MenuItem>
                        </Link>
                        {/* <MenuItem
                          sx={{
                            color: theme.palette.primary.dark,
                            transform:"translateX(0px)",
                            transition:"0.3s all",
                            "&:hover": {
                              color: theme.palette.primary.logoColor,
                              background:"transparent",
                                transform:"translateX(15px)"
                            },
                          }}
                        >
                          My Package
                        </MenuItem> */}
                        <Link to="/favoriteproperty">
                          <MenuItem
                            sx={{
                              color: theme.palette.primary.dark,
                              transform: "translateX(0px)",
                              transition: "0.3s all",
                              "&:hover": {
                                color: theme.palette.primary.logoColor,
                                background: "transparent",
                                transform: "translateX(15px)"
                              },
                            }}
                          >
                            My Favorite Property
                          </MenuItem>
                        </Link>
                        {userData ? (
                          <Link
                            onClick={() => {
                              dispatch(logOut());
                              navigate("/login");
                            }}
                            className="nav-link"
                          >
                            <MenuItem
                              sx={{
                                color: theme.palette.primary.dark,
                                transform: "translateX(0px)",
                                transition: "0.3s all",
                                "&:hover": {
                                  color: theme.palette.primary.logoColor,
                                  background: "transparent",
                                  transform: "translateX(15px)"
                                },
                              }}
                            >
                              Logout
                            </MenuItem>
                          </Link>
                        ) : (
                          <MenuItem
                            sx={{
                              color: theme.palette.primary.dark,
                              transform: "translateX(0px)",
                              transition: "0.3s all",
                              "&:hover": {
                                color: theme.palette.primary.logoColor,
                                background: "transparent",
                                transform: "translateX(15px)"
                              },
                            }}
                          >
                            Login
                          </MenuItem>
                        )}

                      </Box>
                    </Box>
                  </Box>
                </Box>

                <Tooltip title="My Favorite Property">
                  <IconButton
                    sx={{
                      border: "1px solid #dceeea",
                      color: theme.palette.primary.Green,
                      p: "10px",
                      width: { xs: "30px", sm: "30px", lg: "46px" },
                      minWidth: { xs: "30px", sm: "30px", lg: "46px" },
                      minHeight: { xs: "30px", sm: "30px", lg: "46px" },
                      height: { xs: "30px", sm: "30px", lg: "46px" },
                      fontSize: { xs: "20px", lg: "30px" },
                    }}
                    onClick={() => {
                      { userData ? navigate('/favoriteproperty') : navigate('/login') }
                    }}>
                    <StyledBadge badgeContent={favoriteProperty && favoriteProperty.length} color="secondary">
                      {/* <StyledBadge badgeContent={4} color="secondary"> */}
                      <FavoriteBorderIcon
                        sx={{
                          fontSize: { xs: "20px", lg: "30px" },
                        }}
                      />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
                <Link to="/nopropertiesadd">
                  <Button
                    sx={{
                      borderRadius: "30px",
                      display: { xs: "none", sm: "none", lg: "flex" },
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "0px",
                      padding: "0px",
                      color: "#fff",
                      overflow: "hidden",
                      height: "45px",
                      backgroundColor: theme.palette.primary.logoColor,
                      transition: "background-color 0.3s",
                      "&:hover": {
                        backgroundColor: theme.palette.primary.logoColor,
                      },
                    }}
                    variant="contained"
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        height: "100%",
                        width: "30px",
                        paddingLeft: "10px",
                        backgroundColor: "#00000026",
                        color: theme.palette.primary.white,
                      }}
                    >
                      <AddIcon />
                    </Box>

                    <Typography
                      sx={{
                        padding: "0px 22px 0px 15px",
                        color: theme.palette.primary.white,
                        fontSize: "15px",
                        fontWeight: "500",
                        lineHeight: "42px",
                        textTransform: "capitalize",
                      }}
                    >
                      List Your Property
                    </Typography>
                  </Button>
                </Link>
                <Button
                  sx={{
                    borderRadius: "30px",
                    display: { xs: "flex", sm: "flex", lg: "none" },
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid #dceeea",
                    color: theme.palette.primary.white,
                    p: "10px",
                    background: theme.palette.primary.logoColor,
                    transition: "background-color 0.3s",
                    boxShadow: "none",
                    width: "45px",
                    minWidth: "45px",
                    minHeight: "45px",
                    height: "45px",
                  }}
                  variant="contained"
                >
                  <AddCircleOutlinedIcon
                    sx={{
                      fontSize: { xs: "20px" },
                    }}
                  />
                </Button>
              </Box>

              <IconButton
                className="open-nav-menu"
                sx={{ display: { xs: "flex", md: "none" }, padding: "0px" }}
                color="#000"
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

// ==================================
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: -8,
    background: theme.palette.primary.logoColor,
    padding: "0 4px",
    color: theme.palette.primary.white,
  },
}));
const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

export default Navbar;
