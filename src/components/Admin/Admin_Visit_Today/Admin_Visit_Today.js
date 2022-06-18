import Box from "src/components/Box";
import Typography from "src/components/Typography";
import React, { useState } from "react";
import styled from "styled-components";
import ArrowRightUp from "src/components/atoms/icons/ArrowRightUp";
import ArrowIconRight from "src/components/atoms/icons/Arrowright";

const Admin_Visit_Today = () => {
  return (
    <>
      <Box>
        <Typography
          color="black.highDark"
          variant={{ _: "h3", tabletL: "h3", mobile: "subheader1" }}
        >
          Visits today
        </Typography>
      </Box>
      <Box>
        <Typography
          color="black.highDark"
          variant={{
            tablet: "caption2",
            _: "caption2",
            mobile: "caption2",
          }}
        >
          Details
          <Typography as="span" ml="0.5rem">
            <ArrowIconRight />
          </Typography>
        </Typography>
      </Box>
      <Box display="flex" flexWrap="wrap" gridGap="1rem" mt="1rem">
        <Box flex="1 1 200px">
          <Box display="flex" flexWrap="wrap" gridGap="1rem" textAlign="center">
            <Box flex="1 1 50px">
              <Typography
                color="black.highDark"
                variant={{
                  _: "subheader1",
                  tabletL: "subheader1",
                  mobile: "body3",
                }}
              >
                +830
              </Typography>

              <Typography
                color="black.highDark"
                variant={{
                  tablet: "body4",
                  _: "body4",
                  mobile: "body4",
                }}
              >
                Logins
              </Typography>
            </Box>
            <Box flex="1 1 50px">
              <Typography
                color="black.highDark"
                variant={{
                  _: "subheader1",
                  tabletL: "subheader1",
                  mobile: "body3",
                }}
              >
                0.5%
              </Typography>

              <Typography
                color="black.highDark"
                variant={{
                  tablet: "body4",
                  _: "body4",
                  mobile: "body4",
                }}
              >
                Sign Out
              </Typography>
            </Box>
            <Box flex="1 1 50px">
              <Typography
                color="black.highDark"
                variant={{
                  _: "subheader1",
                  tabletL: "subheader1",
                  mobile: "body3",
                }}
              >
                4.5%
              </Typography>

              <Typography
                color="black.highDark"
                variant={{
                  tablet: "body4",
                  _: "body4",
                  mobile: "body4",
                }}
              >
                Rate
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box flex="1 1 200px">
          <Box>
            <Typography
              color="black.highDark"
              variant={{ _: "h3", tabletL: "h2" }}
              textAlign="center"
            >
              4,332 <ArrowRightUp />
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Admin_Visit_Today;
