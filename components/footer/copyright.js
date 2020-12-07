import React from "react";
import styled from "styled-components";

export default function CopyrightComponent({ copyright }) {
    return (
        <Copyright>
            <h6>
                &copy; {new Date().getFullYear()} Copyright{" "}
                <a href="https://itcontext.nl">IT Context</a> {copyright}
            </h6>
        </Copyright>
    );
}
const Copyright = styled.div`
    display: flex;
    justify-content: center;
    widht: 100%;
    padding-bottom: 1.9rem;

    h6 {
        font-size: 1.1rem;
        line-height: 1;
        letter-spacing: 0.2rem;
        font-weight: 300;
        color: ${(p) => p.theme.white};

        a {
            color: white;
        }
    }
`;
