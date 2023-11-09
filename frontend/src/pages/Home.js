import {
  Box,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import theme from "../Theme";

const TabPanel = ({ children, value, index }) => (
  <div role="tabpanel" hidden={value !== index}>
    {value === index && <Box p={3}>{children}</Box>}
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
                  label="Tab 1"
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
                  label="Tab 2"
                  className={`tabBtn ${value === 1 ? "active_tab" : ""}`}
                />
              </Tabs>

              <TabPanel value={value} index={0}>
                <Box
                  className={"tab_cont"}
                  sx={{
                    backgroundColor: theme.palette.primary.white,
                    padding: "30px 20px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    position: "relative",
                    zIndex: "5",
                    borderRadius: "10px",
                  }}
                >
                  <Box component={"span"}></Box>
                   <Typography variant="h6">Content for Tab 2</Typography>
                  <p>This is the content for Tab 2.</p>
                </Box>
              </TabPanel>

              <TabPanel value={value} index={1}>
                <Box
                  className={"tab_cont"}
                  sx={{
                    backgroundColor: theme.palette.primary.white,
                    padding: "30px 20px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    position: "relative",
                    zIndex: "5",
                    borderRadius: "10px",
                  }}
                >
                  <Typography variant="h6">Content for Tab 2</Typography>
                  <p>This is the content for Tab 2.</p>
                </Box>
              </TabPanel>
            </Box>
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
