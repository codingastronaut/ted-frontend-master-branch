import styled from "styled-components";
import React, { useState, useEffect } from "react";
import Typography from "src/components/Typography";
import Box from "src/components/Box";
import axios from "axios";
import { useSelector } from "react-redux";

const UniCollege = () => {
  const userd = useSelector((state) => state.auth.user);
  const [uniClg, setUniClg] = useState([]);
  useEffect(() => {
    const getUniCollegeInfo = async () => {
      let config = {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.REACT_APP_AUTH_API_KEY,
        },
      };
      let resp = await axios.get(
        `${process.env.REACT_APP_AUTH_BASE_URL}/university/favourites/user/${userd.id}`,
        config
      );

      setUniClg(resp.data.favUni);
    };
    getUniCollegeInfo();
  }, []);

  return (
    <Box width="100%" padding="20px 15px">
      {uniClg?.map((uniClglist) => (
        <Box borderBottom="1px solid #C0C3C7" mb=".5rem">
          <Typography variant="body2">{uniClglist.name}</Typography>
          <Typography variant="caption2" color="gray.mediumDark" mb="1rem">
            {uniClglist.description}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default UniCollege;
