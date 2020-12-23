import React from "react";
import Link from "next/link";
import styled from "styled-components";
import marked from "marked";
import {
    respond,
    fonts,
    Para1,
    SectionWide,
    Content,
    ButtonEmpty,
} from "../../styles";
import { IoMdTimer } from "react-icons/io";
import { AiOutlineRead } from "react-icons/ai";

export default function ArticlesComponent({ articles }) {
    return (
        <SectionWide>
            <Content>
                {articles.map((article) => {
                    function getMarkdownText() {
                        let rawMarkup = marked(article.content, {
                            sanitize: true,
                        });
                        rawMarkup = rawMarkup.substring(0, 200) + " ...";
                        return { __html: rawMarkup };
                    }

                    const content = marked(article.content);

                    return (
                        <Article key={article.id}>
                            <Headline>
                                <AiOutlineRead />
                                <span>{article.title}</span>
                            </Headline>
                            <Date>
                                <IoMdTimer />
                                {article.date}
                            </Date>
                            <Core dangerouslySetInnerHTML={getMarkdownText()} />
                            <Link
                                style={{ margin: "0 0 2rem 2rem" }}
                                href={`/blog/${article.id}`}
                            >
                                <ButtonEmpty>Read more</ButtonEmpty>
                            </Link>
                            <Tags>
                                {article.categories.map((cat) => {
                                    return (
                                        <span key={`category-${cat.id}`}>
                                            #{cat.name}
                                        </span>
                                    );
                                })}
                            </Tags>
                        </Article>
                    );
                })}
            </Content>
        </SectionWide>
    );
}
const Article = styled.div`
    width: 100%;
    margin: 2rem auto;
    background-color: ${(p) => p.theme.white};

    button {
        margin-left: 2rem;
    }
`;
const Headline = styled.h3`
    padding: 1rem 2rem;
    font-size: 2.5rem;
    font-weight: 800;
    background-color: ${(p) => p.theme.black};
    color: ${(p) => p.theme.white};
    display: flex;
    align-items: center;

    svg {
        margin-right: 1rem;
        color: ${(p) => p.theme.primary};
    }
`;
const Date = styled.div`
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    color: ${(p) => p.theme.black};

    svg {
        color: ${(p) => p.theme.primary};
        margin-right: 1rem;
    }
`;
const Core = styled.div`
    margin: 0 auto;
    padding: 2rem;

    ol {
        padding-left: 2rem;

        li {
            font-weight: 700;
        }
    }
    p,
    li {
        font-size: 2.2rem;
        font-family: ${fonts.cormoran};
    }

    pre {
        margin: 2rem auto;
        white-space: break-spaces;
        padding: 1rem;
        background-color: ${(p) => p.theme.greyDark};
    }
    code {
        font-size: 1.6rem;
        color: gold;
    }
`;

const Tags = styled.div`
    width: 100%;
    background-color: ${(p) => p.theme.black};
    padding: 1rem 2rem;
    margin-top: 2rem;

    span {
        font-size: 1.4rem;
        margin-right: 1rem;
        color: ${(p) => p.theme.primary};
    }
`;
