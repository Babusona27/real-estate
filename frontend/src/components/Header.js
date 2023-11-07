import styled from '@emotion/styled';
import {
  AppBar,Badge, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography,
} from '@mui/material'
import { useTheme } from '@mui/material/styles';
// import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import AddIcon from '@mui/icons-material/Add';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
const Navbar = () => {
  const pages = ['Home', 'About Us', 'Offplan Projects', 'Available Properties', 'Blog', 'Contact', 'Careers'];


  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const theme = useTheme();
  return (
    <AppBar position='sticky' sx={{ backgroundColor: theme.palette.primary.LightWhite, height: "88px", boxShadow:"0 5px 10px 0 rgb(87 101 128 / 12%)" }}>

      <Container maxWidth="xl" sx={{ height: "100%" }}>
        <Toolbar disableGutters sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "100%",}}>
          <Box sx={{ width:{  xs: "80px", sm:"100px", lg: "120px" },
               minWidth:{  xs: "80px", sm:"100px", lg: "120px" } }}>
            <img className='logo' src='./assets/images/logo.gif' />
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: theme.palette.secondary.contrastText, display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
<Box sx={{ display: "flex", alignItems: "center", gap: { xs: '13px', lg: '20px' }  }}>
<Box sx={{ display: "flex", alignItems: "center", gap: { xs: '13px', lg: '20px' }  }}>
            <Tooltip title="Delete">
              <IconButton sx={{ border: "1px solid #dceeea",
               color: theme.palette.primary.Green,
                p: "10px", 
             width:{xs: "30px", sm:"30px", lg: "46px" },
             minWidth:{xs: "30px", sm:"30px", lg: "46px" },
             minHeight:{xs: "30px", sm:"30px", lg: "46px"},
             height:{xs: "30px", sm:"30px", lg: "46px"},
             fontSize:{xs: "14px", lg: "20px"}}}>
                <StyledBadge badgeContent={4} color="secondary">
                  <CompareArrowsIcon  sx={{
                 fontSize:{xs: "20px", lg: "30px"},
              }} />
                </StyledBadge>
              </IconButton>
            </Tooltip>

            <Tooltip title="Delete">
              <IconButton sx={{ border: "1px solid #dceeea", color: theme.palette.primary.Green, p: "10px" , 
               width:{xs: "30px", sm:"30px", lg: "46px" },
               minWidth:{xs: "30px", sm:"30px", lg: "46px" },
               minHeight:{xs: "30px", sm:"30px", lg: "46px"},
               height:{xs: "30px", sm:"30px", lg: "46px"},
               fontSize:{xs: "20px", lg: "30px"}}}>
                <StyledBadge badgeContent={4} color="secondary">
                  <FavoriteBorderIcon sx={{
                 fontSize:{xs: "20px", lg: "30px"},
              }}  />
                </StyledBadge>
              </IconButton>
            </Tooltip>
            <Button sx={{
               borderRadius: "30px",
               display:{  xs: "none", sm:"none", lg: "flex" },
               alignItems: "center",
               justifyContent: "space-between",
               gap: "0px",
               padding: "0px",
               color: '#fff', 
              overflow: "hidden", 
              height: "45px",
              backgroundColor:theme.palette.primary.logoColor ,
               transition: 'background-color 0.3s',
               '&:hover': {
                 backgroundColor:theme.palette.primary.logoColor,
               },
            }}
           
              variant="contained">
              <Box sx={{ display: "flex", alignItems: "center", height: "100%", width: "30px", paddingLeft: "10px", backgroundColor: "#00000026", color: theme.palette.primary.white, }}><AddIcon /></Box>

              <Typography sx={{  padding: "0px 22px 0px 15px", color: theme.palette.primary.white, fontSize: "15px", fontWeight: "500", lineHeight: "42px", textTransform: "capitalize" }}>List Your Property</Typography>
            </Button>
            <Button sx={{
               borderRadius: "30px",
               display:{  xs: "flex", sm:"flex", lg: "none" },
               alignItems: "center",
               justifyContent: "center",
               border: "1px solid #dceeea",
                color: theme.palette.primary.white,
                 p: "10px",
              background:theme.palette.primary.logoColor ,
               transition: 'background-color 0.3s',
               boxShadow:"none",
               width:"45px",
               minWidth:"45px",
               minHeight:"45px",
               height:"45px",
              
            }}
              variant="contained">
              <AddCircleOutlinedIcon sx={{
                 fontSize:{xs: "20px"},
              }} />
            </Button>
          </Box>

          <IconButton sx={{ display: { xs: 'flex', md: 'none' }, padding:"0px" }}
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="#000"
            
          >
            <MenuIcon />
          </IconButton>
</Box>
       
        </Toolbar>
      </Container>
    </AppBar>
  )
}


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: -8,
    background: theme.palette.primary.logoColor,
    padding: '0 4px',
    color: theme.palette.primary.white
  },
}));
export default Navbar


