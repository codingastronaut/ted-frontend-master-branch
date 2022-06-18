import React from "react";
import Box from "src/components/Box";
import Typography from "src/components/Typography";

const ExaminationCard = ({ heading, text }) => {
  return (
    <>
      <Box maxWidth="34rem">
        <Typography variant="h3" color="black.highDark">
          {heading}
        </Typography>
        <Typography variant="body1" color="gray.mediumDark">
          {text}
        </Typography>
      </Box>
    </>
  );
};
export default ExaminationCard;
