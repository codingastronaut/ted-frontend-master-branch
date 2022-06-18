import Box from "src/components/Box";
import Typography from "src/components/Typography";

const ServiceCard = ({ img, heading, text }) => {
  return (
    <>
      <Box
        className="cursor-pointer"
        my="1rem"
        mx="0.5rem"
        p="1rem"
        borderRadius="1.25rem"
        boxShadow=" 0 2px 4px lightgrey"
        backgroundColor="commons.white"
      >
        <Box display="flex" justifyContent="center" p="4rem">
          <img src={img} style={{ maxWidth: "6.25rem" }} alt="Logo" />
        </Box>
        <Box display="flex" justifyContent="center" mt="3rem">
          <Typography variant="h3" color="success.highDark">
            {heading}
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          textAlign="center"
          mt="3rem"
        >
          <Typography variant="body1" p=" 0rem 1rem">
            {text}
          </Typography>
        </Box>
      </Box>
    </>
  );
};
export default ServiceCard;
