import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { respond, SectionNarrow, HeadingLine } from "../../../styles";

export default function PricesComponent() {
    return (
        <SectionNarrow>
            <Layout>
                <Main>
                    <HeadingLine>
                        Overige <span>Prijzen</span>
                    </HeadingLine>
                    <Menu>
                        <li>
                            Websites ontwerpen en ontwikkelen{" "}
                            <span>va. &euro;199/project</span>
                        </li>
                        <li>
                            Webapplicaties ontwerpen en ontwikkelen{" "}
                            <span>prijs op aanvraag</span>
                        </li>
                        <li>
                            Webshops oprichten <span>prijs op aanvraag</span>
                        </li>
                        <li>
                            Professionele e-mailadresen{" "}
                            <span>va. &euro;5/maand</span>
                        </li>
                        <li>
                            Hosting <span>va. &euro;5/maand</span>
                        </li>
                        <li>
                            Content Managment Systeem{" "}
                            <span>va. &euro;5/maand</span>
                        </li>
                        <li>
                            Google Ads (excl. ads tegoed){" "}
                            <span>va. &euro;99/maand</span>
                        </li>
                        <li>
                            Facebook Ads (excl. ads tegoed){" "}
                            <span>va. &euro;99/maand</span>
                        </li>
                    </Menu>
                </Main>
                <Logo>
                    <Image
                        src="/static/img/logoPlane.svg"
                        alt="logo sign"
                        width="215"
                        height="150"
                    />
                </Logo>
            </Layout>
        </SectionNarrow>
    );
}

const Layout = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2.7rem;
    padding: 6.7rem 2.7rem;

    h2 {
        margin-bottom: 4.7rem;
    }
`;
const Main = styled.div`
    display: flex;
    flex-direction: column;
    grid-column: 1/-1;

    ${() => respond("m", "grid-column: 1/3;")}
`;
const Menu = styled.ul`
    list-style: none;
    width: 100%;

    li {
        width: 100%;
        font-size: 1.9rem;
        font-weight: 800;
        color: ${(p) => p.theme.black};
        display: grid;
        grid-template-columns: 1fr 18rem;
        margin: 1.9rem 0;

        span {
            text-align: right;
            font-weight: 800;
        }
    }
`;
const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
