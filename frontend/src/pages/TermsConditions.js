import {
  Box,
  Button,
  Container,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BreadcrumbsBanner from "../components/BreadcrumbsBanner";
import theme from "../Theme";
import axios from "axios";
import { GET_TERMS_CONDITIONS } from "../common/urls";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TermsConditions = () => {
  const navigate = useNavigate();
  const [termsconditions, setTermsConditions] = useState([]);
  const _getTermsConditions = async () => {
    await axios
      .get(GET_TERMS_CONDITIONS)
      .then((response) => {
        // console.log("response", response);
        if (response.data.status) {
          setTermsConditions(response.data.data[0]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    _getTermsConditions();
  }, []);

  return (
    <>
      <Box>
        <Header />
      </Box>
      {/* <BreadcrumbsBanner /> */}
      <BreadcrumbsBanner title="Terms and Conditions" />

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
          <Box sx={{
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
          }}>
            <Box
              sx={{
                margin: "30px 0px",
              }}
            >
              <Typography
                variant="h4"
                component={"h4"}
                sx={{
                  fontSize: "22px",
                  fontWeight: "600",
                  lineHeight: "32px",
                  margin: "0px 0px 30px",
                  fontFamily: theme.palette.primary.Roboto,
                  color: theme.palette.primary.logoColor,
                }}
              >
                {termsconditions && termsconditions.title}
              </Typography>
              <Box
                paddingLeft={{ xs: "0px", md: "15px" }}
                paddingRight={{ xs: "0px", md: "15px" }}
              >
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
                {termsconditions && termsconditions.description}
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
                  Nullam this is a link nibh facilisis, at malesuada orci congue. Nullam tempus sollicitudin cursus. Nulla elit mauris, volutpat eu varius malesuada, pulvinar eu ligula. Ut et adipiscing erat. Curabitur adipiscing erat vel libero tempus congue. Nam pharetra interdum vestibulum. Aenean gravida mi non aliquet porttitor. Praesent dapibus, nisi a faucibus tincidunt, quam dolor condimentum metus, in convallis libero ligula ut
                </Typography> */}
              </Box>
              {/* <Typography
                variant="h4"
                component={"h4"}
                sx={{
                  fontSize: "22px",
                  fontWeight: "600",
                  lineHeight: "32px",
                  margin: "0px 0px 30px",
                  fontFamily: theme.palette.primary.Roboto,
                  color: theme.palette.primary.logoColor,
                }}
              >
                Our Terms
              </Typography>
              <Box
                paddingLeft={{ xs: "0px", md: "15px" }}
                paddingRight={{ xs: "0px", md: "15px" }}
              >
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec non odio neque. Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec. Quisque bibendum orci ac nibh facilisis, at malesuada orci congue. Nullam tempus sollicitudin cursus. Ut et adipiscing erat. Curabitur this is a text link libero tempus congue
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
                  Duis mattis laoreet neque, et ornare neque sollicitudin at. Proin sagittis dolor sed mi elementum pretium. Donec et justo ante. Vivamus egestas sodales est, eu rhoncus urna semper eu. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer tristique elit lobortis purus bibendum, quis dictum metus mattis. Phasellus posuere felis sed eros porttitor mattis. Curabitur massa magna, tempor in blandit id, porta in ligula. Aliquam laoreet nisl massa, at interdum mauris sollicitudin et.
                </Typography>
              </Box> */}
            </Box>
          </Box>

        </Container>
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
            <Box sx={{
              display: {
                xs: "grid",
                sm: "flex",
                md: "flex",
                lg: "flex",
                xl: "flex",
              },
              justifyContent: "space-between",
              gap: "15px"
            }}>
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
              <Button className="customBtnStyle"
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
                  }
                }} variant="contained" onClick={()=>{
                  navigate("/AgentRegister")
                }}>Register Now</Button>
            </Box>



          </Container>
        </Box>
      </Box>
      <Footer />
    </>
  )
}
export default TermsConditions
