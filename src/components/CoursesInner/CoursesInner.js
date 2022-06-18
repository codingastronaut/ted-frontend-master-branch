import Box from "src/components/Box";
import Typography from "src/components/Typography";
import React, { useState } from "react";
import { padding } from "styled-system";
import styled from "styled-components";
import ArrowDown from "src/components/atoms/icons/ArrowDown";
import ArrowUp from "src/components/atoms/icons/ArrowUp";
import Simplelist from "src/components/Simple_List";

export const AccorMain = styled(Box)`
  margin-bottom: 15px;
`;
export const ArrowIcon = styled(Box)`
  position: absolute;
  right: 0;
  top: 15px;
`;
export const AccorHeader = styled(Box)`
  margin-bottom: 10px;
  padding: 10px 30px 20px 0;
  border-bottom: 1px solid #dfdfdf;
  cursor: pointer;
  position: relative;
`;
export const AccorInnerdata = styled(Box)`
  background-color: #f4fcfa;
  padding: 30px 15px;
  border-radius: 10px;
`;

const CoursesInner = ({
  heading,
  innerheading1,
  innerheading2,
  firstlist1,
  firstlist2,
  firstlist3,
  firstlist4,
  firstlist5,
  secondlist1,
  secondlist2,
  secondlist3,
  secondlist4,
  secondlist5,
}) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <AccorMain maxWidth="82rem" margin="0 auto">
        <AccorHeader onClick={() => setIsActive(!isActive)}>
          <Typography
            variant={{ _: "body2", tabletL: "subheader3" }}
            color="black.highDark"
          >
            {heading}
            <ArrowIcon>{isActive ? <ArrowDown /> : <ArrowUp />}</ArrowIcon>
          </Typography>
        </AccorHeader>
        {isActive && (
          <AccorInnerdata flexWrap="wrap" display="flex" gridGap="1rem">
            <Box flex={{ tabletL: "1 1 220px", mobile: "1 1 335px" }}>
              <Typography
                variant={{ _: "body2", tabletL: "subheader1" }}
                color="success.highDark"
                mb="1rem"
              >
                {innerheading1}:
              </Typography>

              <Simplelist data={[firstlist1]} />
            </Box>
            <Box flex={{ tabletL: "1 1 220px", mobile: "1 1 335px" }}>
              <Typography
                variant={{ _: "body2", tabletL: "subheader1" }}
                color="success.highDark"
                mb="1rem"
              >
                {innerheading2}:
              </Typography>
              <Simplelist data={[secondlist1]} />
            </Box>
          </AccorInnerdata>
        )}
      </AccorMain>
    </>
  );
};
export default CoursesInner;
