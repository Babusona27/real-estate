import {
  Box,
  Button,
  Container,
  FormControl,
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

const TabPanel = ({ children, value, index }) => (
<div className={`tab-panel ${value === index ? 'active' : ''}`}>
    {value === index && <Box padding={"20px 0px"}>{children}</Box>}
  </div>
);

const Home = () => {
  const [value1, setVal] = React.useState("");
  const [value2, setVal1] = React.useState("");
  const [value3, setVal2] = React.useState("");
  const [value4, setVal3] = React.useState("");
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


  // ===============select box

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box>
        <Header />
      </Box>
      <Box
        component={"div"}
        className="banner_sec"
        sx={{
          background: "URL(./assets/images/heroBg.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "50%",
          minHeight: "100vh",
          position: "relative",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            backgroundColor: theme.palette.primary.BGColor,
            height: "100%",
            padding: {
              xs: "0px 10px",
              sm: "0px 10px",
              md: "0px 10px",
              lg: "0px 0px",
            },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "70%",
              height: "auto",
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                marginBottom: "15px",
              }}
              color={theme.palette.primary.white}
              variant="h3"
              component={"h1"}
            >
              Find Your Dream Home
            </Typography>
            <Typography
              fontSize={"16px"}
              color={theme.palette.primary.white}
              component={"p"}
            >
              From as low as $10 per day with limited time offer discounts.
            </Typography>

            <Box sx={{ width: "100%", margin: "0px auto", marginTop: "50px" }}>
              <Tabs
                className="tab_box"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                value={value}
                onChange={handleChange}
                centered
                indicatorColor="none"
                textColor="primary"
              >
                <Tab
                  sx={{
                    backgroundColor: "#fff",
                    height: "35px",
                    lineHeight: "1",
                    textAlign: "center",
                    width: "auto",
                    borderRadius: "8px",
                    fontSize: "16px",
                    fontWeight: "500",
                    overflow: "visible",
                  }}
                  label="Buy"
                  className={`tabBtn ${value === 0 ? "active_tab" : ""}`}
                />
                <Tab
                  sx={{
                    backgroundColor: "#fff",
                    height: "35px",
                    lineHeight: "1",
                    textAlign: "center",
                    width: "auto",
                    borderRadius: "8px",
                    fontSize: "16px",
                    fontWeight: "500",
                    overflow: "visible",
                  }}
                  label="Rent"
                  className={`tabBtn ${value === 1 ? "active_tab" : ""}`}
                />
              </Tabs>

              <TabPanel value={value} index={0}>
                <Box
                  className={"tab_cont"}
                  sx={{
                    backgroundColor: theme.palette.primary.white,
                    padding: "20px 20px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap:"20px",
                    position: "relative",
                    zIndex: "5",
                    borderRadius: "10px",
                  }}
                >
        <TextField className="form_input1"  fullWidth  id="outlined-basic" label="Enter keyword..." variant="outlined" />
        <Box sx={{width:"100%"}}>
          <FormControl className="form_input1" fullWidth sx={{ color: theme.palette.primary.lightGrey }}>
            <InputLabel id="demo-controlled-open-select-label">Property Type</InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              value={value1}
              label="Property Type"
              onChange={handleChange1}
            >
              <MenuItem value={1}>Property Type </MenuItem>
              <MenuItem value={2}>Sale</MenuItem>
              <MenuItem value={3}>Rent</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <TextField className="form_input1" fullWidth  id="outlined-basic" label="Location" variant="outlined" />
        <Box sx={{width:"100%"}}>
          <FormControl className="form_input1" fullWidth sx={{ color: theme.palette.primary.lightGrey }}>
            <InputLabel id="demo-controlled-open-select-label">Property Type</InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
            
              value={value2}
              label="Property Type"
              onChange={handleChange2}
            >
              <MenuItem value={1}>Property Type </MenuItem>
              <MenuItem value={2}>Sale</MenuItem>
              <MenuItem value={3}>Rent</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Button sx={{width:"100%",
       backgroundColor:theme.palette.primary.logoColor, 
       height:"45px",
       fontSize:"14px",
       fontWeight:"600",
       lineHeight:"1.2px",
       boxShadow:"0 7px 18px 0 rgba(29, 142, 162, 0.32)",
        color:theme.palette.primary.white, 
        "&:hover": 
        { backgroundColor:"#00a376"
         },
         }}>Search</Button>
                </Box>
              </TabPanel>

              <TabPanel value={value} index={1}>
              <Box
                  className={"tab_cont"}
                  sx={{
                    backgroundColor: theme.palette.primary.white,
                    padding: "20px 20px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap:"20px",
                    position: "relative",
                    zIndex: "5",
                    borderRadius: "10px",
                  }}
                >
        <TextField className="form_input1"  fullWidth  id="outlined-basic" label="Enter keyword..." variant="outlined" />
        <Box sx={{width:"100%"}}>
          <FormControl className="form_input1" fullWidth sx={{ color: theme.palette.primary.lightGrey }}>
            <InputLabel id="demo-controlled-open-select-label">Property Type</InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              value={value3}
              label="Property Type"
              onChange={handleChange3}
            >
              <MenuItem value={1}>Property Type </MenuItem>
              <MenuItem value={2}>Sale</MenuItem>
              <MenuItem value={3}>Rent</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <TextField className="form_input1" fullWidth  id="outlined-basic" label="Location" variant="outlined" />
        <Box sx={{width:"100%"}}>
          <FormControl className="form_input1" fullWidth sx={{ color: theme.palette.primary.lightGrey }}>
            <InputLabel id="demo-controlled-open-select-label">Property Type</InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
            
              value={value4}
              label="Property Type"
              onChange={handleChange4}
            >
              <MenuItem value={1}>Property Type </MenuItem>
              <MenuItem value={2}>Sale</MenuItem>
              <MenuItem value={3}>Rent</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Button sx={{width:"100%",
       backgroundColor:theme.palette.primary.logoColor, 
       height:"45px",
       fontSize:"14px",
       fontWeight:"600",
       lineHeight:"1.2px",
       boxShadow:"0 7px 18px 0 rgba(29, 142, 162, 0.32)",
        color:theme.palette.primary.white, 
        "&:hover": 
        { backgroundColor:"#00a376"
         },
         }}>Search</Button>
                </Box>
              </TabPanel>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box className="featured_section"
      component={"section"}
      sx={{
        padding:"50px 0px",
        backgroundColor: theme.palette.primary.BGColor,
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
 }}>

<Box className={"heading"} sx={{
 textAlign:"center",
 marginBottom:"25px"
}}>
  <Typography variant="h4" component={"h2"}
   sx={{
fontSize:"28px",
fontWeight:"500",
lineHeight:"32px",
marginBottom:"10px"

  }}>Featured Properties</Typography>
  <Typography component={"p"} sx={{
fontSize:"14px",
}}>Handpicked properties by our team.</Typography>

</Box>

</Container>
      </Box>
      <Box>
        <Footer />
      </Box>
    </>
  );
};

export default Home;
