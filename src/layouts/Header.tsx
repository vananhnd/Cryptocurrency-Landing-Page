import {
  Box,
    Button,
  Container,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  List,
  Stack,
} from "@mui/material";
import useResponsive from "../hooks/useResponsive";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Link from '@mui/material/Link';
import {HeaderBox, MenuLink, MenuLinkBox, Navbar} from "./components/HeaderStyled";
import {ButtonAbout} from "../components/common/CustomButton";

const MENU_CONFIG = [
    {
        title: "Overview",
        url: "/",
    },
    {
        title: "Roadmap",
        url: "/roadmap",
    },
    {
        title: "Docs",
        url: "/docs",
    },
    {
        title: "Social",
        url: "/social",
    },
    ];
export default function Header() {
  const isMobile = useResponsive("down", "sm");
  const [scrollPositionToggle, setScrollPositionToggle] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const handleOpen = () => {
    setShowSidebar(true);
  };

  const handleClose = () => {
    setShowSidebar(false);
  };

  const [prevScrollpos, setPrevScrollpos] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 75) {
      setScrollPositionToggle(true);
    } else {
      setScrollPositionToggle(false);
    }
    if (isMobile) {
      const header = window.document.getElementById("header");
      if (prevScrollpos > position) {
        if (header !== null) header.style.top = "0";
      } else {
        if (header !== null) header.style.top = "-130px";
      }
      setPrevScrollpos(position);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prevScrollpos]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <HeaderBox id='header'>
      <Stack className={scrollPositionToggle ? "sticky-scroll" : "not-scroll"}>
        <Container
          maxWidth={"xl"}
          sx={{
            display: "flex",
            flexDirection: "column",
            zIndex: 1,
          }}>
          <Navbar>
              <Box component="img" src={"/logo.png"} sx={{maxWidth: "100%"}} />
              <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: "51px",
              }}>
              <Hidden lgDown>
                <MenuLinkBox>
                  {MENU_CONFIG.map((item, index) => (
                    <Box key={index}>
                        <MenuLink hrefLang={item.url} underline="none">
                            {item.title}
                        </MenuLink>
                    </Box>
                  ))}
                    <ButtonAbout>Launch App</ButtonAbout>
                </MenuLinkBox>
              </Hidden>

              {/* BUTTON MENU MOBILE */}
              <Hidden lgUp>
                <Stack direction={"row"} gap={1} alignItems={"center"}>
                  <IconButton
                    sx={{
                      "& svg": {
                        color: "var(--color-primary)",
                      },
                    }}
                    onClick={() => {
                      handleOpen();
                    }}>

                  </IconButton>
                  <Drawer
                    open={showSidebar}
                    anchor='right'
                    onClose={handleClose}
                    sx={{
                      "& .MuiPaper-root": {
                        background: "var(--color-accent)",
                        backdropFilter: "blur(10px)",
                      },
                    }}>
                    <Box
                      sx={{
                        width: 320,
                      }}>
                      <Box
                        sx={{
                          marginTop: "1rem",
                          marginLeft: "1rem",
                          display: "flex",
                          justifyContent: "space-between",
                        }}>
                        <IconButton
                          aria-label='CLose menu list'
                          onClick={handleClose}
                          sx={{ color: "var(--color-primary)" }}>

                        </IconButton>
                      </Box>
                      <List sx={{ color: "white" }}>
                        <Divider
                          sx={{ borderColor: "var(--color-text-secondary-10)" }}
                        />
                        <MenuLinkBox>
                          {MENU_CONFIG.map((item, index) => (
                            <NavLink
                              key={index}
                              to={item.url}
                              className={"menu-item"}
                              onClick={handleClose}>{item.title}
                            </NavLink>
                          ))}
                        </MenuLinkBox>
                        <Divider
                          sx={{ borderColor: "var(--color-text-secondary-10)" }}
                        />
                        <MenuLinkBox>

                        </MenuLinkBox>
                      </List>
                    </Box>
                  </Drawer>
                </Stack>
              </Hidden>
            </Box>
          </Navbar>
        </Container>
      </Stack>
    </HeaderBox>
  );
}
