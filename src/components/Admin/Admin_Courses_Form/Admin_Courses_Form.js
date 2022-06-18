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
import Select from "react-select";
import { useSelector } from "react-redux";
import { university } from "src/assets/university.svg";

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
});

const Admin_Courses_Form = () => {
  const userd = useSelector((state) => state.auth.user);
  const { id } = useParams();
  // var regex = /\d+/g;
  // const id =
  //   params?.pathname?.match(regex) &&
  //   params?.pathname?.match(regex).length &&
  //   params?.pathname?.match(regex)[0]
  //     ? params?.pathname?.match(regex)[0]
  //     : "";
  const [courseEdit, setcourseEdit] = useState({});
  const [universitydata, setuniversitydata] = useState([]);
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
          `${process.env.REACT_APP_AUTH_BASE_URL}/course/${id}`,
          config
        );

        respdd.data.course.university = {
          label: respdd?.data?.course?.university?.name,
          value: respdd?.data?.course?.university?._id,
        };
        setcourseEdit(respdd.data.course);
      })();
    }
  }, [id]);
  useEffect(() => {
    (async () => {
      let config = {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.REACT_APP_AUTH_API_KEY,
          Authorization: `Bearer ${userd?.token}`,
        },
      };
      let resps = await axios.get(
        `${process.env.REACT_APP_AUTH_BASE_URL}/universities`,
        config
      );
      setuniversitydata(resps.data.univerities);
    })();
  }, []);

  const options = universitydata?.map((item) => {
    return { label: item.name, value: item._id };
  });

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
                  university: "",
                }
          }
          validationSchema={LoginSchema}
          enableReinitialize={true}
          onSubmit={async (values) => {
            console.log("gaha", values);
            // same shape as initial values
            values.university = values.university.value;
            let config = {
              headers: {
                "Content-Type": "application/json",
                "x-api-key": process.env.REACT_APP_AUTH_API_KEY,
                Authorization: `Bearer ${userd?.token}`,
              },
            };
            let url = `${process.env.REACT_APP_AUTH_BASE_URL}/createCourse`;
            if (id) url = `${process.env.REACT_APP_AUTH_BASE_URL}/course/${id}`;

            const res = id
              ? await axios.patch(url, values, config)
              : await axios.post(url, values, config);

            console.log(res);
            if (res.status == 200 || res.status == 201) {
              // alert("Course has been added Successfully");

              navigate("/admincourses");
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
            setFieldValue,
          }) => (
            <form onSubmit={handleSubmit}>
              <StyledRegisterContainer
                border="0.0625rem solid #E9E9E9"
                boxShadow="0rem 0.4375rem 1rem rgb(13 73 59 / 4%)"
              >
                <Typography
                  textAlign="center"
                  variant={{ _: "subheader1", tablet: "h2" }}
                >
                  Add New Course
                </Typography>
                <Box
                  display="flex"
                  marginTop="1rem"
                  flexWrap="wrap"
                  flexDirection="column"
                  gridGap="1rem"
                  className="react-sel-option"
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
                    label="description"
                    name="description"
                    value={values.description}
                    error={errors.description}
                  />
                  <label className="cus-label">Universities</label>
                  <Select
                    onChange={(option) => setFieldValue("university", option)}
                    onBlur={handleBlur}
                    options={options}
                    value={values?.university}
                    isValid={touched.university && !errors.university}
                    name="university"
                    label="university"
                    as="select"
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

export default Admin_Courses_Form;
