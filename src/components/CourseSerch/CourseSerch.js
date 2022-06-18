import React from "react";
import Box from "src/components/Box";
import Typography from "src/components/Typography";
import Chip from "src/components/Chip";
import Abertay_card from "src/assets/Abertay_card.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { mediaQuery } from "src/utils/styles";
import Star from "src/components/atoms/icons/Star";
import { useSelector } from "react-redux";
import axios from "axios";
export const StyledLineLeyer = styled(Box)`
   {
    text-decoration-line: underline;
  }
`;
export const StyledBackgroundLeyer = styled(Box)`
  background: url("media/Abortaye.png");
  background-size: cover;
  z-index: 1;
  width: 100%;
  min-height: 20rem;
  min-width: auto;
  background-repeat-x: no-repeat;
  border-bottom-left-radius: 1.25rem;

  ${mediaQuery("mobile")} {
    background-size: cover;
    background-position: left;
  }
  ${mediaQuery("mobileM")} {
    background-size: cover;
    border-bottom-left-radius: 0rem;
  }
  ${mediaQuery("mobileL")} {
    background-size: cover;
    border-top-left-radius: 1.25rem;
    border-top-right-radius: 1.25rem;
    border-bottom-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  ${mediaQuery("tabletL")} {
    background-size: cover;
    border-top-right-radius: 0;
  }
  &:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 12rem;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 47.55%,
      rgba(0, 0, 0, 0.72) 78.81%,
      #000000 88.08%,
      #000000 100%
    );
    border-bottom-left-radius: 1.25rem;
    border-bottm-right-radius: 1.25rem;
    border-bottom-left-radius: 0 !important;
  }
`;

const CourseSerch = ({
  heading,
  courses,
  website,
  course,
  acccountancy,
  uniId,
}) => {
  const userd = useSelector((state) => state.auth.user);

  const heartEmpty = async () => {
    let tempObj = {
      courseId: uniId,
      userId: userd.id,
    };
    let config = {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.REACT_APP_AUTH_API_KEY,
        Authorization: `Bearer ${userd?.token}`,
      },
    };
    let respdd = await axios.patch(
      `${process.env.REACT_APP_AUTH_BASE_URL}/add/favourite/course`,
      tempObj,
      config
    );
    console.log(respdd);
  };
  return (
    <>
      <Box
        display="flex"
        flexWrap="wrap"
        bg="commons.white"
        boxShadow="0px 4px 65px rgba(96, 119, 94, 0.09)"
        borderRadius="1.25rem"
        mt="1rem"
        overflow="hidden"
      >
        <Box
          position="relative"
          maxWidth={{ mobile: "100%", tabletL: "25.188rem" }}
          width="100%"
          display="flex"
          flexWrap="wrap"
        >
          <StyledBackgroundLeyer>
            <Box
              maxWidth="8.188rem"
              position="absolute"
              top="1.5rem"
              left="2rem"
              right="0.7rem"
              borderRadius="0.625rem"
              bg="commons.white"
              height="8.188rem"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <img src={Abertay_card} />
            </Box>

            <Box position="absolute" bottom="2rem" left="2rem" right="0.7rem">
              <Typography variant="h2" color="commons.white" mt="1rem">
                {heading}
              </Typography>
              <Typography variant="body3" color="commons.white" mt="0.7rem">
                {courses}
              </Typography>
              <Typography
                variant="subheader1"
                color="success.highDark"
                mt="0.7rem"
              >
                <StyledLineLeyer>{website}</StyledLineLeyer>
              </Typography>
            </Box>
          </StyledBackgroundLeyer>
        </Box>
        {/* Box 2 */}
        <Box p="2rem" flex="1">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt="2rem"
          >
            <Typography variant="subheader1" color="gray.lowDark">
              {/* Course */}
              {course}
            </Typography>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              gridGap="1rem"
              bg="#F6F8FA"
              borderRadius="0.625rem"
              p="1rem 1.9rem"
              ml="auto"
            >
              <Box onClick={() => heartEmpty()}>
                <Star />
              </Box>
            </Box>
          </Box>
          <Box mr="auto" maxWidth="25rem" display="1 1 200px">
            <Typography variant="h2" color="black.default" mt="2rem">
              {/* Accountancy and <br /> Business Management */}
              {acccountancy}
            </Typography>
          </Box>
          <Box display="flex" flexWrap="wrap" mt="3rem">
            <Chip text="Abia" year="3 Years" date="09/2022" />
          </Box>
        </Box>
      </Box>
      {/* <Chip /> */}
    </>
  );
};
export default CourseSerch;
