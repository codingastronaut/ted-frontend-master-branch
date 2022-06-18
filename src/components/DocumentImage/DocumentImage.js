import React, { useState, useEffect, useRef } from "react";
import Box from "src/components/Box";
import Typography from "src/components/Typography";
import PNG from "src/assets/PNG.png";
import PDF from "src/assets/PDF.png";
import Delete from "../atoms/icons/Delete";
import styled from "styled-components";
import { useSelector } from "react-redux";
import axios from "axios";

const StyledInputContainer = styled(Box)`
  ${({ theme }) =>
    theme &&
    `
    border: 1px dashed ${theme.colors.success.highDark};
    `}
  border-radius: 0.4375rem;
  min-height: 3.625rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-top: 1rem;
`;

const DocumentImage = ({ title, file, fileType, onChange, onDelete }) => {
  const userd = useSelector((state) => state.auth.user);
  const inputRef = useRef(null);
  const handleUploadClick = () => {
    inputRef && inputRef.current.click();
  };
  const handleFileChange = (e) => {
    let file = e.target.files[0];
    // let fileType = e.target.accept;
    // let result = file.name.includes(fileType);
    // console.log("result ::", result);

    // console.log("accept", e.target.accept);
    // console.log("file", file);

    if (onChange) {
      onChange(e.target.files[0]);
      (async () => {
        let tempData = new FormData();
        tempData.append("file", file);
        tempData.append("type", fileType);
        tempData.append("userId", userd.id);
        // let documentsdata = {
        //   file: file,
        //   type: fileType,
        //   userId: userd.id,
        // };
        let config = {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.REACT_APP_AUTH_API_KEY,
            Authorization: `Bearer ${userd?.token}`,
          },
        };
        let resps = await axios.post(
          `${process.env.REACT_APP_AUTH_BASE_URL}/upload/documents`,
          tempData,
          config
        );
        console.log("file::", file);
        console.log("type::", fileType);
        console.log(userd.id);
      })();
    }
  };

  const getFileExtension = (fileName) => {
    return fileName.split(".").pop();
  };
  const getFileImage = (fileType) => {
    if (!fileType) {
      return null;
    }
    let source = null;
    switch (fileType.toLowerCase()) {
      case "png":
      case "jpeg":
      case "jpg":
        source = file ? URL.createObjectURL(file) : null;
        break;
      case "pdf":
        source = PDF;
        break;
    }
    return <img style={{ maxWidth: "70px", maxHeight: "80px" }} src={source} />;
  };
  const getDateTime = (dateTime) => {
    if (!dateTime) {
      return null;
    }
    return `${new Date(dateTime).toDateString()} at ${new Date(
      dateTime
    ).toLocaleTimeString()}`;
  };
  const getSize = (size) => {
    if (!size) {
      return null;
    }
    return `${(size / 1000000).toFixed("2")} Mb`;
  };

  return (
    <>
      {file && (
        <Box my="2rem">
          <Typography variant="body3" color="black.highDark">
            {title}
          </Typography>

          <Box
            mt="2rem"
            display="flex"
            gridGap="1rem"
            justifyContent="space-between"
            flexWrap="wrap"
          >
            <Box>{getFileImage(getFileExtension(file.name))}</Box>
            <Box mr="auto" pl="2rem">
              <Typography variant="subheader1" color="black.highDark">
                {file.name}
              </Typography>
              <Typography>
                {getDateTime(file.lastModified)} / {getSize(file.size)}
              </Typography>
            </Box>
            <Box
              className="cursor-pointer"
              display="flex"
              justifyContent="center"
              alignItem="center"
              onClick={onDelete}
            >
              <Delete />
            </Box>
          </Box>
        </Box>
      )}
      {!file && (
        <Box my="2rem">
          <Typography variant="body3" color="black.highDark">
            {title}
          </Typography>
          <input
            type="file"
            onChange={handleFileChange}
            ref={inputRef}
            accept=".pdf, .png"
            style={{ display: "none" }}
          />
          <StyledInputContainer onClick={handleUploadClick}>
            <Typography color="success.highDark">+ Upload</Typography>
          </StyledInputContainer>
        </Box>
      )}
    </>
  );
};
export default DocumentImage;
