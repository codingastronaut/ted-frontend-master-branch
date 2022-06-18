import { useState, useEffect } from "react";
import Box from "src/components/Box";
import Typography from "src/components/Typography";
import DocumentImage from "src/components/DocumentImage";
// import Delete from "../atoms/icons/Delete";
// import PNG from "src/assets/PNG.png";
// import PDF from "src/assets/PDF.png";
import Close from "src/components/atoms/icons/Close";
import styled from "styled-components";

import Modal from "react-modal";
import { Autoplay } from "swiper";
const ButtonBox1 = styled.button`
  width: 40%;
  height: 40px;
  border: 2px solid #19b690;
  border-radius: 66px;
  background: #19b690;
  color: white;
  fontsize: 1.125rem;
  weight: 500;
`;
const ButtonBox2 = styled.button`
  width: 40%;
  height: 40px;
  border: 2px solid #19b690;
  border-radius: 66px;
  color: #19b690;
  background: #ffff;
  fontsize: 1.125rem;
  weight: 500;
`;
const DocumentUpload = ({ isOpen, setOpen, uploads, setUploads }) => {
  const handleUploadChange = (file, title) => {
    const currentUploads = [...uploads];
    const index = currentUploads.findIndex((f) => f.title === title);
    currentUploads[index].file = file;
    setUploads(currentUploads);
  };

  const handleRemoveUpload = (title) => {
    const currentUploads = [...uploads];
    const index = currentUploads.findIndex((f) => f.title === title);
    currentUploads[index].file = null;
    setUploads(currentUploads);
  };

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
    content: {
      maxWidth: "37rem",
      margin: "auto",
    },
  };

  const handleSave = () => {
    uploads.map((m) => {
      if (m.file) {
        console.log(m.file.name);
      } else {
        console.log("no file");
      }
    });
  };

  return (
    <>
      <Box>
        <Modal
          isOpen={isOpen}
          onRequestClose={() => setOpen(true)}
          style={customStyles}
          shouldCloseOnOverlayClick={false}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h3" color="black.highDark">
              Document Upload
            </Typography>
            <Box className="cursor-pointer" onClick={() => setOpen(false)}>
              <Close color="black.highDark" />
            </Box>
          </Box>

          <Box>
            {uploads.map((m, index) => (
              <DocumentImage
                key={index.toString()}
                title={m.title}
                file={m.file}
                fileType={m.fileType}
                onChange={(file) => handleUploadChange(file, m.title)}
                onDelete={() => handleRemoveUpload(m.title)}
              />
            ))}
          </Box>
          <br></br>
          <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
            width="100%"
            gridGap="10%"
            mb="1rem"
          >
            <ButtonBox1 onClick={handleSave}>Save</ButtonBox1>
            <ButtonBox2 type="button" onClick={() => setOpen(true)}>
              Cancel
            </ButtonBox2>
          </Box>
        </Modal>
      </Box>
    </>
  );
};

export default DocumentUpload;
