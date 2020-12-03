import React from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { Content, Heading3, Para1 } from "../../styles";

export default function Confirmation({
    setDisplayConfirmation,
    heading,
    text,
}) {
    return (
        <Layout>
            <Close onClick={() => setDisplayConfirmation(false)}>
                <MdClose />
            </Close>
            <Content
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                    height: "auto",
                }}
            >
                <Heading3>{heading}</Heading3>
                <Para1>{text}</Para1>
            </Content>
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
