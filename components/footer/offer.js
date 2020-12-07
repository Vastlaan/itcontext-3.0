import React from "react";
import styled from "styled-components";
import { respond, ButtonEmpty } from "../../styles";

export default function OfferComponent({ offerHeader }) {
    return (
        <Offer>
            <h3>{offerHeader}</h3>
            <input type="text" placeholder="E-mail" />
            <ButtonEmpty color="#c0392b" color2="white">
                Aanvragen
            </ButtonEmpty>
        </Offer>
    );
}
const Offer = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 2.7rem;
    grid-column: 1/-1;
    flex-direction: column;

    ${() => respond("m", "flex-direction: row; align-items: center;")}

    h3 {
        font-weight: 600;
        color: ${(p) => p.theme.white};
        line-height: 1.3;
        font-size: 1.9rem;
        margin-right: 0.9rem;
    }

    input {
        max-width: 35rem;
        border: none;
        padding: 1.45rem 1.9rem;
        border-radius: 3px;
        margin: 2.7rem 0rem;

        ${() => respond("m", "margin: 2.7rem 1.3rem;")}

        &:active,
        :focus {
            outline: none;
            box-shadow: 0 0 1rem rgba(255, 255, 255, 0.6);
        }
    }

    button {
        &:hover {
            background-color: transparent;
            border: 1px solid ${(p) => p.theme.white};
        }
    }
`;
