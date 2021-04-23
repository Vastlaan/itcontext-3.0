import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import Head from "next/head";
import styled from "styled-components";
import {
    respond,
    PageNav,
    SectionNarrow,
    Grid2,
    Heading1,
    Para1,
    ButtonEmpty,
    Info,
} from "../../styles";
import Layout from "../../globals/layout";
import Banner from "../../components/utils/banner";
import { data } from "../../lib/diensten";
import { BsCheck } from "react-icons/bs";

export default function Dienst({ serviceData }) {
    const target = useRef();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(target.current, {
            opacity: 0,
            y: 0,
            duration: 0.3,
            scrollTrigger: {
                trigger: target.current,
                toggleActions: "restart none none none",
            },
        });
    }, []);
    return (
        <Layout>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <title>{serviceData.name}</title>
                <meta
                    name="description"
                    content={serviceData.para1}
                    data-react-helmet="true"
                />
                <link rel="apple-touch-icon" href="/logo192.png" />

                <link rel="cannonical" href="https://itcontext.nl/diensten" />

                <meta property="og:type" content="article" />

                <meta property="og:title" content={serviceData.name} />

                <meta property="og:description" content={serviceData.para1} />

                <meta property="og:image" content="/OGImageHomepage.png" />

                <meta
                    property="og:url"
                    content={`https://itcontext.nl/diensten/${serviceData.path}`}
                />

                <meta property="og:site_name" content={serviceData.name} />
            </Head>
            <Background ref={target}>
                <SectionNarrow>
                    <PageNav>
                        <p>
                            <Link href="/">Voorpagina</Link>
                            {" > "}
                            <Link href="/diensten">Diensten</Link>
                            {" > "}
                            <Link href={`/diensten/${serviceData.path}`}>
                                {serviceData.name}
                            </Link>
                        </p>
                    </PageNav>
                    <Grid2>
                        <Info>
                            <Heading1 color="#f6f9ff">
                                {serviceData.name
                                    .split(" ")
                                    .map((w, i, a) =>
                                        i !== a.length - 1 ? (
                                            <strong key={i * 2.95}>{w} </strong>
                                        ) : (
                                            <span key={i * 2.009}>{w} </span>
                                        )
                                    )}
                            </Heading1>
                            <Para1>{serviceData.para1}</Para1>
                            {serviceData.para2 && (
                                <Para1>{serviceData.para2}</Para1>
                            )}
                            <Link href={serviceData.link}>
                                <ButtonEmpty color="#c0392b" color2="#f6f9ff">
                                    {serviceData.btn}
                                </ButtonEmpty>
                            </Link>
                        </Info>
                        <List>
                            {serviceData.characteristic.map((ch, i) => (
                                <li key={`list-dienst-${ch}-${i}`}>
                                    <BsCheck />
                                    {ch}
                                </li>
                            ))}
                            <li>
                                <br />
                            </li>
                            <li style={{ margin: "auto 0 0 0" }}>
                                <span>
                                    Prijzen al vanaf: &euro;{serviceData.price}
                                </span>
                            </li>
                        </List>
                    </Grid2>
                </SectionNarrow>
            </Background>
            <Banner />
        </Layout>
    );
}

export async function getStaticPaths() {
    const paths = data.map((d) => ({ params: { name: d.path } }));
    return {
        paths,
        fallback: false,
    };
}
export async function getStaticProps({ params }) {
    const serviceData = data.find((d) => d.path === params.name);
    return {
        props: {
            serviceData,
        },
    };
}

const Background = styled.div`
    background-color: ${(p) => p.theme.black};
    padding: 10rem 2.7rem;
    // padding-top: 19rem;
`;

const List = styled.ul`
    padding: 2.7rem 0;
    list-style: none;
    display: flex;
    flex-direction: column;

    ${() => respond("m", "padding: 2.7rem;")}
    ${() => respond("xxl", "padding: 6.8rem 2.7rem;")}

    li {
        font-size: 1.9rem;
        color: ${(p) => p.theme.white};
        display: flex;
        align-items: center;
        margin: 1.9rem 0;

        ${() => respond("m", "margin: .9rem 0;")}

        svg {
            margin-right: 1.9rem;
            font-size: 1.9rem;
            color: ${(p) => p.theme.primary};
        }

        span {
            color: ${(p) => p.theme.primary};
            font-style: italic;
            font-size: 1.3rem;
            letter-spacing: 0.3rem;
        }
    }
`;
