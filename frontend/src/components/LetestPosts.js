// import styled from '@emotion/styled';

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import React from 'react'

const LetestPosts = () => {
  return (
    <Card sx={{ maxWidth:"100%"}}>
      <CardActionArea>
        <CardMedia
    component="img"
          height="100"
          image="./assets/images/R5.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default LetestPosts