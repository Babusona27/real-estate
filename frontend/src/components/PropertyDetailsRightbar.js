import { Box, Typography } from '@mui/material';
import React from 'react'
import theme from '../Theme';

const PropertyDetailsRightbar = () => {
  return (
    <Box flex={1} paddingLeft={{ xs: '0px', md: '15px' }} paddingRight={{ xs: '0px', md: '15px' }}>
    <Box sx={{ padding: "25px 30px 30px", background: theme.palette.primary.white, boxShadow:"0 4px 18px 0 rgba(194, 200, 213, 0.3)", borderRadius:"6px", marginBottom:"30px" }}>
    <Typography
              sx={{
                fontSize: "22px",
                color: "#212121",
                lineHeight: "30px",
                marginBottom: "25px",
                fontWeight: "500",
              }}
              variant="h6"
            >
              Advanced Search
            </Typography>
    </Box>
    </Box>
  )
}

export default PropertyDetailsRightbar;