import Box from "src/components/Box";
import Typography from "src/components/Typography";
import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Teacher_list from "src/components/atoms/icons/Teacher_list";
import Doller_list from "src/components/atoms/icons/Doller_list";
import Contact_list from "src/components/atoms/icons/Contact_list";
import Book_list from "src/components/atoms/icons/Book_list";
const MenuStyling = styled(Box)`
  a:hover {
    width: 100%;
    background: #eef8f5;
    border-radius: 0.563rem;
    ${({ active, theme }) =>
      active &&
      `
        background-color: ${theme.colors.commons.white};
        border-radius: 1rem 1rem 0rem 0rem;
        box-shadow: 0 -22px 26px -4px rgb(96 119 94 / 9%);
  `}
  }
`;

const Admin_Menu = ({ activeUrl, loggedIn }) => {
  return (
    <>
      <Box>
        <Typography variant="h3" color="black.highDark" mb="1rem" pl="0.5rem">
          Dashboard
        </Typography>
        <MenuStyling
          flexDirection="column"
          flexWrap="wrap"
          justifyContent="center"
          className="menu-style"
        >
          <Box display="flex">
            <Link
              to="/admindashboard"
              className={`${activeUrl === "admindashboard" ? "active" : ""}`}
            >
              <Box
                display="flex"
                gridGap="0.6rem"
                pb="0.5rem"
                pt="0.5rem"
                pl="0.5rem"
                width="100%"
                alignItems="center"
              >
                <Contact_list />
                <Typography
                  variant={{ _: "body3", desktop: "subheader1" }}
                  color="black.highDark"
                >
                  Dashboard
                </Typography>
              </Box>
            </Link>
          </Box>
          <Box display="flex">
            <Link
              to="/admincourses"
              className={`${activeUrl === "admincourses" ? "active" : ""}`}
            >
              <Box
                display="flex"
                gridGap="0.6rem"
                pb="0.5rem"
                pt="0.5rem"
                pl="0.5rem"
                width="100%"
                alignItems="center"
              >
                <Book_list />
                <Typography
                  variant={{ _: "body3", desktop: "subheader1" }}
                  color="black.highDark"
                >
                  Courses
                </Typography>
              </Box>
            </Link>
          </Box>
          <Box display="flex">
            <Link
              to="/adminuniversity"
              className={`${activeUrl === "adminuniversity" ? "active" : ""}`}
            >
              <Box
                display="flex"
                gridGap="0.6rem"
                pb="0.5rem"
                pt="0.5rem"
                pl="0.5rem"
                width="100%"
                alignItems="center"
              >
                <Teacher_list />
                <Typography
                  variant={{ _: "body3", desktop: "subheader1" }}
                  color="black.highDark"
                >
                  Universities
                </Typography>
              </Box>
            </Link>
          </Box>
          <Box display="flex">
            <Link
              to="/adminfinance"
              className={`${activeUrl === "adminfinance" ? "active" : ""}`}
            >
              <Box
                display="flex"
                gridGap="0.6rem"
                pb="0.5rem"
                pt="0.5rem"
                pl="0.5rem"
                width="100%"
                alignItems="center"
              >
                <Doller_list />
                <Typography
                  variant={{ _: "body3", desktop: "subheader1" }}
                  color="black.highDark"
                >
                  Finance
                </Typography>
              </Box>
            </Link>
          </Box>
          <Box display="flex">
            <Link
              to="/adminuser"
              className={`${activeUrl === "adminuser" ? "active" : ""}`}
            >
              <Box
                display="flex"
                gridGap="0.6rem"
                pb="0.5rem"
                pt="0.5rem"
                pl="0.5rem"
                width="100%"
                alignItems="center"
              >
                <Contact_list />
                <Typography
                  variant={{ _: "body3", desktop: "subheader1" }}
                  color="black.highDark"
                >
                  User
                </Typography>
              </Box>
            </Link>
          </Box>
          <Box display="flex">
            <Link
              to="/adminroles"
              className={`${activeUrl === "adminroles" ? "active" : ""}`}
            >
              <Box
                display="flex"
                gridGap="0.6rem"
                pb="0.5rem"
                pt="0.5rem"
                pl="0.5rem"
                width="100%"
                alignItems="center"
              >
                <Contact_list />
                <Typography
                  variant={{ _: "body3", desktop: "subheader1" }}
                  color="black.highDark"
                >
                  Roles
                </Typography>
              </Box>
            </Link>
          </Box>
        </MenuStyling>
      </Box>
    </>
  );
};
export default Admin_Menu;
