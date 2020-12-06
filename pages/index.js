import React from "react";
import Head from "next/head";
import styled from "styled-components";
import Layout from "../globals/layout";
import Header from "../components/landing/header";
import Marketing from "../components/landing/marketing";
import Diensten from "../components/landing/diensten";
import Summary from "../components/landing/summary";
import Intersection from "../components/utils/intersection";

export default function LandingPage() {
    return (
        <Layout>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <title>IT Context Web Design Studio</title>
                <meta
                    name="description"
                    content="Website laten maken in Purmerend? Wij bieden de beste prijs-kwaliteitverhouding. Websites ontwerpen volgens moderne trends en nieuwste technologieën. Neem contact met ons mee info@itcontext.nl"
                    data-react-helmet="true"
                />
                <link rel="apple-touch-icon" href="/logo192.png" />

                <link rel="cannonical" href="https://itcontext.nl" />

                <meta property="og:type" content="article" />

                <meta
                    property="og:title"
                    content="IT Context Web Design Studio"
                />

                <meta
                    property="og:description"
                    content="Website laten maken in Purmerend? Wij bieden de beste prijs-kwaliteitverhouding. Websites ontwerpen volgens moderne trends en nieuwste technologieën. Neem contact met ons mee info@itcontext.nl"
                />

                <meta property="og:image" content="/OGImageHomepage.png" />

                <meta property="og:url" content="https://itcontext.nl" />

                <meta property="og:site_name" content="IT Context" />
            </Head>

            <Header />

            <Marketing />

            <Intersection
                header="Wil je met ons samenwerken?"
                para="Wij werken van maandag t / m vrijdag tussen 9.00 en 17.00 uur. Wij zijn gevestigd in Purmerend, maar werken in heel Nederland. Heb je vragen? Onze klantenservice staat voor je klaar."
                btn1="Diensten"
                btn2="Contact"
                link1="/diensten"
                link2="/contact"
            />

            <Diensten />

            <Summary />
        </Layout>
    );
}
