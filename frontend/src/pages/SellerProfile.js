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
// import VisuallyHiddenInput from '@mui/material/VisuallyHiddenInput';
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import theme from "../Theme";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Checkbox from "@mui/material/Checkbox";

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

const SellerProfile = () => {
    return (
        <>
            <Box>
                <Header />
            </Box>

            <Box 
            sx={{ 
                display:"flex",
                justifyContent: "center"
             }}
            >
                <Box
                    sx={{
                        width: "60%",
                        backgroundColor: "#fff",
                        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                        padding: "50px",
                        margin: "150px 0 75px",
                        borderRadius: "10px"
                    }}
                >
                    {/* <Typography
                        sx={{
                            fontWeight: "500",
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
                    </Typography> */}
                    <img className="logo" src="./assets/images/user-img.jpg" />
                </Box>
            </Box>

            <Box>
                <Footer />
            </Box>
        </>
    );
};

export default SellerProfile;
