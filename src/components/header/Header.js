import React, { useState } from "react";
import Typography from "src/components/Typography";
import { FromTabletL, TillTabletL } from "src/hooks/useActiveViewportSize";
import { MAIN_NAV } from "src/config/navigation";
import Box from "src/components/Box";
import NavMenu from "src/components/NavMenu";
import styled from "styled-components";
import Link from "src/components/Link";
import Hamburger from "src/components/atoms/icons/Hamburger";
import Exit from "src/components/atoms/icons/Exit";
import Close from "src/components/atoms/icons/Close";
import SearchInput from "src/components/SearchInput/SearchInput";
import Logo from "src/assets/Logo.png";
import manelpse from "src/assets/manelpse.png";
import NavItem from "src/components/NavItem";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSlice } from "src/store/auth/authSlice";

const StyledHeader = styled(Box)`
  z-index: ${({ theme }) => theme.zIndices.nativeHeader};
`;

export const HEADER_HEIGHT = {
  _: "73px",
  laptopS: "4.0625rem ",
};
const StyledHeader2 = styled.div`
  height: auto;
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  background-color: gray;
  text-align: left;
  padding-left: 1rem;
  z-index: 1;
  padding-top: 1rem;
  font-size: 1.27rem;
  line-height: 2.45rem;
`;
const StyleUlist = styled.ul`
  list-style: none;
`;
const Stylelist = styled.li`
  color: white;
`;
const Header = ({ loggedIn }) => {
  const userd = useSelector((state) => state.auth.user);
  const userimg = useSelector((state) => state.auth.userImg);
  const navigate = useNavigate();
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const Logout = () => {
    // remove user from local storage to log user out
    localStorage.clear();
    navigate("/login");
    window.location.reload(false);
  };
  return (
    <Box maxWidth="120rem" mx="auto">
      <StyledHeader padding={{ _: "0rem 2rem", laptopS: "0rem 4rem" }}>
        <Box
          alignItems="center"
          display="flex"
          justifyContent="space-between"
          height={{ _: HEADER_HEIGHT._, laptopS: HEADER_HEIGHT.laptopS }}
          as="nav"
        >
          <Box display="flex" alignItems="center" mr="xl">
            <Link href="/">
              <img src={Logo} height="30px" />
            </Link>
          </Box>
          {!loggedIn && (
            <>
              <FromTabletL>
                <Box ml={{ laptopS: "3rem", laptop: "4.6rem" }}>
                  <SearchInput />
                </Box>
              </FromTabletL>

              <Box
                display="grid"
                gridAutoFlow="column"
                ml="auto"
                gridGap="xl"
                alignItems="center"
              >
                <TillTabletL>
                  <Box onClick={() => setIsHeaderVisible(true)}>
                    <Hamburger />
                  </Box>
                </TillTabletL>
                <FromTabletL>
                  <NavMenu
                    items={MAIN_NAV}
                    variant="primary"
                    textVariant="link"
                    color="text.lowDark"
                  />
                  <Box display="flex" gridGap="0.1rem">
                    <NavItem
                      title="Sign In"
                      href="/login"
                      color="text.lowDark"
                      variant="primary"
                      textVariant="link"
                    />
                    <Typography color="text.lowDark">/</Typography>
                    <NavItem
                      title="Register"
                      href="/register"
                      color="text.lowDark"
                      variant="primary"
                      textVariant="link"
                    />
                  </Box>
                </FromTabletL>
              </Box>
            </>
          )}
          {loggedIn && (
            <>
              <FromTabletL>
                <Box ml={{ laptopS: "3rem", laptop: "4.6rem" }}>
                  <SearchInput />
                </Box>
              </FromTabletL>

              <Box
                display="grid"
                gridAutoFlow="column"
                ml="auto"
                gridGap="xl"
                alignItems="center"
              >
                <TillTabletL>
                  <Box onClick={() => setIsHeaderVisible(true)}>
                    <Hamburger />
                  </Box>
                </TillTabletL>
                <FromTabletL>
                  <NavMenu
                    items={MAIN_NAV}
                    variant="primary"
                    textVariant="link"
                    color="text.lowDark"
                  />
                  <Box display="flex" gridGap="1rem" alignItems="center">
                    <NavItem
                      title={userd?.username?.substring(0, 5)}
                      href="/"
                      color="text.lowDark"
                      variant="primary"
                      textVariant="link"
                    />
                    <Box>
                      <img
                        src={userimg}
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "50%",
                        }}
                      />
                    </Box>
                    {/* <Box onClick={() => navigate("/login")}> */}
                    <Box onClick={Logout}>
                      <Exit />
                    </Box>
                  </Box>
                </FromTabletL>
              </Box>
            </>
          )}
        </Box>
      </StyledHeader>
      {isHeaderVisible && (
        <TillTabletL>
          <StyledHeader2>
            <Box onClick={() => setIsHeaderVisible(false)}>
              <Close color="text.highLight" />
            </Box>
            <StyleUlist>
              <Stylelist>
                <Link href="/home">
                  <Typography color="text.highLight" variant="link">
                    Home
                  </Typography>
                </Link>
              </Stylelist>
              <Stylelist>
                <Link href="/undergraduate">
                  <Typography color="text.highLight" variant="link">
                    Undergraduate
                  </Typography>
                </Link>
              </Stylelist>
              <Stylelist>
                <Link href="/waec">
                  <Typography color="text.highLight" variant="link">
                    WAEC
                  </Typography>
                </Link>
              </Stylelist>
              <Stylelist>
                <Link href="/">
                  <Typography color="text.highLight" variant="link">
                    Explore
                  </Typography>
                </Link>
              </Stylelist>
              <Stylelist>
                <Link href="/login">
                  <Typography color="text.highLight" variant="link">
                    Sign in
                  </Typography>
                </Link>
                <Typography color="text.highLight" as="span">
                  {" "}
                  /{" "}
                </Typography>
                <Link href="/register">
                  <Typography color="text.highLight" variant="link">
                    Register
                  </Typography>
                </Link>
              </Stylelist>
              <Stylelist>
                <Box>
                  <SearchInput />
                </Box>
              </Stylelist>
            </StyleUlist>
          </StyledHeader2>
        </TillTabletL>
      )}
    </Box>
  );
};

export default Header;
