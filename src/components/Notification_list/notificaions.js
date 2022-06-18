import React from "react";
import Box from "src/components/Box";
import Typography from "src/components/Typography";
const Notification = ({ text, date }) => {
  return (
    <>
      <Box borderBottom="1px solid #C0C3C7" mb=".5rem">
        <Typography variant="body4">{text}</Typography>
        <Typography variant="caption2" color="text.noActive" mb="1rem">
          {date}
        </Typography>
      </Box>
    </>
  );
};
export default Notification;
