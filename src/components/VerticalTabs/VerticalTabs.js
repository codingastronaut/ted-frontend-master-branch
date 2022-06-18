import Box from "src/components/Box";
import Typography from "src/components/Typography";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
const Tab = styled.button`
  background-color: transparent;
  border-radius: 1rem 1rem 0rem 0rem;
  padding: 1rem 2rem;
  cursor: pointer;
  opacity: 0.6;
  border: 0;
  outline: 0;
  opacity: 1;
  ${({ active, theme }) =>
    active &&
    `
        background-color: ${theme.colors.commons.white};
        border-radius: 1.2rem 0rem 0rem 1rem;
        box-shadow: -31px 3px 31px -1px rgb(96 119 94 / 9%);
        mix-blend-mode: color-dodge;
  `}
  p {
    ${({ active, theme }) =>
      active &&
      `
        color: ${theme.colors.success.highDark};
        font-size: 1rem;
        line-height: 1.5rem;

    `}
  }
`;
const VerticalTabs = ({ tabMenus, tabContents }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const getTabContent = (index) => {
    return tabContents[index];
  };
  return (
    <>
      <Box p="1rem" borderRadius="1rem" display="flex">
        <Box width="100rem" display="grid" flexWrap="wrap">
          {tabMenus.map((tab, index) => (
            <Tab
              key={tab}
              active={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            >
              <Typography variant="body1"> {tab}</Typography>
            </Tab>
          ))}
        </Box>
        <Box
          boxShadow=" 0px 4px 64px rgba(96, 119, 94, 0.09)"
          borderTopRightRadius="1rem"
          borderBottomRightRadius="1rem"
          backgroundColor="commons.white"
        >
          <Box display="flex" flexWrap="wrap" p="2rem">
            {getTabContent(activeIndex)}
          </Box>
          <Box></Box>
        </Box>
      </Box>
    </>
  );
};
export default VerticalTabs;
