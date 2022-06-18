import React, {useState} from "react";
import Box from "src/components/Box";
import Typography from "src/components/Typography";
// import University from "src/assets/University.png";
// import online from 'src/assets/online.jpg';
import uni1 from "src/assets/uni1.png";
import styled from "styled-components";
import Victor from "src/components/atoms/icons/Victor";
import Heart from "src/components/atoms/icons/Heart";
import Heartempty from "src/components/atoms/icons/Heartempty";
import {useSelector} from "react-redux";
import axios from "axios";

export const ArrowIcon = styled(Box)`
  position: absolute;
  top: 20px;
  right: 20px;

  svg {
    width: 30px !important;
    height: 25px !important;
    cursor: pointer;
  }
`;
const UniversityCard = ({img, text, location, uniId, handleCount, universities,getChildState, univer}) => {
    const userd = useSelector((state) => state.auth.user);

    const [state, setState] = useState({
        isActive: false,
        parentuniversities:universities
    });

    const heartFilled = async () => {
        let tmpIndex = universities.findIndex((el)=>el._id == uniId)
        let newArray = [...universities]
        newArray[tmpIndex].isChecked = false
        getChildState(newArray)
        let tempObj = {
            universityId: uniId,
            userId: userd.id,
        };
        let config = {
            headers: {
                "Content-Type": "application/json",
                "x-api-key": process.env.REACT_APP_AUTH_API_KEY,
                Authorization: `Bearer ${userd?.token}`,
            },
        };
        let respdd = await axios.patch(
            `${process.env.REACT_APP_AUTH_BASE_URL}/remove/favourite/university`,
            tempObj,
            config
        );
        console.log(respdd);
        handleCount()
    };
    const heartEmpty = async () => {
        let tmpIndex = universities.findIndex((el)=>el._id == uniId)
        let newArray = [...universities]
        newArray[tmpIndex].isChecked = true
        getChildState(newArray)
        let tempObj = {
            universityId: uniId,
            userId: userd.id,
        };
        let config = {
            headers: {
                "Content-Type": "application/json",
                "x-api-key": process.env.REACT_APP_AUTH_API_KEY,
                Authorization: `Bearer ${userd?.token}`,
            },
        };
        let respdd = await axios.patch(
            `${process.env.REACT_APP_AUTH_BASE_URL}/add/favourite/university`,
            tempObj,
            config
        );
        console.log(respdd);
        handleCount()
    };
    return (
        <>
            <Box
                width={{_: "auto", tabletL: "34rem", laptop: "40rem"}}
                display="flex"
                position="relative"
                flexWrap={{_: "Wrap", mobileL: "noWrap"}}
                alignItems="center"
                justifyContent={{_: "center", mobileL: "flex-start"}}
                gridGap="1rem"
                backgroundColor="commons.white"
                borderRadius="1.4rem"
                boxShadow=" 0px 4px 65px rgba(96, 119, 94, 0.09)"
                mb="2rem"
            >
                <Box minWidth={{_: "100%", mobileL: "15rem"}}>
                    <img src={img} style={{width: "100%"}}/>
                </Box>
                <Box m="1rem" maxWidth="17.813">
                    <ArrowIcon>
                        {univer.isChecked ? (
                            <Box onClick={() => heartFilled()}>
                                <Heart/>
                            </Box>
                        ) : (
                            <>
                            <Box onClick={() => heartEmpty()}>
                                <Heartempty/>
                            </Box>
                            </>
                        )}
                    </ArrowIcon>
                    <Typography
                        style={{
                            width: "150px",
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                        }}
                        variant="buttonText"
                        mb="1.5rem"
                    >
                        {text}
                    </Typography>
                    <Box color="success.highDark">
                        <Victor/>
                        &nbsp;{location}
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default UniversityCard;
