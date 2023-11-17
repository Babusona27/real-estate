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

const ContactUs = () => {
    return (
        <>
            <Box>
                <Header />
            </Box>
            <Box>
                <Typography>ContactUs</Typography>
            </Box>
        </>
    )
}
export default ContactUs
