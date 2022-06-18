import React from "react";
import Layout, { VARIANTS } from "src/components/layout";
import Box from "src/components/Box";
import Typography from "src/components/Typography";
import NEC from "src/assets/NECimg.svg";
import styled from "styled-components";
import Listcontent from "src/components/Numbered_List";
function NECPAGE() {
  return (
    <>
      <Layout variant={VARIANTS.FIFTHLAYOUT}>
        <Box
          display="flex"
          flexWrap="wrap"
          alignItems="center"
          gridGap="6.3rem"
          justifyContent="center"
          mb="21rem"
          mt="8rem"
        >
          <Box>
            <Typography variant="h1" maxWidth="44.375rem">
              National
              <br /> Examinations Council
            </Typography>
          </Box>
          <Box maxWidth="25.5rem">
            <img src={NEC} width="100%" alt="Login" />
          </Box>
        </Box>
        <Box
          display="flex"
          flexWrap="wrap"
          gridGap="12.5rem"
          justifyContent="center"
          mb="21rem"
        >
          <Box>
            <Box maxWidth="31.5rem">
              <Typography variant="h2">
                Senior School Certificate <br />
                Examination
                <Box display="inline" color="success.highDark">
                  (SSCE)
                </Box>
              </Typography>
              <Typography
                variant="buttonText"
                mt="2rem"
                mb="3rem"
                textAlign="justify"
              >
                This is the examination taken by candidates in their last stage
                of Secondary School Education. The SSCE is in two categories.
                One is for candidates in the third and final year of their
                senior secondary education and it is called SSCE Internal while
                the Second is SSCE External and is for candidates not in the
                School system, i.e. Private Candidates.
              </Typography>
            </Box>
            <Box maxWidth="31.5rem">
              <Typography variant="h2">EXTERNAL</Typography>
              <Typography variant="buttonText" mt="2rem" textAlign="justify">
                Another core component of the mandate of the Council as espoused
                in the Enabling law is the conduct of the Senior School
                Certificate Examination for External Candidates.
              </Typography>
            </Box>
          </Box>
          <Box maxWidth="504px">
            <Typography variant="h2">Internal</Typography>
            <Typography
              variant="buttonText"
              maxWidth="25.5rem"
              textAlign="justify"
            >
              The SSCE internal has seventy-six subjects which are grouped into
              the following six categories.
            </Typography>
            <Listcontent
              data={[
                "Compulsory Cross-Cutting Subjects",
                "Science and Mathematics",
                "Technology",
                "Humanities",
                "Business Studies and",
                "Business Studies and",
              ]}
            />
            <Typography variant="body1" textAlign="justify" mt="2rem">
              The minimum number of subjects a candidate can sit for is eight
              while the il All Senior number of subject Secondary schools in the
              Federation
              <br /> present.
            </Typography>
            <Typography variant="body1">
              Candidates for the SSCE Internal.
            </Typography>
          </Box>
        </Box>
      </Layout>
    </>
  );
}
export default NECPAGE;
