import React from "react";
import Typography from "src/components/Typography";
import {
  FromTabletL,
  TillTabletL,
  FromTablet,
  TillTablet,
} from "src/hooks/useActiveViewportSize";
import { MAIN_NAV } from "src/config/navigation";
import Box from "src/components/Box";
import NavMenu from "src/components/NavMenu";
import styled from "styled-components";
import Link from "src/components/Link";
import Instagram from "src/components/atoms/icons/Instagram";
import Twitter from "src/components/atoms/icons/Twitter";
import Facebook from "src/components/atoms/icons/Facebook";
import Envelope from "src/components/atoms/icons/Envelope";
import Phone from "src/components/atoms/icons/Phone";
import Logo from "src/assets/Logo.png";
const StyleFooter = styled(Box)`
  z-index: ${({ theme }) => theme.zIndices.nativeHeader};
`;

export const FOOTER_HEIGHT = {
  _: "73px",
  laptopS: "65px",
};

const StyledRectangle = styled(Box)`
  background: #f6f7ff;
  border-radius: 2.1875rem;
  display: flex;
  align-items: center;
  padding: 0.3rem 1rem;
  gap: 1rem;
`;

export default function Footer() {
  return (
    <Box maxWidth="120rem" mx="auto">
      <StyleFooter padding={{ _: "1rem 2rem", laptopS: "3rem 4rem" }}>
        <Box display="flex" flexWrap="wrap" gridGap="1rem">
          <Box flex="0.5">
            <Link href="/">
              <img src={Logo} height="30px" />
            </Link>
          </Box>
          <Box ml="auto">
            <Box
              gridGap={{ _: "1rem", laptopS: "2rem" }}
              display="flex"
              flexWrap="wrap"
            >
              {MAIN_NAV.map((m) => (
                <Link key={m.title} href={m.href}>
                  <Typography variant="link" color="gray.mediumDark">
                    {m.title}
                  </Typography>
                </Link>
              ))}
              <Box display="flex" gridGap="0.1rem">
                <Link href="/">
                  <Typography variant="link" color="gray.mediumDark">
                    Sign In
                  </Typography>
                </Link>
                <Typography color="gray.mediumDark">/</Typography>
                <Link href="/register">
                  <Typography variant="link" color="gray.mediumDark">
                    Register
                  </Typography>
                </Link>
              </Box>
            </Box>
            <Box
              display="flex"
              mt="1rem"
              gridGap="1rem"
              alignItems="center"
              flexWrap="wrap"
              justifyContent="space-between"
            >
              <Box display="flex" gridColumnGap="1rem">
                <Instagram />
                <Twitter />
                <Facebook />
              </Box>
              <StyledRectangle>
                <Envelope />{" "}
                <Typography variant="link" color="gray.highDark">
                  graduate.ate.com
                </Typography>
              </StyledRectangle>
              <StyledRectangle>
                <Phone />{" "}
                <Typography variant="link" color="gray.highDark">
                  423425274157
                </Typography>
              </StyledRectangle>
            </Box>
          </Box>
        </Box>
      </StyleFooter>
    </Box>
  );
}
