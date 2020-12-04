import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { respond, ButtonFull } from "../../../styles";

export default function Card({ data }) {
    return (
        <Layout color={data.color}>
            <Icon>{data.icon}</Icon>
            <Heading color={data.color}>
                <span>{data.name} </span>
                <strong>Pakket</strong>
            </Heading>
            <Price color={data.color}>
                {data.price
                    .split(",")
                    .map((p, i) =>
                        i === 1 ? <sup>{p}</sup> : <strong>{p},</strong>
                    )}
            </Price>
            <Disclaimer>
                <p>{data.disclaimer}</p>
            </Disclaimer>
            <Items>
                {data.items.map((item, i) => {
                    return <li key={`key-${item}-l-${i}`}>{item}</li>;
                })}
            </Items>
            <Link href={data.link}>
                <ButtonFull color={data.color}>{data.btn}</ButtonFull>
            </Link>
        </Layout>
    );
}
const Layout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4.7rem 1.9rem;
    border: 1px solid ${(p) => p.theme.black};
    min-width: 33rem;
    max-width: 45rem;
    position: relative;

    &:after {
        content: "";
        position: absolute;
        bottom: 0;
        right: 0;
        width: 15rem;
        height: 15rem;
        background-color: ${(p) => (p.color ? p.color : p.theme.primary)};
        clip-path: polygon(75% 75%, 100% 0, 100% 100%, 0 100%);
    }
    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 15rem;
        height: 15rem;
        background-color: ${(p) => (p.color ? p.color : p.theme.primary)};
        clip-path: polygon(0 0, 100% 0, 25% 25%, 0% 100%);
    }
`;
const Icon = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 0.9rem;

    svg {
        font-size: 4.7rem;
        color: ${(p) => p.theme.black};
    }
`;
const Heading = styled.div`
    font-size: 3.3rem;
    margin-bottom: 1.9rem;

    span {
        color: ${(p) => (p.color ? p.color : p.theme.primary)};
    }
    strong {
        color: ${(p) => p.theme.black};
    }
`;
const Price = styled.div`
    sup {
        display: inline-block;
        font-size: 1.9rem;
        color: ${(p) => p.theme.black};
        transform: translateY(-50%);
        font-weight: 900;
    }
    strong {
        font-size: 4.7rem;
        color: ${(p) => p.theme.black};
        font-weight: 900;
    }
`;
const Disclaimer = styled.div`
    margin-bottom: 1.9rem;
`;
const Items = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    margin-bottom: 2.7rem;

    li {
        font-size: 1.3rem;
        text-transform: uppercase;
        margin: 0.3rem auto;
        text-align: center;
        color: ${(p) => p.theme.black};
        border-bottom: 1px solid ${(p) => p.theme.silver};
    }
`;
