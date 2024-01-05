import {Container, Grid} from "@mui/material";
import {ContainerPartner, PartnerLogo, SectionBox} from "./HomeStyled";
import {PartnerTypography} from "../common/CustomTypography";

const content ={
    label:"Partners",
    info:[
        {
            id: 1,
            img: "/images/partner/chainstack.png"
        },
        {
            id: 2,
            img: "/images/partner/argent.png"
        },
        {
            id: 3,
            img: "/images/partner/starkNet.png"
        },
        {
            id: 4,
            img: "/images/partner/hardhat.png"
        },
        ]
}
export default function Partner () {
    return (
        <SectionBox>
            <Container maxWidth="xl">
                <PartnerTypography>{content.label}</PartnerTypography>
                <ContainerPartner>
                    <a>
                        {content.info.map((partner, index) => (
                            <PartnerLogo
                                src={partner.img}
                                alt=""
                            />
                        ))}
                    </a>
                </ContainerPartner>
            </Container>
        </SectionBox>
    );
}