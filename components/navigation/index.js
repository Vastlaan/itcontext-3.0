import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { respond, NavLink } from "../../styles";
import { BsSearch, BsChevronDown } from "react-icons/bs";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Container>
            <Logo>
                <Link href="/">
                    <Image
                        src="/static/img/logo.svg"
                        alt="logo IT Context"
                        width="100"
                        height="69"
                    />
                </Link>
            </Logo>
            <MenuIcon onClick={() => setIsOpen((prevState) => !prevState)}>
                open
            </MenuIcon>
            <Buttons isOpen={isOpen}>
                <Link href="/diensten">
                    <NavLink>Diensten</NavLink>
                </Link>

                <Link href="/pakketten">
                    <NavLink>Pakketten</NavLink>
                </Link>

                <Link href="/projekten">
                    <NavLink>Projekten</NavLink>
                </Link>

                <Link href="/contact">
                    <NavLink>Contact</NavLink>
                </Link>
                <Box>
                    <BsSearch />
                </Box>
                <Box>
                    <span>NL</span>
                    <BsChevronDown />
                </Box>
            </Buttons>
        </Container>
    );
}

const Container = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    padding: 0rem 2.7rem;
    background-color: ${(p) => p.theme.black};
`;
const Logo = styled.div`
    display: flex;
    align-items: center;
    padding: 0.9rem 1.9rem;
    cursor: pointer;
`;
const Buttons = styled.div`
    position: absolute;
    top: 100%;
    right: 0;
    width: 100%;
    background-color: ${(p) => p.theme.black};
    padding-left: 2.7rem;
    display: flex;
    transform: ${(p) => (p.isOpen ? "translateY(0)" : "translateY(-200%)")};
    flex-direction: column;
    transition: all 0.3s;
    z-index: 9;

    ${(p) =>
        respond(
            "m",
            `
        width: auto;
        margin: 0 0 0 auto;
        display: flex;
        flex-direction: row;
        position: static;
        padding-left: 0rem;
        transform:translateY(0);

    `
        )}

    button {
        margin: 1.9rem;
    }
`;
const Box = styled.button`
    min-width: 9rem;
    padding: 0.9rem 2.7rem;
    border: 2px solid ${(p) => p.theme.black};
    background-color: ${(p) => p.theme.black};
    display: flex;
    align-items: center;
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
        background-color: ${(p) => p.theme.white};
        border: 2px solid ${(p) => p.theme.black};
        svg {
            color: ${(p) => p.theme.black};
        }
        span {
            color: ${(p) => p.theme.black};
        }
    }

    span {
        font-size: 2.7rem;
        color: ${(p) => p.theme.white};
    }

    svg {
        font-size: 2.7rem;
        color: ${(p) => p.theme.white};
    }
`;

const MenuIcon = styled.button`
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    color: ${(p) => p.theme.white};
    margin-left: auto;

    ${() => respond("m", "display: none;")}
`;
