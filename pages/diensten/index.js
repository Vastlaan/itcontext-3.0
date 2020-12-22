import React from "react";
import Head from "next/head";
import Layout from "../../globals/layout";
import Header from "../../components/diensten/header";
import Services from "../../components/diensten/services";
import Intersection2 from "../../components/utils/intersection2";
import Info from "../../components/diensten/info";

export default function Diensten() {
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
            <Header />
            <Services />
            <Intersection2
                header="Freelancer inhuren"
                para1="Hi there! Ben je op zoek naar iemand om jouw developers team te verrijken? Iemand die fronted- en backend-technologieën kent en inzicht heeft in online marketingstrategieën? Stop met verder zoeken, je bent op de juiste plek! "
                para2="Wij kennen moderne technologieën en hebben ervaring met het bouwen van websites op verschillende platformen. Duik er in onze website, leer ons beter kennen en aarzel niet om ons te bellen wanneer je maar wilt."
            />
            <Info />
        </Layout>
    );
}
