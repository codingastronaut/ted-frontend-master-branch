import React, { useState } from "react";
import Box from "src/components/Box";
import Typography from "src/components/Typography";
import Arrowright from "src/components/atoms/icons/Arrowright";
// import Export from "src/components/atoms/icons/Export";
import DocumentUpload from "src/components/DocumentUpload";
import AddSquare from "src/components/atoms/icons/AddSquare";
import AddChoice from "src/components/AddChoice";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Sliderimg from "../Sliderimg/Sliderimg";
// import pdf2 from "src/assets/pdf2.png";
// import Export from "src/components/atoms/icons/Export";
import { width } from "styled-system";
SwiperCore.use([Autoplay, Pagination, Navigation]);
const PortalCard = ({
  heading,
  text,
  btn,
  progress,
  text1,
  canUpload,
  canCreateNewApplication,
}) => {
  const [isUploadDocumentModalOpen, setUploadDocumentModalOpen] =
    useState(false);
  const [isApplicationModalOpen, setApplicationModalOpen] = useState(false);
  const [uploads, setUploads] = useState([
    {
      title: "A-Level",
      file: null,
      fileType: "pdf",
    },
    {
      title: "Passport photo",
      file: null,
      fileType: "png",
    },
    {
      title: "Passport copy",
      file: null,
      fileType: "png",
    },
    {
      title: "Bachelor",
      file: null,
      fileType: "pdf",
    },
    {
      title: "WAEC",
      file: null,
      fileType: "pdf",
    },
    {
      title: "Additional Uploads",
      file: null,
      fileType: "pdf",
    },
    {
      title: "Persnol statment",
      file: null,
      fileType: "pdf",
    },
    {
      title: "JAMB",
      file: null,
      fileType: "png",
    },
    {
      title: "NECO",
      file: null,
      fileType: "pdf",
    },
  ]);
  return (
    <>
      <Box
        flex="1"
        backgroundColor="#FFFFFF"
        border="1px solid #E9E9E9"
        maxWidth={{ _: "100%", laptopS: "30rem" }}
        minWidth={{ _: "auto", laptopS: "13rem" }}
        overflow="hidden"
        display="flex"
        flexWrap="wrap"
        borderRadius="1.25rem"
        boxShadow="0px 4px 65px rgba(96, 119, 94, 0.09)"
        width={{ tabletL: "50%", laptopS: "auto" }}
      >
        <Box
          padding={{
            _: "0.7rem 0.7rem",
            laptop: "1rem",
            desktop: "2rem",
            mobile: "1.3rem",
          }}
          flexGrow="1"
        >
          <Typography variant="subheader1">{heading}</Typography>
          <Box display="flex" gridGap="0.625rem" mt="0.7rem">
            <Typography variant="caption2">{text}</Typography>
            <Arrowright />
          </Box>
          <Box marginTop="3rem">
            {canCreateNewApplication && (
              <Box
                mt="1rem"
                className="cursor-pointer"
                display="flex"
                alignItems="center"
                onClick={() => setApplicationModalOpen(true)}
              >
                <AddSquare />
                <Typography ml="0.3rem" color="success.highDark">
                  New Application
                </Typography>
              </Box>
            )}
            {!canCreateNewApplication && btn}
            {canUpload && (
              <Box
                mt="1rem"
                display="flex"
                overflowX="auto"
                className="cursor-pointer"
                maxWidth={{
                  _: "18rem",
                  mobil: "100%",
                  mobileM: "100%",
                  mobileL: "100%",
                  tablet: "19rem",
                  tabletL: "18rem",
                  laptopS: "18rem",
                }}
              >
                <Swiper slidesPerView={1.3}>
                  {uploads.map((m, index) => (
                    <SwiperSlide>
                      <Box>
                        <Sliderimg
                          key={index.toString()}
                          title={m.title}
                          onClick={() => setUploadDocumentModalOpen(true)}
                          file={m.file}
                          fileType={m.fileType}
                        />
                      </Box>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Box>
            )}
          </Box>
          <Box>
            <Box
              display="flex"
              justifyContent="center"
              alignItem="center"
              margin="1rem"
            >
              <Typography variant="h3" color="success.highDark">
                {text1}
              </Typography>
            </Box>
            {progress}
          </Box>
        </Box>
      </Box>
      {uploads && setUploads && (
        <DocumentUpload
          uploads={uploads}
          setUploads={setUploads}
          isOpen={isUploadDocumentModalOpen}
          setOpen={setUploadDocumentModalOpen}
        />
      )}
      <AddChoice
        isOpen={isApplicationModalOpen}
        setOpen={setApplicationModalOpen}
      />
    </>
  );
};

export default PortalCard;
