import { ReactElement, ReactNode } from "react";
import styled from "styled-components";

import { colorVariant } from "src/utils/styles";

import Link from "src/components/Link";
import Typography, { Variant as TextVariant } from "src/components/Typography";

type NavItemProps = {
  title: ReactNode;
  href: string;
  color: string;
  variant: "primary" | "secondary" | "tertiary";
  textVariant?: TextVariant;
};

const NavItemWrapper = styled.span<Pick<NavItemProps, "variant" | "color">>`
  position: relative;
  &:hover::after {
    content: "";
    position: absolute;
    left: calc(50% - 0.4375rem);
    bottom: -0.5rem;
    width: 1.4375rem;
    height: ${({ theme }) => theme.space["3xs"]};
    border-radius: ${({ theme }) => theme.space["2xs"]};

    ${({ variant, color, theme }) => {
      if (variant === "primary") {
        return `background-color: ${theme.colors.success.highDark}`;
      }

      if (variant === "secondary") {
        return `background-color: ${colorVariant({ color, theme })}`;
      }

      return "display: none";
    }}
  }

  a:hover {
    ${({ variant, theme }) => {
      if (variant === "tertiary") {
        return "text-decoration: underline !important";
      }
      if (variant === "primary") {
        return `
                span {
                    color: ${theme.colors.success.highDark} !important
                }
            `;
      }
    }}
  }
`;

const NavItem = ({
  title,
  href,
  color = "text.Black",
  variant = "primary",
  textVariant = "link",
}: NavItemProps): ReactElement => (
  <NavItemWrapper data-cy={`nav-${title}`} variant={variant} color={color}>
    <Link href={href}>
      <Typography variant={textVariant} color={color}>
        {title}
      </Typography>
    </Link>
  </NavItemWrapper>
);

export default NavItem;
