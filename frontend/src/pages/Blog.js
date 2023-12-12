import {
  Box,
  Container,
  IconButton,
  Input,
  InputAdornment,
  Paper,
  Typography,
} from "@mui/material";
// import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BreadcrumbsBanner from "../components/BreadcrumbsBanner";

import { Link } from "react-router-dom";
import BlogListing from "../components/BlogListing";
import SearchIcon from "@mui/icons-material/Search";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import theme from "../Theme";
import { useState, useEffect } from "react";
import { GET_BLOGS } from "../common/urls";
import axios from "axios";

const Blog = () => {
  const [searchText, setSearchText] = useState("");
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    // Implement your search logic here
    console.log(`Searching for: ${searchText}`);
  };

  const _getBlogData = async () => {
    await axios
      .get(GET_BLOGS)
      .then((response) => {
        console.log("response_blogs", response);
        if (response.data.status) {
          setBlogData(response.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    _getBlogData();
  }, []);
  return (
    <>
      <Box>
        <Header />
      </Box>
      {/* banner section  */}
      <BreadcrumbsBanner title="Blogs" />
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
              lg: "40px 24px",
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
            <Box
              flex={2}
              paddingLeft={{ xs: "0px", md: "15px" }}
              paddingRight={{ xs: "0px", md: "15px" }}
              className={"LeftBar"}
              sx={{
                display: "grid",
                gap: "15px",
              }}
            >
              {blogData && blogData.map((item, key) => (
              <BlogListing blogDetails={item} key={key} />

              ))}
           
            </Box>
            <Box
              flex={1}
              paddingLeft={{ xs: "0px", md: "15px" }}
              paddingRight={{ xs: "0px", md: "15px" }}
              className={"RightBar"}
            >
              <Box
                sx={{
                  padding: "30px",
                  background: theme.palette.primary.white,
                  border: "1px solid #ebebeb",
                  borderRadius: "8px",
                  marginBottom: "25px",
                  transition: "all 0.4s ease-out",
                  marginTop: {
                    xs: "30px",
                    lg: "0px",
                  },
                  "&:hover": {
                    boxShadow: "0 4px 12px rgba(0,0,0,.1)",
                  },
                }}
              >
                <Paper
                  component="form"
                  sx={{
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    border: "1px solid #ebebeb",
                    boxShadow: "none",
                    minHeight: "45px",
                  }}
                >
                  <Input
                    className="search_input_blg"
                    placeholder="Search Here..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    fullWidth
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton onClick={handleSearch}>
                          <SearchIcon />
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </Paper>
              </Box>
              <Box
                sx={{
                  padding: "25px 20px",
                  background: theme.palette.primary.white,
                  border: "1px solid #ebebeb",
                  borderRadius: "8px",
                  transition: "all 0.4s ease-out",
                  "&:hover": {
                    boxShadow: "0 4px 12px rgba(0,0,0,.1)",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: "22px",
                    color: "#212121",
                    lineHeight: "30px",
                    marginBottom: "25px",
                    fontWeight: "500",
                  }}
                  variant="h6"
                  component={"h3"}
                >
                  Categories Property
                </Typography>

                <Box component={"ul"}>
                  <Box
                    className="category_list"
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "10px 0px",
                    }}
                    component={"li"}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "7px",
                      }}
                      href="#"
                      component={"a"}
                    >
                      <ChevronRightIcon
                        sx={{
                          color: theme.palette.primary.dark,
                          fontSize: "20px",
                        }}
                      />
                      <Typography
                        sx={{
                          color: theme.palette.primary.dark,
                          fontSize: "16px",
                          fontWeight: "400",
                        }}
                        component={"p"}
                      >
                        Apartment
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                      href="#"
                      component={"a"}
                    >
                      <Typography
                        sx={{
                          color: theme.palette.primary.dark,
                          fontSize: "16px",
                          fontWeight: "400",
                        }}
                        component={"p"}
                      >
                        6 properties
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    className="category_list"
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "10px 0px",
                    }}
                    component={"li"}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "7px",
                      }}
                      href="#"
                      component={"a"}
                    >
                      <ChevronRightIcon
                        sx={{
                          color: theme.palette.primary.dark,
                          fontSize: "20px",
                        }}
                      />
                      <Typography
                        sx={{
                          color: theme.palette.primary.dark,
                          fontSize: "16px",
                          fontWeight: "400",
                        }}
                        component={"p"}
                      >
                        Condo
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                      href="#"
                      component={"a"}
                    >
                      <Typography
                        sx={{
                          color: theme.palette.primary.dark,
                          fontSize: "16px",
                          fontWeight: "400",
                        }}
                        component={"p"}
                      >
                        12 properties
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    className="category_list"
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "10px 0px",
                    }}
                    component={"li"}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "7px",
                      }}
                      href="#"
                      component={"a"}
                    >
                      <ChevronRightIcon
                        sx={{
                          color: theme.palette.primary.dark,
                          fontSize: "20px",
                        }}
                      />
                      <Typography
                        sx={{
                          color: theme.palette.primary.dark,
                          fontSize: "16px",
                          fontWeight: "400",
                        }}
                        component={"p"}
                      >
                        Family House
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                      href="#"
                      component={"a"}
                    >
                      <Typography
                        sx={{
                          color: theme.palette.primary.dark,
                          fontSize: "16px",
                          fontWeight: "400",
                        }}
                        component={"p"}
                      >
                        18 properties
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    className="category_list"
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "10px 0px",
                    }}
                    component={"li"}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "7px",
                      }}
                      href="#"
                      component={"a"}
                    >
                      <ChevronRightIcon
                        sx={{
                          color: theme.palette.primary.dark,
                          fontSize: "20px",
                        }}
                      />
                      <Typography
                        sx={{
                          color: theme.palette.primary.dark,
                          fontSize: "16px",
                          fontWeight: "400",
                        }}
                        component={"p"}
                      >
                        Modern Villa
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                      href="#"
                      component={"a"}
                    >
                      <Typography
                        sx={{
                          color: theme.palette.primary.dark,
                          fontSize: "16px",
                          fontWeight: "400",
                        }}
                        component={"p"}
                      >
                        26 properties
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    className="category_list"
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "10px 0px",
                    }}
                    component={"li"}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "7px",
                      }}
                      href="#"
                      component={"a"}
                    >
                      <ChevronRightIcon
                        sx={{
                          color: theme.palette.primary.dark,
                          fontSize: "20px",
                        }}
                      />
                      <Typography
                        sx={{
                          color: theme.palette.primary.dark,
                          fontSize: "16px",
                          fontWeight: "400",
                        }}
                        component={"p"}
                      >
                        Town House
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                      href="#"
                      component={"a"}
                    >
                      <Typography
                        sx={{
                          color: theme.palette.primary.dark,
                          fontSize: "16px",
                          fontWeight: "400",
                        }}
                        component={"p"}
                      >
                        30 properties
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
};
export default Blog;
