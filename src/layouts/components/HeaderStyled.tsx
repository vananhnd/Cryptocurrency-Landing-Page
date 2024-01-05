import { Box, styled } from "@mui/material";
import {hover} from "@testing-library/user-event/dist/hover";
import Link from "@mui/material/Link";
export const HeaderBox = styled(Box)(({ theme }) => ({
  position: "fixed",
  width: "100vw",
  zIndex: "15",
  "&#header": {
    transition: "all 0.4s ease!important",
  },
  "& .not-scroll": {
    transition: "0.5s",
    "& .logo": {
      transition: "0.65s",
      padding: "8px 0",
      width: "150px",
      [theme.breakpoints.down("sm")]: {
        width: "120px",
      },
    },
  },
  "& .sticky-scroll": {
    transition: "0.5s",
    backdropFilter: "blur(10px)",
    background: "var(--color-third-30)",
    "& .logo": {
      transition: "0.65s",
      padding: "4px 0",
      width: "130px",
      [theme.breakpoints.down("sm")]: {
        width: "100px",
      },
    },
  },
}));

export const Navbar = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "8px",
  fontSize: "15px",
  fontStyle: "normal",
  fontWeight: 500,
  gap: 60,
  [theme.breakpoints.down("md")]: {
    padding: "4px",
  },
}));

export const MenuLink = styled(Link)(({ theme }) => ({
  color: "white",
  fontWeight: 500,
  "&:hover": {
    fontSize: "15px",
    color: "var(--color-pink)",
  },
}));

export const MenuLinkBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: 51,
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 16,
    margin: "16px 32px",
  },
  "& a.menu-item": {
    display: "block",
    fontWeight: "medium",
    position: "relative",
    fontSize: 14,
    transition:
      "opacity 300ms ease, background-color 300ms ease, color 300ms ease",
    color: "var(--color-primary)",
    textDecoration: "none",
    "&:last-child": {
      marginRight: "0",
    },
    "&.logo": {
      padding: "0",
      margin: "0",
    },
    // "&.active": {
    //   color: "var(--color-primary)",
    //   borderBottom: "2px solid var(--color-primary)",
    //   fontWeight: "bold",
    // },
    "&::before": {
      position: "absolute",
      content: '""',
      width: "100%",
      height: "1px",
      background: "var(--color-primary)",
      top: "90%",
      left: "0",
      pointerEvents: "none",
      transformOrigin: "100% 50%",
      transform: "scale3d(0, 1, 1)",
      transition: "transform 0.3s cubic-bezier(0.7, 0, 0.2, 1)",
    },
    "&::after": {
      position: "absolute",
      content: '""',
      width: "100%",
      height: "1px",
      background: "var(--color-primary)",
      top: "calc(90% + 4px)",
      left: "0",
      pointerEvents: "none",
      transformOrigin: "0% 50%",
      transform: "scale3d(0, 1, 1)",
      transition: "transform 0.3s cubic-bezier(0.7, 0, 0.2, 1)",
    },
    "&:hover": {
      background: "transparent",
      color: "var(--color-primary)",
      "&::before": {
        transformOrigin: "0% 50%",
        transform: "scale3d(1, 1, 1)",
        transitionTimingFunction: "cubic-bezier(0.4, 1, 0.8, 1)",
      },
      "&::after": {
        transformOrigin: "100% 50%",
        transform: "scale3d(1, 1, 1)",
        transitionTimingFunction: "cubic-bezier(0.4, 1, 0.8, 1)",
      },
    },
  },
}));
