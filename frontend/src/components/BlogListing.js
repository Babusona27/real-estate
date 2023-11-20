import { Avatar, Box, Icon, List, Typography } from "@mui/material";
import React from "react";
import theme from "../Theme";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

const BlogListing = () => {
  return (
    <Box
      sx={{
        padding: "0px",
        background: theme.palette.primary.white,
        border: "1px solid #ebebeb",
        borderRadius: "8px",
        "&:hover": {
          boxShadow: "0 4px 12px rgba(0,0,0,.1)",
        },
      }}
    >
      <Box
        href="#"
        component={"a"}
        sx={{
          position: "relative",
          display: "block",
          margin: "20px 20px 10px",
        }}
        className={"Blog_image_Box"}
      >
        <Box
          sx={{
            minHeight: {
              xs:"220px",
              sm:"220px",
              md:"450px",
              lg:"450px",
              xl:"450px",

            },
            minWidth: "100%",
            objectFit: "cover",
            borderRadius: "8px",
          }}
          src="./assets/images/R4.jpg"
          component={"img"}
        />
        <Box
          sx={{
            padding: "7px 12px",
            background: theme.palette.primary.logoColor,
            color: theme.palette.primary.white,
            display: "inline-block",
            textAlign: "center",
            borderRadius: "5px",
            position: "absolute",
            top: "10px",
            left: "10px",
          }}
          component={"span"}
        >
          Construction
        </Box>
      </Box>
      <Box
        sx={{
          padding: "10px 20px",
        }}
      >
        <Typography
          href="#"
          sx={{
            fontSize: {
              xs:"18px",
              xl:"20px",
            },
            color: theme.palette.primary.dark,
            display: "block",
            lineHeight: {
              xs:"26px",
              xl:"30px"
            },
            marginBottom: "20px",
            fontWeight: "500",
            transition: "all 0.5s ease",
            "&:hover": {
              color: theme.palette.primary.logoColor,
            },
          }}
          variant="h6"
          component={"a"}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit 2020
        </Typography>
        <Typography variant="body2">
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Duis Mollis
          Et Sem Sed Sollicitudin. Donec Non Odio Neque. Aliquam Hendrerit
          Sollicitudin Purus, Quis Rutrum Mi Accumsan Nec. Quisque Bibendum Orci
          Ac Nibh Facilisis, At Malesuada Orci Congue. Nullam Tempus
          Sollicitudin Cursus.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 20px 20px",
          marginTop: "15px",
          borderTop: "1px solid #ebebeb",
        }}
      >
        <Box
          className={"leftSide"}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Avatar alt="Remy Sharp" src="./assets/images/avtar/avatar.png" />
            <Typography
              href="#"
              sx={{
                fontSize: "14px",
                color: theme.palette.primary.lightGrey,
                display: "block",
                lineHeight: "30px",
                margin: "0",
                fontWeight: "500",
                transition: "all 0.3s ease",
                "&:hover": {
                  color: theme.palette.primary.logoColor,
                },
              }}
              variant="h6"
              component={"a"}
            >
              Remy Sharp
            </Typography>
          </Box>
          <Box>
            <List
              href="#"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "5px",
              }}
              component={"a"}
            >
              <Icon>
                <CalendarMonthOutlinedIcon
                  sx={{
                    fontSize: "18px",
                    color: theme.palette.primary.lightGrey,
                  }}
                />
              </Icon>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: theme.palette.primary.lightGrey,
                  display: "block",
                  lineHeight: "30px",
                  margin: "0",
                  fontWeight: "500",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    color: theme.palette.primary.logoColor,
                  },
                }}
                variant="h6"
              >
                7 August 2022
              </Typography>
            </List>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BlogListing;
