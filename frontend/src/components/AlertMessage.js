import React from "react";
import { Alert } from "@mui/material";
const AlertMessage = ({type,message}) => {
  return (
    <Alert severity={type}>{message}</Alert>
  );
};

export default AlertMessage;
