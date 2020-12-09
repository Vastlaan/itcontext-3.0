import React from "react";
import Image from "next/image";
import styled from "styled-components";

export default function PicturesComponent() {
    return (
        <Pictures>
            <Img1>
                <img src="/static/img/home-header-3.jpg" alt="website design" />
            </Img1>
            <Img2>
                <img src="/static/img/home-header-1.jpg" alt="website design" />
            </Img2>
            <Img3>
                <img src="/static/img/image-story-2.jpg" alt="website design" />
            </Img3>
            <Img4>
                <img src="/static/img/home-header-2.jpg" alt="website design" />
            </Img4>
        </Pictures>
    );
}
const Pictures = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr 1fr;
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
