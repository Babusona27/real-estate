import { Box, Container } from "@mui/material";
import React,{ useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import styled from '@emotion/styled';
import BannerSlider from "../components/BannerSlider";
import PropertyDetailsLeftbar from "../components/PropertyDetailsLeftbar";
import PropertyDetailsRightbar from "../components/PropertyDetailsRightbar";

import { useParams } from 'react-router-dom';
import { GET_PRODUCT_DETAILS_PAGE_API, IMAGE_BASE_URL } from "../common/urls";
import { GetApiFetch } from "../common/CommonFunction";

const ProductDetails = () => {
  const [ProductDetails, setProductDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const idParams = useParams()
  console.log("idParams=>", idParams)
  const _getPropertiesDetails = () => {
    setIsLoading(true)
    let params = ''
    GetApiFetch(GET_PRODUCT_DETAILS_PAGE_API + idParams.id)
      .then(([status, response]) => {
        if (status == 200) {
          // console.log(response);
          if (response.status) {
            setProductDetails(response.data);
            console.log(response);
          } else {
            console.log(response);
          }
        } else {
          console.log('Something went wrong');
        }
      })
      .catch(error => console.log(error))
      .finally(() => {
        setIsLoading(false)
      });
  }
  useEffect(() => {
    // _getPropertiesDetails()
  });
  if(isLoading){
    return (<></>)
  }else{
    return (
      <>
        <Box>
          <Header />
        </Box>
        <Box>
          <BannerSlider ProductDetails={ProductDetails}/>
        </Box>
        <Container maxWidth="xl" sx={{ height: "100%", padding:{xs:"40px 10px",sm:"40px 10px",md:"40px 10px",lg:"40px 0px"}, backgroundColor:"#eaf7f4" }}>
          <Box
            sx={{
              display: { xs: "block", sm: "block", md: "flex", lg: "flex" },
              justifyContent: "space-between",
            }}
          >
            <PropertyDetailsLeftbar ProductDetails={ProductDetails}/>
            <PropertyDetailsRightbar />
          </Box>
        </Container>
  
        <Box>
          <Footer />
        </Box>
      </>
    );
  }
  
};
// const Banner = styled(Box)(({ theme }) => ({
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
//   padding: "0px 20px",
//   width:"100%"
// }));
export default ProductDetails;
