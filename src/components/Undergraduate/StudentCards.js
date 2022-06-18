import Box from "src/components/Box";
import React from "react";
import Typography from "src/components/Typography";

function StudentCards({ image, text, subheading }) {
  return (
    <>
      <Box
        width={{ mobileL: "33.75rem" }}
        display="flex"
        borderRadius="1.25rem"
        backgroundColor="commons.white"
        padding="1rem"
        boxShadow=" 0px 4px 65px rgba(96, 119, 94, 0.09)"
      >
        <Box>
          <img src={image} />
        </Box>
        <Box padding="2rem">
          <Typography variant="subheader1">
            {subheading}
            <br />
            {text}
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default StudentCards;
