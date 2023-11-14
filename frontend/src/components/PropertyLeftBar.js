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
  Input,
  InputLabel,
  ListSubheader,
  MenuItem,
  Select,
  Slider,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import theme from "../Theme";
import TuneIcon from "@mui/icons-material/Tune";
import Checkbox from "@mui/material/Checkbox";
import AutorenewIcon from '@mui/icons-material/Autorenew';
import LetestPosts from "./LetestPosts";
import { useNavigate } from 'react-router-dom';


const PropertyLeftBar = () => {
  const navigate = useNavigate();
  const [val, setVal] = React.useState("");
  const [val1, setVal1] = React.useState("");
  const [val2, setVal2] = React.useState("");
  const [val3, setVal3] = React.useState("");
  const [val4, setVal4] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange1 = (event) => {
    setVal(event.target.value);
  };
  const handleChange2 = (event) => {
    setVal1(event.target.value);
  };
  const handleChange3 = (event) => {
    setVal2(event.target.value);
  };
  const handleChange4 = (event) => {
    setVal3(event.target.value);
  };
  const handleChange5 = (event) => {
    setVal4(event.target.value);
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
  };
  const changeRoute = () => {
    // Navigate to a new route
    // navigate('/new-route');
  
    // Navigate to a route with query parameters
    navigate('/Properties?param1=value1&param2=value2');
  };


  return (
    <Box flex={2} paddingLeft={{ xs: '0px', md: '15px' }} paddingRight={{ xs: '0px', md: '15px' }}>
      <Box sx={{ padding: "25px 30px 30px", background: theme.palette.primary.white, boxShadow:"0 4px 18px 0 rgba(194, 200, 213, 0.3)", borderRadius:"6px", marginBottom:"30px" }}>
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
        <Box marginBottom={"25px"}>
          <Input
            className="form_input"
            fullWidth
            size="lg"
            sx={{
              border: "1px solid #e7e7e7",
              height: "50px",
              paddingLeft: "15px",
              color: theme.palette.primary.lightGrey,
              fontSize: "15px",
              fontWeight: "400",
              borderRadius: "3px",
            }}
            placeholder="What are you looking for?"
            variant="soft"
          />
        </Box>
        <Box sx={{ marginBottom: "25px" }}>
          <FormControl fullWidth sx={{ color: theme.palette.primary.lightGrey }}>
            <InputLabel id="demo-controlled-open-select-label">Property Type</InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value={val}
              label="Property Type"
              onChange={handleChange1}
            >
              <MenuItem value='sale'>Sale</MenuItem>
              <MenuItem value='rent'>Rent</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ marginBottom: "25px" }}>
          <FormControl fullWidth>
          <InputLabel htmlFor="grouped-select">All Categories</InputLabel>
          <Select 
            id="grouped-select"
            value={val1}
            label="All Categories"
            onChange={handleChange2}>
              <MenuItem value={"Category1"}>All Categories</MenuItem>
              <ListSubheader>Category 1</ListSubheader>
              <MenuItem value={"Category2"}>Option 1</MenuItem>
              <MenuItem value={"Category3"}>Option 2</MenuItem>
              <ListSubheader>Category 2</ListSubheader>
              <MenuItem value={"Category4"}>Option 3</MenuItem>
              <MenuItem value={"Category5"}>Option 4</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ marginBottom: "25px" }}>
          <FormControl fullWidth>
          <InputLabel htmlFor="grouped-select">All Cities</InputLabel>
          <Select 
            id="grouped-select"
            value={val2}
            label="All Cities"
            onChange={handleChange3}>
              <MenuItem value={"city1"}>All Cities</MenuItem>
              <ListSubheader>Category 1</ListSubheader>
              <MenuItem value={"city2"}>Option 1</MenuItem>
              <MenuItem value={"city3"}>Option 2</MenuItem>
              <ListSubheader>Category 2</ListSubheader>
              <MenuItem value={"city4"}>Option 3</MenuItem>
              <MenuItem value={"city5"}>Option 4</MenuItem>
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
                <FormControlLabel control={<Checkbox />} label="TV Cable" />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Air Conditioning"
                />
                <FormControlLabel control={<Checkbox />} label="Barbeque" />
                <FormControlLabel control={<Checkbox />} label="Gym" />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Swimming Pool"
                />
                <FormControlLabel control={<Checkbox />} label="Laundry" />
                <FormControlLabel control={<Checkbox />} label="Microwave" />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Outdoor Shower"
                />
                <FormControlLabel control={<Checkbox />} label="Lawn" />
                <FormControlLabel control={<Checkbox />} label="Refrigerator" />
                <FormControlLabel control={<Checkbox />} label="Sauna" />
                <FormControlLabel control={<Checkbox />} label="Washer" />
              </FormGroup>
            </AccordionDetails>
          </Accordion>
        </Box>
        <Box sx={{ marginBottom: "25px" }}>
          <FormControl fullWidth>
          <InputLabel htmlFor="grouped-select">Bedroom</InputLabel>
            <Select 
            id="grouped-select"
            value={val3}
            label="Bedroom"
            onChange={handleChange4}>
              <MenuItem value={"bed1"}> 1</MenuItem>
              <MenuItem value={"bed2"}> 2</MenuItem>
              <MenuItem value={"bed3"}> 3</MenuItem>
              <MenuItem value={"bed4"}> 4</MenuItem>
              <MenuItem value={"bed5"}> 5</MenuItem>
              <MenuItem value={"bed6"}> 6</MenuItem>
              <MenuItem value={"bed7"}> 7</MenuItem>
              <MenuItem value={"bed8"}> 8</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ marginBottom: "25px" }}>
          <FormControl fullWidth>
            <InputLabel htmlFor="grouped-select">Bath</InputLabel>
            <Select 
            id="grouped-select"
            value={val4}
            label="Bath"
            onChange={handleChange5}
            >
              <MenuItem value={"Bath1"}> 1</MenuItem>
              <MenuItem value={"Bath2"}> 2</MenuItem>
              <MenuItem value={"Bath3"}> 3</MenuItem>
              <MenuItem value={"Bath4"}> 4</MenuItem>
            </Select>
          </FormControl>
        </Box>
<Box fullWidth sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
      <Button sx={{width:"65%",
       backgroundColor:theme.palette.primary.logoColor, 
       height:"45px",
        color:theme.palette.primary.white, 
        "&:hover": 
        { backgroundColor:"#00a376"
         },
         }}
         onClick={changeRoute}>Find Property</Button>
      <Button sx={{width:"32%",
       backgroundColor:theme.palette.primary.white, 
       color:theme.palette.primary.logoColor, 
       border:"2px solid #1d8ea2",
        height:"45px",
        "&:hover": 
        { backgroundColor:theme.palette.primary.logoColor,
        color:theme.palette.primary.white,
         },
        }}>
      <AutorenewIcon/>
        <Typography variant="span">Reset</Typography>
      </Button>
</Box>
      </Box>
      <Box sx={{ padding: "25px 30px 30px", background: theme.palette.primary.white, boxShadow:"0 4px 18px 0 rgba(194, 200, 213, 0.3)", borderRadius:"6px", marginBottom:"30px" }}>
        <Typography
          sx={{
            fontSize: "22px",
            color: "#212121",
            lineHeight: "30px",
            marginBottom: "25px",
            fontWeight: "500",
          }} variant="h6" >Latest Listings
        </Typography>
 <LetestPosts/>
      </Box>
    </Box>
  );
};

export default PropertyLeftBar;
