import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { respond, NavLink } from "../../styles";

export default function Navigation() {
    return (
        <Container>
            <Logo>
                <Link href="/">IT Context</Link>
            </Logo>
            <Buttons>
                <NavLink>
                    <Link href="/diensten">Diensten</Link>
                </NavLink>
                <NavLink>
                    <Link href="/website-ontwerpen-pakkets">Pakkets</Link>
                </NavLink>
                <NavLink>
                    <Link href="/contact">Contact</Link>
                </NavLink>
            </Buttons>
        </Container>
    );
}

const Container = styled.nav`
    display: flex;
    justify-content: flex-start;
    padding: 0.9rem 2.7rem;
`;
const Logo = styled.div`
    display: flex;
    align-items: center;
`;
const Buttons = styled.div`
    margin: 0 0 0 auto;
    display: flex;
`;
