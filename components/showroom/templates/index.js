import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { data } from "../../../lib/templates";
import {
    respond,
    SectionNarrow,
    HeadingLine,
    Heading3,
    Para1,
    List,
    ButtonEmpty,
} from "../../../styles";
import { BsCheck } from "react-icons/bs";
import { IoDesktopOutline } from "react-icons/io5";

export default function TemplatesComponent() {
    return (
        <SectionNarrow>
            <HeadingLine style={{ marginBottom: "4.7rem;" }}>
                Landing pages voorbeelden
            </HeadingLine>
            {data.map((item, i) => {
                console.log(item.name);
                return (
                    <Item key={item.id}>
                        <ImageContainer>
                            <Link href={item.linkD}>
                                <img
                                    src={item.image}
                                    alt="website preview"
                                    width="288"
                                    height="356"
                                />
                            </Link>
                        </ImageContainer>
                        <Info>
                            <Heading3 color="#18191F">
                                {i + 1}.{" "}
                                {item.name
                                    .split(" ")
                                    .map((w, i, a) =>
                                        i !== a.length - 1 ? (
                                            <strong key={i * 2.17}>{w} </strong>
                                        ) : (
                                            <span key={i * 2.17}>{w} </span>
                                        )
                                    )}
                            </Heading3>
                            <Para1 color="#18191F">{item.description}</Para1>
                            <List>
                                {item.features.map((f, i) => {
                                    return (
                                        <li key={`list-dienst-${f}-${i}`}>
                                            <BsCheck />
                                            {f}
                                        </li>
                                    );
                                })}
                            </List>

                            <Link href={item.linkD}>
                                <Preview>
                                    <Icon>
                                        <IoDesktopOutline />
                                    </Icon>
                                    <span color="#18191F">
                                        Desktop Live Preview
                                    </span>
                                </Preview>
                            </Link>

                            <Link href={item.link}>
                                <ButtonEmpty color="#c0392b">
                                    Bestellen
                                </ButtonEmpty>
                            </Link>
                        </Info>
                    </Item>
                );
            })}
        </SectionNarrow>
    );
}

const Item = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 6.7rem;
    margin: 9rem 1.9rem;

    ${() => respond("m", "grid-template-columns: repeat(3, 1fr);")}
`;
const ImageContainer = styled.div`
    grid-column: 1/-1;
    align-self: start;
    border: 5px solid ${(p) => p.theme.primary};
    cursor: pointer;
    ${() => respond("m", "grid-column: 1/2;")}

    img {
        display: block;
        width: 100%;
        height: auto;
    }
`;
const Info = styled.div`
    grid-column: 1/-1;
    display: flex;
    flex-direction: column;
    position: relative;
    ${() => respond("m", "grid-column: 2/4;")}

    &:after {
        content: "";
        position: absolute;
        bottom: 0;
        right: 0;
        width: 10rem;
        height: 10rem;
        background-color: ${(p) => p.theme.primary};
        clip-path: polygon(75% 75%, 100% 0, 100% 100%, 0 100%);
    }

    h3 {
        margin-bottom: 2.7rem;
    }

    p {
        margin-bottom: 2.7rem;
    }

    ul {
        padding: 0;

        li {
            font-weight: 900;
            color: ${(p) => p.theme.black};
        }
    }

    button {
        margin: 2.7rem 0;
    }
`;

const Preview = styled.div`
    margin: 2.7rem 0;
    display: flex;
    align-items: center;
    cursor: pointer;

    span {
        font-size: 1.9rem;
        font-weight: 700;
        color: ${(p) => p.theme.black};
        text-decoration: underline;
    }
`;
const Icon = styled.div`
    width: 5rem;
    height: 5rem;
    border: 3px solid ${(p) => p.theme.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2.7rem;

    svg {
        font-size: 2.7rem;
        color: ${(p) => p.theme.primary};
    }
`;
