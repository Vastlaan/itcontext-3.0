import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { RiFacebookFill, RiGoogleFill, RiLinkedinFill } from "react-icons/ri";
import { respond } from "../../styles";

export default function LinksComponent({ sections }) {
    return (
        <Links>
            {sections.map((section, i) => {
                return (
                    <Items key={`${section}-${i * Math.random(100)}`}>
                        <h3>{section.header}</h3>
                        {section.links.map((link, i) => {
                            return (
                                <Link
                                    key={`${link.name}-${i}-${Math.random(
                                        100
                                    )}`}
                                    href={`${link.url}`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </Items>
                );
            })}
            <Icons>
                <p>Volg Ons op Social Media</p>
                <SocialLinks>
                    <Link href="https://www.facebook.com/Web-Design-Studio-102496775046062">
                        <Border>
                            <RiFacebookFill />
                        </Border>
                    </Link>

                    <Link href="https://g.page/it-context-purmerend?gm">
                        <Border>
                            <RiGoogleFill />
                        </Border>
                    </Link>
                    <Link href="https://www.linkedin.com/company/it-context">
                        <Border>
                            <RiLinkedinFill />
                        </Border>
                    </Link>
                </SocialLinks>
            </Icons>
        </Links>
    );
}
const Links = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap-column: 2.3rem;
    padding: 2.7rem;

    ${() =>
        respond(
            "m",
            "grid-template-columns: repeat(2, 1fr); padding: 2.7rem 0;"
        )}

    div {
    }
`;
const Items = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0rem;

    ${() => respond("m", "margin: 2.7rem;")}

    h3 {
        font-weight: 600;
        color: ${(p) => p.theme.white};
        line-height: 2.3;
        font-size: 1.9rem;
        margin-bottom: 0.3rem;
    }

    a {
        margin-top: 1rem;
        text-decoration: none;
        font-weight: 300;
        color: ${(p) => p.theme.white};
        line-height: 1.3;
        font-size: 1.9rem;
        text-transform: capitalize;
        transition: all 0.3s;

        &:hover {
            color: ${(p) => p.theme.silver};
        }
    }
`;
const Icons = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    p {
        font-size: 1.9rem;
        color: ${(p) => p.theme.white};
        margin: 1.9rem 0;
    }
`;
const SocialLinks = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin: 0;
`;

const Border = styled.div`
    border: 2px solid ${(p) => p.theme.white};
    border-radius: 5px;
    padding: 0.3rem 0.6rem;
    margin-right: 1.9rem;

    svg {
        font-size: 2.7rem;
        line-height: 1;
        color: ${(p) => p.theme.white};
        cursor: pointer;
    }
`;
