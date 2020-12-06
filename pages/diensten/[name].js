import React from "react";
import Link from "next/link";
import Head from "next/head";
import styled from "styled-components";
import {
    respond,
    SectionNarrow,
    Grid2,
    Heading1,
    Para1,
    ButtonEmpty,
} from "../../styles";
import Layout from "../../globals/layout";
import { data } from "../../lib/diensten";
import { BsCheck } from "react-icons/bs";

export default function Dienst({ serviceData }) {
    return (
        <Layout>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <title>Diensten IT Context</title>
                <meta
                    name="description"
                    content="Wij realiseren zowel kleine als grote opdrachten, van eenvoudige maar krachtige websites tot complexe webapplicaties, e-mailadressen, Content Managment Systems en veel meer."
                    data-react-helmet="true"
                />
                <link rel="apple-touch-icon" href="/logo192.png" />

                <link rel="cannonical" href="https://itcontext.nl/diensten" />

                <meta property="og:type" content="article" />

                <meta property="og:title" content="Diensten IT" />

                <meta
                    property="og:description"
                    content="Wij realiseren zowel kleine als grote opdrachten, van eenvoudige maar krachtige websites tot complexe webapplicaties, e-mailadressen, Content Managment Systems en veel meer."
                />

                <meta property="og:image" content="/OGImageHomepage.png" />

                <meta
                    property="og:url"
                    content="https://itcontext.nl/diensten"
                />

                <meta property="og:site_name" content="Diensten IT Context" />
            </Head>
            <Background>
                <SectionNarrow>
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
                            <Para1>{serviceData.para2}</Para1>
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
                            <li>
                                <span>
                                    Prijzen al vanaf: &euro;{serviceData.price}
                                </span>
                            </li>
                        </List>
                    </Grid2>
                </SectionNarrow>
            </Background>
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
    padding: 9rem 2.7rem;
    padding-top: 19rem;
`;
const Info = styled.div`
    display: flex;
    flex-direction: column;

    h1 {
        margin-bottom: 4.7rem;
    }

    p {
        margin-bottom: 6.7rem;
    }
`;
const List = styled.ul`
    padding: 2.7rem 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    ${() => respond("m", "padding: 0 2.7rem;")}

    li {
        font-size: 1.9rem;
        color: ${(p) => p.theme.white};
        display: flex;
        align-items: center;
        margin: 1.9rem 0;

        ${() => respond("m", "margin: 0;")}

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
