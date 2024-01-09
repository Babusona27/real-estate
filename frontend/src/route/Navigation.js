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
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/properties" element={<AllProperties />} />
                {/* <Route path="/Properties" element={<PrivateRoute><AllProperties /></PrivateRoute>} /> */}

                {/* <Route path="/ProductDetails/:id" element={<ProductDetails />} /> */}
                <Route path="/productdetails/:slug" element={<ProductDetails />} />

                <Route path="/addnewproperty" element={<AddNewProperty />} />
                <Route path="/sellerprofile" element={<SellerProfile />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contactus" element={<ContactUs />} />
                <Route path="/termsconditions" element={<TermsConditions />} />
                <Route path="/privacypolicy" element={<PrivacyPolicy />} />
                <Route path="/agentregister" element={<AgentRegister />} />
                <Route path="/agentlogIn" element={<AgentLogIn />} />
                <Route path="/userprofile" element={<UserProfile />} />
                <Route path="/favoriteproperty" element={<FavoriteProperty />} />
                <Route path="/nopropertiesadd" element={<NoPropertiesAdd />} />
                <Route path="/personalpropertylist" element={<PersonalPropertyList />} />

            </Routes>
        </Router>
    );
}

export default Navigation;