import React from "react";
import Box from "src/components/Box";
import Typography from "src/components/Typography";
import waec from "src/assets/waec.svg";
import ExaminationCard from "src/components/ExaminationCard/ExaminationCard";
import Container from "src/components/Container";
import Layout, { VARIANTS } from "src/components/layout";

const WAEC = () => {
  return (
    <>
      <Layout variant={VARIANTS.SEVENTHLAYOUT}>
        <Container>
          <Box
            display="flex"
            flexWrap="wrap"
            alignItems="center"
            justifyContent="space-between"
            gridGap="2rem"
            mt="14rem"
            mb="12rem"
          >
            <Box>
              <Typography variant="h1" color="black.highDark">
                West African <br /> Examinations Council
              </Typography>
              <Typography variant="h3" color="black.highDark" mt="2.5rem">
                Simple Steps for Registration
              </Typography>
            </Box>

            <Box>
              <Box maxWidth="21rem">
                <img src={waec} width="100%" />
              </Box>
            </Box>
          </Box>
          <Box display="flex">
            <Typography variant="h3" color="black.highDark" mt="2.5rem">
              <Typography
                as="span"
                variant="h3"
                color="success.highDark"
                pr="0.4rem"
              >
                9
              </Typography>
              Simple Steps for <br /> Registration
            </Typography>
          </Box>
          <Box
            mt="3rem"
            mb="10rem"
            justifyContent="space-between"
            display="grid"
            gridTemplateColumns={{ tablet: "auto auto", mobileL: "auto" }}
            width={{ tablet: "auto", mobileL: "auto" }}
            gridGap="3rem"
          >
            <ExaminationCard
              heading="1.Login"
              text="Candidates are to start their Registration by enrolling their fingerprints and capturing other personal details using the Biometric Data Capture software. Click here to download if you have a fingerprint scanner or visit any Registration Centre with such facilities to scan your fingerprints. Ensure your Surname, First name and other names are captured using the software"
            />
            <ExaminationCard
              heading="2.Bio data"
              text="You are required to enter your bio data which includes Gender, Disability, Marital Status, Maiden Name (if applicable), Date of Birth, Nationality and State of Origin. Note that your name must not be more than 40 characters, this includes spaces between the surname, firstname and other name. Please select NONE for disability information if you are not disabled"
            />
            <ExaminationCard
              heading="3.Picture capture using webcam"
              text="You are required to take a picture with a webcam with a minimum Camera Specification* 2.0MP 720p USB 2.0 Color: High Resolution RGB Support Hi-Speed USB 2.0 certified 2.0 megapixel sensor Up to 30 frames per second. Recommended is the Microsoft LifeCam HD 3000 Webcam. Note that the picture will be printed on your photocard and certificate."
            />
            <ExaminationCard
              heading="4.Contact information"
              text="You are required to supply your contact information which includes telephone, email, residential address, residential city, residential state, postal address, city and state. Note that Telephone number is compulsory since it would be used to contact the candidate should the need arise."
            />
            <ExaminationCard
              heading="5.Selection of preferred examination town"
              text="You are required to select the state and town you wish to write the examination. The exact centre will be automatically assigned to you by the system. Please note that you cannot change your examination town after submission"
            />
            <ExaminationCard
              heading="6.Subject selection"
              text="English Language and Mathematics have been automatically selected for you because they are compulsory. You are required to select the other subjects you wish to register for in this examination. Please note that a minimum of Seven (7) and a maximum of Nine (9) subjects are allowed (English Language and Mathematics inclusive)."
            />
            <ExaminationCard
              heading="7.Declaration"
              text="You are required to select the state and town you wish to write the examination. The exact centre will be automatically assigned to you by the system. Please note that you cannot change your examination town after submission"
            />
            <ExaminationCard
              heading="8.Submitting registration"
              text="Once you have completed the registration form, you are required to click the ACCEPT button after which a preview of your details will be displayed. You are required to review your application at this stage and click the EDIT button if you desire to make any modification. You should click the SAVE button if you want to save your application and still be able to come back and modify it. Note that you can only modify up to 3 times. Click the SUBMIT button if you want to submit your application. NOTE that you will no longer be able to modify your application once you click the SUBMIT button."
            />
            <ExaminationCard
              heading="9.Printing of admission notice/photo card"
              text="On successful completion and submission of your registration form, the system will allocate a centre to you and generate your examination number. You should then print the admission notice/photo card. Note that this document will be required before you are allowed into the examination hall."
            />
          </Box>
        </Container>
      </Layout>
    </>
  );
};

export default WAEC;
