import { useState, useEffect } from "react";
import { Box, Breadcrumbs, Container, Typography, Pagination } from "@mui/material";
import React from "react";
import PropertyLeftBar from "../components/PropertyLeftBar";
import Property from "../components/Property";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BreadcrumbsBanner from "../components/BreadcrumbsBanner";
import axios from "axios";
import {
  GET_PROPERTIES_API,
  GET_PROPERTIES_WITHOUT_AUTH_API,
} from "../common/urls";
import { useDispatch, useSelector } from "react-redux";
import { setPropertyList } from "../redux/reducers/PropertyListReducer";
import { setPropertyCount } from "../redux/reducers/PropertyListReducer";
import HomeIcon from "@mui/icons-material/Home";
import GrainIcon from "@mui/icons-material/Grain";
import { Link } from "react-router-dom";
import theme from "../Theme";
import { useLocation } from "react-router-dom";
import queryString from 'query-string';
import { setSearch, removeSearch } from "../redux/reducers/SearchReducer";

const AllProperties = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  console.log('location', location);
  const userData = useSelector((state) => state.UserReducer.value);
  const paramsArray = useSelector((state) => state.SearchReducer.value);
  // console.log('paramsArray', paramsArray);
  const params = queryString.parse(location.search);
  // console.log('Useparams', params);
  const [pageCount, setPageCount] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const handlePageChange = (event, value) => {

    setPage(value - 1);
  }
  useEffect(() => {
    /* get properties  */
    const getProperties = async () => {

      const apiData = {
        limit: perPage,
        offset: page * perPage,
      };
      if (location.search.includes('limit') && location.search.includes('offset')) {
        location.pathname = location.pathname.replace(/limit=\d+/g, 'limit=' + perPage);
        location.pathname = location.pathname.replace(/offset=\d+/g, 'offset=' + page * perPage);
      }else if (!location.search.includes('limit') && location.search.includes('offset')) {
        location.pathname = location.pathname + '&limit=' + perPage + '&offset=' + page * perPage;
      }else{
        location.pathname = location.pathname + '?limit=' + perPage + '&offset=' + page * perPage;
      }
      //
      console.log('location.pathname', location.pathname);

      // if(params.limit){
      //   apiData.limit = params.limit;
      // }
      // if(params.offset){
      //   apiData.offset = params.offset;
      // }
      if (params.propertyType) {
        apiData.type = params.propertyType;
      }
      if (params.category) {
        apiData.category = params.category;
      }
      if (params.city) {
        apiData.city = params.city;
      }
      if (params.price_from) {
        apiData.price_from = params.price_from;
      }
      if (params.price_to) {
        apiData.price_to = params.price_to;
      }
      if (params.bedroom) {
        apiData.bedroom = params.bedroom;
      }
      if (params.bath) {
        apiData.bath = params.bath;
      }

      console.log("params==>", apiData);
      await axios
        .get(
          userData
            ? GET_PROPERTIES_API
            : GET_PROPERTIES_WITHOUT_AUTH_API,
          {
            params: apiData,
            headers: {
              Authorization: userData && userData.token,
            },
          }
        )
        .then((res) => {
          if (res.data.status) {
            // console.log("add property list", res.data);
            dispatch(setPropertyList(res.data.data));
            dispatch(setPropertyCount(res.data.propertiesCount));
            setPageCount(res.data.propertiesCount);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
    /* get properties  */
    getProperties();
  }, [params]);

  return (
    <Box
      sx={{
        backgroundColor: "#eaf7f4",
      }}
    >
      {/* Header */}
      <Header />
      {/* Header */}
      <BreadcrumbsBanner title="Properties" />
      {/* banner section  */}

      {/* blog area  */}
      <Box>
        <Container
          maxWidth="xl"
          sx={{
            height: "100%",
            padding: {
              xs: "40px 10px",
              sm: "40px 10px",
              md: "40px 10px",
              lg: "40px 0px",
            },
            background: theme.palette.primary.LightVlue2,
          }}
        >
          <Box
            sx={{
              display: { xs: "block", sm: "block", md: "block", lg: "flex" },
              justifyContent: "space-between",
              margin: "30px 0px",
            }}
          >
            {/* property left component */}
            <PropertyLeftBar />
            {/* property left component */}
            {/* Single Property component  */}
            <Property />
            {/* Single Property component  */}
          </Box>
          <Pagination count={Math.round(pageCount / perPage)} color="primary" onChange={handlePageChange} />
        </Container>

      </Box>
      {/* Footer */}
      <Footer />
      {/* Footer */}
    </Box>
  );
};

export default AllProperties;
