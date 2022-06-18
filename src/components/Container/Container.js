import Box from "src/components/Box";

const Container = ({ children }) => {
  return (
    <Box maxWidth="1200px" mx="auto">
      {children}
    </Box>
  );
};

export default Container;
