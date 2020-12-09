import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { respond } from "../../../styles";
import styled from "styled-components";

export default function PicturesComponent() {
    const image1 = useRef();
    const image2 = useRef();
    const image3 = useRef();
    const image4 = useRef();

    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1 });

        tl.fromTo(
            image1.current,
            {
                opacity: 0,
                y: "45rem",
            },
            { opacity: 0.21, y: 0, duration: 3 }
        );
        tl.to(image1.current, { opacity: 0, y: "-45rem", duration: 2 });

        tl.fromTo(
            image2.current,
            {
                opacity: 0,
                y: "45rem",
            },
            { opacity: 0.2, y: 0, duration: 3 }
        );
        tl.to(image2.current, { opacity: 0, y: "-45rem", duration: 2 });

        tl.fromTo(
            image3.current,
            {
                opacity: 0,
                y: "45rem",
            },
            { opacity: 0.2, y: 0, duration: 3 }
        );
        tl.to(image3.current, { opacity: 0, y: "-45rem", duration: 2 });

        tl.fromTo(
            image4.current,
            {
                opacity: 0,
                y: "45rem",
            },
            { opacity: 0.2, y: 0, duration: 3 }
        );
        tl.to(image4.current, { opacity: 0, y: "-45rem", duration: 2 });
    }, []);

    return (
        <Wrapper>
            <Pictures>
                <Img1 ref={image1}>
                    <img
                        src="/static/img/home-header-3.jpg"
                        alt="website design"
                    />
                </Img1>
                <Img2 ref={image2}>
                    <img
                        src="/static/img/home-header-1.jpg"
                        alt="website design"
                    />
                </Img2>
                <Img3 ref={image3}>
                    <img
                        src="/static/img/image-story-2.jpg"
                        alt="website design"
                    />
                </Img3>
                <Img4 ref={image4}>
                    <img
                        src="/static/img/home-header-2.jpg"
                        alt="website design"
                    />
                </Img4>
                <ImageAbs>
                    <Image
                        src="/static/img/logoPlane.svg"
                        alt="logo sign"
                        width="215"
                        height="150"
                    />
                </ImageAbs>
            </Pictures>
        </Wrapper>
    );
}
const Wrapper = styled.div`
    height: 60rem;
    overflow: hidden;
    position: relative;
    display: none;

    ${() => respond("m", "display: block;")}
`;
const Pictures = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(6, 1fr);
    grid-gap: 1.9rem;
`;
const Img = styled.div`
    border: 5px solid ${(p) => p.theme.primary};
    overflow: hidden;

    img {
        display: block;
        height: 26rem;
        object-fit: cover;
        object-position: center;
    }
`;
const Img1 = styled(Img)`
    grid-column: 1/2;
    grid-row: 1/2;
`;
const Img2 = styled(Img)`
    grid-column: 2/4;
    grid-row: 1/2;
`;
const Img3 = styled(Img)`
    grid-column: 1/3;
    grid-row: 2/3;
`;
const Img4 = styled(Img)`
    grid-column: 3/4;
    grid-row: 2/3;
`;
const ImageAbs = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
