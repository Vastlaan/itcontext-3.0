import React from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { respond, NavLink } from "../../styles";
import { BsSearch } from "react-icons/bs";

export default function ButtonsComponent({ isOpen, isSearch, setIsSearch }) {
    return (
        <Buttons isOpen={isOpen}>
            <Link href="/diensten">
                <NavLink>Diensten</NavLink>
            </Link>

            <Link href="/prijzen">
                <NavLink>Prijzen</NavLink>
            </Link>

            <Link href="/projecten">
                <NavLink>Projecten</NavLink>
            </Link>

            <Link href="/contact">
                <NavLink>Contact</NavLink>
            </Link>
            <Box onClick={() => setIsSearch((prevState) => !prevState)}>
                <BsSearch />
            </Box>
            <Search isSearch={isSearch}>
                <input type="text" />
                <button>
                    <BsSearch />
                </button>
            </Search>
        </Buttons>
    );
}
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
    z-index: 1;

    ${(p) =>
        respond(
            "m",
            `
        width: auto;
        margin: 0 0 0 auto;
        display: flex;
        flex-direction: row;
        position: unset;
        padding-left: 0rem;
        transform:translateY(0);

    `
        )}

    button {
        margin: 2.7rem 1.9rem;
        text-transform: uppercase;

        ${() => respond("m", "margin: 0 1.9rem; text-transform: capitalize;")}
    }
`;
const Box = styled.button`
    min-width: 9rem;
    padding: 0.9rem 2.7rem;
    border: 2px solid ${(p) => p.theme.black};
    background-color: ${(p) => p.theme.black};
    display: none;
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

    ${() => respond("m", "display: flex;")}

    span {
        font-size: 2.7rem;
        color: ${(p) => p.theme.white};
    }

    svg {
        font-size: 2.7rem;
        color: ${(p) => p.theme.white};
    }
`;

const Search = styled.div`
    position: static;
    top: ${(p) => (p.isSearch ? "100%" : "-100%")};
    padding: 0.9rem 1.9rem;
    background-color: transparent;
    display: flex;
    justify-content: flex-start;
    transition: all 0.3s;
    z-index: -1;

    ${(p) =>
        respond(
            "m",
            `position: absolute; background-color: ${p.theme.black}; justify-content: center; width: 100%;`
        )}

    input {
        min-width: 30rem;
        padding: 0.6rem 1.9rem;
        border: none;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        background-color: ${(p) => p.theme.white};

        &:active,
        :focus {
            outline: none;
        }
    }
    button {
        border: none;
        border-left: 1px solid ${(p) => p.theme.black};
        padding: 0 0.9rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        background-color: ${(p) => p.theme.white};
        cursor: pointer;
        transition: all 0.3s;
        margin: 0rem;

        ${(p) => respond("m", ``)}

        &:hover {
            background-color: ${(p) => p.theme.silver};
        }

        svg {
            font-size: 1.6rem;
        }
    }
`;
