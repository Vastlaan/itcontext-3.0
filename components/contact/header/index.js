import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Form from "./form";
import Contact from "./contact";
import { respond, SectionWide, Content, PageNav } from "../../../styles";

export default function Header() {
    return (
        <SectionWide style={{ backgroundColor: "#18191F" }}>
            <Content style={{ paddingTop: "10rem" }}>
                <PageNav>
                    <p>
                        <Link href="/">Voorpagina</Link>
                        {" > "}
                        <Link href="/contact">Contact</Link>
                    </p>
                </PageNav>
                <Layout>
                    <Contact />
                    <Form />
                </Layout>
            </Content>
        </SectionWide>
    );
}

const Layout = styled.div`
    display: grid;
    grid-gap: 0;
    grid-template-columns: 1fr 1fr 1fr;

    ${() => respond("m", "grid-gap: 6.7rem;")}
`;
