import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BreadcrumbsBanner from "../components/BreadcrumbsBanner";
import theme from "../Theme";
import { GET_CONTACTUS_DETAILS } from "../common/urls";
import axios from "axios";

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [message, setMessage] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [contactUsDetails, setContactUsDetails] = useState([]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleCheckboxChange = () => {
    setAgreeTerms(!agreeTerms);
  };

  const handleSubmit = () => {
    if (agreeTerms) {
      // Implement your form submission logic here
      console.log('Form submitted successfully!');
      setSubmitted(true);
      // Reset all fields after submission
      setName('');
      setEmail('');
      setNumber('');
      setSelectedOption('');
      setMessage('');
      setAgreeTerms(false);
    } else {
      // Display an error or notification about agreeing to the terms
      console.log('Please agree to the terms before submitting.');
    }
  };

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
    <>
      <Box>
        <Header />
      </Box>
      <BreadcrumbsBanner title="Contact Us" />
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
              display: { xs: "flex", sm: "flex", md: "flex", lg: "flex" },
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: {
                xs: "column-reverse",
                sm: "column-reverse",
                md: "row",
                lg: "row",
              },
            }}
          >
            <Box
              flex={1}
              paddingLeft={{ xs: "0px", md: "15px" }}
              paddingRight={{ xs: "0px", md: "15px" }}
              width={"100%"}
            >
              <Box
                sx={{
                  padding: "30px",
                  background: theme.palette.primary.white,
                  border: "1px solid #ebebeb",
                  borderRadius: "8px",
                  marginBottom: "25px",
                  minHeight: "230px",
                  textAlign: "center",
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
                <Box
                  sx={{
                    width: "80px",
                    height: "80px",
                    objectFit: "contain",
                  }}
                  src={process.env.PUBLIC_URL + "/assets/images/mail.png"}
                  component={"img"}
                />
                <Typography
                  variant="h4"
                  component={"h3"}
                  sx={{
                    fontSize: "24px",
                    fontWeight: "600",
                    lineHeight: "28px",
                    margin: "20px 0px 20px",
                    color: theme.palette.primary.logoColor,
                    fontFamily: theme.palette.primary.Roboto,
                  }}
                >
                  Email Address
                </Typography>
                <Typography
                  sx={{
                    color: theme.palette.primary.lightGrey,
                    fontSize: "16px",
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
                  {contactUsDetails && contactUsDetails.email}
                </Typography>
              </Box>
            </Box>
            <Box
              flex={1}
              paddingLeft={{ xs: "0px", md: "15px" }}
              paddingRight={{ xs: "0px", md: "15px" }}
              width={"100%"}
            >
              <Box
                sx={{
                  padding: "30px",
                  background: theme.palette.primary.white,
                  border: "1px solid #ebebeb",
                  borderRadius: "8px",
                  marginBottom: "25px",
                  textAlign: "center",
                  minHeight: "230px",
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
                <Box
                  sx={{
                    width: "80px",
                    height: "80px",
                    objectFit: "contain",
                  }}
                  src={process.env.PUBLIC_URL + "/assets/images/call.png"}
                  component={"img"}
                />
                <Typography
                  variant="h4"
                  component={"h3"}
                  sx={{
                    fontSize: "24px",
                    fontWeight: "600",
                    lineHeight: "28px",
                    margin: "20px 0px 20px",
                    color: theme.palette.primary.logoColor,
                    fontFamily: theme.palette.primary.Roboto,
                  }}
                >
                  Phone Number
                </Typography>
                <Typography
                  sx={{
                    color: theme.palette.primary.lightGrey,
                    fontSize: "16px",
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
                  {contactUsDetails && contactUsDetails.phone}
                </Typography>
              </Box>
            </Box>
            <Box
              flex={1}
              paddingLeft={{ xs: "0px", md: "15px" }}
              paddingRight={{ xs: "0px", md: "15px" }}
              width={"100%"}
            >
              <Box
                sx={{
                  padding: "30px",
                  background: theme.palette.primary.white,
                  border: "1px solid #ebebeb",
                  borderRadius: "8px",
                  marginBottom: "25px",
                  textAlign: "center",
                  minHeight: "230px",
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
                <Box
                  sx={{
                    width: "80px",
                    height: "80px",
                    objectFit: "contain",
                  }}
                  src={process.env.PUBLIC_URL + "/assets/images/location.png"}
                  component={"img"}
                />
                <Typography
                  variant="h4"
                  component={"h3"}
                  sx={{
                    fontSize: "24px",
                    fontWeight: "600",
                    lineHeight: "28px",
                    margin: "20px 0px 20px",
                    color: theme.palette.primary.logoColor,
                    fontFamily: theme.palette.primary.Roboto,
                  }}
                >
                  Office Address
                </Typography>
                <Typography
                  sx={{
                    color: theme.palette.primary.lightGrey,
                    fontSize: "16px",
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
                  {contactUsDetails && contactUsDetails.address}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
        <Box sx={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/R10.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: "fixed",
          height: "auto",
        }} component={"section"}>
          <Container
            maxWidth="lg"
            sx={{
              height: "100%",
              padding: {
                xs: "30px 10px",
                sm: "40px 10px",
                md: "40px 10px",
                lg: "40px 0px",
              },
              background: "transparent",
            }}
          >
            <Box sx={{
              padding: "30px",
              position: "relative",
              background: "rgb(255 255 255 / 90%)",
              borderRadius: "8px",
              marginBottom: "25px",

              transition: "all 0.4s ease-out",
              boxShadow: "0 4px 12px rgba(0,0,0,15%)",
              marginTop: {
                xs: "30px",
                lg: "0px",
              },
              "&:hover": {
                boxShadow: "0 4px 12px rgba(0,0,0,20%)",
              },
            }}>
              <Box sx={{}}>
                <Typography
                  variant="h4"
                  component={"h4"}
                  sx={{
                    fontSize: "24px",
                    fontWeight: "600",
                    lineHeight: "32px",
                    margin: "0px 0px 30px",
                    fontFamily: theme.palette.primary.Roboto,
                    color: theme.palette.primary.logoColor,
                  }}
                >
                  Get A Quote
                </Typography>

                <Box
                  sx={{
                    display: "grid",
                    gap: "20px",
                  }}
                  component={"form"}
                >
                  <Box
                    sx={{
                      display: { xs: "flex", sm: "flex", md: "flex", lg: "flex" },
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "20px",
                      flexDirection: {
                        xs: "column-reverse",
                        sm: "column-reverse",
                        md: "row",
                        lg: "row",
                      },
                    }}
                  >
                    <TextField
                      fullWidth
                      id="outlined-adornment-name"
                      required
                      label="Enter your name"
                      variant="outlined"
                      value={name}
                      onChange={handleNameChange}
                    />
                    <TextField
                      fullWidth
                      id="outlined-adornment-name"
                      required
                      label="Enter email address"
                      variant="outlined"
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: { xs: "flex", sm: "flex", md: "flex", lg: "flex" },
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "20px",
                      flexDirection: {
                        xs: "column-reverse",
                        sm: "column-reverse",
                        md: "row",
                        lg: "row",
                      },
                    }}
                  >
                    {/* <FormControl fullWidth>
                      <InputLabel id="select-label">Select Option</InputLabel>
                      <Select
                        labelId="select-label"
                        id="select"
                        value={selectedOption}
                        onChange={handleOptionChange}
                        label="Select Option"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value="option1">Option 1</MenuItem>
                        <MenuItem value="option2">Option 2</MenuItem>
                        <MenuItem value="option3">Option 3</MenuItem>
                      </Select>
                    </FormControl> */}
                    <TextField
                      fullWidth
                      id="outlined-adornment-name"
                      required
                      label="Enter phone number"
                      variant="outlined"
                      value={number}
                      onChange={handleNumberChange}
                    />
                  </Box>
                  <TextField
                    fullWidth
                    id="outlined-adornment-name"
                    required
                    label="Type your message"
                    multiline
                    rows={4}
                    variant="outlined"
                    value={message}
                    onChange={handleMessageChange}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <FormControlLabel
                      control={<Checkbox checked={agreeTerms} onChange={handleCheckboxChange} color="primary" />}
                      label="I agree to the terms and conditions"
                    />
                  </Box>
                  <Button sx={{
                    width: {
                      xs: "100%",
                      sm: "20%",
                      md: "15%",
                      lg: "15%"
                    },
                    margin: {
                      xs: "auto",
                      sm: "10px 0px",
                      md: "10px 0px",
                      lg: "10px 0px"
                    },
                    backgroundColor: theme.palette.primary.logoColor,
                    height: "45px",
                    color: theme.palette.primary.white,
                    "&:hover":
                    {
                      backgroundColor: "#00a376"
                    },
                  }} variant="contained" color="primary" onClick={handleSubmit} style={{ marginTop: '10px' }}>
                    Submit
                  </Button>
                </Box>
                {submitted && (
                  <Box sx={{
                    textAlign: "center"
                  }} mt={3}>
                    <Typography variant="h6">Thank You for Submitting the Form!</Typography>
                  </Box>
                )}
              </Box>
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
                }} variant="contained" onClick={() => {
                  window.location.href = "/AgentRegister";
                }}>Register Now</Button>
            </Box>



          </Container>
        </Box>
      </Box>
      <Footer />
    </>
  );
};
export default ContactUs;
