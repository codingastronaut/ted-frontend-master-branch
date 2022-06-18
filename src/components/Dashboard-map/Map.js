import React from "react";
import Box from "src/components/Box";
import Typography from "src/components/Typography";
import NavMenu from "src/components/NavMenu";
import Link from "src/components/Link";
import styled from "styled-components";
import Heart_icon from "src/assets/Heart_icon.svg";
const StyleUlist = styled.ul`
  list-style: none;
`;
const Stylelist = styled.li`
  color: white;
`;
const Mapbox = () => {
  return (
    <>
      <Box
        display="flex"
        flex="1"
        alignItems="center"
        flexWrap="wrap"
        justifyContent="center"
        gridGap="2rem"
        borderBottomRightRadius="1rem"
        borderBottomLeftRadius="1rem"
      >
        <Box flex="1 1 200px" textAlign="center" p="2.2rem">
          <Box>
            <img src={Heart_icon} />
            <Typography variant="caption1" color="text.noActive">
              Add favourite course <br />
              to top 5
            </Typography>
          </Box>
        </Box>
        <Box flex="4 1 300px" padding="0.8rem">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.808984134496!2d-1.256555484220915!3d51.75481637967651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c6a9ef8c485b%3A0xd2ff1883a001afed!2sUniversity%20of%20Oxford!5e0!3m2!1sen!2s!4v1637963672097!5m2!1sen!2s"
            Width="100%"
            height="533px"
          ></iframe>
        </Box>
      </Box>
    </>
  );
};
export default Mapbox;
