import Box from "src/components/Box";
import React from "react";
import Typography from "src/components/Typography";
import styled from "styled-components";
const StyleUlist = styled.ul`
  list-style: none;
  margin-top: 1.5rem;
  list-style-position: outside;
`;
const Stylelist = styled.li`
  padding: 0.3rem 0rem;
`;
const  lists =({ data })=> {
  return (
    <>
      <StyleUlist>
        {data &&
          data.length &&
          data.map((item, index) => (
            <Stylelist key={item}>
              <Typography textAlign-="justify" variant="body1">
                <Box display="inline" color="success.highDark">
                  {index + 1}
                  {". "}
                </Box>
                <Typography as="span" dangerouslySetInnerHTML={{__html: item}} />
              </Typography>
            </Stylelist>
          ))}
      </StyleUlist>
    </>
  );
}
export default lists;
