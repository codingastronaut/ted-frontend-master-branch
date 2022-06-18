import React, { useState, useEffect } from "react";
import UniversityCard from "src/components/UniversityCard";
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
import Search from "src/components/atoms/icons/Search";
import Typography from "src/components/Typography";
import styled from "styled-components";
import university from "src/assets/university.svg";
import Box from "src/components/Box";
import Input from "src/components/SearchInput/SearchInput";
import Layout, { VARIANTS } from "src/components/layout";
import Pagination from "src/components/Pagination";
import Filter from "src/components/atoms/icons/Filter";
import Heart from "src/components/atoms/icons/Heart";
import Heartempty from "../../components/atoms/icons/Heartempty";
import Sort from "src/components/atoms/icons/Sort";
import { useSelector } from "react-redux";
import axios from "axios";

const FilterButton = styled.button`
  background: #19b690;
  border: none;
  padding: 10px 30px;
  color: #ffffff;
  box-shadow: 0px 19px 44px -9px rgba(86, 189, 137, 0.47);
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

const UniversitiesPolytechnicsA_Z = () => {
  const userd = useSelector((state) => state.auth.user);
  const [isFavourite, setIsFavourite] = useState(false);
  const [allPost, setAllPost] = useState([]);
  const [mainPost, setMainPost] = useState([]);
  const [count, setCount] = useState(0);
  const [state, setState] = useState({
    active: "A",
    uniArray: uniJson,
    universities: uniJson,
    isActive: false,
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
        `${process.env.REACT_APP_AUTH_BASE_URL}/universities`,
        config
      );
      respdd.data.univerities = respdd.data.univerities.map((el) => {
        return {
          ...el,
          isChecked: el.favouriteByUsers.indexOf(userd.id) > -1,
        };
      });
      setAllPost(respdd.data.univerities);
      setMainPost(respdd.data.univerities);
    };
    getCoursesInfo();
  }, [count]);

  useEffect(() => {
    handleActivePage("");
  }, []);

  const handleCount = () => {
    setCount((prev) => prev + 1);
  };
  const sortingdata = () => {
    // allPost.sort();
  };
  const handleActivePage = (data) => {
    if (data) {
      let filterObj = mainPost.filter((el) =>
        el.name.toUpperCase().startsWith(data)
      );
      setAllPost(filterObj);
      setState({ ...state, active: data });
    } else {
      setAllPost(mainPost);
    }
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

  const getChildState = (unis) => {
    setAllPost(unis);
  };
  return (
    <>
      <Layout variant={VARIANTS.SECONDLAYOUT} loggedIn>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          gridGap="12rem"
          mt="9rem"
          mb="17rem"
        >
          <Box>
            <Typography variant="h1">
              Universities & <br />
              Polytechnics A-Z
            </Typography>
            <Typography variant="h3" mt="1.875rem" textAlign="justify">
              Explore the complete A-Z of universities and colleges
            </Typography>
            <Box mt="3.125rem" maxWidth="29.938rem" className="input-style">
              <input
                variant="success"
                placeholder="Search..."
                onChange={handleChange}
              />
              <Search />
            </Box>
          </Box>
          <Box>
            <Box maxWidth="29.9375rem">
              <img src={university} width="100%" />
            </Box>
          </Box>
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
          <Box>
            <FilterButton type="submit" onClick={() => setCount(count + 1)}>
              Reset Filter <Filter />
            </FilterButton>
          </Box>
          <Box gridGap="1rem" display="flex">
            {isFavourite === false ? (
              <Favourites
                type="submit"
                align="right"
                onClick={() => setIsFavourite((prevCheck) => !prevCheck)}
              >
                Favourites <Heartempty />
              </Favourites>
            ) : (
              <Favourites
                type="submit"
                align="right"
                onClick={() => setIsFavourite((prevCheck) => !prevCheck)}
              >
                Favourites <Heart />
              </Favourites>
            )}

            <Favourites
              type="submit"
              onClick={() => sortingdata()}
              align="right"
            >
              Sort by: A-Z
              <Sort />
            </Favourites>
          </Box>
        </Box>

        <Box
          justifyContent="center"
          display="grid"
          flexWrap="wrap"
          gridTemplateColumns={{ laptopS: "auto auto", mobileL: "auto" }}
          gridGap={{ _: "1rem", laptopS: "4rem" }}
          mb="2rem"
        >
          {isFavourite === false
            ? allPost
                .filter((f) => !f.favouriteByUsers.includes(userd.id))
                .map((el, index) => (
                  <UniversityCard
                    handleCount={handleCount}
                    img={uni1}
                    getChildState={getChildState}
                    universities={allPost}
                    text={el.name}
                    uniId={el._id}
                    univer={el}
                    location="Bauchi"
                  />
                ))
            : allPost
                .filter((f) => f.favouriteByUsers.includes(userd.id))
                .map((el, index) => (
                  <UniversityCard
                    handleCount={handleCount}
                    getChildState={getChildState}
                    img={uni1}
                    universities={allPost}
                    text={el.name}
                    univer={el}
                    uniId={el._id}
                    location="Bauchi"
                  />
                ))}
        </Box>
        <Box
          p=".2rem"
          display="flex"
          gridGap="1.05rem"
          mt="3rem"
          mb="10rem"
          flexDirection="row"
          flexWrap="wrap"
          backgroundColor="commons.white"
          boxShadow=" 0px 4px 65px rgba(96, 119, 94, 0.09)"
          maxWidth="82.6rem"
          border="1px solid #D3D3D3"
          borderRadius="1.438rem"
          ml="auto"
          mr="auto"
        >
          <Pagination
            current={state.active}
            handleActivePage={handleActivePage}
          />
        </Box>
      </Layout>
    </>
  );
};

export default UniversitiesPolytechnicsA_Z;
