import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { respond, Header, Content } from "../../../styles";
import Info from "./info";

export default function HeaderHomepage() {
    return (
        <Header>
            <Content>
                <Layout>
                    <Info />
                    <Pictures>
                        <Img1>
                            <Image
                                src="/static/img/homepage-header-1.jpg"
                                alt="website design"
                                width="1393"
                                height="2749"
                            />
                        </Img1>
                        <Img2>
                            <Image
                                src="/static/img/homepage-header-2.jpg"
                                alt="website design"
                                width="1393"
                                height="2749"
                            />
                        </Img2>
                    </Pictures>
                </Layout>
            </Content>
        </Header>
    );
}
const Layout = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    padding: 1.9rem;

    ${() => respond("m", "grid-template-columns: 1fr 1fr;")}
`;
const Pictures = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(12, 1fr);
    grid-gap: 1.9rem;
`;

const Img1 = styled.div`
    grid-column: 1/2;
    grid-row: 2/-1;
    max-width: 27rem;
    margin: 0 auto;
`;
const Img2 = styled.div`
    grid-column: 2/3;
    grid-row: 1/-2;
    max-width: 27rem;
    margin: 0 auto;
`;
