import React from "react";
import IMG_1 from "src/assets/AlevelIMG.svg";
import IMG_2 from "src/assets/AlevelIMG_2.svg";
import IMG_3 from "src/assets/AlevelIMG_3.svg";
import Dotedlist from "src/components/Doted_List";
import Numberlist from "src/components/Numbered_List";
import Box from "src/components/Box";
import Typography from "src/components/Typography";
import Layout, { VARIANTS } from "src/components/layout";
const Alevels = () => {
  return (
    <>
      <Layout variant={VARIANTS.FIRSTLAYOUT}>
        <Box
          display="flex"
          justifyContent="space-evenly"
          alignItems="center"
          flexWrap="wrap"
          gridGap="7.2rem"
          mt="10rem"
          mb="15.5rem"
        >
          <Box maxWidth="35.188rem">
            <Typography variant="h1" mb="1.875rem">
              A levels
            </Typography>
            <Typography variant="link2">
              Facts about A levels: recent changes, subjects and grades,
              <br /> who they are for and what you can do afterwards.
            </Typography>
          </Box>
          <Box maxWidth="35.25rem">
            <img src={IMG_1} style={{ width: "100%" }} />
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          gridGap="3rem"
          mt="8rem"
        >
          <Box maxWidth="35.188rem">
            <Box>
              <Typography variant="h2" mb="2.5rem">
                What grades do I <br />
                need to take{" "}
                <Box display="inline" color="success.highDark">
                  {" "}
                  A levels
                </Box>
                ?
              </Typography>
              <Typography variant="body2">
                <b>You normally need:</b>
              </Typography>
              <Dotedlist
                data={[
                  "At least five GCSEs at grades 9 to 4/A* to C",
                  "At least grade 6 in the specific subject(s) you want to study",
                ]}
              />
              <Typography variant="body1" mb="6.25rem">
                However, the specific requirements needed to study A levels will
                vary across schools and colleges. It's important to check what
                you will need with the school or college you are looking to
                study at.
              </Typography>
            </Box>
            <Typography variant="h2">Who are they for?</Typography>
            <Dotedlist
              data={[
                "<b>If you're thinking about going to university,</b> most higher education courses require specific A levels or combinations of A levels (or alternative level 3 qualifications).",
                "<b>If you’re not sure what career or job you want to do,</b> studying a selection of A levels can be a good way of keeping your options open.",
              ]}
            />
          </Box>
          <Box maxWidth="48rem">
            <img src={IMG_2} style={{ width: "100%" }} />
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          gridGap="8rem"
          mt="8rem"
          mb="8rem"
        >
          <Box maxWidth="45rem">
            <img src={IMG_3} style={{ width: "100%" }} />
          </Box>
          <Box maxWidth="35.188rem">
            <Box mb="4rem">
              <Typography variant="h2" mb="2.5rem">
                Choosing A level
                <Box display="inline" color="success.highDark">
                  &nbsp; subjects
                </Box>
              </Typography>
              <Typography variant="body2">
                <b>
                  The most important criteria for choosing A levels subjects
                  are:
                </b>
              </Typography>
              <Numberlist
                data={[
                  "Looking at what you are likely to enjoy and be good at. If you enjoy a subject or have an ability in it already, you are more likely to do well.",
                  "Are there any particular subjects and/or grades you may need? If you have a particular career, job, or further study in mind, you may need to choose specific A levels in order to meet entry requirements.",
                  "How open you want to keep your future study and career choices?",
                ]}
              />
            </Box>
            <Typography variant="h2" mb="1.5rem">
              What you can do <br />
              after A levels
            </Typography>
            <Typography variant="body2">You normally need:</Typography>
            <Dotedlist
              data={[
                "Here is a great place to start looking at all the options open to you.",
                "<b>Continue on to university</b> – A levels are the most common qualifications studied to get into higher education.",
                "Keep your options open if you’re unsure about what you want to do in the future.",
                "Look for employment – they’re valued by employers because they show a good level of education.",
                "Go on to vocational or work-based qualifications, such as a higher apprenticeship.",
              ]}
            />
          </Box>
        </Box>
      </Layout>
    </>
  );
};
export default Alevels;
