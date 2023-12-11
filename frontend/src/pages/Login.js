import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  IconButton,
  InputLabel,
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
import theme from "../Theme";
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Checkbox from "@mui/material/Checkbox";
import { POST_LOGIN_API } from "../common/urls";
import { PostApiFetch } from "../common/CommonFunction";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userDetails } from '../redux/reducers/UserReducer';
import { Link } from "react-router-dom";
import axios from "axios";
import AlertMessage from "../components/AlertMessage";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);

    // Check for a valid email format using a basic regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(!emailRegex.test(e.target.value));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // State to manage form inputs
  const [formData, setFormData] = useState({
    user_email: "",
    password: "",
  });

  // State to manage validation errors
  const [errors, setErrors] = useState({
    user_email: "",
    password: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Reset the corresponding validation error when the user types
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('formData', formData);
    // Validate form inputs
    let isValid = true;
    const newErrors = { ...errors };
    if (!formData.user_email.trim()) {
      isValid = false;
      newErrors.user_email = "Email is required";
    }
    if (!formData.password.trim()) {
      isValid = false;

      newErrors.password = "Password is required";
    }
    setErrors(newErrors);

    // If form is valid, submit the data
    if (isValid) {
      //   console.log("Form submitted:", formData);
      // logic to submit data, e.g., make an API call
      axios.post(POST_LOGIN_API, formData).then((res) => {
        // console.log("response", res);
          if (res.data.status === true) {
            setMessageType("success");
            setMessage(res.data.message);
            dispatch(userDetails(res.data.data));
            navigate('/');
          } else {
            setMessageType("error");
            setMessage(res.data.message);
          }
        }).catch((err) => {
          console.log(err.response);
          if (err.response) {
            setMessageType("error");
            setMessage(err.response.data.message);
          }
      });
    }
  };

  // const handleSignIn = async () => {
  //   setIsSubmitted(true);
  //   const formData = JSON.stringify({
  //     user_email: email,
  //     password: password
  //   });
  //   PostApiFetch(POST_LOGIN_API, formData)
  //     .then(([status, response]) => {
  //       if (status == 200) {
  //         console.log(response);
  //         if (response.status) {
  //           localStorage.setItem('token', response.data.token);
  //           dispatch(userDetails(response));
  //           navigate('/');
  //           setMessage(response.message);
  //         }
  //       } else {
  //         console.log('Something went wrong');
  //       }
  //     })
  //     .catch(error => console.log(error))
  //     .finally(() => { });
  // }
  return (
    <>
      <Box>
        <Header />
      </Box>
      <Box
        component={"div"}
        sx={{
          padding: {
            xs: "60px 0px 40px",
            sm: "30px 0px",
            md: "50px 0px",
            lg: "50px 0px",
          },

        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            // backgroundColor: theme.palette.primary.BGColor,
            height: "100%",
            padding: {
              xs: "0px 10px",
              sm: "0px 10px",
              md: "0px 0px",

            },

          }}
        >
          <Box sx={{
            padding: "50px 24px",
            display: {
              xs: "block",
              sm: "block",
              md: "flex",
              lg: "flex"
            },
            alignItems: "center",
            justifyContent: "center",
            gap: "30px"
          }}>
            <Box sx={{
              textAlign: {
                xs: "center",
                sm: "center",
                md: "right",
                lg: "right"
              },
            }} flex={2}>
              <Box sx={{
                height: "100%",
                width: {
                  xs: "100%",
                  sm: "100%",
                  md: "70%",
                  lg: "70%",
                },
                marginBottom: {
                  xs: "50px",
                  sm: "50px",
                  md: "0",
                  lg: "0",
                },
                objectFit: "contain",
              }} className="login_image" src={process.env.PUBLIC_URL + "/assets/images/login.png"} component={"img"} />
            </Box>
            <Box flex={2}>
              <Box sx={{
                width: {
                  xs: "100%",
                  sm: "100%",
                  md: "70%",
                  lg: "70%",
                },
                textAlign: "center"
              }}>
                <Typography sx={{
                  fontWeight: "500",
                  marginBottom: "15px",
                  fontSize: {
                    xs: "24px",
                    sm: "24px",
                    md: "32px",
                    lg: "32px",
                  },
                }} variant="h4" component={"h3"}>
                  Sign into your <span className="lastword">account!</span>
                </Typography>
                <Typography sx={{
                  color: theme.palette.secondary.light,
                  marginBottom: "20px",
                }} component={"p"}>Nice to see you! Please log in with your account.</Typography>
                <Box sx={{
                  display: "flex",
                  gap: "20px",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  marginBottom: "15px"
                }}>
                  <Button sx={{
                    width: {
                      xs: "100%",
                      sm: "100%",
                      md: "85%",
                      lg: "85%",
                    },
                    boxShadow: "0 0 1px rgba(0,0,0,.12), 0 1px 1px hsla(0,0%,48%,.2)",
                    background: theme.palette.secondary.btnBg,
                    color: theme.palette.secondary.grey,
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                    padding: "15px 15px",
                    borderRadius: "12px",
                    "&:hover": {
                      background: theme.palette.secondary.btnBg,
                      color: theme.palette.secondary.grey,
                      boxShadow: "0 0 2px rgba(0,0,0,.12), 0 2px 2px rgba(0,0,0,.24)",

                    }
                  }} variant="contained">
                    <Box sx={{
                      width: "20px",
                      height: "20px",
                      objectFit: "contain",
                    }} src={process.env.PUBLIC_URL + "/assets/images/linkdin.svg"} component={"img"} />
                    <Typography component={"span"} sx={{
                      fontSize: "18px",
                      fontWeight: "500",
                      letterSpacing: "5",
                      textTransform: "capitalize",
                      fontFamily: "Roboto,sans-serif !important",
                    }}>Sign up with LinkedIn</Typography>
                  </Button>

                  <Button sx={{
                    width: {
                      xs: "100%",
                      sm: "100%",
                      md: "85%",
                      lg: "85%",
                    },
                    boxShadow: "0 0 1px rgba(0,0,0,.12), 0 1px 1px hsla(0,0%,48%,.2)",
                    background: theme.palette.secondary.btnBg,
                    color: theme.palette.secondary.grey,
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                    padding: "15px 15px",
                    borderRadius: "12px",
                    "&:hover": {
                      background: theme.palette.secondary.btnBg,
                      color: theme.palette.secondary.grey,
                      boxShadow: "0 0 2px rgba(0,0,0,.12), 0 2px 2px rgba(0,0,0,.24)",

                    }
                  }} variant="contained">
                    <Box sx={{
                      width: "20px",
                      height: "20px",
                      objectFit: "contain",
                    }} src={process.env.PUBLIC_URL + "/assets/images/google.svg"} component={"img"} />
                    <Typography component={"span"} sx={{
                      fontSize: "18px",
                      fontWeight: "500",
                      letterSpacing: "5",
                      textTransform: "capitalize",
                      fontFamily: "Roboto,sans-serif !important",
                    }}>Sign up with Google</Typography>
                  </Button>
                </Box>
                <Typography sx={{
                  color: theme.palette.secondary.grey,
                }} component={"p"}>We won't post anything without your permission and your personal details are kept private</Typography>
                <Divider sx={{
                  color: theme.palette.primary.dark,
                  margin: "15px 20px",
                  fontWeight: "500",
                  fontSize: "18px"
                }} flexItem>
                  Or
                </Divider>
                {messageType !== "" && (
                  <AlertMessage type={messageType} message={message} />
                )}
                <Box sx={{
                  display: "grid",
                  gap: "15px",
                  margin: "25px 0px"
                }} component={"form"}>
                  <TextField
                    fullWidth
                    id="outlined-adornment-email"
                    required
                    label="Email"
                    name="user_email"
                    variant="outlined"
                    value={formData.user_email}
                    onChange={handleInputChange}
                    error={Boolean(errors.user_email)}
                    helperText={errors.user_email}
                  />
                  <TextField
                    fullWidth
                    id="outlined-adornment-password"
                    required
                    name="password"
                    label="Password"
                    variant="outlined"
                    type={showPassword ? 'text' : 'password'}
                    error={Boolean(errors.password)}
                    helperText={errors.password}
                    value={formData.password}
                    onChange={handleInputChange}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={togglePasswordVisibility}>
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <FormControlLabel control={<Checkbox />} label="Remember me next time" />
                  <Button sx={{
                    width: "100%",
                    backgroundColor: theme.palette.primary.logoColor,
                    height: "50px",
                    fontSize: "14px",
                    fontWeight: "600",
                    borderRadius: "12px",
                    lineHeight: "1.2px",
                    boxShadow: "0 7px 18px 0 rgba(29, 142, 162, 0.32)",
                    color: theme.palette.primary.white,
                    "&:hover":
                    {
                      backgroundColor: "#00a376"
                    },
                  }} onClick={handleSubmit}>Sign in</Button>
                </Box>
                <Box>
                  <Typography> Don't have an account? <Link to="/Register">Register</Link></Typography>
                  <Typography>Remind <a href="">Password </a></Typography>

                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box>
        <Footer />
      </Box>
    </>
  )
}

export default Login