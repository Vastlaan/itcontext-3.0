import React from "react";
import styled from "styled-components";
import { respond } from "../../styles";

export default function ButtonMenu({ isOpen, setIsOpen }) {
    return (
        <Button
            isOpen={isOpen}
            name="buttonMenu"
            onClick={() => setIsOpen((prevState) => !prevState)}
        >
            <div></div>
        </Button>
    );
}

const Button = styled.button`
    width: 4.7rem;
    height: 4.7rem;
    border: none;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: ${(p) => (p.isOpen ? "absolute" : "fixed")};
    top: 2.7rem;
    right: ${(p) => (p.isOpen ? "2.7rem" : "2.7rem")};
    z-index: 10;

    ${() => respond("m", "display: none;")}

    div {
        width: 4.7rem;
        height: 2px;
        background-color: ${(p) => p.theme.primary};
        position: relative;
        transition: all 0.3s;
        transform: ${(props) => (props.isOpen ? "rotate(135deg)" : "")};
        pointer-events: none;

        &:after {
            width: 4.7rem;
            height: 2px;
            content: "";
            display: block;
            position: absolute;
            background-color: ${(p) => p.theme.primary};
            top: -1rem;
            left: 0;
            transition: all 0.3s;
            transform: ${(props) =>
                props.isOpen ? "translate(0%,1rem) rotate(90deg)" : ""};
        }
        &:before {
            width: 4.7rem;
            height: 2px;
            content: "";
            display: ${(props) => (props.isOpen ? "none" : "block")};
            position: absolute;
            background-color: ${(p) => p.theme.primary};
            top: 1rem;
            left: 0;
        }
    }
`;
