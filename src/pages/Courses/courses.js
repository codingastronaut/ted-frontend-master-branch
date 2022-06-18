import React from "react";
import Layout, { VARIANTS } from "src/components/layout";
import Box from "src/components/Box";
import Typography from "src/components/Typography/Typography";
import IMG_1 from "src/assets/Courses_img_1.svg";
import IMG_2 from "src/assets/Courses_img_2.svg";
import IMG_3 from "src/assets/Courses_img_3.svg";
import IMG_4 from "src/assets/Courses_img_4.svg";
import Dotedlist from "src/components/Doted_List";
import Button from "src/components/button";
import VerticalTabs from "src/components/VerticalTabs";
function Courses() {
  return (
    <Layout variant={VARIANTS.THIRDLAYOUT}>
      <Box
        mt="9.375rem"
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="space-evenly"
        gridGap="3rem"
        mb="10.563rem"
      >
        <Box maxWidth="37.688rem">
          <Typography variant="h1">
            How to choose the right undergraduate course for you
          </Typography>
          <Box maxWidth="31.063rem" mt="2.5rem">
            <Typography variant="body1">
              Are you stuck deciding which subject, course type, or uni or
              college is right for you? Read on for our tips and advice on
              tackling this big decision.
            </Typography>
          </Box>
        </Box>
        <Box maxWidth="32.75rem">
          <img src={IMG_1} style={{ width: "100%" }} />
        </Box>
      </Box>
      <Box
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="space-evenly"
        gridGap="5.8rem"
        mb="17.563rem"
      >
        <Box maxWidth="33.5rem">
          <img src={IMG_2} style={{ width: "100%" }} />
        </Box>
        <Box maxWidth="37.688rem">
          <Typography variant="h2" mb="1.5rem">
            What subject is
            <br /> right
            <Box display="inline" color="success.highDark">
              &nbsp;for me&nbsp;
            </Box>
            ?
          </Typography>
          <Box maxWidth="34rem">
            <Typography variant="body1">
              It’s important you choose a subject you enjoy and will help you
              reach your goals. Here are some things to help you choose the
              right subject for you:
            </Typography>
            <Box maxWidth="37.188rem">
              <Dotedlist
                data={[
                  "Think about what you enjoy day-to-day – maybe this could be part of a future job role?",
                  "Explore different job sites and graduate career options to look for ideas on what you’d like to do once you've finished your studies.",
                  "Think about your career goals and the qualifications required as part of a person specification",
                  "Take a look at our subject guides to get an idea of the types of subjects you could study, and the industries graduates go on to work in.",
                  "Search for courses by subject to see what's available.",
                ]}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="space-evenly"
        gridGap="8.5rem"
        mb="13.563rem"
      >
        <Box maxWidth="37.688rem">
          <Typography variant="h2" mb="1.5rem">
            Thinking about more than
            <br /> one course or subject?
          </Typography>
          <Box maxWidth="34rem">
            <Typography variant="body1">
              To increase your chances of getting a place on a course we give
              you the option of applying to up to five courses at once, usually
              all in a similar subject so that your application is relevant to
              all of them.
              <br />
              <br /> Please note, there are a couple of restrictions though:
            </Typography>
            <Box maxWidth="37.188rem" mb="1.5rem">
              <Dotedlist
                data={[
                  "You can only apply maximum of four courses in any one of medicine, dentistry, veterinary medicine or veterinary science.",
                  "Usually you can only apply to one course at either the University of Oxford or the University of Cambridge. There are exceptions – visit the University of Oxford and the University of Cambridge websites for more information.",
                ]}
              />
            </Box>
            <Typography color="success.highDark" variant="body1">
              Click here to view the below video with BSL support.
            </Typography>
          </Box>
        </Box>
        <Box maxWidth="33.5rem">
          <img src={IMG_3} style={{ width: "100%" }} />
        </Box>
      </Box>
      <Box maxWidth="87.5rem" ml="auto" mr="auto">
        <Box maxWidth="49.063rem" mb="4.375rem">
          <Typography variant="h2">
            What{" "}
            <Box display="inline" color="success.highDark">
              types
            </Box>{" "}
            of undergraduate
            <br /> course are there?
          </Typography>
          <Box maxWidth="40.938rem" variant="body1">
            <Typography>
              After leaving school, most students going onto university or
              college study for an undergraduate degree. These are usually made
              up of modules (some compulsory and some optional) that add up to a
              full degree. Here are some examples of the types of undergraduate
              courses you can do. If you need a visa to study in the UK, you
              need to check your visa status allows you to do a part-time
              course, and/or work in the UK. Check if you need a visa and find
              out if you’re eligible to work on UKCISA's ‘Can you work?’
              website.
            </Typography>
          </Box>
        </Box>
        <Box mb="18.563rem">
          <VerticalTabs
            tabMenus={[
              "Bachelor degree courses",
              "Foundation years",
              "Diploma in Foundation Studies (art and design)",
              "Foundation degrees",
              "Degree or graduate level apprenticeship",
              "HNCs, HNDs, and other incremental routes",
            ]}
            tabContents={[
              <Box>
                <Typography variant="h3" mb="2rem">
                  Bachelor degree courses
                </Typography>
                <Box>
                  <Typography variant="body1" mb="1.5rem">
                    Bachelor degrees usually last either three or four years if
                    studied full-time (although some courses are longer). You
                    can concentrate on a single subject, combine two subjects in
                    a single course (often called dual or joint honours
                    courses), or choose several subjects (combined honours).
                    Most courses have core modules which everyone studies, and
                    many courses allow you to choose options or modules to make
                    up a course that suits you.
                  </Typography>
                  <br />
                  <Typography variant="body1" mb="1.5rem">
                    Some bachelor degrees offer a sandwich year, involving an
                    additional placement or year in industry, which forms part
                    of the course. If you're an international student, you'll
                    need to check you're eligible to work in the UK, or that
                    your visa allows you to do a placement course. Most
                    international students on a tier 4 visa will be eligible for
                    a year in industry or work placements as part of their
                    course, but there may be some conditions. Check with the
                    university or college before making this choice in your
                    application. You can find out more on the UKCISA website.
                  </Typography>
                  <br />
                  <Typography variant="body1" mb="2rem">
                    here are also courses which include postgraduate-level
                    study, known as integrated master's. Integrated master's
                    being at undergraduate level, then continue for an extra
                    year (or more) so you're awarded a master's degree at the
                    end. These are most common in engineering or science
                    subjects. If you're interested in an integrated master's,
                    you'll need to include the term 'master's' when using the
                    UCAS search tool.
                  </Typography>
                  <Button textAlign="center" mb="2rem">
                    Find a Courses
                  </Button>
                </Box>
              </Box>,
              <Box>
                <Typography variant="h3" mb="2rem">
                  Bachelor degree courses 1
                </Typography>
                <Box>
                  <Typography variant="body1" mb="1.5rem">
                    Bachelor degrees usually last either three or four years if
                    studied full-time (although some courses are longer). You
                    can concentrate on a single subject, combine two subjects in
                    a single course (often called dual or joint honours
                    courses), or choose several subjects (combined honours).
                    Most courses have core modules which everyone studies, and
                    many courses allow you to choose options or modules to make
                    up a course that suits you.
                  </Typography>
                  <br />
                  <Typography variant="body1" mb="1.5rem">
                    Some bachelor degrees offer a sandwich year, involving an
                    additional placement or year in industry, which forms part
                    of the course. If you're an international student, you'll
                    need to check you're eligible to work in the UK, or that
                    your visa allows you to do a placement course. Most
                    international students on a tier 4 visa will be eligible for
                    a year in industry or work placements as part of their
                    course, but there may be some conditions. Check with the
                    university or college before making this choice in your
                    application. You can find out more on the UKCISA website.
                  </Typography>
                  <br />
                  <Typography variant="body1" mb="2rem">
                    here are also courses which include postgraduate-level
                    study, known as integrated master's. Integrated master's
                    being at undergraduate level, then continue for an extra
                    year (or more) so you're awarded a master's degree at the
                    end. These are most common in engineering or science
                    subjects. If you're interested in an integrated master's,
                    you'll need to include the term 'master's' when using the
                    UCAS search tool.
                  </Typography>
                  <Button textAlign="center" mb="2rem">
                    Find a Courses
                  </Button>
                </Box>
              </Box>,
              <Box>
                <Typography variant="h3" mb="2rem">
                  Bachelor degree courses 2
                </Typography>
                <Box>
                  <Typography variant="body1" mb="1.5rem">
                    Bachelor degrees usually last either three or four years if
                    studied full-time (although some courses are longer). You
                    can concentrate on a single subject, combine two subjects in
                    a single course (often called dual or joint honours
                    courses), or choose several subjects (combined honours).
                    Most courses have core modules which everyone studies, and
                    many courses allow you to choose options or modules to make
                    up a course that suits you.
                  </Typography>
                  <br />
                  <Typography variant="body1" mb="1.5rem">
                    Some bachelor degrees offer a sandwich year, involving an
                    additional placement or year in industry, which forms part
                    of the course. If you're an international student, you'll
                    need to check you're eligible to work in the UK, or that
                    your visa allows you to do a placement course. Most
                    international students on a tier 4 visa will be eligible for
                    a year in industry or work placements as part of their
                    course, but there may be some conditions. Check with the
                    university or college before making this choice in your
                    application. You can find out more on the UKCISA website.
                  </Typography>
                  <br />
                  <Typography variant="body1" mb="2rem">
                    here are also courses which include postgraduate-level
                    study, known as integrated master's. Integrated master's
                    being at undergraduate level, then continue for an extra
                    year (or more) so you're awarded a master's degree at the
                    end. These are most common in engineering or science
                    subjects. If you're interested in an integrated master's,
                    you'll need to include the term 'master's' when using the
                    UCAS search tool.
                  </Typography>
                  <Button textAlign="center" mb="2rem">
                    Find a Courses
                  </Button>
                </Box>
              </Box>,
              <Box>
                <Typography variant="h3" mb="2rem">
                  Bachelor degree courses 3
                </Typography>
                <Box>
                  <Typography variant="body1" mb="1.5rem">
                    Bachelor degrees usually last either three or four years if
                    studied full-time (although some courses are longer). You
                    can concentrate on a single subject, combine two subjects in
                    a single course (often called dual or joint honours
                    courses), or choose several subjects (combined honours).
                    Most courses have core modules which everyone studies, and
                    many courses allow you to choose options or modules to make
                    up a course that suits you.
                  </Typography>
                  <br />
                  <Typography variant="body1" mb="1.5rem">
                    Some bachelor degrees offer a sandwich year, involving an
                    additional placement or year in industry, which forms part
                    of the course. If you're an international student, you'll
                    need to check you're eligible to work in the UK, or that
                    your visa allows you to do a placement course. Most
                    international students on a tier 4 visa will be eligible for
                    a year in industry or work placements as part of their
                    course, but there may be some conditions. Check with the
                    university or college before making this choice in your
                    application. You can find out more on the UKCISA website.
                  </Typography>
                  <br />
                  <Typography variant="body1" mb="2rem">
                    here are also courses which include postgraduate-level
                    study, known as integrated master's. Integrated master's
                    being at undergraduate level, then continue for an extra
                    year (or more) so you're awarded a master's degree at the
                    end. These are most common in engineering or science
                    subjects. If you're interested in an integrated master's,
                    you'll need to include the term 'master's' when using the
                    UCAS search tool.
                  </Typography>
                  <Button textAlign="center" mb="2rem">
                    Find a Courses
                  </Button>
                </Box>
              </Box>,
              <Box>
                <Typography variant="h3" mb="2rem">
                  Bachelor degree courses 4
                </Typography>
                <Box>
                  <Typography variant="body1" mb="1.5rem">
                    Bachelor degrees usually last either three or four years if
                    studied full-time (although some courses are longer). You
                    can concentrate on a single subject, combine two subjects in
                    a single course (often called dual or joint honours
                    courses), or choose several subjects (combined honours).
                    Most courses have core modules which everyone studies, and
                    many courses allow you to choose options or modules to make
                    up a course that suits you.
                  </Typography>
                  <br />
                  <Typography variant="body1" mb="1.5rem">
                    Some bachelor degrees offer a sandwich year, involving an
                    additional placement or year in industry, which forms part
                    of the course. If you're an international student, you'll
                    need to check you're eligible to work in the UK, or that
                    your visa allows you to do a placement course. Most
                    international students on a tier 4 visa will be eligible for
                    a year in industry or work placements as part of their
                    course, but there may be some conditions. Check with the
                    university or college before making this choice in your
                    application. You can find out more on the UKCISA website.
                  </Typography>
                  <br />
                  <Typography variant="body1" mb="2rem">
                    here are also courses which include postgraduate-level
                    study, known as integrated master's. Integrated master's
                    being at undergraduate level, then continue for an extra
                    year (or more) so you're awarded a master's degree at the
                    end. These are most common in engineering or science
                    subjects. If you're interested in an integrated master's,
                    you'll need to include the term 'master's' when using the
                    UCAS search tool.
                  </Typography>
                  <Button textAlign="center" mb="2rem">
                    Find a Courses
                  </Button>
                </Box>
              </Box>,
              <Box>
                <Typography variant="h3" mb="2rem">
                  Bachelor degree courses
                </Typography>
                <Box>
                  <Typography variant="body1" mb="1.5rem">
                    Bachelor degrees usually last either three or four years if
                    studied full-time (although some courses are longer). You
                    can concentrate on a single subject, combine two subjects in
                    a single course (often called dual or joint honours
                    courses), or choose several subjects (combined honours).
                    Most courses have core modules which everyone studies, and
                    many courses allow you to choose options or modules to make
                    up a course that suits you.
                  </Typography>
                  <br />
                  <Typography variant="body1" mb="1.5rem">
                    Some bachelor degrees offer a sandwich year, involving an
                    additional placement or year in industry, which forms part
                    of the course. If you're an international student, you'll
                    need to check you're eligible to work in the UK, or that
                    your visa allows you to do a placement course. Most
                    international students on a tier 4 visa will be eligible for
                    a year in industry or work placements as part of their
                    course, but there may be some conditions. Check with the
                    university or college before making this choice in your
                    application. You can find out more on the UKCISA website.
                  </Typography>
                  <br />
                  <Typography variant="body1" mb="2rem">
                    here are also courses which include postgraduate-level
                    study, known as integrated master's. Integrated master's
                    being at undergraduate level, then continue for an extra
                    year (or more) so you're awarded a master's degree at the
                    end. These are most common in engineering or science
                    subjects. If you're interested in an integrated master's,
                    you'll need to include the term 'master's' when using the
                    UCAS search tool.
                  </Typography>
                  <Button textAlign="center" mb="2rem">
                    Find a Courses
                  </Button>
                </Box>
              </Box>,
            ]}
          />
        </Box>
      </Box>
      <Box
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
        gridGap="7rem"
        mb="10.563rem"
      >
        <Box maxWidth="37.688rem">
          <Typography variant="h2" mb="1.5rem">
            Home or away:{" "}
            <Box display="inline" color="success.highDark">
              where
            </Box>{" "}
            <br />
            should I study?
          </Typography>
          <Box maxWidth="40rem">
            <Typography variant="body1">
              Some students set their heart on a particular university, while
              others just want to choose the course they like the sound of best.
              Either way is fine, but make sure you do your research, as
              changing your university or college once you’ve started isn’t
              always easy. Find the right accommodation. Finding somewhere
              you'll be happy to live is an important consideration when you're
              deciding where you want to study. To help you make the right
              choice, use our accommodation search to research your options and
              find both uni and private student accommodation.
              <br />
              <br /> Here are five top tips to help you when choosing where to
              study:
            </Typography>
          </Box>
          <Box maxWidth="38.25rem" mb="1.5rem">
            <Dotedlist
              data={[
                "Attend an open day or if you can't visit in person, you can go to an online open day – we cannot recommend this enough. It’s an opportunity for you to meet the course tutors, see the facilities, and explore the area.",
                "If you can’t attend an open day, explore the campus with a virtual tour.",
                "If you can’t attend an open day, explore the campus with a virtual tour.Check the application deadline – some universities and courses have a different application deadline, so make sure you know the deadline associated to your chosen course or uni.",
                "Check the entry requirements – different courses and universities will have different entry requirements, which you can check on the course listing in our search tool. Some universities and colleges make contextual offers. This is where the university or college considers any barriers you may face, and will either reduce their grade requirements or give extra consideration when deciding whether to give you an offer. Check out this blog for more information. ",
                "Read our tips to help you choose between courses and universities.",
              ]}
            />
          </Box>
          <Button textAlign="center">Find a course</Button>
        </Box>
        <Box maxWidth="42.75rem">
          <img src={IMG_4} style={{ width: "100%" }} />
        </Box>
      </Box>
    </Layout>
  );
}

export default Courses;
