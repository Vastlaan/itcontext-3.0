import React, { useContext, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import styled from "styled-components";
import {
    respond,
    SectionWide,
    Content,
    Heading3,
    HeadingLine,
    LinkB,
} from "../../../styles";

import { FaChevronRight } from "react-icons/fa";

export default function ServicesComponent() {
    const target = useRef();
    const chevron1 = useRef();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(target.current, {
            opacity: 0,
            y: 100,
            duration: 0.3,
            scrollTrigger: {
                trigger: target.current,
                toggleActions: "restart none none none",
            },
        });
    }, []);
    return (
        <SectionWide ref={target}>
            <Background>
                <Content>
                    <Layout>
                        <Card1>
                            <HeadingLine>Web Development</HeadingLine>
                            <Heading3>Diensten</Heading3>
                            <ul>
                                <Link href="/diensten/websites-ontwerpen">
                                    <LinkB ref={chevron1} color="#18191F">
                                        <FaChevronRight />
                                        Websites Ontwerpen en Ontwikkelen
                                    </LinkB>
                                </Link>
                                <Link href="/diensten/webapplicaties-ontwerpen">
                                    <LinkB color="#18191F">
                                        <FaChevronRight />
                                        Webapplicaties Ontwerpen en Ontwikkelen
                                    </LinkB>
                                </Link>
                                <Link href="/diensten/webshops-oprichten">
                                    <LinkB color="#18191F">
                                        <FaChevronRight />
                                        Webshops oprichten
                                    </LinkB>
                                </Link>
                                <Link href="/diensten/emails-aanmaken">
                                    <LinkB color="#18191F">
                                        <FaChevronRight />
                                        Professionele e-mailadressen
                                    </LinkB>
                                </Link>
                                <Link href="/diensten/hosting">
                                    <LinkB color="#18191F">
                                        <FaChevronRight />
                                        Hosting
                                    </LinkB>
                                </Link>
                                <Link href="/diensten/cms">
                                    <LinkB color="#18191F">
                                        <FaChevronRight />
                                        Content Managment Systeem
                                    </LinkB>
                                </Link>
                            </ul>
                        </Card1>
                        <Card2>
                            <HeadingLine color="white">
                                Online Marketing
                            </HeadingLine>
                            <Heading3>Advertenties</Heading3>
                            <ul>
                                <Link href="/diensten/online-marketing">
                                    <LinkB>
                                        <FaChevronRight />
                                        Google Ads Campagnes oprichten
                                    </LinkB>
                                </Link>
                                <Link href="/diensten/online-marketing">
                                    <LinkB>
                                        <FaChevronRight />
                                        Facebook Ads Campagnes oprichten
                                    </LinkB>
                                </Link>
                            </ul>
                            <Heading3>Overig</Heading3>
                            <ul>
                                <Link href="/diensten/overig">
                                    <LinkB>
                                        <FaChevronRight />
                                        Social Media Profiles
                                    </LinkB>
                                </Link>
                                <Link href="/diensten/overig">
                                    <LinkB>
                                        <FaChevronRight />
                                        Facebook Ads Campagnes oprichten
                                    </LinkB>
                                </Link>
                            </ul>
                        </Card2>
                    </Layout>
                </Content>
            </Background>
        </SectionWide>
    );
}

const Background = styled.div`
    position: relative;
    background-image: linear-gradient(
        to bottom,
        ${(p) => p.theme.white} 50%,
        ${(p) => p.theme.black} 50%
    );

    ${(p) =>
        respond(
            "m",
            `background-image: linear-gradient(
        to right,
        ${p.theme.white} 50%,
        ${p.theme.black} 50%
    );`
        )}

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
const Layout = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    padding: 6.7rem 2.7rem;

    ${() => respond("m", "grid-template-columns: 1fr 1fr;")}
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2.7rem 0;

    h2 {
        margin-bottom: 4.7rem;
    }
    h3 {
    }
    ul {
        margin: 2.7rem 0;
    }
`;
const Card1 = styled(Card)`
    ${() => respond("m", "padding: 2.7rem 6.7rem 2.7rem 0;")}
`;
const Card2 = styled(Card)`
    ${() => respond("m", "padding: 2.7rem 0 2.7rem 6.7rem;")}
`;
