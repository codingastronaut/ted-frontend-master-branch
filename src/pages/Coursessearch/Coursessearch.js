import Box from "src/components/Box";
import Input from "src/components/SearchInput/SearchInput";
import Layout, { VARIANTS } from "src/components/layout";
import Typography from "src/components/Typography";
import styled from "styled-components";
import UniversityCard from "src/components/UniversityCard";
import university from "src/assets/University.png";
import Search from "src/components/atoms/icons/Search";
import uni1 from "src/assets/uni1.png";
import uni2 from "src/assets/uni2.png";
import uni3 from "src/assets/uni3.png";
import uni4 from "src/assets/uni4.png";
import uni5 from "src/assets/uni5.png";
import uni6 from "src/assets/uni6.png";
import uni7 from "src/assets/uni7.png";
import uni8 from "src/assets/uni8.png";
import uni9 from "src/assets/uni9.png";
import uni10 from "src/assets/uni10.png";
import Group from "src/assets/Group.svg";
import Filter from "src/components/atoms/icons/Filter";
import Heart from "src/components/atoms/icons/Heart";
import Sort from "src/components/atoms/icons/Sort";
import CourseSerch from "src/components/CourseSerch/CourseSerch";
import Numberpagination from "src/components/Numberpagination";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
const FilterButton = styled.button`
  background: #19b690;
  border: none;
  padding: 10px 30px;
  color: #ffffff;
  border-radius: 0.6758rem;
  cursor: pointer;
  font-size: 1.5rem;
`;
const Favourites = styled(FilterButton)`
  color: #333333;
  border: 1px solid #19b690;
  background: #ffffff;
`;
const uniJson = [
  {
    image: uni1,
    text: "Abia State University",
    location: "Abia",
  },
  {
    image: uni2,
    text: "Abubakar Tafawa Balewa University",
    location: "Bauchi",
  },
  {
    image: uni3,
    text: "Achievers University",
    location: "Owo",
  },
  {
    image: uni4,
    text: "Adamawa State University",
    location: "Mubi",
  },
  {
    image: uni5,
    text: "Adekunle Ajasin University",
    location: "Akungba-Akoko",
  },
  {
    image: uni6,
    text: "Adeleke University",
    location: "Ede",
  },
  {
    image: uni7,
    text: "Ahmadu Bello University",
    location: "Zaria",
  },
  {
    image: uni8,
    text: "Ajayi Crowther University",
    location: "Oyo",
  },
  {
    image: uni9,
    text: "Al-Hikmat University",
    location: "Ilorin",
  },
  {
    image: uni10,
    text: "Ambrose Alli University",
    location: "Ekpoma",
  },
  {
    image: uni1,
    text: "Babeș-Bolyai University",
    location: "Abia",
  },
  {
    image: uni2,
    text: "Boston College, Bethel College",
    location: "Bauchi",
  },
  {
    image: uni3,
    text: "Bronx Community College",
    location: "Owo",
  },
  {
    image: uni4,
    text: "University of California, Berkeley",
    location: "Mubi",
  },
  {
    image: uni9,
    text: "California Baptist University",
    location: "Akungba-Akoko",
  },
  {
    image: uni4,
    text: "College of Charleston",
    location: "Akungba-Akoko",
  },
  {
    image: uni10,
    text: "California Institute of Technology",
    location: "Akungba-Akoko",
  },
  {
    image: uni1,
    text: "California State Polytechnic University",
    location: "Akungba-Akoko",
  },
  {
    image: uni9,
    text: "DePaul University",
    location: "Akungba-Akoko",
  },
  {
    image: uni4,
    text: "DeSales University",
    location: "Akungba-Akoko",
  },
  {
    image: uni10,
    text: "G.H. Raisoni University",
    location: "Akungba-Akoko",
  },
  {
    image: uni1,
    text: "Gábor Dénes Foiskola",
    location: "Akungba-Akoko",
  },
];
const Coursesearch = () => {
  const userd = useSelector((state) => state.auth.user);
  const [allPost, setAllPost] = useState([]);
  const [mainPost, setMainPost] = useState([]);
  const [state, setState] = useState({
    active: "1",
    uniArray: uniJson,
    universities: uniJson,
  });
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
      console.log(respdd);
      // const userlistdd = respdd.data;
      setAllPost(respdd.data.courses);
      setMainPost(respdd.data.courses);
    };
    getCoursesInfo();
  }, []);
  useEffect(() => {
    handleActivePage("");
  }, []);

  const handleActivePage = (data) => {
    let newArray;
    if (!data) data = "1";
    const { uniArray, universities } = state;
    newArray = universities.filter((el) =>
      el.text.toUpperCase().startsWith(data)
    );
    setState({ ...state, active: data, uniArray: newArray });
  };
  const handleChange = (e) => {
    if (e.target.value.length) {
      let value = e.target.value;
      let filterObj = mainPost.filter((el) =>
        el.name.toLowerCase().includes(value.toLowerCase())
      );
      setAllPost(filterObj);
    } else {
      setAllPost(mainPost);
    }
  };
  return (
    <>
      <Layout variant={VARIANTS.SECONDLAYOUT} loggedIn>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          gridGap="16rem"
          mt="9rem"
          mb="17rem"
          position="relative"
        >
          <Box maxWidth="35rem" width="100%">
            <Typography variant="h1">Courses</Typography>
            <Box mt="3.125rem" maxWidth="29.938rem" className="input-style">
              <input
                variant="success"
                placeholder="Search..."
                onChange={handleChange}
              />
              <Search />
            </Box>
            <Box>
              <Typography variant="h3" mt="1.875rem" textAlign="justify">
                Results for:
              </Typography>
              <Typography variant="h3" mt="1.875rem" textAlign="justify">
                “Accounting”
              </Typography>
            </Box>
          </Box>
          <Box>
            <Box maxWidth="29.9375rem">
              <img src={Group} width="100%" />
            </Box>
          </Box>
        </Box>
        <Box maxWidth="82.5rem" margin="auto">
          <Typography variant="h2" mb="2.5rem" color="gray.lowDark">
            <Box display="inline" color="success.highDark">
              {" "}
              383
            </Box>{" "}
            results
          </Typography>
        </Box>

        <Box
          maxWidth="82.5rem"
          margin="auto"
          display="flex"
          justifyContent="space-between"
          flexWrap="wrap"
          gridGap="2rem"
          mb="3rem"
        >
          <Box display="flex" gridGap="2rem">
            <FilterButton type="submit">
              Filter <Filter />
            </FilterButton>
            <Favourites type="submit" align="right">
              Sort by: A-Z
              <Sort />
            </Favourites>
          </Box>
        </Box>
        {/* Import component */}
        <Box margin="5rem auto" maxWidth="82.5rem">
          {allPost.map((el) => (
            <Box m="2rem 0rem">
              <CourseSerch
                heading={el.name}
                courses="31 courses"
                website="www.abertay.com"
                course="Course"
                acccountancy={el.description}
                uniId={el._id}
              />
            </Box>
          ))}
        </Box>
        <Box
          p=".2rem"
          display="flex"
          gridGap="1.05rem"
          flexDirection="row"
          flexWrap="wrap"
          backgroundColor="commons.white"
          boxShadow=" 0px 4px 65px rgba(96, 119, 94, 0.09)"
          maxWidth="19.375rem"
          overflow="hidden"
          border="1px solid #D3D3D3"
          borderRadius="1.438rem"
          m="2rem auto"
        >
          {" "}
          <Numberpagination
            current={state.active}
            handleActivePage={handleActivePage}
          />
        </Box>
      </Layout>
    </>
  );
};
export default Coursesearch;
