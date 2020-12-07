import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export default function LogoComponent() {
    return (
        <Logo>
            <Link href="/">
                <div>
                    <Image
                        src="/static/img/logo.svg"
                        alt="logo IT Context"
                        width="100"
                        height="69"
                    />
                </div>
            </Link>
        </Logo>
    );
}

const Logo = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    padding: 0.9rem 1.9rem;
    cursor: pointer;
    z-index: 9;
    background-color: ${(p) => p.theme.black};
`;
