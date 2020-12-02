import React from "react";
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
    },
    {
        id: 1,
        header: "Hosting, E-mail, CMS",
        para: `Ons brede aanbod onderscheidt zich door allerlei oplossingen. Wij realiseren zowel kleine als grote opdrachten, van eenvoudige maar krachtige websites tot complexe webapplicaties, e-mailadressen, Content Managment Systems en veel meer.`,
    },
    {
        id: 2,
        header: "Online Marketing",
        para: `Laat de wereld zien wie je bent. Online activiteit is een geweldige manier om de aandacht van het publiek te trekken. Vergroot interesse in de producten en diensten van jouw bedrijf door meer verkeer naar jouw site leiden. Verhoog jouw verkoop, merkbekendheid en trust-recogintion.`,
    },
];

function Diensten(props) {
    return (
        <SectionNarrow>
            <Layout>
                <Heading>
                    <Heading1 align="center">
                        Wij{" "}
                        <span>
                            onwikkelen <sub>creative</sub>
                        </span>{" "}
                        ontwerpen
                    </Heading1>
                </Heading>
                <Services>
                    {data.map((service, i) => {
                        return (
                            <Service key={`${i}-service-${service.id}`}>
                                <Heading3>{service.header}</Heading3>
                                <Para1 align="center" color={props.theme.grey}>
                                    {service.para}
                                </Para1>
                                <div></div>
                            </Service>
                        );
                    })}
                </Services>
                <Link href="/diensten">
                    <ButtonEmpty color={props.theme.primary}>
                        Diensten
                    </ButtonEmpty>
                </Link>
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
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 2.7rem;
    margin: 6.7rem auto 2.7rem auto;

    ${() => respond("m", "grid-template-columns: 1fr 1fr 1fr;")}
`;

const Service = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 4.7rem;
    border: 1px solid ${(p) => p.theme.silver};
    padding: 2.7rem 1.9rem;
    position: relative;

    h1 {
        margin-bottom: 2.7rem;
        text-align: center;
    }

    div {
        position: absolute;
        top: 0;
        left: 0;
        width: 4rem;
        height: 4rem;
        clip-path: polygon(0 0, 100% 0, 25% 25%, 0% 100%);
        background-color: ${(p) => p.theme.primary};
    }
`;
