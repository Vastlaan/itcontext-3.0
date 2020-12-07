import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { Content, Heading3, Para1, ButtonEmpty } from "../../styles";

export default function Confirmation({
    setDisplayConfirmation,
    heading,
    text,
}) {
    const target = useRef();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(target.current, {
            opacity: 0,
            y: 0,
            duration: 0.3,
            scrollTrigger: {
                trigger: target.current,
                toggleActions: "restart none none none",
            },
        });
    }, []);
    return (
        <Layout ref={target}>
            <Close onClick={() => setDisplayConfirmation(false)}>
                <MdClose />
            </Close>
            <CustomContent>
                <Heading3>{heading}</Heading3>
                <Para1>{text}</Para1>
                <ButtonEmpty
                    color="#c0392b"
                    color2="#f6f9ff"
                    onClick={() => setDisplayConfirmation(false)}
                >
                    Ok
                </ButtonEmpty>
            </CustomContent>
        </Layout>
    );
}

const Layout = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 102;
`;
const CustomContent = styled(Content)`
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
        margin-bottom: 2.7rem;
        text-align: center;
    }
    p {
        margin-bottom: 4.7rem;
        text-align: center;
    }
`;
const Close = styled.div`
    position: absolute;
    top: 2.7rem;
    right: 2.7rem;
    border: 1px solid white;
    padding: 1.3rem;
    cursor: pointer;

    svg {
        font-size: 2.7rem;
        color: white;
    }
`;
