import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import styled from "styled-components";
import { respond, SectionWide, Content, Para1 } from "../../../styles";
import Poster from "./poster";

export default function ServicesComponent() {
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
    <SectionWide ref={target}>
      <Background>
        <Content>
          <Layout>
            <Card1>
              <ImageContainer>
                <Image
                  src="/static/img/logo.svg"
                  alt="logo"
                  width="98"
                  height="68"
                />
              </ImageContainer>
              <Para1>
                Onze servers draaien op een van de meest beveiligde omgevingen
                en volgens de strengste veiligheidsregels. Wij zorgen ook voor
                encrypted communicatie tussen onze servers en bezoekers van jouw
                website. Daarvoor maken we gebruik van SSL protocols, zodat
                belangrijke wachtwoorden of persoonlijke gegevens niet zullen
                lekken.
              </Para1>
              <br />
              <Para1>
                Onze klanten krijgen altijd veel persoonlijke aandacht. Omdat de
                beste resultaten alleen mogelijk te bereiken zijn door volledige
                betrokkenheid en een nauwe samenwerking.
              </Para1>
            </Card1>
            <Card2>
              <Poster />
            </Card2>
          </Layout>
        </Content>
      </Background>
    </SectionWide>
  );
}

const Background = styled.div`
  background-image: linear-gradient(
    to top,
    ${(p) => p.theme.white} 50%,
    ${(p) => p.theme.black} 50%
  );

  ${(p) =>
    respond(
      "m",
      `background-image: linear-gradient(
        to left,
        ${p.theme.white} 50%,
        ${p.theme.black} 50%
    );`
    )}
`;
const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 6.7rem 2.7rem;

  ${() => respond("m", "grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);")}
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.7rem 0;

  h2 {
    margin-bottom: 4.7rem;
  }
  h3 {
  }
  ul {
    margin: 2.7rem 0;
  }
`;
const Card1 = styled(Card)`
  ${() => respond("m", "padding: 2.7rem 6.7rem 2.7rem 0;")}
`;
const Card2 = styled(Card)`
  ${() => respond("m", "padding: 2.7rem 0 2.7rem 6.7rem;")}
`;
const ImageContainer = styled.div`
  display: flex;
  margin-bottom: 2.7rem;
`;
