import {
  Box, Button, Icon, ListItem, ListItemIcon, ListItemText, Typography,
} from "@mui/material";
import React from "react";
import theme from "../Theme";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';




const AllListingProperties = () => {
  return (
   <Box sx={{
    display: {
        xs: "grid",
        sm: "grid",
        md: "flex",
        lg: "flex",
    },
    justifyContent:"space-between",
    alignItems:"center",
    boxShadow:"0 0 10px 0 rgb(0,0,0,10%)",
    padding:"20px",
    borderRadius:"20px",
    gap:"20px"
   }}>
<Box component={"a"} href="#">
    <Box sx={{
        width: {
            xs: "100%",
            sm: "100%",
            md: "100%",
            lg: "100%",
        },
        height:{
          xs: "100%",
          sm: "100%",
          md: "150px",
          lg: "150px",
      },
        borderRadius:"12px",
        objectFit:"cover",
        overflow:"hidden",
    }} component={"img"} src="./assets/images/r2.jpg"/>
</Box>
<Box sx={{
    width: {
        xs: "100%",
        sm: "100%",
        md: "40%",
        lg: "40%",
    },
}}>
    <Typography href="#" component={"a"} sx={{
            fontWeight:"500",
            color:theme.palette.primary.logoColor,
            fontSize:"22px"
          }}>Luxury Family Home</Typography>
    <ListItem disablePadding>
              <ListItemIcon sx={{
                minWidth:"auto",
               
              }}>
                <LocationOnOutlinedIcon sx={{
                   fontSize: {
                    xs: "14px",
                    sm: "14px",
                    md: "16px",
                    lg: "18px",
                  },
                }} />
              </ListItemIcon>
              <ListItemText sx={{
                fontWeight: "500",
                fontSize: {
                  xs: "14px",
                  sm: "14px",
                  md: "16px",
                  lg: "18px",
                },
                color:theme.palette.secondary.grey
              }}>Collins Street West, Victoria </ListItemText>
          </ListItem>
          <Typography sx={{
            fontWeight:"500",
            color:theme.palette.primary.logoColor,
            fontSize:"18px"
          }}>$13000/mo</Typography>
</Box>
<Box sx={{
    width: {
        xs: "100%",
        sm: "100%",
        md: "33%",
        lg: "33%",
    },
}}>
<Box sx={{
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  gap:"10px",
}}>
  <AccessTimeOutlinedIcon sx={{
    color:theme.palette.secondary.grey,
  }} />
<Typography sx={{
            fontWeight:"500",
            color:theme.palette.secondary.grey,
            fontSize:"18px"
          }} variant="body2">Feb 2023 </Typography> 
</Box>
      
</Box>
<Box sx={{
    width: {
        xs: "100%",
        sm: "100%",
        md: "5%",
        lg: "5%",
    },
}}>
<Button variant="contained" color="success">
  active
</Button>
</Box>
<Box sx={{
    width: {
        xs: "100%",
        sm: "100%",
        md: "40%",
        lg: "40%",
    },
}}>
    <Box sx={{
    display:{
        xs:"flex",
        sm:"flex",
        md:"grid",
        lg:"grid",
    },
    alignItems:"end",
    justifyContent:"end",
    gap:"10px"
}}>
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
         }} variant="contained" startIcon={<CreateOutlinedIcon  />}>
  Edit
</Button>
<Button sx={{width:"100%",
       backgroundColor:"transparent", 
       height:"45px",
       fontSize:"14px",
       fontWeight:"600",
       lineHeight:"1.2px",
       boxShadow:"0 7px 18px 0 rgba(29, 142, 162, 0.32)",
        color:theme.palette.primary.logoColor, 
        borderColor:"transparent",
        "&:hover": 
        { backgroundColor:"#00a376",
        color:theme.palette.primary.white,
        borderColor:"transparent",
         },
         }} variant="outlined" startIcon={<DeleteOutlineOutlinedIcon  />}>
  Delete
</Button>
    </Box>

</Box>
   </Box>
  )
}

export default AllListingProperties