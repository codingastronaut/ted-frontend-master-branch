import React from "react";
import Layout, { VARIANTS } from "src/components/layout";
import Box from "src/components/Box";
import Typography from "src/components/Typography";
import studentLoan from "src/assets/studentLoan.svg";
import Getintouchpana from "src/assets/Getintouchpana.svg";
import Dotedlist from "src/components/Doted_List";
import Knowledgepana from "src/assets/Knowledgepana.svg";
import Financeapppana from "src/assets/Financeapppana.svg";

const StudentLoan = () => {
  return (
    <>
      <Layout variant={VARIANTS.SECONDLAYOUT}>
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
          mt="9rem"
          mb="12rem"
          gridGap="8rem"
        >
          <Box maxWidth="30.25rem" variant="h2">
            <Typography variant="h1">Student loan</Typography>
            <Typography variant="subheader3">
              Student finance usually consists of a Tuition Fee Loan and a
              Maintenance Loan to cover – or at <br /> least partially help with
              – your university costs.
            </Typography>
          </Box>

          <Box maxWidth="49.5rem">
            <img src={studentLoan} width="100%" />
          </Box>
        </Box>

        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
          mt="9rem"
          mb="12rem"
          gridGap="10rem"
        >
          <Box maxWidth="27.9375rem">
            <img src={Getintouchpana} alt="Logo" width="100%" />
          </Box>

          <Box maxWidth="38.1875rem">
            <Typography variant="h2">
              {" "}
              Eligible for{" "}
              <Typography variant="h2" as="spane" color="success.highDark">
                {" "}
                student loan
              </Typography>{" "}
            </Typography>
            <Typography
              variant="body1"
              mt="1.5rem"
              mb="1.875rem"
              color="gray.lowDark"
            >
              All full-time undergraduate students are eligible for student
              finance, <br /> provided they meet some basic criteria:
            </Typography>
            <Dotedlist
              data={[
                " <b>Residency</b> – you’re a UK national or have settled status, normally live in your home country, and have been living in the UK, the Channel Islands, or the Isle of Man for three years before the beginning of your course.",
                "<b> Your university or college </b> – you’re studying at a recognised publicly-funded university or college (or a private institution studying a course approved for public funding).",
                "<b>Your course</b> – you’re studying a recognised full-time course e.g. a first degree, a foundation degree, a Higher National Diploma (HND), or an initial Teacher Training course.",
                "<b>It’s your first higher education course </b>– you can still get some funding if you’ve studied a HE course before, but it will be limited and you’ll have to make up any shortfall. ",
              ]}
            />
          </Box>
        </Box>

        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
          mt="9rem"
          mb="12rem"
          gridGap="8rem"
          mt="17.375rem"
        >
          <Box maxWidth="38.1875rem">
            <Typography variant="h2">Maintenance Loans</Typography>
            <Typography variant="body1" mt="2.5rem" color="gray.lowDark">
              Maintenance Loans are available to help with some of your living
              costs at university, e.g. accommodation, transport, food, and
              books. It’s unlikely this will cover all your living costs, in
              which case it’s up to you to make up the shortfall.
            </Typography>
            <Typography body="body1">
              How much you get will work on a sliding scale, based on:
            </Typography>

            <Dotedlist
              isColor="true"
              data={[
                "<b> where you’re studying </b> – students studying away from home in London receive more to account for the higher cost of living here, compared to those living at home",
                "<b> Your university or college</b> – you’re studying at a recognised publicly-funded university or college (or a private institution studying a course approved for public funding).",
              ]}
            />
          </Box>
          <Box maxWidth="35.625">
            <img src={Knowledgepana} alt="Logo" width="100%" />
          </Box>
        </Box>

        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
          mt="9rem"
          mb="12rem"
          gridGap="8rem"
        >
          <Box maxWidth="39.375rem">
            <img src={Financeapppana} alt="Logo" width="100%" />
          </Box>

          <Box maxWidth="38.1875rem">
            <Typography variant="h2">
              Extra financial{" "}
              <Typography as="span" variant="h2" color="success.highDark">
                support
              </Typography>
            </Typography>
            <Typography variant="body1" mt="2.5rem" color="gray.lowDark">
              There are also a number of grants and allowances to help with any
              extra costs you might incur while studying as a result of your
              personal circumstances, namely if you:
            </Typography>
            <Dotedlist
              data={[
                "<b> Are disabled </b>",
                "<b>Are a parent </b>",
                "<b>Have adult or child dependants whom you’re financially responsible for</b>",
                "<b>Are facing financial hardship</b>",
              ]}
            />

            <Typography variant="body1" mt="1.25rem" color="gray.lowDark">
              To apply for these, you may have to undergo some form of
              assessment, e.g. to understand your needs due to your disability,
              or provide evidence that illustrates your situation, e.g. bank
              statements to show your financial hardship.{" "}
            </Typography>
            <Typography variant="body1" mt="1.25rem" color="gray.lowDark">
              However, these extra sources of support can make a significant
              difference to your budget – and your student life in general.
              Plus, you don’t have to repay them.{" "}
            </Typography>
          </Box>
        </Box>
      </Layout>
    </>
  );
};

export default StudentLoan;
