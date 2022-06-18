import Box from "src/components/Box";
import Typography from "src/components/Typography";
import React, { useState } from "react";
import styled from "styled-components";
import ArrowIconRight from "src/components/atoms/icons/Arrowright";
export const CompleteLine = styled(Box)`
  background-color: #fb852f;
  width: 140%;
  margin: 10px 0 0;
  height: 4px;
`;
export const InCompleteLine = styled(Box)`
  background-color: #19b690;
  width: 60%;
  margin: 10px 0 0 auto;
  height: 4px;
`;
const Admin_Total_Applications = () => {
  return (
    <>
      <Box>
        <Typography
          color="black.highDark"
          variant={{ _: "h3", tabletL: "h3", mobile: "subheader1" }}
        >
          Total Applications
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
        <Box>
          <Box>
            <Typography
              color="black.highDark"
              mr="1rem"
              variant={{ _: "h3", tabletL: "h2" }}
            >
              62
            </Typography>
          </Box>
        </Box>
        <Box flex="6 1 200px">
          <Box display="flex" flexWrap="wrap" gridGap="1rem">
            <Box flex="1 1 50px">
              <Typography
                color="black.highDark"
                variant={{
                  _: "body4",
                  tabletL: "body4",
                  mobile: "body4",
                }}
              >
                <Typography
                  color="black.highDark"
                  as="span"
                  variant="subheader1"
                  mr="0.3rem"
                >
                  47
                </Typography>
                Complete
              </Typography>

              <CompleteLine></CompleteLine>
            </Box>
            <Box flex="1 1 50px" textAlign="right">
              <Typography
                color="black.highDark"
                variant={{
                  _: "body4",
                  tabletL: "body4",
                  mobile: "body4",
                }}
              >
                <Typography
                  color="black.highDark"
                  as="span"
                  variant="subheader1"
                  mr="0.3rem"
                >
                  15
                </Typography>
                Incomplete
              </Typography>

              <InCompleteLine></InCompleteLine>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Admin_Total_Applications;
