import { styled, Typography } from "@mui/material";


export const AboutTitleTypography = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontSize: "96px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
  [theme.breakpoints.down("lg")]: {
    fontSize: "60px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "25px",
  },
}));

export const AboutContentTypography = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontSize: "35px",
  fontStyle: "normal",
  lineHeight: "normal",
  opacity: 0.6,
  [theme.breakpoints.down("lg")]: {
    fontSize: "25px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "15px",
  },
}));

export const PartnerTypography = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontSize: "40px",
  fontStyle: "normal",
  fontWeight: 500,
  letterSpacing: "4px",
  textTransform: "uppercase",
  background: "var(--linear-tenth)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",

}));
export const GetStartTypographyGradient = styled(Typography)(({ theme }) => ({
  display: "initial",
  fontWeight: 700,
  fontSize: "34px",
  background: "var(--linear-eleventh)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  [theme.breakpoints.down("sm")]: {
    fontSize: "30px",
  },
}));

export const GetStartTypography = styled(Typography)(({ theme }) => ({
  display: "initial",
  fontWeight: 800,
  fontSize: "96px",
  [theme.breakpoints.down("lg")]: {
    fontSize: "60px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "34px",
  },
}));

export const GetStartContentTypography = styled(Typography)(({ theme }) => ({
  display: "initial",
  textAlign: "center",
  fontWeight: 700,
  fontSize: "32px",
  opacity: 0.8,
  [theme.breakpoints.down("lg")]: {
    fontSize: "25px",
  },
  [theme.breakpoints.down("sm")]: {
    fontWeight: 500,
    fontSize: "15px",
  },
}));

export const KeyPointTypography = styled(Typography)(({ theme }) => ({
  display: "initial",
  fontWeight: 600,
  fontSize: "54px",
  [theme.breakpoints.down("lg")]: {
    fontSize: "40px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "25px",
  },
}));

export const KeyPointSubTypography = styled(Typography)(({ theme }) => ({
  display: "initial",
  fontWeight: 600,
  fontSize: "44px",
  fontStyle: "normal",
  [theme.breakpoints.down("lg")]: {
    fontSize: "34px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "20px",
  },
}));

export const KeyPointContentTypography = styled(Typography)(({ theme }) => ({
  display: "initial",
  fontFamily:"Inter",
  fontWeight: 300,
  fontSize: "22px",
  opacity:0.6,
  [theme.breakpoints.down("lg")]: {
    fontSize: "20px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "15px",
  },
}));
export const FooterTypographyGradient = styled(Typography)(({ theme }) => ({
  color: "white",
  display: "initial",
  fontWeight: "400",
  fontSize: "24px",
  fontStyle: "normal",
  letterSpacing: "9.6px",
  textTransform: "uppercase",
  background: "var(--linear-eighth)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
}));

export const FooterTypography = styled(Typography)(({ theme }) => ({
  color: "white",
  display: "initial",
  fontWeight: "bold",
  fontSize: "40px",
  fontStyle: "normal",
  [theme.breakpoints.down("lg")]: {
    fontSize: "30px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "25px",
  },
}));
export const TypographyShadow = styled(Typography)(({ theme }) => ({
  color: "white",
  display: "initial",
  textShadow: "0 0 8px rgba(255,255,255,0.5)",
}));

export const TypographyOutline = styled(Typography)(({ theme }) => ({
  display: "initial",
  lineHeight: "1.3",
  textShadow: "0 0 8px rgba(255,235,133,0.5)",
  background:
    "linear-gradient(180deg, rgb(240,217,79,0.5) 0%, rgb(240,217,79,0.025) 50% , transparent 100%)",
  WebkitTextStroke: "1px #F0D94F",
  WebkitTextFillColor: "transparent",
  WebkitBackgroundClip: "text",
  fontFamily: "'DM Sans', sans-serif",
}));
