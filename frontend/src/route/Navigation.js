import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllProperties from "../pages/AllProperties";
import ProductDetails from "../pages/ProductDetails";
import Login from "../pages/Login";
import AboutUs from "../pages/AboutUs";
import Blog from "../pages/Blog";
import ContactUs from "../pages/ContactUs";
import TermsConditions from "../pages/TermsConditions";
import PrivacyPolicy from "../pages/PrivacyPolicy";

import PersonalPropertyList from "../pages/PersonalPropertyList";

import FavoriteProperty from "../pages/FavoriteProperty";
import Home from "../pages/Home";
import Register from "../pages/Register";
import AddNewProperty from "../pages/AddNewProperty";
import SellerProfile from "../pages/SellerProfile";
import AgentRegister from "../pages/AgentRegister";
import AgentLogIn from "../pages/AgentLogIn";
import UserProfile from "../pages/UserProfile";
import NoPropertiesAdd from "../pages/NoPropertiesAdd";
import { Navigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../redux/reducers/UserReducer";
import { jwtDecode } from "jwt-decode";
import { GET_FAVORITE_PROPERTY_API } from '../common/urls';
import { setFevoriteProperty } from '../redux/reducers/FavoritePropertyReducer';
import axios from 'axios';

function Navigation() {
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.UserReducer.value);
    console.log('userData', userData);
    useEffect(() => {
        if(userData){
            const getFavoriteProperty = async () => {
                await axios
                    .get(GET_FAVORITE_PROPERTY_API +"/"+ userData.userId,
                        {
                            headers: {
                                'Authorization': userData.token,
                            }
                        })
                    .then((res) => {
                        if (res.data.status) {
                            dispatch(setFevoriteProperty(res.data.favoriteProperties));
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            };
            getFavoriteProperty();
        }
        
        /* get properties  */
        const checkTokenExpiration = () => {
            const token = userData && userData.token;

            if (token !== null) {
                const decodedToken = jwtDecode(token);
                const currentTime = Date.now() / 1000; // Convert milliseconds to seconds


                if (decodedToken.exp < currentTime) {
                    // Logout user
                    dispatch(logOut());
                    //window.location.href = "/";
                    return false;
                }
            } else {
                dispatch(logOut());
                //window.location.href = "/";
                return false;
                // Token not found, handle accordingly (e.g., redirect to login)
            }
        };
        checkTokenExpiration();
 
    }, [userData, dispatch]);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/Properties" element={<AllProperties />} />
                {/* <Route path="/Properties" element={<PrivateRoute><AllProperties /></PrivateRoute>} /> */}

                {/* <Route path="/ProductDetails/:id" element={<ProductDetails />} /> */}
                <Route path="/ProductDetails/:slug" element={<ProductDetails />} />

                <Route path="/AddNewProperty" element={<AddNewProperty />} />
                <Route path="/SellerProfile" element={<SellerProfile />} />
                <Route path="/AboutUs" element={<AboutUs />} />
                <Route path="/Blog" element={<Blog />} />
                <Route path="/ContactUs" element={<ContactUs />} />
                <Route path="/TermsConditions" element={<TermsConditions />} />
                <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
                <Route path="/AgentRegister" element={<AgentRegister />} />
                <Route path="/AgentLogIn" element={<AgentLogIn />} />
                <Route path="/userProfile" element={<UserProfile />} />
                <Route path="/favoriteProperty" element={<FavoriteProperty />} />
                <Route path="/NoPropertiesAdd" element={<NoPropertiesAdd />} />
                <Route path="/PersonalPropertyList" element={<PersonalPropertyList />} />

            </Routes>
        </Router>
    );
}

export default Navigation;