import styled from "@emotion/styled";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
// import { useState, useEffect } from "react";
import PropertyPost from "./PropertyPost";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../redux/reducers/UserReducer";
import theme from "../Theme";
import { useNavigate } from 'react-router-dom';

const Property = () => {
  const navigate = useNavigate();
  const propertyList = useSelector((state) => state.PropertyListReducer.value);
  const propertyCount = useSelector((state) => state.PropertyListReducer.count);
  const [p, setP] = useState(1);
  const [perpage, setPerpage] = useState(5);

  // console.log("propertyCount", propertyCount);
  const userData = useSelector((state) => state.UserReducer.value);
  //define handleLogout function
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOut());
  };

  // short by filter
  const [sortOption, setOption] = useState(localStorage.getItem('sortOption') || 'Oldest to Newest');

  const handleSortChange = (event) => {
    // console.log("sorting", event.target.value);
    setOption(event.target.value);
    const selectedOption = event.target.value;
    localStorage.setItem('sortOption', selectedOption);
    let search_params = "";
    let sortField, sortOrder;
    switch (selectedOption) {
      case "Oldest to Newest":
        sortField = "posted_on";
        sortOrder = "asc";
        search_params = search_params + 'sortField=' + sortField + '&sortOrder=' + sortOrder;
        break;
      case "Newest to Oldest":
        sortField = "posted_on";
        sortOrder = "desc";
        search_params = search_params + 'sortField=' + sortField + '&sortOrder=' + sortOrder;
        break;
      case "High to Low":
        sortField = "price";
        sortOrder = "desc";
        search_params = search_params + 'sortField=' + sortField + '&sortOrder=' + sortOrder;
        break;
      case "Low to High":
        sortField = "price";
        sortOrder = "asc";
        search_params = search_params + 'sortField=' + sortField + '&sortOrder=' + sortOrder;
        break;
      default:
        sortField = "posted_on";
        sortOrder = "asc";
        search_params = search_params + 'sortField=' + sortField + '&sortOrder=' + sortOrder;
    }
    // console.log('search_params_property_sorting', search_params);
    navigate('/properties?' + search_params);
  };
  useEffect(() => {
    // Check if there is a saved value in localStorage and set it
    const savedSortOption = localStorage.getItem('sortOption');
    if (savedSortOption) {
      setOption(savedSortOption);
    }
    return () => {
      // Reset the sort option when the component unmounts
      localStorage.removeItem('sortOption');
    }
  }, []);

  return (
    <Box flex={4} p={{ xs: "0px", md: "15px" }} m={0}>
      <HeaderArea sx={{
        display: { xs: "block", sm: "block", md: "block", lg: "block" },
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <Box sx={{
          display: { xs: "block", sm: "block", md: "flex", lg: "flex" },
          justifyContent: "space-between",
          alignItems: "center",
        }}>

          <Typography variant="h6">Showing {p}–{Math.round(propertyCount / perpage)} of {propertyCount} results</Typography>
          <Box sx={{
            display: { xs: "flex", sm: "flex", md: "flex", lg: "flex" },
            justifyContent: "space-between",
            alignItems: { xs: "end", sm: "center", md: "center", lg: "center" },
            gap: "20px",
          }}>
            <Box
              sx={{
                display: { xs: "grid", sm: "grid", md: "flex", lg: "flex" },
                justifyContent: "space-between",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <Box>
                <Typography variant="subtitle1">Sort by:</Typography>
              </Box>
              <Box sx={{ minWidth: "100px", minHeight: "35px" }}>
                <FormControl className="SortBy" sx={{
                  display: "block",
                  width: "100%"
                }} fullwidth='true'>
                  <InputLabel sx={{
                    padding: "0px",
                    top: "-5px",
                    fontSize: "14px"
                  }} id="demo-simple-select-label">
                    Sort Option
                  </InputLabel>
                  <Select
                    sx={{
                      width: "150px",
                      height: "40px",
                      padding: "0px 14px"
                    }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={sortOption}
                    label="Sort Option"
                    onChange={handleSortChange}
                  >
                    <MenuItem value={"Oldest to Newest"}>Oldest to Newest</MenuItem>
                    <MenuItem value={"Newest to Oldest"}>Newest to Oldest</MenuItem>
                    <MenuItem value={"High to Low"}>High to Low</MenuItem>
                    <MenuItem value={"Low to High"}>Low to High</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
            <Button
              className="customBtnStyle"
              sx={{
                fontFamily: theme.palette.primary.Roboto,
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
              onClick={userData ? handleLogout : undefined}
            >
              {userData != null ? <Typography>LogOut</Typography> : <></>}
            </Button>
          </Box>

        </Box>

      </HeaderArea>
      <Post
        className="post"
        sx={{
          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(2, calc(50% - 15px))",
            lg: "repeat(2, calc(50% - 15px))",
          },
        }}
      >
        {propertyList &&
          propertyList.map((item, key) => (
            <PropertyPost propertyDetails={item} key={key} />
          ))}
      </Post>
    </Box>
  );
};
const HeaderArea = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "25px",
}));
const Post = styled(Box)(({ theme }) => ({
  display: "grid",
  alignItems: "center",
  // gridTemplateColumns:"repeat(2, calc(50% - 15px))",
  gap: "30px",
}));
export default Property;
