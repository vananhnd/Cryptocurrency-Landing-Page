import {Box, Button, Grid, styled} from "@mui/material";

export const SectionBoxFirst = styled(Box)(({ theme }) => ({
  backgroundSize: "100% 100%",
  backgroundRepeat: "no-repeat",
  minHeight: "100vh",
  paddingTop: theme.spacing(20),
  paddingBottom: theme.spacing(4),
  [theme.breakpoints.down("sm")]: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(6),
  },
}));

export const SectionBox = styled(Box)(({ theme }) => ({
  backgroundSize: "100% 100%",
  backgroundRepeat: "no-repeat",
  minHeight: "40vh",
  paddingTop: theme.spacing(18),
  paddingBottom: theme.spacing(14),
  [theme.breakpoints.down("sm")]: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(6),
  },
}));

export const AboutBg1 = styled(Box)(({ theme }) => ({
  background: "var(--linear-secondary)",
  height: "50px",
  width: "50px",
  padding: "10px",
}));


export const ContainerPartner = styled(Box)(({ theme }) => ({
  display: "grid",
  width: "100%",
  gap: "32px",
  overflow: "hidden",
  border: "0.2px solid #E5E5E5",
  borderRadius: "20px",
  gridTemplateColumns: "repeat(1, 1fr)",
  margin: theme.spacing(10, 0),
  "& a": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "85px",
    padding: "16px 48px",
  },
  [theme.breakpoints.down("lg")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  [theme.breakpoints.down("sm")]: {
    gap: "16px",
    gridTemplateColumns: "repeat(2, 1fr)",
    margin: theme.spacing(5, 0),
    "& a": {
      padding: "6px 16px",
      height: "64px",
    },
  },
}));

export const PartnerLogo = styled("img")(({ theme }) => ({
  transition: "transform 150ms ease-in-out",
  width: "90%",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

export const KeyPointBox = styled(Grid)(({ theme }) => ({
  width: "100%",
  height:"100%",
  borderRadius:"26px",
  alignItems: "center",
  backgroundColor: "var(--color-black)",
  [theme.breakpoints.down("md")]: {
    direction: "column",
  },
}));

export const KeyPointTextBox = styled(Grid)(({ theme }) => ({
  width: "100%",
  height:"100%",
  padding: "0 20px 40px 40px",
  alignItems: "center",
}));

export const KeyPointImgBox = styled(Grid)(({ theme }) => ({
  width: "100%",
  height:"100%",
  // background: "var(--linear-primary)",
  "& img": {
    width: "fit-content",
    objectFit: "cover",
  },
  [theme.breakpoints.down("sm")]: {
    "& img": {
      width: "50%",
      objectFit: "cover",
    },
    },
}));