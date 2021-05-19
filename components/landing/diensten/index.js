import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import styled, { withTheme } from "styled-components";
import {
    respond,
    SectionNarrow,
    Heading1,
    Heading3,
    Para1,
    ButtonEmpty,
} from "../../../styles";

const data = [
    {
        id: 0,
        header: "Websites Ontwikkelen",
        para: `Bij het ontwerpen van onze websites zijn wij gedreven door innovatie, analyse van de doelgroep- en concurrentiegedrag, waarbij we proberen om hen altijd een stap voor te zijn.`,
        img: "/static/img/section-marketing-header.jpg",
        link: "/diensten/websites-ontwerpen",
    },
    {
        id: 1,
        header: "Hosting, E-mail, CMS",
        para: `Ons brede aanbod onderscheidt zich door allerlei oplossingen. Wij realiseren zowel kleine als grote opdrachten, van eenvoudige maar krachtige websites tot complexe webapplicaties, e-mailadressen, Content Managment Systems en veel meer.`,
        img: "/static/img/image-story-2.jpg",
        link: "/diensten/emails-aanmaken",
    },
    {
        id: 2,
        header: "Online Marketing",
        para: `Laat de wereld zien wie je bent. Online activiteit is een geweldige manier om de aandacht van het publiek te trekken. Vergroot interesse in de producten en diensten van jouw bedrijf door meer verkeer naar jouw site leiden. Verhoog jouw verkoop, merkbekendheid en trust-recogintion.`,
        img: "/static/img/image-about-short.png",
        link: "/diensten/online-marketing",
    },
];

function Diensten(props) {
    const target = useRef();

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
        <SectionNarrow ref={target}>
            <Layout>
                <Heading>
                    <Heading1 align="center">
                        Wij{" "}
                        <span>
                            ontwikkelen <sub>creative</sub>
                        </span>{" "}
                        ontwerpen
                    </Heading1>
                </Heading>
                <Services>
                    {data.map((service, i) => {
                        return (
                            <Service
                                key={`${i}-service-${service.id}`}
                                color={i === 1 ? "#fbfbfb" : "white"}
                            >
                                <HeadingBox
                                    color={
                                        i === 0
                                            ? props.theme.black
                                            : i === 1
                                            ? props.theme.fresh
                                            : ""
                                    }
                                >
                                    <Heading3>
                                        {i === 1
                                            ? service.header
                                            : service.header
                                                  .split(" ")
                                                  .map((char, i) =>
                                                      i === 1 ? (
                                                          <span key={i}>
                                                              {" "}
                                                              {char}{" "}
                                                          </span>
                                                      ) : (
                                                          `${char}`
                                                      )
                                                  )}
                                    </Heading3>
                                </HeadingBox>

                                <ParaContainer>
                                    <Para1
                                        align="center"
                                        color={props.theme.grey}
                                    >
                                        {service.para}
                                    </Para1>
                                </ParaContainer>
                                <Link href={service.link}>
                                    <ButtonSpecial
                                        color={
                                            i === 1
                                                ? props.theme.fresh
                                                : i === 2
                                                ? props.theme.primary
                                                : props.theme.black
                                        }
                                    >
                                        Lees meer
                                    </ButtonSpecial>
                                </Link>
                            </Service>
                        );
                    })}
                </Services>
            </Layout>
        </SectionNarrow>
    );
}

export default withTheme(Diensten);

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 9rem 1.9rem;
`;
const Heading = styled.div`
    h1 {
        max-width: 45rem;
    }
`;
const Services = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 6.7rem auto 2.7rem auto;
`;

const Service = styled.div`
    width: 35rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2.7rem;
    background-color: ${(p) => (p.color ? p.color : `rgba(0,0,0, 0.1)`)};
    position: relative;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.3);
    ${() => respond("m", "width: 35rem;")}
`;
const HeadingBox = styled.div`
    width: 100%;
    padding: 0.9rem 1.4rem;
    text-align: center;

    background-image: linear-gradient(
        to right,
        ${(p) => (p.color ? p.color : p.theme.primary)} 5%,
        transparent 5%
    );
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);

    h3 {
        display: inline-block;
        width: 100%;
        padding: 1.4rem;
        text-align: center;
        font-size: 3rem;
        color: ${(p) => p.theme.black};
        ${() => respond("m", "font-size: 2.7rem")}
    }
`;
const ButtonSpecial = styled.button`
    margin-top: auto;
    width: 100%;
    background-color: ${(p) => (p.color ? p.color : p.theme.black)};
    border: none;
    font-size: 2.2rem;
    padding: 1.4rem;
    color: white;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
        background-color: ${(p) => p.theme.primary};
    }

    &:active,
    :focus {
        outline: none;
    }
`;

const ImageContainer = styled.div`
    width: 100%;
    height: 20rem;
    max-height: 20rem;
    overflow: hidden;
    display: flex;
    justify-content: center;
    position: relative;
    ${() => respond("m", "width: 30rem;")}
`;
const ParaContainer = styled.div`
    padding: 2.7rem 1.4rem;

    p {
        font-size: 1.6rem;
    }
`;

const Deco = styled.div`
    width: 100%;
    padding: 0.6rem 2.7rem;
    background-image: linear-gradient(
        to right,
        ${(p) => p.theme.black} 5%,
        ${(p) => p.theme.black} 5%
    );

    font-size: 1.2rem;
    font-style: italic;
    font-weight: 300;
    color: white;
`;
