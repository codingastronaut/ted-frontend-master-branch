import React, { useState, useEffect } from "react";
import axios from "axios";
import { Formik } from "formik";
import * as Yup from "yup";
import Modal from "react-modal";
import Typography from "src/components/Typography";
import styled from "styled-components";
import Box from "src/components/Box";
import Input from "src/components/input";
import Select, { StylesConfig } from "react-select";
import Close from "src/components/atoms/icons/Close";
import { useSelector } from "react-redux";

const ButtonBox3 = styled.button`
  width: 40%;
  height: 40px;
  border: 2px solid #19b690;
  border-radius: 66px;
  background: #19b690;
  color: white;
  fontsize: 1.125rem;
  weight: 500;
  cursor: pointer;
`;
const ButtonBox4 = styled.button`
  width: 40%;
  height: 40px;
  border: 2px solid #19b690;
  border-radius: 66px;
  color: #19b690;
  background: #ffff;
  fontsize: 1.125rem;
  weight: 500;
  cursor: pointer;
`;
const Errorswrapper = styled(Typography)`
  color: red;
`;

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  content: {
    maxWidth: "37.563rem",
    margin: "auto",
  },
};

const AddChoice = ({ isOpen, setOpen }) => {
  const userd = useSelector((state) => state.auth.user);
  const [universitydata, setuniversitydata] = useState([]);
  const [coursesdata, setcoursesdata] = useState([]);
  const [initailValChoices, setinitailValChoices] = useState({
    universityId: "",
    courseId: "",
    startDate: "",
  });

  const [modalIsOpen, setIsOpen] = useState(false);
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

  useEffect(() => {
    (async () => {
      let config = {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.REACT_APP_AUTH_API_KEY,
          Authorization: `Bearer ${userd?.token}`,
        },
      };
      let respsCorse = await axios.get(
        `${process.env.REACT_APP_AUTH_BASE_URL}/courses?`,
        config
      );
      setcoursesdata(respsCorse.data.courses);
    })();
  }, []);

  const optionsUni = universitydata?.map((item) => {
    return { label: item.name, value: item._id };
  });
  const optionsCourse = coursesdata?.map((itemcouse) => {
    return { label: itemcouse.name, value: itemcouse._id };
  });
  // const openModal = () => {
  //   setIsOpen(true);
  // };

  const closeModal = () => {
    setIsOpen(false);
  };

  const clearApp = (values, setValues) => {
    setinitailValChoices({
      universityId: "",
      courseId: "",
      startDate: "",
    });

    setValues({
      ...values,
      ...{
        universityId: "",
        courseId: "",
        startDate: "",
      },
    });
  };
  return (
    <>
      {/* start modal  */}
      <Box>
        <Modal
          isOpen={isOpen}
          onRequestClose={() => setOpen(false)}
          style={customStyles}
          shouldCloseOnOverlayClick={false}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb="2rem"
          >
            <Typography variant="h3" color="black.highDark">
              Add Choice
            </Typography>
            <Box className="cursor-pointer" onClick={() => setOpen(false)}>
              <Close color="black.highDark" />
            </Box>
          </Box>
          <Box>
            <Formik
              initialValues={initailValChoices}
              //validationSchema={AddChoiceSchema}
              onSubmit={async (values) => {
                let config = {
                  headers: {
                    "Content-Type": "application/json",
                    "x-api-key": process.env.REACT_APP_AUTH_API_KEY,
                    Authorization: `Bearer ${userd?.token}`,
                  },
                };

                const res = await axios.post(
                  `${process.env.REACT_APP_AUTH_BASE_URL}/createApplication`,
                  {
                    universityId: [values.universityId.value],
                    courseId: values.courseId.value,
                    userId: userd.id,
                    startDate: values.startDate,
                  },
                  config
                );
              }}
            >
              {({
                errors,
                touched,
                handleSubmit,
                handleChange,
                handleBlur,
                setFieldValue,
                values,
                setValues,
              }) => (
                <form onSubmit={handleSubmit}>
                  <Box>
                    <label className="cus-label">University/college name</label>
                    <Select
                      onChange={(option) =>
                        setFieldValue("universityId", option)
                      }
                      onBlur={handleBlur}
                      options={optionsUni}
                      isValid={touched.universityId && !errors.universityId}
                      name="universityId"
                      label="University/college name"
                      as="select"
                      variant="plain"
                      placeholder="Search for institute"
                    />
                  </Box>
                  <Box>
                    <label className="cus-label">Course</label>
                    <Select
                      onChange={(option) => setFieldValue("courseId", option)}
                      onBlur={handleBlur}
                      options={optionsCourse}
                      isValid={touched.courseId && !errors.courseId}
                      name="courseId"
                      label="Course"
                      as="select"
                      variant="plain"
                      placeholder="Search for course"
                    />
                  </Box>

                  <Box>
                    <Input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.startDate && !errors.startDate}
                      value={values.startDate}
                      name="startDate"
                      label="startDate"
                      type="date"
                      placeholder=""
                    />
                  </Box>
                  <Box
                    color="#19B690"
                    mt="2rem"
                    mb="2rem"
                    onClick={() => clearApp(values, setValues)}
                  >
                    + Add More Choice
                  </Box>
                  <br></br>
                  <Box
                    display="flex"
                    flexWrap="wrap"
                    justifyContent="center"
                    alignItems="center"
                    width="100%"
                    gridGap="10%"
                  >
                    <ButtonBox3 type="submit">Save</ButtonBox3>
                    <ButtonBox4 type="button" onClick={() => setOpen(false)}>
                      Cancel
                    </ButtonBox4>
                  </Box>
                </form>
              )}
            </Formik>
          </Box>
        </Modal>
      </Box>
      {/* end modal  */}
    </>
  );
};
const AddChoiceSchema = Yup.object({
  universityId: Yup.string().required("*University Name is required"),
  courseId: Yup.string().required("*Course is required"),
  startDate: Yup.string().required("*Date is required"),
});
export default AddChoice;
