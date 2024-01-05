import {Container, Grid, Paper, Stack, Typography} from "@mui/material";
import {KeyPointBox, KeyPointImgBox, KeyPointTextBox, SectionBox} from "./HomeStyled";
import {KeyPointContentTypography, KeyPointSubTypography, KeyPointTypography} from "../common/CustomTypography";
import {ButtonKeyPoint} from "../common/CustomButton";
import useResponsive from "../../hooks/useResponsive";

const content = {
title: "Key Points of Dolven Labs",
    info: [
        {
            id:1,
            title: "Claiming Process & Reward Distribution",
            content:"After the decision to invest and the amount to be invested is taken, the Dolven team will commit the funds to that project. And in return, profit from the tokens received will be delivered to users from Dolven's Airdrops interface.",
            image: "/images/keypoint/keypoint1.png",
        },
        {
            id:2,
            title: "Governance & DAO",
            content: "Dolven DAO is what makes all decision, to join our DAO you must become a Delegate.",
            image: "/images/keypoint/keypoint2.png",
        },
        {
            id:3,
            title: "Delegation Based Staking",
            content: "We’re creating a decentralized autonomous organization where direct democracy plays an important role.​ Dolven DAO is what makes all decisions, to join our DAO you must become a Delegate.",
            image: "/images/keypoint/keypoint3.png",
        },
        {
            title: "Liquidity Incentives Program",
            content: "Adding liquidity can be a risk factor for investors in some cases, Dolven Labs is aware of this therefore investors who support liquidity in the $DLV / $ETH parity are rewarded with airdrops and high yields",
            image: "/images/keypoint/keypoint4.png",
        },
    ],
}

export default function KeyPoint() {
    const isMobile = useResponsive("down", "sm");
    return (
        <SectionBox>
            <Container maxWidth="xl">
                <Stack alignItems="center">
                    <KeyPointTypography>{content.title}</KeyPointTypography>
                </Stack>
                <Stack alignItems="center" spacing={4}>
                    {content.info.map((item, index) => (
                        <KeyPointBox container alignItems="center" rowSpacing={2} direction={isMobile? "column":(index % 2 !== 0 ? 'row' : 'row-reverse')} >
                            <KeyPointImgBox item xs={6} container
                                            justifyContent="center"
                                            alignItems="center">
                                <img src={item.image} alt={""}/>
                            </KeyPointImgBox>
                            <KeyPointTextBox item xs={6}  alignItems="center" >
                                <Stack spacing={2}>
                                    <KeyPointSubTypography>{item.title}</KeyPointSubTypography>
                                    <KeyPointContentTypography>{item.content}</KeyPointContentTypography>
                                    <ButtonKeyPoint>{index % 2 == 0 ? 'View':'More'}</ButtonKeyPoint>
                                </Stack>
                            </KeyPointTextBox>
                        </KeyPointBox>
                    ))}
                </Stack>

            </Container>
        </SectionBox>
    );
}