import React from "react";
import Image from "next/image";
import styled, { withTheme } from "styled-components";
import {
    respond,
    Header,
    Content,
    Grid2,
    Heading1,
    Heading3,
    ParaLine,
    ButtonEmpty,
} from "../../../styles";

function HeaderComponent(props) {
    return (
        <Header>
            <Content>
                <Grid2>
                    <Info>
                        <Heading1 color={props.theme.white}>
                            {"Beste prijs-kwaliteit verhouding"
                                .split(" ")
                                .map((w, i, a) =>
                                    i !== a.length - 1 ? (
                                        <strong key={i * 2.17}>{w} </strong>
                                    ) : (
                                        <span key={i * 2.17}>{w} </span>
                                    )
                                )}
                        </Heading1>
                        <ParaLine>
                            Bestel uw eigen website, hostingserver, privé
                            e-mail, domeinnaam en Content Management Systeem om
                            uw bedrijf up-to-date te houden
                        </ParaLine>
                        <ButtonEmpty
                            onClick={() =>
                                window.scrollBy({
                                    behavior: "smooth",
                                    top: 600,
                                })
                            }
                            color={props.theme.primary}
                            color2={props.theme.white}
                        >
                            Lees meer
                        </ButtonEmpty>
                    </Info>
                    <Banner>
                        <Heading1 color={props.theme.white}>
                            <span>IT</span> Context
                        </Heading1>
                        <Logo>
                            <Image
                                src="/static/img/logoPlaneWhite.svg"
                                alt="logo"
                                width="43"
                                height="30"
                            />
                            <Heading3 color="white">Web Design Studio</Heading3>
                        </Logo>
                    </Banner>
                </Grid2>
            </Content>
        </Header>
    );
}

export default withTheme(HeaderComponent);

const Info = styled.div`
    padding: 9rem 1.9rem;

    h1 {
        margin-bottom: 4.7rem;
    }
    p {
        margin-bottom: 6.7rem;
    }
`;
const Banner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    padding: 6.7rem 2.7rem;

    ${() => respond("m", "align-items: center;")}

    h1 {
        margin-bottom: 2.7rem;
    }
`;
const Logo = styled.div`
    padding: 1.9rem 2.7rem;
    background-color: ${(p) => p.theme.primary};
    display: flex;
    align-items: center;

    h3 {
        margin-left: 0.9rem;
    }
`;
