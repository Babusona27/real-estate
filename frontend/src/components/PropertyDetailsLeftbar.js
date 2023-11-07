import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import theme from "../Theme";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';





const PropertyDetailsLeftbar = () => {
  return (
    <Box
      flex={2}
      paddingLeft={{ xs: "0px", md: "15px" }}
      paddingRight={{ xs: "0px", md: "15px" }}
    >
      <Box
        sx={{
          padding: "25px 30px 30px",
          background: theme.palette.primary.white,
          boxShadow: "0 4px 18px 0 rgba(194, 200, 213, 0.3)",
          borderRadius: "6px",
          marginBottom: "30px",
        }}
      >
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
          Overview{" "}
        </Typography>
        <Box
          component="ul"
          sx={{
            display: "flex",
            gap: "20px",
            flexWrap: "warp",
            alignItems: "center",
          }}
        >
          <Box
            component="li"
            sx={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              width: "100%",
            }}
          >
              <IconButton
                className="filter_btn"
                sx={{
                  height: "50px",
                  width: "53px",
                  borderRadius: "3px",
                  backgroundColor: theme.palette.primary.white,
                  border: "1px solid rgb(232, 233, 241)",
                  color: theme.palette.primary.logoColor,
                  transition: "0.4s",
                  boxShadow:"0 4px 18px 0 rgba(188, 192, 202, 0.26)"
                }}>
                <LocalOfferIcon />
              </IconButton>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: theme.palette.primary.logoColor,
                }}
                variant="h6" >Amenities </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

  );
};

export default PropertyDetailsLeftbar;
