import React, { useState, useEffect } from "react";
import Typography from "src/components/Typography";
import styled from "styled-components";
import Box from "src/components/Box";
import Uparrow from "src/assets/Uparrow.png";
import Bottomarrow from "src/assets/Bottomarrow.png";
import Button from "src/components/button";
import { variant } from "styled-system";
import Rows from "src/components/Table_Rows_Studentportal";
import DataTable from "react-data-table-component";

const StyleTable = styled.table`
  width: 100%;
  margin: 10px;
  border-spacing: 10px;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 10rem;
    background-image: linear-gradient(
      to top,
      rgba(255, 255, 255, 0.6),
      rgba(255, 255, 255, 0.3)
    );
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
  }
`;
const StyleTablehead = styled.thead`
  > tr {
    border-radius: 0.938rem;
    margin-bottom: 18px;
  }
`;
const StyleTablebody = styled.tbody`
  display: block;
  max-height: 36rem;
  overflow: auto;
  border-radius: 1.25rem;
`;
const StyleRow = styled.tr`
  background-color: #ffffff;
  &:nth-child(2n) {
    background-color: #eef8f5;
  }
  display: table;
  width: 100%;
  table-layout: fixed;
`;
const StyleTableheading = styled.th`
  padding: 1rem;
  text-align: left;
  cursor: pointer;
`;
const StyledButton = styled.div`
  max-width: 8.125rem;
  background-color: transparent;
  outline: none;
  padding: 5px 20px;
  text-align: center;
  box-sizing: border-box;
  border-radius: 4.125rem;
  font-family: Roboto;
  font-weight: 500;
  line-height: 16.8px;
  style: normal;
  ${(props) => (props.variant === "disable" ? "color:#DADEE3;" : "#DADEE3")};
  ${(props) =>
    props.variant === "disable" ? "border:1px solid #DADEE3;" : "#DADEE3"};
  ${(props) => (props.variant === "success" ? "color:#19B690;" : "#DADEE3")};
  ${(props) =>
    props.variant === "success" ? "border:1px solid #19B690;" : "#DADEE3"};
  ${(props) => (props.variant === "danger" ? "color:#FB852F;" : "#DADEE3")};
  ${(props) =>
    props.variant === "danger" ? "border:1px solid #FB852F;" : "#DADEE3"};
`;
const SearchInput = styled(Box)`
  justify-content: right;
  display: flex;
  input {
    width: 240px;
    margin-left: auto;
    border: 1px solid #d9d9d9;
    border-radius: 3px;
    padding: 5px 10px;
    margin-top: 20px;
  }
`;
const Table = () => {
  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.Name,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.Email,
      sortable: true,
    },
    {
      name: "Payment Status",
      selector: (row) => row.PaymentStatus,
      sortable: true,
    },
    {
      name: "Agent",
      selector: (row) => row.Agent,
      sortable: true,
    },
    {
      name: "Applications",
      selector: (row) => row.application,
      sortable: true,
    },
    {
      name: "Created at",
      selector: (row) => row.createdat,
      sortable: true,
    },
    {
      name: "Time",
      selector: (row) => row.time,
      sortable: true,
    },
  ];
  const [studentData, setstudentData] = useState([
    {
      id: "4461",
      Name: "Aisha badar",
      Email: "aisha@higher-education-marketing.com",
      PaymentStatus: <StyledButton variant="disable">None</StyledButton>,
      Agent: "-",
      application: "BSc: Chemical Engineering",
      createdat: "2020/08/21",
      time: "13:31:20",
    },
    {
      id: "23",
      Name: "Archie Pollock",
      Email: "aisha@higher-education-marketing.com",
      PaymentStatus: (
        <StyledButton variant="danger">Invoice Created</StyledButton>
      ),
      Agent: "-",
      application: "BSc: Accounting & Finance",
      createdat: "2020/08/21",
      time: "13:31:20",
    },
    {
      id: "341",
      Name: "Jemma Davids",
      Email: "aisha@higher-education-marketing.com",
      PaymentStatus: <StyledButton variant="success">Paid</StyledButton>,
      Agent: "-",
      application: "MSc: Marketing",
      createdat: "2020/08/21",
      time: "13:31:20",
    },
    {
      id: "3431",
      Name: "Steven Smith",
      Email: "aisha@higher-education-marketing.com",
      PaymentStatus: <StyledButton variant="disable">none</StyledButton>,
      Agent: "-",
      application: "pHd: Sustainability",
      createdat: "2020/08/21",
      time: "13:31:20",
    },
    {
      id: "7427",
      Name: "Eduard Baker",
      Email: "aisha@higher-education-marketing.com",
      PaymentStatus: <StyledButton variant="success">Paid</StyledButton>,
      Agent: "-",
      application: "MBA: Business",
      createdat: "2020/08/21",
      time: "13:31:20",
    },
    {
      id: "537",
      Name: "Aisha badar",
      Email: "aisha@higher-education-marketing.com",
      PaymentStatus: <StyledButton variant="disable">None</StyledButton>,
      Agent: "-",
      application: "BSc: Chemical Engineering",
      createdat: "2020/08/21",
      time: "13:31:20",
    },
    {
      id: "34314",
      Name: "Steven Smith",
      Email: "aisha@higher-education-marketing.com",
      PaymentStatus: <StyledButton variant="disable">none</StyledButton>,
      Agent: "-",
      application: "pHd: Sustainability",
      createdat: "2020/08/21",
      time: "13:31:20",
    },
  ]);
  const [mainstates] = useState([
    {
      id: "4461",
      Name: "Aisha badar",
      Email: "aisha@higher-education-marketing.com",
      PaymentStatus: <StyledButton variant="disable">None</StyledButton>,
      Agent: "-",
      application: "BSc: Chemical Engineering",
      createdat: "2020/08/21",
      time: "13:31:20",
    },
    {
      id: "23",
      Name: "Archie Pollock",
      Email: "aisha@higher-education-marketing.com",
      PaymentStatus: (
        <StyledButton variant="danger">Invoice Created</StyledButton>
      ),
      Agent: "-",
      application: "BSc: Accounting & Finance",
      createdat: "2020/08/21",
      time: "13:31:20",
    },
    {
      id: "3417",
      Name: "Jemma Davids",
      Email: "aisha@higher-education-marketing.com",
      PaymentStatus: <StyledButton variant="success">Paid</StyledButton>,
      Agent: "-",
      application: "MSc: Marketing",
      createdat: "2020/08/21",
      time: "13:31:20",
    },
    {
      id: "34310987",
      Name: "Steven Smith",
      Email: "aisha@higher-education-marketing.com",
      PaymentStatus: <StyledButton variant="disable">none</StyledButton>,
      Agent: "-",
      application: "pHd: Sustainability",
      createdat: "2020/08/21",
      time: "13:31:20",
    },
    {
      id: "7427",
      Name: "Eduard Baker",
      Email: "aisha@higher-education-marketing.com",
      PaymentStatus: <StyledButton variant="success">Paid</StyledButton>,
      Agent: "-",
      application: "MBA: Business",
      createdat: "2020/08/21",
      time: "13:31:20",
    },
    {
      id: "537",
      Name: "Aisha badar",
      Email: "aisha@higher-education-marketing.com",
      PaymentStatus: <StyledButton variant="disable">None</StyledButton>,
      Agent: "-",
      application: "BSc: Chemical Engineering",
      createdat: "2020/08/21",
      time: "13:31:20",
    },
    {
      id: "8888",
      Name: "Steven Smith",
      Email: "aisha@higher-education-marketing.com",
      PaymentStatus: <StyledButton variant="disable">none</StyledButton>,
      Agent: "-",
      application: "pHd: Sustainability",
      createdat: "2020/08/21",
      time: "13:31:20",
    },
  ]);

  const handleChange = (e) => {
    if (e.target.value.length) {
      let value = e.target.value;

      let filterObj = mainstates.filter((el) =>
        el.Name.toLowerCase().includes(value)
      );
      console.log(filterObj);
      setstudentData(filterObj);
    } else {
      setstudentData(mainstates);
    }
  };
  return (
    <Box className="student-port-table">
      <SearchInput>
        <input type="text" onChange={handleChange} />
      </SearchInput>
      <DataTable columns={columns} data={studentData} />
    </Box>
  );
};

export default Table;
