import Box from "src/components/Box";
import Typography from "src/components/Typography";
import Pdf from "src/assets/PDF.png";
import Png from "src/assets/PNG.png";
import Export from "src/components/atoms/icons/Export";
import styled from "styled-components";

const BlurrdImageContainer = styled(Box)`
  img {
    filter: grayscale(100%);
  }
`;

const Sliderimg = ({ title, onClick, file, fileType }) => {
  const getFileExtension = (fileName) => {
    return fileName.split(".").pop();
  };
  const getFileImage = (fileType) => {
    if (!fileType) {
      return null;
    }
    let source = null;
    switch (fileType.toLowerCase()) {
      case "png":
      case "jpeg":
      case "jpg":
        source = Png;
        break;
      case "pdf":
        source = Pdf;
        break;
    }
    return <img width="35" src={source} />;
  };
  return (
    <>
      <Box
        className="cursor-pointer"
        border="1px dashed #D9DAE0"
        borderRadius="1.25rem"
        bg=" #FBFBFC"
        p="0.3rem"
        display="flex"
        alignItems="center"
        gridGap="0.5rem"
        height="2.875rem"
        mb="1rem"
        mr="1.2rem"
      >
        {file && (
          <Box ml="-1rem" display="flex">
            {getFileImage(getFileExtension(file.name))}
          </Box>
        )}
        {!file && (
          <BlurrdImageContainer ml="-1rem" display="flex">
            {getFileImage(fileType)}
          </BlurrdImageContainer>
        )}

        <Box>
          <Typography variant="caption2" color="black.highDark">
            {title}
          </Typography>
        </Box>
        <Box onClick={onClick} ml="auto" display="flex">
          <Export />
        </Box>
      </Box>

      {/* <Box
        border="1px dashed #D9DAE0"
        borderRadius="1.25rem"
        bg=" #FBFBFC"
        p="0.3rem"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        height="2.875rem"
        mb="1rem"
        width="10rem"
        mx="1rem"
      >
        <img src={pdf2} style={{ marginLeft: "-1.3rem" }} />

        <Typography
          mr="auto"
          pl="0.8rem"
          variant="caption2"
          color="black.highDark"
        >
          A-Level
        </Typography>

        <Box onClick={onClick}>
          <Export />
        </Box>
      </Box> */}

      {/* <img src={png2} /> */}
      {/* <Box
        border="1px dashed #D9DAE0"
        borderRadius="1.25rem"
        maxWidth="9.75rem"
        bg=" #FBFBFC"
        p="0.3rem"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        height="2.875rem"
      >
        <img src={png2} style={{ marginLeft: "-1.3rem" }} />

        <Typography
          mr="auto"
          pl="0.8rem"
          variant="caption2"
          color="black.highDark"
        >
          A-Level
        </Typography>

        <Export />
      </Box> */}
    </>
  );
};
export default Sliderimg;
