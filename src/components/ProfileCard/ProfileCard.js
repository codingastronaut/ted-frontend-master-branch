import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from "src/components/Box";
import Typography from "src/components/Typography";
import styled from "styled-components";
import { padding, marginTop } from "styled-system";
import Colors from "src/core/theme/colors";
import { variant } from "styled-system";
import ladies from "src/assets/Ladies.png";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Pencil from "src/components/atoms/icons/Pencil";
import Ticks from "src/components/atoms/icons/Ticks";
import Check from "src/components/atoms/icons/Check";
import { Formik } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";

const StyledInput = styled.input`
  border-radius: 0;
  width: 11rem;
`;

const ApplicationButton = styled.button`
  background: #19b690;
  margin-top: 4rem;
  margin-bottom: 1rem;
  border: none;
  padding: 1rem 3rem;
  color: #ffffff;
  border-radius: 4.125rem;
  cursor: pointer;
  font-size: 1.125rem;
  width: 100%;
`;
const Circle = styled(Box)`
  width: 12.5rem;
  height: 12.5rem;
  background: #ffffff;
  border: 1px solid #19b690;
  box-sizing: border-box;
  border-radius: 50%;
  position: relative;
`;
const EllipsedTypography = styled(Typography)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 11rem;
`;

const ProfileCard = () => {
  const userd = useSelector((state) => state.auth.user);
  const userimg = useSelector((state) => state.auth.userImg);
  const [profileDetail, setprofileDetail] = useState({});
  const [profileImage, setprofileImage] = useState({});
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const getProfileInfo = async () => {
      let resp = await axios.get(
        `https://61bc64aad8542f0017824709.mockapi.io/profiledetails`
      );
      const notilist = resp.data[0];
      setprofileDetail(notilist);
    };
    getProfileInfo();

    const getProfileImg = async () => {
      let resp2 = await axios.get(
        `https://jsonplaceholder.typicode.com/photos`
      );
      const notilist2 = resp2.data[0];
      setprofileImage(notilist2);
    };
    getProfileImg();
  }, []);

  return (
    <Box
      backgroundColor="#FFFFFF"
      maxWidth={{ _: "100%", tabletL: "20.625rem" }}
      width={{ _: "100%", tabletL: "auto" }}
      borderRadius="1.25rem"
      boxShadow="0px 4px 65px rgba(96, 119, 94, 0.09)"
    >
      <Formik
        initialValues={profileDetail}
        enableReinitialize={true}
        onSubmit={async (values) => {
          let { status } = await axios.put(
            "https://61bc64aad8542f0017824709.mockapi.io/profiledetails/1",
            values
          );
          if (status === 200) {
            setEditMode(false);
          }
        }}
      >
        {({ handleSubmit, handleChange, values }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              p="2rem 0rem"
            >
              <Circle>
                <Box
                  borderRadius="50%"
                  overflow="hidden"
                  height="12.3rem"
                  width="12.3rem"
                  position="absolute"
                  left="1px"
                  right="0"
                  top="1px"
                  bottom="0"
                >
                  <img
                    src={userimg}
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                    }}
                    alt="Profile"
                  />
                </Box>
                <Box
                  borderRadius="3.125rem"
                  width="2.1875rem"
                  height="2.1875rem"
                  padding="0.5rem"
                  border="1px solid #19B690"
                  // ml="auto"
                  // mt="1.4rem"
                  backgroundColor="#FFF"
                  position="absolute"
                  top="1.2rem"
                  left="10.3rem"
                  right="0rem"
                  bottom="0rem"
                >
                  <Pencil />
                </Box>
              </Circle>
            </Box>
            <Box p="2rem 2rem">
              <Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  gridGap="1rem"
                  alignItems="center"
                  mb="1rem"
                >
                  <Typography variant="body3" color="text.noActive">
                    First name
                  </Typography>
                  <Box>
                    {editMode ? (
                      <StyledInput
                        onChange={handleChange}
                        value={values.firstName}
                        name="firstName"
                      />
                    ) : (
                      <EllipsedTypography
                        title={values.firstName}
                        variant="subheader1"
                      >
                        {userd?.username?.substring(0, 5)}
                      </EllipsedTypography>
                    )}
                  </Box>
                </Box>
              </Box>
              <Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  gridGap="1rem"
                  alignItems="center"
                  mb="1rem"
                >
                  <Typography variant="body3" color="text.noActive">
                    Other name
                  </Typography>
                  <Box>
                    {editMode ? (
                      <StyledInput
                        onChange={handleChange}
                        value={values.otherName}
                        name="otherName"
                      />
                    ) : (
                      <EllipsedTypography
                        title={values.firstName}
                        variant="subheader1"
                      >
                        {values.firstName}
                      </EllipsedTypography>
                    )}
                  </Box>
                </Box>
              </Box>
              <Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  gridGap="1rem"
                  alignItems="center"
                  mb="1rem"
                >
                  <Typography variant="body3" color="text.noActive">
                    Last name
                  </Typography>
                  <Box>
                    {editMode ? (
                      <StyledInput
                        onChange={handleChange}
                        value={values.lastName}
                        name="lastName"
                      />
                    ) : (
                      <EllipsedTypography
                        title={values.lastName}
                        variant="subheader1"
                      >
                        {values.lastName}
                      </EllipsedTypography>
                    )}
                  </Box>
                </Box>
              </Box>
              <Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  gridGap="1rem"
                  alignItems="center"
                  mb="1rem"
                >
                  <Typography variant="body3" color="text.noActive">
                    Mobile
                  </Typography>
                  <Box display="flex" alignItems="center">
                    {editMode ? (
                      <StyledInput
                        onChange={handleChange}
                        value={values.mobile}
                        name="mobile"
                      />
                    ) : (
                      <EllipsedTypography
                        title={values.mobile}
                        variant="subheader1"
                      >
                        {values.mobile}
                      </EllipsedTypography>
                    )}
                  </Box>
                </Box>
              </Box>
              <Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  gridGap="1rem"
                  alignItems="center"
                  mb="1rem"
                >
                  <Typography variant="body3" color="text.noActive">
                    Address
                  </Typography>
                  <Box>
                    {editMode ? (
                      <StyledInput
                        onChange={handleChange}
                        value={values.address}
                        name="address"
                      />
                    ) : (
                      <EllipsedTypography
                        title={values.address}
                        variant="subheader1"
                      >
                        {values.address}
                      </EllipsedTypography>
                    )}
                  </Box>
                </Box>
              </Box>
              <Box paddingTop="2rem">
                <Box
                  display="flex"
                  justifyContent="space-between"
                  gridGap="0rem"
                >
                  <Typography variant="body3" color="text.noActive">
                    Proof of Identification
                  </Typography>
                  <Box display="flex">
                    <Box mr="0.4rem" height="0.3rem">
                      <Check />
                    </Box>
                    <Typography variant="body3" color="success.highDark">
                      Upload
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box borderBottom="1px solid #E9E9E9" marginBottom="1rem"></Box>
            <Box p="2rem 2rem">
              <Box
                display="flex"
                position="relative"
                height="14.75rem"
                marginBottom="4rem"
                justifyContent="center"
              >
                <Box position="absolute" bottom="4.5rem">
                  <Typography variant="body3" color="black.highDark">
                    Profile completeness
                  </Typography>
                </Box>
                <CircularProgressbar
                  value={25}
                  text={`25%`}
                  styles={buildStyles({
                    pathColor: Colors.success.highDark,
                    textColor: Colors.success.highDark,
                  })}
                />
              </Box>
              <Box>
                <Typography
                  variant="body1"
                  fontWeight="600"
                  color="black.highDark"
                >
                  Finish this steps below to complete your profile:
                </Typography>
              </Box>
              <Box display="flex" mt="2.6rem">
                <Box>
                  <Ticks />
                </Box>
                <Typography
                  ml="1rem"
                  mt="0.3rem"
                  variant="caption1"
                  color="black.highDark"
                >
                  Upload profile picture
                </Typography>
              </Box>
              <Box display="flex" mt="1rem">
                <Box>
                  <Ticks />
                </Box>
                <Typography
                  ml="1rem"
                  mt="0.3rem"
                  variant="caption1"
                  color="black.highDark"
                >
                  Upload mobile number
                </Typography>
              </Box>
              <Box display="flex" mt="1rem">
                <Box>
                  <Ticks />
                </Box>
                <Typography
                  ml="1rem"
                  mt="0.3rem"
                  variant="caption1"
                  color="black.highDark"
                >
                  Upload address
                </Typography>
              </Box>
              <Box>
                {editMode ? (
                  <ApplicationButton>Save</ApplicationButton>
                ) : (
                  <ApplicationButton
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      setEditMode(true);
                    }}
                  >
                    Complete profile
                  </ApplicationButton>
                )}
              </Box>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};
export default ProfileCard;
