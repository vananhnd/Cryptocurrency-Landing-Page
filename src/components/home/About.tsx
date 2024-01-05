import {AboutBg1, SectionBox} from "./HomeStyled";
import {Box, Button, Container, Grid, Stack, Typography} from "@mui/material";
import {ButtonAbout} from "../common/CustomButton";
import {AboutContentTypography, AboutTitleTypography} from "../common/CustomTypography";

const content = {
    title:
        "DAO-Based Ecosystem Catalyst for Starknet",
    content:"Dolven Labs is a DAO Based Ecosystem Catalyst for projects built on the StarkNet Network, Dolven Labs aims to be the future of"
};
export default function About() {
    return (
        <SectionBox>
            <Container maxWidth="xl">
                <Stack spacing={4} direction={"column"} alignItems="center">
                    <AboutTitleTypography>
                        {content.title}
                    </AboutTitleTypography>
                    <AboutContentTypography sx={{fontWeight: 400}}>
                        {content.content}
                    </AboutContentTypography>
                    <Stack direction="column" alignItems="center"
                           justifyContent="center"  spacing={6}>
                        <ButtonAbout sx={{fontSize: "26px"}}>Launch App</ButtonAbout>
                    </Stack>
                </Stack>

            </Container>

        </SectionBox>
    );
}