import { Avatar, Box, Button, IconButton, List, TextField, Typography } from "@mui/material";
import React from "react";
import theme from "../Theme";
import styled from "@emotion/styled";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import { GET_CONTACTUS_DETAILS } from "../common/urls";
import axios from "axios";
import { useEffect, useState } from "react";

const PropertyDetailsRightbar = () => {
  const [contactUsDetails, setContactUsDetails] = useState([]);
  const _getContactUsDetails = async () => {
    await axios
      .get(GET_CONTACTUS_DETAILS)
      .then((response) => {
        // console.log("response_contact", response);
        if (response.data.status) {
          setContactUsDetails(response.data.data[0]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    _getContactUsDetails()
  }, []);
  return (
    <Box
      flex={1}
      paddingLeft={{ xs: "0px", md: "15px" }}
      paddingRight={{ xs: "0px", md: "15px" }}

    >
      <Box sx={{

      }}>
        <Box
          sx={{
            padding: "25px 30px 30px",
            background: theme.palette.primary.white,
            boxShadow: "0 4px 18px 0 rgba(194, 200, 213, 0.3)",
            borderRadius: "6px",
            marginBottom: "30px",
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
            Get in touch with us
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "10px",
              marginBottom: "25px"
            }}
          >
            <Avatar
              className="getInTouch_avtar"
              sx={{
                height: "100px",
                width: "100px",
              }}
              alt="Remy Sharp"
              src="./assets/images/avtar/avatar6.png"
            />
            <Box className="rightbar" component={"div"}>
              <Typography
                sx={{
                  fontSize: "20px",
                  color: "#212121",
                  lineHeight: "30px",
                  marginBottom: "25px",
                  fontWeight: "500",
                }}
                variant="h6"
              >
                Carine Margossian
              </Typography>
              <ContactBox sx={{
                display: "grid",
                gap: "8px",
                alignItems: "center",
                padding: "0px",
              }}
              >
                <List
                  sx={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                    padding: "0px",
                  }}
                >
                  <IconButton
                    sx={{
                      backgroundColor: theme.palette.primary.LightVlue2,
                      color: theme.palette.primary.logoColor,
                      width: "32px",
                      height: "32px",
                      borderRadius: "8px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <LocalPhoneIcon />
                  </IconButton>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: "500",
                      color: theme.palette.primary.lightGrey,
                    }}
                    variant="span"
                    component="h3"
                  >
                   {contactUsDetails && contactUsDetails.phone}
                  </Typography>
                </List>
                <List
                  sx={{
                    display: "flex",
                    gap: "15px",
                    alignItems: "center",
                    padding: "0px",
                  }}
                >
                  <IconButton
                    sx={{
                      backgroundColor: theme.palette.primary.LightVlue2,
                      color: theme.palette.primary.logoColor,
                      width: "32px",
                      height: "32px",
                      borderRadius: "8px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <EmailIcon />
                  </IconButton>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: "500",
                      color: theme.palette.primary.lightGrey,
                    }}
                    variant="span"
                    component="h3"
                  >
                    {contactUsDetails && contactUsDetails.email}
                  </Typography>
                </List>
              </ContactBox>
            </Box>
          </Box>
          <Button className="customBtnStyle new_btn"
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
                backgroundColor: theme.palette.primary.logoColor,
                color: theme.palette.primary.white,
                boxShadow: "none",
              }
            }} variant="contained">Visit Website</Button>
          <Box sx={{
            display: "grid",
            gap: "25px",
            margin: "25px 0px"
          }} component={"form"}>
            <TextField fullwidth="true" id="outlined-basic" required label="Name" variant="outlined" />
            <TextField fullwidth="true" id="outlined-basic" required label="Email" variant="outlined" />
            <TextField fullwidth="true" id="outlined-basic" required label="Phone" variant="outlined" />
            <TextField fullwidth="true" multiline rows={4} required id="outlined-basic" label="Massage" variant="outlined" />
            <Button sx={{
              width: "100%",
              backgroundColor: theme.palette.primary.logoColor,
              height: "45px",
              fontSize: "14px",
              fontWeight: "600",
              lineHeight: "1.2px",
              boxShadow: "0 7px 18px 0 rgba(29, 142, 162, 0.32)",
              color: theme.palette.primary.white,
              "&:hover":
              {
                backgroundColor: "#00a376"
              },
            }}>Send Message</Button>
          </Box>
        </Box>



      </Box>

    </Box>
  );
};


const ContactBox = styled(Box)(({ theme }) => ({
  display: "grid",
  justifyContent: "space-between",
  alignItems: "center",
  transition: "0.3s ease-in-out",
}));
export default PropertyDetailsRightbar;
