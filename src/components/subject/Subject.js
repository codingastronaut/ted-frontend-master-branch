import styled from "styled-components";
import React, { useState, useEffect } from "react";
import Typography from "src/components/Typography";
import Box from "src/components/Box";
import axios from 'axios';


const Subject = () => {
    const [subject, setSubject] = useState([]);
    useEffect(()=>{
        const getSubjectInfo = async () =>{
            let resp = await axios.get(`https://61bc64aad8542f0017824709.mockapi.io/courses`);
            setSubject(resp.data);
        }
        getSubjectInfo();

    }, []);


    return (
        <Box
        width="100%"
        padding="20px 15px"
        >
            {subject.map(Subjectlist =>
         <Box borderBottom="1px solid #C0C3C7" mb=".5rem">
           <Typography variant="body2">{Subjectlist.title}</Typography>
           <Typography variant="caption2" color="gray.mediumDark" mb="1rem">
             {Subjectlist.description}
           </Typography>
         </Box>
         )}
        
       </Box>
    );
}

export default Subject;