import React from "react";
import Box from "src/components/Box";
import Typography from "src/components/Typography";
import StudentCards from "../../components/Undergraduate";
import Studentcard_1 from "src/assets/Studentcard-1.png";
import Studentcard_2 from "src/assets/Studentcard-2.png";
import Studentcard_3 from "src/assets/Studentcard-3.png";
import Studentcard_4 from "src/assets/Studentcard-4.png";
import Studentcard_5 from "src/assets/Studentcard-5.png";
import Studentcard_6 from "src/assets/Studentcard-6.png";
import Studentcard_7 from "src/assets/Studentcard-7.png";
import Studentcard_8 from "src/assets/Studentcard-8.png";
import Studentcard_9 from "src/assets/Studentcard-9.png";
import Studentcard_10 from "src/assets/Studentcard-10.png";
import Undergraduatebg from "src/assets/test.svg";
import Container from "src/components/Container";
import Link from "src/components/Link";
import Layout, { VARIANTS } from "src/components/layout";
const UdergraduatePage = () => {
  return (
    <>
      <Layout variant={VARIANTS.SECONDLAYOUT} loggedIn>
        <Container>
          <Box
            display="flex"
            flexWrap="wrap"
            mt="3rem"
            alignItems="center"
            gridGap="5rem"
            justifyContent="center"
          >
            <Box>
              <Typography variant="h1">Undergraduate </Typography>
              <Typography variant="h3">
                Studying Link course at university, <br />
                college, or Link conservatoire
              </Typography>
            </Box>
            <Box>
              <img src={Undergraduatebg} width="100%" alt="Logo" />
            </Box>
          </Box>
          <Box maxWidth="70rem" margin="auto">
            <Typography
              variant="h2"
              display="flex"
              textAlign={{ laptopS: "left", mobile: "center" }}
              mt="6rem"
            >
              Qualification type
            </Typography>
            <Box
              mt="3rem"
              justifyContent="center"
              display="grid"
              gridTemplateColumns={{ laptopS: "auto auto", mobileL: "auto" }}
              width={{ tablet: "auto", mobileL: "auto" }}
              gridGap="2rem"
            >
              <Link href="/WAEC">
                <StudentCards
                  subheading="West African"
                  text="Examinations Council"
                  image={Studentcard_1}
                >
                  <Typography variant="h2" marginBottom="4rem">
                    Applying to University
                  </Typography>
                </StudentCards>
              </Link>
              <Link href="/nec">
                <StudentCards
                  subheading="National Examinations "
                  text="Council (NECO)"
                  image={Studentcard_2}
                />
              </Link>
              <Link href="/jamb">
                <StudentCards
                  subheading="Joint admissions and"
                  text="matriculation board"
                  image={Studentcard_3}
                />
              </Link>
              <Link href="/Alevels">
                <StudentCards
                  subheading="Advanced Level"
                  text="qualifications"
                  image={Studentcard_4}
                />
              </Link>
            </Box>
            <Typography
              variant="h2"
              display="flex"
              textAlign={{ laptopS: "left", mobile: "center" }}
              mt="6rem"
            >
              Applying to University
            </Typography>
            <Box
              mt="3rem"
              justifyContent="center"
              display="grid"
              gridTemplateColumns={{ laptopS: "auto auto", mobileL: "auto" }}
              width={{ tablet: "auto", mobileL: "auto" }}
              gridGap="2rem"
            >
              <Link href="/Whentoapplypage">
                <StudentCards
                  subheading="when to apply"
                  image={Studentcard_5}
                />
              </Link>
              <Link href="/howtoapply">
                <StudentCards subheading="How to apply" image={Studentcard_6} />
              </Link>
            </Box>
            <Typography
              variant="h2"
              display="flex"
              textAlign={{ laptopS: "left", mobile: "center" }}
              mt="6rem"
            >
              Applying to polytechnic
            </Typography>
            <Box
              mt="3rem"
              justifyContent="center"
              display="grid"
              gridTemplateColumns={{ laptopS: "auto auto", mobileL: "auto" }}
              width={{ tablet: "auto", mobileL: "auto" }}
              gridGap="2rem"
            >
              <Link href="/jamb">
                <StudentCards
                  subheading="Joint admissions and"
                  text="matriculation board"
                  image={Studentcard_5}
                />
              </Link>
              <Link href="/Alevels">
                <StudentCards
                  subheading="Advanced Level"
                  text="qualifications"
                  image={Studentcard_6}
                />
              </Link>
              <Link href="/Alevels">
                <StudentCards
                  subheading="Advanced Level"
                  text="qualifications"
                  image={Studentcard_7}
                />
              </Link>
            </Box>
            <Typography
              variant="h2"
              display="flex"
              textAlign={{ laptopS: "left", mobile: "center" }}
              mt="6rem"
            >
              Finance
            </Typography>
            <Box
              mt="3rem"
              justifyContent="center"
              display="grid"
              gridTemplateColumns={{ laptopS: "auto auto", mobileL: "auto" }}
              width={{ tablet: "auto", mobileL: "auto" }}
              gridGap="2rem"
              mb="10rem"
            >
              <Link href="/tuitionFee">
                <StudentCards
                  subheading="Joint admissions and"
                  text="matriculation board"
                  image={Studentcard_8}
                ></StudentCards>
              </Link>
              <Link href="/studentLoan">
                <StudentCards
                  subheading="Advanced Level"
                  text="qualifications"
                  image={Studentcard_9}
                />
              </Link>
              <Link href="/scholarship">
                <StudentCards
                  subheading="Advanced Level"
                  text="qualifications"
                  image={Studentcard_10}
                />
              </Link>
            </Box>
          </Box>
        </Container>
      </Layout>
    </>
  );
};

export default UdergraduatePage;
