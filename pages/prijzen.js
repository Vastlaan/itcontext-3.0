import React from "react";
import Head from "next/head";
import Layout from "../globals/layout";
import Header from "../components/prijzen/header";
import Packages from "../components/prijzen/packages";
import Intersection from "../components/utils/intersection";
import Prices from "../components/prijzen/prices";

export default function Prijzen() {
    return (
        <Layout>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <title>Prijzen IT Context</title>
                <meta
                    name="description"
                    content="IT Context helpt je bij het oprichten van je eigen website, webshop, webapplicatie of online advertenties campagne. De kosten hangen af van het aantal paginas, producten en de gewenste functionaliteit. IT Context ontwerpt websites al vanaf €199 inclusief btw."
                    data-react-helmet="true"
                />
                <link rel="apple-touch-icon" href="/logo192.png" />

                <link rel="cannonical" href="https://itcontext.nl/prijzen" />

                <meta property="og:type" content="article" />

                <meta property="og:title" content="Prijzen IT Context" />

                <meta
                    property="og:description"
                    content="IT Context helpt je bij het oprichten van je eigen website, webshop, webapplicatie of online advertenties campagne. De kosten hangen af van het aantal paginas, producten en de gewenste functionaliteit. IT Context ontwerpt websites al vanaf €199 inclusief btw."
                />

                <meta property="og:image" content="/OGImageHomepage.png" />

                <meta
                    property="og:url"
                    content="https://itcontext.nl/prijzen"
                />

                <meta property="og:site_name" content="Prijzen IT Context" />
            </Head>
            <Header />

            <Packages />

            <Intersection
                header="Laat de wereld zien, wie je bent"
                para="Een goede marketingstrategie vereist een solide plan, dat kan verschillen afhankelijk van: scope - het verkeer waarop je je concentreert; technologieën - tools die je gaat gebruiken; budget - de tijd en kosten die je bereid bent te besteden. IT Context helpt je bij het kiezen van de beste oplossingen die aan jouw wensen en eisen voldoen."
                btn1="Online Marketing"
                btn2="Contact"
                link1="/diensten/online-marketing"
                link2="/contact"
            />

            <Prices />
        </Layout>
    );
}
