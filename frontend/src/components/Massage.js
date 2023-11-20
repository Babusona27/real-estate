import {
    Box,
    Button,
    Container,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
  } from "@mui/material";
  import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
  import theme from "../Theme";

const Massage = () => {
  return (
    <>
    <Box sx={{
        display: "flex",
        justifyContent:"space-between",
        alignItems: "center",
        margin: "0px 0px 30px",
    }}>
    <Typography
        variant="h4"
        component={"h3"}
        sx={{
          fontSize: "28px",
          fontWeight: "500",
          lineHeight: "32px",
       
        }}
      >
        Massage
      </Typography>

    </Box>
     

    </>
  )
}

export default Massage