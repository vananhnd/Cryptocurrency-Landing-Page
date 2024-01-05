import {Container, Stack, Typography} from "@mui/material";
import {SectionBox} from "./HomeStyled";
import {GetStartContentTypography, GetStartTypography, GetStartTypographyGradient} from "../common/CustomTypography";
import {ButtonAbout} from "../common/CustomButton";

const content = {
    title:"How to get started",
    question:"What is Dolven Labs?",
    content:"Dolven Labs is a DAO Based Ecosystem Catalyst Founded on the StarkNet Network and designed to be community-driven, Dolven Labs acts as a fund raising platform for projects on StarkNet Network."
}

export default function GetStarted() {
    return (
        <SectionBox>
            <Container maxWidth="xl">
                <Stack alignItems="center" spacing={3}>
                    <GetStartTypographyGradient>{content.title}</GetStartTypographyGradient>
                    <GetStartTypography >{content.question}</GetStartTypography>
                    <GetStartContentTypography>{content.content}</GetStartContentTypography>
                    <ButtonAbout>Join DAO</ButtonAbout>
                </Stack>

            </Container>
        </SectionBox>
    );
}