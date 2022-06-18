import React from "react";
import Box from "src/components/Box";
import Typography from "src/components/Typography";
import WalletRafiki from "src/assets/WalletRafiki.svg";
import Thoughts from "src/assets/Thoughts.svg";
import FeeList from "../../components/Doted_List";
import Currency from "src/assets/Currency.svg";
import TutionFeeTable from "src/components/TuitionFeeTable";
import Layout, { VARIANTS } from "src/components/layout";

const TuitionFee = () => {
  return (
    <Layout variant={VARIANTS.SIXTHLAYOUT}>
      <Box
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        gridGap="2rem"
        justifyContent="center"
        mb="3rem"
      >
        <Box maxWidth="40rem">
          <Typography variant="h1">
            Undergraduate <br /> tuition fees
          </Typography>
          <Typography variant="h3">
            How much are tuition fees and how are you going to pay for them?
            Find out how to fund your studies and how to apply here.
          </Typography>
        </Box>
        <Box maxWidth="40.6875erm">
          <img src={WalletRafiki} width="100%" alt="Logo" />
        </Box>
      </Box>

      <Box
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        gridGap="2rem"
        justifyContent="center"
      >
        <Box maxWidth="40.6875erm">
          <img src={Thoughts} width="100%" alt="Logo" />
        </Box>
        <Box maxWidth="40rem">
          <Typography variant="h2">
            What are{" "}
            <Box display="inline" color="success.highDark">
              {" "}
              tuition fees?{" "}
            </Box>
          </Typography>
          <Typography variant="body1">
            Tuition fees are charged by universities and colleges to cover key
            elements of your course and academic life, as well as core services
            related to students’ wellbeing and experience on campus.
          </Typography>
          <Typography variant="body1">Tuition fees normally cover:</Typography>
          <FeeList
            data={[
              "Lectures, seminars, and tutorials",
              "Course admin costs",
              "Access to course-related facilities and equipment (e.g. laboratories, studios) ",
              "Access to campus libraries and computer rooms",
              "Support services for students",
              " Student union membership",
              "Field trips essential for completion of your course (travel and accommodation only)",
              "Graduation ceremony",
            ]}
          />
        </Box>
      </Box>

      <Box
        mt="18.8125rem"
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        gridGap="2rem"
        justifyContent="center"
      >
        <Box maxWidth="40rem">
          <Typography variant="h2">
            <Box display="inline" color="success.highDark">
              {" "}
              How much
            </Box>{" "}
            are tuition fees?
          </Typography>
          <FeeList
            isOrdered={true}
            data={[
              "You must complete all mandatory questions and you can’t skip any sections",
              "Make sure your email address is always up-to-date",
              "We’ll ask for your residency status",
              "There are questions specifically for UK students",
              " We ask for information about personal circumstances",
              " If you’re applying with the support of a school and you didn’t enter your buzzword during registration",
              "We ask how you plan to fund your studies",
              " You can give a parent, guardian, or adviser nominated access",
            ]}
          />
        </Box>

        <Box maxWidth="47.3125rem">
          <TutionFeeTable />
        </Box>
      </Box>

      <Box
        mt="17.625rem"
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        gridGap="2rem"
        justifyContent="center"
      >
        <Box maxWidth="39rem">
          <img src={Currency} alt="Logo" width="100%" />
        </Box>

        <Box maxWidth="40rem">
          <Typography variant="h2">
            What{" "}
            <Box display="inline" color="success.highDark">
              {" "}
              financial help{" "}
            </Box>{" "}
            can you get?
          </Typography>
          <Typography>
            Student loans can include a tuition fee loan and a maintenance loan
            to help with your living costs.{" "}
          </Typography>
          <FeeList
            data={[
              "Tuition fee loans, to cover the full cost of your course, are paid directly to the course provider, and you won’t have to pay it back until after your course, when you’re earning above a certain level.",
              "Maintenance loans can be applied for at the same time, lending you money at the start of each term (or monthly in Scotland). How much you get depends on your household income, where you study, where you live and how long for.",
              "Students can apply for grants if they’re eligible for certain benefits, disabled, or need help with childcare costs. Read our blog on what these changes are and what they mean. You can also find out more on the student finance pages on GOV.UK.",
            ]}
          />
        </Box>
      </Box>
    </Layout>
  );
};

export default TuitionFee;
