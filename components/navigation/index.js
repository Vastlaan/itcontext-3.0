import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import Buttons from "./buttons";
import MenuButton from "./menuButton";
import Logo from "./logo";
import { respond, NavLink } from "../../styles";
import { BsSearch, BsChevronDown } from "react-icons/bs";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSearch, setIsSearch] = useState(false);

    return (
        <Container>
            <S>
                <Logo />

                <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />

                <Buttons
                    isOpen={isOpen}
                    isSearch={isSearch}
                    setIsSearch={setIsSearch}
                />
            </S>
        </Container>
    );
}

const Container = styled.nav`
    z-index: 99;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
`;

const S = styled.div`
    display: flex;
    justify-content: flex-start;
    padding: 0rem 2.7rem;
    background-color: ${(p) => p.theme.black};
    z-index: 9;
    width: 100%;
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
