import Box from "src/components/Box";
import Typography from "src/components/Typography";
import React, { useState } from "react";
import styled from "styled-components";
const Tab = styled.button`
  background-color: transparent;
  border-radius: 1rem 1rem 0rem 0rem;
  padding: 1.4rem 2rem 1.4rem 2rem;
  cursor: pointer;
  opacity: 0.6;
  border: 0;
  outline: 0;
  opacity: 1;
  ${({ active, theme }) =>
    active &&
    `
        background-color: ${theme.colors.commons.white};
        border-radius: 1rem 1rem 0rem 0rem;
        box-shadow: 0 -22px 26px -4px rgb(96 119 94 / 9%);
  `}
  p {
    ${({ active, theme }) =>
    active &&
    `
        color: ${theme.colors.success.highDark};
    `}
  }
`;
const Tabs = ({ tabMenus, tabContents }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const getTabContent = (index) => {
    return tabContents[index];
  };
  return (
    <>
      <Box flexWrap="wrap" borderRadius="1rem" p="1rem">
        <Box display="flex" flexWrap="wrap" alignItem="center">
          {tabMenus.map((tab, index) => (
            <Tab
              key={tab}
              active={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            >
              <Typography variant="body1">{tab}</Typography>
            </Tab>
          ))}
        </Box>
        <Box
          boxShadow=" 0px 4px 64px rgba(96, 119, 94, 0.09)"
          borderTopRightRadius="1rem"
          borderBottomLeftRadius="1rem"
          borderBottomRightRadius="1rem"
        >
          <Box display="flex" flexWrap="wrap" p="2rem" backgroundColor="commons.white">
          {getTabContent(activeIndex)}
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Tabs;
