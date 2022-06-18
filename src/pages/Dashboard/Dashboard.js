import React, { useState } from "react";
import PortalCard from "src/components/PortalCard";
import Box from "src/components/Box";
import Typography from "src/components/Typography";
import styled from "styled-components";
import Notificationbar from "src/components/Dasboard_notifications";
import Map from "src/components/Dashboard-map";
import ProfileCard from "src/components/ProfileCard";
import Layout, { VARIANTS } from "src/components/layout";
import MapTabs from "src/components/MapTabs";
import Course from "src/components/course/Course";
import UniCollege from "src/components/uniCollege/UniCollege";
import Location from "src/components/location/Location";
import Subject from "src/components/subject/Subject";
import Arrowright from "src/components/atoms/icons/Arrowright";
import { padding } from "styled-system";
import { mediaQuery } from "src/utils/styles";
import { Link } from "react-router-dom";

export const StyledBackgroundLayer = styled(Box)`
  background: url("media/Backgroundimg.png");
  height: calc(100vh - 1rem);
  top: 4.375rem;
  left: 0;
  right: 0;
  position: absolute;
  background-size: cover;
  z-index: -1;
`;
const Custombtn = styled.button`
  background: #19b690;
  border: none;
  padding: 0.5rem 2.0625rem;
  color: #ffffff;
  border-radius: 4.125rem;
  cursor: pointer;
  font-size: 1rem;
`;
const ApplicationButton = styled.button`
  background: #19b690;
  border: none;
  padding: 1.5rem 2.0625rem;
  color: #ffffff;
  border-radius: 4.125rem;
  cursor: pointer;
  ${(props) =>
    props.fullWidth &&
    `
    white-space: nowrap;
  `}
  font-size: 1.5rem;
`;
const PreferenceBtn = styled.button`
  border: 1px solid #19b690;
  box-sizing: border-box;
  border-radius: 66px;
  justify-content: center;
  align-items: center;
  padding: 5px 20px;
  background: #ffffff;
  ${(props) =>
    props.fullWidth &&
    `
    white-space: nowrap;
  `}
`;
const ProgressBar = styled.div`
  background-color: white;
  outline: 1px solid rgb(202, 199, 199);
  // width: 14.7rem;
  border-radius: 15px;
`;
const ProgressBar1 = styled.div`
  background-color: #19b690;
  color: white;
  padding: 1%;
  text-align: right;
  font-size: 20px;
  border-radius: 15px;
  width: ${(props) => props.progress}%;
  height: 2rem;
`;
const Dashboard = () => {
  return (
    <>
      <Layout loggedIn variant={VARIANTS.ONLYTOPLAYOUT}>
        <Box
          display="flex"
          gridGap="1rem"
          maxWidth="1320px"
          margin="0 auto"
          mt="3rem"
          mb="5rem"
          flexWrap={{ _: "wrap", tabletL: "nowrap" }}
          justifyContent="center"
        >
          <ProfileCard></ProfileCard>
          <Box
            display="flex"
            flex="1 1 200px"
            flexDirection="column"
            width={{ mobile: "100%", tablet: "auto" }}
          >
            <Box
              display="flex"
              gridGap={{ _: "0.3rem", desktop: "0.3rem" }}
              justifyContent="space-between"
              flexWrap="wrap"
              minHeight="fit-content"
              flexDirection={{
                mobile: "column",
                tablet: "row",
                laptopS: "row",
              }}
            >
              <PortalCard
                heading="Applications"
                text="Open applications"
                canCreateNewApplication
              />
              <PortalCard
                heading="To do list"
                text="Open to do list"
                text1="25%"
                progress={
                  <ProgressBar>
                    <ProgressBar1 progress={25}></ProgressBar1>
                  </ProgressBar>
                }
              />
              <PortalCard
                canUpload
                heading="Documents"
                text="Uploaded documents: 3/9"
              />
            </Box>
            <Box mt="1rem">
              <a target="_blank" href="https://paystack.com/pay/47e62wznrt">
                <Custombtn>Pay Now</Custombtn>
              </a>
            </Box>
            <Box
              display="flex"
              flexWrap="wrap"
              gridGap="1rem"
              mt="1rem"
              justifyContent="center"
            >
              <Box
                maxWidth={{ _: "100%", desktop: "41.125rem" }}
                width={{ _: "100%", desktop: "auto" }}
                backgroundColor="#FFFFFF"
                borderRadius="1rem"
                boxShadow="0px 4px 65px rgba(96, 119, 94, 0.09)"
                overflow="hidden"
                flex="5 1 300px"
              >
                <Box
                  display="flex"
                  flexWrap="wrap"
                  justifyContent="space-between"
                  width="100%"
                  p=" 0.3rem 1.5rem 1rem 1rem"
                  borderBottom="1px solid #E9E9E9"
                >
                  <Box m="1rem 0rem 0rem 1rem">
                    <Typography variant="subheader1">Favourites</Typography>
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    mt="1rem"
                  >
                    <Typography pr="1rem" variant="caption2" width="20rem">
                      All favourites
                    </Typography>
                    <Arrowright />
                  </Box>
                </Box>
                <MapTabs
                  tabMenus={[
                    // "TOP5",
                    "Courses",
                   "Uni & Collages",
                    // "Locations",
                    // "Subjects",
                  ]}
                  tabContents={[
                    // <Map />,
                    <Course />,
                    <UniCollege />,
                    // <Location />,
                    // <Subject />,
                  ]}
                />
              </Box>
              <Notificationbar />
            </Box>
          </Box>
        </Box>
      </Layout>
    </>
  );
};

export default Dashboard;
