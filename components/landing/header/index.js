import React, { useEffect, useRef } from "react";
import styled from "styled-components";
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
            <BackgroundVideo>
                <video loop muted autoPlay>
                    <source
                        src="/static/videos/header-background-video.mp4"
                        type="video/mp4"
                    />
                </video>
            </BackgroundVideo>
            <Content>
                <Grid2>
                    <Info />
                    <Pictures />
                </Grid2>
            </Content>
        </Header>
    );
}

const BackgroundVideo = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    video {
        min-height: 100%;
    }

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.7);
        z-index: 0;
    }
`;
