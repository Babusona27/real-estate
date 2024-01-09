import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import React from "react";
import theme from "../Theme";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import NoCrashIcon from "@mui/icons-material/NoCrash";
import KingBedIcon from "@mui/icons-material/KingBed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useParams, useNavigate } from "react-router-dom";
import { GET_PRODUCT_DETAILS_PAGE_API, IMAGE_BASE_URL, POST_SUBMIT_REVIEW_API, GET_REVIEW_DETAILS } from "../common/urls";
import { GetApiFetch, PostApiFetch } from "../common/CommonFunction";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

const PropertyDetailsLeftbar = () => {
  const navigate = useNavigate();
  const propertyDetails = useSelector((state) => state.PropertyReducer.value);
  const userData = useSelector((state) => state.UserReducer.value);
  console.log("userData-->", userData);
  // console.log('propertyDetails', propertyDetails);
  // add review popup box 
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    // Reset the form fields
    // setRating(0);
    // setName('');
    // setComment('');
  }

  const [formData, setFormData] = useState({
    rating: "",
    review: "",
    user_id: userData ? userData.userId || "" : "",
    user_name: "",
  });

  const [errors, setErrors] = useState({
    rating: "",
    review: "",
    user_name: ""
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Reset the corresponding validation error when the user types
    setErrors({ ...errors, [name]: "" });
  };

  const handleAddReview = async (e) => {
    e.preventDefault();
    let isValid = true;
    const newErrors = {
      rating: "",
      review: "",
      user_id: "",
      user_name: ""

    };
    console.log('formData', formData);
    if (!formData.review) {
      isValid = false;
      newErrors.review = "Review is required.";
    }
    if (!formData.user_name) {
      isValid = false;
      newErrors.user_name = "User name is required.";
    }
    setErrors(newErrors);
    if (isValid) {
      axios
        .post(POST_SUBMIT_REVIEW_API + propertyDetails.slug, formData, {
          headers: {
            'Authorization': `${userData.token}`
          }
        })
        .then((response) => {
          if (response.data.status) {
            // console.log('response_Review', response.data.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });

      // Close the dialog
      handleClose();
    }
  };

  const getReviewDetails = () => {
    if (propertyDetails && propertyDetails.slug) {
      axios
        .get(GET_REVIEW_DETAILS + propertyDetails.slug, {
          headers: {
            'Authorization': `${userData.token}`
          }
        })
        .then((response) => {
          if (response.data.status) {
            console.log('response_Review', response.data.data);
            setComment(response.data.data.reviews);
            // response.data.data.reviews.map((item) => {
            //   console.log('item', item);
            // })
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log('propertyDetails is null or does not have a slug');
    }
  };

  useEffect(() => {
    // if (propertyDetails && propertyDetails.slug) {
    //     getReviewDetails();
    // }
    if (propertyDetails && propertyDetails.slug && userData && userData.userId != null) {
      getReviewDetails();
    }
  }, [propertyDetails, userData]);

  // popup massage
  const [active, setActive] = useState(false);
  const [yourname, setYourName] = useState('');
  const [yourmail, setYourMail] = useState('');
  const [massage, setMassage] = useState('');

  const PopupOpen = () => {
    setActive(true);
  };

  const PopupClose = () => {
    setActive(false);
    // Reset the form fields
    setYourName('');
    setYourMail('');
    setMassage('');
  };

  const handleAddMassage = () => {
    // Implement your logic for sending the message
    console.log('Sending Message:', { yourname, yourmail, massage });

    // Reset the form fields
    setYourName('');
    setYourMail('');
    setMassage('');

    // Close the dialog
    PopupClose();
  };

  return (
    <Box
      flex={2}
      paddingLeft={{ xs: "0px", md: "15px" }}
      paddingRight={{ xs: "0px", md: "15px" }}
    >
      <Box
        component={"div"}
        sx={{
          padding: "25px 30px 30px",
          background: theme.palette.primary.white,
          boxShadow: "0 4px 18px 0 rgba(194, 200, 213, 0.3)",
          borderRadius: "6px",
          marginBottom: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "25px",
          }}
        >
          <Typography
            sx={{
              fontSize: "22px",
              color: "#212121",
              lineHeight: "30px",

              fontWeight: "500",
            }}
            variant="h6"
          >
            Overview
          </Typography>
          <Button
            className="customBtnStyle"
            sx={{
              fontFamily: theme.palette.primary.Roboto,
              backgroundColor: theme.palette.primary.logoColor,
              height: "40px",
              padding: {
                xs: "8px 10px",
                sm: "8px 10px",
                md: "8px 22px",
                lg: "8px 22px",
              },
              fontSize: "14px",
              lineHeight: "18px",
              fontWeight: "500",
              borderRadius: "8px",
              color: theme.palette.primary.white,
              "&:hover": {
                backgroundColor: theme.palette.primary.Green,
              },
            }}
            variant="contained"
            onClick={PopupOpen}
          >
            book an appointment
          </Button>
        </Box>

        <Box
          className="details_icon_list"
          component="ul"
          sx={{
            display: "grid",
            gap: "30px 15px",
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)",
              sm: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
            },
            alignItems: "center",
          }}
        >
          <Box
            component="li"
            sx={{
              display: "flex",
              gap: "15px",
              alignItems: "center",
              width: "100%",
            }}
          >
            <IconButton
              className="filter_btn"
              sx={{
                height: "50px",
                width: "53px",
                borderRadius: "8px",
                backgroundColor: theme.palette.primary.white,
                border: "1px solid rgb(232, 233, 241)",
                color: theme.palette.primary.logoColor,
                transition: "0.4s",
                boxShadow: "0 4px 18px 0 rgba(188, 192, 202, 0.26)",
              }}
            >
              <LocalOfferIcon />
            </IconButton>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                justifyContent: "center",
                gap: "5px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "16px",
                  color: theme.palette.primary.logoColor,
                  fontFamily: theme.palette.primary.Roboto,
                }}
                variant="h6"
              >
                ID No{" "}
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: theme.palette.primary.lightGrey,
                }}
                variant="span"
              >
                {propertyDetails && propertyDetails._id}
              </Typography>
            </Box>
          </Box>
          <Box
            component="li"
            sx={{
              display: "flex",
              gap: "15px",
              alignItems: "center",
              width: "100%",
            }}
          >
            <IconButton
              className="filter_btn"
              sx={{
                height: "50px",
                width: "53px",
                borderRadius: "8px",
                backgroundColor: theme.palette.primary.white,
                border: "1px solid rgb(232, 233, 241)",
                color: theme.palette.primary.logoColor,
                transition: "0.4s",
                boxShadow: "0 4px 18px 0 rgba(188, 192, 202, 0.26)",
              }}
            >
              <NoCrashIcon />
            </IconButton>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                justifyContent: "center",
                gap: "5px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "16px",
                  color: theme.palette.primary.logoColor,
                  fontFamily: theme.palette.primary.Roboto,
                }}
                variant="h6"
              >
                Parking
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: theme.palette.primary.lightGrey,
                }}
                variant="span"
              >
                {propertyDetails && propertyDetails.parking ? "Yes" : "No"}
              </Typography>
            </Box>
          </Box>
          <Box
            component="li"
            sx={{
              display: "flex",
              gap: "15px",
              alignItems: "center",
              width: "100%",
            }}
          >
            <IconButton
              className="filter_btn"
              sx={{
                height: "50px",
                width: "53px",
                borderRadius: "8px",
                backgroundColor: theme.palette.primary.white,
                border: "1px solid rgb(232, 233, 241)",
                color: theme.palette.primary.logoColor,
                transition: "0.4s",
                boxShadow: "0 4px 18px 0 rgba(188, 192, 202, 0.26)",
              }}
            >
              <KingBedIcon />
            </IconButton>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                justifyContent: "center",
                gap: "5px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "16px",
                  color: theme.palette.primary.logoColor,
                  fontFamily: theme.palette.primary.Roboto,
                }}
                variant="h6"
              >
                Bedroom
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: theme.palette.primary.lightGrey,
                }}
                variant="span"
              >
                {propertyDetails && propertyDetails.bedroom}
              </Typography>
            </Box>
          </Box>
          <Box
            component="li"
            sx={{
              display: "flex",
              gap: "15px",
              alignItems: "center",
              width: "100%",
            }}
          >
            <IconButton
              className="filter_btn"
              sx={{
                height: "50px",
                width: "53px",
                borderRadius: "8px",
                backgroundColor: theme.palette.primary.white,
                border: "1px solid rgb(232, 233, 241)",
                color: theme.palette.primary.logoColor,
                transition: "0.4s",
                boxShadow: "0 4px 18px 0 rgba(188, 192, 202, 0.26)",
              }}
            >
              <BathtubIcon />
            </IconButton>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                justifyContent: "center",
                gap: "5px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "16px",
                  color: theme.palette.primary.logoColor,
                  fontFamily: theme.palette.primary.Roboto,
                }}
                variant="h6"
              >
                Bath
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: theme.palette.primary.lightGrey,
                }}
                variant="span"
              >
                {propertyDetails && propertyDetails.bath}
              </Typography>
            </Box>
          </Box>
          <Box
            component="li"
            sx={{
              display: "flex",
              gap: "15px",
              alignItems: "center",
              width: "100%",
            }}
          >
            <IconButton
              className="filter_btn"
              sx={{
                height: "50px",
                width: "53px",
                borderRadius: "8px",
                backgroundColor: theme.palette.primary.white,
                border: "1px solid rgb(232, 233, 241)",
                color: theme.palette.primary.logoColor,
                transition: "0.4s",
                boxShadow: "0 4px 18px 0 rgba(188, 192, 202, 0.26)",
              }}
            >
              <ZoomOutMapIcon />
            </IconButton>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                justifyContent: "center",
                gap: "5px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "16px",
                  color: theme.palette.primary.logoColor,
                  fontFamily: theme.palette.primary.Roboto,
                }}
                variant="h6"
              >
                Sqft{" "}
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: theme.palette.primary.lightGrey,
                }}
                variant="span"
              >
                {propertyDetails && propertyDetails.sqft}
              </Typography>
            </Box>
          </Box>
          <Box
            component="li"
            sx={{
              display: "flex",
              gap: "15px",
              alignItems: "center",
              width: "100%",
            }}
          >
            <IconButton
              className="filter_btn"
              sx={{
                height: "50px",
                width: "53px",
                borderRadius: "8px",
                backgroundColor: theme.palette.primary.white,
                border: "1px solid rgb(232, 233, 241)",
                color: theme.palette.primary.logoColor,
                transition: "0.4s",
                boxShadow: "0 4px 18px 0 rgba(188, 192, 202, 0.26)",
              }}
            >
              <LocationOnIcon />
            </IconButton>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                justifyContent: "center",
                gap: "5px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "16px",
                  color: theme.palette.primary.logoColor,
                  fontFamily: theme.palette.primary.Roboto,
                }}
                variant="h6"
              >
                Location
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: theme.palette.primary.lightGrey,
                }}
                variant="span"
              >
                {propertyDetails && propertyDetails.state}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          padding: "25px 30px 30px",
          background: theme.palette.primary.white,
          boxShadow: "0 4px 18px 0 rgba(194, 200, 213, 0.3)",
          borderRadius: "6px",
          marginBottom: "10px",
        }}
        component={"div"}
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
          About This Listing
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            color: "rgb(85, 85, 85)",
            lineHeight: "25px",
            marginBottom: "25px",
            fontWeight: "600",
            fontFamily: theme.palette.primary.Roboto,
          }}
          component={"p"}
        >
          {/* {propertyDetails && propertyDetails.property_name} */}
          {propertyDetails && propertyDetails.type} | Soon to be Available
        </Typography>

        <Typography
          sx={{
            fontSize: "16px",
            color: "rgb(85, 85, 85)",
            lineHeight: "28px",
            marginBottom: "25px",
            fontFamily: theme.palette.primary.Roboto,
          }}
          component={"p"}
        >
          {propertyDetails && propertyDetails.description}
        </Typography>
      </Box>
      <Box
        sx={{
          padding: "25px 30px 30px",
          background: theme.palette.primary.white,
          boxShadow: "0 4px 18px 0 rgba(194, 200, 213, 0.3)",
          borderRadius: "6px",
          marginBottom: "10px",
        }}
        component={"div"}
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
          Features & Amenities
        </Typography>
      </Box>
      <Box
        sx={{
          padding: "25px 30px 30px",
          background: theme.palette.primary.white,
          boxShadow: "0 4px 18px 0 rgba(194, 200, 213, 0.3)",
          borderRadius: "6px",
          marginBottom: "10px",
        }}
        component={"div"}
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
          Map Location
        </Typography>
        <Box className="map_box" component={"div"}>
          <img height={"100%"} width={"100%"} src={process.env.PUBLIC_URL + "/assets/images/map.jpeg"} />
        </Box>
      </Box>
      <Box
        sx={{
          padding: "25px 30px 30px",
          background: theme.palette.primary.white,
          boxShadow: "0 4px 18px 0 rgba(194, 200, 213, 0.3)",
          borderRadius: "6px",
          marginBottom: "25px",
        }}
        component={"div"}
      >
        {/* User Review Section */}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "30px",
            marginBottom: "50px",
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "16px",
                sm: "16px",
                md: "22px",
                lg: "22px",
              },
              color: "#212121",
              lineHeight: "22px",
              fontWeight: "500",
            }}
            variant="h6"
            component={"h3"}
          >
            Customer Reviews
          </Typography>
          {/* {userData.userId != null ? */}
          {userData ?
            <Button
              className="customBtnStyle"
              sx={{
                fontFamily: theme.palette.primary.Roboto,
                backgroundColor: theme.palette.primary.logoColor,
                height: "40px",
                padding: {
                  xs: "8px 10px",
                  sm: "8px 10px",
                  md: "8px 22px",
                  lg: "8px 22px",
                },
                fontSize: "14px",
                lineHeight: "18px",
                fontWeight: "500",
                borderRadius: "8px",
                color: theme.palette.primary.white,
                "&:hover": {
                  backgroundColor: theme.palette.primary.Green,
                },
              }}
              variant="contained"
              onClick={handleOpen}
            >
              Add Review
            </Button>
            :
            <Button
            className="customBtnStyle"
            sx={{
              fontFamily: theme.palette.primary.Roboto,
              backgroundColor: theme.palette.primary.logoColor,
              height: "40px",
              padding: {
                xs: "8px 10px",
                sm: "8px 10px",
                md: "8px 22px",
                lg: "8px 22px",
              },
              fontSize: "14px",
              lineHeight: "18px",
              fontWeight: "500",
              borderRadius: "8px",
              color: theme.palette.primary.white,
              "&:hover": {
                backgroundColor: theme.palette.primary.Green,
              },
            }}
            variant="contained"
            onClick={()=>{
              navigate("/login")
            }}
          >
            Add Review
          </Button>
          }


        </Box>
        {/* fetch reviews */}
        {/* {comment && comment.reviews.map((item) => { */}
        {userData ?
          <Box>
            {comment && comment.map((item) => {
              console.log('item', item);
              return (
                item.status == "active" ?
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
                      },
                      gap: "30px",
                    }}
                    mb={1}
                  >
                    <Avatar
                      sx={{
                        height: "100px",
                        width: "100px",
                        objectFit: "cover",
                      }}
                      alt="suraj"
                      src="./assets/images/R6.jpg"
                    // src={IMAGE_BASE_URL + item.user_image}
                    />
                    <Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box>
                          <Typography
                            sx={{
                              fontSize: "20px",
                              color: "#212121",
                              lineHeight: "22px",
                              fontWeight: "600",
                              marginBottom: "10px",
                              fontFamily: theme.palette.primary.Roboto,
                            }}
                            variant="h6"
                            component={"h3"}
                          >
                            {item.user_name}
                          </Typography>
                          <Rating
                            sx={{
                              fontSize: "18px",
                            }}
                            name="customer-rating"
                            value={item.rating}
                            readOnly
                          />
                        </Box>
                      </Box>

                      <Typography variant="body1" mt={1}>
                        {item.review}
                      </Typography>
                    </Box>
                  </Box>

                  : <></>
              )
            })}

            <Divider
              sx={{
                margin: "20px 0px",
              }}
            />
          </Box>
          :
          <></>
        }

        {/* Add more reviews as needed */}
        <Dialog fullwidth='true' sx={{}} open={open} onClose={handleClose}>
          <DialogTitle
            className="popupHeading"
            sx={{
              fontSize: "22px",
              color: "#212121",
              lineHeight: "30px",
              marginBottom: "15px",
              fontWeight: "600",
              textAlign: "center",
              fontFamily: theme.palette.primary.Roboto,
            }}
          >
            Add Review
          </DialogTitle>
          <DialogContent>
            <Box
              sx={{
                display: "grid",
                gap: "20px",
              }}
            >
              <Box>
                <Rating
                  id="add-review-rating"
                  name="rating"
                  value={formData.rating}
                  onChange={handleInputChange}
                  onChangeActive={(event, newHover) => {
                    setRating(newHover);
                  }}

                />
              </Box>
              <TextField
                fullwidth="true"
                id="outlined-adornment-name"
                required
                label="Enter your name"
                name="user_name"
                variant="outlined"
                value={formData.user_name}
                onChange={handleInputChange}
                error={Boolean(errors.user_name)}
                helperText={errors.user_name}
              />
              <TextField
                fullwidth="true"
                id="outlined-adornment-name"
                required
                label="Type your message"
                name="review"
                multiline
                rows={4}
                variant="outlined"
                value={formData.review}
                onChange={handleInputChange}
                error={Boolean(errors.review)}
                helperText={errors.review}
              />
            </Box>
          </DialogContent>
          <DialogActions
            sx={{
              padding: "0px 20px 20px 20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}>
            <Button
              className="customBtnStyle new_btn"
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
                },
              }}
              variant="contained"
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              className="customBtnStyle new_btn"
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
                },
              }}
              variant="contained"
              onClick={handleAddReview}
            >
              Add Review
            </Button>
          </DialogActions>
        </Dialog>

        {/* book an appointment*/}
        <Dialog fullwidth="true" sx={{}} open={active} onClose={PopupClose}>
          <DialogTitle
            className="popupHeading"
            sx={{
              fontSize: "22px",
              color: "#212121",
              lineHeight: "30px",
              marginBottom: "15px",
              fontWeight: "600",
              textAlign: "center",
              fontFamily: theme.palette.primary.Roboto,
            }}
          >
            Drop Messege For Book
          </DialogTitle>
          <DialogContent>
            <Box
              sx={{
                display: "grid",
                gap: "20px",
              }}
            >
              <TextField
                fullwidth="true"
                id="outlined-adornment-name"
                required
                label="Your Name"
                variant="outlined"
                value={yourname}
                onChange={(event) => setYourName(event.target.value)}
              />
              <TextField
                fullwidth="true"
                id="outlined-adornment-name"
                required
                label="Your e-Mail"
                variant="outlined"
                value={yourmail}
                onChange={(event) => setYourMail(event.target.value)}
              />
              <TextField
                fullwidth="true"
                id="outlined-adornment-name"
                required
                label="Write Message..."
                multiline
                rows={4}
                variant="outlined"
                value={massage}
                onChange={(event) => setMassage(event.target.value)}
              />
            </Box>
          </DialogContent>
          <DialogActions
            sx={{
              padding: "0px 20px 20px 20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <Button
              className="customBtnStyle new_btn"
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
                },
              }}
              variant="contained"
              onClick={PopupClose}
              color="primary"
            >
              Cancel
            </Button>
            <Button
              className="customBtnStyle new_btn"
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
                },
              }}
              variant="contained"
              onClick={handleAddMassage}
              color="primary"
            >
              Send Messege
            </Button>
          </DialogActions>
        </Dialog>
      </Box>

    </Box>
  )
}
export default PropertyDetailsLeftbar;

