import React from "react";
import styled from "styled-components";
import { SectionNarrow, HeadingLine, Para1, respond } from "../../../styles";
import { BsGem, BsClockHistory, BsGeoAlt } from "react-icons/bs";

export default function RouteComponent() {
    return (
        <SectionNarrow>
            <Article>
                <Holder>
                    <Headline>
                        <HeadingLine>Openingstijden</HeadingLine>
                    </Headline>
                    <Table>
                        <div>
                            <p>Maandag</p>
                            <p>08:00 - 18:00</p>
                        </div>
                        <div>
                            <p>Dinsdag</p>
                            <p>08:00 - 18:00</p>
                        </div>
                        <div>
                            <p>Woensdag</p>
                            <p>08:00 - 18:00</p>
                        </div>
                        <div>
                            <p>Donderdag</p>
                            <p>08:00 - 18:00</p>
                        </div>
                        <div>
                            <p>Vrijdag</p>
                            <p>08:00 - 18:00</p>
                        </div>
                        <div>
                            <p>Zaterdag</p>
                            <p>gesloten</p>
                        </div>
                        <div>
                            <p>Zondag</p>
                            <p>gesloten</p>
                        </div>
                    </Table>
                </Holder>
                <Holder>
                    <Headline>
                        <HeadingLine>Route</HeadingLine>
                    </Headline>
                    <Map>
                        <iframe
                            title="route-map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.457271526613!2d4.96470711535061!3d52.525160343599815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6015c905be901%3A0x8987b357489b4cd3!2sIT%20Context!5e0!3m2!1sen!2snl!4v1606992831791!5m2!1sen!2snl"
                            frameBorder="0"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex="0"
                        ></iframe>
                    </Map>
                </Holder>
            </Article>
        </SectionNarrow>
    );
}

const Headline = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 2.7rem;

    ${() => respond("l", "justify-content: flex-start;")}

    svg {
        font-size: 2.7rem;
        color: ${(p) => p.theme.primary};
        margin-right: 2.7rem;
    }
`;
const Article = styled.article`
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 2.7rem;
    justify-items: start;
    padding: 2.7rem;

    ${() =>
        respond("l", "grid-template-columns: 1fr 1fr; justify-items: start;")}
`;
const Holder = styled.div`
    margin: 4.7rem 0;
`;
const Table = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 55rem;

    div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 1.9rem;

        p {
            font-size: 1.9rem;
            color: ${(p) => p.theme.greyDark};
            margin-right: 4.7rem;
        }
    }
`;

const Map = styled.div`
    iframe {
        width: 280px;
        height: 250px;

        ${() =>
            respond(
                "s",
                `width: 500px;
                height: 350px;`
            )}

        ${() =>
            respond(
                "xl",
                `width: 650px;
                height: 400px;`
            )}
    }
`;
