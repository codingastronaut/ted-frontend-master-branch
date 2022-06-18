import React, { useState, useEffect } from "react";
import UniversityInner from "../../components/UniversityInner/UniversityInner";
import Layout, { VARIANTS } from "src/components/layout";
import styled from "styled-components";
import Typography from "../../components/Typography/Typography";
import Box from "../../components/Box/Box";
import Categories from "src/components/atoms/icons/Categories";
import { mediaQuery } from "src/utils/styles";
import Faqlists from "../../components/UniversityInner/Faqlist";
import { useSelector } from "react-redux";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

export const UniversityInnerMian = styled(Box)`
  margin: 0 auto;
  max-width: 1320px;
`;
export const AccorBoxMain = styled(Box)`
  background: #ffffff;
  box-shadow: 0px 4px 65px rgba(96, 119, 94, 0.09);
  border-radius: 10px;
  padding: 15px 30px;
  margin: 20px auto;
  ${mediaQuery("mobile")} {
    padding: 15px 10px;
  }
  ${mediaQuery("tabletL")} {
    padding: 15px 30px;
  }
`;
const ButtonBox3 = styled.button`
  width: 260px;
  height: 50px;
  border: 2px solid #19b690;
  border-radius: 66px;
  background: #19b690;
  color: white;
  cursor: pointer;
  margin: 20px 0;
  ${mediaQuery("mobile")} {
    width: 150px;
    height: 36px;
  }
  ${mediaQuery("tablet")} {
    width: 260px;
    height: 50px;
  }
`;
export const CourseApplyMain = styled(Box)`
  padding: 100px 0;
  ${mediaQuery("mobile")} {
    padding: 40px 10px;
  }
  ${mediaQuery("tabletL")} {
    padding: 100px 10px;
  }
`;
export const UniversityInnerBannerMain = styled(Box)`
  position: relative;
  min-height: 540px;
  ${mediaQuery("mobile")} {
    min-height: 380px;
  }
  ${mediaQuery("tabletL")} {
    min-height: 540px;
  }
`;
export const UniversityInnerBanner = styled(Box)`
  background: url("media/universitybg.svg");
  background-size: contain;
  background-position: right;
  background-repeat: no-repeat;
  width: 100%;
  position: absolute;
  right: -30px;
  ${mediaQuery("mobile")} {
    background-size: cover;
    right: 0;
  }
  ${mediaQuery("tabletL")} {
    background-size: contain;
    right: -30px;
  }
`;
export const BannerText = styled(Box)`
  margin: 0 auto;
  max-width: 1320px;
  padding: 100px 10px;
  background: url("media/uniwhitebg.png");
  background-size: contain;
  background-position: 72%;
  background-repeat: no-repeat;
  background: -moz-linear-gradient(
    to right,
    #ffffff 50%,
    #fff0 100%,
    #bed4e500 50%,
    #bed4e500 100%
  );
  background: -webkit-linear-gradient(
    to right,
    #ffffff 50%,
    #fff0 100%,
    #bed4e500 50%,
    #bed4e500 100%
  );
  background: linear-gradient(
    to right,
    #ffffff 50%,
    #fff0 100%,
    #bed4e500 50%,
    #bed4e500 100%
  );
  ${mediaQuery("mobile")} {
    padding: 40px 10px;
  }
  ${mediaQuery("tabletL")} {
    padding: 100px 10px;
  }
`;
export const CountMain = styled(Box)`
  background: #ffffff;
  border: 1px solid #dfdfdf;
  border-radius: 10px;
  padding: 20px 70px;
  justify-content: space-around;
  text-align: center;
  margin-top: -40px;
  position: relative;
  ${mediaQuery("mobile")} {
    padding: 20px 40px;
  }
  ${mediaQuery("tabletL")} {
    padding: 20px 70px;
  }
`;

export const EntryApplicationMain = styled(Box)`
  background: #ffffff;
  box-shadow: 0px 4px 65px rgba(96, 119, 94, 0.09);
  border-radius: 10px;
  padding: 30px 30px;
  margin: 60px auto 100px;
`;

function UniversityInnerpage() {
  const { id } = useParams();
  const userd = useSelector((state) => state.auth.user);
  const [universitydetail, setUniversitydetail] = useState({});
  useEffect(() => {
    if (id) {
      (async () => {
        let config = {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.REACT_APP_AUTH_API_KEY,
            Authorization: `Bearer ${userd?.token}`,
          },
        };
        let respdd = await axios.get(
          `${process.env.REACT_APP_AUTH_BASE_URL}/university/${id}`,
          config
        );
        console.log(respdd.data.university);
        setUniversitydetail(respdd.data.university);
      })();
    }
  }, [id]);
  return (
    <Layout variant={VARIANTS.TENLAYOUT}>
      <UniversityInnerBannerMain>
        <UniversityInnerBanner>
          <BannerText>
            <Typography
              variant={{ laptop: "h1", _: "h2", mobile: "h3" }}
              color="black.highDark"
              mb="1rem"
            >
              {universitydetail.name} <br /> College of Agricuture
            </Typography>
            <Typography
              variant={{
                tablet: "subheader3",
                _: "subheader3",
                mobile: "body3",
              }}
              color="black.highDark"
              mb="1rem"
            >
              Degree level:{" "}
              <Box display="inline" color="success.highDark">
                Undergraduate
              </Box>
            </Typography>
            <ButtonBox3>Submit application</ButtonBox3>
          </BannerText>
        </UniversityInnerBanner>
      </UniversityInnerBannerMain>
      <UniversityInnerMian>
        <CountMain
          flexWrap="wrap"
          display="flex"
          gridGap={{ mobile: "2rem", tablet: "3rem" }}
        >
          <Box
            flex={{ _: "1 1 200px", tablet: "1 1 80px", tabletL: "1 1 168px" }}
          >
            <Typography
              variant={{ _: "body1", tabletL: "subheader2" }}
              color="black.highDark"
              mb="1rem"
            >
              <Categories /> Study mode:
            </Typography>
            <Typography
              variant={{ _: "h3", tabletL: "h2" }}
              color="black.highDark"
            >
              Full-time
            </Typography>
          </Box>
          <Box
            flex={{ _: "1 1 200px", tablet: "1 1 80px", tabletL: "1 1 168px" }}
          >
            <Typography
              variant={{ _: "body1", tabletL: "subheader2" }}
              color="black.highDark"
              mb="1rem"
            >
              <Categories /> Study mode:
            </Typography>
            <Typography
              variant={{ _: "h3", tabletL: "h2" }}
              color="black.highDark"
            >
              Full-time
            </Typography>
          </Box>
          <Box
            flex={{ _: "1 1 200px", tablet: "1 1 80px", tabletL: "1 1 168px" }}
          >
            <Typography
              variant={{ _: "body1", tabletL: "subheader2" }}
              color="black.highDark"
              mb="1rem"
            >
              <Categories /> Study mode:
            </Typography>
            <Typography
              variant={{ _: "h3", tabletL: "h2" }}
              color="black.highDark"
            >
              Full-time
            </Typography>
          </Box>
          <Box
            flex={{ _: "1 1 200px", tablet: "1 1 80px", tabletL: "1 1 168px" }}
          >
            <Typography
              variant={{ _: "body1", tabletL: "subheader2" }}
              color="black.highDark"
              mb="1rem"
            >
              <Categories /> Study mode:
            </Typography>
            <Typography
              variant={{ _: "h3", tabletL: "h2" }}
              color="black.highDark"
            >
              Full-time
            </Typography>
          </Box>
        </CountMain>

        <CourseApplyMain flexWrap="wrap" display="flex" gridGap="3rem">
          <Box flex="1 1 260px">
            <Typography
              variant={{ _: "h3", tabletL: "h2" }}
              color="success.highDark"
              mb="1rem"
            >
              Course summary
            </Typography>
            <Typography variant="link2" color="black.highDark">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </Typography>
          </Box>
          <Box flex="1 1 260px">
            <Typography
              variant={{ _: "h3", tabletL: "h2" }}
              color="success.highDark"
              mb="1rem"
            >
              How to apply
            </Typography>
            <Typography variant="link2" color="black.highDark">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </Typography>
          </Box>
        </CourseApplyMain>

        <Box>
          <Typography
            color="success.highDark"
            variant={{ _: "h3", tabletL: "h2" }}
          >
            Faculties
          </Typography>
        </Box>
        <AccorBoxMain>
          {Faqlists.map((Flist) => (
            <UniversityInner
              heading={Flist.heading}
              innerheading1={Flist.subHead1}
              innerheading2={Flist.subHead2}
              firstlist1={Flist.list1.join("<br>")}
              secondlist1={Flist.list2.join("<br>")}
            />
          ))}
        </AccorBoxMain>

        <EntryApplicationMain flexWrap="wrap" display="flex" gridGap="3rem">
          <Box flex="1 1 260px">
            <Typography
              variant={{ _: "h3", tabletL: "h2", mobile: "subheader1" }}
              color="success.highDark"
              mb="1rem"
            >
              Entry requirements for <br />
              advanced entry{" "}
            </Typography>
            <Typography
              variant={{ _: "link2", tabletL: "link2", mobile: "body4" }}
              color="black.highDark"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </Typography>
          </Box>
          <Box flex="1 1 260px">
            <Typography
              variant={{ _: "h3", tabletL: "h2", mobile: "subheader1" }}
              color="success.highDark"
              mb="1rem"
            >
              International applicants
            </Typography>
            <Typography
              variant={{ _: "link2", tabletL: "link2", mobile: "body4" }}
              color="black.highDark"
            >
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </Typography>
          </Box>
        </EntryApplicationMain>
      </UniversityInnerMian>
    </Layout>
  );
}
export default UniversityInnerpage;
