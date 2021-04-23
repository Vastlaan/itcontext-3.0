import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { respond } from "../../../styles";
import styled from "styled-components";

export default function PicturesComponent() {
    return (
        <Wrapper>
            <Pictures>
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
    //height: 60rem;
    overflow: hidden;
    position: relative;
    display: none;

    ${() => respond("m", "display: block;")}
`;
const Pictures = styled.div`
    display: flex;
`;

const ImageAbs = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
