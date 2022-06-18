import React from "react";
import styled from "styled-components";
const Styledpagination = styled.div`
  padding: 0.2rem 0.7rem;
  border-radius: 50%;
  color: black;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 29px;
  cursor: pointer;
  ${({ active }) =>
    active &&
    `
    color:#FFF;
    background-color:#19B690;
  `}
`;
const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const Lettersbuttons = ({ current, handleActivePage }) => {
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
export default Lettersbuttons;
