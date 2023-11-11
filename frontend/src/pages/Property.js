import { useState, useEffect } from "react";
import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material'
import React from 'react'
import PropertyPost from '../components/PropertyPost';
import { useSearchParams } from 'react-router-dom';
import { GetApiFetch } from "../common/CommonFunction";
import { GET_PROPERTIES_API } from "../common/urls";

const Property = () => {
  const [searchParams] = useSearchParams();
  const [properties, setProperties] = useState([]);
  // if(searchParams.get('param1') != undefined){
  //   console.log('param1', searchParams.get('param1'));
  // }
  // console.log('searchParams', searchParams);
  const _getProperties = () => {
    let params = '?';
    console.log('params', params)
    GetApiFetch(GET_PROPERTIES_API, params)
      .then(([status, response]) => {
        if (status == 200) {
          // console.log(response);
          if(response.status){
            setProperties(response.data);
            console.log(response);
          }else{
            console.log(response);
          }
          

        } else {
          console.log('Something went wrong');
        }
      })
      .catch(error => console.log(error))
      .finally(() => {

      });
  }
  useEffect(() => {
    _getProperties()
  },[searchParams]);
  return (
    <Box flex={4} p={{ xs: '0px', md: '15px' }} m={0}>
    <HeaderArea>
<Typography variant='h6'>Showing 1–10 of 222 results</Typography>
<Box>
  <span>Sort by:</span>
</Box>
    </HeaderArea>
    <Post className='post' sx={{
        gridTemplateColumns:{ xs: "1fr", md: "repeat(2, calc(50% - 15px))", lg:"repeat(2, calc(50% - 15px))"},
    }}>
    
      <PropertyPost/>
      <PropertyPost/>
      <PropertyPost/>
      <PropertyPost/>
      <PropertyPost/>
      <PropertyPost/>
    </Post>
    </Box>
  )
}
const HeaderArea = styled(Box)(({ theme }) => ({
display:"flex",
justifyContent:"space-between",
alignItems:"center",
marginBottom:"25px"
}));
const Post = styled(Box)(({ theme }) => ({
  display:"grid",
  alignItems:"center",
  // gridTemplateColumns:"repeat(2, calc(50% - 15px))",
  gap:"30px",
  }));
export default Property