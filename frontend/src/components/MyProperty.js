import {
  Box,
  Button,
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography
} from "@mui/material";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import theme from "../Theme";
import Header from "../components/Header";
import PersonalPropertyListing from "../components/PersonalPropertyListing";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Property = (sellerProperty) => {

  // const SellerPropertyList = useSelector((state) => state.SellerPropertyListReducer.value);
  // console.log("SellerPropertyList", SellerPropertyList);
  console.log("sellerProperty", sellerProperty);
  const navigate = useNavigate();
  return (
    <>
      <Box sx={{
        display: "flex",
        justifyContent: "space-between",
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
          Shipping Address
        </Typography>
        <Button className="customBtnStyle" onClick={() => { navigate("/addnewproperty") }}
          sx={{
            fontFamily: "'Roboto', sans-serif !important",
            backgroundColor: "#dceeea",
            color: theme.palette.primary.logoColor,
            padding: "8px 22px",
            fontSize: "14px",
            lineHeight: "18px",
            fontWeight: "500",
            border: "none",
            overflow: "hidden",
            position: "relative",
            boxShadow: "none",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "10px",
            zIndex: "1",
            textTransform: "capitalize",
            "&:hover": {
              backgroundColor: theme.palette.primary.logoColor,
              color: theme.palette.primary.white,
              boxShadow: "none",
            }
          }} variant="contained">Add More <AddOutlinedIcon sx={{
            fontSize: "20px"
          }} /> </Button>
      </Box>
      <Box sx={{
        display: "grid",
        gap: "15px",
        marginTop: "25px",
      }}>
        {sellerProperty && sellerProperty.sellerProperty.map((item, key) => (
          <PersonalPropertyListing propertyDetails={item} key={key} />
        ))}

        {/* <PersonalPropertyListing />
        <PersonalPropertyListing />
        <PersonalPropertyListing /> */}
      </Box>
    </>
  );
};

export default Property;
