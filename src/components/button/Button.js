import styled from "styled-components";
import Typography from "src/components/Typography";

const SIZES = {
  MD: "md",
  LG: "lg",
  SM: "sm",
};

const SHAPES = {
  CIRCLE: "circle",
  RECTANGLE: "rectangle",
};

const StyledButton = styled.button`
  background: ${({ theme }) => theme.colors.success.highDark};
  border: none;
  padding: 1rem 4.0625rem;
  color: #ffffff;
  box-shadow: 0px 19px 44px -9px rgba(86, 189, 137, 0.47);
  border-radius: 4.125rem;
  ${({ size }) =>
    size === SIZES.MD &&
    `
    padding: 0.5rem 1rem;
    p {
      text-overflow: ellipsis;
      overflow: hidden;
  }
  `}
  ${({ shape, theme }) =>
    shape === SHAPES.RECTANGLE &&
    `
    width: 12rem;
    border-radius: 0.3125rem;
  `}
  cursor: pointer;
`;

const Button = ({
  type = "button",
  size = "lg",
  shape = "circle",
  color = "text.highLight",
  fontVariant = "buttonText",
  children,
}) => {
  return (
    <StyledButton type={type} size={size} shape={shape}>
      <Typography variant={fontVariant} color={color}>
        {children}
      </Typography>
    </StyledButton>
  );
};

export default Button;
