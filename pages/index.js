import React from "react";
import Head from "next/head";
import styled from "styled-components";
import Layout from "../globals/layout";
import Header from "../components/landing/header";

export default function LandingPage() {
    return (
        <Layout>
            <Head>
                <title>IT Context Web Design Studio</title>
                <meta charset="utf-8" />
                <link rel="icon" href="/static/img/favicon.ico" />

                <meta name="theme-color" content="#0F284E" />
                <meta
                    name="description"
                    content="Website laten maken in Purmerend? Wij bieden de beste prijs-kwaliteitverhouding. Websites ontwerpen volgens moderne trends en nieuwste technologieën. Neem contact met ons mee info@itcontext.nl"
                    data-react-helmet="true"
                />
                <link rel="apple-touch-icon" href="/static/img/logo192.png" />

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

                <meta
                    property="og:image"
                    content="/static/img/OGImageHomepage.png"
                />

                <meta property="og:url" content="https://itcontext.nl" />

                <meta property="og:site_name" content="IT Context" />
            </Head>
            <Header />
            <h1>Landing Page</h1>
        </Layout>
    );
}
