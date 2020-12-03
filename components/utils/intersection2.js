import React from "react";
import styled, { withTheme } from "styled-components";
import { respond, SectionWide, Content, Para1, Heading2 } from "../../styles";

function Section2({ header, para1, para2, theme }) {
    return (
        <SectionWide>
            <Bulk>
                <Content style={{ padding: " 4.7rem 2.7rem" }}>
                    <Heading2 color={theme.black}>{header}</Heading2>
                    <Info>
                        <Para1 color={theme.black}>{para1}</Para1>
                        <Para1 color={theme.black}>{para2}</Para1>
                    </Info>
                </Content>
            </Bulk>
        </SectionWide>
    );
}

export default withTheme(Section2);

const Bulk = styled.div`
    background-color: ${(p) => p.theme.white};
`;
const Info = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 2.7rem;
    padding: 2.7rem 0;

    ${() => respond("m", "grid-template-columns: 1fr 1fr;")}
    p {
        max-width: 100rem;
    }
`;
