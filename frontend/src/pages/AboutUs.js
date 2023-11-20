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
import BreadcrumbsBanner from "../components/BreadcrumbsBanner";

import theme from "../Theme";

const AboutUs = () => {
    return (
        <>
            <Box>
                <Header />
            </Box>
           <BreadcrumbsBanner/>
        </>
    )
}
export default AboutUs
