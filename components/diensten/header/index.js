import React from "react";
import Link from "next/link";
import Image from "next/image";
import styled, { withTheme } from "styled-components";
import {
    respond,
    Header,
    Content,
    Grid2,
    Heading1,
    ParaLine,
    ButtonEmpty,
} from "../../../styles";

function HeaderDiensten(props) {
    return (
        <Header>
            <Content>
                <Grid2>
                    <Info>
                        <Heading1 color={props.theme.white}>
                            {"Wat kunnen wij voor u betekenen?"
                                .split(" ")
                                .map((w, i, a) =>
                                    i !== a.length - 1 ? (
                                        <strong key={i * 2.17}>{w} </strong>
                                    ) : (
                                        <span key={i * 2.17}>{w} </span>
                                    )
                                )}
                        </Heading1>
                        <ParaLine>
                            Onderscheid je van de concurrentie. We ontwerpen
                            prachtige en unieke websites en helpen je met het
                            creëren van waardevolle inhoud.
                        </ParaLine>
                        <Link href="/contact">
                            <ButtonEmpty
                                color={props.theme.primary}
                                color2={props.theme.white}
                            >
                                Contact
                            </ButtonEmpty>
                        </Link>
                    </Info>
                    <Picture>
                        <Image
                            src="/static/img/logoPlane.svg"
                            alt="logo sign"
                            width="430"
                            height="300"
                        />
                    </Picture>
                </Grid2>
            </Content>
        </Header>
    );
}

export default withTheme(HeaderDiensten);

const Info = styled.div`
    padding: 9rem 0;

    h1 {
        margin-bottom: 4.7rem;
    }
    p {
        margin-bottom: 6.7rem;
    }
`;
const Picture = styled.div`
    display: none;
    align-items: center;
    justify-content: center;

    ${() => respond("m", "display:flex;")}
`;
