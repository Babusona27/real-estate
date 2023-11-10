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
} from "@mui/material";
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import theme from "../Theme";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Checkbox from "@mui/material/Checkbox";

const AddNewProperty = () => {
    return (
        <>
            <Box>
                <Header />
            </Box>
            <Box
                component={"div"}
                sx={{
                    padding: {
                        xs: "60px 0px 40px",
                        sm: "30px 0px",
                        md: "50px 0px",
                        lg: "50px 0px",
                    },
                    backgroundColor: theme.palette.primary.BGColor,
                }}
            >
                <Container
                    maxWidth="xl"
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
                        <Box
                            sx={{
                                padding: "70px 0px",
                                textAlign: "center",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontWeight: "500",
                                    marginBottom: "15px",
                                    fontSize: {
                                        xs: "24px",
                                        sm: "24px",
                                        md: "32px",
                                        lg: "32px",
                                    },
                                }}
                                variant="h4"
                                component={"h3"}
                            >
                                Add New <span className="lastword">Property</span>
                            </Typography>
                            <Typography
                                sx={{
                                    color: theme.palette.secondary.light,
                                    marginBottom: "20px",
                                }}
                                component={"p"}
                            >
                                We are glad to see you again!
                            </Typography>
                        </Box>
                        <Box sx={{
                           display:{
                            xs: "block",
                            sm: "block",
                            md: "flex",
                            lg:"flex"
                          },
                          alignItems:"center",
                          justifyContent:"center",
                          gap:"30px"
                         
                        }}>

                        </Box>
                        <Box
                            sx={{
                                padding: "30px",
                                backgroundColor: theme.palette.primary.white,
                                height: "500px",
                                margin: "50px",
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
                                Create Listing
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
                                    label="Name"
                                    variant="outlined"
                                />
                                <TextField
                                    fullWidth
                                    multiline
                                    rows={4}
                                    required
                                    id="outlined-basic"
                                    label="Massage"
                                    variant="outlined"
                                />
                            </Box>
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

export default AddNewProperty;
