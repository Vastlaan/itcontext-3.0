import React, { useState } from "react";
import styled from "styled-components";
import Confirmation from "../utils/confirmation";
import { respond, ButtonEmpty } from "../../styles";

export default function OfferComponent({ offerHeader }) {
    const [displayConfirmation, setDisplayConfirmation] = useState(false);
    const [email, setEmail] = useState("");

    function sendOffer(e) {
        e.preventDefault();

        const offerFormData = { email };

        console.log(email);

        fetch("/api/sendOffer", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(offerFormData),
        })
            .then((res) => res.json())
            .then((d) => {
                if (d.msg === "Sucess") {
                    return setDisplayConfirmation(true);
                }
            })
            .catch((e) => console.error(e));
    }

    return (
        <>
            <Offer onSubmit={sendOffer}>
                <h3>{offerHeader}</h3>
                <label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        placeholder="E-mail"
                    />
                </label>
                <ButtonEmpty type="submit" color="#c0392b" color2="white">
                    Aanvragen
                </ButtonEmpty>
            </Offer>
            {displayConfirmation && (
                <Confirmation
                    setDisplayConfirmation={setDisplayConfirmation}
                    heading="Bedankt voor uw aanvraag"
                    text="We hebben jouw offerte zojuist gestuurd."
                />
            )}
        </>
    );
}
const Offer = styled.form`
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
