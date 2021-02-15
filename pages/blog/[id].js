import React from "react";
import Link from "next/link";
import styled from "styled-components";
import marked from "marked";
import Head from "next/head";
import Layout from "../../globals/layout";
import { respond, PageNav } from "../../styles";
import { IoMdTimer } from "react-icons/io";
import { AiOutlineRead } from "react-icons/ai";

export default function ArticleComponent({ data }) {
    const { id, title, content, date, categories, time } = data;

    function getMarkdownText(c) {
        var rawMarkup = marked(c, { sanitize: true });
        return { __html: rawMarkup };
    }
    const markup = getMarkdownText(content);

    return (
        <Layout>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <title>{title}</title>
                <meta
                    name="description"
                    content={content.substring(0, 80) + " ..."}
                    data-react-helmet="true"
                />
                <link rel="apple-touch-icon" href="/logo192.png" />

                <link rel="cannonical" href="https://itcontext.nl/" />

                <meta property="og:type" content="article" />

                <meta property="og:title" content={title} />

                <meta
                    property="og:description"
                    content={content.substring(0, 50) + " ..."}
                />

                <meta property="og:image" content="/OGImageHomepage.png" />

                <meta
                    property="og:url"
                    content={`https://itcontext.nl/blog/${id}`}
                />

                <meta property="og:site_name" content={title} />
            </Head>
            <Content>
                <PageNav color="#18191F">
                    <p>
                        <Link href="/">Voorpagina</Link>
                        {" > "}
                        <Link href="/blog">Blog</Link>
                        {" > "}
                        <Link href={`/blog/${id}`}>{title}</Link>
                    </p>
                </PageNav>
                <Article key={id}>
                    <Headline>
                        <h3>{title}</h3>
                    </Headline>
                    <Info>
                        <Date>
                            <IoMdTimer />
                            {date}
                        </Date>
                        <Read>
                            <AiOutlineRead />
                            <span>read time {time}</span>
                        </Read>
                        <Tags>
                            <span>tags:</span>
                            {categories.map((cat) => {
                                return (
                                    <span key={`category-${cat.id}`}>
                                        #{cat.name}
                                    </span>
                                );
                            })}
                        </Tags>
                    </Info>
                    <Core dangerouslySetInnerHTML={markup} />
                </Article>
            </Content>
        </Layout>
    );
}
export async function getServerSideProps(context) {
    const { id } = context.params;
    const res = await fetch("https://api.itcontext.nl/articles");
    const json = await res.json();
    const data = json.find((a) => a.id === Number(id));

    return {
        props: { data },
    };
}

const Content = styled.div`
    padding: 10rem 0;
    max-width: 1255px;
    margin: 0 auto;
`;
const Article = styled.div`
    width: 100%;
    margin: 5rem auto;
    background-color: ${(p) => p.theme.white};

    ${() => respond("m", "width: 90%;")}
`;
const Headline = styled.div`
    margin: 1rem 0;
    padding: 0rem 2rem;
    padding-bottom: 1.4rem;
    border-bottom: 1px solid ${(p) => p.theme.black};

    h3 {
        font-size: 5rem;
        font-weight: 800;
        color: ${(p) => p.theme.black};
        text-align: left;

        ${() => respond("m", "text-align: left;font-size: 6rem;")}
    }
`;
const Info = styled.div`
    padding: 0 2rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    & > * {
        margin: 0 2rem 0.5rem 0;
    }

    ${() =>
        respond(
            "m",
            "flex-direction: row; flex-wrap: wrap; align-items: center;"
        )}
`;
const Read = styled.div`
    display: flex;
    align-items: center;

    svg {
        font-size: 2rem;
        color: ${(p) => p.theme.primary};
        margin-right: 1rem;
    }

    span {
        font-size: 2rem;
        color: ${(p) => p.theme.grey};
    }
`;
const Date = styled.div`
    display: flex;
    align-items: center;
    font-size: 2rem;

    color: ${(p) => p.theme.grey};

    svg {
        color: ${(p) => p.theme.primary};
        margin-right: 1rem;
    }
`;
const Tags = styled.div`
    flex: 1;
    text-align: right;

    span {
        font-size: 1.4rem;
        margin-right: 1rem;
        color: ${(p) => p.theme.grey};
    }
`;
const Core = styled.div`
    margin: 0rem auto;
    padding: 2rem;

    ol {
        padding-left: 2rem;
        margin: 1.4rem 0;

        li {
            font-weight: 700;
        }
    }
    p,
    li {
        font-size: 2.25rem;
        margin: 1.4rem 0;
    }

    pre {
        margin: 2rem auto;
        white-space: break-spaces;
        word-break: break-word;
        padding: 1rem;
        background-color: ${(p) => p.theme.black};
    }
    code {
        font-size: 1.6rem;
        color: gold;
        font-family: "Courier New", sans-serif;
    }
`;
