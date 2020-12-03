import React from "react";
import Link from "next/link";
import styled, { withTheme } from "styled-components";
import {
    respond,
    SectionWide,
    Content,
    ButtonPrimary,
    Para1,
    Heading2,
} from "../../styles";

function Section4({ header, para, btn1, btn2, link1, link2, theme }) {
    return (
        <SectionWide>
            <Bulk>
                <Content
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                    }}
                >
                    <Info>
                        <Heading2 color={theme.white}>{header}</Heading2>
                        <Para1 color={theme.white}>{para}</Para1>
                    </Info>
                    <Buttons>
                        <Link href={link1}>
                            <ButtonPrimary>{btn1}</ButtonPrimary>
                        </Link>
                        <Link href={link2}>
                            <ButtonPrimary
                                color={theme.white}
                                color2={theme.black}
                            >
                                {btn2}
                            </ButtonPrimary>
                        </Link>
                    </Buttons>
                </Content>
            </Bulk>
        </SectionWide>
    );
}

export default withTheme(Section4);

const Bulk = styled.div`
    background-color: ${(p) => p.theme.black};
`;
const Info = styled.div`
    grid-column: 1/4;
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 6.7rem 2.7rem;

    ${() => respond("m", "grid-column: 1/3;")}

    h1 {
        margin-bottom: 2.7rem;
        max-width: 100rem;
    }
    p {
        max-width: 100rem;
    }
`;
const Buttons = styled.div`
    grid-column: 1/4;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 0 0 2.7rem 0;

    ${() =>
        respond(
            "m",
            "grid-column: 3/4; justify-content: center; flex-direction: column;padding: 4.7rem 0;"
        )}

    button {
        margin: 1.9rem;
    }
`;
