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
                        src="/static/img/logoPlane.svg"
                        alt="logo IT Context"
                        width="64"
                        height="45"
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
    background-color: rgba(0, 0, 0, 0.2);
`;
