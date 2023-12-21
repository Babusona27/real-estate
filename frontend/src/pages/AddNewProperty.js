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
    Radio,
    FormLabel,
    RadioGroup,
    // CloudUploadIcon,
    // VisuallyHiddenInput
} from "@mui/material";
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
// import VisuallyHiddenInput from '@mui/material/VisuallyHiddenInput';
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BreadcrumbsBanner from "../components/BreadcrumbsBanner";
import theme from "../Theme";
import { POST_ADD_PROPERTY_API, GET_ALL_CATEGORY, GET_ALL_COUNTRIES_API, IMAGE_BASE_URL } from '../common/urls';
import axios from 'axios';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const AddNewProperty = () => {
    const navigate = useNavigate();
    const userData = useSelector(state => state.UserReducer.value);
    // console.log('userData', userData);


    const [file, setFile] = useState(null);
    const [floorImage, setFloorImage] = useState(null);
    const [isUploaded, setIsUploaded] = useState(false);
    const [isUploadedFloorImage, setIsUploadedFloorImage] = useState(false);
    const [categoryList, setCategoryList] = useState(false);
    const [countriesData, setCountriesData] = useState([]);
    const [successMsg, setSuccessMsg] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const _getCountry = async () => {
        await axios
            .get(GET_ALL_COUNTRIES_API)
            .then((response) => {
                if (response.data.status) {
                    // console.log("response-country->", response.data.data);
                    setCountriesData(response.data.data)
                }

            })
            .catch((err) => {
                console.log(err);
            });
    }

    const [formData, setFormData] = useState({
        property_name: "",
        category: "",
        type: "",
        country: "",
        state: "",
        city: "",
        bedroom: "",
        bath: "",
        price: "",
        description: "",
        parking: "",
        sqft: "",
        latitude: "",
        longitude: "",
        images_arr: "",
        floor_images: "",
    });

    const [errors, setErrors] = useState({
        property_name: "",
        category: "",
        type: "",
        country: "",
        state: "",
        city: "",
        bedroom: "",
        bath: "",
        price: "",
        description: "",
        parking: "",
        sqft: "",
        latitude: "",
        longitude: "",
        images_arr: "",
        floor_images: "",
    });

    // const handleInputChange = (e) => {
    //     const { name, type } = e.target;
    //     let value;

    //     if (type === 'file') {
    //         value = Array.from(e.target.files); // get all files
    //         if (name === 'images_arr') {
    //             setFile(value);
    //             setIsUploaded(true);
    //         } else if (name === 'floor_images') {
    //             setFloorImage(value);
    //             setIsUploadedFloorImage(true);
    //         }
    //     } else {
    //         value = e.target.value;
    //     }

    //     setFormData({ ...formData, [name]: value });
    //     // Reset the corresponding validation error when the user types
    //     setErrors({ ...errors, [name]: "" });
    //     console.log("formData-->", formData);
    // };

    const handleInputChange = (e) => {
        const { name, type } = e.target;
        let value;
      
        if (type === 'file') {
          const files = Array.from(e.target.files); // get all files
          value = files.map(file => IMAGE_BASE_URL + '/' + file.name); // concatenate IMAGE_BASE_URL with the file names
      
          if (name === 'images_arr') {
            setFile(value);
            setIsUploaded(true);
          } else if (name === 'floor_images') {
            setFloorImage(value);
            setIsUploadedFloorImage(true);
          }
        } else {
          value = e.target.value;
        }
      
        setFormData({ ...formData, [name]: value });
        // Reset the corresponding validation error when the user types
        setErrors({ ...errors, [name]: "" });
        // console.log("formData-->", formData);
      };

    const handleSubmit = () => {
        setIsUploaded(true);
        setIsUploadedFloorImage(true);
        console.log("formData-->", formData);
        let isValid = true;
        const newErrors = { ...errors };
        if (!formData.property_name.trim()) {
            newErrors.property_name = "Property Name is required";
            isValid = false;
        }
        if (!formData.category.trim()) {
            newErrors.category = "Category is required";
            isValid = false;
        }
        if (!formData.type.trim()) {
            newErrors.type = "Property Type is required";
            isValid = false;
        }
        if (!formData.country.trim()) {
            newErrors.country = "Country is required";
            isValid = false;
        }
        if (!formData.state.trim()) {
            newErrors.state = "State is required";
            isValid = false;
        }

        if (!formData.city.trim()) {
            newErrors.city = "City is required";
            isValid = false;
        }
        if (!formData.bedroom.trim()) {
            newErrors.bedroom = "Bedroom is required";
            isValid = false;
        }
        if (!formData.bath.trim()) {
            newErrors.bath = "Bathroom is required";
            isValid = false;
        }
        if (!formData.price.trim()) {
            newErrors.price = "Price is required";
            isValid = false;
        }
        if (!formData.description.trim()) {
            newErrors.description = "Description is required";
            isValid = false;
        }
        if (!formData.parking.trim()) {
            newErrors.parking = "Parking is required";
            isValid = false;
        }
        if (!formData.sqft.trim()) {
            newErrors.sqft = "Square Feet is required";
            isValid = false;
        }
        if (!formData.latitude.trim()) {
            newErrors.latitude = "Latitude is required";
            isValid = false;
        }
        if (!formData.longitude.trim()) {
            newErrors.longitude = "Longitude is required";
            isValid = false;
        }
        // if (!formData.images_arr.trim()) {
        //     newErrors.images_arr = "Images is required";
        //     isValid = false;
        // }
        // if (!formData.floor_images.trim()) {
        //     newErrors.floor_images = "Floor Images is required";
        //     isValid = false;
        // }

        setErrors(newErrors);
        if (isValid) {
            axios
                .post(POST_ADD_PROPERTY_API, formData, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `${userData.token}`,
                    },
                })
                .then((response) => {
                    if (response.data.status) {
                        console.log("response-->", response.data.data);
                        setSuccessMsg(response.data.message);
                        setErrorMsg("");
                        navigate('/userProfile');
                    } else {
                        setSuccessMsg("");
                        setErrorMsg(response.data.message);
                        console.log("response-->", response.data.message);
                    }

                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };
    useEffect(() => {
        // Get Category 
        const getCategories = async () => {
            await axios
                .get(GET_ALL_CATEGORY)
                .then((response) => {
                    if (response.data.status) {
                        // console.log("response-->", response.data.data);
                        setCategoryList(response.data.data)
                    }

                })
                .catch((err) => {
                    console.log(err);
                });
        }
        getCategories();
        _getCountry();
    }, [])

    return (
        <>
            <Box>
                <Header />
            </Box>
            {/* <BreadcrumbsBanner /> */}
            <BreadcrumbsBanner title=" Add New Properties" />
            <Box
                component={"div"}
                sx={{
                    padding: {
                        xs: "60px 0px 40px",
                        sm: "30px 0px",
                        md: "50px 0px",
                        lg: "50px 0px",
                    },
                    backgroundColor: theme.palette.primary.white,
                }}
            >
                <Container
                    maxWidth="lg"
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
                    <Box>

                        <Box sx={{
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

                        </Box>
                        <Box
                            sx={{
                                padding: "30px",
                                boxShadow: "0 5px 20px 0 rgba(23, 44, 82, 0.1)",
                                margin: {
                                    xs: "20px",
                                    sm: "20px",
                                    md: "30px",
                                    lg: "50px",
                                },
                                borderRadius: "20px",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontWeight: "500",
                                    marginBottom: "15px",
                                    fontSize: {
                                        xs: "20px",
                                        sm: "20px",
                                        md: "28px",
                                        lg: "28px",
                                    },
                                    textAlign: "center",
                                }}
                                variant="h4"
                                component={"h3"}
                            >
                                Create Property
                            </Typography>
                            <Box
                                sx={{
                                    display: "grid",
                                    gap: "25px",
                                    margin: "25px 0px",
                                }}
                                component={"form"}
                            >
                                <TextField
                                    fullWidth
                                    id="outlined-basic"
                                    required
                                    label="Property Name"
                                    name="property_name"
                                    value={formData.property_name}
                                    variant="outlined"
                                    onChange={handleInputChange}
                                    error={Boolean(errors.property_name)}
                                    helperText={errors.property_name}
                                />
                                <Box
                                    sx={{
                                        display: {
                                            xs: "grid",
                                            sm: "grid",
                                            md: "flex",
                                            lg: "flex"
                                        },
                                        gap: "30px"
                                    }}
                                >
                                    <FormControl
                                        fullWidth
                                        sx={{
                                            width: {
                                                xs: "100%",
                                                sm: "100%",
                                                md: "50%",
                                                lg: "50%"
                                            },
                                            gap: "30px"
                                        }}
                                    >
                                        <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                        <Select
                                            // labelId="demo-simple-select-label"
                                            // id="demo-simple-select"
                                            value={formData.category}
                                            label="Category"
                                            name="category"
                                            // onChange={handleChange}   
                                            onChange={handleInputChange}
                                            variant="outlined"
                                        >
                                            {categoryList && categoryList.map((item, key) => (
                                                <MenuItem value={item.category_name} key={item.category_name} >{item.category_name}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>

                                    <FormControl
                                        fullWidth
                                        sx={{
                                            width: {
                                                xs: "100%",
                                                sm: "100%",
                                                md: "50%",
                                                lg: "50%"
                                            },
                                            gap: "30px"
                                        }}
                                    >
                                        <InputLabel id="demo-simple-select-label">Property Type</InputLabel>
                                        <Select
                                            // labelId="demo-simple-select-label"
                                            // id="demo-simple-select"
                                            value={formData.type}
                                            label="Property Type"
                                            name="type"
                                            variant="outlined"
                                            onChange={handleInputChange}
                                        >
                                            <MenuItem value="Sale">Sale</MenuItem>
                                            <MenuItem value="Rent">Rent</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>

                                <Box
                                    sx={{
                                        display: {
                                            xs: "grid",
                                            sm: "grid",
                                            md: "flex",
                                            lg: "flex"
                                        },
                                        gap: "30px"
                                    }}
                                >
                                    <FormControl
                                        fullWidth
                                        sx={{
                                            width: {
                                                xs: "100%",
                                                sm: "100%",
                                                md: "50%",
                                                lg: "50%"
                                            },
                                            gap: "30px"
                                        }}
                                    >
                                        <InputLabel id="demo-simple-select-label">Country</InputLabel>
                                        <Select

                                            label="Country"
                                            value={formData.country}
                                            name="country"
                                            onChange={handleInputChange}
                                            variant="outlined"
                                        >
                                            {countriesData.map((countr) => (
                                                <MenuItem key={countr._id} value={countr.country_name}>
                                                    {countr.country_name}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                    <TextField
                                        fullWidth
                                        id="outlined-basic"
                                        required
                                        value={formData.bedroom}
                                        name="bedroom"
                                        onChange={handleInputChange}
                                        label="Bedroom"
                                        type="number"
                                        variant="outlined"
                                        sx={{
                                            width: {
                                                xs: "100%",
                                                sm: "100%",
                                                md: "50%",
                                                lg: "50%"
                                            },
                                            gap: "30px"
                                        }}
                                    />

                                </Box>

                                <Box
                                    sx={{
                                        display: {
                                            xs: "grid",
                                            sm: "grid",
                                            md: "flex",
                                            lg: "flex"
                                        },
                                        gap: "30px"
                                    }}
                                >

                                    <FormControl
                                        fullWidth
                                        sx={{
                                            width: {
                                                xs: "100%",
                                                sm: "100%",
                                                md: "50%",
                                                lg: "50%"
                                            },
                                            gap: "30px"
                                        }}
                                    >
                                        <InputLabel id="demo-simple-select-label">State</InputLabel>
                                        <Select
                                            value={formData.state}
                                            label="State"
                                            name="state"
                                            onChange={handleInputChange}
                                            variant="outlined"
                                        >
                                            {formData.country &&
                                                countriesData
                                                    .find((c) => c.country_name === formData.country)
                                                    ?.states.map((state) => (
                                                        <MenuItem key={state._id} value={state.state_name}>
                                                            {state.state_name}
                                                        </MenuItem>
                                                    ))}
                                        </Select>
                                    </FormControl>
                                    <TextField
                                        fullWidth
                                        id="outlined-basic"
                                        required
                                        value={formData.price}
                                        name="price"
                                        onChange={handleInputChange}
                                        label=" Price"
                                        type="number"
                                        variant="outlined"
                                        sx={{
                                            width: {
                                                xs: "100%",
                                                sm: "100%",
                                                md: "50%",
                                                lg: "50%"
                                            },
                                            gap: "30px"
                                        }}
                                    />
                                </Box>

                                <Box
                                    sx={{
                                        display: {
                                            xs: "grid",
                                            sm: "grid",
                                            md: "flex",
                                            lg: "flex"
                                        },
                                        gap: "30px"
                                    }}
                                >
                                    <FormControl
                                        fullWidth
                                        sx={{
                                            width: {
                                                xs: "100%",
                                                sm: "100%",
                                                md: "50%",
                                                lg: "50%"
                                            },
                                            gap: "30px"
                                        }}
                                    >
                                        <InputLabel id="demo-simple-select-label">City</InputLabel>
                                        <Select
                                            // labelId="demo-simple-select-label"
                                            // id="demo-simple-select"
                                            value={formData.city}
                                            label="City"
                                            name="city"

                                            onChange={handleInputChange}
                                            variant="outlined"
                                        >
                                            {formData.country &&
                                                formData.state &&
                                                countriesData
                                                    .find((c) => c.country_name === formData.country)
                                                    ?.states.find((s) => s.state_name === formData.state)
                                                    ?.cities.map((city) => (
                                                        <MenuItem key={city._id} value={city.city_name}>
                                                            {city.city_name}
                                                        </MenuItem>
                                                    ))}
                                        </Select>
                                    </FormControl>

                                    <TextField
                                        fullWidth
                                        id="outlined-basic"
                                        required
                                        label="Bathroom"
                                        name="bath"
                                        value={formData.bath}
                                        onChange={handleInputChange}
                                        type="number"
                                        variant="outlined"
                                        sx={{
                                            width: {
                                                xs: "100%",
                                                sm: "100%",
                                                md: "50%",
                                                lg: "50%"
                                            },
                                            gap: "30px"
                                        }}
                                    />


                                </Box>
                                <Box
                                    sx={{
                                        display: {
                                            xs: "grid",
                                            sm: "grid",
                                            md: "flex",
                                            lg: "flex"
                                        },
                                        gap: "30px"
                                    }}
                                >

                                    <TextField
                                        fullWidth
                                        id="outlined-basic"
                                        required
                                        label="Latitude"
                                        name="latitude"
                                        value={formData.latitude}
                                        onChange={handleInputChange}
                                        type="number"
                                        variant="outlined"
                                        sx={{
                                            width: {
                                                xs: "100%",
                                                sm: "100%",
                                                md: "50%",
                                                lg: "50%"
                                            },
                                            gap: "30px"
                                        }}
                                    />

                                    <TextField
                                        fullWidth
                                        id="outlined-basic"
                                        required
                                        label="Longitude"
                                        name="longitude"
                                        value={formData.longitude}
                                        onChange={handleInputChange}
                                        type="number"
                                        variant="outlined"
                                        sx={{
                                            width: {
                                                xs: "100%",
                                                sm: "100%",
                                                md: "50%",
                                                lg: "50%"
                                            },
                                            gap: "30px"
                                        }}
                                    />


                                </Box>
                                <TextField
                                    fullWidth
                                    multiline
                                    rows={4}
                                    required
                                    id="outlined-basic"
                                    label="Description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    variant="outlined"
                                    error={Boolean(errors.description)}
                                    helperText={errors.description}
                                />
                                <Box
                                    sx={{
                                        display: {
                                            xs: "grid",
                                            sm: "grid",
                                            md: "flex",
                                            lg: "flex"
                                        },
                                        gap: "30px"
                                    }}
                                >
                                    <TextField
                                        fullWidth
                                        id="outlined-basic"
                                        required
                                        label="Square Feet"
                                        value={formData.sqft}
                                        name="sqft"
                                        onChange={handleInputChange}
                                        type="number"
                                        variant="outlined"
                                        sx={{
                                            width: {
                                                xs: "100%",
                                                sm: "100%",
                                                md: "50%",
                                                lg: "50%"
                                            },
                                            gap: "30px"
                                        }}
                                    />

                                    <Button
                                        component="label"
                                        variant="outlined"
                                        sx={{
                                            width: {
                                                xs: '100%',
                                                sm: '100%',
                                                md: '50%',
                                                lg: '50%',
                                            },
                                            gap: {
                                                xs: '25px',
                                                sm: '25px',
                                                md: '25px',
                                                lg: '30px',
                                            },
                                            padding: '16.5px 14px',
                                        }}
                                        className="upload_outline"
                                    >
                                        {isUploaded ? (
                                            <>
                                                <CloudDoneIcon sx={{ marginRight: '10px' }} />
                                                Uploaded
                                            </>
                                        ) : (
                                            <>
                                                <CloudUploadIcon sx={{ marginRight: '10px' }} />
                                                Upload file
                                                <VisuallyHiddenInput type="file" name="images_arr" multiple onChange={handleInputChange} />
                                            </>
                                        )}
                                    </Button>
                                </Box>
                                <FormControl
                                    row
                                    sx={{
                                        width: {
                                            xs: "100%",
                                            sm: "100%",
                                            md: "100%",
                                            lg: "100%"
                                        },
                                        flexDirection:
                                        {
                                            xs: 'column',
                                            sm: 'column',
                                            md: 'row',
                                            lg: 'row',
                                        },
                                        alignItems:
                                        {
                                            xs: "start",
                                            sm: "start",
                                            md: "center",
                                            lg: "center",
                                        },
                                        gap:
                                        {
                                            xs: "5px",
                                            sm: "5px",
                                            md: "10px",
                                            lg: "10px",
                                            xl: "30px",
                                        }
                                    }}
                                >
                                    <FormLabel id="radio-buttons-group-label">Parking :</FormLabel>
                                    <RadioGroup
                                        variant="outlined"
                                        id="outlined-basic"
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="female"
                                        // name="radio-buttons-group"
                                        name="parking"
                                        // value={formData.parking ? "Yes" : "No"}
                                        value={formData.parking}
                                        onChange={handleInputChange}
                                        row
                                        sx={{
                                            gap:
                                            {
                                                xs: "5px",
                                                sm: "5px",
                                                md: "10px",
                                                lg: "10px",
                                                xl: "30px",
                                            }
                                        }}
                                    >
                                        <FormControlLabel value="Yes" control={<Radio />} label="Yes" className="radio_btn" />
                                        <FormControlLabel value="No" control={<Radio />} label="No" className="radio_btn" />
                                    </RadioGroup>
                                </FormControl>
                                <Button
                                    component="label"
                                    variant="outlined"
                                    sx={{
                                        width: {
                                            xs: '100%',
                                            sm: '100%',
                                            md: '50%',
                                            lg: '50%',
                                        },
                                        gap: {
                                            xs: '25px',
                                            sm: '25px',
                                            md: '25px',
                                            lg: '30px',
                                        },
                                        padding: '16.5px 14px',
                                    }}
                                    className="upload_outline"
                                >
                                    {isUploadedFloorImage ? (
                                        <>
                                            <CloudDoneIcon sx={{ marginRight: '10px' }} />
                                            Uploaded floor Image
                                        </>
                                    ) : (
                                        <>
                                            <CloudUploadIcon sx={{ marginRight: '10px' }} />
                                            Upload floor Image file
                                            <VisuallyHiddenInput type="file" name="floor_images" multiple onChange={handleInputChange} />
                                        </>
                                    )}
                                </Button>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: "center"
                                }}>
                                    <Button variant="contained" onClick={() => {
                                        // _addYourProperty();
                                        handleSubmit();
                                    }}
                                        sx={{
                                            width: {
                                                xs: "100%",
                                                sm: "100%",
                                                md: "50%",
                                                lg: "15%",
                                            },
                                            borderRadius: "30px",
                                            // display: { xs: "flex", sm: "flex", lg: "flex" },
                                            alignItems: "center",
                                            justifyContent: "center",
                                            border: "1px solid #dceeea",
                                            color: theme.palette.primary.white,
                                            p: "10px",
                                            background: theme.palette.primary.logoColor,
                                            transition: "background-color 0.3s",
                                            boxShadow: "none",
                                            width: "210px",
                                            minWidth: "210px",
                                            minHeight: "45px",
                                            height: "45px",
                                            "&:hover": {
                                                backgroundColor: theme.palette.primary.logoColor,
                                                border: "none"
                                            },
                                        }}
                                    >Submit</Button>
                                </Box>

                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
            {/* Partner section  */}
            {/* //show success message */}
            {successMsg && (
                <Box
                    sx={{
                        padding: "10px 0px",
                        backgroundColor: theme.palette.primary.Green,
                        textAlign: "center",
                        color: theme.palette.primary.white,
                    }}
                >
                    <Typography
                        component={"p"}
                        sx={{
                            fontSize: "14px",
                        }}
                    >
                        {successMsg}
                    </Typography>
                </Box>
            )}
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
            <Box>
                <Footer />
            </Box>
        </>
    );
};

export default AddNewProperty;
