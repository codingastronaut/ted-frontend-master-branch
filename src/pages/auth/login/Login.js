import Button from "src/components/button";
import Input from "src/components/input";
import lady from "src/assets/lady.svg";
import Box from "src/components/Box";
import { FromTablet } from "src/hooks/useActiveViewportSize";
import styled from "styled-components";
import Typography from "src/components/Typography";
import Link from "src/components/Link";
// import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Layout, { VARIANTS } from "src/components/layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../../store/auth/authSlice";
import APP_URLS from "src/constants/APP_URLS";
import * as LocalStorage from "src/utils/localStorage.util";

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

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("Required")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(
      /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]/,
      "Password must include one upper case, and at least one number."
    ),
});

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <Layout variant={VARIANTS.DEFAULT}>
        <ToastContainer />
        <StyledPageContainer display="flex" alignItems="center">
          <Box
            display="flex "
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
                  password: "",
                }}
                validationSchema={LoginSchema}
                onSubmit={async (values) => {
                  // same shape as initial values
                  console.log(values);
                  let config = {
                    headers: {
                      "Content-Type": "application/json",
                      "x-api-key": process.env.REACT_APP_AUTH_API_KEY,
                    },
                  };

                  const res = await axios.post(
                    `${process.env.REACT_APP_AUTH_BASE_URL}/login`,
                    {
                      email: values.email,
                      password: values.password,
                    },
                    config
                  );
                  console.log(res);

                  if (res.data.status == 400) {
                    toast.error(res.data.error);
                  } else {
                    toast.success(res.data.message);
                    //LocalStorage.setUserToken(res.data.token);

                    // res.data.role = "admin";
                    LocalStorage.setUserData({
                      ...res.data.result.accessToken.payload,
                      token: res.data.token,
                      id: res.data.id,
                      role: res.data.role,
                    });

                    dispatch(
                      setUser({
                        ...res.data.result.accessToken.payload,
                        token: res.data.token,
                        id: res.data.id,
                        role: res.data.role,
                      })
                    );
                    setTimeout(() => {
                      navigate("/dashboard");
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
                    >
                      <Typography textAlign="center" variant="h2">
                        Sign In
                      </Typography>
                      <Box my="1rem">
                        <Input
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isValid={touched.email && !errors.email}
                          label="Email Address"
                          name="email"
                          error={errors.email}
                        />
                      </Box>
                      <Input
                        onChange={handleChange}
                        label="Password"
                        name="password"
                        type="password"
                        error={errors.password}
                      />
                      <br></br>
                      <Box textAlign="center">
                        <Button type="submit">Next Step</Button>
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
                        <Box
                          display="flex"
                          justifyContent="center"
                          marginBottom="1rem"
                        >
                          <Typography variant="link2" color="text.highDark">
                            Forgot Password?&nbsp;{" "}
                          </Typography>
                          <Link href="/forgotpassword">
                            <Typography
                              variant="link2"
                              color="success.highDark"
                            >
                              Reset
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

export default Login;
