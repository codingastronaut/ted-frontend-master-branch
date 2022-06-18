import React from "react";
import Layout, { VARIANTS } from "src/components/layout";
import Box from "src/components/Box";
import Typography from "src/components/Typography";
import IMG_1 from "src/assets/Scholarship_img_1.svg";
import IMG_2 from "src/assets/Scholarship_img_2.svg";
import IMG_3 from "src/assets/Scholarship_img_3.svg";
import Numberedlist from "src/components/Numbered_List";
const Scholarship = () => {
  return (
    <Layout variant={VARIANTS.THIRDLAYOUT}>
      <Box
        display="flex"
        justifyContent="space-evenly"
        flexWrap="wrap"
        mt="9.375rem"
        alignItems="center"
        mb="18.063rem"
      >
        <Box>
          <Typography variant="h1" mb="2.5rem">
            Scholarships
          </Typography>
          <Typography variant="body1">About Scholarships</Typography>
        </Box>
        <Box maxWidth="26.5rem">
          <img src={IMG_1} style={{ width: "100%" }} />
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        flexWrap="wrap"
        alignItems="center"
        gridGap="12rem"
        mb="8.813rem"
      >
        <Box maxWidth="40rem">
          <img src={IMG_2} style={{ width: "100%" }} />
        </Box>
        <Box>
          <Typography variant="h2" mb="1.5rem">
            Sources of scholarships
            <br />{" "}
            <Box color="success.highDark" display="inline">
              include
            </Box>
            , but are
            <br /> not limited to:
          </Typography>
          <Numberedlist
            data={[
              "Federal Government scholarships for Nigerian students",
              "State Government scholarships for Nigerian students",
              "Oil companies scholarships for Nigerian students",
              "other sources of scholarships",
            ]}
          />
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        flexWrap="wrap"
        alignItems="center"
        gridGap="2.8rem"
        mb="20.625rem"
      >
        <Box>
          <Typography variant="h2" mb="1.5rem">
            <Box color="success.highDark" display="inline">
              {" "}
              List of ongoing
            </Box>{" "}
            and other <br />
            available scholarship <br />
            opportunities
          </Typography>
          <Box maxWidth="35rem">
            <Typography variant="body1">
              Below is a list of ongoing and other available scholarship
              opportunities for Nigerian students. This list also cut across
              other international scholarship opportunities for Nigerian
              Students.
            </Typography>
          </Box>
          <Box mb="2rem" maxWidth="31.5rem">
            <Numberedlist
              data={[
                "NNPC/Total Undergraduate Scholarships",
                "KPMG Nigeria University Scholarship Program",
                "NNPC/SNEPCo National University Scholarship",
                "NITDA Postgraduate Scholarships",
                "Oando Graduate Accelerated Programme",
                "NNPC/Eroton JV Undergraduate Scholarships",
                "2020/2021 Federal Government Scholarship for Nigerian Undergraduate, Masters and PhD for Study Overseas",
              ]}
            />
          </Box>
          <Box maxWidth="35rem">
            <Typography variant="body1">
              Most of these available scholarships for Nigerian students are
              fully funded for all awardees; covering their tuition till they
              graduate from their undergraduate programs.
            </Typography>
          </Box>
        </Box>
        <Box maxWidth="40rem">
          <img src={IMG_3} style={{ width: "100%" }} />
        </Box>
      </Box>
    </Layout>
  );
};

export default Scholarship;
