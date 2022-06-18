import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Box from "src/components/Box";
import { Link } from "react-router-dom";
import EditIcon from "src/components/atoms/icons/Edit_icon";
import DeleteIcon from "src/components/atoms/icons/Delete_icon";
import DataTable from "react-data-table-component";
import { useHistory, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useSelector } from "react-redux";

const CreateCourseBtn = styled(Box)`
  text-align: right;
  margin-bottom: 20px;
`;
const Button = styled.button`
  color: white;
  background-color: #1fb690;
  box-shadow: none;
  outline: none;
  border: 1px solid #1fb690;
  padding: 8px 20px;
  cursor: pointer;
  border-radius: 20px;
  &:hover {
    border: 1px solid #1fb690;
    color: #1fb690;
    background-color: #fff;
  }
`;
const CourseTable = styled(Box)`
  text-align: left;
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
  }
`;

const Admin_Courses_Table = () => {
  const userd = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const [allPost, setAllPost] = useState([]);
  const [mainPost, setMainPost] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const getCoursesInfo = async () => {
      let config = {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.REACT_APP_AUTH_API_KEY,
          Authorization: `Bearer ${userd?.token}`,
        },
      };
      let respdd = await axios.get(
        `${process.env.REACT_APP_AUTH_BASE_URL}/courses?`,
        config
      );
      const userlistdd = respdd.data;
      setAllPost(userlistdd.courses);
      setMainPost(userlistdd.courses);
    };
    getCoursesInfo();
  }, [count]);

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "description",
      selector: (row) => row.description,
      sortable: true,
    },
    {
      name: "Universities",
      selector: (row) => row?.university?.name,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row, index) => (
        <div size="middle">
          <a onClick={() => navigate(`/admincoursesform/${row._id}`)}>
            <EditIcon />
          </a>
          <a onClick={() => deletePost(row._id)}>
            <DeleteIcon />
          </a>
        </div>
      ),
    },
  ];
  //  Delete row from api list
  const deletePost = async (id) => {
    let config = {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.REACT_APP_AUTH_API_KEY,
        Authorization: `Bearer ${userd?.token}`,
      },
    };
    const datl = await axios.delete(
      `${process.env.REACT_APP_AUTH_BASE_URL}/course/${id}`,
      config
    );
    if (datl.status == 200) {
      toast.success("Deleted Successfully");
      setCount(count + 1);
    } else {
      alert("Error Found");
    }
  };

  const handleChange = (e) => {
    if (e.target.value.length) {
      let value = e.target.value.toLowerCase();
      console.log(value, mainPost);
      let filterObj = mainPost.filter((el) =>
        el?.name?.toLowerCase().includes(value)
      );

      setAllPost(filterObj);
    } else {
      setAllPost(mainPost);
    }
  };

  return (
    <Box>
      <ToastContainer />
      <CreateCourseBtn>
        <Link to="/admincoursesform">
          <Button>Create New</Button>
        </Link>
      </CreateCourseBtn>

      <CourseTable className="table-responsive courses-table">
        <SearchInput>
          <input type="text" onChange={handleChange} />
        </SearchInput>
        <DataTable columns={columns} data={allPost} pagination={true} />
      </CourseTable>
    </Box>
  );
};

export default Admin_Courses_Table;
