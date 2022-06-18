import React from "react";
import { FromTabletL, TillTabletL } from "src/hooks/useActiveViewportSize";
import Box from "src/components/Box";
import Typography from "src/components/Typography";
import Numberedlist from "src/components/Numbered_List";
import VerticalTabs from "src/components/VerticalTabs/VerticalTabs";
import Tabs from "src/components/Tabs";
import amico from "src/assets/amico.svg";
import managementrafiki from "src/assets/managementrafiki.svg";
import Gradesrafiki from "src/assets/Gradesrafiki.svg";
import Button from "src/components/button";
import Dotedlist from "src/components/Doted_List";
import Awholeyearrafiki from "src/assets/Awholeyearrafiki.svg";
import Layout, { VARIANTS } from "src/components/layout";

const Whentoapplypage = () => {
  return (
    <Layout variant={VARIANTS.EIGHTLAYOUT}>
      <Box
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
        gridGap="5rem"
        flexWrap="wrap"
        mt="4rem"
        mb="14rem"
      >
        <Box maxWidth="32.063rem">
          <Typography variant="h1">When to apply?</Typography>
          <Typography variant="subheader3" mt="2rem" textAlign="justify">
            Some courses have different deadlines, and many are a long time in
            advance of the start of the <br /> course. Find out which deadline
            applies to you, and what you need to do by that deadline.
          </Typography>
        </Box>
        <Box>
          <Box maxWidth="19.0625rem">
            <img src={amico} width="100%" />
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gridGap="5rem"
        flexWrap="wrap"
        mb="16rem"
      >
        <Box>
          <Box maxWidth="33.3125">
            <img src={managementrafiki} width="100%" alot="Logo" />
          </Box>
          <Box maxWidth="42.625rem">
            <Box m="2rem 1rem 1rem -1rem">
              <Tabs
                tabMenus={[
                  "Missed your deadline?",
                  "International students",
                  " Part-time students",
                ]}
                tabContents={[
                  <Box>
                    <Typography variant="body4" color="gray.lowDark">
                      {" "}
                      <Typography as="span" variant="body3">
                        {" "}
                        30 June 2022, 18:00 (UK time)
                      </Typography>{" "}
                      – the final deadline for late applications with course
                      choices
                    </Typography>
                    <br />
                    <Typography variant="body4" color="gray.lowDark">
                      {" "}
                      <Typography as="span" variant="body3">
                        {" "}
                        29 September 2022, 18:00
                      </Typography>{" "}
                      (UK time) – you can still apply until this date, but
                      instead of choosing courses, you’ll be entered into
                      ‘Clearing’ – the process universities and colleges use to
                      fill any places they still have on their courses
                    </Typography>
                  </Box>,
                  <Box>
                    <Typography variant="body4">
                      {" "}
                      <Typography as="span" variant="body3">
                        {" "}
                        30 June 2022, 18:00 (UK time)
                      </Typography>{" "}
                      – the final deadline for late applications with course
                      choices
                    </Typography>
                    <br />
                    <Typography variant="body4" color="gray.lowDark">
                      {" "}
                      <Typography as="span" variant="body3">
                        {" "}
                        29 September 2022, 18:00
                      </Typography>{" "}
                      (UK time) – you can still apply until this date, but
                      instead of choosing courses, you’ll be entered into
                      ‘Clearing’ – the process universities and colleges use to
                      fill any places they still have on their courses
                    </Typography>
                  </Box>,
                  <Box>
                    <Typography variant="body4">
                      {" "}
                      <Typography as="span" variant="body3">
                        {" "}
                        30 June 2022, 18:00 (UK time)
                      </Typography>{" "}
                      – the final deadline for late applications with course
                      choices
                    </Typography>
                    <br />
                    <Typography variant="body4" color="gray.lowDark">
                      {" "}
                      <Typography as="span" variant="body3">
                        {" "}
                        29 September 2022, 18:00
                      </Typography>{" "}
                      (UK time) – you can still apply until this date, but
                      instead of choosing courses, you’ll be entered into
                      ‘Clearing’ – the process universities and colleges use to
                      fill any places they still have on their courses
                    </Typography>
                  </Box>,
                ]}
              />
            </Box>
          </Box>
        </Box>

        <Box maxWidth="42.3125rem">
          <Typography variant="h2">
            <Typography as="span" variant="h2" color="success.highDark">
              {" "}
              Deadlines{" "}
            </Typography>{" "}
            for on-time applications
          </Typography>
          <Typography variant="body2" color="gray.lowDark">
            For courses starting in 2022 (and for deferred applications), your
            application should be with us at UCAS by one of these dates –
            depending on what courses you apply for. If your completed
            application – including all your personal details and your academic
            reference – is submitted by the deadline, it is guaranteed to be
            considered.
          </Typography>
          <br />
          <Typography variant="body2" color="gray.lowDark">
            If you're applying through your school/college, please check their
            deadline, and follow this to get your application in on time. This
            gives them enough time to read your application, check you've
            entered your qualifications correctly, write and attach your
            reference, and submit your application to us.
          </Typography>
          <br />
          <Typography variant="body2" color="gray.lowDark">
            <Typography as="span" variant="body3">
              15 October 2021 for 2022 entry at 18:00 (UK time)
            </Typography>{" "}
            – any course at the universities of Oxford and Cambridge, or for
            most courses in medicine, veterinary medicine/science, and
            dentistry. You can add choices with a different deadline later, but
            don’t forget you can only have five choices in total.{" "}
          </Typography>
          <br />
          <Typography variant="body2" color="gray.lowDark">
            <Typography as="span" variant="body3">
              26 January 2022 for 2022 entry at 18:00 (UK time)
            </Typography>{" "}
            – for the majority of courses.
          </Typography>
          <br />
          <Typography variant="body2" color="gray.lowDark">
            Some course providers require additional admissions tests to be
            taken alongside the UCAS application, and these may have a deadline.
            Find out more about these tests. Check course information in our
            search tool to see which deadline applies to you.
          </Typography>
          <br />
          <Typography variant="body2" color="gray.lowDark">
            Apply as soon as possible: Student funding arrangements mean that as
            offers are made and places fill up, some courses may only have
            vacancies for students from certain locations. It’s therefore really
            important that you apply for your chosen courses by the appropriate
            deadlines mentioned above, as not all courses will have places for
            all students.
          </Typography>
          <br />
          <Typography variant="body2" color="gray.lowDark">
            {" "}
            All applications received after 30 June are entered into Clearing –
            find out more{" "}
            <Typography as="span" color="success.highDark" variant="body2">
              {" "}
              about Clearing.{" "}
            </Typography>
          </Typography>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gridGap="9rem"
        flexWrap="wrap"
        mb="30rem"
      >
        <Box maxWidth="37.625">
          <Box>
            <Typography variant="h2">
              What needs{" "}
              <Typography as="span" variant="h2" color="success.highDark">
                {" "}
                to be done{" "}
              </Typography>{" "}
              by these dates?
            </Typography>
          </Box>
          <Box maxWidth="32.8125rem">
            <Typography variant="body2" color="gray.lowDark">
              You'll need to leave enough time to complete your application,
              resolve any queries and make sure it reaches us by the deadline.{" "}
              <br /> After you find courses and you’re ready to apply, we’ll
              explain everything in more detail, but here’s a brief overview:
            </Typography>
          </Box>
          <Box>
            <Numberedlist
              data={[
                " Fill in your details, qualifications and course choices.",
                "Write a personal statement to demonstrate you’ll be a good student.",
                " Include your reference and pay your application fee.",
              ]}
            />
          </Box>
          <Box mt="2.5rem">
            <Button variant="body4">
              Tips for writing a personal statement
            </Button>
          </Box>
        </Box>

        <Box maxWidth="43.75rem">
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
        justifyContent="center"
        alignItems="center"
        gridGap="9rem"
        flexWrap="wrap"
        mb="30rem"
      >
        <Box maxWidth="37.875">
          <img src={Gradesrafiki} alt="Logo" width="100%" />
        </Box>

        <Box maxWidth="39.625rem">
          <Typography variant="h2">
            How to meet
            <Typography variant="h2" color="success.highDark">
              entry requirements{" "}
            </Typography>
          </Typography>
          <Typography color="gray.lowDark">
            Each course has different requirements you should have or be working
            towards in school or college – usually a mix of qualifications,
            subjects and/or exam grades. <br />
            As such, many applicants apply during their final year at school or
            college.
          </Typography>

          <Dotedlist
            data={[
              "When you go to find courses , you’ll need to check the entry requirements so you can apply for courses you have a good chance of getting a place on.",
              "This is where the option to apply for up to five courses comes in handy – you can choose courses with higher and lower requirements so that you’ll have a backup.",
            ]}
          />

          <Box m="2rem 1rem 1rem -1rem">
            <Tabs
              tabMenus={[
                "International and EU students",
                "Mature students (over 21)",
              ]}
              tabContents={[
                <Box>
                  <Typography variant="body4">
                    Don’t worry if you don’t have the right qualifications.
                  </Typography>
                  <br />
                  <Typography variant="body4">
                    You can discuss alternatives with course providers, such as
                    taking an Access course, or getting accreditation for prior
                    learning, life experience or work experience.
                  </Typography>
                </Box>,
                <Box>
                  <Typography variant="body4">
                    Don’t worry if you don’t have the right qualifications.
                  </Typography>
                  <br />
                  <Typography variant="body4">
                    You can discuss alternatives with course providers, such as
                    taking an Access course, or getting accreditation for prior
                    learning, life experience or work experience.
                  </Typography>
                </Box>,
              ]}
            />
          </Box>
          <Button>More about</Button>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gridGap="9rem"
        flexWrap="wrap"
        mb="30rem"
      >
        <Box maxWidth="40.3125rem">
          <Box>
            <Typography variant="h2">
              {" "}
              <Typography as="span" variant="h2" color="success.highDark">
                {" "}
                How to defer{" "}
              </Typography>{" "}
              your uni or college application
            </Typography>
            <Typography variant="body2">
              There are two ways to defer your application to university or
              college, depending what stage of the application process you’re
              at.
            </Typography>

            <Numberedlist
              data={[
                "<b> When making your application </b>– you can select a ‘deferred’ start date for your chosen course in your application, but it’s important to contact the uni or college before submitting your application to make sure they are happy to accept a deferred application.",
                "<b>After you’ve applied</b> – contact your chosen uni or college and ask if they’d be happy to change your course start date to the following year.",
              ]}
            />
          </Box>
          <Box mt="2rem">
            <Button>Find out more</Button>
          </Box>
        </Box>

        <Box maxWidth="37.3125rem">
          <img src={Awholeyearrafiki} alt="Logo" width="100%" />
        </Box>
      </Box>
    </Layout>
  );
};
export default Whentoapplypage;
