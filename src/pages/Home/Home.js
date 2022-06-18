import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Box from "src/components/Box";
import Typography from "src/components/Typography";
import styled from "styled-components";
import img_1 from "src/assets/Homeimg_1.svg";
import Input from "src/components/SearchInput";
import Swipercontainer from "src/components/Swiper";
import Layout, { VARIANTS } from "src/components/layout";
import Search from "src/components/atoms/icons/Search";
import { Oval } from "react-loader-spinner";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { setTimeout } from "timers";

function HomePage() {
  const navigate = useNavigate();
  // const { id } = useParams();
  // const userd = useSelector((state) => state.auth.user);
  // const [universitydetail, setUniversitydetail] = useState({});
  const [data, setData] = useState([]);
  const [dataUni, setDataUni] = useState([]);
  const [show, setShow] = useState(false);
  const [loader, setLoader] = useState(false);
  const searchRef = useRef(null);

  // useEffect(() => {
  //   if (id) {
  //     (async () => {
  //       let config = {
  //         headers: {
  //           "Content-Type": "application/json",
  //           "x-api-key": process.env.REACT_APP_AUTH_API_KEY,
  //           Authorization: `Bearer ${userd?.token}`,
  //         },
  //       };
  //       let respdd = await axios.get(
  //         `${process.env.REACT_APP_AUTH_BASE_URL}/university/${id}`,
  //         config
  //       );
  //       setUniversitydetail(respdd.data.university);
  //     })();
  //   }
  // }, [id]);
  const searchItems = async (e) => {
    if (e.target.value.length) {
      setShow(true);
      setLoader(true);
      let valuess = e.target.value;
      let searcVal = {
        search: valuess,
      };
      try {
        let config = {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.REACT_APP_AUTH_API_KEY,
          },
        };
        let resp = await axios.post(
          `${process.env.REACT_APP_AUTH_BASE_URL}/search`,
          searcVal,
          config
        );

        setLoader(false);
        setData(resp.data.courses);
        setDataUni(resp.data.universities);
      } catch (error) {
        setLoader(false);
      }
    } else {
      setShow(false);
    }
  };

  const handleLeave = (e) => {
    setShow(false);
  };
  const handleEnter = (e) => {
    setTimeout(() => {
      setShow(true);
    }, 100);
  };
  const handleNav = (id, prop) => {
    searchRef.current.focus();
    if (prop == "course") {
      navigate(`/coursesInnerpage/${id}`);
    } else {
      navigate(`/universityInnerpage/${id}`);
    }
  };
  const handleBlur = () => {
    setTimeout(() => {
      setShow(false);
    }, 400);
  };
  return (
    <>
      <Layout variant={VARIANTS.FOURTHLAYOUT} loggedIn>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          mt="9rem"
          mb="6rem"
        >
          <Box>
            <Typography variant="h1">Choose your future</Typography>
            <Typography variant="h3" mt="2.5rem" textAlign="justify">
              We helps to inspire and empower people <br />
              to make aspirational choices about higher <br />
              education and learning
            </Typography>
            <Box mt="3.125rem" maxWidth="29.938rem" className="input-style">
              <input
                onChange={searchItems}
                onBlur={handleBlur}
                variant="success"
                ref={searchRef}
                placeholder="Search..."
              />
              {show && (
                <>
                  {data.length || dataUni.length >= 1 ? (
                    <Box className="universal-search">
                      <Box>
                        {data.length >= 1 ? (
                          <>
                            <h1>courses</h1>
                            {data.map((item) => {
                              return (
                                <Box>
                                  <div
                                    onClick={() =>
                                      handleNav(item._id, "course")
                                    }
                                  >
                                    {item.name}
                                  </div>
                                </Box>
                              );
                            })}
                          </>
                        ) : (
                          ""
                        )}
                        {dataUni.length >= 1 ? (
                          <>
                            <h1>Universities</h1>
                            {dataUni.map((item) => {
                              return (
                                <Box>
                                  <div
                                    onClick={() => handleNav(item._id, "uni")}
                                  >
                                    {item.name}
                                  </div>
                                </Box>
                              );
                            })}
                          </>
                        ) : (
                          ""
                        )}
                      </Box>
                    </Box>
                  ) : (
                    ""
                  )}
                </>
              )}
              {loader && (
                <Oval
                  color="#00BFFF"
                  height={30}
                  width={30}
                  className="loader"
                />
              )}
              <Search />
            </Box>
          </Box>
          <Box maxWidth="32.75rem">
            <img src={img_1} width="100%" />
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="baseline"
          margin="auto"
          maxWidth="70rem"
          overflow="hidden"
        >
          <Box
            display="flex"
            alignItems="center"
            flexWrap="wrap"
            gridGap="10rem"
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexWrap="wrap"
              gridGap="11rem"
            >
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                flexWrap="wrap"
              >
                <Box>
                  <Typography variant="h1" color="success.highLight">
                    512
                  </Typography>
                  <Typography variant="body1">Successful cases</Typography>
                </Box>
                <Box>
                  <Typography variant="h1" color="success.highLight">
                    513
                  </Typography>
                  <Typography variant="body1">Successful cases</Typography>
                </Box>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                flexWrap="wrap"
              >
                <Box>
                  <Typography variant="h1" color="success.highLight">
                    514
                  </Typography>
                  <Typography variant="body1">Successful cases</Typography>
                </Box>
                <Box>
                  <Typography variant="h1" color="success.highLight">
                    515
                  </Typography>
                  <Typography variant="body1">Successful cases</Typography>
                </Box>
              </Box>
            </Box>
            <Box maxWidth="29.125">
              <Typography variant="h2">
                About&nbsp;
                <Box display="inline" color="success.highDark">
                  us
                </Box>
              </Typography>
              <Box maxWidth="29.125rem">
                <Typography mt="1rem" variant="body1">
                  We helps to inspire and empower people to make aspirational
                  choices about higher education and learning.
                </Typography>
                <Typography mt="1.5rem">
                  Our services is more than just an undergraduate admissions
                  service. We offer several services for different audiences,
                  and those who want to reach them.
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box>
              <Typography variant="h2" mt="12rem" mb="2rem">
                What
                <Box display="inline" color="success.highDark">
                  &nbsp;we&nbsp;
                </Box>
                do:
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box>
            <Swipercontainer />
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="baseline"
          margin="auto"
          maxWidth="70rem"
          mb="5rem"
        >
          <Typography variant="body1" textAlign="center" mt="3rem">
            We helps to inspire and empower people to make aspirational choices
            about higher education and learning. Our services is more than just
            an undergraduate admissions service. We offer several services for
            different audiences, and those who want to reach them.
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="end"
          flexWrap="wrap"
          gridGap="4rem"
          mt="9rem"
          mb="10rem"
        >
          <Box>
            <Typography variant="h2">
              Find your&nbsp;
              <Box color="success.highDark" display="inline">
                future
              </Box>
            </Typography>
          </Box>
          <Box width="28.75rem">
            <Input variant="success" />
          </Box>
        </Box>
      </Layout>
    </>
  );
}
export default HomePage;
