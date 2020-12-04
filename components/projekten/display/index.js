import React, { useState } from "react";
import styled from "styled-components";
import {
    respond,
    SectionNarrow,
    Heading1,
    Para1,
    Social,
} from "../../../styles";
import { MdClose } from "react-icons/md";

export default function Display({
    imgsm1,
    imgsm2,
    imgsm3,
    imgl1,
    imgl2,
    imgl3,
    imgl4,
    imgl5,
    headline,
    p1,
    p2,
    p3,
    p4,
}) {
    const [full, setFull] = useState(null);

    return (
        <SectionNarrow>
            <Layout>
                <Heading>
                    <Heading1 color="white">
                        {headline
                            .split(" ")
                            .map((w, i, a) =>
                                i !== a.length - 1 ? (
                                    <strong key={i * 2.17}>{w} </strong>
                                ) : (
                                    <span key={i * 2.17}>{w} </span>
                                )
                            )}
                    </Heading1>
                </Heading>
                <P1>{p1}</P1>
                <Image1 onClick={() => setFull(imgl1)}>
                    <img src={imgl1} alt="website design" />
                </Image1>
                <P2>{p2}</P2>
                <Image2 onClick={() => setFull(imgl2)}>
                    <img src={imgl2} alt="website design" />
                </Image2>
                <Image3 onClick={() => setFull(imgsm1)}>
                    <img src={imgsm1} alt="website design" />
                </Image3>
                <P3>{p3}</P3>
                <Image4 onClick={() => setFull(imgl3)}>
                    <img src={imgl3} alt="website design" />
                </Image4>
                <Image5 onClick={() => setFull(imgsm2)}>
                    <img src={imgsm2} alt="website design" />
                </Image5>
                <Image6 onClick={() => setFull(imgl4)}>
                    <img src={imgl4} alt="website design" />
                </Image6>
                <P4>{p4}</P4>
                <Image7 onClick={() => setFull(imgl5)}>
                    <img src={imgl5} alt="website design" />
                </Image7>
                <Image8 onClick={() => setFull(imgsm3)}>
                    <img src={imgsm3} alt="website design" />
                </Image8>
            </Layout>
            {full && (
                <Full>
                    <Social onClick={() => setFull(null)}>
                        <MdClose />
                    </Social>
                    <img src={full} alt="website design" />
                </Full>
            )}
        </SectionNarrow>
    );
}

const Layout = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 2.7rem;
    align-items: start;
    padding: 4.7rem 2.7rem;
    background-color: ${(p) => p.theme.black};
    margin-bottom: 4.7rem;

    ${() => respond("xl", "grid-template-columns: 1fr 1fr 1fr;")}
`;

const Heading = styled.div`
    justify-self: center;
    grid-row: auto;
    grid-column: 1/-1;

    ${() => respond("xl", "grid-column: 2/3; grid-row: 1/2;")}
`;

const P1 = styled(Para1)`
    justify-self: center;
    margin: 4.7rem auto;
    grid-row: auto;
    grid-column: 1/-1;
    ${() => respond("xl", "grid-column: 3/4; grid-row: 1/2;")}
`;
const P2 = styled(Para1)`
    justify-self: center;
    margin: 4.7rem auto;
    grid-row: auto;
    grid-column: 1/-1;
    ${() => respond("xl", "grid-column: 3/4; grid-row: 2/3;")}
`;
const P3 = styled(Para1)`
    justify-self: center;
    margin: 4.7rem auto;
    grid-row: auto;
    grid-column: 1/-1;
    ${() => respond("xl", "grid-column: 1/2; grid-row: 3/4;")}
`;
const P4 = styled(Para1)`
    justify-self: center;
    margin: 4.7rem auto;
    grid-row: auto;
    grid-column: 1/-1;
    ${() => respond("xl", "grid-column: 1/2; grid-row: 6/7;")}
`;
const Image = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s;
    border-radius: 3px;

    &:hover {
        position: relative;

        &:after {
            content: "Full size";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.3);
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 2.7rem;
            color: white;
        }
    }

    img {
        width: 100%;
        object-fit: cover;
        object-position: center;
        ${() => respond("m", "width: 70%;")}
        ${() => respond("xl", "width: 100%;")}
    }
`;
const Image1 = styled(Image)`
    grid-column: 1/-1;
    grid-row: auto;

    ${() => respond("xl", "grid-column: 1/2; grid-row: 1/3;")}
`;
const Image2 = styled(Image)`
    grid-column: 1/-1;
    grid-row: auto;

    ${() => respond("xl", "grid-column: 2/3; grid-row: 2/4;")}
`;
const Image3 = styled(Image)`
    grid-column: 1/-1;
    grid-row: auto;

    ${() => respond("xl", "grid-column: 3/4; grid-row: 3/4;")}
`;
const Image4 = styled(Image)`
    grid-column: 1/-1;
    grid-row: auto;

    ${() => respond("xl", "grid-column: 1/2; grid-row: 4/6;")}
`;
const Image5 = styled(Image)`
    grid-column: 1/-1;
    grid-row: auto;

    ${() => respond("xl", "grid-column: 2/3; grid-row: 4/5;")}
`;

const Image6 = styled(Image)`
    grid-column: 1/-1;
    grid-row: auto;

    ${() => respond("xl", "grid-column: 3/4; grid-row: 4/6;")}
`;
const Image7 = styled(Image)`
    grid-column: 1/-1;
    grid-row: auto;

    ${() => respond("xl", "grid-column: 2/3; grid-row: 5/7;")}
`;
const Image8 = styled(Image)`
    grid-column: 1/-1;
    grid-row: auto;

    ${() => respond("xl", "grid-column: 3/4; grid-row: 6/7;")}
`;

const Full = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.9);

    button {
        position: absolute;
        top: 2.7rem;
        right: 4.7rem;
        border: 1px solid snow;

        svg {
            color: snow;
        }
    }

    img {
        max-height: 90%;
        max-width: 90%;
        margin: 0 auto;
    }
`;
