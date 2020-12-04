import React from "react";
import styled, { withTheme } from "styled-components";
import { respond, SectionNarrow, HeadingLine } from "../../../styles";
import data from "../../../data/packages";
import Card from "./card";

function PackagesComponent() {
    return (
        <Section>
            <HeadingLine>
                Website
                <span> Pakketten</span>
            </HeadingLine>
            <Layout>
                {data.map((service, i) => {
                    return <Card key={`pckg-key-${i}`} data={service} />;
                })}
            </Layout>
        </Section>
    );
}

export default withTheme(PackagesComponent);

const Section = styled(SectionNarrow)`
    padding: 9rem 2.7rem;
    h2 {
        margin-bottom: 4.7rem;
    }
`;

const Layout = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 4.7rem;

    ${() => respond("s", "grid-template-columns: repeat(2, 1fr);")}
    ${() =>
        respond(
            "xl",
            "grid-template-columns: repeat(3, 1fr);justify-items: center;"
        )}
`;
