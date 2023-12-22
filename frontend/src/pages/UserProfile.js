import {
  Box,
  Container,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";

import Header from "../components/Header";
import Footer from "../components/Footer";
import theme from "../Theme";
import BreadcrumbsBanner from "../components/BreadcrumbsBanner";
import MyProperty from "../components/MyProperty";
import { Link, useNavigate } from "react-router-dom";
import {
  GET_MY_PROPERTIES_API,
} from "../common/urls";
import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../redux/reducers/UserReducer";

const UserProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.UserReducer.value);
  const [sellerProperty, setSellerProperty] = useState([]);

  const getSellerProperty = () => {
    // console.log("userData", userData);
    if (userData) {
      axios
        .get(GET_MY_PROPERTIES_API + `?sellerId=${userData.userId}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `${userData.token}`,
            },
          })
        .then((res) => {
          // console.log("res", res);
          if (res.status === 200) {
            setSellerProperty(res.data.data);
            // console.log("res.data.data", res.data.data);
            // dispatch(setSellerPropertyList(res.data.data));  

          }
        })
        .catch((err) => {
          console.log("err", err);
        });
    } else {
      navigate("/Login");
    }

  }



  useEffect(() => {
    getSellerProperty();
  }, []);
  return (
    <>
      <Box>
        <Header />
      </Box>
      <BreadcrumbsBanner title="User Profile" />
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
            <Box
              sx={{
                display: { xs: "block", sm: "block", md: "block", lg: "flex" },
                justifyContent: "space-between",
                margin: "30px 0px",
              }}
            >
              <Box
                flex={0.8}
                paddingLeft={{ xs: "0px", md: "15px" }}
                paddingRight={{ xs: "0px", md: "15px" }}
              >
                <Box
                  sx={{
                    padding: "20px",
                    background: theme.palette.primary.white,
                    border: "1px solid #ebebeb",
                    borderRadius: "8px",
                    marginBottom: "25px",
                    marginTop: {
                      xs: "30px",
                      lg: "0px",
                    },
                    "&:hover": {
                      boxShadow: "0 4px 12px rgba(0,0,0,.1)",
                    },
                  }}
                >
                  <List
                    sx={{
                      gap: "10px",
                      display: "grid",
                    }}
                  >
                    <Link to="/PersonalPropertyList">
                      <ListItem disablePadding>
                        <ListItemButton
                          className="listbtn btn_list_active"
                          sx={{
                            background: theme.palette.primary.LightVlue2,
                            color: theme.palette.primary.lightGrey,
                            transition: "all 0.3s ease-out",
                            borderRadius: "8px",
                            "&:hover": {
                              background: theme.palette.primary.logoColor,
                              color: theme.palette.primary.white,
                              boxShadow: "inset 0px 0px 12px rgb(0 0 0 / 40%)",
                            },
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: "18px",
                              fontWeight: "500",
                              transition: "all 0.3s ease-out",
                            }}
                            component={"p"}
                          >
                            Property
                          </Typography>
                        </ListItemButton>
                      </ListItem>
                    </Link>

                    <ListItem disablePadding>
                      <ListItemButton
                        className="listbtn"
                        sx={{
                          background: theme.palette.primary.LightVlue2,
                          color: theme.palette.primary.lightGrey,
                          transition: "all 0.3s ease-out",
                          borderRadius: "8px",
                          "&:hover": {
                            background: theme.palette.primary.logoColor,
                            color: theme.palette.primary.white,
                            boxShadow: "inset 0px 0px 12px rgb(0 0 0 / 40%)",
                          },
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "18px",
                            fontWeight: "500",
                            transition: "all 0.3s ease-out",
                          }}
                          component={"p"}
                        >
                          Message
                        </Typography>
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton
                        className="listbtn"
                        sx={{
                          background: theme.palette.primary.LightVlue2,
                          color: theme.palette.primary.lightGrey,
                          transition: "all 0.3s ease-out",
                          borderRadius: "8px",
                          "&:hover": {
                            background: theme.palette.primary.logoColor,
                            color: theme.palette.primary.white,
                            boxShadow: "inset 0px 0px 12px rgb(0 0 0 / 40%)",
                          },
                        }}

                        onClick={() => {
                          dispatch(logOut());
                          navigate("/Login");
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "18px",
                            fontWeight: "500",
                            transition: "all 0.3s ease-out",
                          }}
                          component={"p"}
                        >
                          Logout
                        </Typography>
                      </ListItemButton>
                    </ListItem>
                  </List>
                </Box>
              </Box>
              <Box
                flex={2}
                paddingLeft={{ xs: "0px", md: "15px" }}
                paddingRight={{ xs: "0px", md: "15px" }}
              >
                <MyProperty sellerProperty={sellerProperty} />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
};
export default UserProfile;
