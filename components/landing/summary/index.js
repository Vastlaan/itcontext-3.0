import React, { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styled from "styled-components";
import {
    respond,
    SectionNarrow,
    ButtonEmpty,
    ButtonFull,
    Para1,
} from "../../../styles";

export default function Summary() {
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
                <Text1>
                    <div></div>
                    <Para1 align="center" color="#f6f9ff">
                        Ons doel is om kwalitatieve en betaalbare websites te
                        leveren aan allerlei ondernemingen. Met eigen
                        e-mailadres, SEO plan en Content Management Systeem.
                    </Para1>
                </Text1>
                <Buttons>
                    <Link href="/showroom">
                        <ButtonEmpty>Showroom</ButtonEmpty>
                    </Link>
                    <Link href="/contact">
                        <ButtonFull>Bezoekadres</ButtonFull>
                    </Link>
                </Buttons>
                <Text2>
                    <Para1 align="center" color="#18191F">
                        Wij denken constructief met je mee en passen de beste
                        oplossingen toe. Onze samenwerking is gebaseerd op het
                        begrijpen van jou behoeften en het reageren op jouw
                        verwachtingen
                    </Para1>
                </Text2>
            </Layout>
        </SectionNarrow>
    );
}

const Layout = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: 9rem;
`;
const Flex = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4.7rem 1.9rem;
`;
const Text1 = styled(Flex)`
    position: relative;
    grid-column: 1/-1;
    background-color: ${(p) => p.theme.black};

    ${() => respond("m", "grid-column: 1/3;")}

    div {
        position: absolute;
        top: 0;
        left: 0;
        width: 9rem;
        height: 9rem;
        clip-path: polygon(0 0, 100% 0, 25% 25%, 0% 100%);
        background-color: ${(p) => p.theme.primary};
    }
`;
const Buttons = styled(Flex)`
    grid-column: 1/-1;

    button {
        margin: 1.9rem;
        max-width: 25rem;
        width: 25rem;
    }

    ${() => respond("m", "grid-column: 3/4;")}
`;
const Text2 = styled(Flex)`
    grid-column: 1/-1;

    ${() => respond("m", "grid-column: 1/-1;")}
`;
