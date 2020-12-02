import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { Heading1, Para1, ButtonEmpty } from "../../../styles";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

export default function Poster() {
    return (
        <Layout>
            <ImageContainer>
                <Image
                    src="/static/img/section-marketing-header.jpg"
                    alt="guy behind the desktop"
                    width="920"
                    height="676"
                />
            </ImageContainer>
            <Text>
                <QuoteL>
                    <ImQuotesLeft />
                </QuoteL>
                <Para1 color="#424656" align="center">
                    We zorgen ervoor dat potentiële klanten je gemakkelijk
                    kunnen vinden en bouwen een solide basis op om hen te helpen
                    bij het kiezen van je producten en diensten.
                </Para1>
                <QuoteR>
                    <ImQuotesRight />
                </QuoteR>
            </Text>
        </Layout>
    );
}

const Layout = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    padding: 1.9rem;
    border: 1px solid ${(p) => p.theme.silver};
    position: relative;

    &:after {
        content: "";
        position: absolute;
        bottom: 0;
        right: 0;
        width: 15rem;
        height: 15rem;
        background-color: ${(p) => p.theme.primary};
        clip-path: polygon(75% 75%, 100% 0, 100% 100%, 0 100%);
    }
`;
const ImageContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: linear-gradient(
            to bottom right,
            rgba(192, 57, 43, 0.5),
            rgba(192, 57, 43, 0.1)
        );
    }
`;
const Text = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2.7rem;
    position: relative;
`;

const QuoteL = styled.div`
    position: absolute;
    top: 2.7rem;
    left: 2.7rem;

    svg {
        color: ${(p) => p.theme.primary};
        font-size: 4.7rem;
    }
`;
const QuoteR = styled.div`
    position: absolute;
    bottom: 2.7rem;
    right: 2.7rem;

    svg {
        color: ${(p) => p.theme.primary};
        font-size: 4.7rem;
    }
`;
