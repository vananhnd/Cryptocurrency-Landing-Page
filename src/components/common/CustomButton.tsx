import {Button, styled} from "@mui/material";
export const ButtonAbout = styled(Button)(({ theme }) => ({
    background: "var(--color-pink)",
    color: "var(--color-white)",
    width: "fit-content",
    height: "fit-content",
    fontWeight:"500",
    borderRadius: "10px",
    padding: "10px 15px",
    justifyContent: "center",
    alignItems: "center",
    textTransform: "initial",
    boxShadow: "var(--color-pink)",
    shadows: "var(--color-pink)",
    "&:hover": {
        background: "var(--linear-ninth)",
    },
    "&.Mui-disabled": {
        background: "var(--linear-ninth)",
    },
    [theme.breakpoints.down("lg")]: {
        fontSize: "20px",
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: "15px",
    },
}));
export const ButtonKeyPoint = styled(Button)(({ theme }) => ({
    background: "var(--color-pink)",
    color: "var(--color-white)",
    width: "fit-content",
    height: "fit-content",
    textTransform: "initial",
    fontWeight:500,
    fontSize:"22px",
    borderRadius: "16px",
    padding: "10px 60px",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
        // background: "rgba(0, 207, 255, 0.9)",
    },

    [theme.breakpoints.down("sm")]: {
        padding: "6px 18px",
        borderRadius: "10px",
        height: "fit-content",
        fontSize: "14px",
    },
}));
export const ButtonLoadingPrimary = styled(Button)(({ theme }) => ({
    background: "var(--linear-primary)",
    color: "var(--color-pink)",
    fontWeight: "bold",
    textTransform: "initial",
    borderRadius: "0 10px 0 10px",
    transition: "0.5s",
    padding: "6px 30px",
    position: "relative",
    fontSize: "16px",
    "&:hover": {
        boxShadow: "var(--shadow-primary)",
    },
    "&.Mui-disabled": {
        background: "var(--linear-primary)",
        color: "var(--color-primary)",
    },
    [theme.breakpoints.down("sm")]: {
        padding: "4px 20px",
        height: "fit-content",
        fontSize: "14px",
    },
}));