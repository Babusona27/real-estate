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
import { POST_ADD_PROPERTY_API, GET_ALL_CATEGORY, GET_ALL_COUNTRIES_API } from '../common/urls';
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
    console.log('userData', userData);
    const [propertyName, setPropertyName] = useState("");
    const [category, setCategory] = useState("");
    const [propertyType, setPropertyType] = useState("");
    const [country, setCountry] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [bedroom, setBedroom] = useState("");
    const [bathroom, setBathroom] = useState("");
    const [squareFeet, setSquareFeet] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [parking, setParking] = useState(false);
    const [file, setFile] = useState(null);
    const [isUploaded, setIsUploaded] = useState(false);
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");

    const [fileError, setFileError] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const [categoryList, setCategoryList] = useState(false);
    const [countriesData, setCountriesData] = useState([]);

    const _getCountry = async () => {
        await axios
            .get(GET_ALL_COUNTRIES_API)
            .then((response) => {
                if (response.data.status) {
                    // console.log("response-country->", response.data.data);
                    // setCountry(response.data.data)
                    setCountriesData(response.data.data)
                }

            })
            .catch((err) => {
                console.log(err);
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
    const handleFileChange = (event) => {
        const files = event.target.files[0];
        setFile(files);
        setIsUploaded(false)
    };
    // const handleUpload = () => {
    //     // Implement your file upload logic here
    //     if (file) {
    //         console.log('Selected File:', file);
    //         // You can use FormData, Axios, or any other method to upload the file to a server
    //         setIsUploaded(true)
    //     } else {
    //         console.log('No file selected');
    //     }
    // };
    // const _addYourProperty = async () => {
    //     setIsUploaded(true)
    //     const formData = JSON.stringify({
    //         property_name: propertyName,
    //         category: category,
    //         type: propertyType,
    //         country: country,
    //         state: state,
    //         city: city,
    //         bedroom: bedroom,
    //         bath: bathroom,
    //         price: price,
    //         description: description,
    //         parking: parking,
    //         sqft: squareFeet,
    //         latitude: latitude,
    //         longitude: longitude,
    //         images_arr: file,

    //     })
    //     console.log("formData-->", formData);
    //     await axios
    //         .post(POST_ADD_PROPERTY_API, formData, {
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 "Authorization": `${userData.data.token}`,
    //             },
    //         })
    //         .then((response) => {
    //             if (response.data.status) {
    //                 console.log("response-->", response.data.data);
    //                 setSuccessMsg(response.data.message);
    //                 setErrorMsg("");
    //                 navigate('/userProfile');
    //             } else {
    //                 setSuccessMsg("");
    //                 setErrorMsg(response.data.message);
    //             }

    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }
    const _addYourProperty = async () => {
        setIsUploaded(true);
      
        const formData = new FormData();
        formData.append("property_name", propertyName);
        formData.append("category", category);
        formData.append("type", propertyType);
        formData.append("country", country);
        formData.append("state", state);
        formData.append("city", city);
        formData.append("bedroom", bedroom);
        formData.append("bath", bathroom);
        formData.append("price", price);
        formData.append("description", description);
        formData.append("parking", parking);
        formData.append("sqft", squareFeet);
        formData.append("latitude", latitude);
        formData.append("longitude", longitude);
      
        // Append each file to the form data
        if (file) {
          if (Array.isArray(file)) {
            for (let i = 0; i < file.length; i++) {
              formData.append("images_arr", file[i]);
            }
          } else {
            formData.append("images_arr", file);
          }
        }
      
        console.log("formData-->", formData);
      
        try {
          const response = await axios.post(POST_ADD_PROPERTY_API, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `${userData.data.token}`,
            },
          });
      
          if (response.data.status) {
            console.log("response-->", response.data.data);
            setSuccessMsg(response.data.message);
            setErrorMsg("");
            navigate('/userProfile');
          } else {
            setSuccessMsg("");
            setErrorMsg(response.data.message);
          }
        } catch (err) {
          console.error(err);
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
                                    value={propertyName}
                                    variant="outlined"
                                    onChange={(event) => {
                                        setPropertyName(event.target.value);
                                    }}
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
                                            value={category}
                                            label="Category"
                                            // onChange={handleChange}   
                                            onChange={(event) => {
                                                setCategory(event.target.value);
                                            }}
                                            variant="outlined"
                                        >
                                            {categoryList && categoryList.map((item, key) => (
                                                <MenuItem value={item.category_name} key={item.category_name} >{item.category_name}</MenuItem>
                                            ))}
                                            {/* <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem> */}
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
                                            value={propertyType}
                                            label="Property Type"
                                            variant="outlined"
                                            onChange={(event) => {
                                                setPropertyType(event.target.value);
                                            }}
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
                                            value={country}
                                            onChange={countryChange}
                                            variant="outlined"
                                        >
                                            {/* <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem> */}
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
                                        value={bedroom}
                                        onChange={(event) => { setBedroom(event.target.value) }}
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
                                            // labelId="demo-simple-select-label"
                                            // id="demo-simple-select"
                                            value={state}
                                            label="State"
                                            onChange={stateChange}
                                            variant="outlined"
                                        >
                                            {country &&
                                                countriesData
                                                    .find((c) => c.country_name === country)
                                                    ?.states.map((state) => (
                                                        <MenuItem key={state._id} value={state.state_name}>
                                                            {state.state_name}
                                                        </MenuItem>
                                                    ))}
                                            {/* <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem> */}
                                        </Select>
                                    </FormControl>
                                    <TextField
                                        fullWidth
                                        id="outlined-basic"
                                        required
                                        value={price}
                                        onChange={(event) => { setPrice(event.target.value) }}
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
                                            value={city}
                                            label="City"
                                            // onChange={handleChange}
                                            onChange={(event) => {
                                                setCity(event.target.value);
                                            }}
                                            variant="outlined"
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
                                            {/* <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem> */}
                                        </Select>
                                    </FormControl>

                                    <TextField
                                        fullWidth
                                        id="outlined-basic"
                                        required
                                        label="Bathroom"
                                        value={bathroom}
                                        onChange={(event) => { setBathroom(event.target.value) }}
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
                                        value={latitude}
                                        onChange={(event) => { setLatitude(event.target.value) }}
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
                                        value={longitude}
                                        onChange={(event) => { setLongitude(event.target.value) }}
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
                                    value={description}
                                    onChange={(event) => { setDescription(event.target.value) }}
                                    variant="outlined"
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
                                        value={squareFeet}
                                        onChange={(event) => { setSquareFeet(event.target.value) }}
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
                                    {/* <Button component="label" variant="outlined" startIcon={<CloudUploadIcon />}
                                        sx={{
                                            width: {
                                                xs: "100%",
                                                sm: "100%",
                                                md: "50%",
                                                lg: "50%"
                                            },
                                            gap: {
                                                xs: "25px",
                                                sm: "25px",
                                                md: "25px",
                                                lg: "30px",
                                            },
                                            padding: "16.5px 14px",
                                        }}
                                        className="upload_outline"
                                        onClick={handleUpload}
                                    >
                                        Upload file
                                        <VisuallyHiddenInput type="file" multiple onChange={handleFileChange} />
                                    </Button> */}

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
                                                <VisuallyHiddenInput type="file" multiple onChange={handleFileChange} />
                                            </>
                                        )}
                                        {/* <Button variant="contained" color="primary" onClick={handleUpload}>
                                            Upload
                                        </Button> */}
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
                                        name="radio-buttons-group"
                                        value={parking ? "Yes" : "No"}
                                        onChange={(event) => {
                                            // setParking(event.target.value);
                                            setParking(event.target.value === "Yes");
                                        }}
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
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: "center"
                                }}>
                                    <Button variant="contained" onClick={() => {
                                        _addYourProperty();
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
                                {/* <Box
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
                                        label="Name"
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
                                        label="Name"
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

                                </Box> */}

                            </Box>
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
            <Box>
                <Footer />
            </Box>
        </>
    );
};

export default AddNewProperty;
