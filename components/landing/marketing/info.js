import React from "react";
import Link from "next/link";
import styled, { withTheme } from "styled-components";
import { Heading1, Para1, ButtonEmpty } from "../../../styles";

function Info(props) {
    return (
        <Layout>
            <Heading1>
                Jouw{" "}
                <span>
                    bedrijf
                    <br /> <sub>online laten</sub>
                </span>{" "}
                groeien
            </Heading1>
            <Para1 color="#424656">
                Bereik de juiste doelgroep en overtuig hen om contact met je op
                te nemen.We zorgen ervoor dat potentiële klanten je gemakkelijk
                kunnen vinden en bouwen een solide basis op om hen te helpen bij
                het kiezen van je producten en diensten.
            </Para1>
            <Link href="/diensten/online-marketing">
                <ButtonEmpty color={props.theme.primary}>
                    Online Marketing
                </ButtonEmpty>
            </Link>
        </Layout>
    );
}

export default withTheme(Info);

const Layout = styled.div`
    padding: 9rem 1.9rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    h1 {
        margin-bottom: 4.7rem;
    }
    p {
        margin-bottom: 6.7rem;
    }
`;
