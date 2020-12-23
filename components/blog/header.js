import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { Header, Heading1, PageNav } from "../../styles";

export default function HeaderComponent() {
    return (
        <Header>
            <PageNav>
                <p>
                    <Link href="/">Voorpagina</Link>
                    {" > "}
                    <Link href="/blog">Blog</Link>
                </p>
            </PageNav>
            <Content>
                <Heading1 color="white">
                    Web Dev <span>Blog</span>
                </Heading1>
            </Content>
        </Header>
    );
}
const Content = styled.div`
    max-width: 1255px;
    margin: 0 auto;
    padding: 4.7rem 1.4rem;

    h1 {
        margin-bottom: 2.7rem;
    }
`;
