import React from "react";
import styled from "styled-components";
import Form from "./form";
import Contact from "./contact";
import { respond, SectionWide, Content } from "../../../styles";

export default function Header() {
    return (
        <SectionWide style={{ backgroundColor: "#18191F" }}>
            <Content>
                <Layout>
                    <Contact />
                    <Form />
                </Layout>
            </Content>
        </SectionWide>
    );
}

const Layout = styled.div`
    padding-top: 10rem;
    display: grid;
    grid-gap: 0;
    grid-template-columns: 1fr 1fr 1fr;

    ${() => respond("m", "grid-gap: 6.7rem;")}
`;
