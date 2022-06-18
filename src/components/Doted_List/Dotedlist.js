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

  //
`;

// const StyleOList = styled.ol`
// color: ${({theme}) => theme.colors.success.highDark};
// `;

const ListItemIndicator = styled.div`
  display: inline-block;
  width: 0.375rem;
  height: 0.375rem;
  margin-right: 0.375rem;
  background: ${({ theme }) => theme.colors.success.highDark};
  border-radius: 100%;
  margin-bottom: 0.133rem;
`;
const ListItemIndicatorTwo = styled.div`
  display: inline-block;
  width: 0.375rem;
  height: 0.375rem;
  margin-right: 0.375rem;
  background: #5956F6;
  border-radius: 100%;
  margin-bottom: 0.133rem;
`;


const FeeList = ({ data, isOrdered, isColor }) => {
  return (
    <>
      <StyleUlist>
        {data &&
          data.length &&
          data.map((item, index) => (
            <Stylelist key={item}>
              <Typography textAlign-="justify" variant="body1">
                <Typography as="span" mr="0.375rem" color="success.highDark">
                  {!isColor ? isOrdered ? index + 1 : <ListItemIndicator /> : <ListItemIndicatorTwo/>}
                </Typography>
                <Typography as="span" dangerouslySetInnerHTML={{__html: item}} />
              </Typography>
            </Stylelist>
          ))}
      </StyleUlist>
    </>
  );
};

export default FeeList;
