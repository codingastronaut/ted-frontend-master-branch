import React from "react";
import styled from "styled-components";
import Typography from "src/components/Typography";
import Button from "src/components/button";
import Buttonimg from "src/components/atoms/icons/ArrowButton.tsx";

const StyleRow = styled.tr`
  background-color: #ffffff;
  &:nth-child(2n) {
    background-color: #eef8f5;
  }
  display: table;
  width: 100%;
  table-layout: fixed;
`;
const StyleTableData = styled.td`
  padding: 1rem;
  text-align: left;
`;
const Rows = ({ item }) => {
  const {
    id,
    Name,
    Email,
    PaymentStatus,
    Agent,
    application,
    createdat,
    time,
  } = item;
  return (
    <StyleRow>
      <StyleTableData>
        <Typography variant="body4">{id}</Typography>
      </StyleTableData>
      <StyleTableData>
        <Typography variant="body4">{Name}</Typography>
      </StyleTableData>
      <StyleTableData>
        <Typography variant="caption2">{Email}</Typography>
      </StyleTableData>
      <StyleTableData>
        <Typography variant="caption2">{PaymentStatus}</Typography>
      </StyleTableData>
      <StyleTableData>
        <Typography variant="caption2">{Agent}</Typography>
      </StyleTableData>
      <StyleTableData>
        <Button
          color="commons.white"
          fontVariant="caption2"
          size="md"
          shape="rectangle"
        >
          {application}
        </Button>
      </StyleTableData>
      <StyleTableData>
        <Typography variant="caption2" color="text.noActive">
          {createdat}
          <br />
          {time}
        </Typography>
      </StyleTableData>
      <StyleTableData>
        <Typography variant="caption2">
          <Buttonimg />
        </Typography>
      </StyleTableData>
    </StyleRow>
  );
};

export default Rows;
