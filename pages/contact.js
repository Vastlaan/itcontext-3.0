import React from "react";
import Head from "next/head";
import Layout from "../globals/layout";
import Header from "../components/contact/header";
import Intersection from "../components/utils/intersection";
import Intersection2 from "../components/utils/intersection2";
import Route from "../components/contact/route";

export default function Contact() {
    return (
        <Layout>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <title>Contact IT Context</title>
                <meta
                    name="description"
                    content="Neem contact met ons mee via onze website. Heb je een vraag over een van ons dienst? Vermeld dan het in onderstaand formulier of bel 06 82 30 70 51"
                    data-react-helmet="true"
                />
                <link rel="apple-touch-icon" href="/logo192.png" />

                <link rel="cannonical" href="https://itcontext.nl/contact" />

                <meta property="og:type" content="article" />

                <meta property="og:title" content="Contact IT Context" />

                <meta
                    property="og:description"
                    content="Neem contact met ons mee via onze website. Heb je een vraag over een van ons dienst? Vermeld dan het in onderstaand formulier of bel 06 82 30 70 51. Neem contact met ons mee info@itcontext.nl"
                />

                <meta property="og:image" content="/OGImageHomepage.png" />

                <meta
                    property="og:url"
                    content="https://itcontext.nl/contact"
                />

                <meta property="og:site_name" content="Contact IT Context" />
            </Head>

            <Header />

            <Intersection2
                header="Het Bedrijf"
                para1="Wij zijn een jong en ambitieus bedrijf dat zich richt op de snelgroeiende digitale markt. We helpen onze klanten hun weg te vinden om zich online te kunnen onderscheiden,  bekendheid van het bedrijf op te bouwen en meer klanten te bereiken."
                para2="We zijn altijd op de hoogte van de nieuwste technologieën en de beste ontwerppraktijken. We doen onze kennis regelmatig op door te leren van de grootste spelers in de branche en het voorbeeld te nemen aan de beste bedrijven. We dromen groot, maar beginnen met kleine stapjes."
            />

            <Intersection
                header="Volg ons op Social Media"
                para="Duik in ons bedrijf en leer ons beter kennen. Wees op de hoogte van onze aanbiediengen en maak een kennis met onze nieuweste prestaties. Wij zijn jong bedrijf met grote ambities"
                btn1="Facebook"
                btn2="LinkedIn"
                link1="https://www.facebook.com/Web-Design-Studio-102496775046062"
                link2="https://www.linkedin.com/company/it-context"
            />

            <Route />
        </Layout>
    );
}
