import React from "react";
import styled from "styled-components";
import { respond, Heading2, Para1 } from "../../../styles";
import { RiMapPinLine, RiMailLine, RiPhoneLine } from "react-icons/ri";

export default function ContactComponent() {
    return (
        <Contact>
            <Heading2>Contact</Heading2>
            <Para1>Wij werken van maandag t/m vrijdag 08:00 - 18:00</Para1>
            <a href="https://www.google.com/maps/place/IT+Context/@52.5251571,4.9668958,15z/data=!4m2!3m1!1s0x0:0x8987b357489b4cd3?sa=X&ved=2ahUKEwjV6JL_wrHtAhUGqaQKHQSCCkMQ_BIwKXoECDYQBQ">
                <Field3>
                    <RiMapPinLine />
                    <p>
                        Oostervenne 397 <br />
                        1444 XN Purmerend{" "}
                    </p>
                </Field3>
            </a>
            <a href="mailto:info@itcontext.nl">
                <Field3>
                    <RiMailLine />
                    <p>info@itcontext.nl</p>
                </Field3>
            </a>
            <a href="tel:0031682307051">
                <Field3>
                    <RiPhoneLine />
                    <p>06 82 30 70 51</p>
                </Field3>
            </a>
            <a href="tel:0031299705072">
                <Field3>
                    <RiPhoneLine />
                    <p>(0) 299 70 50 72</p>
                </Field3>
            </a>
        </Contact>
    );
}

const Contact = styled.div`
    grid-column: 1/4;
    grid-row: 1/2;
    display: flex;
    flex-direction: column;
    margin-top: 4.7rem;
    padding: 4.7rem 2.7rem;
    align-items: flex-start;

    ${() => respond("l", "grid-column: 1/2; align-items: stretch;")}

    p {
        margin-bottom: 2.7rem;
    }
`;
const Field3 = styled.button`
    border: 1px solid ${(p) => p.theme.white};
    background-color: transparent;
    transition: all 0.3s;
    display: grid;
    grid-template-columns: 5rem 1fr;
    align-items: center;
    justify-items: center;
    margin-bottom: 2.7rem;
    padding: 0.9rem 1.9rem;
    border-radius: 3px;
    cursor: pointer;
    min-width: 35rem;

    ${() => respond("l", "margin-bottom: 1.9rem;")}

    &:focus,
    :active {
        outline: none;
    }
    &:hover {
        transform: scale(1.05);
    }

    svg {
        font-size: 2.7rem;
        color: ${(p) => p.theme.white};
    }
    p {
        font-size: 1.9rem;
        font-weight: 400;
        margin-bottom: 0;
        color: ${(p) => p.theme.white};
    }
`;
