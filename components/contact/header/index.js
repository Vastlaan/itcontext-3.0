import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import styled from "styled-components";
import Form from "./form";
import Contact from "./contact";
import { respond, SectionWide, Content, PageNav } from "../../../styles";

export default function Header({ query }) {
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
        <SectionWide ref={target} style={{ backgroundColor: "#18191F" }}>
            <Content style={{ paddingTop: "10rem" }}>
                <PageNav>
                    <p>
                        <Link href="/">Voorpagina</Link>
                        {" > "}
                        <Link href="/contact">Contact</Link>
                    </p>
                </PageNav>
                <Layout>
                    <Contact />
                    <Form query={query} />
                </Layout>
            </Content>
        </SectionWide>
    );
}

const Layout = styled.div`
    display: grid;
    grid-gap: 0;
    grid-template-columns: 1fr 1fr 1fr;

    ${() => respond("m", "grid-gap: 6.7rem;")}
`;
