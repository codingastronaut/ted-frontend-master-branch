import React from "react";
import Box from "src/components/Box";
import Typography from "src/components/Typography";
const ProgressBar = styled.div`
background-color: white;
outline: 1px solid rgb(202, 199, 199);
width: 14.7rem;
border-radius: 15px;
`;
const ProgressBar1 = styled.div`
background-color: #19B690;
color: white;
padding: 1%;
text-align: right;
font-size: 20px;
border-radius: 15px;
width: 30%;
height: 2rem;
`;

const ProgressBar = ({ heading }) => {
  return (
    <>
      <PortalCard heading="To do list" text="Open to do list"
        text1="25%"
      />
    </>);
}

export default ProgressBar;