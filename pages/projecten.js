import React, { useState } from "react";
import styled from "styled-components";
import Head from "next/head";
import Layout from "../globals/layout";
import Header from "../components/projekten/header";
import Display from "../components/projekten/display";
import Banner from "../components/utils/banner";
import { MdClose } from "react-icons/md";
import { Social } from "../styles";

export default function Gallery() {
    const [full, setFull] = useState(null);

    return (
        <Layout>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <title>Projecten IT Context</title>
                <meta
                    name="description"
                    content="Duik in ons bedrijf en leer ons beter kennen. Wees op de hoogte van onze aanbiediengen en maak een kennis met onze nieuweste prestaties. Wij zijn jong bedrijf met grote ambities"
                    data-react-helmet="true"
                />
                <link rel="apple-touch-icon" href="/logo192.png" />

                <link rel="cannonical" href="https://itcontext.nl/" />

                <meta property="og:type" content="article" />

                <meta property="og:title" content="Projecten IT Context" />

                <meta
                    property="og:description"
                    content="Duik in ons bedrijf en leer ons beter kennen. Wees op de hoogte van onze aanbiediengen en maak een kennis met onze nieuweste prestaties. Wij zijn jong bedrijf met grote ambities"
                />

                <meta property="og:image" content="/OGImageHomepage.png" />

                <meta
                    property="og:url"
                    content="https://itcontext.nl/projecten"
                />

                <meta property="og:site_name" content="Projecten IT Context" />
            </Head>
            <Header />
            <Display
                headline="websites galerij"
                p1="Onze technologie zorgt ervoor dat je website vanaf verschillende apparaten toegankelijk is, snel laadt en je bedrijf hoger scoort in de resultaten van zoekmachines "
                p2="Onze servers draaien op een van de meest beveiligde omgevingen en volgens de strengste veiligheidsregels"
                p3="We analyseren wat er in het hoofd van je klanten gebeurd. Daarom is ons ontwerp erop gericht om je publiek te laten groeien met mogelijk veel nieuwe klanten "
                p4="We volgen wereldwijde trends en gebruiken de nieuwste en best werkende oplossingen "
                imgl1="/static/img/gallery-5.jpg"
                imgl2="/static/img/gallery-4.jpg"
                imgl3="/static/img/gallery-1.jpg"
                imgl4="/static/img/gallery-3.jpg"
                imgl5="/static/img/home-header-2.jpg"
                imgsm1="/static/img/packages.svg"
                imgsm2="/static/img/gallery-10.svg"
                imgsm3="/static/img/gallery-2.jpg"
                setFull={setFull}
                full={full}
            />

            <Banner />

            <Display
                headline="andere ontwerpen"
                p1="We zijn altijd op de hoogte van de nieuwste technologieën en de beste ontwerppraktijken"
                p2="Wij zorgen ook voor encrypted communicatie tussen onze servers en bezoekers van jouw website. Daarvoor maken we gebruik van SSL protocols, zodat belangrijke wachtwoorden of persoonlijke gegevens niet zullen lekken"
                p3="Onze werk wordt gekenmerkt door een continue ontwikkelingsproces. Projecten worden altijd met behulp van de nieuweste technologieën, met passie en betrokkenheid uitgevoerd "
                p4="We verbeteren ons werk op basis van de feedback van onze klanten "
                imgl1="/static/img/gallery-1.jpg"
                imgl2="/static/img/gallery-3.jpg"
                imgl3="/static/img/gallery-4.jpg"
                imgl4="/static/img/gallery-3.jpg"
                imgl5="/static/img/gallery-1.jpg"
                imgsm1="/static/img/gallery-10.svg"
                imgsm2="/static/img/gallery-7.jpg"
                imgsm3="/static/img/gallery-6.jpg"
                setFull={setFull}
                full={full}
            />
            {full && (
                <Full>
                    <Social onClick={() => setFull(null)}>
                        <MdClose />
                    </Social>
                    <img src={full} alt="website design" />
                </Full>
            )}
        </Layout>
    );
}
const Full = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.9);

    button {
        position: absolute;
        top: 2.7rem;
        right: 4.7rem;
        border: 1px solid snow;

        svg {
            color: snow;
        }
    }

    img {
        max-height: 90%;
        max-width: 90%;
        margin: 0 auto;
    }
`;
