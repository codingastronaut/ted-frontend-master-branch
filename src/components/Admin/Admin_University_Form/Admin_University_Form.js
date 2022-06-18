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
import { useSelector } from "react-redux";

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
  name: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
});

const Admin_University_Form = ({ match }) => {
  const userd = useSelector((state) => state.auth.user);
  const { id } = useParams();

  const [courseEdit, setcourseEdit] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      (async () => {
        let config = {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.REACT_APP_AUTH_API_KEY,
            Authorization: `Bearer ${userd?.token}`,
          },
        };
        let respdd = await axios.get(
          `${process.env.REACT_APP_AUTH_BASE_URL}/university/${id}`,
          config
        );
        console.log(respdd.data.university);
        setcourseEdit(respdd.data.university);
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
                  description: "",
                }
          }
          validationSchema={LoginSchema}
          enableReinitialize={true}
          onSubmit={async (values) => {
            // same shape as initial values
            let config = {
              headers: {
                "Content-Type": "application/json",
                "x-api-key": process.env.REACT_APP_AUTH_API_KEY,
                Authorization: `Bearer ${userd?.token}`,
              },
            };

            let url = `${process.env.REACT_APP_AUTH_BASE_URL}/createUniversity`;
            if (id)
              url = `${process.env.REACT_APP_AUTH_BASE_URL}/university/${id}`;

            const res = id
              ? await axios.patch(url, values, config)
              : await axios.post(url, values, config);

            console.log(res);
            if (res.status == 200 || res.status == 201) {
              // alert("Course has been added Successfully");

              navigate("/adminuniversity");
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
                  Add New University
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
                    isValid={touched.description && !errors.description}
                    label="Description"
                    name="description"
                    value={values.description}
                    error={errors.description}
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

export default Admin_University_Form;
