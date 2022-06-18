import Button from "src/components/button";
import Input from "src/components/input";
import lady from "src/assets/lady.svg";
import Box from "src/components/Box";
import { FromTabletL } from "src/hooks/useActiveViewportSize";
import styled from "styled-components";
import Typography from "src/components/Typography";
import { Formik } from "formik";
import * as Yup from "yup";
import Layout, { VARIANTS } from "src/components/layout";
import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const StyledRegisterContainer = styled(Box)`
  background: rgba(255, 255, 255, 0.69);
  border-radius: 1.2rem;
  padding: 2rem;
  box-sizing: border-box;
`;
const ValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  NewPassword: Yup.string()
    .required("Required")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(
      /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]/,
      "Password must include one upper case, and at least one number."
    ),
});

const Resetpassword = () => {
  const navigate = useNavigate();
  return (
    <>
      <Layout variant={VARIANTS.DEFAULT}>
        <ToastContainer />
        <Box>
          <Box
            display="flex"
            alignItems="center"
            minHeight={{ laptopS: "calc(100vh - 3.9rem)" }}
            gridColumnGap={{ tabletL: "5rem" }}
            mt="2rem"
            mx="auto"
            flex="1"
            justifyContent="center"
          >
            <Box>
              <Formik
                initialValues={{
                  NewPassword: "",
                  email: "",
                  VerificationCode: "",
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
                    `${process.env.REACT_APP_AUTH_BASE_URL}/confirmNewPassword`,
                    {
                      email: values.email,
                      VerificationCode: values.VerificationCode,
                      NewPassword: values.NewPassword,
                    },
                    config
                  );
                  console.log(res);
                  if (res.data.statusCode == 400) {
                    toast.error(res.data.body.error);
                  } else {
                    toast.success(res.data.body.message);
                    setTimeout(() => {
                      navigate("/login");
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
                    <StyledRegisterContainer
                      border="0.0625rem solid #E9E9E9"
                      boxShadow="0rem 0.4375rem 1rem rgb(13 73 59 / 4%)"
                      minWidth={{ _: "auto", mobileL: "30rem" }}
                    >
                      <Typography textAlign="center" variant="h2">
                        Reset Password
                      </Typography>
                      <Box
                        display="flex"
                        marginTop="1rem"
                        flexWrap="wrap"
                        flexDirection="column"
                        gridGap="1rem"
                      >
                        <Input
                          onChange={handleChange}
                          onBlur={handleBlur}
                          label="Email"
                          type="email"
                          name="email"
                          error={errors.email}
                        />

                        <Input
                          onChange={handleChange}
                          onBlur={handleBlur}
                          label="Verification Code"
                          name="VerificationCode"
                        />
                        <Input
                          onChange={handleChange}
                          onBlur={handleBlur}
                          label="New Password"
                          type="password"
                          name="NewPassword"
                          error={errors.NewPassword}
                        />
                      </Box>
                      <br></br>
                      <Box textAlign="center">
                        <Button type="submit">Reset Password</Button>
                      </Box>
                    </StyledRegisterContainer>
                  </form>
                )}
              </Formik>
            </Box>
            <FromTabletL>
              <Box>
                <img
                  src={lady}
                  style={{ maxHeight: "24.5rem", maxWidth: "29.1875rem" }}
                  alt="Register"
                />
              </Box>
            </FromTabletL>
          </Box>
        </Box>
      </Layout>
    </>
  );
};

export default Resetpassword;
