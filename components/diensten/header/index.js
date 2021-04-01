import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import styled, { withTheme } from "styled-components";
import {
    respond,
    Header,
    Content,
    Grid2,
    Heading1,
    ParaLine,
    ButtonEmpty,
    PageNav,
    Info,
} from "../../../styles";

function HeaderDiensten(props) {
    const target = useRef();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(target.current, {
            opacity: 0,
            y: 0,
            duration: 0.3,
            scrollTrigger: {
                trigger: target.current,
                toggleActions: "restart none none none",
            },
        });
    }, []);
    return (
        <Header ref={target}>
            <Content>
                <PageNav>
                    <p>
                        <Link href="/">Voorpagina</Link>
                        {" > "}
                        <Link href="/diensten">Diensten</Link>
                    </p>
                </PageNav>
                <Grid2>
                    <Info>
                        <Heading1 color={props.theme.white}>
                            {"Wat kunnen wij voor u betekenen?"
                                .split(" ")
                                .map((w, i, a) =>
                                    i !== a.length - 1 ? (
                                        <strong key={i * 2.17}>{w} </strong>
                                    ) : (
                                        <span key={i * 2.17}>{w} </span>
                                    )
                                )}
                        </Heading1>
                        <ParaLine>
                            Onderscheid je van de concurrentie. We ontwerpen
                            prachtige en unieke websites en helpen je met het
                            creëren van waardevolle inhoud.
                        </ParaLine>
                        <ButtonEmpty
                            onClick={() =>
                                window.scrollBy({
                                    behavior: "smooth",
                                    top: 600,
                                })
                            }
                            color={props.theme.primary}
                            color2={props.theme.white}
                        >
                            Lees meer
                        </ButtonEmpty>
                    </Info>
                    <Picture>
                        <Image
                            src="/static/img/logoPlane.svg"
                            alt="logo sign"
                            width="215"
                            height="150"
                        />
                    </Picture>
                </Grid2>
            </Content>
        </Header>
    );
}

export default withTheme(HeaderDiensten);

const Picture = styled.div`
    display: none;
    align-items: center;
    justify-content: center;

    ${() => respond("m", "display:flex;")}
`;
