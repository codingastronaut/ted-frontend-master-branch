import React from "react";
import Header from "src/components/header";
import Footer from "src/components/footer";
import Box from "src/components/Box";
import styled from "styled-components";

const StyledTopLayer_1 = styled(Box)`
  background: url("media/Toplayer.png");
  height: 40rem;
  top: 0;
  left: 0;
  right: 0;
  position: absolute;
  background-size: 100% 100%;
  z-index: -1;
`;
const StyledTopLayer_3 = styled(Box)`
  background: url("media/Toplayer.png");
  height: 52.281rem;
  top: 0;
  left: 0;
  right: 0;
  position: absolute;
  background-size: cover;
  z-index: -1;
`;
const StyledCenterLayer_1 = styled(Box)`
  background: url("media/Centerlayer.png");
  height: 91.25rem;
  top: 67.3rem;
  left: 0;
  right: 0;
  position: absolute;
  background-size: cover;
  z-index: -1;
`;
const StyledbottomLayer_2 = styled(Box)`
  background: url("media/bottomlayer1.png");
  height: 105.388rem;
  background-size: cover;
  z-index: -1;
  position: absolute;
  left: 0;
  right: 0;
  top: 215rem;
`;
const StyledbottomLayer_1 = styled(Box)`
  background: url("media/bottomlayer1.png");
  height: 105.388rem;
  background-size: cover;
  z-index: -1;
  position: absolute;
  left: 0;
  right: 0;
  top: 122rem;
`;
const StyledbottomLayer_12 = styled(Box)`
background: url("media/bottomlayer1.png");
  height: 79.388rem;
  background-size: cover;
  z-index: -1;
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  top: 57rem;
`;
const StyledSmallCircleLayer = styled(Box)`
  background: url("media/SmallCircle.png");
  width: 21.938rem;
  height: 21.938rem;
  background-size: cover;
  z-index: -1;
  position: absolute;
  right: 0;
  margin-right: -3rem;
  top: 62rem;
`;
const StyledSmallCircleLayer_1 = styled(Box)`
  background: url("media/Circle2.png");
  background-repeat: no-repeat;
  height: 351px;
  width: 351px;
  top: 38rem;
  z-index: -1;
  position: absolute;
  right: 0;
  margin-right: -3rem;
`;
const StyledbottomLayer_3 = styled(Box)`
  background: url("media/Bottomlayer2.png");
  height: 105.388rem;
  background-repeat: no-repeat;
  z-index: -1;
  position: absolute;
  left: 0;
  right: 0;
  top: 70rem;
`;
const StyledSmallCircleLayer_2 = styled(Box)`
  background: url("media/Circle2.png");
  background-repeat: no-repeat;
  height: 351px;
  width: 351px;
  top: 38rem;
  z-index: -1;
  position: absolute;
  right: 0;
  margin-right: -3rem;
`;
const StyledBigCircle = styled(Box)`
  background: url("media/Bigcircle.png");
  background-repeat: no-repeat;
  height: 6510px;
  width: 600px;
  top: 78rem;
  z-index: -1;
  position: absolute;
  left: 0;
`;
const StyledBigCircle2 = styled(Box)`
  background: url("media/Bigcircle.png");
  background-repeat: no-repeat;
  height: 650px;
  width: 600px;
  top: 14rem;
  z-index: -1;
  position: absolute;
  left: 0;
`;
const StyledSmallCircleLayer_3 = styled(Box)`
  background: url("media/Circle2.png");
  background-repeat: no-repeat;
  height: 351px;
  width: 351px;
  top: 68rem;
  z-index: -1;
  position: absolute;
  right: 0;
  margin-right: -3rem;
`;
const StyledSmallCircleLayer_32 = styled(Box)`
  background: url("media/Circle2.png");
  background-repeat: no-repeat;
  height: 351px;
  width: 351px;
  top: 43rem;
  z-index: -1;
  position: absolute;
  right: 0;
  margin-right: -3rem;
`;
const StyledbottomLayer_4 = styled(Box)`
  background: url("media/Bottomlayer2.png");
  height: 105.388rem;
  background-repeat: no-repeat;
  z-index: -1;
  position: absolute;
  left: 0;
  right: 0;
  top: 63rem;
`;
const StyledbottomLayer_8 = styled(Box)`
  background: url("media/bottomlayer1.png");
  height: 105.388rem;
  background-repeat: no-repeat;
  z-index: -1;
  position: absolute;
  left: 0;
  right: 0;
  top: 174rem;
`;
const StyledbottomLayer_6 = styled(Box)`
  background: url("media/Bottomlayer2.png");
  height: 105.388rem;
  background-repeat: no-repeat;
  z-index: -1;
  position: absolute;
  left: 0;
  right: 0;
  top: 70rem;
`;
const StyledSmallCircleLayer_6 = styled(Box)`
  background: url("media/Circle2.png");
  background-repeat: no-repeat;
  height: 351px;
  width: 351px;
  top: 48rem;
  z-index: -1;
  position: absolute;
  margin-right: -3.5rem;
  right: 0;
`;
const StyledSmallCircleLayer_4 = styled(Box)`
  background: url("media/Circle2.png");
  background-repeat: no-repeat;
  height: 351px;
  width: 351px;
  top: 42rem;
  z-index: -1;
  position: absolute;
  margin-right: -3.5rem;
  right: 0;
`;
const StyledSmallCircleLayer_5 = styled(Box)`
  background: url("media/Circle2.png");
  background-repeat: no-repeat;
  height: 351px;
  width: 351px;
  top: 47rem;
  z-index: -1;
  position: absolute;
  margin-right: -3.5rem;
  right: 0;
`;
const StyledBigCircle_1 = styled(Box)`
  background: url("media/Bigcircle.png");
  background-repeat: no-repeat;
  height: 6510px;
  width: 600px;
  top: 70rem;
  z-index: -1;
  position: absolute;
  left: 0;
  margin-left: -8rem;
`;
const StyledbottomLayer_5 = styled(Box)`
  background: url("media/bottomlayer1.png");
  height: 105.388rem;
  background-repeat: no-repeat;
  z-index: -1;
  position: absolute;
  left: 0;
  right: 0;
  top: 100rem;
`;
const StyledbottomLayer_7 = styled(Box)`
  background: url("media/bottomlayer1.png");
  height: 105.388rem;
  background-size: cover;
  z-index: -1;
  position: absolute;
  left: 0;
  right: 0;
  top: 238.5rem;
`;
const StyledCenterLayer_2 = styled(Box)`
  background: url("media/Centerlayer.png");
  height: 91.25rem;
  top: 92.3rem;
  left: 0;
  right: 0;
  position: absolute;
  background-size: cover;
  z-index: -1;
`;

export const VARIANTS = {
  ONLYTOPLAYOUT: "onlytoplayout",
  ONLYTOPLAYOUT2: "onlytoplayout2",
  DEFAULT: "default",
  FIRSTLAYOUT: "firstlayout",
  SECONDLAYOUT: "secondlayout",
  THIRDLAYOUT: "thirdlayout",
  FOURTHLAYOUT: "fourthlayout",
  FIFTHLAYOUT: "fifthlayout",
  SIXTHLAYOUT: "sixthlayout",
  SEVENTHLAYOUT: "seventhlayout",
  EIGHTLAYOUT: "eightlayout",
  NINTHLAYOUT: "ninthlayout",
  TENLAYOUT: "tenlayout",
};

const Layout = ({ variant, loggedIn, children }) => {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <Box
        position="relative"
        border="1px solid transparent"
        margin="auto"
        overflow="hidden"
        maxWidth="1920px"
        px={{ mobile: "1rem", laptopS: "2rem" }}
      >
        <Box>
          {variant === VARIANTS.ONLYTOPLAYOUT2 && <StyledTopLayer_1 />}
          {variant === VARIANTS.ONLYTOPLAYOUT && <StyledTopLayer_3 />}
          {variant === VARIANTS.DEFAULT && (
            <>
              <StyledTopLayer_3 />
              <StyledSmallCircleLayer_1 />
            </>
          )}
          {variant === VARIANTS.FIRSTLAYOUT && (
            <>
              <StyledTopLayer_3 /> <StyledCenterLayer_1 />
              <StyledbottomLayer_2 />
            </>
          )}
          {variant === VARIANTS.SECONDLAYOUT && (
            <>
              <StyledSmallCircleLayer_3 />
              <StyledBigCircle />
              <StyledTopLayer_3 />
              <StyledbottomLayer_1 />
            </>
          )}
          {variant === VARIANTS.THIRDLAYOUT && (
            <>
              <StyledTopLayer_3 /> <StyledCenterLayer_1 />
              <StyledbottomLayer_2 />
              <StyledSmallCircleLayer />
            </>
          )}
          {variant === VARIANTS.FOURTHLAYOUT && (
            <>
              <StyledbottomLayer_3 />
              <StyledTopLayer_3 />
              <StyledSmallCircleLayer_2 />
            </>
          )}
          {variant === VARIANTS.FIFTHLAYOUT && (
            <>
              <StyledTopLayer_3 />
              <StyledSmallCircleLayer_4 />
              <StyledbottomLayer_4 />
            </>
          )}
          {variant === VARIANTS.SIXTHLAYOUT && (
            <>
              <StyledTopLayer_3 />
              <StyledBigCircle_1 />
              <StyledbottomLayer_5 />
              <StyledSmallCircleLayer_5 />
            </>
          )}
          {variant === VARIANTS.SEVENTHLAYOUT && (
            <>
              <StyledTopLayer_3 />
              <StyledSmallCircleLayer_6 />
              <StyledbottomLayer_6 />
            </>
          )}
          {variant === VARIANTS.EIGHTLAYOUT && (
            <>
              <StyledTopLayer_3 />
              <StyledbottomLayer_7 />
              <StyledCenterLayer_2 />
            </>
          )}
          {variant === VARIANTS.NINTHLAYOUT && (
            <>
              <StyledTopLayer_3 />
              <StyledCenterLayer_1 />
              <StyledbottomLayer_8 />
            </>
          )}
           {variant === VARIANTS.TENLAYOUT && (
            <>
              <StyledSmallCircleLayer_32 />
              <StyledBigCircle2 />
              <StyledbottomLayer_12 />
            </>
          )}
          {children}
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
