import Box from "src/components/Box";
import Typography from "src/components/Typography";
import React, { useState } from "react";
import styled from "styled-components";

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
        left: calc(50% - 0.4375rem);
        bottom: 0.5rem;
        width: 1.4375rem;
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
const MapTabs = ({ tabMenus, tabContents = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const getTabContent = (index) => {
    return tabContents[index];
  };
  return (
    <>
      <Box>
        <Box display="flex" flexWrap="wrap" alignItem="center">
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
        <Box>
          <Box
            display="flex"
            flexWrap="wrap"
            backgroundColor="commons.white"
            borderTop="1px solid #E9E9E9"
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
export default MapTabs;
