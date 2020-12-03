import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import Confirmation from "../../utils/confirmation";
import { respond, Heading2, Para1, ButtonEmpty } from "../../../styles";

export default function FormComponent({ submitContactForm }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");
    const [isChecked, setisChecked] = useState(false);
    const [warning, setWarning] = useState("");
    const [displayConfirmation, setDisplayConfirmation] = useState(false);

    function submitContactForm(e) {
        e.preventDefault();
        if (!isChecked) {
            return setWarning(
                "Verklar aub dat je met onze Algemene Voorwaarden kennis hebt gemaakt"
            );
        }
        const data = {
            name,
            email,
            msg,
        };
        console.log(data);

        fetch("/api/contact-form-submition", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((d) => {
                if (d === "Sucess") {
                    return console.log("Done. Set confirmation.");
                }
            })
            .catch((e) => console.error(e));

        setWarning("");
    }

    return (
        <Form onSubmit={submitContactForm}>
            <Heading2>Formulier</Heading2>
            <Para1>
                Neem contact met ons mee. Wij zijn je graag van dienst!
            </Para1>
            <Panel>
                <Info>
                    <Field>
                        <label htmlFor="name">Naam:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="naam"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Field>
                    <Field>
                        <label htmlFor="email">E-mail:</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="e-mail"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Field>
                    <Field2>
                        <input
                            type="checkbox"
                            id="policy"
                            name="policy"
                            onChange={() =>
                                setisChecked((prevState) => !prevState)
                            }
                        />
                        <label htmlFor="policy">
                            Ik verklaar dat ik mee ben met{" "}
                            <Link href="/voorwaarden">
                                Algemene Voorwaarden
                            </Link>{" "}
                            en <Link href="/cookies"> Cookies Policy</Link>
                        </label>
                    </Field2>
                </Info>
                <Message>
                    <Field>
                        <label htmlFor="msg">Bericht:</label>
                        <textarea
                            name="msg"
                            id="msg"
                            cols="30"
                            rows="10"
                            value={msg}
                            onChange={(e) => setMsg(e.target.value)}
                            required
                        ></textarea>
                    </Field>
                </Message>
                <Field>
                    {warning && <p style={{ color: "orangered" }}>{warning}</p>}
                    <ButtonEmpty color="#c0392b" color2="white" type="submit">
                        Versturen
                    </ButtonEmpty>
                </Field>
            </Panel>
            {displayConfirmation && (
                <Confirmation
                    setDisplayConfirmation={setDisplayConfirmation}
                    heading="Bedankt voor uw bericht"
                    text="Wij streven ernaar om je vraag binnen 2 werkdagen te beantwoorden."
                />
            )}
        </Form>
    );
}
const Form = styled.form`
    grid-column: 1/4;
    grid-row: 2/3;
    display: flex;
    flex-direction: column;
    padding: 2.7rem;

    ${() =>
        respond(
            "l",
            "grid-column: 2/4;grid-row: 1/2; margin-top: 4.7rem; padding: 4.7rem 2.7rem;"
        )}
`;
const Panel = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 1.9rem;
    margin-top: 2.7rem;

    ${() => respond("s", "grid-template-columns: 1fr 1fr;")}
`;
const Info = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 45rem;
`;
const Field = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1.9rem;

    label {
        color: ${(p) => p.theme.primary};
        font-size: 1.9rem;
    }
    input,
    textarea {
        border: 1px solid ${(p) => p.theme.primary};
        padding: 0.9rem 1.9rem;
        border-radius: 3px;
        max-width: 35rem;

        &:focus,
        :active {
            outline: none;
            box-shadow: 0 0 1rem rgba(255, 255, 255, 0.6);
        }
    }
    button {
        align-self: flex-start;
    }
`;
const Field2 = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1.9rem;

    label {
        color: ${(p) => p.theme.grey};
        font-size: 1.3rem;

        a {
            color: ${(p) => p.theme.primary};
        }
    }
    input {
        border: 1px solid ${(p) => p.theme.primary};
        padding: 0.9rem 1.9rem;
        border-radius: 3px;
        margin-right: 1.9rem;
        max-widht: 35rem;

        &:focus,
        :active {
            outline: none;
            box-shadow: 0 0 1rem rgba(255, 255, 255, 0.6);
        }
    }
`;
const Message = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 45rem;
`;
