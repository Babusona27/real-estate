import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  Typography,
} from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import theme from "../Theme";
import TuneIcon from "@mui/icons-material/Tune";
import Checkbox from "@mui/material/Checkbox";
import AutorenewIcon from '@mui/icons-material/Autorenew';
import LetestPosts from "./LetestPosts";
import { useNavigate } from 'react-router-dom';
import { GET_ALL_CATEGORY, GET_ALL_CITIES, GET_ALL_AMENITIES } from "../common/urls";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setSearch, removeSearch } from "../redux/reducers/SearchReducer";
import { useLocation } from "react-router-dom";
import queryString from 'query-string';

const PropertyLeftBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const params = queryString.parse(location.search);
  // console.log('params', params);
  const [propertyType, setProperty] = React.useState(params.propertyType || "");
  const [selectedCategory, setSelectedCategory] = React.useState(params.category || "");
  const [open, setOpen] = React.useState(false);
  const [categoryList, setCategoryList] = useState(false);
  const [cityList, setCityList] = useState(false);
  const [city, setCity] = useState(params.city || "");
  const [bedroom, setBedroom] = useState(params.bedroom || "");
  const [bath, setBath] = useState(params.bath || "");
  const [amenities, setAmenities] = useState("");
  const [checkedAmenities, setCheckedAmenities] = useState({});


  const handlePropertyType = (event) => {
    setProperty(event.target.value);
  };
  const handleCategory = (event) => {
    setSelectedCategory(event.target.value);
  };
  const handleChange3 = (event) => {
    setCity(event.target.value);
  };
  const handleChange4 = (event) => {
    setBedroom(event.target.value);
  };
  const handleChange5 = (event) => {
    setBath(event.target.value);
  };
  const handleCheckboxChange = (event) => {
    const newCheckedAmenities = { ...checkedAmenities, [event.target.name]: event.target.checked };
    setCheckedAmenities(newCheckedAmenities);
    localStorage.setItem('checkedAmenities', JSON.stringify(newCheckedAmenities));
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  // renge slider
  const [range, setRange] = useState([0, 1000]); // Initial range values

  const handleChangeNew = (event, newValue) => {
    setRange(newValue);
    if (range !== "") {
      dispatch(
        setSearch({
          key: 'price_from',
          item: range[0],
        }),
      );
      dispatch(
        setSearch({
          key: 'price_to',
          item: range[1],
        }),
      );
    } else {
      dispatch(removeSearch({ keyToRemove: 'price_from' }));
      dispatch(removeSearch({ keyToRemove: 'price_to' }));
    }
  };
  const changeRoute = () => {
    let search_params = "";
    if (propertyType !== "") {
      search_params = search_params + 'propertyType=' + propertyType;
    }
    if (selectedCategory !== "") {
      search_params = search_params + '&category=' + selectedCategory;
    }
    if (city !== "") {
      search_params = search_params + '&city=' + city;
    }
    if (bedroom !== "") {
      search_params = search_params + '&bedroom=' + bedroom;
    }
    if (bath !== "") {
      search_params = search_params + '&bath=' + bath;
    }
    if (range[0] !== 0) {
      search_params = search_params + '&price_from=' + range[0];
    }
    if (range[1] !== 1000) {
      search_params = search_params + '&price_to=' + range[1];
    }
    if (checkedAmenities !== "") {
      const amenities = [];
      for (const key in checkedAmenities) {
        if (checkedAmenities.hasOwnProperty(key) && checkedAmenities[key]) {
          amenities.push(key);
        }
      }
      if (amenities.length > 0) {
        search_params = search_params + '&amenities=' + amenities.join('%');
      }
    }
    console.log('search_params_property_left_bar', search_params);
    navigate('/Properties?' + search_params);

  };




  const resetFilter = () => {
    setProperty("");
    setSelectedCategory("");
    setCity("");
    setBedroom("");
    setBath("");
    setCheckedAmenities({});

    dispatch(removeSearch({ keyToRemove: 'propertyType' }));
    dispatch(removeSearch({ keyToRemove: 'category' }));
    dispatch(removeSearch({ keyToRemove: 'city' }));
    dispatch(removeSearch({ keyToRemove: 'bedroom' }));
    dispatch(removeSearch({ keyToRemove: 'bath' }));
    dispatch(removeSearch({ keyToRemove: 'price_from' }));
    dispatch(removeSearch({ keyToRemove: 'price_to' }));
    // reset range slider
    setRange([0, 1000]);
    // resert checkbox
    // const newCheckedAmenities = {};
    // amenities.map((item, key) => {
    //   newCheckedAmenities[item.title] = false;
    // })

    // setCheckedAmenities(newCheckedAmenities);

    // reset route
    navigate('/Properties');

  }


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
    // Get Country
    const getCities = async () => {
      await axios
        .get(GET_ALL_CITIES)
        .then((response) => {
          if (response.data.status) {
            // console.log("response-->", response.data.data);
            setCityList(response.data.data)
          }

        })
        .catch((err) => {
          console.log(err);
        });
    }
    // Get Amenities
    const getAmenities = async () => {
      await axios
        .get(GET_ALL_AMENITIES)
        .then((response) => {
          if (response.data.status) {
            // console.log("responseAmenities-->", response.data.amenities);
            setAmenities(response.data.amenities)
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getAmenities();
    getCities();
    getCategories();
    const storedCheckedAmenities = localStorage.getItem('checkedAmenities');
    if (storedCheckedAmenities) {
      setCheckedAmenities(JSON.parse(storedCheckedAmenities));
    }
    // console.log('checkedAmenities', checkedAmenities);

  }, [checkedAmenities])

  return (
    <Box flex={2} paddingLeft={{ xs: '0px', md: '15px' }} paddingRight={{ xs: '0px', md: '15px' }}>
      <Box sx={{ padding: "25px 30px 30px", background: theme.palette.primary.white, boxShadow: "0 4px 18px 0 rgba(194, 200, 213, 0.3)", borderRadius: "6px", marginBottom: "30px" }}>
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
          Advanced Search
        </Typography>
        {/* category type section */}
        <Box className={'select_Box_new'} sx={{ marginBottom: "25px" }}>
          <FormControl fullWidth sx={{ color: theme.palette.primary.lightGrey }}>
            <InputLabel id="demo-controlled-open-select-label">Property Type</InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value={propertyType}
              label="Property Type"
              onChange={handlePropertyType}
            >

              <MenuItem value={""}>Property Type</MenuItem>
              <MenuItem value={"sell"}>Sell</MenuItem>
              <MenuItem value={"rent"}>Rent</MenuItem>

            </Select>
          </FormControl>
        </Box>
        {/* category section */}

        <Box sx={{ marginBottom: "25px" }}>
          <FormControl fullWidth>
            <InputLabel htmlFor="grouped-select">All Categories</InputLabel>
            <Select
              id="grouped-select"
              value={selectedCategory}
              label="All Categories"
              onChange={handleCategory}>

              <MenuItem value="">All Categories</MenuItem>
              {categoryList && categoryList.map((item, key) => (
                <MenuItem value={item.category_name} key={item.category_name} >{item.category_name}</MenuItem>
              ))}

            </Select>
          </FormControl>
        </Box>
        <Box sx={{ marginBottom: "25px" }}>
          <FormControl fullWidth>
            <InputLabel htmlFor="grouped-select">All Cities</InputLabel>
            <Select
              id="grouped-select"
              value={city}
              label="All Cities"
              onChange={handleChange3}>
              <MenuItem value={"city1"}>All Cities</MenuItem>
              {cityList && cityList.map((item, key) => (
                <MenuItem value={item.city_name} key={item.city_name} >{item.city_name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ marginBottom: "25px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span className="price">Price</span>
            <Typography
              variant="h6"
              className="price_value"
              sx={{
                textAlign: "right",
                fontSize: "16px",
                lineHeight: "1",
                color: theme.palette.primary.logoColor,
              }}
            >
              {" "}
              ${range[0]} - ${range[1]}
            </Typography>
          </Box>
          <Slider
            value={range}
            onChange={handleChangeNew}
            aria-labelledby="range-slider"
            max={2000} // Set your max price range
            classes={{
              thumb: "custom-thumb",
              track: "custom-track",
            }}
          />
        </Box>
        <Box sx={{ marginBottom: "25px" }}>
          <Accordion sx={{ boxShadow: "none", padding: "0px" }}>
            <AccordionSummary
              sx={{ padding: "0px" }}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Box
                sx={{
                  display: "flex",
                  gap: "15px",
                  alignItems: "center",
                }}
              >
                <IconButton
                  className="filter_btn"
                  sx={{
                    height: "50px",
                    width: "53px",
                    borderRadius: "3px",
                    backgroundColor: theme.palette.primary.white,
                    border: "1px solid #e1e5ee",
                    color: theme.palette.primary.logoColor,
                    transition: "0.4s",
                  }}
                >
                  <TuneIcon />
                </IconButton>
                <Typography
                  sx={{
                    fontSize: "16px",
                    color: theme.palette.primary.logoColor,
                  }}
                  variant="span"
                >
                  Amenities
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: "0px" }}>
              <FormGroup className="from_group_check">
                {amenities && amenities.map((item, key) => (
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checkedAmenities[item.title] || false}
                        onChange={handleCheckboxChange}
                        name={item.title}
                      />
                    }
                    label={item.title}
                    key={item.title}
                  />
                ))
                }
              </FormGroup>
            </AccordionDetails>
          </Accordion>
        </Box>
        <Box sx={{ marginBottom: "25px" }}>
          <FormControl fullWidth>
            <InputLabel htmlFor="grouped-select">Bedroom</InputLabel>
            <Select
              id="grouped-select"
              value={bedroom}
              label="Bedroom"
              onChange={handleChange4}>
              <MenuItem value="1"> 1</MenuItem>
              <MenuItem value={"2"}> 2</MenuItem>
              <MenuItem value={"3"}> 3</MenuItem>
              <MenuItem value={"4"}> 4</MenuItem>
              <MenuItem value={"5"}> 5</MenuItem>
              <MenuItem value={"6"}> 6</MenuItem>
              <MenuItem value={"7"}> 7</MenuItem>
              <MenuItem value={"8"}> 8</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ marginBottom: "25px" }}>
          <FormControl fullWidth>
            <InputLabel htmlFor="grouped-select">Bath</InputLabel>
            <Select
              id="grouped-select"
              value={bath}
              label="Bath"
              onChange={handleChange5}
            >
              <MenuItem value={"1"}> 1</MenuItem>
              <MenuItem value={"2"}> 2</MenuItem>
              <MenuItem value={"3"}> 3</MenuItem>
              <MenuItem value={"4"}> 4</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box fullWidth sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Button sx={{
            width: "65%",
            backgroundColor: theme.palette.primary.logoColor,
            height: "45px",
            color: theme.palette.primary.white,
            "&:hover":
            {
              backgroundColor: "#00a376"
            },
          }}
            onClick={changeRoute}>Find Property</Button>
          <Button sx={{
            width: "32%",
            backgroundColor: theme.palette.primary.white,
            color: theme.palette.primary.logoColor,
            border: "2px solid #1d8ea2",
            height: "45px",
            "&:hover":
            {
              backgroundColor: theme.palette.primary.logoColor,
              color: theme.palette.primary.white,
            },
          }}
            onClick={resetFilter}>
            <AutorenewIcon />
            <Typography variant="span">Reset</Typography>
          </Button>
        </Box>
      </Box>
      <Box sx={{ padding: "25px 30px 30px", background: theme.palette.primary.white, boxShadow: "0 4px 18px 0 rgba(194, 200, 213, 0.3)", borderRadius: "6px", marginBottom: "30px" }}>
        <Typography
          sx={{
            fontSize: "22px",
            color: "#212121",
            lineHeight: "30px",
            marginBottom: "25px",
            fontWeight: "500",
          }} variant="h6" >Latest Listings
        </Typography>
        <LetestPosts />
      </Box>
    </Box>
  );
};

export default PropertyLeftBar;
