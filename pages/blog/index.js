import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../../globals/layout";
import Header from "../../components/blog/header";
import Articles from "../../components/blog/articles";

export default function Blog({ data }) {
    return (
        <Layout>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <title>Blog IT Context</title>
                <meta
                    name="description"
                    content="Lees onze artikelen en vergroot je kennis in Webontwikkelen sector."
                    data-react-helmet="true"
                />
                <link rel="apple-touch-icon" href="/logo192.png" />

                <link rel="cannonical" href="https://itcontext.nl/" />

                <meta property="og:type" content="article" />

                <meta property="og:title" content="Blog IT Context" />

                <meta
                    property="og:description"
                    content="Lees onze artikelen en vergroot je kennis in Webontwikkelen sector."
                />

                <meta property="og:image" content="/OGImageHomepage.png" />

                <meta property="og:url" content="https://itcontext.nl/blog" />

                <meta property="og:site_name" content="Blog IT Context" />
            </Head>
            <Header />
            <Articles articles={data} />
        </Layout>
    );
}

export async function getServerSideProps(ctx) {
    const res = await fetch("https://api.itcontext.nl/articles");
    const data = await res.json();
    return {
        props: { data },
    };
}
