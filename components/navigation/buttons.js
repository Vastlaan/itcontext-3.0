import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import search from "../../lib/search";
import { respond, NavLink } from "../../styles";
import { BsSearch } from "react-icons/bs";
import { FaChevronRight } from "react-icons/fa";

export default function ButtonsComponent({ isOpen, isSearch, setIsSearch }) {
    const [results, setResults] = useState([]);

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
            <Box
                onClick={() => {
                    setResults([]);
                    setIsSearch((prevState) => !prevState);
                }}
            >
                <BsSearch />
            </Box>
            <Search isSearch={isSearch}>
                <label>
                    <input
                        type="text"
                        onChange={(e) => {
                            if (e.target.value.length > 1) {
                                return search(e.target.value, setResults);
                            } else {
                                return setResults([]);
                            }
                        }}
                    />
                </label>
                <button name="search">
                    <BsSearch />
                </button>
                <ul>
                    {results.map((r) => (
                        <Link key={`list-search-${r.path}`} href={r.path}>
                            <li>
                                <FaChevronRight />
                                {r.name}
                            </li>
                        </Link>
                    ))}
                </ul>
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
        padding: 2.7rem 1.9rem;
        text-transform: uppercase;
        margin: 0;
        background-color: ${(p) => p.theme.black};
        ${() => respond("m", "padding: 0 1.9rem; text-transform: capitalize;")};
    }
`;
const Box = styled.button`
    min-width: 9rem;
    padding: 0rem 1.9rem;
    border: none;
    background-color: ${(p) => p.theme.black};
    display: none;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
        svg {
            color: ${(p) => p.theme.primary};
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
    flex-wrap: wrap;
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

    ul {
        width: 100%;
        margin: 2.7rem auto;
        list-style: none;

        li {
            color: ${(p) => p.theme.white};
            font-size: 1.9rem;
            cursor: pointer;
            margin: 0.9rem 0;
            display: flex;
            align-items: center;

            svg {
                font-size: 1.9rem;
                color: ${(p) => p.theme.primary};
                margin-right: 0.9rem;
            }

            &:hover {
                color: ${(p) => p.theme.silver};
            }
        }
    }
`;
