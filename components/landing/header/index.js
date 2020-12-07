import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Header, Content, Grid2 } from "../../../styles";
import Info from "./info";
import Pictures from "./pictures";

export default function HeaderHomepage() {
    const header = useRef();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(header.current, {
            opacity: 0,
            y: 0,
            duration: 0.3,
            scrollTrigger: {
                trigger: header.current,
                toggleActions: "restart none none none",
            },
        });
    }, []);
    return (
        <Header ref={header}>
            <Content>
                <Grid2>
                    <Info />
                    <Pictures />
                </Grid2>
            </Content>
        </Header>
    );
}
