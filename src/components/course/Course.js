import styled from "styled-components";
import React, { useState, useEffect } from "react";
import Typography from "src/components/Typography";
import Box from "src/components/Box";
import axios from "axios";
import { useSelector } from "react-redux";

const Course = () => {
  const userd = useSelector((state) => state.auth.user);
  const [corse, setCourse] = useState([]);
  useEffect(() => {
    const getCourseInfo = async () => {
      let config = {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.REACT_APP_AUTH_API_KEY,
        },
      };
      let resp = await axios.get(
        `${process.env.REACT_APP_AUTH_BASE_URL}/favourite/course/user/${userd.id}`,
        config
      );
      setCourse(resp.data.favCourse);
    };
    getCourseInfo();
  }, []);

  return (
    <Box width="100%" padding="20px 15px">
      {corse?.map((couserlist) => (
        <Box borderBottom="1px solid #C0C3C7" mb=".5rem">
          <Typography variant="body2">{couserlist.name}</Typography>
          <Typography variant="caption2" color="gray.mediumDark" mb="1rem">
            {couserlist.description}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Course;
