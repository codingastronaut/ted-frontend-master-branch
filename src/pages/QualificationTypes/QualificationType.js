import React from "react";
import Box from "src/components/Box";
import Typography from "src/components/Typography";
import Layout, { VARIANTS } from "src/components/layout";
import Businessdecisions from "src/assets/Businessdecisions.svg";
import { FromTabletL, TillTabletL } from "src/hooks/useActiveViewportSize";
import VerticalTabs from "src/components/VerticalTabs/VerticalTabs";
import Tabs from "src/components/Tabs";
// import Button from "src/components/button";
import styled from "styled-components";
import DocumentUpload from "src/components/DocumentUpload/DocumentUpload";
const FindBox = styled.button`
  width: 11.063rem;
  height: 3.125rem;
  border: 2px solid #19B690;
  border-radius: 66px;
  background: #19B690;
  color: white;
`;

function QualificationType(){
    return(
        <Layout variant={VARIANTS.EIGHTLAYOUT}>
          <Box>
          <DocumentUpload />
          </Box>
         <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          mt="9rem"
          mb="6rem"
          gridGap="4rem"
        >
            <Box>
            <Typography variant="h1" color="black.highDark">Qualification types</Typography>
            <Typography variant="h3" mt="2.5rem" textAlign="justify" color="black.highDark" >
              Find out what each type of postgraduate qualification<br />
               involves, what the entry requirements are, how much it<br />
                might cost, and where to find out more.
            </Typography>
          </Box>
          <Box maxWidth="32.75rem">
          <img src={Businessdecisions} width="100%" />

          </Box>
          <Box
        // maxWidth="47.188rem"
        // margin="0 0 0 18%"
        >
        <Box
        >
            <Typography variant="h1" color="black.highDark">Here are the <Box display="inline" color="success.highDark">
                  top things
                </Box> <br /> admissions teams</Typography>
            <Typography variant="h3" mt="2.5rem" textAlign="justify" color="black.highDark">
            When you search for postgraduate courses, make sure you carefully check the entry
             requirements, because as well as specific undergraduate qualifications, some courses
              require A levels, Highers, or work experience too.
            </Typography>
          </Box>
          </Box>
        </Box>
        <Box
        // maxWidth="47.188rem"
        // margin="0 0 0 18%"
        >
        <Box
        >
            <Typography variant="h1" color="black.highDark">Here are the <Box display="inline" color="success.highDark">
                  top things
                </Box> <br /> admissions teams</Typography>
            <Typography variant="h3" mt="2.5rem" textAlign="justify" color="black.highDark">
            When you search for postgraduate courses, make sure you carefully check the entry
             requirements, because as well as specific undergraduate qualifications, some courses
              require A levels, Highers, or work experience too.
            </Typography>
          </Box>
          </Box>
          <Box
          justifyContent="center"
          maxWidth=""
          >
          <Box m="4rem 1rem 1rem -1rem">
            <FromTabletL>
              <Box ml={{ laptopS: "3rem", laptop: "1.3rem" }}
              >
                <VerticalTabs
                  tabMenus={[
                    "Taught master's",
                    "Master's by research",
                    "Postgraduate certificates and diplomas",
                    "PhD (or doctorate)",
                    "MBA",
                    "Professional qualifications",
                    "Law qualifications",
                    "Teacher training",
                    "Performing arts",
                  ]}
                  tabContents={[
                      <Box
                      display="flex"
                      gridGap="2rem"
                      >
                        <Box>  
                    <Box>
                        <Typography variant="h3" m="1.4rem 0rem">What are they called?</Typography>
                      <Typography variant="body1" color="gray.lowDark">
                          Usually, MA (Master of Arts) or MSc (Master of Science), although there are others: Mmus (Master of Music), MOrth (Master of Orthodontics), or LLM (Master of Laws).
                      </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h3" m="1.4rem 0rem">What do they involve?</Typography>
                      <Typography variant="body1" color="gray.lowDark">A taught master’s degree will include some research but the emphasis will be on learning by teaching.
                            The content, structure, and assessment of taught master’s courses with the same names can vary from one university to the next – please check course descriptions carefully. The teaching can be through lectures, classes, or supervised group work, and assessments can include examinations, essays, dissertations, or team activities.
                      </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h3" m="1.4rem 0rem">What does it give you?</Typography>
                      <Typography variant="body1" color="gray.lowDark">Enhanced employability.<br />
                                                    Intellectual reward.<br />
                                                    Preparation for a PhD.<br />
                                                    Potential to study a new subject.
                      </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h3" m="1.4rem 0rem">What are the yearly tuition fees?</Typography>
                      <Typography variant="body1" color="gray.lowDark">Study this type of course if… you like <br /> learning through classes and seminars.
                      </Typography>
                    </Box>
                    <Box textAlign="center" display="flex" mt="5rem" mb="2rem">
            <FindBox>Find a course</FindBox>
          </Box>
                    </Box>
                    <Box> 
                    <Box>
                        <Typography variant="h3" m="1.4rem 0rem" m="1rem 0rem">How long is the course?</Typography>
                      <Typography variant="body1" color="gray.lowDark">
                      Full-time courses are normally one year, or two years part-time, although some master's degrees can be longer.
                      </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h3" m="1.4rem 0rem">What are the entry requirements?</Typography>
                      <Typography variant="body1" color="gray.lowDark">A qualification comparable to a UK undergraduate degree, normally to 2:1 standard or above.Enthusiasm, skill, and knowledge of your discipline.
                                            Possibly relevant work experience, particularly if your first degree is in another subject.
                      </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h3" m="1.4rem 0rem">When does the course start?</Typography>
                      <Typography variant="body1" color="gray.lowDark">Usually in September.</Typography>
                    </Box>
                    <Box>
                        <Typography variant="h3" m="1.4rem 0rem">What are the yearly tuition fee  s?</Typography>
                      <Typography variant="body1" color="gray.lowDark">UK/EU students: full-time, around £5,000 – £19,000; part-time, around £2,750 – £10,000. The highest fees are for very specialist courses in high-ranking universities that assist top paid careers, for example, in global finance. Fees of between £5,000 – £7,000 are average.
                        Students from rest of the world: full-time, around £15,000 – £16,000; part time, around £2,750 – £11,000.
                        Fees depend on course subject and university ranking.</Typography>
                    </Box>
                    </Box>
                    </Box>
                    ,
                    <Box
                      display="flex"
                      gridGap="2rem"
                      >
                        <Box>  
                    <Box>
                        <Typography variant="h3" m="1.4rem 0rem">2 What are they called?</Typography>
                      <Typography variant="body1" color="gray.lowDark">
                          Usually, MA (Master of Arts) or MSc (Master of Science), although there are others: Mmus (Master of Music), MOrth (Master of Orthodontics), or LLM (Master of Laws).
                      </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h3" m="1.4rem 0rem">What do they involve?</Typography>
                      <Typography variant="body1" color="gray.lowDark">A taught master’s degree will include some research but the emphasis will be on learning by teaching.
                            The content, structure, and assessment of taught master’s courses with the same names can vary from one university to the next – please check course descriptions carefully. The teaching can be through lectures, classes, or supervised group work, and assessments can include examinations, essays, dissertations, or team activities.
                      </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h3" m="1.4rem 0rem">What does it give you?</Typography>
                      <Typography variant="body1" color="gray.lowDark">Enhanced employability.<br />
                                                    Intellectual reward.<br />
                                                    Preparation for a PhD.<br />
                                                    Potential to study a new subject.
                      </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h3" m="1.4rem 0rem">What are the yearly tuition fees?</Typography>
                      <Typography variant="body1" color="gray.lowDark">Study this type of course if… you like <br /> learning through classes and seminars.
                      </Typography>
                    </Box>
                    <Box textAlign="center" display="flex" mt="5rem" mb="2rem">
            <FindBox>Find a course</FindBox>
          </Box>
                    </Box>
                    <Box> 
                    <Box>
                        <Typography variant="h3" m="1.4rem 0rem" m="1rem 0rem">How long is the course?</Typography>
                      <Typography variant="body1" color="gray.lowDark">
                      Full-time courses are normally one year, or two years part-time, although some master's degrees can be longer.
                      </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h3" m="1.4rem 0rem">What are the entry requirements?</Typography>
                      <Typography variant="body1" color="gray.lowDark">A qualification comparable to a UK undergraduate degree, normally to 2:1 standard or above.Enthusiasm, skill, and knowledge of your discipline.
                                            Possibly relevant work experience, particularly if your first degree is in another subject.
                      </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h3" m="1.4rem 0rem">When does the course start?</Typography>
                      <Typography variant="body1" color="gray.lowDark">Usually in September.</Typography>
                    </Box>
                    <Box>
                        <Typography variant="h3" m="1.4rem 0rem">What are the yearly tuition fee  s?</Typography>
                      <Typography variant="body1" color="gray.lowDark">UK/EU students: full-time, around £5,000 – £19,000; part-time, around £2,750 – £10,000. The highest fees are for very specialist courses in high-ranking universities that assist top paid careers, for example, in global finance. Fees of between £5,000 – £7,000 are average.
                        Students from rest of the world: full-time, around £15,000 – £16,000; part time, around £2,750 – £11,000.
                        Fees depend on course subject and university ranking.</Typography>
                    </Box>
                    </Box>
                    </Box>,

                   <Box
                      display="flex"
                      gridGap="2rem"
                      >
                        <Box>  
                    <Box>
                        <Typography variant="h3" m="1.4rem 0rem"> 3 What are they called?</Typography>
                      <Typography variant="body1" color="gray.lowDark">
                          Usually, MA (Master of Arts) or MSc (Master of Science), although there are others: Mmus (Master of Music), MOrth (Master of Orthodontics), or LLM (Master of Laws).
                      </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h3" m="1.4rem 0rem">What do they involve?</Typography>
                      <Typography variant="body1" color="gray.lowDark">A taught master’s degree will include some research but the emphasis will be on learning by teaching.
                            The content, structure, and assessment of taught master’s courses with the same names can vary from one university to the next – please check course descriptions carefully. The teaching can be through lectures, classes, or supervised group work, and assessments can include examinations, essays, dissertations, or team activities.
                      </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h3" m="1.4rem 0rem">What does it give you?</Typography>
                      <Typography variant="body1" color="gray.lowDark">Enhanced employability.<br />
                                                    Intellectual reward.<br />
                                                    Preparation for a PhD.<br />
                                                    Potential to study a new subject.
                      </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h3" m="1.4rem 0rem">What are the yearly tuition fees?</Typography>
                      <Typography variant="body1" color="gray.lowDark">Study this type of course if… you like <br /> learning through classes and seminars.
                      </Typography>
                    </Box>
                    <Box textAlign="center" display="flex" mt="5rem" mb="2rem">
            <FindBox>Find a course</FindBox>
          </Box>
                    </Box>
                    <Box> 
                    <Box>
                        <Typography variant="h3" m="1.4rem 0rem" m="1rem 0rem">How long is the course?</Typography>
                      <Typography variant="body1" color="gray.lowDark">
                      Full-time courses are normally one year, or two years part-time, although some master's degrees can be longer.
                      </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h3" m="1.4rem 0rem">What are the entry requirements?</Typography>
                      <Typography variant="body1" color="gray.lowDark">A qualification comparable to a UK undergraduate degree, normally to 2:1 standard or above.Enthusiasm, skill, and knowledge of your discipline.
                                            Possibly relevant work experience, particularly if your first degree is in another subject.
                      </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h3" m="1.4rem 0rem">When does the course start?</Typography>
                      <Typography variant="body1" color="gray.lowDark">Usually in September.</Typography>
                    </Box>
                    <Box>
                        <Typography variant="h3" m="1.4rem 0rem">What are the yearly tuition fee  s?</Typography>
                      <Typography variant="body1" color="gray.lowDark">UK/EU students: full-time, around £5,000 – £19,000; part-time, around £2,750 – £10,000. The highest fees are for very specialist courses in high-ranking universities that assist top paid careers, for example, in global finance. Fees of between £5,000 – £7,000 are average.
                        Students from rest of the world: full-time, around £15,000 – £16,000; part time, around £2,750 – £11,000.
                        Fees depend on course subject and university ranking.</Typography>
                    </Box>
                    </Box>
                    </Box>,
                    <Box
                    display="flex"
                    gridGap="2rem"
                    >
                      <Box>  
                  <Box>
                      <Typography variant="h3" m="1.4rem 0rem"> 4 What are they called?</Typography>
                    <Typography variant="body1" color="gray.lowDark">
                        Usually, MA (Master of Arts) or MSc (Master of Science), although there are others: Mmus (Master of Music), MOrth (Master of Orthodontics), or LLM (Master of Laws).
                    </Typography>
                  </Box>
                  <Box>
                      <Typography variant="h3" m="1.4rem 0rem">What do they involve?</Typography>
                    <Typography variant="body1" color="gray.lowDark">A taught master’s degree will include some research but the emphasis will be on learning by teaching.
                          The content, structure, and assessment of taught master’s courses with the same names can vary from one university to the next – please check course descriptions carefully. The teaching can be through lectures, classes, or supervised group work, and assessments can include examinations, essays, dissertations, or team activities.
                    </Typography>
                  </Box>
                  <Box>
                      <Typography variant="h3" m="1.4rem 0rem">What does it give you?</Typography>
                    <Typography variant="body1" color="gray.lowDark">Enhanced employability.<br />
                                                  Intellectual reward.<br />
                                                  Preparation for a PhD.<br />
                                                  Potential to study a new subject.
                    </Typography>
                  </Box>
                  <Box>
                      <Typography variant="h3" m="1.4rem 0rem">What are the yearly tuition fees?</Typography>
                    <Typography variant="body1" color="gray.lowDark">Study this type of course if… you like <br /> learning through classes and seminars.
                    </Typography>
                  </Box>
                  <Box textAlign="center" display="flex" mt="5rem" mb="2rem">
          <FindBox>Find a course</FindBox>
        </Box>
                  </Box>
                  <Box> 
                  <Box>
                      <Typography variant="h3" m="1.4rem 0rem" m="1rem 0rem">How long is the course?</Typography>
                    <Typography variant="body1" color="gray.lowDark">
                    Full-time courses are normally one year, or two years part-time, although some master's degrees can be longer.
                    </Typography>
                  </Box>
                  <Box>
                      <Typography variant="h3" m="1.4rem 0rem">What are the entry requirements?</Typography>
                    <Typography variant="body1" color="gray.lowDark">A qualification comparable to a UK undergraduate degree, normally to 2:1 standard or above.Enthusiasm, skill, and knowledge of your discipline.
                                          Possibly relevant work experience, particularly if your first degree is in another subject.
                    </Typography>
                  </Box>
                  <Box>
                      <Typography variant="h3" m="1.4rem 0rem">When does the course start?</Typography>
                    <Typography variant="body1" color="gray.lowDark">Usually in September.</Typography>
                  </Box>
                  <Box>
                      <Typography variant="h3" m="1.4rem 0rem">What are the yearly tuition fee  s?</Typography>
                    <Typography variant="body1" color="gray.lowDark">UK/EU students: full-time, around £5,000 – £19,000; part-time, around £2,750 – £10,000. The highest fees are for very specialist courses in high-ranking universities that assist top paid careers, for example, in global finance. Fees of between £5,000 – £7,000 are average.
                      Students from rest of the world: full-time, around £15,000 – £16,000; part time, around £2,750 – £11,000.
                      Fees depend on course subject and university ranking.</Typography>
                  </Box>
                  </Box>
                  </Box>,<Box
                      display="flex"
                      gridGap="2rem"
                      >
                        <Box>  
                    <Box>
                        <Typography variant="h3" m="1.4rem 0rem"> 5 What are they called?</Typography>
                      <Typography variant="body1" color="gray.lowDark">
                          Usually, MA (Master of Arts) or MSc (Master of Science), although there are others: Mmus (Master of Music), MOrth (Master of Orthodontics), or LLM (Master of Laws).
                      </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h3" m="1.4rem 0rem">What do they involve?</Typography>
                      <Typography variant="body1" color="gray.lowDark">A taught master’s degree will include some research but the emphasis will be on learning by teaching.
                            The content, structure, and assessment of taught master’s courses with the same names can vary from one university to the next – please check course descriptions carefully. The teaching can be through lectures, classes, or supervised group work, and assessments can include examinations, essays, dissertations, or team activities.
                      </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h3" m="1.4rem 0rem">What does it give you?</Typography>
                      <Typography variant="body1" color="gray.lowDark">Enhanced employability.<br />
                                                    Intellectual reward.<br />
                                                    Preparation for a PhD.<br />
                                                    Potential to study a new subject.
                      </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h3" m="1.4rem 0rem">What are the yearly tuition fees?</Typography>
                      <Typography variant="body1" color="gray.lowDark">Study this type of course if… you like <br /> learning through classes and seminars.
                      </Typography>
                    </Box>
                    <Box textAlign="center" display="flex" mt="5rem" mb="2rem">
            <FindBox>Find a course</FindBox>
          </Box>
                    </Box>
                    <Box> 
                    <Box>
                        <Typography variant="h3" m="1.4rem 0rem" m="1rem 0rem">How long is the course?</Typography>
                      <Typography variant="body1" color="gray.lowDark">
                      Full-time courses are normally one year, or two years part-time, although some master's degrees can be longer.
                      </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h3" m="1.4rem 0rem">What are the entry requirements?</Typography>
                      <Typography variant="body1" color="gray.lowDark">A qualification comparable to a UK undergraduate degree, normally to 2:1 standard or above.Enthusiasm, skill, and knowledge of your discipline.
                                            Possibly relevant work experience, particularly if your first degree is in another subject.
                      </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h3" m="1.4rem 0rem">When does the course start?</Typography>
                      <Typography variant="body1" color="gray.lowDark">Usually in September.</Typography>
                    </Box>
                    <Box>
                        <Typography variant="h3" m="1.4rem 0rem">What are the yearly tuition fee  s?</Typography>
                      <Typography variant="body1" color="gray.lowDark">UK/EU students: full-time, around £5,000 – £19,000; part-time, around £2,750 – £10,000. The highest fees are for very specialist courses in high-ranking universities that assist top paid careers, for example, in global finance. Fees of between £5,000 – £7,000 are average.
                        Students from rest of the world: full-time, around £15,000 – £16,000; part time, around £2,750 – £11,000.
                        Fees depend on course subject and university ranking.</Typography>
                    </Box>
                    </Box>
                    </Box>,
                    <Box
                    display="flex"
                    gridGap="2rem"
                    >
                      <Box>  
                  <Box>
                      <Typography variant="h3" m="1.4rem 0rem"> 6 What are they called?</Typography>
                    <Typography variant="body1" color="gray.lowDark">
                        Usually, MA (Master of Arts) or MSc (Master of Science), although there are others: Mmus (Master of Music), MOrth (Master of Orthodontics), or LLM (Master of Laws).
                    </Typography>
                  </Box>
                  <Box>
                      <Typography variant="h3" m="1.4rem 0rem">What do they involve?</Typography>
                    <Typography variant="body1" color="gray.lowDark">A taught master’s degree will include some research but the emphasis will be on learning by teaching.
                          The content, structure, and assessment of taught master’s courses with the same names can vary from one university to the next – please check course descriptions carefully. The teaching can be through lectures, classes, or supervised group work, and assessments can include examinations, essays, dissertations, or team activities.
                    </Typography>
                  </Box>
                  <Box>
                      <Typography variant="h3" m="1.4rem 0rem">What does it give you?</Typography>
                    <Typography variant="body1" color="gray.lowDark">Enhanced employability.<br />
                                                  Intellectual reward.<br />
                                                  Preparation for a PhD.<br />
                                                  Potential to study a new subject.
                    </Typography>
                  </Box>
                  <Box>
                      <Typography variant="h3" m="1.4rem 0rem">What are the yearly tuition fees?</Typography>
                    <Typography variant="body1" color="gray.lowDark">Study this type of course if… you like <br /> learning through classes and seminars.
                    </Typography>
                  </Box>
                  <Box textAlign="center" display="flex" mt="5rem" mb="2rem">
          <FindBox>Find a course</FindBox>
        </Box>
                  </Box>
                  <Box> 
                  <Box>
                      <Typography variant="h3" m="1.4rem 0rem" m="1rem 0rem">How long is the course?</Typography>
                    <Typography variant="body1" color="gray.lowDark">
                    Full-time courses are normally one year, or two years part-time, although some master's degrees can be longer.
                    </Typography>
                  </Box>
                  <Box>
                      <Typography variant="h3" m="1.4rem 0rem">What are the entry requirements?</Typography>
                    <Typography variant="body1" color="gray.lowDark">A qualification comparable to a UK undergraduate degree, normally to 2:1 standard or above.Enthusiasm, skill, and knowledge of your discipline.
                                          Possibly relevant work experience, particularly if your first degree is in another subject.
                    </Typography>
                  </Box>
                  <Box>
                      <Typography variant="h3" m="1.4rem 0rem">When does the course start?</Typography>
                    <Typography variant="body1" color="gray.lowDark">Usually in September.</Typography>
                  </Box>
                  <Box>
                      <Typography variant="h3" m="1.4rem 0rem">What are the yearly tuition fee  s?</Typography>
                    <Typography variant="body1" color="gray.lowDark">UK/EU students: full-time, around £5,000 – £19,000; part-time, around £2,750 – £10,000. The highest fees are for very specialist courses in high-ranking universities that assist top paid careers, for example, in global finance. Fees of between £5,000 – £7,000 are average.
                      Students from rest of the world: full-time, around £15,000 – £16,000; part time, around £2,750 – £11,000.
                      Fees depend on course subject and university ranking.</Typography>
                  </Box>
                  </Box>
                  </Box>
                    ,
                    <Box
                      display="flex"
                      gridGap="2rem"
                      >
                        <Box>  
                    <Box>
                        <Typography variant="h3" m="1.4rem 0rem"> 7 What are they called?</Typography>
                      <Typography variant="body1" color="gray.lowDark">
                          Usually, MA (Master of Arts) or MSc (Master of Science), although there are others: Mmus (Master of Music), MOrth (Master of Orthodontics), or LLM (Master of Laws).
                      </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h3" m="1.4rem 0rem">What do they involve?</Typography>
                      <Typography variant="body1" color="gray.lowDark">A taught master’s degree will include some research but the emphasis will be on learning by teaching.
                            The content, structure, and assessment of taught master’s courses with the same names can vary from one university to the next – please check course descriptions carefully. The teaching can be through lectures, classes, or supervised group work, and assessments can include examinations, essays, dissertations, or team activities.
                      </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h3" m="1.4rem 0rem">What does it give you?</Typography>
                      <Typography variant="body1" color="gray.lowDark">Enhanced employability.<br />
                                                    Intellectual reward.<br />
                                                    Preparation for a PhD.<br />
                                                    Potential to study a new subject.
                      </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h3" m="1.4rem 0rem">What are the yearly tuition fees?</Typography>
                      <Typography variant="body1" color="gray.lowDark">Study this type of course if… you like <br /> learning through classes and seminars.
                      </Typography>
                    </Box>
                    <Box textAlign="center" display="flex" mt="5rem" mb="2rem">
            <FindBox>Find a course</FindBox>
          </Box>
                    </Box>
                    <Box> 
                    <Box>
                        <Typography variant="h3" m="1.4rem 0rem" m="1rem 0rem">How long is the course?</Typography>
                      <Typography variant="body1" color="gray.lowDark">
                      Full-time courses are normally one year, or two years part-time, although some master's degrees can be longer.
                      </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h3" m="1.4rem 0rem">What are the entry requirements?</Typography>
                      <Typography variant="body1" color="gray.lowDark">A qualification comparable to a UK undergraduate degree, normally to 2:1 standard or above.Enthusiasm, skill, and knowledge of your discipline.
                                            Possibly relevant work experience, particularly if your first degree is in another subject.
                      </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h3" m="1.4rem 0rem">When does the course start?</Typography>
                      <Typography variant="body1" color="gray.lowDark">Usually in September.</Typography>
                    </Box>
                    <Box>
                        <Typography variant="h3" m="1.4rem 0rem">What are the yearly tuition fee  s?</Typography>
                      <Typography variant="body1" color="gray.lowDark">UK/EU students: full-time, around £5,000 – £19,000; part-time, around £2,750 – £10,000. The highest fees are for very specialist courses in high-ranking universities that assist top paid careers, for example, in global finance. Fees of between £5,000 – £7,000 are average.
                        Students from rest of the world: full-time, around £15,000 – £16,000; part time, around £2,750 – £11,000.
                        Fees depend on course subject and university ranking.</Typography>
                    </Box>
                    </Box>
                    </Box>
                    ,
                    <Box
                      display="flex"
                      gridGap="2rem"
                      >
                        <Box>  
                    <Box>
                        <Typography variant="h3" m="1.4rem 0rem"> 8 What are they called?</Typography>
                      <Typography variant="body1" color="gray.lowDark">
                          Usually, MA (Master of Arts) or MSc (Master of Science), although there are others: Mmus (Master of Music), MOrth (Master of Orthodontics), or LLM (Master of Laws).
                      </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h3" m="1.4rem 0rem">What do they involve?</Typography>
                      <Typography variant="body1" color="gray.lowDark">A taught master’s degree will include some research but the emphasis will be on learning by teaching.
                            The content, structure, and assessment of taught master’s courses with the same names can vary from one university to the next – please check course descriptions carefully. The teaching can be through lectures, classes, or supervised group work, and assessments can include examinations, essays, dissertations, or team activities.
                      </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h3" m="1.4rem 0rem">What does it give you?</Typography>
                      <Typography variant="body1" color="gray.lowDark">Enhanced employability.<br />
                                                    Intellectual reward.<br />
                                                    Preparation for a PhD.<br />
                                                    Potential to study a new subject.
                      </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h3" m="1.4rem 0rem">What are the yearly tuition fees?</Typography>
                      <Typography variant="body1" color="gray.lowDark">Study this type of course if… you like <br /> learning through classes and seminars.
                      </Typography>
                    </Box>
                    <Box textAlign="center" display="flex" mt="5rem" mb="2rem">
            <FindBox>Find a course</FindBox>
          </Box>
                    </Box>
                    <Box> 
                    <Box>
                        <Typography variant="h3" m="1.4rem 0rem" m="1rem 0rem">How long is the course?</Typography>
                      <Typography variant="body1" color="gray.lowDark">
                      Full-time courses are normally one year, or two years part-time, although some master's degrees can be longer.
                      </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h3" m="1.4rem 0rem">What are the entry requirements?</Typography>
                      <Typography variant="body1" color="gray.lowDark">A qualification comparable to a UK undergraduate degree, normally to 2:1 standard or above.Enthusiasm, skill, and knowledge of your discipline.
                                            Possibly relevant work experience, particularly if your first degree is in another subject.
                      </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h3" m="1.4rem 0rem">When does the course start?</Typography>
                      <Typography variant="body1" color="gray.lowDark">Usually in September.</Typography>
                    </Box>
                    <Box>
                        <Typography variant="h3" m="1.4rem 0rem">What are the yearly tuition fee  s?</Typography>
                      <Typography variant="body1" color="gray.lowDark">UK/EU students: full-time, around £5,000 – £19,000; part-time, around £2,750 – £10,000. The highest fees are for very specialist courses in high-ranking universities that assist top paid careers, for example, in global finance. Fees of between £5,000 – £7,000 are average.
                        Students from rest of the world: full-time, around £15,000 – £16,000; part time, around £2,750 – £11,000.
                        Fees depend on course subject and university ranking.</Typography>
                    </Box>
                    </Box>
                    </Box>
                    ,
                  ]}
                />
              </Box>
            </FromTabletL>
            <TillTabletL>
              <Box m="2rem 1rem 1rem -1rem">
                <Tabs
                  tabMenus={[
                    "Taught master's",
                    "Master's by research",
                    "Postgraduate certificates and diplomas",
                    "PhD (or doctorate)",
                    "MBA",
                    "Professional qualifications",
                    "Law qualifications",
                    "Teacher training",
                    "Performing arts",
                  ]}
                  tabContents={[
                    <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexWrap="wrap"
                      gridGap="2rem"
                      >
                        <Box>  
                    <Box>
                        <Typography variant="h3" m="1.4rem 0rem">What are they called?</Typography>
                      <Typography variant="body1" color="gray.lowDark">
                          Usually, MA (Master of Arts) or MSc (Master of Science), although there are others: Mmus (Master of Music), MOrth (Master of Orthodontics), or LLM (Master of Laws).
                      </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h3" m="1.4rem 0rem">What do they involve?</Typography>
                      <Typography variant="body1" color="gray.lowDark">A taught master’s degree will include some research but the emphasis will be on learning by teaching.
                            The content, structure, and assessment of taught master’s courses with the same names can vary from one university to the next – please check course descriptions carefully. The teaching can be through lectures, classes, or supervised group work, and assessments can include examinations, essays, dissertations, or team activities.
                      </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h3" m="1.4rem 0rem">What does it give you?</Typography>
                      <Typography variant="body1" color="gray.lowDark">Enhanced employability.<br />
                                                    Intellectual reward.<br />
                                                    Preparation for a PhD.<br />
                                                    Potential to study a new subject.
                      </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h3" m="1.4rem 0rem">What are the yearly tuition fees?</Typography>
                      <Typography variant="body1" color="gray.lowDark">Study this type of course if… you like <br /> learning through classes and seminars.
                      </Typography>
                    </Box>
                    <Box textAlign="center" display="flex" mt="5rem" mb="2rem">
            <FindBox>Find a course</FindBox>
          </Box>
                    </Box>
                    <Box> 
                    <Box>
                        <Typography variant="h3" m="1.4rem 0rem" m="1rem 0rem">How long is the course?</Typography>
                      <Typography variant="body1" color="gray.lowDark">
                      Full-time courses are normally one year, or two years part-time, although some master's degrees can be longer.
                      </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h3" m="1.4rem 0rem">What are the entry requirements?</Typography>
                      <Typography variant="body1" color="gray.lowDark">A qualification comparable to a UK undergraduate degree, normally to 2:1 standard or above.Enthusiasm, skill, and knowledge of your discipline.
                                            Possibly relevant work experience, particularly if your first degree is in another subject.
                      </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h3" m="1.4rem 0rem">When does the course start?</Typography>
                      <Typography variant="body1" color="gray.lowDark">Usually in September.</Typography>
                    </Box>
                    <Box>
                        <Typography variant="h3" m="1.4rem 0rem">What are the yearly tuition fee  s?</Typography>
                      <Typography variant="body1" color="gray.lowDark">UK/EU students: full-time, around £5,000 – £19,000; part-time, around £2,750 – £10,000. The highest fees are for very specialist courses in high-ranking universities that assist top paid careers, for example, in global finance. Fees of between £5,000 – £7,000 are average.
                        Students from rest of the world: full-time, around £15,000 – £16,000; part time, around £2,750 – £11,000.
                        Fees depend on course subject and university ranking.</Typography>
                    </Box>
                    </Box>
                    </Box>,
                    <Box
                    display="flex"
                    gridGap="2rem"
                    >
                      <Box>  
                  <Box>
                      <Typography variant="h3" m="1.4rem 0rem">What are they called?</Typography>
                    <Typography variant="body1" color="gray.lowDark">
                        Usually, MA (Master of Arts) or MSc (Master of Science), although there are others: Mmus (Master of Music), MOrth (Master of Orthodontics), or LLM (Master of Laws).
                    </Typography>
                  </Box>
                  <Box>
                      <Typography variant="h3" m="1.4rem 0rem">What do they involve?</Typography>
                    <Typography variant="body1" color="gray.lowDark">A taught master’s degree will include some research but the emphasis will be on learning by teaching.
                          The content, structure, and assessment of taught master’s courses with the same names can vary from one university to the next – please check course descriptions carefully. The teaching can be through lectures, classes, or supervised group work, and assessments can include examinations, essays, dissertations, or team activities.
                    </Typography>
                  </Box>
                  <Box>
                      <Typography variant="h3" m="1.4rem 0rem">What does it give you?</Typography>
                    <Typography variant="body1" color="gray.lowDark">Enhanced employability.<br />
                                                  Intellectual reward.<br />
                                                  Preparation for a PhD.<br />
                                                  Potential to study a new subject.
                    </Typography>
                  </Box>
                  <Box>
                      <Typography variant="h3" m="1.4rem 0rem">What are the yearly tuition fees?</Typography>
                    <Typography variant="body1" color="gray.lowDark">Study this type of course if… you like <br /> learning through classes and seminars.
                    </Typography>
                  </Box>
                  <Box textAlign="center" display="flex" mt="5rem" mb="2rem">
          <FindBox>Find a course</FindBox>
        </Box>
                  </Box>
                  <Box> 
                  <Box>
                      <Typography variant="h3" m="1.4rem 0rem" m="1rem 0rem">How long is the course?</Typography>
                    <Typography variant="body1" color="gray.lowDark">
                    Full-time courses are normally one year, or two years part-time, although some master's degrees can be longer.
                    </Typography>
                  </Box>
                  <Box>
                      <Typography variant="h3" m="1.4rem 0rem">What are the entry requirements?</Typography>
                    <Typography variant="body1" color="gray.lowDark">A qualification comparable to a UK undergraduate degree, normally to 2:1 standard or above.Enthusiasm, skill, and knowledge of your discipline.
                                          Possibly relevant work experience, particularly if your first degree is in another subject.
                    </Typography>
                  </Box>
                  <Box>
                      <Typography variant="h3" m="1.4rem 0rem">When does the course start?</Typography>
                    <Typography variant="body1" color="gray.lowDark">Usually in September.</Typography>
                  </Box>
                  <Box>
                      <Typography variant="h3" m="1.4rem 0rem">What are the yearly tuition fee  s?</Typography>
                    <Typography variant="body1" color="gray.lowDark">UK/EU students: full-time, around £5,000 – £19,000; part-time, around £2,750 – £10,000. The highest fees are for very specialist courses in high-ranking universities that assist top paid careers, for example, in global finance. Fees of between £5,000 – £7,000 are average.
                      Students from rest of the world: full-time, around £15,000 – £16,000; part time, around £2,750 – £11,000.
                      Fees depend on course subject and university ranking.</Typography>
                  </Box>
                  </Box>
                  </Box>,
                    <Box
                    display="flex"
                    gridGap="2rem"
                    >
                      <Box>  
                  <Box>
                      <Typography variant="h3" m="1.4rem 0rem">What are they called?</Typography>
                    <Typography variant="body1" color="gray.lowDark">
                        Usually, MA (Master of Arts) or MSc (Master of Science), although there are others: Mmus (Master of Music), MOrth (Master of Orthodontics), or LLM (Master of Laws).
                    </Typography>
                  </Box>
                  <Box>
                      <Typography variant="h3" m="1.4rem 0rem">What do they involve?</Typography>
                    <Typography variant="body1" color="gray.lowDark">A taught master’s degree will include some research but the emphasis will be on learning by teaching.
                          The content, structure, and assessment of taught master’s courses with the same names can vary from one university to the next – please check course descriptions carefully. The teaching can be through lectures, classes, or supervised group work, and assessments can include examinations, essays, dissertations, or team activities.
                    </Typography>
                  </Box>
                  <Box>
                      <Typography variant="h3" m="1.4rem 0rem">What does it give you?</Typography>
                    <Typography variant="body1" color="gray.lowDark">Enhanced employability.<br />
                                                  Intellectual reward.<br />
                                                  Preparation for a PhD.<br />
                                                  Potential to study a new subject.
                    </Typography>
                  </Box>
                  <Box>
                      <Typography variant="h3" m="1.4rem 0rem">What are the yearly tuition fees?</Typography>
                    <Typography variant="body1" color="gray.lowDark">Study this type of course if… you like <br /> learning through classes and seminars.
                    </Typography>
                  </Box>
                  <Box textAlign="center" display="flex" mt="5rem" mb="2rem">
          <FindBox>Find a course</FindBox>
        </Box>
                  </Box>
                  <Box> 
                  <Box>
                      <Typography variant="h3" m="1.4rem 0rem" m="1rem 0rem">How long is the course?</Typography>
                    <Typography variant="body1" color="gray.lowDark">
                    Full-time courses are normally one year, or two years part-time, although some master's degrees can be longer.
                    </Typography>
                  </Box>
                  <Box>
                      <Typography variant="h3" m="1.4rem 0rem">What are the entry requirements?</Typography>
                    <Typography variant="body1" color="gray.lowDark">A qualification comparable to a UK undergraduate degree, normally to 2:1 standard or above.Enthusiasm, skill, and knowledge of your discipline.
                                          Possibly relevant work experience, particularly if your first degree is in another subject.
                    </Typography>
                  </Box>
                  <Box>
                      <Typography variant="h3" m="1.4rem 0rem">When does the course start?</Typography>
                    <Typography variant="body1" color="gray.lowDark">Usually in September.</Typography>
                  </Box>
                  <Box>
                      <Typography variant="h3" m="1.4rem 0rem">What are the yearly tuition fee  s?</Typography>
                    <Typography variant="body1" color="gray.lowDark">UK/EU students: full-time, around £5,000 – £19,000; part-time, around £2,750 – £10,000. The highest fees are for very specialist courses in high-ranking universities that assist top paid careers, for example, in global finance. Fees of between £5,000 – £7,000 are average.
                      Students from rest of the world: full-time, around £15,000 – £16,000; part time, around £2,750 – £11,000.
                      Fees depend on course subject and university ranking.</Typography>
                  </Box>
                  </Box>
                  </Box>,
                    <Box
                    display="flex"
                    gridGap="2rem"
                    >
                      <Box>  
                  <Box>
                      <Typography variant="h3" m="1.4rem 0rem">What are they called?</Typography>
                    <Typography variant="body1" color="gray.lowDark">
                        Usually, MA (Master of Arts) or MSc (Master of Science), although there are others: Mmus (Master of Music), MOrth (Master of Orthodontics), or LLM (Master of Laws).
                    </Typography>
                  </Box>
                  <Box>
                      <Typography variant="h3" m="1.4rem 0rem">What do they involve?</Typography>
                    <Typography variant="body1" color="gray.lowDark">A taught master’s degree will include some research but the emphasis will be on learning by teaching.
                          The content, structure, and assessment of taught master’s courses with the same names can vary from one university to the next – please check course descriptions carefully. The teaching can be through lectures, classes, or supervised group work, and assessments can include examinations, essays, dissertations, or team activities.
                    </Typography>
                  </Box>
                  <Box>
                      <Typography variant="h3" m="1.4rem 0rem">What does it give you?</Typography>
                    <Typography variant="body1" color="gray.lowDark">Enhanced employability.<br />
                                                  Intellectual reward.<br />
                                                  Preparation for a PhD.<br />
                                                  Potential to study a new subject.
                    </Typography>
                  </Box>
                  <Box>
                      <Typography variant="h3" m="1.4rem 0rem">What are the yearly tuition fees?</Typography>
                    <Typography variant="body1" color="gray.lowDark">Study this type of course if… you like <br /> learning through classes and seminars.
                    </Typography>
                  </Box>
                  <Box textAlign="center" display="flex" mt="5rem" mb="2rem">
          <FindBox>Find a course</FindBox>
        </Box>
                  </Box>
                  <Box> 
                  <Box>
                      <Typography variant="h3" m="1.4rem 0rem" m="1rem 0rem">How long is the course?</Typography>
                    <Typography variant="body1" color="gray.lowDark">
                    Full-time courses are normally one year, or two years part-time, although some master's degrees can be longer.
                    </Typography>
                  </Box>
                  <Box>
                      <Typography variant="h3" m="1.4rem 0rem">What are the entry requirements?</Typography>
                    <Typography variant="body1" color="gray.lowDark">A qualification comparable to a UK undergraduate degree, normally to 2:1 standard or above.Enthusiasm, skill, and knowledge of your discipline.
                                          Possibly relevant work experience, particularly if your first degree is in another subject.
                    </Typography>
                  </Box>
                  <Box>
                      <Typography variant="h3" m="1.4rem 0rem">When does the course start?</Typography>
                    <Typography variant="body1" color="gray.lowDark">Usually in September.</Typography>
                  </Box>
                  <Box>
                      <Typography variant="h3" m="1.4rem 0rem">What are the yearly tuition fee  s?</Typography>
                    <Typography variant="body1" color="gray.lowDark">UK/EU students: full-time, around £5,000 – £19,000; part-time, around £2,750 – £10,000. The highest fees are for very specialist courses in high-ranking universities that assist top paid careers, for example, in global finance. Fees of between £5,000 – £7,000 are average.
                      Students from rest of the world: full-time, around £15,000 – £16,000; part time, around £2,750 – £11,000.
                      Fees depend on course subject and university ranking.</Typography>
                  </Box>
                  </Box>
                  </Box>,
                    <Box
                    display="flex"
                    gridGap="2rem"
                    >
                      <Box>  
                  <Box>
                      <Typography variant="h3" m="1.4rem 0rem">What are they called?</Typography>
                    <Typography variant="body1" color="gray.lowDark">
                        Usually, MA (Master of Arts) or MSc (Master of Science), although there are others: Mmus (Master of Music), MOrth (Master of Orthodontics), or LLM (Master of Laws).
                    </Typography>
                  </Box>
                  <Box>
                      <Typography variant="h3" m="1.4rem 0rem">What do they involve?</Typography>
                    <Typography variant="body1" color="gray.lowDark">A taught master’s degree will include some research but the emphasis will be on learning by teaching.
                          The content, structure, and assessment of taught master’s courses with the same names can vary from one university to the next – please check course descriptions carefully. The teaching can be through lectures, classes, or supervised group work, and assessments can include examinations, essays, dissertations, or team activities.
                    </Typography>
                  </Box>
                  <Box>
                      <Typography variant="h3" m="1.4rem 0rem">What does it give you?</Typography>
                    <Typography variant="body1" color="gray.lowDark">Enhanced employability.<br />
                                                  Intellectual reward.<br />
                                                  Preparation for a PhD.<br />
                                                  Potential to study a new subject.
                    </Typography>
                  </Box>
                  <Box>
                      <Typography variant="h3" m="1.4rem 0rem">What are the yearly tuition fees?</Typography>
                    <Typography variant="body1" color="gray.lowDark">Study this type of course if… you like <br /> learning through classes and seminars.
                    </Typography>
                  </Box>
                  <Box textAlign="center" display="flex" mt="5rem" mb="2rem">
          <FindBox>Find a course</FindBox>
        </Box>
                  </Box>
                  <Box> 
                  <Box>
                      <Typography variant="h3" m="1.4rem 0rem" m="1rem 0rem">How long is the course?</Typography>
                    <Typography variant="body1" color="gray.lowDark">
                    Full-time courses are normally one year, or two years part-time, although some master's degrees can be longer.
                    </Typography>
                  </Box>
                  <Box>
                      <Typography variant="h3" m="1.4rem 0rem">What are the entry requirements?</Typography>
                    <Typography variant="body1" color="gray.lowDark">A qualification comparable to a UK undergraduate degree, normally to 2:1 standard or above.Enthusiasm, skill, and knowledge of your discipline.
                                          Possibly relevant work experience, particularly if your first degree is in another subject.
                    </Typography>
                  </Box>
                  <Box>
                      <Typography variant="h3" m="1.4rem 0rem">When does the course start?</Typography>
                    <Typography variant="body1" color="gray.lowDark">Usually in September.</Typography>
                  </Box>
                  <Box>
                      <Typography variant="h3" m="1.4rem 0rem">What are the yearly tuition fee  s?</Typography>
                    <Typography variant="body1" color="gray.lowDark">UK/EU students: full-time, around £5,000 – £19,000; part-time, around £2,750 – £10,000. The highest fees are for very specialist courses in high-ranking universities that assist top paid careers, for example, in global finance. Fees of between £5,000 – £7,000 are average.
                      Students from rest of the world: full-time, around £15,000 – £16,000; part time, around £2,750 – £11,000.
                      Fees depend on course subject and university ranking.</Typography>
                  </Box>
                  </Box>
                  </Box>,
                  <Box
                  display="flex"
                  gridGap="2rem"
                  >
                    <Box>  
                <Box>
                    <Typography variant="h3" m="1.4rem 0rem">What are they called?</Typography>
                  <Typography variant="body1" color="gray.lowDark">
                      Usually, MA (Master of Arts) or MSc (Master of Science), although there are others: Mmus (Master of Music), MOrth (Master of Orthodontics), or LLM (Master of Laws).
                  </Typography>
                </Box>
                <Box>
                    <Typography variant="h3" m="1.4rem 0rem">What do they involve?</Typography>
                  <Typography variant="body1" color="gray.lowDark">A taught master’s degree will include some research but the emphasis will be on learning by teaching.
                        The content, structure, and assessment of taught master’s courses with the same names can vary from one university to the next – please check course descriptions carefully. The teaching can be through lectures, classes, or supervised group work, and assessments can include examinations, essays, dissertations, or team activities.
                  </Typography>
                </Box>
                <Box>
                    <Typography variant="h3" m="1.4rem 0rem">What does it give you?</Typography>
                  <Typography variant="body1" color="gray.lowDark">Enhanced employability.<br />
                                                Intellectual reward.<br />
                                                Preparation for a PhD.<br />
                                                Potential to study a new subject.
                  </Typography>
                </Box>
                <Box>
                    <Typography variant="h3" m="1.4rem 0rem">What are the yearly tuition fees?</Typography>
                  <Typography variant="body1" color="gray.lowDark">Study this type of course if… you like <br /> learning through classes and seminars.
                  </Typography>
                </Box>
                <Box textAlign="center" display="flex" mt="5rem" mb="2rem">
        <FindBox>Find a course</FindBox>
      </Box>
                </Box>
                <Box> 
                <Box>
                    <Typography variant="h3" m="1.4rem 0rem" m="1rem 0rem">How long is the course?</Typography>
                  <Typography variant="body1" color="gray.lowDark">
                  Full-time courses are normally one year, or two years part-time, although some master's degrees can be longer.
                  </Typography>
                </Box>
                <Box>
                    <Typography variant="h3" m="1.4rem 0rem">What are the entry requirements?</Typography>
                  <Typography variant="body1" color="gray.lowDark">A qualification comparable to a UK undergraduate degree, normally to 2:1 standard or above.Enthusiasm, skill, and knowledge of your discipline.
                                        Possibly relevant work experience, particularly if your first degree is in another subject.
                  </Typography>
                </Box>
                <Box>
                    <Typography variant="h3" m="1.4rem 0rem">When does the course start?</Typography>
                  <Typography variant="body1" color="gray.lowDark">Usually in September.</Typography>
                </Box>
                <Box>
                    <Typography variant="h3" m="1.4rem 0rem">What are the yearly tuition fee  s?</Typography>
                  <Typography variant="body1" color="gray.lowDark">UK/EU students: full-time, around £5,000 – £19,000; part-time, around £2,750 – £10,000. The highest fees are for very specialist courses in high-ranking universities that assist top paid careers, for example, in global finance. Fees of between £5,000 – £7,000 are average.
                    Students from rest of the world: full-time, around £15,000 – £16,000; part time, around £2,750 – £11,000.
                    Fees depend on course subject and university ranking.</Typography>
                </Box>
                </Box>
                </Box>,
                <Box
                display="flex"
                gridGap="2rem"
                >
                  <Box>  
              <Box>
                  <Typography variant="h3" m="1.4rem 0rem">What are they called?</Typography>
                <Typography variant="body1" color="gray.lowDark">
                    Usually, MA (Master of Arts) or MSc (Master of Science), although there are others: Mmus (Master of Music), MOrth (Master of Orthodontics), or LLM (Master of Laws).
                </Typography>
              </Box>
              <Box>
                  <Typography variant="h3" m="1.4rem 0rem">What do they involve?</Typography>
                <Typography variant="body1" color="gray.lowDark">A taught master’s degree will include some research but the emphasis will be on learning by teaching.
                      The content, structure, and assessment of taught master’s courses with the same names can vary from one university to the next – please check course descriptions carefully. The teaching can be through lectures, classes, or supervised group work, and assessments can include examinations, essays, dissertations, or team activities.
                </Typography>
              </Box>
              <Box>
                  <Typography variant="h3" m="1.4rem 0rem">What does it give you?</Typography>
                <Typography variant="body1" color="gray.lowDark">Enhanced employability.<br />
                                              Intellectual reward.<br />
                                              Preparation for a PhD.<br />
                                              Potential to study a new subject.
                </Typography>
              </Box>
              <Box>
                  <Typography variant="h3" m="1.4rem 0rem">What are the yearly tuition fees?</Typography>
                <Typography variant="body1" color="gray.lowDark">Study this type of course if… you like <br /> learning through classes and seminars.
                </Typography>
              </Box>
              <Box textAlign="center" display="flex" mt="5rem" mb="2rem">
      <FindBox>Find a course</FindBox>
    </Box>
              </Box>
              <Box> 
              <Box>
                  <Typography variant="h3" m="1.4rem 0rem" m="1rem 0rem">How long is the course?</Typography>
                <Typography variant="body1" color="gray.lowDark">
                Full-time courses are normally one year, or two years part-time, although some master's degrees can be longer.
                </Typography>
              </Box>
              <Box>
                  <Typography variant="h3" m="1.4rem 0rem">What are the entry requirements?</Typography>
                <Typography variant="body1" color="gray.lowDark">A qualification comparable to a UK undergraduate degree, normally to 2:1 standard or above.Enthusiasm, skill, and knowledge of your discipline.
                                      Possibly relevant work experience, particularly if your first degree is in another subject.
                </Typography>
              </Box>
              <Box>
                  <Typography variant="h3" m="1.4rem 0rem">When does the course start?</Typography>
                <Typography variant="body1" color="gray.lowDark">Usually in September.</Typography>
              </Box>
              <Box>
                  <Typography variant="h3" m="1.4rem 0rem">What are the yearly tuition fee  s?</Typography>
                <Typography variant="body1" color="gray.lowDark">UK/EU students: full-time, around £5,000 – £19,000; part-time, around £2,750 – £10,000. The highest fees are for very specialist courses in high-ranking universities that assist top paid careers, for example, in global finance. Fees of between £5,000 – £7,000 are average.
                  Students from rest of the world: full-time, around £15,000 – £16,000; part time, around £2,750 – £11,000.
                  Fees depend on course subject and university ranking.</Typography>
              </Box>
              </Box>
              </Box>,
              <Box
                      display="flex"
                      gridGap="2rem"
                      >
                        <Box>  
                    <Box>
                        <Typography variant="h3" m="1.4rem 0rem">What are they called?</Typography>
                      <Typography variant="body1" color="gray.lowDark">
                          Usually, MA (Master of Arts) or MSc (Master of Science), although there are others: Mmus (Master of Music), MOrth (Master of Orthodontics), or LLM (Master of Laws).
                      </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h3" m="1.4rem 0rem">What do they involve?</Typography>
                      <Typography variant="body1" color="gray.lowDark">A taught master’s degree will include some research but the emphasis will be on learning by teaching.
                            The content, structure, and assessment of taught master’s courses with the same names can vary from one university to the next – please check course descriptions carefully. The teaching can be through lectures, classes, or supervised group work, and assessments can include examinations, essays, dissertations, or team activities.
                      </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h3" m="1.4rem 0rem">What does it give you?</Typography>
                      <Typography variant="body1" color="gray.lowDark">Enhanced employability.<br />
                                                    Intellectual reward.<br />
                                                    Preparation for a PhD.<br />
                                                    Potential to study a new subject.
                      </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h3" m="1.4rem 0rem">What are the yearly tuition fees?</Typography>
                      <Typography variant="body1" color="gray.lowDark">Study this type of course if… you like <br /> learning through classes and seminars.
                      </Typography>
                    </Box>
                    <Box textAlign="center" display="flex" mt="5rem" mb="2rem">
            <FindBox>Find a course</FindBox>
          </Box>
                    </Box>
                    <Box> 
                    <Box>
                        <Typography variant="h3" m="1.4rem 0rem" m="1rem 0rem">How long is the course?</Typography>
                      <Typography variant="body1" color="gray.lowDark">
                      Full-time courses are normally one year, or two years part-time, although some master's degrees can be longer.
                      </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h3" m="1.4rem 0rem">What are the entry requirements?</Typography>
                      <Typography variant="body1" color="gray.lowDark">A qualification comparable to a UK undergraduate degree, normally to 2:1 standard or above.Enthusiasm, skill, and knowledge of your discipline.
                                            Possibly relevant work experience, particularly if your first degree is in another subject.
                      </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h3" m="1.4rem 0rem">When does the course start?</Typography>
                      <Typography variant="body1" color="gray.lowDark">Usually in September.</Typography>
                    </Box>
                    <Box>
                        <Typography variant="h3" m="1.4rem 0rem">What are the yearly tuition fee  s?</Typography>
                      <Typography variant="body1" color="gray.lowDark">UK/EU students: full-time, around £5,000 – £19,000; part-time, around £2,750 – £10,000. The highest fees are for very specialist courses in high-ranking universities that assist top paid careers, for example, in global finance. Fees of between £5,000 – £7,000 are average.
                        Students from rest of the world: full-time, around £15,000 – £16,000; part time, around £2,750 – £11,000.
                        Fees depend on course subject and university ranking.</Typography>
                    </Box>
                    </Box>
                    </Box>,

                  ]}
                />
              </Box>
            </TillTabletL>
          </Box>
        </Box>

        </Layout>

    );
}
export default QualificationType;