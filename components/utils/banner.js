import React, { useContext, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { Context } from "../../store";
import {
    SectionWide,
    Content,
    Grid2XL,
    ButtonPrimary,
    ButtonEmpty,
    Heading1,
    Heading3,
    respond,
} from "../../styles";

export default function Banner() {
    const { store, dispatch } = useContext(Context);
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
        <SectionWide ref={target}>
            <Background>
                <Content>
                    <Grid2XL>
                        <Part>
                            <Logo>
                                <Image
                                    src="/static/img/logoPlane.svg"
                                    alt="logo sign"
                                    width="107"
                                    height="75"
                                />
                            </Logo>
                            <List>
                                {store.diensten.map((dienst, i) => {
                                    return (
                                        <Link
                                            href={`/diensten/${dienst.path}`}
                                            key={`serv-alt-${dienst.path}`}
                                        >
                                            <li>
                                                {dienst.name
                                                    .split(" ")
                                                    .map((w, i, a) =>
                                                        i !== 0 ? (
                                                            <strong
                                                                key={i * 2.17}
                                                            >
                                                                {w}{" "}
                                                            </strong>
                                                        ) : (
                                                            <span
                                                                key={i * 2.17}
                                                            >
                                                                {w}{" "}
                                                            </span>
                                                        )
                                                    )}
                                            </li>
                                        </Link>
                                    );
                                })}
                            </List>
                            <Buttons>
                                <Link href="tel:0031682307051">
                                    <ButtonPrimary
                                        color="#c0392b"
                                        color2="#f6f9ff"
                                    >
                                        (0)6 82 30 70 51
                                    </ButtonPrimary>
                                </Link>
                                <Link href="mailto:info@itcontext.nl">
                                    <ButtonPrimary
                                        color="#c0392b"
                                        color2="#f6f9ff"
                                    >
                                        info@itcontext.nl
                                    </ButtonPrimary>
                                </Link>
                            </Buttons>
                        </Part>
                        <Part>
                            <Heading1 color="#f6f9ff">
                                <span>IT</span> Context
                            </Heading1>
                            <Path>www.itcontext.nl</Path>
                            <Pictures>
                                <Pic>
                                    <Image
                                        src="/static/img/banner-1.svg"
                                        alt="logo sign"
                                        width="100"
                                        height="100"
                                    />
                                </Pic>
                                <Pic>
                                    <Image
                                        src="/static/img/banner-2.svg"
                                        alt="logo sign"
                                        width="100"
                                        height="100"
                                    />
                                </Pic>
                                <Pic>
                                    <Image
                                        src="/static/img/banner-3.svg"
                                        alt="logo sign"
                                        width="100"
                                        height="100"
                                    />
                                </Pic>
                            </Pictures>
                            <Link href="/prijzen">
                                <ButtonEmpty color="#c0392b" color2="#f6f9ff">
                                    Kies een pakket
                                </ButtonEmpty>
                            </Link>
                            <Heading>ACTIE GELDT TOT 31.12.2020</Heading>
                        </Part>
                    </Grid2XL>
                </Content>
            </Background>
        </SectionWide>
    );
}

const Background = styled.div`
    background-color: ${(p) => p.theme.black};
    border: 5px solid ${(p) => p.theme.primary};
    margin: 0;
    position: relative;
`;
const Part = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.9rem;
    max-width: 100%;
`;
const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2.7rem;
`;
const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2.7rem;

    li {
        font-size: 1.9rem;
        text-transform: uppercase;
        color: ${(p) => p.theme.white};
        cursor: pointer;
        transition: all 0.3s;
        text-align: center;
        margin: 0.9rem auto;

        ${() => respond("m", "margin: 0.3rem auto;")}

        span {
            color: ${(p) => p.theme.primary};
        }
        strong {
            font-weight: 400;
        }

        &:hover {
            color: ${(p) => p.theme.silver};
        }
    }
`;
const Buttons = styled.div`
    display: flex;
    flex-direction: column;

    ${() => respond("m", "flex-direction: row;")}

    button {
        margin-right: 1.9rem;
        margin-bottom: 1.9rem;
        color: white;
        max-width: 25rem;
    }
`;
const Path = styled.p`
    margin: 1.9rem auto;
    text-align: center;
    font-size: 2.7rem;
    font-weight: 600;
    letter-spacing: 0.3rem;
    color: ${(p) => p.theme.white};
`;

const Pictures = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 1.9rem;
`;
const Pic = styled.div`
    margin: 1.9rem;
`;
const Heading = styled(Heading3)`
    font-weight: 300;
    margin-top: 2.7rem;
`;
