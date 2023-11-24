import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React from "react";
import PropertyPost from "./PropertyPost";
import { useSearchParams } from "react-router-dom";
import { GetApiFetch } from "../common/CommonFunction";
import { GET_PROPERTIES_API } from "../common/urls";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../redux/reducers/UserReducer";
import theme from "../Theme";

const Property = () => {
  const propertyList = useSelector((state) => state.PropertyListReducer.value);
  const userData = useSelector((state) => state.UserReducer.value);
  //define handleLogout function
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOut());
  };

  // short by filter
  const [sortOption, setOption] = React.useState("");

  const handleSortChange = (event) => {
    setOption(event.target.value);
  };
  // short by filter

  return (
    <Box flex={4} p={{ xs: "0px", md: "15px" }} m={0}>
      <HeaderArea  sx={{
              display: { xs: "block", sm: "block", md: "block", lg: "block" },
              justifyContent: "space-between",
              alignItems: "center",
        }}>
        <Box sx={{
              display: { xs: "block", sm: "block", md: "flex", lg: "flex" },
              justifyContent: "space-between",
              alignItems: "center",
        }}>
   <Typography variant="h6">Showing 1–10 of 222 results</Typography>
        <Box sx={{
              display: { xs: "flex", sm: "flex", md: "flex", lg: "flex" },
              justifyContent: "space-between",
              alignItems:  { xs: "end", sm: "center", md: "center", lg: "center" },
              gap:"20px",
        }}>
          <Box
            sx={{
              display: { xs: "grid", sm: "grid", md: "flex", lg: "flex" },
              justifyContent: "space-between",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <Box>
              <Typography variant="subtitle1">Sort by:</Typography>
            </Box>
            <Box sx={{ minWidth: "100px", minHeight: "35px" }}>
              <FormControl className="SortBy" sx={{
                 display: "block",
                 width:"100%"
              }} fullWidth>
                <InputLabel  sx={{
                    padding:"0px",
                    top:"-5px",
                    fontSize:"14px"
                   }} id="demo-simple-select-label">
                  Sort Option
                </InputLabel>
                <Select
                   sx={{
                    width:"150px",
                    height:"40px",
                    padding:"0px 14px"
                   }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={sortOption}
                  label="Sort Option"
                  onChange={handleSortChange}
                >
                  <MenuItem value={1}>Oldest to Newest</MenuItem>
                  <MenuItem value={2}>Newest to Oldest</MenuItem>
                  <MenuItem value={3}>High to Low</MenuItem>
                  <MenuItem value={4}>Low to High</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Button
          className="customBtnStyle"
          sx={{
            fontFamily: theme.palette.primary.Roboto,
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
            zIndex: "1",
            textTransform: "capitalize",
            "&:hover": {
              backgroundColor: theme.palette.primary.logoColor,
              color: theme.palette.primary.white,
              boxShadow: "none",
            },
          }}
          variant="contained"
          onClick={userData ? handleLogout : undefined}
        >
          {userData != null ? <Typography>LogOut</Typography> : <></>}
        </Button>
        </Box>
   
        </Box>
     
      </HeaderArea>
      <Post
        className="post"
        sx={{
          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(2, calc(50% - 15px))",
            lg: "repeat(2, calc(50% - 15px))",
          },
        }}
      >
        {propertyList &&
          propertyList.map((item, key) => (
            <PropertyPost propertyDetails={item} key={key} />
          ))}
      </Post>
    </Box>
  );
};

// const Property = () => {
//   const dispatch = useDispatch();
//   const userData = useSelector(state => state.UserReducer.value);
//   const [searchParams] = useSearchParams();
//   const [properties, setProperties] = useState([]);
//   if(searchParams.get('param1') != undefined){
//     console.log('param1', searchParams.get('param1'));
//   }
//   console.log('searchParams', searchParams);
//   const _getProperties = () => {
//     let params = '?';
//     console.log('params', params)
//     GetApiFetch(GET_PROPERTIES_API, params)
//       .then(([status, response]) => {
//         if (status == 200) {
//           // console.log(response);
//           if (response.status) {
//             setProperties(response.data);
//             console.log(response);
//           } else {
//             console.log(response);
//           }
//         } else {
//           console.log('Something went wrong');
//         }
//       })
//       .catch(error => console.log(error))
//       .finally(() => {

//       });
//   }
//   const handleLogout = () => {
//     dispatch(logOut());
//   };
//   useEffect(() => {
//     _getProperties()
//   }, [searchParams]);
//   console.log("userData====>", userData);
//   return (
//     <Box flex={4} p={{ xs: '0px', md: '15px' }} m={0}>
//       <HeaderArea>
//         <Typography variant='h6'>Showing 1–10 of 222 results</Typography>
//         <Box>
//           <span>Sort by:</span>
//         </Box>
//         <Box onClick={userData ? handleLogout : undefined}>
//           {userData != null ? <Typography>LogOut</Typography> : <></>}
//         </Box>
//       </HeaderArea>
//       <Post className='post' sx={{
//         gridTemplateColumns: { xs: "1fr", md: "repeat(2, calc(50% - 15px))", lg: "repeat(2, calc(50% - 15px))" },
//       }}>
//         {properties.map((item, key) => (
//           <PropertyPost propertyDetails={item} key={key} />
//         ))}
//       </Post>
//     </Box>
//   )
// }
const HeaderArea = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "25px",
}));
const Post = styled(Box)(({ theme }) => ({
  display: "grid",
  alignItems: "center",
  // gridTemplateColumns:"repeat(2, calc(50% - 15px))",
  gap: "30px",
}));
export default Property;
