import React from "react";
import Box from "src/components/Box";
import Typography from "src/components/Typography";
import Geo from "src/components/atoms/icons/Geo";
import Clock from "src/components/atoms/icons/Clock";
import Calender from "src/components/atoms/icons/Calender";
const Chip = ({ text, year, date }) => {
  return (
    <>
      <Box display="flex" flexWrap="wrap" gridGap="2rem">
        <Box
          display="flex"
          flexGrow="1"
          alignItems="center"
          justifyContent="center"
          gridGap="1rem"
          bg="#F6F8FA"
          borderRadius="0.625rem"
          p="1rem 1.9rem"
        >
          <Geo />
          <Typography>
            {/* Abia */}
            {text}
          </Typography>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          gridGap="1rem"
          flexGrow="1"
          justifyContent="center"
          bg="#F6F8FA"
          borderRadius="0.625rem"
          p="1rem 1.8rem"
        >
          <Clock />
          <Typography>
            {/* 3 Years */}
            {year}
          </Typography>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          gridGap="1rem"
          bg="#F6F8FA"
          flexGrow="1"
          justifyContent="center"
          borderRadius="0.625rem"
          p="1rem 1.8rem"
        >
          <Calender />
          <Typography>
            {/* 09/2022 */}
            {date}
          </Typography>
        </Box>
      </Box>
    </>
  );
};
export default Chip;
