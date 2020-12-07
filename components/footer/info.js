import React from "react";
import styled from "styled-components";
import Image from "next/image";

export default function InfoComponent({
    name,
    header,
    address,
    phone,
    phoneNL,
    email,
}) {
    return (
        <Info>
            <LogoContainer>
                <Image
                    src="/static/img/logo.svg"
                    alt="logo IT Context"
                    width="100"
                    height="69"
                />
            </LogoContainer>
            <h4>{name}</h4>
            <h4>{header}</h4>
            <div>
                <p>
                    {address.street},{address.city}, {address.land}{" "}
                </p>
                <p>
                    Mobiel: <a href={`tel:${phone}`}>{phone}</a> (Pools,
                    Nederlands)
                </p>
                <p>
                    Telefoon: <a href={`tel:${phoneNL}`}>{phoneNL}</a>{" "}
                    (Nederlands)
                </p>
                <p>
                    E-mailadres: <a href={`mailto:${email}`}>{email}</a>
                </p>
            </div>
        </Info>
    );
}

const Info = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 2.7rem;
    flex: 1;

    h3 {
        font-size: 3.3rem;
        line-height: 1;
        color: ${(p) => p.theme.white};
    }
    h4 {
        font-size: 2.7rem;
        line-height: 1.3;
        font-weight: 600;
        color: ${(p) => p.theme.white};
    }

    div {
        margin: 2.7rem 0;
        p {
            font-size: 1.9rem;
            line-height: 1.3;
            color: ${(p) => p.theme.white};
            font-weight: 300;
            margin: 0.6rem 0;
            a {
                color: #ebf5fb;
                font-weight: 600;
                transition: all 0.3s;

                &:hover {
                    display: inline-block;
                    transform: scale(1.05);
                }
            }
        }
    }
`;
const LogoContainer = styled.div`
    margin: 0 !important;
    img {
        width: 100%;
    }
`;
