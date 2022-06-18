import Box from "src/components/Box";
import Typography from "src/components/Typography";
import styled from "styled-components";
const StateCard = ({ item }) => {
  const { state, stateTitle, capital } = item;
  return (
    <>
      <Box
        display="flex"
        width={{ _: "auto", mobileL: "31.5rem" }}
        gridGap="2rem"
        p="1rem"
        borderRadius="0.625rem"
        boxShadow="0px 4px 65px rgba(96, 119, 94, 0.09)"
        backgroundColor="commons.white"
        height="11.375rem"
      >
        <Box>
          <Typography p="0.25rem" variant="body3" color="success.highDark">
            State
          </Typography>
          <Typography variant="subheader1">{state}</Typography>
          <Typography
            p="0.25rem"
            variant="body3"
            color="success.highDark"
            pt="1rem"
          >
            Capital
          </Typography>
          <Typography variant="subheader1">{capital}</Typography>
        </Box>
        <Box>
          <Typography p="0.25rem" variant="body3" color="success.highDark">
            State title
          </Typography>
          <Typography variant="subheader1">{stateTitle}</Typography>
        </Box>
      </Box>
    </>
  );
};

export default StateCard;
