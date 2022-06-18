import React from "react";
import { FromTabletL, TillTabletL } from "src/hooks/useActiveViewportSize";
import Box from "src/components/Box";
import Typography from "src/components/Typography";
import Numberedlist from "src/components/Numbered_List";
import Dotedlist from "src/components/Doted_List";
import VerticalTabs from "src/components/VerticalTabs/VerticalTabs";
import Tabs from "src/components/Tabs";
import htp_1 from "src/assets/Howtoapply_1.svg";
import htp_2 from "src/assets/Howtoapply_2.svg";
import htp_3 from "src/assets/Howtoapply_3.svg";
import htp_4 from "src/assets/Howtoapply_4.svg";
import htp_5 from "src/assets/Howtoapply_5.svg";
import Button from "src/components/button";
import Layout, { VARIANTS } from "src/components/layout";

function Howtoaplypage() {
  return (
    <Layout variant={VARIANTS.THIRDLAYOUT}>
      <Box
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
        gridGap="5rem"
        flexWrap="wrap"
        mt="5rem"
        mb="14rem"
      >
        <Box maxWidth="31.063rem">
          <Typography variant="h1">How to apply?</Typography>
          <Typography variant="body1" mt="2rem" textAlign="justify">
            You make your application online. Don’t leave applying until the
            last minute as there’s quite a bit to do – but you don’t need to
            complete the application all at once.
          </Typography>
        </Box>
        <Box>
          <Box maxWidth="32.75rem">
            <img src={htp_1} width="100%" />
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
        gridGap="5rem"
        flexWrap="wrap"
        mb="16rem"
      >
        <Box maxWidth="32.188rem">
          <Typography variant="h2">
            Here are the&nbsp;
            <Box display="inline" color="success.highDark">
              top things&nbsp;
              <br />
            </Box>
            admissions teams
          </Typography>
          <Dotedlist
            data={[
              "Qualifications",
              "Content of written personal statement displaying passion for the subject area, while demonstrating motivation, enthusiasm, and the skills and experiences that will enable you to succeed at university",
              "Content of reference",
              "Knowledge of, and commitment to, the subject discipline",
              "Good attitude to learning and personal development",
              "Ability to articulate yourself fluently and accurately in writing – it is a sign of what's to come for tutors",
            ]}
          />
        </Box>
        <Box
          width="32rem"
          borderRadius="10px"
          overflow="hidden"
          zIndex="1"
          height="320px"
        >
          <iframe
            width="100%"
            height="320px"
            src="https://www.youtube.com/embed/uwsmkWh0S5Y"
          ></iframe>
        </Box>
      </Box>

      <Box
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
        gridGap=".5rem"
        flexWrap="wrap"
        mb="30rem"
      >
        <Box>
          <img src={htp_2} width="100%" />
        </Box>
        <Box maxWidth="32.188rem">
          <Typography variant="h2">
            Complete your &nbsp;
            <Box display="inline" color="success.highDark">
              details
            </Box>
          </Typography>
          <Numberedlist
            data={[
              "You must complete all mandatory questions and you can’t skip any sections",
              "Make sure your email address is always up-to-date",
              "We’ll ask for your residency status",
              "There are questions specifically for UK students",
              "We ask for information about personal circumstances",
              "If you’re applying with the support of a school and you didn’t enter your buzzword during registration",
              "We ask how you plan to fund your studies",
              "You can give a parent, guardian, or adviser nominated access",
            ]}
          />
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
        gridGap="3rem"
        flexWrap="wrap"
        mb="14rem"
      >
        <Box maxWidth="32.188rem">
          <Typography variant="h2" mb="1.5rem">
            Add your education &nbsp;
            <Box display="inline" color="success.highDark">
              history
            </Box>
          </Typography>
          <Typography variant="body2" textAlign="left">
            You must enter all your qualifications from secondary education
            onwards – whether you have the result (even any that were ungraded)
            or you’re still awaiting exams and results. This helps unis and
            colleges to understand if you meet their entry requirements.
          </Typography>
          <Typography variant="body2" textAlign="left" mt="1rem">
            However, sometimes a uni or college will make you an offer even if
            you don't meet the exact grades they're asking for. If you have any
            questions about entry requirements, speak to the uni/college before
            you apply.
          </Typography>
          <Typography variant="body2" mt="1rem">
            <Box fontWeight="bold" display="inline">
              If you're waiting for results,
            </Box>
            these are the exam results we're able to process and forward on to
            unis and colleges. If any of your pending qualifications aren't on
            this list, you still need to add them to your application, but also
            remember you’ll need to send the results on to your chosen
            universities and colleges when you get them.
          </Typography>
          <Box m="2rem 1rem 1rem -1rem">
            <Tabs
              tabMenus={["Mature students", "International and EU students"]}
              tabContents={[
                <Box>
                  <Typography variant="body4">
                    {" "}
                    <Typography as="span" variant="body3">
                      {" "}
                      If you can't find your school exam certificates,
                    </Typography>{" "}
                    contact the school or local authority, but if you have no
                    luck, contact the course providers you're applying to and
                    discuss your options. You may be able to get replacement
                    certificates from the relevant exam board.If you're adding
                    an Access course to your application, there are four
                    different kinds of Access course to choose from, so it's
                    important to enter the correct one.
                  </Typography>
                </Box>,
                <Box>
                  <Typography variant="body4">
                    {" "}
                    <Typography as="span" variant="body3">
                      {" "}
                      if you can't find your school exam certificates,{" "}
                    </Typography>
                    contact the school or local authority, but if you have no
                    luck, contact the course providers you're applying to and
                    discuss your options. You may be able to get replacement
                    certificates from the relevant exam board.If you're adding
                    an Access course to your application, there are four
                    different kinds of Access course to choose from, so it's
                    important to enter the correct one.
                  </Typography>
                </Box>,
              ]}
            />
          </Box>
        </Box>
        <Box>
          <img src={htp_3} width="100%" />
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
        gridGap="3rem"
        flexWrap="wrap"
        mb="12rem"
      >
        <Box>
          <img src={htp_4} width="100%" />
        </Box>
        <Box maxWidth="50%">
          <Box m="3rem">
            <Typography variant="h2" mb="1.5rem">
              Select your&nbsp;
              <Box display="inline" color="success.highDark">
                course&nbsp;
              </Box>
              choices
            </Typography>
            <Typography variant="body2" textAlign="left">
              You can choose up to five courses (all now or some later). There’s
              no preference order and your universities/colleges won’t see where
              else you’ve applied until after you reply to any offers you get.
            </Typography>
          </Box>
          <Box m="2rem 1rem 1rem -1rem">
            <FromTabletL>
              <Box ml={{ laptopS: "3rem", laptop: "1.3rem" }}>
                <VerticalTabs
                  tabMenus={[
                    "Independent applicants (not through a school)",
                    "Does your course start early between January and July?",
                    "Are you deferring application until the following year?",
                    "International and EU students",
                    "Siaradwyr Cymraeg",
                  ]}
                  tabContents={[
                    <Box>
                      <Typography variant="body4">
                        If 1 you're applying as an independent applicant (not
                        through a school), we recommend you ask your referee to
                        complete your reference well in advance of the deadline
                        to avoid any delays.Remember to look into student
                        finance too. If you need a loan or financial support,
                        you can apply to a student finance organisation.
                      </Typography>
                    </Box>,
                    <Box>
                      <Typography variant="body4">
                        If 2 you're applying as an independent applicant (not
                        through a school), we recommend you ask your referee to
                        complete your reference well in advance of the deadline
                        to avoid any delays.Remember to look into student
                        finance too. If you need a loan or financial support,
                        you can apply to a student finance organisation.
                      </Typography>
                    </Box>,
                    <Box>
                      <Typography variant="body4">
                        If 3 you're applying as an independent applicant (not
                        through a school), we recommend you ask your referee to
                        complete your reference well in advance of the deadline
                        to avoid any delays.Remember to look into student
                        finance too. If you need a loan or financial support,
                        you can apply to a student finance organisation.
                      </Typography>
                    </Box>,
                    <Box>
                      <Typography variant="body4">
                        If 4 you're applying as an independent applicant (not
                        through a school), we recommend you ask your referee to
                        complete your reference well in advance of the deadline
                        to avoid any delays.Remember to look into student
                        finance too. If you need a loan or financial support,
                        you can apply to a student finance organisation.
                      </Typography>
                    </Box>,
                    <Box>
                      <Typography variant="body4">
                        If 5 you're applying as an independent applicant (not
                        through a school), we recommend you ask your referee to
                        complete your reference well in advance of the deadline
                        to avoid any delays.Remember to look into student
                        finance too. If you need a loan or financial support,
                        you can apply to a student finance organisation.
                      </Typography>
                    </Box>,
                  ]}
                />
              </Box>
            </FromTabletL>
            <TillTabletL>
              <Box m="2rem 1rem 1rem -1rem">
                <Tabs
                  tabMenus={[
                    "Independent applicants (not through a school)",
                    "Does your course start early between January and July?",
                    "Are you deferring application until the following year?",
                    "International and EU students",
                    "Siaradwyr Cymraeg",
                  ]}
                  tabContents={[
                    <Box>
                      <Typography variant="body4">
                        If 1 you're applying as an independent applicant (not
                        through a school), we recommend you ask your referee to
                        complete your reference well in advance of the deadline
                        to avoid any delays.Remember to look into student
                        finance too. If you need a loan or financial support,
                        you can apply to a student finance organisation.
                      </Typography>
                    </Box>,
                    <Box>
                      <Typography variant="body4">
                        If 2 you're applying as an independent applicant (not
                        through a school), we recommend you ask your referee to
                        complete your reference well in advance of the deadline
                        to avoid any delays.Remember to look into student
                        finance too. If you need a loan or financial support,
                        you can apply to a student finance organisation.
                      </Typography>
                    </Box>,
                    <Box>
                      <Typography variant="body4">
                        If 3 you're applying as an independent applicant (not
                        through a school), we recommend you ask your referee to
                        complete your reference well in advance of the deadline
                        to avoid any delays.Remember to look into student
                        finance too. If you need a loan or financial support,
                        you can apply to a student finance organisation.
                      </Typography>
                    </Box>,
                    <Box>
                      <Typography variant="body4">
                        If 4 you're applying as an independent applicant (not
                        through a school), we recommend you ask your referee to
                        complete your reference well in advance of the deadline
                        to avoid any delays.Remember to look into student
                        finance too. If you need a loan or financial support,
                        you can apply to a student finance organisation.
                      </Typography>
                    </Box>,
                    <Box>
                      <Typography variant="body4">
                        If 5 you're applying as an independent applicant (not
                        through a school), we recommend you ask your referee to
                        complete your reference well in advance of the deadline
                        to avoid any delays.Remember to look into student
                        finance too. If you need a loan or financial support,
                        you can apply to a student finance organisation.
                      </Typography>
                    </Box>,
                  ]}
                />
              </Box>
            </TillTabletL>
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
        gridGap="1rem"
        flexWrap="wrap"
        mb="10rem"
      >
        <Box maxWidth="30.188rem">
          <Typography variant="h2" mb="1.5rem">
            Get a refrence, pay your application fee, and &nbsp;
            <Box display="inline" color="success.highDark">
              send&nbsp;
            </Box>
            yours application to us
          </Typography>
          <Typography variant="body2" textAlign="left">
            A reference is a written recommendation from a teacher, adviser or
            professional who knows you academically. Everyone needs a reference,
            unless you get permission from your chosen universities and
            colleges. You must have a completed reference on your application
            before it is sent to us.
          </Typography>
          <Typography variant="body2" mb="1rem" mt="1rem">
            The application fee is £22 for a single choice, or £26.50 for more
            than one choice
          </Typography>
          <Typography variant="body2" mb="1rem">
            Trouble paying for your application? We've put together a handy
            guide to help you, which is available in English and Welsh.
          </Typography>
          <Button>How to get a reference</Button>
        </Box>
        <Box maxWidth="35.45rem">
          <img src={htp_5} width="100%" />
        </Box>
      </Box>
    </Layout>
  );
}
export default Howtoaplypage;
