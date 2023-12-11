import {
  Box,
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import Header from "../components/Header";
import Footer from "../components/Footer";
import theme from "../Theme";
import BreadcrumbsBanner from "../components/BreadcrumbsBanner";
import MyProperty from "../components/MyProperty";
import { Link } from "react-router-dom";

const UserProfile = () => {
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
                <MyProperty />
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
