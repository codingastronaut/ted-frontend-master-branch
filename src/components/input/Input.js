import { useState } from "react";
import Check from "src/components/atoms/icons/Check";
import Eyeoff from "src/components/atoms/icons/Eyeoff";
import Eyeon from "src/components/atoms/icons/Eyeon";
import styled from "styled-components";
import Box from "src/components/Box";
import Typography from "src/components/Typography";
import Select, { StylesConfig } from "react-select";
// import { width } from "styled-system";
const PASSWORD_TYPE = "password";
const TEXT_TYPE = "text";

export const StyledInputContainer = styled(Box)`
  padding: 1rem;
  padding-right: 3rem;
  // width: auto;
  width: ${(props) => props.width || "auto"};
  background: #ffffff;
  border: 0.125rem solid #edf0f8;
  boxsizing: border-box;
  border-radius: 0.5rem;
  position: relative;
`;

const StyledSelect = styled(Select)`
  height: 3rem;
`;

const StyledInput = styled.input`
  border: 1px solid lightgrey !important;
  padding: 1rem 0.7rem;
`;

const StyledIcon = styled.span`
  svg {
    fill: none;
  }
  position: absolute;
  top: 30%;
  right: 1rem;
`;

const Input = ({
  width,
  label,
  type,
  as = "input",
  variant = "styled",
  isValid = undefined,
  ...rest
}) => {
  const [inputType, setInputType] = useState(type || TEXT_TYPE);

  const handelShowPasswordIconClick = () => {
    setInputType(TEXT_TYPE);
  };

  const handleHidePasswordIconClick = () => {
    setInputType(PASSWORD_TYPE);
  };

  const renderEyeIcon = () => {
    if (type !== PASSWORD_TYPE) return null;
    if (inputType === PASSWORD_TYPE) {
      return (
        <span onClick={handelShowPasswordIconClick}>
          <Eyeon />
        </span>
      );
    } else {
      return (
        <span onClick={handleHidePasswordIconClick}>
          <Eyeoff />
        </span>
      );
    }
  };

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const customStyles = {
    control: (base) => ({
      ...base,
      minHeight: 55,
    }),
  };

  return (
    <>
      {variant === "plain" ? (
        <Box mb="1rem">
          <Typography
            htmlFor={label}
            variant="body3"
            color="text.noActive"
            fontWeight="700"
            mb="0.4rem"
          >
            {label}
          </Typography>
          {as === "select" && (
            <StyledSelect
              id={label}
              styles={customStyles}
              placeholder={rest.placeholder}
              options={options}
              name={"sdf"}
            />
          )}
        </Box>
      ) : (
        <>
          {type === "date" ? (
            <Box>
              <Typography
                htmlFor={label}
                variant="body3"
                color="text.noActive"
                fontWeight="700"
              >
                {label}
              </Typography>
              <StyledInput
                {...rest}
                id={label}
                type={inputType}
                style={{
                  outline: "none",
                  border: "none",
                  marginTop: "0.4rem",
                  width: "-webkit-fill-available",
                }}
              />
            </Box>
          ) : (
            <>
              <StyledInputContainer width={width}>
                <label>
                  <Typography
                    variant="body3"
                    color="text.noActive"
                    fontWeight="700"
                  >
                    {label}
                  </Typography>
                </label>
                <input
                  {...rest}
                  type={inputType}
                  style={{
                    outline: "none",
                    border: "none",
                    marginTop: "0.4rem",
                    width: "-webkit-fill-available",
                  }}
                />
                <StyledIcon>
                  {isValid && <Check />}
                  {renderEyeIcon()}
                </StyledIcon>
              </StyledInputContainer>
              {rest.error && (
                <Typography color="red.default" variant="body4">
                  {rest.error}
                </Typography>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default Input;
