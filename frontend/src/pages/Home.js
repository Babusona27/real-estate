import { Box, Container } from '@mui/material';
import React from 'react';
import BannerSlider from '../components/BannerSlider';
import Header from "../components/Header";
import Footer from "../components/Footer";
import theme from '../Theme';

const Home = () => {
  return (
    <>
      <Box>
        <Header />
      </Box>
      <Box component={"div"} className='banner_sec' sx={{
        backgroundColor:theme.palette.primary.logoColor,
        minHeight:"500px"
      }}>
      <Container maxWidth="xl" sx={{ height: "100%", padding:{xs:"40px 10px",sm:"40px 10px",md:"40px 10px",lg:"40px 0px"}, backgroundColor:"#eaf7f4" }}>
        <Box
          sx={{
            display: { xs: "block", sm: "block", md: "flex", lg: "flex" },
            justifyContent: "space-between",
          }}
        >
        <Box flex={2}>

        </Box>
        </Box>
      </Container>
      </Box>
      <Box>
        <Footer />
      </Box>
    </>
  )
}

export default Home