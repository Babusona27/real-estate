import {
  Box,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
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
import SearchIcon from "@mui/icons-material/Search";
import PersonalPropertyListing from "../components/PersonalPropertyListing";

const PersonalPropertyList = () => {
  // SearchAndFilter

  const [sortValue, setSortValue] = useState("");

  const handleSearch = () => {
    // Implement your search logic here
    console.log("Searching...");
  };

  const handleSortChange = (event) => {
    setSortValue(event.target.value);
    // Implement your sorting logic here
    console.log(`Sorting by: ${event.target.value}`);
  };
  // SearchAndFilter

  return (
    <>
      <Box>
        <Header />
      </Box>
      <BreadcrumbsBanner title="Personal Property List" />
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
              margin: "30px 0px",
            }}
          >
            <Box>
              <Box
                sx={{
                  display: { xs: "grid", sm: "grid", md: "flex", lg: "flex" },
                  justifyContent:{
                    xs: "center",
                    sm: "center",
                    md: "start",
                    lg: "start",
                  },
                  alignItems: "center",
                  gap: "30px",
                }}
              >
                <FormControl>
                  <InputLabel
                    sx={{
                      padding: "0px 14px",
                      top: "-5px",
                    }}
                    id="demo-simple-select-label"
                  >
                    Sort by
                  </InputLabel>
                  <Select
                    value={sortValue}
                    onChange={handleSortChange}
                    variant="outlined"
                    label="Sort by"
                    sx={{
                      width: {
                        xs: "100%",
                        sm: "100%",
                        md: "200px",
                        lg: "200px",
                      },
                      height: "45px",
                      padding: "0px 14px",
                    }}
                  >
                    <MenuItem value="">None</MenuItem>
                    <MenuItem value="name">Sort by Name</MenuItem>
                    <MenuItem value="date">Sort by Date</MenuItem>
                    {/* Add more sorting options as needed */}
                  </Select>
                </FormControl>
                <FormControl
                  sx={{
                    width: {
                      xs: "100%",
                      sm: "100%",
                      md: "200px",
                      lg: "200px",
                    },
                    height: "45px",
                  }}
                  className="search_fld"
                >
                  <InputLabel
                    sx={{
                      padding: "0px 14px",
                      top: "-5px",
                    }}
                    id="demo-simple-select-label"
                  ></InputLabel>
                  <TextField
                    sx={{
                      width: {
                        xs: "100%",
                        sm: "100%",
                        md: "200px",
                        lg: "200px",
                      },
                      height: "100%",
                      minHeight: "45px",
                      padding: "0px 0px",
                    }}
                    variant="outlined"
                    label="Search..."
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={handleSearch}>
                            <SearchIcon />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </FormControl>
              </Box>
              <Box
                sx={{
                  display: "grid",
                  gap: "15px",
                  marginTop: "25px",
                }}
              >
                <PersonalPropertyListing />
                <PersonalPropertyListing />
                <PersonalPropertyListing />
                <PersonalPropertyListing />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default PersonalPropertyList;
