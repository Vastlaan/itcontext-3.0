import React from "react";
import Link from "next/link";
import styled, { withTheme } from "styled-components";
import {
    respond,
    Heading1,
    ParaLine,
    ButtonFull,
    ButtonEmpty,
    LinkA,
} from "../../../styles";
import { MdCall, MdEmail } from "react-icons/md";

function InfoComponent(props) {
    return (
        <Info>
            <Heading1 color={props.theme.white}>Web Design Studio</Heading1>
            <ParaLine>
                Onderscheid je van de concurrentie. We ontwerpen prachtige en
                unieke websites en helpen je met het creëren van waardevolle
                inhoud.
            </ParaLine>
            <Buttons>
                <Link href="/prijzen">
                    <ButtonEmpty
                        color={props.theme.primary}
                        color2={props.theme.white}
                    >
                        Prijzen
                    </ButtonEmpty>
                </Link>
                <Link href="/contact">
                    <ButtonFull
                        color={props.theme.primary}
                        color2={props.theme.white}
                    >
                        Contact
                    </ButtonFull>
                </Link>
            </Buttons>
            <Contact>
                <Link href="tel:0031682307051">
                    <LinkA color={props.theme.primary}>
                        <MdCall />
                        <span>06 82 30 70 51</span>
                    </LinkA>
                </Link>
                <Link href="mailto:info@itcontext.nl">
                    <LinkA color={props.theme.primary}>
                        <MdEmail />
                        <span>info@itcontext.nl</span>
                    </LinkA>
                </Link>
            </Contact>
        </Info>
    );
}
export default withTheme(InfoComponent);

const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 4.7rem 1.9rem;

    ${() => respond("xxl", "margin: 6.8rem 1.9rem;")}

    h1 {
        margin-bottom: 4.7rem;
    }
    p {
        margin-bottom: 4.7rem;
    }
`;
const Buttons = styled.div`
    display: flex;
    margin: 4.7rem 0;

    button {
        margin-right: 2.7rem;
    }
`;

const Contact = styled.div`
    display: flex;
    flex-direction: column;

    ${() => respond("l", "flex-direction:row;")}

    button {
        margin-right: 2.7rem;
        margin-bottom: 2.7rem;
    }
`;
