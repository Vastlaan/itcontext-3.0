import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { respond, SectionNarrow, Grid2 } from "../../../styles";
import Info from "./info";
import Poster from "./poster";

export default function Marketing() {
    const target = useRef();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(target.current, {
            opacity: 0,
            y: 100,
            duration: 0.3,
            scrollTrigger: {
                trigger: target.current,
                toggleActions: "restart none none none",
            },
        });
    }, []);
    return (
        <SectionNarrow ref={target}>
            <Grid>
                <Info />
                <Poster />
            </Grid>
        </SectionNarrow>
    );
}
const Grid = styled(Grid2)`
    margin: 2.7rem 0;

    ${() => respond("m", "margin: 6.7rem 0;")}
`;
