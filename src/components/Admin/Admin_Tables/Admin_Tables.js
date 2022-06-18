import React from "react";
import styled from "styled-components";
import Typography from "src/components/Typography";
import { mediaQuery } from "src/utils/styles";
import Box from "src/components/Box";

const StylTable = styled.table`
  width: 100%;
  border-top: none;
  background: #ffffff;
  text-align: left;
  overflow: hidden;
`;
const TableHeader = styled.thead``;
const StyleRow = styled.tr`
  background: #ffffff;
  &:last-child {
    border-bottom: hidden !important;
  }
`;
const StyleTableHeading = styled.th`
  border-bottom: 0.063rem solid #dfdfdf;
  padding: 1rem;
  text-align: left;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  line-height: 150%;
  color: #233d62;
`;
const TableData = styled.td`
  border-bottom: 0.063rem solid #dfdfdf;
  padding: 1rem;
  text-align: left;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 0.875rem;
  line-height: 1.313rem;
  color: #233d62;
  &:last-child {
    text-align: right !important;
  }
  &:nth-child(2) {
    text-align: center !important;
  }
  &:first-child {
    font-weight: bold;
    font-size: 1rem;
  }
`;
const LinedTypography = styled(Typography)`
  white-space: wrap;
  ${mediaQuery("mobileL")} {
    white-space: nowrap;
  }
`;

const Admin_Tables = () => {
  return (
    <>
      <Box overflow="hidden" height="20rem" width="100%" overflowY="scroll">
        <StylTable>
          <StyleRow>
            <TableData>Lagos</TableData>
            <TableData>$1,671.10</TableData>
            <TableData>39%</TableData>
          </StyleRow>
          <StyleRow>
            <TableData>Abuja</TableData>
            <TableData>$1,064.75</TableData>
            <TableData>30%</TableData>
          </StyleRow>
          <StyleRow>
            <TableData>Kato</TableData>
            <TableData>$1,055.98</TableData>
            <TableData>45%</TableData>
          </StyleRow>
          <StyleRow>
            <TableData>Ogun</TableData>
            <TableData>$1,045.49</TableData>
            <TableData>80%</TableData>
          </StyleRow>
          <StyleRow>
            <TableData>Anambra</TableData>
            <TableData>$2,050.93</TableData>
            <TableData>10%</TableData>
          </StyleRow>
          <StyleRow>
            <TableData>Lagos</TableData>
            <TableData>$1,671.10</TableData>
            <TableData>39%</TableData>
          </StyleRow>
          <StyleRow>
            <TableData>Abuja</TableData>
            <TableData>$1,064.75</TableData>
            <TableData>30%</TableData>
          </StyleRow>
          <StyleRow>
            <TableData>Kato</TableData>
            <TableData>$1,055.98</TableData>
            <TableData>45%</TableData>
          </StyleRow>
          <StyleRow>
            <TableData>Ogun</TableData>
            <TableData>$1,045.49</TableData>
            <TableData>80%</TableData>
          </StyleRow>
          <StyleRow>
            <TableData>Anambra</TableData>
            <TableData>$2,050.93</TableData>
            <TableData>10%</TableData>
          </StyleRow>
          <StyleRow>
            <TableData>Lagos</TableData>
            <TableData>$1,671.10</TableData>
            <TableData>39%</TableData>
          </StyleRow>
          <StyleRow>
            <TableData>Abuja</TableData>
            <TableData>$1,064.75</TableData>
            <TableData>30%</TableData>
          </StyleRow>
          <StyleRow>
            <TableData>Kato</TableData>
            <TableData>$1,055.98</TableData>
            <TableData>45%</TableData>
          </StyleRow>
          <StyleRow>
            <TableData>Ogun</TableData>
            <TableData>$1,045.49</TableData>
            <TableData>80%</TableData>
          </StyleRow>
          <StyleRow>
            <TableData>Anambra</TableData>
            <TableData>$2,050.93</TableData>
            <TableData>10%</TableData>
          </StyleRow>
        </StylTable>
      </Box>
    </>
  );
};
export default Admin_Tables;
