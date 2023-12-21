import { useState, useEffect } from "react";
import { Box, Container, Pagination } from "@mui/material";
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
import theme from "../Theme";
import { useLocation } from "react-router-dom";
import queryString from 'query-string';
import { useNavigate } from 'react-router-dom';
const AllProperties = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  // console.log('location', location);
  const userData = useSelector((state) => state.UserReducer.value);
  // console.log('paramsArray', paramsArray);
  const params = queryString.parse(location.search);
  // console.log('Useparams', params);
  const [pageCount, setPageCount] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const [searchParams, setSearchParams] = useState("");
  const urlParams = new URLSearchParams(location.search);
  
  const handlePageChange = (event, value) => {
    setPage(value - 1);

  }

  useEffect(() => {
    /* get properties  */
    const getProperties = async () => {
      urlParams.set('page', page);
      const search_params = urlParams.toString();
      if (search_params !== searchParams) {

        console.log('search_params', search_params);
        navigate('/properties?' + search_params);
        setSearchParams(search_params);

        const apiData = {
          limit: perPage,
          offset: page * perPage,
        };
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

        // console.log("params==>", apiData);
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
              console.log("add property list", res.data);
              dispatch(setPropertyList(res.data.data));
              dispatch(setPropertyCount(res.data.propertiesCount));
              setPageCount(res.data.propertiesCount);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }

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
