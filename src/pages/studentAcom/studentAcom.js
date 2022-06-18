import React from "react";
import Layout, { VARIANTS } from "src/components/layout";
import Box from "src/components/Box";
import Typography from "src/components/Typography";
import Studentbg from "src/assets/bg.png";
import man from "src/assets/man.png";
import Jobhunt from "src/assets/Jobhunt.png";
import Button from "src/components/button";

const studentAcom = () => {
  return (
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
        <Box maxWidth="37.25rem">
          <Typography variant="h1" mb="2.5rem">
            Student <br />
            Accommodations
          </Typography>
          <Box maxWidth="28.063rem">
            <Typography variant="subheader1">
              Student finance usually consists of a Tuition Fee Loan and a
              Maintenance Loan to cover – or at least partially help with – your
              university costs.
            </Typography>
          </Box>
        </Box>
        <Box maxWidth="49.5rem">
          <img src={Studentbg} style={{ width: "100%" }} alt="Logo" />
        </Box>
      </Box>

      <Box
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
        flexWrap="wrap"
        mt="5rem"
      >
        <Box maxWidth="41rem">
          <img src={man} style={{ width: "100%" }} alt="Logo" />
        </Box>
        <Box maxWidth="40rem">
          <Typography variant="h2" color="black.highDark" mb="1.5rem">
            Tips for{" "}
            <Box display="inline" color="success.highDark">
              cleaning
            </Box>{" "}
            your
            <br /> student accommodation
          </Typography>
          <Box>
            <Typography variant="subheader1" color="gray.mediumDark">
              Whether you’re thinking ‘how can I make my room look nice?’ or
              you’re worried about living somewhere messy or unclean – here are
              some tips for making student cleaning easy.
            </Typography>
          </Box>
          <Box mt="2rem" textAlign="center" display="flex">
            <Button>Read more</Button>
          </Box>
        </Box>
      </Box>

      <Box
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
        flexWrap="wrap"
        mt="5rem"
      >
        <Box maxWidth="40rem">
          <Typography variant="h2" color="black.highDark" mb="1.5rem">
            How to find the right student
            <br />
            <Box display="inline" color="success.highDark">
              accommodation
            </Box>{" "}
            for you
          </Typography>
          <Box>
            <Typography variant="subheader1" color="gray.mediumDark">
              This is it. Life is good. You’re going to uni. Is it going to be
              the party paradise of on-campus halls, or a flat-share right in
              the middle of town? Maybe the cost of rent will decide, what
              supports on hand, or whether there’s a bus stop
            </Typography>
          </Box>
          <Box mt="2rem" textAlign="center" display="flex">
            <Button>Read more</Button>
          </Box>
        </Box>
        <Box maxWidth="41rem">
          <img src={Jobhunt} style={{ width: "100%" }} alt="Logo" />
        </Box>
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        mt="5rem"
        gridGap="6rem"
      >
        <Box maxWidth="40rem">
          <Typography variant="h2" color="black.highDark">
            Your rights
          </Typography>
          <Box>
            <Typography
              variant="subheader1"
              pt="1rem"
              color="gray.mediumDark"
              mt="2rem"
            >
              When it comes to the place you live at university or college,
              there are minimum student accommodation standards to make sure
              you’re living somewhere suitable.
            </Typography>
          </Box>
          <Box textAlign="center" display="flex" mt="3rem">
            <Button>Read more</Button>
          </Box>
        </Box>
        <Box maxWidth="40rem">
          <Box>
            <Typography variant="h2" color="black.highDark" mb="1rem" mt="2rem">
              The 4 things you really
              <br /> don’t need to take to uni
            </Typography>
            <Box>
              <Typography variant="subheader1" color="gray.mediumDark">
                Everyone needs their own uni shopping list when they move into
                student accommodation. A mix of new essentials and old keepsakes
                will probably make the final cut, but how do you decide what NOT
                to take?
              </Typography>
            </Box>
            <Box textAlign="center" display="flex" mt="2rem">
              <Button>Read more</Button>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        mt="5rem"
        gridGap="6rem"
        mb="18rem"
      >
        <Box maxWidth="40rem">
          <Typography variant="h2" color="black.highDark">
            Five activities for meeting
            <br /> new people at unis
          </Typography>
          <Box>
            <Typography variant="subheader1" color="gray.mediumDark" mt="2rem">
              Something students think about a lot when they move to uni is
              making new friends. Having a few activities in mind can give you a
              good head start.
            </Typography>
          </Box>
          <Box textAlign="center" mt="2rem" display="flex">
            <Button>Read more</Button>
          </Box>
        </Box>
        <Box maxWidth="40rem">
          <Box>
            <Typography variant="h2" color="black.highDark" mt="2rem">
              What you should do vs
              <br /> what your landlord does
            </Typography>
            <Box>
              <Typography
                variant="subheader1"
                color="gray.mediumDark"
                mt="2rem"
              >
                If you’re living in student accommodation managed by a private
                landlord, it’s a different setup to living in university-managed
                accommodation. Here’s what you need to know.
              </Typography>
            </Box>
            <Box textAlign="center" display="flex" mt="2rem">
              <Button>Read more</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};
export default studentAcom;
