import React from "react";
import styled from "styled-components";
const Styledpagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  color: black;
  font-family: Roboto;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.813rem;
  cursor: pointer;
  overflow: hidden;
  ${({ active }) =>
    active &&
    `
    color:#FFF;
    background-color:#19B690;
  `}
`;
const alphabet = ["1", "2", "3", "4", "...", "12"];
const Numberpagination = ({ current, handleActivePage }) => {
  return alphabet.map((item) => (
    <>
      <Styledpagination
        onClick={() => handleActivePage(item)}
        active={current === item}
      >
        {item}
      </Styledpagination>
    </>
  ));
};
export default Numberpagination;
