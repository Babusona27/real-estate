import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route } from 'react-router';

function PrivateRoute({ children }) {
  const userData = useSelector(state => state.UserReducer.value);

    if(userData == null){
        return <Navigate replace to="/Login" />
    }else{
        return children;
    }
    
}
export default PrivateRoute;