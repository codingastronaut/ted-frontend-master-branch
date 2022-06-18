import React from "react";
import styled from "styled-components";
import Box from "src/components/Box";
import SearchIcon from "src/components/atoms/icons/Search";
import { mediaQuery } from "src/utils/styles";

const VARIANTS = {
  DEFAULT: "default",
  SUCCESS: "success",
};

const StyledInputContainer = styled(Box)`
  padding-right: 3rem;
  padding-left: 1.5rem;
  margin-top: 0.8rem;
  margin-right: 1rem;
  width: auto;
  background: #ffffff;
  border: 0.0125rem solid #edf0f8;
  ${({ variant, theme }) =>
    variant === VARIANTS.SUCCESS &&
    `
    border-color: ${theme.colors.success.highDark};
  `}
  border-radius: 2.5rem;
  position: relative;
  height: 3rem;
  line-height: 2.5rem;
  ${mediaQuery("tabletL")} {
    line-height: 2.5rem;
  }
`;
const StyledIcon = styled.span`
  position: absolute;
  line-height: 3rem;
  right: 1rem;
  ${({ theme }) => `
    svg {
      color: ${theme.colors.gray.lightDefault};
    }
  `}
  ${({ variant, theme }) =>
    variant === VARIANTS.SUCCESS &&
    `
    svg {
      color: ${theme.colors.success.highDark};
    }
  `}
`;

const SearchInput = ({ variant = VARIANTS.DEFAULT }) => {
  return (
    <>
      <StyledInputContainer variant={variant}>
        <input name="search" placeholder="Search" />
        <StyledIcon variant={variant}>
          <SearchIcon />
        </StyledIcon>
      </StyledInputContainer>
    </>
  );
};

export default SearchInput;
