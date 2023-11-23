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
  FormHelperText
} from "@mui/material";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import theme from "../Theme";
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Checkbox from "@mui/material/Checkbox";
import { GET_ALL_COUNTRIES_API, POST_REGISTER_API } from "../common/urls";
import { GetApiFetch, PostApiFetch } from "../common/CommonFunction";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userDetails } from '../redux/reducers/UserReducer';
const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [type, setType] = useState('');
  const [sellerType, setSellerType] = useState('');
  const [street, setStreet] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [countriesData, setCountriesData] = useState([]);


  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);

    // Check for a valid email format using a basic regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(!emailRegex.test(e.target.value));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [error, setError] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((prevShowConfirmPassword) => !prevShowConfirmPassword);
  };

  const validatePassword = () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      setError('');
    }
  };
  const _getCountry = () => {
    setIsLoading(true)
    GetApiFetch(GET_ALL_COUNTRIES_API)
      .then(([status, response]) => {
        if (status == 200) {
          if (response.data) {
            setCountriesData(response.data);
          } else {
            console.log(response);
          }
        } else {
          console.log('Something went wrong');
        }
      })
      .catch(error => console.log(error))
      .finally(() => {
        setIsLoading(false)
      });
  }
  const countryChange = (event) => {
    const selectedCountry = event.target.value;
    setCountry(selectedCountry);
    setState('');
    setCity('');
  };
  const stateChange = (event) => {
    const selectedState = event.target.value;
    setState(selectedState);
    setCity('');
  };
  const handleSignUp = async () => {
    setIsSubmitted(true);
    const formData = JSON.stringify({
      user_name: name,
      user_phone: phone,
      user_email: email,
      user_address: { street },
      password: password
    });
    // console.log("formData", formData, POST_REGISTER_API);
    PostApiFetch(POST_REGISTER_API, formData)
      .then(([status, response]) => {
        console.log("response", response);
        if (status == 201) {
          if (response.status) {
            navigate('/Login');
          }
        } else {
          console.log('Something went wrong');
        }
      })
      .catch(error => console.log(error))
      .finally(() => { });
  }
  useEffect(() => {
    // _getCountry()
  }, []);
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
              }} className="login_image" src={process.env.PUBLIC_URL+"/assets/images/login.png"} component={"img"} />
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
                {/* <Box sx={{
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
                    }} src="./assets/images/linkdin.svg" component={"img"} />
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
                    }} src="./assets/images/google.svg" component={"img"} />
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
                </Divider> */}
                <Box sx={{
                  display: "grid",
                  gap: "15px",
                  margin: "25px 0px"
                }} component={"form"}>
                  <TextField
                    fullWidth
                    id="outlined-adornment-name"
                    required
                    label="full name"
                    variant="outlined"
                    helperText={
                      <span style={{ color: 'red' }}>
                        {!name && isSubmitted ? 'Enter a User Name' : ''}
                      </span>
                    }
                    value={name}
                    onChange={(event) => {
                      setName(event.target.value);
                    }}
                  />
                  {/* {!name && (
                    <FormHelperText style={{ color: 'red' }}>
                      Enter a User Name
                    </FormHelperText>
                  )} */}
                  <TextField
                    fullWidth
                    id="outlined-adornment-email"
                    required
                    label="email"
                    variant="outlined"
                    error={emailError}
                    helperText={emailError ? 'Enter a valid email' : ''}
                    value={email}
                    onChange={handleEmailChange}
                  />
                  <TextField
                    fullWidth
                    id="outlined-adornment-phone"
                    label="phone number"
                    variant="outlined"
                    type="tel"
                    // helperText={emailError ? 'Enter a valid email' : ''}
                    helperText={
                      <span style={{ color: 'red' }}>
                        {!phone && isSubmitted ? 'Enter Phone number' : ''}
                      </span>
                    }
                    value={phone}
                    onChange={(event) => {
                      setPhone(event.target.value);
                    }}
                  />
                  {/* <FormControl fullWidth>
                    <InputLabel id="outlined-adornment-user-type-label">User Type</InputLabel>
                    <Select
                      labelId="outlined-adornment-user-type-label"
                      id="outlined-adornment-user-type"
                      value={type}
                      label="User Type"
                      onChange={(event) => {
                        setType(event.target.value);
                      }}
                    >
                      <MenuItem value='buyer'>Buyer</MenuItem>
                      <MenuItem value='seller'>Seller</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl fullWidth>
                    <InputLabel id="outlined-adornment-user-seller-type-label">Seller Type</InputLabel>
                    <Select
                      labelId="outlined-adornment-user-seller-type-label"
                      id="outlined-adornment-user-seller-type"
                      value={sellerType}
                      label="Seller Type"
                      onChange={(event) => {
                        setSellerType(event.target.value);
                      }}
                    >
                      <MenuItem value='owner'>Owner</MenuItem>
                      <MenuItem value='agent'>Agent</MenuItem>
                    </Select>
                  </FormControl> */}

                  <TextField
                    fullWidth
                    id="outlined-adornment-address"
                    label="address"
                    variant="outlined"
                    value={street}
                    onChange={(event) => {
                      setStreet(event.target.value);
                    }}
                  />

                  {/* <FormControl fullWidth>
                    <InputLabel id="outlined-adornment-user-country-label">Country</InputLabel>
                    <Select
                      labelId="outlined-adornment-user-country-label"
                      id="outlined-adornment-user-country"
                      value={country}
                      label="Country"
                      onChange={countryChange}
                    >
                      {countriesData.map((countr) => (
                        <MenuItem key={countr._id} value={countr.country_name}>
                          {countr.country_name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl fullWidth>
                    <InputLabel id="outlined-adornment-user-state-label">State</InputLabel>
                    <Select
                      labelId="outlined-adornment-user-state-label"
                      id="outlined-adornment-user-state"
                      value={state}
                      label="state"
                      onChange={stateChange}
                    >
                      {country &&
                        countriesData
                          .find((c) => c.country_name === country)
                          ?.states.map((state) => (
                            <MenuItem key={state._id} value={state.state_name}>
                              {state.state_name}
                            </MenuItem>
                          ))}
                    </Select>
                  </FormControl>
                  <FormControl fullWidth>
                    <InputLabel id="outlined-adornment-user-city-label">City</InputLabel>
                    <Select
                      labelId="outlined-adornment-user-city-label"
                      id="outlined-adornment-user-city"
                      value={city}
                      label="city"
                      onChange={(event) => {
                        setCity(event.target.value);
                      }}
                    >
                      {country &&
                        state &&
                        countriesData
                          .find((c) => c.country_name === country)
                          ?.states.find((s) => s.state_name === state)
                          ?.cities.map((city) => (
                            <MenuItem key={city._id} value={city.city_name}>
                              {city.city_name}
                            </MenuItem>
                          ))}
                    </Select>
                  </FormControl>
                  <TextField
                    fullWidth
                    id="outlined-adornment-postal-code"
                    required
                    label="Postal Code"
                    variant="outlined"
                    // error={emailError}
                    // helperText={emailError ? 'Enter a valid postal-code' : ''}
                    value={postalCode}
                    onChange={(event) => {
                      setPostalCode(event.target.value);
                    }}
                  /> */}
                  <TextField
                    fullWidth
                    id="outlined-password-input"
                    label="password"
                    type={showPassword ? 'text' : 'password'}
                    helperText={
                      <span style={{ color: 'red' }}>
                        {!password && isSubmitted ? 'Enter Password' : ''}
                      </span>
                    }
                    value={password}
                    onChange={handlePasswordChange}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={handleShowPassword}>
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    fullWidth
                    id="outlined-confirm-password-input"
                    label="confirm password"
                    type={showConfirmPassword ? 'text' : 'password'}
                    helperText={
                      <span style={{ color: 'red' }}>
                        {!confirmPassword && isSubmitted ? 'Enter Confirm Password' : ''}
                      </span>
                    }
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={handleShowConfirmPassword}>
                            {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />

                  <Box sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    gap: "5px"
                  }}>
                    <FormControlLabel className="chenk_sgn" sx={{
                      fontFamily: "Roboto,sans-serif !important",
                      gap: "10px",
                    }} control={<Checkbox />} label="By signing up, you agree to the " />
                    <a className="terms" href="">terms of service</a>
                  </Box>

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
                  }} onClick={handleSignUp}>Sign Up</Button>
                </Box>
                <Box>
                  <Typography> Already have an account? <a href="">Sign In</a></Typography>


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

export default Register