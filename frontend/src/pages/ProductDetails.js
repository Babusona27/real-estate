import { Box, Container, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import styled from '@emotion/styled';
import BannerSlider from "../components/BannerSlider";
import PropertyDetailsLeftbar from "../components/PropertyDetailsLeftbar";
import PropertyDetailsRightbar from "../components/PropertyDetailsRightbar";

import { useParams } from "react-router-dom";
import { GET_PRODUCT_DETAILS_PAGE_API, IMAGE_BASE_URL } from "../common/urls";
import { GetApiFetch } from "../common/CommonFunction";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const ProductDetails = () => {
  const params = useParams();

  //api call from get property details by id

  const dispatch = useDispatch();

  //create a function to get property details by id using axios
  const getPropertyDetailsById = async () => {
    axios
      .get(GET_PRODUCT_DETAILS_PAGE_API + params.id)
      .then((response) => {
        console.log("response", response);
        dispatch({ type: "GET_PROPERTY_DETAILS_BY_ID", payload: response.data });
    
      })
      .catch((error) => {
       console.log("error", error);
      });
   
  };

  return <Box>{JSON.stringify(params)}</Box>;
};

// const ProductDetails = () => {
//   const [propertyDetails, setPropertyDetails] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   const idParams = useParams()
//   console.log("idParams=>", idParams)
//   const _getPropertiesDetails = () => {
//     setIsLoading(true)
//     let params = '';
//     GetApiFetch(GET_PRODUCT_DETAILS_PAGE_API + idParams.id)
//       .then(([status, response]) => {

//     // console.log('_getPropertiesDetails',response.data.images);
//         if (status == 200) {
//           if (response.data) {
//             setPropertyDetails(response.data);
//             console.log(response.data.property_name);
//           } else {
//             console.log(response);
//           }
//         } else {
//           console.log('Something went wrong');
//         }
//       })
//       .catch(error => console.log(error))
//       .finally(() => {
//         // setTimeout(()=>{setIsLoading(false)}, 6000);
//         setIsLoading(false)
//       });
//   }
//   useEffect(() => {
//     _getPropertiesDetails()
//   },[]);
//   if(isLoading){
//     return (<>Loading </>)
//   }else{
//     return (
//       <>
//         <Box>
//           <Header />
//         </Box>

//         <Box>
//           <BannerSlider propertyDetails={propertyDetails}/>
//         </Box>
//         <Container maxWidth="xl" sx={{ height: "100%", padding:{xs:"40px 10px",sm:"40px 10px",md:"40px 10px",lg:"40px 0px"}, backgroundColor:"#eaf7f4" }}>
//           <Box
//             sx={{
//               display: { xs: "block", sm: "block", md: "flex", lg: "flex" },
//               justifyContent: "space-between",
//             }}
//           >
//             <PropertyDetailsLeftbar propertyDetails={propertyDetails}/>
//             <PropertyDetailsRightbar />
//           </Box>
//         </Container>
//           {/* <Typography
//               variant="span"
//               sx={{
//                 fontSize: "15px",
//                 fontWeight: "400",
//                 fontFamily: "'Roboto',sans-serif !important",
//               }}
//             >
//               {propertyDetails.property_name}
//             </Typography> */}

//         <Box>
//           <Footer />
//         </Box>
//       </>
//     );
//   }

// };

export default ProductDetails;
