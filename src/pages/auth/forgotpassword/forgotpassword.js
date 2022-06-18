import Button from "src/components/button";
import Input from "src/components/input";
import lady from "src/assets/lady.svg";
import Box from "src/components/Box";
import { FromTablet } from "src/hooks/useActiveViewportSize";
import styled from "styled-components";
import Typography from "src/components/Typography";
import Link from "src/components/Link";
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Layout, { VARIANTS } from "src/components/layout";
import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const StyledPageContainer = styled(Box)`
  background-repeat: no-repeat;
  min-height: calc(100vh - 4rem);
  background-size: cover;
`;
const StyledLoginContainer = styled(Box)`
  background: rgba(255, 255, 255, 0.69);
  border-radius: 1.2rem;
  box-sizing: border-box;
`;

const ValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});

const Forgotpassword = () => {
  const navigate = useNavigate();
  return (
    <>
      <Layout variant={VARIANTS.DEFAULT}>
        <ToastContainer />
        <StyledPageContainer display="flex" alignItems="center">
          <Box
            display="flex"
            flex="1"
            alignItems="center"
            gridColumnGap={{ tabletL: "5rem" }}
            minHeight={{ laptopS: "calc(100vh - 3.9rem)" }}
            mt="2rem"
            mx="auto"
            justifyContent="center"
          >
            <Box minWidth={{ laptop: "30rem" }}>
              <Formik
                initialValues={{
                  email: "",
                }}
                validationSchema={ValidationSchema}
                onSubmit={async (values) => {
                  console.log(values);

                  let config = {
                    headers: {
                      "Content-Type": "application/json",
                      "x-api-key": process.env.REACT_APP_AUTH_API_KEY,
                    },
                  };

                  const res = await axios.post(
                    `${process.env.REACT_APP_AUTH_BASE_URL}/forgotPassword`,
                    {
                      email: values.email,
                    },
                    config
                  );
                  console.log(res);
                  if (res.data.statusCode == 400) {
                    toast.error(res.data.body.error);
                  } else {
                    toast.success(
                      "Please check your email and confirm the confirmation code"
                    );
                    setTimeout(() => {
                      navigate("/resetpassword");
                    }, 2000);
                  }
                }}
              >
                {({
                  errors,
                  touched,
                  handleSubmit,
                  handleChange,
                  handleBlur,
                }) => (
                  <form onSubmit={handleSubmit}>
                    {console.log(errors)}
                    <StyledLoginContainer
                      maxWidth="33.375rem"
                      border="0.0625rem solid #E9E9E9"
                      padding={{ _: "1rem", mobileL: "2rem" }}
                      boxShadow="0rem 0.4375rem 1rem rgb(13 73 59 / 4%)"
                      width="399rem"
                    >
                      <Typography textAlign="center" mb="3rem" variant="h2">
                        Forgot Password
                      </Typography>
                      <Box my="1rem" mb="1rem">
                        <Input
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isValid={touched.email && !errors.email}
                          label="Email Address"
                          name="email"
                          error={errors.email}
                        />
                      </Box>
                      <br></br>
                      <Box textAlign="center">
                        <Button type="submit">Send</Button>
                      </Box>
                      <Box textAlign="center">
                        <Box
                          display="flex"
                          marginTop="1.8rem"
                          justifyContent="center"
                          marginBottom="1rem"
                        >
                          <Typography
                            textAlign="center"
                            color="text.highDark"
                            variant="link2"
                          >
                            No Account?&nbsp;{" "}
                          </Typography>
                          <Link href="/Register">
                            <Typography
                              variant="link2"
                              color="success.highDark"
                            >
                              Register Company
                            </Typography>
                          </Link>
                        </Box>
                      </Box>
                    </StyledLoginContainer>
                  </form>
                )}
              </Formik>
            </Box>
            <FromTablet>
              <Box display="flex" justifyContent="center">
                <img
                  src={lady}
                  style={{ maxHeight: "24.5rem", maxWidth: "29.1875rem" }}
                  alt="Login"
                />
              </Box>
            </FromTablet>
          </Box>
        </StyledPageContainer>
      </Layout>
    </>
  );
};

export default Forgotpassword;
