import React from "react";
import Typography from "src/components/Typography";
import styled from "styled-components";

const StyleUlist = styled.ul`
  list-style: none;
  margin-top: 0.5rem;
  list-style-position: outside;
`;
const Stylelist = styled.li`
  padding: 0.2rem 0rem;
`;




const Simple_List = ({ data }) => {
  return (
    <>
      <StyleUlist>
        {data.map(item => (
            <Stylelist>
              <Typography textAlign-="justify" variant="body1">
                <Typography as="span" dangerouslySetInnerHTML={{__html: item}} />
              </Typography>
            </Stylelist>
          ))}
      </StyleUlist>
    </>
  );
};

export default Simple_List;
