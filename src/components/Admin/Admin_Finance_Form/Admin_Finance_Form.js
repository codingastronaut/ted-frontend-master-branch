import React, { useState, useEffect } from "react";
import Typography from "src/components/Typography";
import styled from "styled-components";
import Box from "src/components/Box";
import Input from "src/components/input";
import { Formik } from "formik";
import * as Yup from "yup";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { mediaQuery } from "src/utils/styles";

const StyledRegisterContainer = styled(Box)`
  background: rgba(255, 255, 255, 0.69);
  border-radius: 1.2rem;
  padding: 2rem;
  box-sizing: border-box;
`;
const Button = styled.button`
  padding: 0.3rem 4rem;
  background-color: #1fb690;
  color: white;
  border: 0;
  border-radius: 50px;
  cursor: pointer;
  ${mediaQuery("tabletL")} {
    padding: 1rem 4rem;
  }
`;
const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});

const Admin_Finance_Form = ({ match }) => {
  console.log(match);
  const params = useParams();
  const { id } = useParams();
  console.log(params);
  // var regex = /\d+/g;
  // const id =
  //   params?.pathname?.match(regex) &&
  //   params?.pathname?.match(regex).length &&
  //   params?.pathname?.match(regex)[0]
  //     ? params?.pathname?.match(regex)[0]
  //     : "";
  const [courseEdit, setcourseEdit] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      (async () => {
        let respdd = await axios.get(
          `https://61d6d25f35f71e0017c2e82c.mockapi.io/courses/${id}`
        );
        setcourseEdit(respdd.data);
      })();
    }
  }, [id]);

  return (
    <Box>
      <Box>
        <Formik
          initialValues={
            id
              ? courseEdit
              : {
                  name: "",
                  username: "",
                  email: "",
                }
          }
          validationSchema={LoginSchema}
          enableReinitialize={true}
          onSubmit={async (values) => {
            // same shape as initial values

            let url = "https://61d6d25f35f71e0017c2e82c.mockapi.io/courses";
            if (id)
              url = `https://61d6d25f35f71e0017c2e82c.mockapi.io/courses/${id}`;

            const res = id
              ? await axios.put(url, values)
              : await axios.post(url, values);

            console.log(res);
            if (res.status == 200 || res.status == 201) {
              // alert("Course has been added Successfully");

              navigate("/adminfinance");
            } else {
              alert("Error Found");
            }
          }}
        >
          {({
            errors,
            touched,
            handleSubmit,
            handleChange,
            handleBlur,
            values,
          }) => (
            <form onSubmit={handleSubmit}>
              {console.log(errors)}
              <StyledRegisterContainer
                border="0.0625rem solid #E9E9E9"
                boxShadow="0rem 0.4375rem 1rem rgb(13 73 59 / 4%)"
              >
                <Typography
                  textAlign="center"
                  variant={{ _: "subheader1", tablet: "h2" }}
                >
                  Add New Finance
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
                    value={values.name}
                    isValid={touched.name && !errors.name}
                    label="Name"
                    name="name"
                    error={errors.name}
                  />

                  <Input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.username && !errors.username}
                    label="Username"
                    name="username"
                    value={values.username}
                    error={errors.username}
                  />
                  <Input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.email && !errors.email}
                    label="Email"
                    name="email"
                    value={values.email}
                    error={errors.email}
                  />
                </Box>
                <br></br>
                <Box textAlign="center">
                  <Button type="submit">{id ? "Update" : "Save"}</Button>
                </Box>
              </StyledRegisterContainer>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default Admin_Finance_Form;
