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
              display: { xs: "block", sm: "block", md: "block", lg: "flex" },
              justifyContent: "space-between",
              margin: "30px 0px",
            }}
          >
            <Box
              flex={2}
              paddingLeft={{ xs: "0px", md: "15px" }}
              paddingRight={{ xs: "0px", md: "15px" }}
              className={"LeftBar"}
              sx={{
                display: "grid",
                gap: "15px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap:"50px",
                }}
              >
                  <FormControl
                  fullWidth
                >
                  <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
                  <Select
                    value={sortValue}
                    onChange={handleSortChange}
                    variant="outlined"
                    label="Sort by"
                    fullWidth
                  >
                    <MenuItem value="">None</MenuItem>
                    <MenuItem value="name">Sort by Name</MenuItem>
                    <MenuItem value="date">Sort by Date</MenuItem>
                    {/* Add more sorting options as needed */}
                  </Select>
                </FormControl>
                <TextField
                  placeholder="Search..."
                  fullWidth
                  variant="outlined"
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
              
              </Box>
            </Box>
            <Box
              flex={1}
              paddingLeft={{ xs: "0px", md: "15px" }}
              paddingRight={{ xs: "0px", md: "15px" }}
              className={"RightBar"}
            >
              <Box
                sx={{
                  padding: "30px",
                  background: theme.palette.primary.white,
                  border: "1px solid #ebebeb",
                  borderRadius: "8px",
                  marginBottom: "25px",
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
                suraj
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
