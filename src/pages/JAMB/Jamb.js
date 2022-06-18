import React from "react";
import Box from "src/components/Box";
import Typography from "src/components/Typography";
import styled from "styled-components";
import JAMP from "src/assets/Jamp.svg";
import Jamp_1 from "src/assets/Jamp-1.png";
import Container from "src/components/Container";
import Layout, { VARIANTS } from "src/components/layout";
function Jambpage() {
  return (
    <>
      <Layout variant={VARIANTS.FIFTHLAYOUT}>
        <Container>
          <Box
            display="flex"
            flexWrap="wrap"
            alignItems="center"
            gridGap="9.5rem"
            justifyContent="center"
            mb="15rem"
            mt="10.5rem"
          >
            <Box maxWidth="46.875rem">
              <Typography variant="h1">
                Joint admissions and
                <br /> matriculation board
                <Typography variant="h3" mt="2rem">
                  The Joint Admissions and Matriculations Board
                </Typography>
              </Typography>
            </Box>
            <Box maxWidth="21.688rem">
              <img src={JAMP} alt="Login" />
            </Box>
          </Box>
          <Box
            display="flex"
            flexWrap="wrap"
            mb="17rem"
            justifyContent="center"
            alignItems="center"
            gridGap="5rem"
          >
            <Box maxWidth="40.25rem">
              <img src={Jamp_1} width="100%" alt="Login" />
            </Box>
            <Box maxWidth="28rem">
              <Typography variant="h2" mb="1.5rem">
                JAMB
              </Typography>
              <Typography variant="body2" textAlign="left">
                The Joint Admissions and Matriculations Board (JAMB) is a
                Nigerian entrance examination board for tertiary-level
                institutions. The board conducts entrance Unified Tertiary
                Matriculation Examination for prospective undergraduates into
                Nigerian universities. The board is also charged with the
                responsibility to administer similar examinations for applicants
                to Nigerian public and private monotechnics, polytechnics, and
                colleges of educations. All of these candidates must have
                obtained the West Africa School Certificate, now West African
                Examinations Council, WAEC, or its equivalent, National
                Examination Council (Nigeria), NECO. Every year, the Joint
                Admission and Matriculation Board conducts an examination that
                determines if a student will be admitted to higher education.
              </Typography>
              <Typography variant="body2" textAlign="left" mt="2.5rem">
                The Unified Tertiary Matriculation Examination is only valid for
                a year and with grade range between 0-400. After the conduct of
                the year's examination, the board sit and deliberate on the
                cut-off mark for universities, polytechnics and colleges of
                education, with some institutions requiring higher marks.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Layout>
    </>
  );
}
export default Jambpage;
