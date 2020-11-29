import { respond } from "./respond";
import styled from "styled-components";

export const ButtonEmpty = styled.button`
    max-width: 20rem;
    min-height: 5rem;
    color: ${(p) => (p.color ? p.color : p.theme.black)};
    border: 1px solid ${(p) => (p.color ? p.color : p.theme.black)};
    background-color: transparent;
    font-size: 1.6rem;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s;
    position: relative;
    overflow: hidden;
    z-index: 2;

    &:after {
        content: "";
        display: block;
        background-color: ${(p) => (p.color ? p.color : p.theme.black)};
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        transition: all 0.3s;
        z-index: -1;
    }

    &:hover {
        border: 1px solid ${(p) => (p.color2 ? p.color2 : p.theme.white)};
        color: ${(p) => (p.color2 ? p.color2 : p.theme.white)};
        &:after {
            top: 100%;
        }
    }

    &:focus,
    :active {
        outline: none;
    }
`;

export const ButtonFull = styled.button`
    max-width: 20rem;
    min-height: 5rem;
    color: ${(p) => (p.color ? p.color : p.theme.black)};
    border: 1px solid ${(p) => (p.color ? p.color : p.theme.black)};
    background-color: transparent;
    font-size: 1.6rem;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s;
    position: relative;
    overflow: hidden;
    z-index: 2;

    &:after {
        content: "";
        display: block;
        background-color: ${(p) => (p.color ? p.color : p.theme.black)};
        width: 100%;
        height: 100%;
        position: absolute;
        top: 100%;
        left: 0;
        transition: all 0.3s;
        z-index: -1;
    }

    &:hover {
        border: 1px solid ${(p) => (p.color2 ? p.color2 : p.theme.white)};
        color: ${(p) => (p.color2 ? p.color2 : p.theme.white)};
        &:after {
            top: 0;
        }
    }

    &:focus,
    :active {
        outline: none;
    }
`;

export const Social = styled.button`
    width: 4rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${(p) => (p.color ? p.color : p.theme.black)};
    border-radius: 3px;
    background-color: transparent;
    cursor: pointer;
    transition: all 0.3s;

    ${(p) =>
        respond(
            "l",
            `border: 1px solid ${p.color ? p.color : p.theme.silver};`
        )}

    &:hover {
        transform: scale(1.2);
    }
    svg {
        font-size: 2.3rem;
        color: ${(p) => p.theme.black};
        ${(p) => respond("l", `color: ${p.color ? p.color : p.theme.silver};`)}
    }
`;

export const NavLink = styled.button`
    border: none;
    background-color: transparent;
    transition: all 0.3s;
    font-size: 1.9rem;
    margin-right: 1.9rem;

    &:after {
        content: none;
        position: absolute;
        bottom: -10rem;
        opacity: 0;
        left: 0;
        widht: 100%;
        height: 1px;
        background-color: ${(p) => (p.color ? p.color : p.theme.black)};
    }

    &:hover {
        &:after {
            opacity: 1;
            bottom: -1rem;
        }
    }
`;
