import { Avatar, Box, IconButton, List, Tooltip, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import theme from "../Theme";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import SingleBedIcon from "@mui/icons-material/SingleBed";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';

const PersonalPropertyListing = () => {
  return (
    <Box
      sx={{
        padding: "30px",
        background: theme.palette.primary.white,
        border: "1px solid #ebebeb",
        borderRadius: "8px",
        transition: "all 0.4s ease-out",
        boxShadow: "0 4px 12px rgba(0,0,0,10%)",
        marginTop: {
          xs: "30px",
          lg: "0px",
        },
        "&:hover": {
          boxShadow: "0 4px 12px rgba(0,0,0,20%)",
        },
      }}
    >
      <Box
        sx={{
          display: { xs: "block", sm: "block", md: "block", lg: "grid" },
          alignItems: "center",
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            sm: "repeat(1, 1fr)",
            md: "250px 1fr",
            lg: "250px 1fr",
          },
          gap: "30px",
        }}
      >
        <Box
          sx={{
            width: "250px",
            height: "200px",
            borderRadius: "10px",
            overflow: "hidden",
          }}
          href="#"
          component={"a"}
        >
          <Box
            src={process.env.PUBLIC_URL + "/assets/images/R3.jpg"}
            component={"img"}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>

        <Box
          sx={{
            display: "grid",
            alignItems: "center",
            gap: "10px",
          }}
          className="content_box"
        >
          <Box
            className="topsec"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "18px",
                color: theme.palette.primary.logoColor,
                fontWeight: "500",
                lineHeight: "26px",
                fontFamily: theme.palette.primary.Roboto,
              }}
              component={"h4"}
            >
              FOR RENT
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                color: theme.palette.primary.logoColor,
                fontWeight: "500",
                lineHeight: "26px",
                fontFamily: theme.palette.primary.Roboto,
              }}
              component={"h4"}
            >
              $34,900/Month
            </Typography>
          </Box>
          <Box
            className="centersec"
            sx={{
              display: "grid",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Typography
              href="#"
              sx={{
                fontSize: "20px",
                color: theme.palette.primary.dark,
                fontWeight: "500",
                lineHeight: "26px",
                transition: "all 0.3s ease-out",
                // fontFamily: theme.palette.primary.Roboto,
                "&:hover": {
                  color: theme.palette.primary.logoColor,
                },
              }}
              component={"a"}
            >
              New Apartment Nice View
            </Typography>
            <Box
              sx={{
                display: { xs: "block", sm: "flex", md: "flex", lg: "flex" },
                alignItems: "center",
                gap: "5px",
                textAlign: {
                  xs: "center",
                  sm: "center",
                  md: "left",
                  lg: "left",
                },
              }}
            >
              <RoomOutlinedIcon
                sx={{
                  fontSize: "18px",
                  color: theme.palette.primary.logoColor,
                  textAlign: {
                    xs: "center",
                    sm: "center",
                    md: "left",
                    lg: "left",
                  },
                }}
              />
              <Typography
                sx={{
                  color: theme.palette.primary.logoColor,
                  display: "block",
                  lineHeight: {
                    xs: "26px",
                    xl: "30px",
                  },
                  fontFamily: theme.palette.primary.Roboto,
                }}
                variant="body2"
                component={"p"}
              >
                1421 San Pedro St, Los Angeles, CA 900015
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "0px",
                margin: "0px",
              }}
            >
              <List
                sx={{
                  display: "flex",
                  gap: "7px",
                  alignItems: "center",
                  padding: "0px",
                }}
              >
                <IconButton
                  sx={{
                    backgroundColor: theme.palette.primary.LightVlue2,
                    color: theme.palette.primary.logoColor,
                    width: "32px",
                    height: "32px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <SingleBedIcon />
                </IconButton>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#666666",
                  }}
                  variant="span"
                  component="h3"
                >
                  20
                </Typography>
              </List>
              <List
                sx={{
                  display: "flex",
                  gap: "7px",
                  alignItems: "center",
                  padding: "0px",
                }}
              >
                <IconButton
                  sx={{
                    backgroundColor: theme.palette.primary.LightVlue2,
                    color: theme.palette.primary.logoColor,
                    width: "32px",
                    height: "32px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <BathtubOutlinedIcon />
                </IconButton>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#666666",
                  }}
                  variant="span"
                  component="h3"
                >
                  2
                </Typography>
              </List>
              <List
                sx={{
                  display: "flex",
                  gap: "7px",
                  alignItems: "center",
                  padding: "0px",
                }}
              >
                <IconButton
                  sx={{
                    backgroundColor: theme.palette.primary.LightVlue2,
                    color: theme.palette.primary.logoColor,
                    width: "32px",
                    height: "32px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <ZoomOutMapIcon />
                </IconButton>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#666666",
                  }}
                  variant="span"
                  component="h3"
                >
                  200
                </Typography>
              </List>
            </Box>
          </Box>
          <Box
            className="bottomsec"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap:"15px"
              }}
              className="agents"
            >
              <Avatar
                sx={{
                  width: "40px",
                  height: "40px",
                  border:"3px solid",
                  borderColor:"#e5eaee",
                }}
                src={process.env.PUBLIC_URL + "/assets/images/avtar/avatar.png"}
              />
              <Box className="agents_details">
                <Typography
                  sx={{
                    fontFamily: theme.palette.primary.Roboto,
                    fontSize: "15px",
                    fontWeight: "500",
                    color: theme.palette.primary.logoColor,
                  }}
                  component={"h5"}
                > 
                  Suraj Bannerjee
                </Typography>
                <Typography
                  sx={{
                    fontFamily: theme.palette.primary.Roboto,
                    fontSize: "12px",
                    fontWeight: "400",
                    color: "#666666",
                  }}
                  variant="body"
                  component={"p"}
                >
                  Estate Agents
                </Typography>
              </Box>
            </Box>
            <Tooltip title="edit">
  <IconButton className="edit_icon" sx={{
    background:theme.palette.primary.logoColor,
    color:theme.palette.primary.white,
    transition: "all 0.4s ease-out",
    boxShadow: "0 4px 12px rgba(0,0,0,10%)",
    "&:hover": {
        background:theme.palette.primary.white,
        color:theme.palette.primary.logoColor,
        boxShadow: "0 3px 12px rgb(0 0 0 / 23%)",
      },
  }}>
    <EditNoteRoundedIcon  />
  </IconButton>
</Tooltip>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PersonalPropertyListing;
