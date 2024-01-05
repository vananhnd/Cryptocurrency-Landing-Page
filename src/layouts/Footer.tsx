import {Box, Grid, IconButton, Paper, Stack, Typography} from "@mui/material";
import useResponsive from "../hooks/useResponsive";
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import { SvgIcon } from '@mui/material';
import {FooterTypography, FooterTypographyGradient} from "../components/common/CustomTypography";

const contact_us = {
    label: "contact",
    key: "contact",
    content: [
        {
            title: "Twitter",
            key: "Twitter",
            url: "https://twitter.com/",
            icon: <TwitterIcon/>,
        },
        {
            title: "Github",
            key: "github",
            url: "https://github.com/",
            icon: <GitHubIcon/>,
        },
        {
            title: "Telegram",
            key: "telegram",
            url: "https://web.telegram.org/k/",
            icon: <TelegramIcon/>,
        },
    ],
};

export default function Footer() {
    return (
            <Stack justifyContent="center"
                   alignItems="center"
                   spacing={8}
                sx={{
                    width: "100%",
                    height: "100%",
                    paddingTop: "100px",
                    paddingBottom: "200px",

                }}

            >
                <Stack justifyContent="center"
                       alignItems="center">
                    <FooterTypographyGradient>Features</FooterTypographyGradient>
                    <FooterTypography>Stay updated on the latest</FooterTypography>
                    <FooterTypography>Dolven Labs</FooterTypography>
                </Stack>

                <Stack justifyContent="center" alignItems="center" spacing={4}
                       direction="row"
                       sx={{
                           width: "949px",
                           height: "157px",
                           borderRadius: "37px",
                           background: 'var(--linear-seventh)',

                       }}>
                    <TwitterIcon sx={{ fontSize: 70 }}/>
                    <GitHubIcon sx={{ fontSize: 70 }}/>
                    <TelegramIcon sx={{ fontSize: 70 }}/>
                </Stack>

            </Stack>
    );
}
