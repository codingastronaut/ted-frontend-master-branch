import Box from "src/components/Box";
import Typography from "src/components/Typography";
import React, { useState } from "react";
import styled from "styled-components";
const Line = styled(Box)`
  border-bottom: 1px solid #f2faf8k;
  position: absolute;
  width: 12rem;
  background: #f2faf8;
  border-radius: 0.813rem;
  top: 3rem;
`;
const Revenue = styled(Box)`
  color: #233d62;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  flex: 1;
  margin-top: 0.8rem;
  margin-left: 1rem;
  flex-wrap: wrap;
`;
const Tab = styled.button`
  background-color: transparent;
  border-radius: 1rem 1rem 0rem 0rem;
  padding: 1.2rem 1rem 1.2rem 1.3rem;
  cursor: pointer;
  opacity: 0.6;
  border: 0;
  outline: 0;
  opacity: 1;
  position: relative;
  ${({ theme, active }) =>
    active &&
    `
        p {
        color: ${theme.colors.success.highDark};
        }
        &:before {
        content: '';
        position: absolute;
        left: calc(40% - 1rem);
        bottom: 0.5rem;
        width: 4rem;
        height: 0.125rem;
        border-radius: ${({ theme }) => theme.space["2xs"]};
        background-color: ${theme.colors.success.highDark};
  `}
  p {
    ${({ active, theme }) =>
      active &&
      `
        color: ${theme.colors.success.highDark};
    `}
  }
`;
const Admin_Tabs = ({ tabMenus, tabContents = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const getTabContent = (index) => {
    return tabContents[index];
  };
  return (
    <>
      <Box>
        <Box display="flex" flexWrap="wrap">
          <Box flex="1">
            <Typography
              color="black.highDark"
              variant={{ _: "h3", tabletL: "h3", mobile: "subheader1" }}
            >
              Revenue
            </Typography>
          </Box>
          <Box
            display="flex"
            flexWrap="wrap"
            alignItem="center"
            position="relative"
          >
            <Line></Line>
            {tabMenus.map((tab, index) => (
              <Tab
                key={tab}
                active={activeIndex === index}
                onClick={() => setActiveIndex(index)}
              >
                <Typography variant="body4" color="text.lowDark">
                  {tab}
                </Typography>
              </Tab>
            ))}
          </Box>
        </Box>
        <Box>
          <Box
            display="flex"
            flexWrap="wrap"
            backgroundColor="commons.white"
            borderBottomLeftRadius="1rem"
            borderBottomRightRadius="1rem"
          >
            {getTabContent(activeIndex)}
          </Box>
          <Box></Box>
        </Box>
      </Box>
    </>
  );
};
export default Admin_Tabs;
