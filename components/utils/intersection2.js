import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styled, { withTheme } from "styled-components";
import {
    respond,
    SectionWide,
    Content,
    Para1,
    HeadingLine,
} from "../../styles";

function Section2({ header, para1, para2, theme }) {
    const target = useRef();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(target.current, {
            opacity: 0,
            y: 100,
            duration: 1,
            scrollTrigger: {
                trigger: target.current,
                toggleActions: "restart none none none",
            },
        });
    }, []);
    return (
        <SectionWide ref={target}>
            <Bulk>
                <Content style={{ padding: " 4.7rem 2.7rem" }}>
                    <HeadingLine color={theme.black}>{header}</HeadingLine>
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
