import React from "react";
import Typography from "src/components/Typography";
import styled from "styled-components";
import Box from "src/components/Box";
import { Link } from "react-router-dom";
import { Table, Button, Space } from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    sorter: {
      compare: (a, b) => a.chinese - b.chinese,
      multiple: 3,
    },
  },
  {
    title: "Course Name",
    dataIndex: "chinese",
    sorter: {
      compare: (a, b) => a.chinese - b.chinese,
      multiple: 3,
    },
  },
  {
    title: "Math Score",
    dataIndex: "math",
    sorter: {
      compare: (a, b) => a.math - b.math,
      multiple: 2,
    },
  },
  {
    title: "English Score",
    dataIndex: "english",
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
  {
    title: "Action",
    render: (record) => (
      <Space size="middle">
        <a>Edit</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    chinese: 98,
    math: 60,
    english: 70,
  },
  {
    key: "2",
    name: "Jim Green",
    chinese: 98,
    math: 66,
    english: 89,
  },
  {
    key: "3",
    name: "Joe Black",
    chinese: 98,
    math: 90,
    english: 70,
  },
  {
    key: "4",
    name: "Jim Red",
    chinese: 88,
    math: 99,
    english: 89,
  },
];

const CreateCourseBtn = styled(Box)`
  text-align: right;
  margin-bottom: 20px;
  button {
    color: white;
    background-color: #1fb690;
    border-color: #1fb690;
  }
`;

const Admin_Courses_Table = () => {
  return (
    <Box>
      <CreateCourseBtn>
        <Link to="/admincoursesform">
          <Button>Create New</Button>
        </Link>
      </CreateCourseBtn>

      <Table columns={columns} dataSource={data} />
    </Box>
  );
};

export default Admin_Courses_Table;
