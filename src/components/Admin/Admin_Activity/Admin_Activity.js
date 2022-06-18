import Box from "src/components/Box";
import Typography from "src/components/Typography";
import React, { useState } from "react";
import styled from "styled-components";

const Mincontent = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  background: #eef8f5;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  color: #19b690;
  font-weight: 500;
  font-size: 14px;
`;
const Admin_Activity = () => {
  return (
    <>
      <Box>
        <Typography
          color="black.highDark"
          pb="1rem"
          variant={{ _: "h3", tabletL: "h3", mobile: "subheader1" }}
        >
          Activity
        </Typography>
      </Box>
      <Box overflow="hidden" height="28rem" overflowY="scroll">
        <Box
          display="flex"
          gridGap="0.6rem"
          mb="1rem"
          width="100%"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="body3" color="black.highDark">
            John
          </Typography>
          <Mincontent>Registered</Mincontent>
        </Box>
        <Box
          display="flex"
          gridGap="0.6rem"
          mb="1rem"
          width="100%"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="body3" color="black.highDark">
            Amaka
          </Typography>
          <Mincontent>Paid</Mincontent>
        </Box>
        <Box
          display="flex"
          gridGap="0.6rem"
          mb="1rem"
          width="100%"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="body3" color="black.highDark">
            Amaka
          </Typography>
          <Mincontent>Paid</Mincontent>
        </Box>
        <Box
          display="flex"
          gridGap="0.6rem"
          mb="1rem"
          width="100%"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="body3" color="black.highDark">
            Amaka
          </Typography>
          <Mincontent>Paid</Mincontent>
        </Box>
        <Box
          display="flex"
          gridGap="0.6rem"
          mb="1rem"
          width="100%"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="body3" color="black.highDark">
            Amaka
          </Typography>
          <Mincontent>Paid</Mincontent>
        </Box>
        <Box
          display="flex"
          gridGap="0.6rem"
          mb="1rem"
          width="100%"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="body3" color="black.highDark">
            Amaka
          </Typography>
          <Mincontent>Paid</Mincontent>
        </Box>
        <Box
          display="flex"
          gridGap="0.6rem"
          mb="1rem"
          width="100%"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="body3" color="black.highDark">
            Wesley
          </Typography>
          <Mincontent>Application submited</Mincontent>
        </Box>
        <Box
          display="flex"
          gridGap="0.6rem"
          mb="1rem"
          width="100%"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="body3" color="black.highDark">
            Alex
          </Typography>
          <Mincontent>Registered</Mincontent>
        </Box>
        <Box
          display="flex"
          gridGap="0.6rem"
          mb="1rem"
          width="100%"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="body3" color="black.highDark">
            Albert
          </Typography>
          <Mincontent>Paid</Mincontent>
        </Box>
        <Box
          display="flex"
          gridGap="0.6rem"
          mb="1rem"
          width="100%"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="body3" color="black.highDark">
            Wesley
          </Typography>
          <Mincontent>Paid</Mincontent>
        </Box>
        <Box
          display="flex"
          gridGap="0.6rem"
          mb="1rem"
          width="100%"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="body3" color="black.highDark">
            Alexander
          </Typography>
          <Mincontent>Registered</Mincontent>
        </Box>
        <Box
          display="flex"
          gridGap="0.6rem"
          mb="1rem"
          width="100%"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="body3" color="black.highDark">
            Molly
          </Typography>
          <Mincontent>Deleted</Mincontent>
        </Box>
        <Box
          display="flex"
          gridGap="0.6rem"
          mb="1rem"
          width="100%"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="body3" color="black.highDark">
            Wesley
          </Typography>
          <Mincontent>Submited</Mincontent>
        </Box>
      </Box>
    </>
  );
};
export default Admin_Activity;
