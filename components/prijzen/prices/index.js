import React, { useContext, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Context } from "../../../store";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { respond, SectionNarrow, HeadingLine } from "../../../styles";

export default function PricesComponent() {
    const { store, dispatch } = useContext(Context);
    const { diensten } = store;
    const target = useRef();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(target.current, {
            opacity: 0,
            y: 100,
            duration: 0.3,
            scrollTrigger: {
                trigger: target.current,
                toggleActions: "restart none none none",
            },
        });
    }, []);

    return (
        <SectionNarrow ref={target}>
            <Layout>
                <Main>
                    <HeadingLine>
                        Overige <span>Prijzen</span>
                    </HeadingLine>
                    <Menu>
                        {diensten.map((dienst, i) => {
                            return (
                                <Link
                                    key={`dienst-${dienst.path}`}
                                    href={`/diensten/${dienst.path}`}
                                >
                                    <li>
                                        {dienst.name}{" "}
                                        <span>va. &euro;{dienst.price}</span>
                                    </li>
                                </Link>
                            );
                        })}
                    </Menu>
                </Main>
                <Logo>
                    <Image
                        src="/static/img/logoPlane.svg"
                        alt="logo sign"
                        width="215"
                        height="150"
                    />
                </Logo>
            </Layout>
        </SectionNarrow>
    );
}

const Layout = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2.7rem;
    padding: 6.7rem 2.7rem;

    h2 {
        margin-bottom: 4.7rem;
    }
`;
const Main = styled.div`
    display: flex;
    flex-direction: column;
    grid-column: 1/-1;

    ${() => respond("m", "grid-column: 1/3;")}
`;
const Menu = styled.ul`
    list-style: none;
    width: 100%;

    li {
        width: 100%;
        font-size: 1.9rem;
        font-weight: 800;
        color: ${(p) => p.theme.black};
        display: grid;
        grid-template-columns: 1fr 18rem;
        margin: 1.9rem 0;
        transition: all 0.3s;

        span {
            text-align: right;
            font-weight: 800;
        }

        &:hover {
            cursor: pointer;
            text-decoration: underline;
        }
    }
`;
const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
