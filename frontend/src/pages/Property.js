import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material'
import React from 'react'
import PropertyPost from '../components/PropertyPost';


const Property = () => {
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